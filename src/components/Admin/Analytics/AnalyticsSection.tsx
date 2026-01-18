import React, { useState } from 'react';
import { AnalyticsData } from '@/types';
import './AnalyticsSection.css';

interface AnalyticsSectionProps {
  analytics: AnalyticsData;
}

type TimeRange = '7days' | '30days' | '90days' | 'all';

/**
 * Analytics Section Component
 * Displays detailed analytics and insights
 * Requirements: 13.1, 13.2, 13.5, 13.6
 */
const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ analytics }) => {
  const [timeRange, setTimeRange] = useState<TimeRange>('30days');

  return (
    <div className="analytics-section" data-testid="analytics-section">
      <div className="analytics-header">
        <h2>Analytics & Insights</h2>
        <div className="time-range-selector">
          <button
            className={`range-btn ${timeRange === '7days' ? 'active' : ''}`}
            onClick={() => setTimeRange('7days')}
          >
            7 Days
          </button>
          <button
            className={`range-btn ${timeRange === '30days' ? 'active' : ''}`}
            onClick={() => setTimeRange('30days')}
          >
            30 Days
          </button>
          <button
            className={`range-btn ${timeRange === '90days' ? 'active' : ''}`}
            onClick={() => setTimeRange('90days')}
          >
            90 Days
          </button>
          <button
            className={`range-btn ${timeRange === 'all' ? 'active' : ''}`}
            onClick={() => setTimeRange('all')}
          >
            All Time
          </button>
        </div>
      </div>

      <div className="analytics-grid">
        {/* Views Chart */}
        <div className="analytics-card">
          <h3>Video Views Trend</h3>
          <div className="chart-placeholder" data-testid="views-chart">
            <div className="trend-bar-chart">
              {analytics.inquiryTrends.map((trend, index) => (
                <div key={index} className="chart-bar">
                  <div 
                    className="bar" 
                    style={{ height: `${(trend.count / 10) * 100}%` }}
                  ></div>
                  <span className="date">{trend.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="analytics-card">
          <h3>Conversion Funnel</h3>
          <div className="funnel-chart" data-testid="conversion-chart">
            <div className="funnel-item">
              <div className="funnel-bar" style={{ width: '100%' }}>
                <span className="funnel-label">Visitors</span>
                <span className="funnel-value">
                  {(analytics.totalViews).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="funnel-item">
              <div className="funnel-bar" style={{ width: '75%' }}>
                <span className="funnel-label">Inquiries</span>
                <span className="funnel-value">
                  {(analytics.totalInquiries).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="funnel-item">
              <div className="funnel-bar" style={{ width: `${analytics.conversionRate}%` }}>
                <span className="funnel-label">Conversions</span>
                <span className="funnel-value">
                  {analytics.conversionRate.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Trends */}
        <div className="analytics-card full-width">
          <h3>Inquiry Trends</h3>
          <div className="trends-table">
            <div className="table-header">
              <div className="table-cell">Date</div>
              <div className="table-cell">New Inquiries</div>
              <div className="table-cell">Conversions</div>
              <div className="table-cell">Conversion Rate</div>
            </div>
            {analytics.inquiryTrends.map((trend, index) => (
              <div key={index} className="table-row">
                <div className="table-cell">{trend.date}</div>
                <div className="table-cell">{trend.count}</div>
                <div className="table-cell">{trend.conversions}</div>
                <div className="table-cell">
                  {trend.count > 0 ? ((trend.conversions / trend.count) * 100).toFixed(0) : 0}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Summary */}
        <div className="analytics-card full-width">
          <h3>Key Metrics Summary</h3>
          <div className="metrics-summary">
            <div className="summary-item">
              <span className="summary-label">Total Views</span>
              <span className="summary-value">{analytics.totalViews.toLocaleString()}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Inquiries</span>
              <span className="summary-value">{analytics.totalInquiries}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Conversion Rate</span>
              <span className="summary-value">{analytics.conversionRate.toFixed(1)}%</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Avg Views per Video</span>
              <span className="summary-value">
                {analytics.popularVideos.length > 0
                  ? Math.round(
                      analytics.popularVideos.reduce((sum, v) => sum + v.views, 0) /
                        analytics.popularVideos.length
                    )
                  : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
