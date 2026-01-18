import { Request, Response, NextFunction } from 'express';
import { AdminRole } from '@/types';

/**
 * Admin Panel Security Middleware and Utilities
 * Requirements: 22.2, 22.3, 22.4, 22.5
 * 
 * This module provides:
 * - CSRF protection for admin forms
 * - Rate limiting for login attempts
 * - Audit logging for admin actions
 * - Data backup/recovery procedures
 */

// ============================================================================
// CSRF Protection
// ============================================================================

interface CSRFToken {
  token: string;
  createdAt: Date;
  expiresAt: Date;
}

class CSRFProtection {
  private tokens: Map<string, CSRFToken> = new Map();
  private readonly TOKEN_LIFETIME = 1000 * 60 * 60; // 1 hour

  /**
   * Generate a CSRF token for the user session
   */
  generateToken(sessionId: string): string {
    const token = this.createRandomToken();
    const now = new Date();

    this.tokens.set(token, {
      token,
      createdAt: now,
      expiresAt: new Date(now.getTime() + this.TOKEN_LIFETIME),
    });

    return token;
  }

  /**
   * Verify CSRF token validity
   */
  verifyToken(token: string): boolean {
    const csrfToken = this.tokens.get(token);

    if (!csrfToken) {
      return false;
    }

    // Check expiration
    if (new Date() > csrfToken.expiresAt) {
      this.tokens.delete(token);
      return false;
    }

    return true;
  }

  /**
   * Invalidate a token after use
   */
  invalidateToken(token: string): void {
    this.tokens.delete(token);
  }

  /**
   * Clean up expired tokens
   */
  cleanupExpiredTokens(): void {
    const now = new Date();
    for (const [key, token] of this.tokens.entries()) {
      if (now > token.expiresAt) {
        this.tokens.delete(key);
      }
    }
  }

  private createRandomToken(): string {
    return Math.random().toString(36).substring(2, 15) +
           Math.random().toString(36).substring(2, 15);
  }
}

// ============================================================================
// Rate Limiting
// ============================================================================

interface RateLimitEntry {
  attempts: number;
  firstAttempt: Date;
  lockedUntil?: Date;
}

class RateLimiter {
  private attempts: Map<string, RateLimitEntry> = new Map();
  private readonly MAX_ATTEMPTS = 5;
  private readonly WINDOW_MS = 1000 * 60 * 15; // 15 minutes
  private readonly LOCKOUT_MS = 1000 * 60 * 30; // 30 minutes

  /**
   * Check if IP/user is allowed to attempt login
   */
  isAllowed(identifier: string): boolean {
    const entry = this.attempts.get(identifier);

    if (!entry) {
      return true;
    }

    // Check if currently locked
    if (entry.lockedUntil && new Date() < entry.lockedUntil) {
      return false;
    }

    // Check if window has expired
    const windowExpired = new Date().getTime() - entry.firstAttempt.getTime() > this.WINDOW_MS;
    if (windowExpired) {
      this.attempts.delete(identifier);
      return true;
    }

    return entry.attempts < this.MAX_ATTEMPTS;
  }

  /**
   * Record a failed login attempt
   */
  recordFailure(identifier: string): void {
    const entry = this.attempts.get(identifier);

    if (!entry) {
      this.attempts.set(identifier, {
        attempts: 1,
        firstAttempt: new Date(),
      });
      return;
    }

    entry.attempts++;

    // Lock account after max attempts
    if (entry.attempts >= this.MAX_ATTEMPTS) {
      entry.lockedUntil = new Date(new Date().getTime() + this.LOCKOUT_MS);
    }

    this.attempts.set(identifier, entry);
  }

  /**
   * Clear attempts for successful login
   */
  clearAttempts(identifier: string): void {
    this.attempts.delete(identifier);
  }

  /**
   * Get remaining attempts before lockout
   */
  getRemainingAttempts(identifier: string): number {
    const entry = this.attempts.get(identifier);
    if (!entry) return this.MAX_ATTEMPTS;

    const remaining = this.MAX_ATTEMPTS - entry.attempts;
    return Math.max(0, remaining);
  }

  /**
   * Get lockout time remaining in seconds
   */
  getLockedUntil(identifier: string): number | null {
    const entry = this.attempts.get(identifier);
    if (!entry?.lockedUntil) return null;

    const remaining = entry.lockedUntil.getTime() - new Date().getTime();
    return Math.max(0, Math.ceil(remaining / 1000));
  }
}

// ============================================================================
// Audit Logging
// ============================================================================

export interface AuditLog {
  id: string;
  timestamp: Date;
  userId: string;
  action: 'LOGIN' | 'LOGOUT' | 'CREATE' | 'UPDATE' | 'DELETE' | 'EXPORT' | 'ACCESS';
  resource: string;
  changes?: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  status: 'SUCCESS' | 'FAILURE';
  details?: string;
}

class AuditLogger {
  private logs: AuditLog[] = [];
  private readonly MAX_LOGS = 10000;

