import React, { useState } from 'react';
import { ContentItem, ContentStatus, VideoCategory } from '@/types';
import './ContentManager.css';

interface ContentManagerProps {
  onClose?: () => void;
}

/**
 * Content Management Component
 * CRUD interface for video content management
 * Requirements: 10.1, 10.2, 10.3, 10.6
 */
const ContentManager: React.FC<ContentManagerProps> = ({ onClose }) => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<ContentStatus | 'all'>('all');

  const [formData, setFormData] = useState({
    title: '',
    type: 'video' as const,
    category: VideoCategory.COMMERCIAL,
    description: '',
    status: ContentStatus.DRAFT
  });

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({
      title: '',
      type: 'video',
      category: VideoCategory.COMMERCIAL,
      description: '',
      status: ContentStatus.DRAFT
    });
    setIsFormOpen(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      type: item.type,
      category: item.content.category || VideoCategory.COMMERCIAL,
      description: item.content.description || '',
      status: item.status
    });
    setIsFormOpen(true);
  };

  const handleSave = () => {
    if (!formData.title.trim()) {
      alert('Please enter a title');
      return;
    }

    if (editingId) {
      // Update existing
      setContentItems(contentItems.map(item =>
        item.id === editingId
          ? {
              ...item,
              title: formData.title,
              content: {
                ...item.content,
                category: formData.category,
                description: formData.description
              },
              status: formData.status,
              updatedAt: new Date()
            }
          : item
      ));
    } else {
      // Create new
      const newItem: ContentItem = {
        id: Math.random().toString(36).substr(2, 9),
        title: formData.title,
        type: formData.type,
        content: {
          category: formData.category,
          description: formData.description
        },
        status: formData.status,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'admin'
      };
      setContentItems([newItem, ...contentItems]);
    }

    setIsFormOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setContentItems(contentItems.filter(item => item.id !== id));
    }
  };

  const handlePublish = (id: string) => {
    setContentItems(contentItems.map(item =>
      item.id === id
        ? { ...item, status: ContentStatus.PUBLISHED, updatedAt: new Date() }
        : item
    ));
  };

  const handleArchive = (id: string) => {
    setContentItems(contentItems.map(item =>
      item.id === id
        ? { ...item, status: ContentStatus.ARCHIVED, updatedAt: new Date() }
        : item
    ));
  };

  const filteredItems = filterStatus === 'all'
    ? contentItems
    : contentItems.filter(item => item.status === filterStatus);

  const getStatusColor = (status: ContentStatus): string => {
    switch (status) {
      case ContentStatus.DRAFT:
        return '#95a5a6';
      case ContentStatus.PUBLISHED:
        return '#27ae60';
      case ContentStatus.ARCHIVED:
        return '#7f8c8d';
      default:
        return '#333';
    }
  };

  return (
    <div className="content-manager" data-testid="content-manager">
      <div className="content-header">
        <h2>Content Management</h2>
        <button
          className="btn-primary"
          onClick={handleAddNew}
          data-testid="btn-add-content"
        >
          + Add New Content
        </button>
      </div>

      <div className="content-filters">
        <label htmlFor="status-filter">Filter by Status:</label>
        <select
          id="status-filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as any)}
          data-testid="status-filter"
        >
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {isFormOpen && (
        <div className="content-form-container" data-testid="content-form">
          <div className="content-form">
            <h3>{editingId ? 'Edit Content' : 'Add New Content'}</h3>

            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter content title"
                data-testid="input-title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                data-testid="select-type"
              >
                <option value="video">Video</option>
                <option value="image">Image</option>
                <option value="text">Text</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                data-testid="select-category"
              >
                <option value="commercial">Commercial</option>
                <option value="personal">Personal</option>
                <option value="documentary">Documentary</option>
                <option value="music-video">Music Video</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter content description"
                rows={4}
                data-testid="textarea-description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                data-testid="select-status"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="form-actions">
              <button
                className="btn-save"
                onClick={handleSave}
                data-testid="btn-save"
              >
                Save
              </button>
              <button
                className="btn-cancel"
                onClick={() => setIsFormOpen(false)}
                data-testid="btn-cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="content-list">
        {filteredItems.length === 0 ? (
          <p className="no-items">No content items found</p>
        ) : (
          <div className="content-table">
            <div className="table-header">
              <div className="col-title">Title</div>
              <div className="col-type">Type</div>
              <div className="col-status">Status</div>
              <div className="col-date">Last Updated</div>
              <div className="col-actions">Actions</div>
            </div>

            {filteredItems.map((item) => (
              <div key={item.id} className="table-row" data-testid={`content-item-${item.id}`}>
                <div className="col-title">{item.title}</div>
                <div className="col-type">
                  <span className="badge">{item.type}</span>
                </div>
                <div className="col-status">
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(item.status) }}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="col-date">
                  {new Date(item.updatedAt).toLocaleDateString()}
                </div>
                <div className="col-actions">
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(item)}
                    data-testid={`btn-edit-${item.id}`}
                  >
                    Edit
                  </button>
                  {item.status === ContentStatus.DRAFT && (
                    <button
                      className="btn-publish"
                      onClick={() => handlePublish(item.id)}
                      data-testid={`btn-publish-${item.id}`}
                    >
                      Publish
                    </button>
                  )}
                  {item.status !== ContentStatus.ARCHIVED && (
                    <button
                      className="btn-archive"
                      onClick={() => handleArchive(item.id)}
                      data-testid={`btn-archive-${item.id}`}
                    >
                      Archive
                    </button>
                  )}
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(item.id)}
                    data-testid={`btn-delete-${item.id}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManager;
