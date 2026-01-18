import React from 'react';
import { ActivityLog } from '@/types';
import './ActivityFeedWidget.css';

interface ActivityFeedWidgetProps {
  activities: ActivityLog[];
}

const actionIcons: Record<string, string> = {
  uploaded: '⬆️',
  updated: '✏️',
  created: '➕',
  deleted: '🗑️',
  viewed: '👁️',
  published: '📤',
  archived: '📦'
};

/**
 * Activity Feed Widget Component
 * Displays recent admin activities
 * Requirements: 13.1
 */
const ActivityFeedWidget: React.FC<ActivityFeedWidgetProps> = ({ activities }) => {
  const formatTime = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="activity-feed-widget" data-testid="activity-feed-widget">
      <div className="widget-header">
        <h3>Recent Activity</h3>
        <a href="#activity" className="view-all-link">View All</a>
      </div>

      <div className="activity-list">
        {activities.length === 0 ? (
          <p className="no-data">No recent activity</p>
        ) : (
          activities.map(activity => (
            <div key={activity.id} className="activity-item" data-testid={`activity-${activity.id}`}>
              <div className="activity-icon">
                {actionIcons[activity.action] || '⚙️'}
              </div>
              <div className="activity-content">
                <p className="activity-action">
                  <span className="action">{activity.action}</span>
                  <span className="resource">{activity.resource}</span>
                </p>
                {activity.details && (
                  <p className="activity-details">{activity.details}</p>
                )}
                <p className="activity-meta">
                  <span className="user">By {activity.user}</span>
                  <span className="time">{formatTime(activity.timestamp)}</span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityFeedWidget;
