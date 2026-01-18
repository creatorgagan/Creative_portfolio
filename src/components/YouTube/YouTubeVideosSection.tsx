import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';
import { VideoItem } from '@/types';

interface YouTubeSectionProps {
  title: string;
  description?: string;
  videos: VideoItem[];
  gridCols?: number;
  className?: string;
}

/**
 * YouTube Section Component
 * Displays YouTube videos in a grid layout with embedded players
 * Supports multiple videos with responsive layout
 */
const YouTubeSection: React.FC<YouTubeSectionProps> = ({
  title,
  description,
  videos,
  gridCols = 3,
  className = '',
}) => {
  if (!videos.length) {
    return null;
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
          )}
        </div>

        {/* Videos Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-8`}>
          {videos.map((video) => (
            <div
              key={video.id}
              className="group flex flex-col h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* YouTube Embed */}
              <div className="relative w-full bg-black flex-grow">
                {video.youtubeId ? (
                  <YouTubeEmbed
                    videoId={video.youtubeId}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    className="w-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-400">Video unavailable</p>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4 bg-white flex-shrink-0">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {video.description}
                </p>
                
                {/* Tags */}
                {video.tags && video.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {video.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metadata */}
                {(video.duration || video.viewCount) && (
                  <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500 flex gap-4">
                    {video.duration && (
                      <span>Duration: {Math.floor(video.duration / 60)}m</span>
                    )}
                    {video.viewCount && (
                      <span>{video.viewCount.toLocaleString()} views</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
