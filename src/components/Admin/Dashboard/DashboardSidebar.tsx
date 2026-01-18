import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AdminRole } from '@/types';
import './DashboardSidebar.css';

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  userRole: AdminRole;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  requiredRoles: AdminRole[];
}

const menuItems: MenuItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: '📊',
    requiredRoles: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📈',
    requiredRoles: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN]
  },
  {
    id: 'inquiries',
    label: 'Client Inquiries',
    icon: '📧',
    requiredRoles: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR]
  },
  {
    id: 'content',
    label: 'Content Management',
    icon: '📝',
    requiredRoles: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR]
  },
  {
    id: 'media',
    label: 'Media Management',
    icon: '🖼️',
    requiredRoles: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR]
  },
  {
    id: 'settings',
    label: 'Admin Settings',
    icon: '⚙️',
    requiredRoles: [AdminRole.SUPER_ADMIN]
  }
];

/**
 * Dashboard Sidebar Component
 * Navigation sidebar for admin dashboard with role-based menu items
 * Requirements: 13.1, 13.4
 */
const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeSection,
  onSectionChange,
  userRole
}) => {
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const visibleMenuItems = menuItems.filter(item =>
    item.requiredRoles.includes(userRole)
  );

  return (
    <aside className={`dashboard-sidebar ${isCollapsed ? 'collapsed' : ''}`} data-testid="dashboard-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">🎬</span>
          {!isCollapsed && <span className="logo-text">Admin Panel</span>}
        </div>
        <button
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          data-testid="sidebar-toggle"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {visibleMenuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onSectionChange(item.id)}
            title={isCollapsed ? item.label : ''}
            data-testid={`nav-${item.id}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isCollapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button
          className="logout-btn"
          onClick={logout}
          title="Logout"
          data-testid="logout-btn"
        >
          <span className="logout-icon">🚪</span>
          {!isCollapsed && <span className="logout-text">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
