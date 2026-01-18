# Admin Panel Security Configuration Guide

## Overview

The video portfolio website admin panel includes comprehensive security measures to protect sensitive data and prevent unauthorized access.

## Security Features

### 1. Authentication & Authorization

#### Session Management
```typescript
// Session stored in localStorage with expiration
{
  token: "mock-jwt-token",
  user: {
    id: "1",
    username: "admin",
    email: "admin@example.com",
    role: "super_admin"
  },
  expiresAt: "2026-01-19T12:52:40.000Z"  // 24 hours
}
```

#### Roles
- **SUPER_ADMIN:** Full access to all features
- **ADMIN:** Content and media management
- **EDITOR:** Content editing only

#### Login Credentials (Demo)
- **Username:** `admin`
- **Password:** `admin123`

### 2. CSRF (Cross-Site Request Forgery) Protection

The admin panel includes CSRF token protection:

```typescript
// Generate CSRF token on page load
const token = csrfProtection.generateToken(sessionId);

// Validate on form submission
csrfProtection.verifyToken(token);

// Invalidate after use
csrfProtection.invalidateToken(token);
```

**Token Lifecycle:**
- Generated: On form page load
- Validity: 1 hour
- Verified: On form submission
- Invalidated: After successful submission

### 3. Rate Limiting

Protect admin login from brute-force attacks:

```typescript
// Configuration
- Max Attempts: 5
- Time Window: 15 minutes
- Lockout Duration: 30 minutes

// After 5 failed attempts in 15 minutes:
// Account locked for 30 minutes
// Error message: "Too many login attempts. Please try again later."
```

### 4. Audit Logging

Every admin action is logged:

```typescript
{
  id: "a1b2c3d4e5",
  timestamp: "2026-01-18T12:52:40.000Z",
  userId: "admin",
  action: "UPDATE",           // LOGIN, LOGOUT, CREATE, UPDATE, DELETE, EXPORT, ACCESS
  resource: "content/video1",
  changes: { status: "published" },
  ipAddress: "192.168.1.1",
  userAgent: "Mozilla/5.0...",
  status: "SUCCESS"           // SUCCESS or FAILURE
}
```

**Audit Log Filtering:**
```typescript
auditLogger.getLogs({
  userId: "admin",
  action: "UPDATE",
  startDate: new Date(Date.now() - 7*24*60*60*1000),
  limit: 100
});
```

### 5. Data Backup & Recovery

Create secure backups with integrity verification:

```typescript
// Create backup
const backupId = backupManager.createBackup(adminData, 'manual');

// List backups
const backups = backupManager.listBackups();

// Restore backup (verifies checksum)
const data = backupManager.restoreBackup(backupId);

// Delete backup
backupManager.deleteBackup(backupId);
```

**Backup Features:**
- Manual and automated backup types
- Checksum verification for data integrity
- Max 10 backups retention
- Size tracking

### 6. Environment Security

#### Protected Environment Variables
```env
# Add to .env.local
VITE_API_URL=https://api.example.com
VITE_JWT_SECRET=your-secret-key
VITE_ADMIN_ROUTE=/admin
VITE_SESSION_TIMEOUT=86400000  # 24 hours
```

#### Protected Routes
```typescript
// Admin dashboard requires authentication
<Route 
  path="/admin/dashboard" 
  element={<ProtectedAdminDashboard />} 
/>

// Returns 401 if not authenticated
```

---

## Security Best Practices

### For Administrators

1. **Change Default Credentials**
   - Update the default admin password from `admin123` to a strong password
   - Store credentials securely
   - Never share credentials in emails

2. **Session Management**
   - Sessions expire after 24 hours
   - Log out when finished using the admin panel
   - Don't leave the admin panel unattended on shared computers

3. **Password Policy**
   - Use strong passwords (mix of uppercase, lowercase, numbers, symbols)
   - Change passwords regularly
   - Don't reuse old passwords

4. **Audit Logs**
   - Review audit logs regularly for suspicious activity
   - Check for failed login attempts
   - Monitor content changes

### For Developers

1. **Sensitive Data**
   - Don't log sensitive information
   - Use environment variables for secrets
   - Never commit secrets to version control

2. **CSRF Protection**
   - Always validate CSRF tokens on form submission
   - Regenerate tokens after use
   - Use same-site cookie attribute

3. **Rate Limiting**
   - Implement on all sensitive endpoints
   - Log rate limit violations
   - Alert on multiple violations

4. **Backup Strategy**
   - Create regular backups
   - Test backup restoration
   - Store backups in secure location
   - Encrypt sensitive data in backups

---

## Security Checklist

- [ ] Admin credentials changed from defaults
- [ ] HTTPS enabled for production
- [ ] CSRF tokens validated on all forms
- [ ] Rate limiting tested and working
- [ ] Audit logs being collected
- [ ] Backups created and tested
- [ ] Session timeout configured
- [ ] User roles defined and enforced
- [ ] Error messages don't reveal sensitive info
- [ ] Input validation in place

---

## Monitoring & Alerts

### Recommended Monitoring

1. **Login Failures**
   - Alert on 3+ failed login attempts
   - Alert on rate limit lockouts

2. **Unusual Activity**
   - Alert on bulk delete operations
   - Alert on export of large datasets
   - Alert on settings changes

3. **System Health**
   - Monitor backup status
   - Check session expiration handling
   - Track error rates

### Log Review Schedule

- **Daily:** Failed login attempts
- **Weekly:** All admin actions
- **Monthly:** Backup verification, security review

---

## Incident Response

### If Unauthorized Access is Suspected

1. **Immediate Actions**
   - Revoke compromised admin session
   - Change admin passwords
   - Enable enhanced logging

2. **Investigation**
   - Review audit logs for unauthorized actions
   - Check backup integrity
   - Identify what data was accessed

3. **Recovery**
   - Restore from backup if needed
   - Notify affected users
   - Update security measures

### If Data is Corrupted

1. **Stop Operations**
   - Take admin panel offline
   - Prevent further data corruption

2. **Restore**
   - Find most recent good backup
   - Restore from backup
   - Verify data integrity

3. **Prevention**
   - Implement more frequent backups
   - Add data validation checks
   - Monitor for corruption

---

## Security Resources

- OWASP Top 10 Web Application Security Risks
- CSRF Prevention Cheat Sheet
- Session Management Best Practices
- Password Storage Best Practices
- Backup and Disaster Recovery Guide

---

## Support & Updates

For security questions or to report vulnerabilities:
1. Check this documentation first
2. Contact the development team
3. Do not post security issues publicly

**Last Updated:** January 18, 2026
**Version:** 1.0
