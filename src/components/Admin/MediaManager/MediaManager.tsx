import React, { useState } from 'react';
import { MediaFile, UploadProgress } from '@/types';
import './MediaManager.css';

interface MediaManagerProps {
  onClose?: () => void;
}

/**
 * Media Management Component
 * Drag-and-drop file upload and media management interface
 * Requirements: 11.1, 11.3, 11.4, 11.6
 */
const MediaManager: React.FC<MediaManagerProps> = ({ onClose }) => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach((file) => {
      // Validate file
      if (!isValidFile(file)) {
        alert(`Invalid file: ${file.name}`);
        return;
      }

      // Create progress entry
      const progressEntry: UploadProgress = {
        filename: file.name,
        progress: 0,
        status: 'uploading'
      };

      setUploadProgress(prev => [...prev, progressEntry]);

      // Simulate upload with progress
      simulateUpload(file, progressEntry);
    });
  };

  const isValidFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm'];
    const validSizes = [5, 10, 50]; // MB
    const maxSize = Math.max(...validSizes) * 1024 * 1024;

    return validTypes.includes(file.type) && file.size <= maxSize;
  };

  const getFileMimeType = (file: File): string => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    return 'unknown';
  };

  const simulateUpload = (file: File, progressEntry: UploadProgress) => {
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 30;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // Create media file
        const mediaFile: MediaFile = {
          id: Math.random().toString(36).substr(2, 9),
          filename: file.name,
          originalName: file.name,
          mimeType: file.type,
          size: file.size,
          url: URL.createObjectURL(file),
          thumbnailUrl: getFileMimeType(file) === 'image' ? URL.createObjectURL(file) : undefined,
          alt: '',
          description: '',
          tags: [],
          uploadedAt: new Date(),
          uploadedBy: 'admin'
        };

        setMediaFiles(prev => [mediaFile, ...prev]);

        // Update progress
        setUploadProgress(prev =>
          prev.map(p =>
            p.filename === file.name
              ? { ...p, progress: 100, status: 'complete' as const }
              : p
          )
        );

        // Remove from progress after 2 seconds
        setTimeout(() => {
          setUploadProgress(prev =>
            prev.filter(p => p.filename !== file.name)
          );
        }, 2000);
      } else {
        setUploadProgress(prev =>
          prev.map(p =>
            p.filename === file.name
              ? { ...p, progress }
              : p
          )
        );
      }
    }, 300);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this file?')) {
      setMediaFiles(mediaFiles.filter(file => file.id !== id));
    }
  };

  const handleUpdateTags = (id: string, tags: string[]) => {
    setMediaFiles(mediaFiles.map(file =>
      file.id === id ? { ...file, tags } : file
    ));
  };

  const handleUpdateDescription = (id: string, description: string) => {
    setMediaFiles(mediaFiles.map(file =>
      file.id === id ? { ...file, description } : file
    ));
  };

  const filteredMedia = mediaFiles.filter(file => {
    const matchesSearch = 
      file.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = 
      filterType === 'all' ||
      file.mimeType.startsWith(filterType);

    return matchesSearch && matchesFilter;
  });

  const getFileTypeIcon = (mimeType: string): string => {
    if (mimeType.startsWith('image/')) return '🖼️';
    if (mimeType.startsWith('video/')) return '🎥';
    return '📄';
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="media-manager" data-testid="media-manager">
      <div className="media-header">
        <h2>Media Management</h2>
      </div>

      {/* Upload Area */}
      <div
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        data-testid="upload-area"
      >
        <div className="upload-content">
          <span className="upload-icon">📤</span>
          <h3>Drop files here or click to upload</h3>
          <p>Supported: Images (JPG, PNG, GIF) and Videos (MP4, WebM)</p>
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            className="file-input"
            accept="image/*,video/*"
            data-testid="file-input"
          />
        </div>
      </div>

      {/* Upload Progress */}
      {uploadProgress.length > 0 && (
        <div className="upload-progress-list" data-testid="upload-progress">
          {uploadProgress.map((item) => (
            <div key={item.filename} className="progress-item">
              <span className="filename">{item.filename}</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
              </div>
              <span className="percentage">{Math.round(item.progress)}%</span>
            </div>
          ))}
        </div>
      )}

      {/* Filters and Search */}
      <div className="media-controls">
        <input
          type="text"
          placeholder="Search media..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="search-input"
          className="search-input"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as any)}
          data-testid="filter-type"
          className="filter-select"
        >
          <option value="all">All Files</option>
          <option value="image">Images Only</option>
          <option value="video">Videos Only</option>
        </select>
      </div>

      {/* Media Gallery */}
      <div className="media-gallery" data-testid="media-gallery">
        {filteredMedia.length === 0 ? (
          <p className="no-media">No media files found</p>
        ) : (
          <div className="gallery-grid">
            {filteredMedia.map((file) => (
              <div key={file.id} className="media-card" data-testid={`media-${file.id}`}>
                {file.thumbnailUrl ? (
                  <div className="media-preview">
                    <img src={file.thumbnailUrl} alt={file.alt || file.filename} />
                  </div>
                ) : (
                  <div className="media-preview placeholder">
                    <span className="file-icon">{getFileTypeIcon(file.mimeType)}</span>
                  </div>
                )}

                <div className="media-info">
                  <h4 title={file.filename}>{file.filename}</h4>
                  <p className="file-details">
                    <span>{file.mimeType}</span>
                    <span>•</span>
                    <span>{formatFileSize(file.size)}</span>
                  </p>

                  <input
                    type="text"
                    placeholder="Add description"
                    value={file.description}
                    onChange={(e) => handleUpdateDescription(file.id, e.target.value)}
                    className="description-input"
                    data-testid={`description-${file.id}`}
                  />

                  <input
                    type="text"
                    placeholder="Add tags (comma-separated)"
                    value={file.tags.join(', ')}
                    onChange={(e) => handleUpdateTags(file.id, e.target.value.split(',').map(t => t.trim()))}
                    className="tags-input"
                    data-testid={`tags-${file.id}`}
                  />

                  <div className="media-actions">
                    <button
                      className="btn-copy-url"
                      onClick={() => {
                        navigator.clipboard.writeText(file.url);
                        alert('URL copied to clipboard');
                      }}
                      data-testid={`btn-copy-${file.id}`}
                    >
                      Copy URL
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(file.id)}
                      data-testid={`btn-delete-${file.id}`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="media-stats" data-testid="media-stats">
        <div className="stat-item">
          <span className="stat-label">Total Files</span>
          <span className="stat-value">{mediaFiles.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Size</span>
          <span className="stat-value">
            {formatFileSize(mediaFiles.reduce((sum, f) => sum + f.size, 0))}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Images</span>
          <span className="stat-value">{mediaFiles.filter(f => f.mimeType.startsWith('image/')).length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Videos</span>
          <span className="stat-value">{mediaFiles.filter(f => f.mimeType.startsWith('video/')).length}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaManager;
