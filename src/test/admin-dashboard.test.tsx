import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import AdminDashboard from '../components/Admin/Dashboard/AdminDashboard';
import DashboardSidebar from '../components/Admin/Dashboard/DashboardSidebar';
import DashboardOverview from '../components/Admin/Dashboard/DashboardOverview';
import AnalyticsSection from '../components/Admin/Analytics/AnalyticsSection';
import RecentInquiriesWidget from '../components/Admin/Analytics/RecentInquiriesWidget';
import ActivityFeedWidget from '../components/Admin/Analytics/ActivityFeedWidget';
import { AdminRole, AnalyticsData, ClientInquiry, ActivityLog, InquiryStatus, InquiryPriority } from '../types';

// Mock data
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
    }
  ],
  inquiryTrends: [
    { date: '2024-01-15', count: 5, conversions: 2 }
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
    status: InquiryStatus.NEW,
    priority: InquiryPriority.HIGH,
    submittedAt: new Date(),
    notes: []
  }
];

const mockActivities: ActivityLog[] = [
  {
    id: '1',
    action: 'uploaded',
    resource: 'media',
    user: 'admin',
    timestamp: new Date(),
    details: 'Uploaded new video: Summer Campaign'
  }
];

describe('Admin Dashboard Components', () => {
  beforeEach(() => {
    localStorage.clear();
    // Set up authenticated session
    const mockSession = {
      token: 'mock-token',
      user: {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
        role: AdminRole.SUPER_ADMIN,
        createdAt: new Date().toISOString(),
      },
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };
    localStorage.setItem('admin_session', JSON.stringify(mockSession));
  });

  describe('DashboardOverview', () => {
    it('should display all metric cards', () => {
      render(<DashboardOverview analytics={mockAnalytics} />);

      expect(screen.getByTestId('total-views-metric')).toBeInTheDocument();
      expect(screen.getByTestId('total-inquiries-metric')).toBeInTheDocument();
      expect(screen.getByTestId('conversion-rate-metric')).toBeInTheDocument();
      expect(screen.getByTestId('popular-videos-metric')).toBeInTheDocument();
    });

    it('should display correct metric values', () => {
      render(<DashboardOverview analytics={mockAnalytics} />);

      expect(screen.getByText('15,234')).toBeInTheDocument();
      expect(screen.getByText('42')).toBeInTheDocument();
      expect(screen.getByText('45.2%')).toBeInTheDocument();
    });

    it('should display top performing videos', () => {
      render(<DashboardOverview analytics={mockAnalytics} />);

      expect(screen.getByText('Summer Campaign Video')).toBeInTheDocument();
      expect(screen.getByText('👁️ 3421 views')).toBeInTheDocument();
      expect(screen.getByText('💬 85% engagement')).toBeInTheDocument();
    });

    it('should format large numbers correctly', () => {
      const largeAnalytics = {
        ...mockAnalytics,
        totalViews: 1234567
      };

      render(<DashboardOverview analytics={largeAnalytics} />);

      expect(screen.getByText('1,234,567')).toBeInTheDocument();
    });
  });

  describe('DashboardSidebar', () => {
    it('should render navigation items', () => {
      render(
        <DashboardSidebar
          activeSection="overview"
          onSectionChange={() => {}}
          userRole={AdminRole.SUPER_ADMIN}
        />
      );

      expect(screen.getByTestId('nav-overview')).toBeInTheDocument();
      expect(screen.getByTestId('nav-analytics')).toBeInTheDocument();
      expect(screen.getByTestId('nav-inquiries')).toBeInTheDocument();
      expect(screen.getByTestId('nav-content')).toBeInTheDocument();
      expect(screen.getByTestId('nav-media')).toBeInTheDocument();
      expect(screen.getByTestId('nav-settings')).toBeInTheDocument();
    });

    it('should highlight active section', () => {
      render(
        <DashboardSidebar
          activeSection="analytics"
          onSectionChange={() => {}}
          userRole={AdminRole.SUPER_ADMIN}
        />
      );

      const analyticsBtn = screen.getByTestId('nav-analytics');
      expect(analyticsBtn).toHaveClass('active');
    });

    it('should call onSectionChange when item is clicked', () => {
      const onSectionChange = vi.fn();
      render(
        <DashboardSidebar
          activeSection="overview"
          onSectionChange={onSectionChange}
          userRole={AdminRole.SUPER_ADMIN}
        />
      );

      fireEvent.click(screen.getByTestId('nav-analytics'));
      expect(onSectionChange).toHaveBeenCalledWith('analytics');
    });

    it('should respect role-based permissions', () => {
      render(
        <DashboardSidebar
          activeSection="overview"
          onSectionChange={() => {}}
          userRole={AdminRole.EDITOR}
        />
      );

      // EDITOR role should not see settings
      expect(screen.queryByTestId('nav-settings')).not.toBeInTheDocument();
      // But should see other items
      expect(screen.getByTestId('nav-overview')).toBeInTheDocument();
    });

    it('should toggle sidebar collapse', () => {
      render(
        <DashboardSidebar
          activeSection="overview"
          onSectionChange={() => {}}
          userRole={AdminRole.SUPER_ADMIN}
        />
      );

      const sidebar = screen.getByTestId('dashboard-sidebar');
      const toggleBtn = screen.getByTestId('sidebar-toggle');

      expect(sidebar).not.toHaveClass('collapsed');
      fireEvent.click(toggleBtn);
      expect(sidebar).toHaveClass('collapsed');
    });

    it('should have logout button', () => {
      render(
        <DashboardSidebar
          activeSection="overview"
          onSectionChange={() => {}}
          userRole={AdminRole.SUPER_ADMIN}
        />
      );

      expect(screen.getByTestId('logout-btn')).toBeInTheDocument();
    });
  });

  describe('AnalyticsSection', () => {
    it('should render all chart sections', () => {
      render(<AnalyticsSection analytics={mockAnalytics} />);

      expect(screen.getByText('Video Views Trend')).toBeInTheDocument();
      expect(screen.getByText('Conversion Funnel')).toBeInTheDocument();
      expect(screen.getByText('Inquiry Trends')).toBeInTheDocument();
      expect(screen.getByText('Key Metrics Summary')).toBeInTheDocument();
    });

    it('should display time range selector', () => {
      render(<AnalyticsSection analytics={mockAnalytics} />);

      expect(screen.getByText('7 Days')).toBeInTheDocument();
      expect(screen.getByText('30 Days')).toBeInTheDocument();
      expect(screen.getByText('90 Days')).toBeInTheDocument();
      expect(screen.getByText('All Time')).toBeInTheDocument();
    });

    it('should update time range on button click', async () => {
      render(<AnalyticsSection analytics={mockAnalytics} />);

      const sevenDaysBtn = screen.getByText('7 Days');
      expect(sevenDaysBtn).not.toHaveClass('active');

      fireEvent.click(sevenDaysBtn);
      expect(sevenDaysBtn).toHaveClass('active');
    });

    it('should display conversion funnel with correct structure', () => {
      render(<AnalyticsSection analytics={mockAnalytics} />);

      expect(screen.getByTestId('conversion-chart')).toBeInTheDocument();
      expect(screen.getByText('Visitors')).toBeInTheDocument();
    });

    it('should display inquiry trends table', () => {
      render(<AnalyticsSection analytics={mockAnalytics} />);

      expect(screen.getByText('Date')).toBeInTheDocument();
      expect(screen.getByText('New Inquiries')).toBeInTheDocument();
      expect(screen.getByText('Conversions')).toBeInTheDocument();
      expect(screen.getByText('2024-01-15')).toBeInTheDocument();
    });
  });

  describe('RecentInquiriesWidget', () => {
    it('should display inquiry list', () => {
      render(<RecentInquiriesWidget inquiries={mockInquiries} />);

      expect(screen.getByText('John Smith')).toBeInTheDocument();
      expect(screen.getByText('Commercial')).toBeInTheDocument();
    });

    it('should display inquiry status badges', () => {
      render(<RecentInquiriesWidget inquiries={mockInquiries} />);

      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('should display priority indicators', () => {
      render(<RecentInquiriesWidget inquiries={mockInquiries} />);

      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('should truncate long inquiry messages', () => {
      const longMessage = 'a'.repeat(100);
      const inquiry = {
        ...mockInquiries[0],
        message: longMessage
      };

      render(<RecentInquiriesWidget inquiries={[inquiry]} />);

      const message = screen.getByText(/^a+\.\.\.$/);
      expect(message).toBeInTheDocument();
      expect(message.textContent?.length).toBeLessThan(longMessage.length);
    });

    it('should handle empty inquiry list', () => {
      render(<RecentInquiriesWidget inquiries={[]} />);

      expect(screen.getByText('No inquiries yet')).toBeInTheDocument();
    });
  });

  describe('ActivityFeedWidget', () => {
    it('should display activity items', () => {
      render(<ActivityFeedWidget activities={mockActivities} />);

      expect(screen.getByText('Uploaded new video: Summer Campaign')).toBeInTheDocument();
    });

    it('should format activity action correctly', () => {
      render(<ActivityFeedWidget activities={mockActivities} />);

      expect(screen.getByText(/uploaded/i)).toBeInTheDocument();
      expect(screen.getByText(/media/i)).toBeInTheDocument();
    });

    it('should display user information', () => {
      render(<ActivityFeedWidget activities={mockActivities} />);

      expect(screen.getByText(/By admin/)).toBeInTheDocument();
    });

    it('should handle empty activity list', () => {
      render(<ActivityFeedWidget activities={[]} />);

      expect(screen.getByText('No recent activity')).toBeInTheDocument();
    });

    it('should format recent times correctly', () => {
      const recentActivity = {
        ...mockActivities[0],
        timestamp: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
      };

      render(<ActivityFeedWidget activities={[recentActivity]} />);

      expect(screen.getByText(/5m ago/)).toBeInTheDocument();
    });
  });

  describe('AdminDashboard Integration', () => {
    it('should render dashboard with authenticated user', () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <AdminDashboard />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('admin-dashboard')).toBeInTheDocument();
      expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
    });

    it('should display welcome message with username', () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <AdminDashboard />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByText('Welcome, admin')).toBeInTheDocument();
    });

    it('should render sidebar and main content', () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <AdminDashboard />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('dashboard-sidebar')).toBeInTheDocument();
      expect(screen.getByTestId('admin-dashboard')).toBeInTheDocument();
    });

    it('should show overview section by default', async () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <AdminDashboard />
          </AuthProvider>
        </BrowserRouter>
      );

      await waitFor(() => {
        expect(screen.getByTestId('dashboard-overview')).toBeInTheDocument();
      });
    });

    it('should switch between sections', async () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <AdminDashboard />
          </AuthProvider>
        </BrowserRouter>
      );

      const analyticsBtn = screen.getByTestId('nav-analytics');
      fireEvent.click(analyticsBtn);

      await waitFor(() => {
        expect(screen.getByTestId('analytics-section')).toBeInTheDocument();
      });
    });
  });
});
