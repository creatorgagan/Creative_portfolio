import React, { useState, useEffect } from 'react';
import { VideoCategory } from '../../types';
import { useYouTube } from '../../hooks/useYouTube';
import { YouTubeService } from '../../services/youtube';

export interface YouTubeIntegrationProps {
  playlistId?: string;
  category?: VideoCategory;
  maxVideos?: number;
  showMetadata?: boolean;
  onVideoSelect?: (video: any) => void;
  className?: string;
}

const YouTubeIntegration: React.FC<YouTubeIntegrationProps> = ({
  playlistId,
  category = VideoCategory.OTHER,
  maxVideos = 10,
  showMetadata = true,
  onVideoSelect,
  className = ''
}) => {
  const { playlist, videos, loading, error, fetchPlaylist, clearError, retry } = useYouTube();

  useEffect(() => {
    if (playlistId) {
      fetchPlaylist(playlistId, category);
    }
  }, [playlistId, category, fetchPlaylist]);

  const displayVideos = maxVideos ? videos.slice(0, maxVideos) : videos;

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading YouTube content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-red-800">YouTube Integration Error</h3>
            <p className="mt-1 text-sm text-red-700">{error}</p>
            <div className="mt-4 flex space-x-3">
              <button
                onClick={retry}
                className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                Retry
              </button>
              <button
                onClick={clearError}
                className="text-red-600 hover:text-red-500 text-sm font-medium"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!playlist || videos.length === 0) {
    return (
      <div className={`text-center p-8 text-gray-500 ${className}`}>
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <p>No YouTube videos found</p>
        {playlistId && (
          <p className="text-sm mt-2">
            Check that the playlist ID "{playlistId}" is correct and public
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Playlist Header */}
      {playlist && showMetadata && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{playlist.title}</h2>
          {playlist.description && (
            <p className="text-gray-600 mb-4">{playlist.description}</p>
          )}
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            <span>{videos.length} videos</span>
            <span className="mx-2">•</span>
            <a
              href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              View on YouTube
            </a>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onVideoSelect?.(video)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-200">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Duration Overlay */}
              {video.duration && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {YouTubeService.formatDuration(video.duration)}
                </div>
              )}
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {video.title}
              </h3>
              
              {showMetadata && (
                <>
                  {video.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {video.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      {video.viewCount && (
                        <span>{YouTubeService.formatViewCount(video.viewCount)}</span>
                      )}
                      <span className="capitalize">
                        {video.category.replace(/_/g, ' ')}
                      </span>
                    </div>
                    
                    {video.createdDate && (
                      <span>
                        {new Date(video.createdDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  {video.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {video.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {maxVideos && videos.length > maxVideos && (
        <div className="text-center mt-8">
          <button
            onClick={() => {
              // This would typically trigger loading more videos
              // For now, we'll just show all videos
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            View All {videos.length} Videos
          </button>
        </div>
      )}
    </div>
  );
};

export default YouTubeIntegration;