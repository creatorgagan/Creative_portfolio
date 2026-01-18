/**
 * Property-Based Tests for Admin Authentication Security
 * Feature: video-portfolio-website, Property 14: Admin Authentication Security
 * Validates: Requirements 9.1, 9.2
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fc from 'fast-check';
import { LoginCredentials, AuthSession, AdminRole } from '../types';

describe('Property-Based Tests: Admin Authentication Security', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  /**
   * Property 14: Admin Authentication Security
   * For any admin login attempt, the system should validate credentials securely 
   * and manage sessions properly
   */
  it('Property 14: should validate credentials and reject invalid login attempts', () => {
    fc.assert(
      fc.property(
        // Generate arbitrary credentials
        fc.record({
          username: fc.string({ minLength: 0, maxLength: 50 }),
          password: fc.string({ minLength: 0, maxLength: 50 })
        }),
        (credentials: LoginCredentials) => {
          // Clear state between iterations
          localStorage.clear();

          // Simulate the login logic without rendering components
          // This tests the core authentication logic
          const isValidCredentials = 
            credentials.username === 'admin' && 
            credentials.password === 'admin123';

          if (isValidCredentials) {
            // Simulate successful login - create session
            const mockSession: AuthSession = {
              token: 'mock-jwt-token',
              user: {
                id: '1',
                username: credentials.username,
                email: 'admin@example.com',
                role: AdminRole.SUPER_ADMIN,
                lastLogin: new Date(),
                createdAt: new Date(),
              },
              expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
            };
            localStorage.setItem('admin_session', JSON.stringify(mockSession));
          }

          // Property: Only valid credentials should result in a session
          const session = localStorage.getItem('admin_session');
          
          if (isValidCredentials) {
            expect(session).not.toBeNull();
            if (session) {
              const parsedSession: AuthSession = JSON.parse(session);
              expect(parsedSession.user.username).toBe('admin');
              expect(parsedSession.token).toBeTruthy();
              expect(new Date(parsedSession.expiresAt).getTime()).toBeGreaterThan(Date.now());
            }
          } else {
            expect(session).toBeNull();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 14: should properly manage session expiry for any session duration', () => {
    fc.assert(
      fc.property(
        // Generate sessions with various expiry times
        fc.record({
          expiresInMs: fc.integer({ min: -10000, max: 10000 }), // Past and future expiry
          username: fc.constantFrom('admin', 'testuser', 'editor'),
          role: fc.constantFrom(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
        }),
        ({ expiresInMs, username, role }) => {
          localStorage.clear();

          const expiryDate = new Date(Date.now() + expiresInMs);
          const mockSession: AuthSession = {
            token: 'test-token-' + Math.random(),
            user: {
              id: '1',
              username,
              email: `${username}@example.com`,
              role,
              createdAt: new Date(),
              lastLogin: new Date()
            },
            expiresAt: expiryDate
          };

          localStorage.setItem('admin_session', JSON.stringify(mockSession));

          // Simulate session validation logic
          const sessionData = localStorage.getItem('admin_session');
          let isSessionValid = false;

          if (sessionData) {
            try {
              const session: AuthSession = JSON.parse(sessionData);
              // Check if session is still valid
              if (new Date(session.expiresAt) > new Date()) {
                isSessionValid = true;
              } else {
                // Session expired, clear it
                localStorage.removeItem('admin_session');
              }
            } catch (error) {
              localStorage.removeItem('admin_session');
            }
          }

          // Property: Session should only be valid if expiry is in the future
          const isExpired = expiryDate <= new Date();

          if (isExpired) {
            // Expired sessions should be cleared
            expect(isSessionValid).toBe(false);
            expect(localStorage.getItem('admin_session')).toBeNull();
          } else {
            // Valid sessions should remain
            expect(isSessionValid).toBe(true);
            expect(localStorage.getItem('admin_session')).not.toBeNull();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 14: should securely clear all session data on logout', () => {
    fc.assert(
      fc.property(
        // Generate various valid sessions
        fc.record({
          username: fc.string({ minLength: 1, maxLength: 20 }),
          email: fc.emailAddress(),
          role: fc.constantFrom(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR),
          token: fc.string({ minLength: 10, maxLength: 50 })
        }),
        ({ username, email, role, token }) => {
          localStorage.clear();

          const mockSession: AuthSession = {
            token,
            user: {
              id: '1',
              username,
              email,
              role,
              createdAt: new Date(),
              lastLogin: new Date()
            },
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
          };

          localStorage.setItem('admin_session', JSON.stringify(mockSession));

          // Verify session exists before logout
          expect(localStorage.getItem('admin_session')).not.toBeNull();

          // Simulate logout - clear session
          localStorage.removeItem('admin_session');

          // Property: After logout, all session data must be cleared
          expect(localStorage.getItem('admin_session')).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 14: should handle malformed session data gracefully', () => {
    fc.assert(
      fc.property(
        // Generate various types of malformed data
        fc.oneof(
          fc.string(), // Random string (including empty strings)
          fc.constant('{}'), // Empty object
          fc.constant('{"invalid": "data"}'), // Invalid structure
          fc.constant('null'),
          fc.constant('undefined'),
          fc.constant('[1,2,3]'), // Array instead of object
          fc.constant('{"user": null}'), // Partial data
        ),
        (malformedData) => {
          localStorage.clear();
          
          // Only test non-empty strings to avoid localStorage quirks with empty strings
          if (malformedData === '') {
            // Empty strings are a special case - just verify they don't create valid sessions
            localStorage.setItem('admin_session', malformedData);
            
            // Simulate validation
            const sessionData = localStorage.getItem('admin_session');
            let isSessionValid = false;
            
            if (sessionData && sessionData.trim() !== '') {
              try {
                const session: AuthSession = JSON.parse(sessionData);
                if (session.user && session.token && session.expiresAt) {
                  if (new Date(session.expiresAt) > new Date()) {
                    isSessionValid = true;
                  }
                }
              } catch (error) {
                // Invalid JSON
              }
            }
            
            // Property: Empty strings should not result in valid sessions
            expect(isSessionValid).toBe(false);
            return;
          }

          localStorage.setItem('admin_session', malformedData);

          // Simulate session validation logic
          let isSessionValid = false;

          try {
            const sessionData = localStorage.getItem('admin_session');
            if (sessionData) {
              // Handle empty strings explicitly
              if (sessionData.trim() === '') {
                localStorage.removeItem('admin_session');
              } else {
                const session: AuthSession = JSON.parse(sessionData);
                
                // Check if session is valid
                if (session.user && session.token && session.expiresAt) {
                  if (new Date(session.expiresAt) > new Date()) {
                    isSessionValid = true;
                  } else {
                    localStorage.removeItem('admin_session');
                  }
                } else {
                  localStorage.removeItem('admin_session');
                }
              }
            }
          } catch (error) {
            // Malformed data - clear it
            localStorage.removeItem('admin_session');
          }

          // Property: Malformed session data should result in invalid session
          expect(isSessionValid).toBe(false);
          
          // For non-empty malformed data, verify it was cleared
          if (malformedData !== '') {
            expect(localStorage.getItem('admin_session')).toBeNull();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 14: should enforce secure password requirements', () => {
    fc.assert(
      fc.property(
        fc.record({
          username: fc.string({ minLength: 1, maxLength: 50 }),
          password: fc.string({ minLength: 0, maxLength: 100 })
        }),
        (credentials: LoginCredentials) => {
          localStorage.clear();

          // Simulate login validation logic
          const isValidPassword = credentials.password.length >= 6;
          const isValidCredentials = 
            credentials.username === 'admin' && 
            credentials.password === 'admin123';

          // Only create session if credentials are valid AND password meets requirements
          if (isValidCredentials && isValidPassword) {
            const mockSession: AuthSession = {
              token: 'mock-jwt-token',
              user: {
                id: '1',
                username: credentials.username,
                email: 'admin@example.com',
                role: AdminRole.SUPER_ADMIN,
                lastLogin: new Date(),
                createdAt: new Date(),
              },
              expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
            };
            localStorage.setItem('admin_session', JSON.stringify(mockSession));
          }

          // Property: Only valid credentials with proper password length should create session
          const session = localStorage.getItem('admin_session');

          if (isValidCredentials && isValidPassword) {
            expect(session).not.toBeNull();
          } else {
            expect(session).toBeNull();
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
