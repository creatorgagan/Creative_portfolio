# Admin Authentication System

This directory contains the authentication system for the admin panel.

## Components

### AuthContext (`src/contexts/AuthContext.tsx`)
Provides authentication state and methods throughout the application.

**Features:**
- Login/logout functionality
- Session persistence with localStorage
- Automatic session expiry handling (checks every minute)
- Session validation on page visibility change

**Usage:**
```tsx
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

// Wrap your app with AuthProvider
<AuthProvider>
  <App />
</AuthProvider>

// Use the hook in components
const { user, isAuthenticated, login, logout, loading, error } = useAuth();
```

### Login Component
A full-featured login form with validation.

**Features:**
- Form validation (username and password required)
- Real-time error feedback
- Loading states
- Responsive design

**Usage:**
```tsx
import { Login } from '@/components/Admin/Auth';

// In your router
<Route path="/admin/login" element={<Login />} />
```

**Default Credentials (Development):**
- Username: `admin`
- Password: `admin123`

### ProtectedRoute Component
Wraps routes that require authentication.

**Features:**
- Redirects unauthenticated users to login
- Role-based access control
- Loading state while checking authentication
- Access denied page for insufficient permissions

**Usage:**
```tsx
import { ProtectedRoute } from '@/components/Admin/Auth';
import { AdminRole } from '@/types';

// Basic protection
<Route 
  path="/admin/dashboard" 
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  } 
/>

// With role requirement
<Route 
  path="/admin/settings" 
  element={
    <ProtectedRoute requiredRole={AdminRole.SUPER_ADMIN}>
      <AdminSettings />
    </ProtectedRoute>
  } 
/>
```

**Role Hierarchy:**
- `SUPER_ADMIN` (level 3) - Full access
- `ADMIN` (level 2) - Most admin features
- `EDITOR` (level 1) - Content editing only

### LogoutButton Component
A reusable logout button.

**Features:**
- Two variants: button and link
- Shows current username
- Automatic redirect to login page

**Usage:**
```tsx
import { LogoutButton } from '@/components/Admin/Auth';

// Button variant (default)
<LogoutButton />

// Link variant
<LogoutButton variant="link" />

// With custom className
<LogoutButton className="my-custom-class" />
```

## Session Management

### Session Storage
Sessions are stored in localStorage with the key `admin_session` containing:
```typescript
{
  token: string;
  user: AdminUser;
  expiresAt: Date; // 24 hours from login
}
```

### Session Expiry
- Sessions expire after 24 hours
- Automatic checks every minute
- Checks on page visibility change (when user returns to tab)
- Expired sessions are automatically cleared

## Security Notes

⚠️ **Important:** The current implementation uses mock authentication for development purposes. Before deploying to production:

1. Replace the mock login logic in `AuthContext.tsx` with actual API calls
2. Implement proper JWT token validation
3. Use secure password hashing (bcrypt, argon2, etc.)
4. Implement rate limiting for login attempts
5. Add CSRF protection
6. Use HTTPS in production
7. Consider implementing refresh tokens

## Example Router Setup

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Login, ProtectedRoute } from '@/components/Admin/Auth';
import { AdminDashboard } from '@/components/Admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />
          
          {/* Protected admin routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* More protected routes... */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
```

## Testing

To test the authentication system:

1. Navigate to `/admin/login`
2. Enter credentials:
   - Username: `admin`
   - Password: `admin123`
3. You should be logged in and redirected
4. Try accessing protected routes
5. Test logout functionality
6. Verify session persistence (refresh page while logged in)
7. Test session expiry (wait 24 hours or manually modify localStorage)
