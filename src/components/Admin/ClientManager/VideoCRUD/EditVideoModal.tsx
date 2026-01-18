import React, { useState, useEffect } from 'react';
import { VideoItem, VideoCategory } from '../../../../types';

interface EditVideoModalProps {
  isOpen: boolean;
  video: VideoItem | null;
  onClose: () => void;
  onSubmit: (videoId: string, updates: any) => Promise<void>;
  onDelete?: (videoId: string) => Promise<void>;
  loading?: boolean;
}

const EditVideoModal: React.FC<EditVideoModalProps> = ({
  isOpen,
  video,
  onClose,
  onSubmit,
  onDelete,
  loading = false
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    youtubeId: '',
    thumbnail: '',
    category: VideoCategory.COMMERCIAL,
    tags: '',
    featured: false,
    duration: '',
    viewCount: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [videoSource, setVideoSource] = useState<'upload' | 'youtube' | 'url'>('url');

  // Populate form when video changes
  useEffect(() => {
    if (video) {
      setFormData({
        title: video.title,
        description: video.description,
        videoUrl: video.videoUrl,
        youtubeId: video.youtubeId || '',
        thumbnail: video.thumbnail,
        category: video.category,
        tags: video.tags.join(', '),
        featured: video.featured,
        duration: video.duration ? video.duration.toString() : '',
        viewCount: video.viewCount ? video.viewCount.toString() : ''
      });

      // Determine video source
      if (video.youtubeId) {
        setVideoSource('youtube');
      } else if (video.videoUrl.startsWith('http')) {
        setVideoSource('url');
      } else {
        setVideoSource('upload');
      }
    }
  }, [video]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Video title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Video description is required';
    }

    if (videoSource === 'youtube') {
      if (!formData.youtubeId.trim()) {
        newErrors.youtubeId = 'YouTube video ID is required';
      } else if (!/^[A-Za-z0-9_-]{11}$/.test(formData.youtubeId.trim())) {
        newErrors.youtubeId = 'Please enter a valid YouTube video ID (11 characters)';
      }
    } else if (videoSource === 'url') {
      if (!formData.videoUrl.trim()) {
        newErrors.videoUrl = 'Video URL is required';
      } else if (!/^https?:\/\/.+/.test(formData.videoUrl.trim())) {
        newErrors.videoUrl = 'Please enter a valid URL (starting with http:// or https://)';
      }
    }

    if (!formData.thumbnail.trim()) {
      newErrors.thumbnail = 'Thumbnail URL is required';
    } else if (!/^https?:\/\/.+/.test(formData.thumbnail.trim())) {
      newErrors.thumbnail = 'Please enter a valid thumbnail URL';
    }

    if (formData.duration && isNaN(Number(formData.duration))) {
      newErrors.duration = 'Duration must be a valid number (in seconds)';
    }

    if (formData.viewCount && isNaN(Number(formData.viewCount))) {
      newErrors.viewCount = 'View count must be a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!video || !validateForm()) {
      return;
    }

    try {
      const updates = {
        ...formData,
        videoUrl: videoSource === 'youtube' 
          ? `https://www.youtube.com/watch?v=${formData.youtubeId}` 
          : formData.videoUrl,
        youtubeId: videoSource === 'youtube' ? formData.youtubeId : undefined,
        duration: formData.duration ? Number(formData.duration) : undefined,
        viewCount: formData.viewCount ? Number(formData.viewCount) : undefined,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
      };

      await onSubmit(video.id, updates);
      onClose();
    } catch (error) {
      console.error('Failed to update video:', error);
    }
  };

  const handleDelete = async () => {
    if (!video || !onDelete) return;

    try {
      await onDelete(video.id);
      setShowDeleteConfirm(false);
      onClose();
    } catch (error) {
      console.error('Failed to delete video:', error);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : '';
  };

  const handleYouTubeUrlPaste = (url: string) => {
    const videoId = extractYouTubeId(url);
    if (videoId) {
      setFormData(prev => ({
        ...prev,
        youtubeId: videoId,
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      }));
    }
  };

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Edit Video</h2>
              <p className="text-sm text-gray-600">
                Created {new Intl.DateTimeFormat('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric' 
                }).format(video.createdDate)}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Video Source Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Video Source
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setVideoSource('upload')}
                  className={`p-3 border rounded-lg text-center transition-colors ${
                    videoSource === 'upload'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium">File Upload</div>
                  <div className="text-xs text-gray-500 mt-1">Upload video file</div>
                </button>
                <button
                  type="button"
                  onClick={() => setVideoSource('youtube')}
                  className={`p-3 border rounded-lg text-center transition-colors ${
                    videoSource === 'youtube'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium">YouTube</div>
                  <div className="text-xs text-gray-500 mt-1">YouTube video</div>
                </button>
                <button
                  type="button"
                  onClick={() => setVideoSource('url')}
                  className={`p-3 border rounded-lg text-center transition-colors ${
                    videoSource === 'url'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium">External URL</div>
                  <div className="text-xs text-gray-500 mt-1">Video URL</div>
                </button>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.title ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter video title"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={VideoCategory.COMMERCIAL}>Commercial</option>
                  <option value={VideoCategory.PERSONAL}>Personal</option>
                  <option value={VideoCategory.DOCUMENTARY}>Documentary</option>
                  <option value={VideoCategory.MUSIC_VIDEO}>Music Video</option>
                  <option value={VideoCategory.OTHER}>Other</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => handleInputChange('featured', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured Video</span>
                </label>
              </div>
            </div>

            {/* Video Source Specific Fields */}
            {videoSource === 'youtube' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YouTube URL or Video ID *
                  </label>
                  <input
                    type="text"
                    value={formData.youtubeId}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.includes('youtube.com') || value.includes('youtu.be')) {
                        handleYouTubeUrlPaste(value);
                      } else {
                        handleInputChange('youtubeId', value);
                      }
                    }}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.youtubeId ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter YouTube URL or video ID (e.g., dQw4w9WgXcQ)"
                  />
                  {errors.youtubeId && <p className="text-red-500 text-sm mt-1">{errors.youtubeId}</p>}
                </div>
              </div>
            )}

            {videoSource === 'url' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video URL *
                </label>
                <input
                  type="url"
                  value={formData.videoUrl}
                  onChange={(e) => handleInputChange('videoUrl', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.videoUrl ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="https://example.com/video.mp4"
                />
                {errors.videoUrl && <p className="text-red-500 text-sm mt-1">{errors.videoUrl}</p>}
              </div>
            )}

            {/* Thumbnail */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Thumbnail URL *
              </label>
              <input
                type="url"
                value={formData.thumbnail}
                onChange={(e) => handleInputChange('thumbnail', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.thumbnail ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="https://example.com/thumbnail.jpg"
              />
              {errors.thumbnail && <p className="text-red-500 text-sm mt-1">{errors.thumbnail}</p>}
              {formData.thumbnail && (
                <div className="mt-2">
                  <img
                    src={formData.thumbnail}
                    alt="Thumbnail preview"
                    className="w-32 h-18 object-cover rounded border"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={3}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.description ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Describe the video content, purpose, and key highlights..."
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (seconds)
                </label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.duration ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="0"
                  min="0"
                />
                {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  View Count
                </label>
                <input
                  type="number"
                  value={formData.viewCount}
                  onChange={(e) => handleInputChange('viewCount', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.viewCount ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="0"
                  min="0"
                />
                {errors.viewCount && <p className="text-red-500 text-sm mt-1">{errors.viewCount}</p>}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter tags separated by commas (e.g., wedding, cinematic, outdoor)"
              />
              <p className="text-sm text-gray-500 mt-1">Separate multiple tags with commas</p>
            </div>

            {/* Form Actions */}
            <div className="flex justify-between pt-4 border-t border-gray-200">
              {/* Delete Button */}
              {onDelete && (
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  disabled={loading}
                >
                  Delete Video
                </button>
              )}

              {/* Save/Cancel Buttons */}
              <div className="flex space-x-3 ml-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Saving...
                    </div>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Delete Video</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{video.title}</strong>? This action cannot be undone.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditVideoModal;