import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AdminUser, LoginCredentials, AuthSession } from '@/types';

interface AuthState {
  user: AdminUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: AdminUser }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' };

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing session on mount
  useEffect(() => {
    const checkExistingSession = () => {
      try {
        const sessionData = localStorage.getItem('admin_session');
        if (sessionData) {
          // Handle empty strings explicitly
          if (sessionData.trim() === '') {
            localStorage.removeItem('admin_session');
            return;
          }
          
          const session: AuthSession = JSON.parse(sessionData);
          
          // Check if session is still valid
          if (new Date(session.expiresAt) > new Date()) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: session.user });
          } else {
            // Session expired, clear it
            localStorage.removeItem('admin_session');
          }
        }
      } catch (error) {
        console.error('Error checking existing session:', error);
        localStorage.removeItem('admin_session');
      }
    };

    checkExistingSession();
  }, []);

  // Automatic session expiry handling
  useEffect(() => {
    if (!state.isAuthenticated) return;

    const checkSessionExpiry = () => {
      try {
        const sessionData = localStorage.getItem('admin_session');
        if (sessionData) {
          // Handle empty strings explicitly
          if (sessionData.trim() === '') {
            logout();
            return;
          }
          
          const session: AuthSession = JSON.parse(sessionData);
          
          // Check if session has expired
          if (new Date(session.expiresAt) <= new Date()) {
            console.log('Session expired, logging out');
            logout();
          }
        } else {
          // Session data missing, logout
          logout();
        }
      } catch (error) {
        console.error('Error checking session expiry:', error);
        logout();
      }
    };

    // Check session expiry every minute
    const intervalId = setInterval(checkSessionExpiry, 60 * 1000);

    // Also check on visibility change (when user returns to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkSessionExpiry();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [state.isAuthenticated]);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    dispatch({ type: 'LOGIN_START' });

    try {
      // TODO: Replace with actual API call
      // This is a mock implementation for development
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        const user: AdminUser = {
          id: '1',
          username: credentials.username,
          email: 'admin@example.com',
          role: 'super_admin' as any,
          lastLogin: new Date(),
          createdAt: new Date(),
        };

        const session: AuthSession = {
          token: 'mock-jwt-token',
          user,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        };

        localStorage.setItem('admin_session', JSON.stringify(session));
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_session');
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;