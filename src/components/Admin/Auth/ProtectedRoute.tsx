import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { AdminRole } from '@/types';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: AdminRole;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  children,
  requiredRole,
  redirectTo = '/admin/login',
}: ProtectedRouteProps) => {
  const { isAuthenticated, user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Check role-based access if required
  if (requiredRole && user) {
    const hasRequiredRole = checkRoleAccess(user.role, requiredRole);
    
    if (!hasRequiredRole) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Access Denied
            </h2>
            <p className="text-gray-600 mb-6">
              You don't have permission to access this page.
            </p>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Go Back
            </button>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
};

// Helper function to check role hierarchy
const checkRoleAccess = (userRole: AdminRole, requiredRole: AdminRole): boolean => {
  const roleHierarchy: Record<AdminRole, number> = {
    [AdminRole.SUPER_ADMIN]: 3,
    [AdminRole.ADMIN]: 2,
    [AdminRole.EDITOR]: 1,
  };

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};

export default ProtectedRoute;
