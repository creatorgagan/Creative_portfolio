import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { Login } from '../components/Admin/Auth/Login';
import { ProtectedRoute } from '../components/Admin/Auth/ProtectedRoute';
import { AdminRole } from '../types';

// Test component that uses auth
function TestAuthComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <div>
      <div data-testid="auth-status">
        {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
      </div>
      {user && <div data-testid="username">{user.username}</div>}
      {isAuthenticated && (
        <button onClick={logout} data-testid="logout-btn">
          Logout
        </button>
      )}
    </div>
  );
}

describe('Admin Authentication System', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe('AuthContext', () => {
    it('should provide authentication state', () => {
      render(
        <AuthProvider>
          <TestAuthComponent />
        </AuthProvider>
      );

      expect(screen.getByTestId('auth-status')).toHaveTextContent('Not Authenticated');
    });

    it('should restore session from localStorage on mount', () => {
      // Set up a valid session in localStorage
      const mockSession = {
        token: 'mock-token',
        user: {
          id: '1',
          username: 'testuser',
          email: 'test@example.com',
          role: AdminRole.ADMIN,
          createdAt: new Date().toISOString(),
        },
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
      };

      localStorage.setItem('admin_session', JSON.stringify(mockSession));

      render(
        <AuthProvider>
          <TestAuthComponent />
        </AuthProvider>
      );

      expect(screen.getByTestId('auth-status')).toHaveTextContent('Authenticated');
      expect(screen.getByTestId('username')).toHaveTextContent('testuser');
    });

    it('should clear expired session on mount', () => {
      // Set up an expired session in localStorage
      const expiredSession = {
        token: 'mock-token',
        user: {
          id: '1',
          username: 'testuser',
          email: 'test@example.com',
          role: AdminRole.ADMIN,
          createdAt: new Date().toISOString(),
        },
        expiresAt: new Date(Date.now() - 1000).toISOString(), // Expired 1 second ago
      };

      localStorage.setItem('admin_session', JSON.stringify(expiredSession));

      render(
        <AuthProvider>
          <TestAuthComponent />
        </AuthProvider>
      );

      expect(screen.getByTestId('auth-status')).toHaveTextContent('Not Authenticated');
      expect(localStorage.getItem('admin_session')).toBeNull();
    });

    it('should handle logout correctly', async () => {
      // Set up a valid session
      const mockSession = {
        token: 'mock-token',
        user: {
          id: '1',
          username: 'testuser',
          email: 'test@example.com',
          role: AdminRole.ADMIN,
          createdAt: new Date().toISOString(),
        },
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };

      localStorage.setItem('admin_session', JSON.stringify(mockSession));

      render(
        <AuthProvider>
          <TestAuthComponent />
        </AuthProvider>
      );

      expect(screen.getByTestId('auth-status')).toHaveTextContent('Authenticated');

      // Click logout
      fireEvent.click(screen.getByTestId('logout-btn'));

      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('Not Authenticated');
      });

      expect(localStorage.getItem('admin_session')).toBeNull();
    });
  });

  describe('Login Component', () => {
    it('should render login form', () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByText('Admin Login')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('should validate required fields', async () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </BrowserRouter>
      );

      // Fill in username but leave password empty
      const usernameInput = screen.getByPlaceholderText('Username');
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      
      // The form has HTML5 validation, so we need to trigger it properly
      // In a real browser, the required attribute would prevent submission
      // For testing, we can verify the required attributes are present
      const passwordInput = screen.getByPlaceholderText('Password');
      expect(usernameInput).toHaveAttribute('required');
      expect(passwordInput).toHaveAttribute('required');
    });

    it('should validate password length', async () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');

      // Fill in both fields with short password
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: '12345' } });

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      
      // Submit the form - this will trigger validation
      const form = submitButton.closest('form');
      if (form) {
        fireEvent.submit(form);
      }

      await waitFor(() => {
        expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
      });
    });

    it('should handle successful login', async () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
      const submitButton = screen.getByRole('button', { name: /sign in/i });

      fireEvent.change(usernameInput, { target: { value: 'admin' } });
      fireEvent.change(passwordInput, { target: { value: 'admin123' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        const session = localStorage.getItem('admin_session');
        expect(session).not.toBeNull();
        if (session) {
          const parsedSession = JSON.parse(session);
          expect(parsedSession.user.username).toBe('admin');
        }
      });
    });

    it('should handle invalid credentials', async () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
      const submitButton = screen.getByRole('button', { name: /sign in/i });

      fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
      fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
      });
    });
  });

  describe('ProtectedRoute Component', () => {
    it('should redirect to login when not authenticated', () => {
      const { container } = render(
        <BrowserRouter>
          <AuthProvider>
            <ProtectedRoute>
              <div>Protected Content</div>
            </ProtectedRoute>
          </AuthProvider>
        </BrowserRouter>
      );

      // Should not show protected content
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });

    it('should render children when authenticated', () => {
      // Set up a valid session
      const mockSession = {
        token: 'mock-token',
        user: {
          id: '1',
          username: 'testuser',
          email: 'test@example.com',
          role: AdminRole.ADMIN,
          createdAt: new Date().toISOString(),
        },
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };

      localStorage.setItem('admin_session', JSON.stringify(mockSession));

      render(
        <BrowserRouter>
          <AuthProvider>
            <ProtectedRoute>
              <div>Protected Content</div>
            </ProtectedRoute>
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });

    it('should enforce role-based access control', () => {
      // Set up a session with EDITOR role
      const mockSession = {
        token: 'mock-token',
        user: {
          id: '1',
          username: 'editor',
          email: 'editor@example.com',
          role: AdminRole.EDITOR,
          createdAt: new Date().toISOString(),
        },
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };

      localStorage.setItem('admin_session', JSON.stringify(mockSession));

      render(
        <BrowserRouter>
          <AuthProvider>
            <ProtectedRoute requiredRole={AdminRole.SUPER_ADMIN}>
              <div>Super Admin Content</div>
            </ProtectedRoute>
          </AuthProvider>
        </BrowserRouter>
      );

      // Should show access denied
      expect(screen.getByText('Access Denied')).toBeInTheDocument();
      expect(screen.queryByText('Super Admin Content')).not.toBeInTheDocument();
    });

    it('should allow access when user has sufficient role', () => {
      // Set up a session with SUPER_ADMIN role
      const mockSession = {
        token: 'mock-token',
        user: {
          id: '1',
          username: 'superadmin',
          email: 'superadmin@example.com',
          role: AdminRole.SUPER_ADMIN,
          createdAt: new Date().toISOString(),
        },
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };

      localStorage.setItem('admin_session', JSON.stringify(mockSession));

      render(
        <BrowserRouter>
          <AuthProvider>
            <ProtectedRoute requiredRole={AdminRole.ADMIN}>
              <div>Admin Content</div>
            </ProtectedRoute>
          </AuthProvider>
        </BrowserRouter>
      );

      // Super admin should have access to admin content
      expect(screen.getByText('Admin Content')).toBeInTheDocument();
    });
  });
});