  /**
   * Log an admin action
   */
  logAction(action: AuditLog): void {
    // Add ID if not present
    if (!action.id) {
      action.id = Math.random().toString(36).substr(2, 9);
    }

    this.logs.push(action);

    // Keep only recent logs if exceeding limit
    if (this.logs.length > this.MAX_LOGS) {
      this.logs = this.logs.slice(-this.MAX_LOGS);
    }
  }

  /**
   * Get logs filtered by criteria
   */
  getLogs(filters?: {
    userId?: string;
    action?: string;
    resource?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
  }): AuditLog[] {
    let filtered = [...this.logs];

    if (filters?.userId) {
      filtered = filtered.filter(log => log.userId === filters.userId);
    }

    if (filters?.action) {
      filtered = filtered.filter(log => log.action === filters.action);
    }

    if (filters?.resource) {
      filtered = filtered.filter(log => log.resource === filters.resource);
    }

    if (filters?.startDate) {
      filtered = filtered.filter(log => log.timestamp >= filters.startDate!);
    }

    if (filters?.endDate) {
      filtered = filtered.filter(log => log.timestamp <= filters.endDate!);
    }

    // Return most recent first, limited by count
    return filtered.reverse().slice(0, filters?.limit || 100);
  }

  /**
   * Get summary statistics
   */
  getStats(timeframe: 'day' | 'week' | 'month' = 'day'): {
    totalActions: number;
    actionsByType: Record<string, number>;
    failedAttempts: number;
    uniqueUsers: Set<string>;
  } {
    const now = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysBack = timeframe === 'day' ? 1 : timeframe === 'week' ? 7 : 30;
    const cutoff = new Date(now.getTime() - daysBack * msPerDay);

    const recent = this.logs.filter(log => log.timestamp >= cutoff);

    const actionsByType: Record<string, number> = {};
    const uniqueUsers = new Set<string>();
    let failedAttempts = 0;

    for (const log of recent) {
      actionsByType[log.action] = (actionsByType[log.action] || 0) + 1;
      uniqueUsers.add(log.userId);
      if (log.status === 'FAILURE') {
        failedAttempts++;
      }
    }

    return {
      totalActions: recent.length,
      actionsByType,
      failedAttempts,
      uniqueUsers,
    };
  }

  /**
   * Export logs for backup
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }
}

// ============================================================================
// Data Backup/Recovery
// ============================================================================

export interface DataBackup {
  id: string;
  createdAt: Date;
  type: 'manual' | 'automated';
  size: number;
  data: Record<string, any>;
  checksum: string;
}

class BackupManager {
  private backups: Map<string, DataBackup> = new Map();
  private readonly MAX_BACKUPS = 10;

  /**
   * Create a backup of admin data
   */
  createBackup(
    data: Record<string, any>,
    type: 'manual' | 'automated' = 'manual'
  ): string {
    const backup: DataBackup = {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      type,
      size: JSON.stringify(data).length,
      data,
      checksum: this.calculateChecksum(data),
    };

    this.backups.set(backup.id, backup);

    // Keep only recent backups
    if (this.backups.size > this.MAX_BACKUPS) {
      const oldest = Array.from(this.backups.values())
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())[0];
      this.backups.delete(oldest.id);
    }

    return backup.id;
  }

  /**
   * Restore data from backup
   */
  restoreBackup(backupId: string): Record<string, any> | null {
    const backup = this.backups.get(backupId);
    if (!backup) return null;

    // Verify backup integrity
    if (backup.checksum !== this.calculateChecksum(backup.data)) {
      throw new Error('Backup checksum verification failed - data may be corrupted');
    }

    return backup.data;
  }

  /**
   * List available backups
   */
  listBackups(): DataBackup[] {
    return Array.from(this.backups.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  /**
   * Delete a backup
   */
  deleteBackup(backupId: string): boolean {
    return this.backups.delete(backupId);
  }

  private calculateChecksum(data: Record<string, any>): string {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
  }
}

// ============================================================================
// Exports
// ============================================================================

export const csrfProtection = new CSRFProtection();
export const rateLimiter = new RateLimiter();
export const auditLogger = new AuditLogger();
export const backupManager = new BackupManager();

/**
 * Express middleware for CSRF protection
 */
export const csrfMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'GET') {
    const token = csrfProtection.generateToken(req.sessionID || 'default');
    res.locals.csrfToken = token;
  } else if (req.method === 'POST') {
    const token = req.body.csrfToken || req.headers['x-csrf-token'];
    if (!csrfProtection.verifyToken(token as string)) {
      return res.status(403).json({ error: 'Invalid CSRF token' });
    }
    csrfProtection.invalidateToken(token as string);
  }
  next();
};

/**
 * Express middleware for rate limiting on login
 */
export const loginRateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const identifier = req.ip || 'unknown';

  if (!rateLimiter.isAllowed(identifier)) {
    const locked = rateLimiter.getLockedUntil(identifier);
    return res.status(429).json({
      error: 'Too many login attempts. Please try again later.',
      retryAfter: locked,
    });
  }

  next();
};
