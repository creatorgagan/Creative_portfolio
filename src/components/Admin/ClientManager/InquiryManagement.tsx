import React, { useState } from 'react';
import { ClientInquiry, InquiryStatus, InquiryPriority, InquiryNote } from '@/types';
import './InquiryManagement.css';

interface InquiryManagementProps {
  onClose?: () => void;
}

/**
 * Inquiry Management Dashboard Component
 * Build inquiry management interface with status and communication tracking
 * Requirements: 12.1, 12.2, 12.3, 12.5
 */
const InquiryManagement: React.FC<InquiryManagementProps> = ({ onClose }) => {
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<ClientInquiry | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<InquiryStatus | 'all'>('all');
  const [filterPriority, setFilterPriority] = useState<InquiryPriority | 'all'>('all');
  const [noteText, setNoteText] = useState('');

  const addMockInquiry = () => {
    const names = ['John Smith', 'Sarah Johnson', 'Mike Davis', 'Emily Chen'];
    const types = ['Commercial', 'Music Video', 'Documentary', 'Personal'];
    
    const newInquiry: ClientInquiry = {
      id: Math.random().toString(36).substr(2, 9),
      name: names[Math.floor(Math.random() * names.length)],
      email: `client${inquiries.length}@example.com`,
      phone: '555-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
      projectType: types[Math.floor(Math.random() * types.length)],
      message: 'We are interested in your video production services.',
      status: InquiryStatus.NEW,
      priority: Object.values(InquiryPriority)[Math.floor(Math.random() * 4)],
      submittedAt: new Date(),
      notes: []
    };

    setInquiries([newInquiry, ...inquiries]);
  };

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    setInquiries(inquiries.map(inq =>
      inq.id === id
        ? {
            ...inq,
            status,
            respondedAt: status === InquiryStatus.RESPONDED ? new Date() : inq.respondedAt
          }
        : inq
    ));

    if (selectedInquiry?.id === id) {
      setSelectedInquiry({
        ...selectedInquiry,
        status,
        respondedAt: status === InquiryStatus.RESPONDED ? new Date() : selectedInquiry.respondedAt
      });
    }
  };

  const updateInquiryPriority = (id: string, priority: InquiryPriority) => {
    setInquiries(inquiries.map(inq =>
      inq.id === id ? { ...inq, priority } : inq
    ));

    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, priority });
    }
  };

  const addNote = () => {
    if (!selectedInquiry || !noteText.trim()) return;

    const newNote: InquiryNote = {
      id: Math.random().toString(36).substr(2, 9),
      content: noteText,
      createdAt: new Date(),
      createdBy: 'admin'
    };

    const updatedInquiry = {
      ...selectedInquiry,
      notes: [newNote, ...selectedInquiry.notes]
    };

    setInquiries(inquiries.map(inq =>
      inq.id === selectedInquiry.id ? updatedInquiry : inq
    ));

    setSelectedInquiry(updatedInquiry);
    setNoteText('');
  };

  const deleteInquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      setInquiries(inquiries.filter(inq => inq.id !== id));
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  const deleteNote = (noteId: string) => {
    if (!selectedInquiry) return;

    const updatedInquiry = {
      ...selectedInquiry,
      notes: selectedInquiry.notes.filter(n => n.id !== noteId)
    };

    setInquiries(inquiries.map(inq =>
      inq.id === selectedInquiry.id ? updatedInquiry : inq
    ));

    setSelectedInquiry(updatedInquiry);
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = 
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || inq.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || inq.priority === filterPriority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: InquiryStatus): string => {
    switch (status) {
      case InquiryStatus.NEW:
        return '#3498db';
      case InquiryStatus.READ:
        return '#95a5a6';
      case InquiryStatus.IN_PROGRESS:
        return '#f39c12';
      case InquiryStatus.RESPONDED:
        return '#27ae60';
      case InquiryStatus.ARCHIVED:
        return '#7f8c8d';
    }
  };

  const getPriorityColor = (priority: InquiryPriority): string => {
    switch (priority) {
      case InquiryPriority.LOW:
        return '#95a5a6';
      case InquiryPriority.MEDIUM:
        return '#3498db';
      case InquiryPriority.HIGH:
        return '#e74c3c';
      case InquiryPriority.URGENT:
        return '#c0392b';
    }
  };

  return (
    <div className="inquiry-management" data-testid="inquiry-management">
      <div className="manager-header">
        <h2>Client Inquiry Management</h2>
        <button
          className="btn-add"
          onClick={addMockInquiry}
          data-testid="btn-add-inquiry"
        >
          + Add Sample Inquiry
        </button>
      </div>

      <div className="manager-container">
        {/* Left Panel - Inquiry List */}
        <div className="inquiry-list-panel">
          <div className="list-controls">
            <input
              type="text"
              placeholder="Search inquiries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              data-testid="search-inquiries"
            />

            <div className="filter-group">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="filter-select"
                data-testid="filter-status"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="in_progress">In Progress</option>
                <option value="responded">Responded</option>
                <option value="archived">Archived</option>
              </select>

              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value as any)}
                className="filter-select"
                data-testid="filter-priority"
              >
                <option value="all">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div className="inquiry-items">
            {filteredInquiries.length === 0 ? (
              <p className="no-results">No inquiries found</p>
            ) : (
              filteredInquiries.map(inq => (
                <div
                  key={inq.id}
                  className={`inquiry-item ${selectedInquiry?.id === inq.id ? 'selected' : ''}`}
                  onClick={() => setSelectedInquiry(inq)}
                  data-testid={`inquiry-item-${inq.id}`}
                >
                  <div className="item-header">
                    <h4>{inq.name}</h4>
                    <span
                      className="priority-dot"
                      style={{ backgroundColor: getPriorityColor(inq.priority) }}
                      title={inq.priority}
                    ></span>
                  </div>
                  <p className="item-meta">
                    <span>{inq.projectType}</span>
                    <span>•</span>
                    <span>{new Date(inq.submittedAt).toLocaleDateString()}</span>
                  </p>
                  <p className="item-preview">{inq.message.substring(0, 60)}...</p>
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(inq.status) }}
                  >
                    {inq.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Panel - Inquiry Details */}
        <div className="inquiry-detail-panel">
          {selectedInquiry ? (
            <>
              <div className="detail-header">
                <div>
                  <h3>{selectedInquiry.name}</h3>
                  <p className="detail-contact">
                    <a href={`mailto:${selectedInquiry.email}`}>{selectedInquiry.email}</a>
                    {selectedInquiry.phone && (
                      <>
                        <span> • </span>
                        <a href={`tel:${selectedInquiry.phone}`}>{selectedInquiry.phone}</a>
                      </>
                    )}
                  </p>
                </div>
                <button
                  className="btn-delete"
                  onClick={() => deleteInquiry(selectedInquiry.id)}
                  data-testid="btn-delete-inquiry"
                >
                  Delete
                </button>
              </div>

              <div className="detail-controls">
                <div className="control-group">
                  <label>Status:</label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => updateInquiryStatus(selectedInquiry.id, e.target.value as InquiryStatus)}
                    className="control-select"
                    data-testid="inquiry-status-select"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="in_progress">In Progress</option>
                    <option value="responded">Responded</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="control-group">
                  <label>Priority:</label>
                  <select
                    value={selectedInquiry.priority}
                    onChange={(e) => updateInquiryPriority(selectedInquiry.id, e.target.value as InquiryPriority)}
                    className="control-select"
                    data-testid="inquiry-priority-select"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="detail-section">
                <h4>Project Details</h4>
                <div className="detail-info">
                  <div className="info-row">
                    <span className="info-label">Project Type:</span>
                    <span className="info-value">{selectedInquiry.projectType}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Submitted:</span>
                    <span className="info-value">{new Date(selectedInquiry.submittedAt).toLocaleString()}</span>
                  </div>
                  {selectedInquiry.respondedAt && (
                    <div className="info-row">
                      <span className="info-label">Responded:</span>
                      <span className="info-value">{new Date(selectedInquiry.respondedAt).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="detail-section">
                <h4>Message</h4>
                <p className="detail-message">{selectedInquiry.message}</p>
              </div>

              <div className="detail-section notes-section">
                <h4>Communication History</h4>

                <div className="add-note">
                  <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note about this inquiry..."
                    rows={3}
                    className="note-textarea"
                    data-testid="note-textarea"
                  />
                  <button
                    className="btn-add-note"
                    onClick={addNote}
                    disabled={!noteText.trim()}
                    data-testid="btn-add-note"
                  >
                    Add Note
                  </button>
                </div>

                <div className="notes-list">
                  {selectedInquiry.notes.length === 0 ? (
                    <p className="no-notes">No notes yet</p>
                  ) : (
                    selectedInquiry.notes.map(note => (
                      <div key={note.id} className="note-item" data-testid={`note-${note.id}`}>
                        <div className="note-header">
                          <span className="note-author">By {note.createdBy}</span>
                          <span className="note-time">{new Date(note.createdAt).toLocaleString()}</span>
                        </div>
                        <p className="note-content">{note.content}</p>
                        <button
                          className="btn-delete-note"
                          onClick={() => deleteNote(note.id)}
                          data-testid={`btn-delete-note-${note.id}`}
                        >
                          Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="no-selection">
              <p>Select an inquiry to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryManagement;
