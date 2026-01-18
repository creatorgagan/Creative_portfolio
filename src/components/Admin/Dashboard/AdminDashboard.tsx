import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { AdminRole, AnalyticsData, ClientInquiry, ActivityLog } from '@/types';
import DashboardOverview from './DashboardOverview';
import DashboardSidebar from './DashboardSidebar';
import AnalyticsSection from '../Analytics/AnalyticsSection';
import RecentInquiriesWidget from '../Analytics/RecentInquiriesWidget';
import ActivityFeedWidget from '../Analytics/ActivityFeedWidget';
import './AdminDashboard.css';

/**
 * Admin Dashboard Component
 * Main dashboard layout with navigation and content areas
 * Requirements: 13.1, 13.4
 */
const AdminDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [recentInquiries, setRecentInquiries] = useState<ClientInquiry[]>([]);
  const [activityLog, setActivityLog] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect to login if not authenticated
  if (!isAuthenticated || !user) {
    return <Navigate to="/admin/login" replace />;
  }

  // Only allow super admin and admin roles
  if (user.role !== AdminRole.SUPER_ADMIN && user.role !== AdminRole.ADMIN) {
    return (
      <div className="admin-dashboard-error">
        <h1>Access Denied</h1>
        <p>You do not have permission to access the admin dashboard.</p>
      </div>
    );
  }

  useEffect(() => {
    // TODO: Fetch actual analytics data from API
    // Mock data for now
    const mockAnalytics: AnalyticsData = {
      totalViews: 15234,
      totalInquiries: 42,
      popularVideos: [
        {
          videoId: '1',
          title: 'Summer Campaign Video',
          views: 3421,
          engagement: 85,
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          videoId: '2',
          title: 'Product Launch',
          views: 2891,
          engagement: 72,
          thumbnail: 'https://via.placeholder.com/150'
        }
      ],
      inquiryTrends: [
        { date: '2024-01-15', count: 5, conversions: 2 },
        { date: '2024-01-16', count: 8, conversions: 3 },
        { date: '2024-01-17', count: 6, conversions: 2 }
      ],
      conversionRate: 45.2,
      timeRange: {
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        end: new Date()
      }
    };

    const mockInquiries: ClientInquiry[] = [
      {
        id: '1',
        name: 'John Smith',
        email: 'john@example.com',
        phone: '555-0123',
        projectType: 'Commercial',
        message: 'Looking for a professional video for our startup',
        status: 'new' as any,
        priority: 'high' as any,
        submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        notes: []
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '555-0456',
        projectType: 'Music Video',
        message: 'We need a music video for our new single',
        status: 'in_progress' as any,
        priority: 'medium' as any,
        submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        notes: []
      }
    ];

    const mockActivity: ActivityLog[] = [
      {
        id: '1',
        action: 'uploaded',
        resource: 'media',
        user: 'admin',
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
        details: 'Uploaded new video: Summer Campaign'
      },
      {
        id: '2',
        action: 'updated',
        resource: 'inquiry',
        user: 'admin',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        details: 'Updated inquiry #2 status to in_progress'
      },
      {
        id: '3',
        action: 'created',
        resource: 'project',
        user: 'admin',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        details: 'Created new project: Product Launch'
      }
    ];

    setAnalytics(mockAnalytics);
    setRecentInquiries(mockInquiries);
    setActivityLog(mockActivity);
    setLoading(false);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="dashboard-overview-grid">
            {analytics && <DashboardOverview analytics={analytics} />}
            <div className="recent-inquiries-container">
              <RecentInquiriesWidget inquiries={recentInquiries} />
            </div>
            <div className="activity-feed-container">
              <ActivityFeedWidget activities={activityLog} />
            </div>
          </div>
        );
      case 'analytics':
        return analytics ? <AnalyticsSection analytics={analytics} /> : null;
      case 'inquiries':
        return <div className="section-placeholder">Client Inquiries Management</div>;
      case 'content':
        return <div className="section-placeholder">Content Management</div>;
      case 'media':
        return <div className="section-placeholder">Media Management</div>;
      case 'settings':
        return <div className="section-placeholder">Admin Settings</div>;
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard" data-testid="admin-dashboard">
      <DashboardSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        userRole={user.role}
      />
      <div className="dashboard-main-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <div className="user-info">
            <span>Welcome, {user.username}</span>
          </div>
        </div>
        <div className="dashboard-content">
          {loading ? (
            <div className="loading-state">Loading dashboard...</div>
          ) : (
            renderContent()
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
