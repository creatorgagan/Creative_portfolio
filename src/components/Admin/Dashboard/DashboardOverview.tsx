import React from 'react';
import { AnalyticsData } from '@/types';
import './DashboardOverview.css';

interface DashboardOverviewProps {
  analytics: AnalyticsData;
}

/**
 * Dashboard Overview Component
 * Displays key metrics and statistics
 * Requirements: 13.1
 */
const DashboardOverview: React.FC<DashboardOverviewProps> = ({ analytics }) => {
  return (
    <div className="dashboard-overview" data-testid="dashboard-overview">
      <div className="metrics-grid">
        <div className="metric-card" data-testid="total-views-metric">
          <div className="metric-icon">👁️</div>
          <div className="metric-content">
            <h3>Total Views</h3>
            <p className="metric-value">{analytics.totalViews.toLocaleString()}</p>
          </div>
        </div>

        <div className="metric-card" data-testid="total-inquiries-metric">
          <div className="metric-icon">📧</div>
          <div className="metric-content">
            <h3>Client Inquiries</h3>
            <p className="metric-value">{analytics.totalInquiries}</p>
          </div>
        </div>

        <div className="metric-card" data-testid="conversion-rate-metric">
          <div className="metric-icon">📈</div>
          <div className="metric-content">
            <h3>Conversion Rate</h3>
            <p className="metric-value">{analytics.conversionRate.toFixed(1)}%</p>
          </div>
        </div>

        <div className="metric-card" data-testid="popular-videos-metric">
          <div className="metric-icon">🎬</div>
          <div className="metric-content">
            <h3>Popular Videos</h3>
            <p className="metric-value">{analytics.popularVideos.length}</p>
          </div>
        </div>
      </div>

      <div className="top-videos-section">
        <h2>Top Performing Videos</h2>
        <div className="videos-list">
          {analytics.popularVideos.map(video => (
            <div key={video.videoId} className="video-item">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <div className="video-details">
                <h4>{video.title}</h4>
                <div className="video-stats">
                  <span className="stat">👁️ {video.views} views</span>
                  <span className="stat">💬 {video.engagement}% engagement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
