import React, { useState, useEffect, useRef } from 'react';
import { VideoItem, VideoGalleryProps } from '@/types';

interface VideoThumbnailProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
  isVisible: boolean;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video, onSelect, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const formatDuration = (duration?: number) => {
    if (!duration) return '';
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatViewCount = (count?: number) => {
    if (!count) return '';
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  // Sanitize video ID for use as CSS selector and data attribute
  const sanitizedId = video.id.replace(/[^a-zA-Z0-9-_]/g, '_');
  
  // Ensure title and description are not empty
  const displayTitle = video.title.trim() || 'Untitled Video';
  const displayDescription = video.description.trim() || 'No description available';

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onSelect(video)}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        {/* Lazy Loading Placeholder */}
        {!isVisible && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Actual Thumbnail */}
        {isVisible && (
          <>
            {!imageError ? (
              <img
                src={video.thumbnail}
                alt={displayTitle}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="w-12 h-12 text-gray-500">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Duration Badge */}
            {video.duration && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {formatDuration(video.duration)}
              </div>
            )}
            
            {/* Featured Badge */}
            {video.featured && (
              <div className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded">
                Featured
              </div>
            )}
          </>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Information */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {displayTitle}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {displayDescription}
        </p>
        
        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="capitalize bg-gray-100 px-2 py-1 rounded">
            {video.category.replace(/_/g, ' ')}
          </span>
          {video.viewCount && (
            <span>{formatViewCount(video.viewCount)}</span>
          )}
        </div>
        
        {/* Tags */}
        {video.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {video.tags.slice(0, 3).map((tag, index) => (
              <span
                key={`${sanitizedId}-tag-${index}`}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag.trim() || 'Tag'}
              </span>
            ))}
            {video.tags.length > 3 && (
              <span className="text-xs text-gray-500">
                +{video.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const VideoGallery: React.FC<VideoGalleryProps> = ({ 
  videos, 
  onVideoSelect, 
  selectedCategory 
}) => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter videos based on selected category
  const filteredVideos = selectedCategory 
    ? videos.filter(video => video.category === selectedCategory)
    : videos;

  // Set up intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = entry.target.getAttribute('data-video-id');
            if (videoId) {
              setVisibleItems(prev => new Set([...prev, videoId]));
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe video thumbnail elements
  useEffect(() => {
    if (!observerRef.current) return;

    const videoElements = containerRef.current?.querySelectorAll('[data-video-id]');
    videoElements?.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      videoElements?.forEach((element) => {
        observerRef.current?.unobserve(element);
      });
    };
  }, [filteredVideos]);

  if (filteredVideos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
        <p className="text-gray-600">
          {selectedCategory 
            ? `No videos found in the "${selectedCategory.replace(/_/g, ' ')}" category.`
            : 'No videos available at the moment.'
          }
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video, index) => {
          // Create a unique key that combines ID and index to handle duplicate IDs
          const uniqueKey = `${video.id}-${index}`;
          const sanitizedId = video.id.replace(/[^a-zA-Z0-9-_]/g, '_');
          
          return (
            <div
              key={uniqueKey}
              data-video-id={sanitizedId}
              className="animate-fade-in"
            >
              <VideoThumbnail
                video={video}
                onSelect={onVideoSelect}
                isVisible={visibleItems.has(sanitizedId)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoGallery;