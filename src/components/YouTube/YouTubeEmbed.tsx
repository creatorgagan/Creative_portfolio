import React, { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  className?: string;
  autoplay?: boolean;
  allowFullscreen?: boolean;
}

/**
 * YouTube Video Embed Component
 * Displays embedded YouTube videos with thumbnail overlay and play button
 * Similar to: <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
 */
const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  thumbnail,
  width = 560,
  height = 315,
  className = '',
  autoplay = false,
  allowFullscreen = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Default YouTube thumbnail (high quality)
  const defaultThumbnail = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?${new URLSearchParams({
    autoplay: autoplay || isPlaying ? '1' : '0',
    enablejsapi: '1',
    rel: '0',
    modestbranding: '1',
  })}`;

  const aspectRatio = (height / width) * 100;

  return (
    <div
      className={`sqs-video-wrapper video-none relative w-full ${className}`}
      data-provider-name="YouTube"
    >
      <div className="intrinsic relative w-full">
        {/* Responsive container with padding-bottom trick for aspect ratio */}
        <div
          className="intrinsic-inner relative w-full overflow-hidden"
          style={{ paddingBottom: `${aspectRatio}%` }}
        >
          {/* Thumbnail Overlay */}
          {!isPlaying && (
            <div className="sqs-video-overlay absolute inset-0 overflow-hidden">
              {/* Thumbnail Image */}
              <img
                src={defaultThumbnail}
                alt={title}
                className="w-full h-full object-cover"
                data-parent-ratio={width / height}
              />

              {/* Play Button Overlay */}
              <div
                className="sqs-video-icon absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
                aria-label={`Play ${title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPlaying(true);
                  }
                }}
              >
                {/* Play Button Icon */}
                <div className="flex items-center justify-center w-20 h-20 bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-lg">
                  <div className="w-0 h-0 border-l-12 border-l-transparent border-r-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ml-1"
                    style={{
                      borderLeft: '16px solid white',
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* YouTube iFrame */}
          {isPlaying && (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              width={width}
              height={height}
              src={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={allowFullscreen}
              title={title}
              style={{ opacity: 1 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
