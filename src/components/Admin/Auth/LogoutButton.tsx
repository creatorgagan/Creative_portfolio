import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LogoutButtonProps {
  className?: string;
  variant?: 'button' | 'link';
}

export const LogoutButton = ({ className = '', variant = 'button' }: LogoutButtonProps) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  if (variant === 'link') {
    return (
      <button
        onClick={handleLogout}
        className={`text-gray-700 hover:text-gray-900 ${className}`}
      >
        Logout
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${className}`}
    >
      <svg
        className="mr-2 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      {user ? `Logout (${user.username})` : 'Logout'}
    </button>
  );
};

export default LogoutButton;
