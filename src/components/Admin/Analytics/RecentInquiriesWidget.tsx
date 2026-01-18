import React from 'react';
import { ClientInquiry, InquiryStatus, InquiryPriority } from '@/types';
import './RecentInquiriesWidget.css';

interface RecentInquiriesWidgetProps {
  inquiries: ClientInquiry[];
}

const statusColors: Record<string, string> = {
  new: '#3498db',
  read: '#95a5a6',
  in_progress: '#f39c12',
  responded: '#27ae60',
  archived: '#7f8c8d'
};

const priorityColors: Record<string, string> = {
  low: '#95a5a6',
  medium: '#3498db',
  high: '#e74c3c',
  urgent: '#c0392b'
};

/**
 * Recent Inquiries Widget Component
 * Displays recent client inquiries in dashboard
 * Requirements: 13.1
 */
const RecentInquiriesWidget: React.FC<RecentInquiriesWidgetProps> = ({ inquiries }) => {
  const getStatusLabel = (status: any): string => {
    return status
      .replace('_', ' ')
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getPriorityLabel = (priority: any): string => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  return (
    <div className="recent-inquiries-widget" data-testid="recent-inquiries-widget">
      <div className="widget-header">
        <h3>Recent Client Inquiries</h3>
        <a href="#inquiries" className="view-all-link">View All</a>
      </div>

      <div className="inquiries-list">
        {inquiries.length === 0 ? (
          <p className="no-data">No inquiries yet</p>
        ) : (
          inquiries.map(inquiry => (
            <div key={inquiry.id} className="inquiry-item" data-testid={`inquiry-${inquiry.id}`}>
              <div className="inquiry-header">
                <div className="inquiry-title">
                  <h4>{inquiry.name}</h4>
                  <span
                    className="priority-badge"
                    style={{ backgroundColor: priorityColors[inquiry.priority] }}
                    title={getPriorityLabel(inquiry.priority)}
                  >
                    {getPriorityLabel(inquiry.priority)}
                  </span>
                </div>
                <span
                  className="status-badge"
                  style={{ backgroundColor: statusColors[inquiry.status] }}
                >
                  {getStatusLabel(inquiry.status)}
                </span>
              </div>

              <p className="inquiry-project-type">{inquiry.projectType}</p>
              <p className="inquiry-message">{inquiry.message.substring(0, 80)}...</p>

              <div className="inquiry-footer">
                <span className="inquiry-email">{inquiry.email}</span>
                <span className="inquiry-date">
                  {new Date(inquiry.submittedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentInquiriesWidget;
