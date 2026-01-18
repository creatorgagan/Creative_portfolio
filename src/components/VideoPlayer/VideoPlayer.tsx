import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactPlayer from 'react-player';
import { VideoPlayerProps } from '../../types';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  isOpen,
  onClose,
  onNext,
  onPrevious
}) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);

  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case ' ':
      case 'k':
        e.preventDefault();
        setPlaying(prev => !prev);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (onPrevious) onPrevious();
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (onNext) onNext();
        break;
      case 'ArrowUp':
        e.preventDefault();
        setVolume(prev => Math.min(1, prev + 0.1));
        break;
      case 'ArrowDown':
        e.preventDefault();
        setVolume(prev => Math.max(0, prev - 0.1));
        break;
      case 'm':
        e.preventDefault();
        setMuted(prev => !prev);
        break;
      case 'f':
        e.preventDefault();
        toggleFullscreen();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        e.preventDefault();
        const seekTo = parseInt(e.key) / 10;
        playerRef.current?.seekTo(seekTo);
        break;
    }
  }, [isOpen, onClose, onNext, onPrevious]);

  // Set up keyboard event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  // Reset player state when video changes
  useEffect(() => {
    if (isOpen) {
      setPlaying(false);
      setPlayed(0);
      setLoading(true);
      setShowControls(true);
    }
  }, [video.id, isOpen]);

  // Auto-hide controls
  const resetControlsTimeout = useCallback(() => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(true);
    controlsTimeoutRef.current = setTimeout(() => {
      if (playing) {
        setShowControls(false);
      }
    }, 3000);
  }, [playing]);

  const handleMouseMove = useCallback(() => {
    resetControlsTimeout();
  }, [resetControlsTimeout]);

  // Fullscreen functionality
  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!fullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, [fullscreen]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Player event handlers
  const handleProgress = (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (duration: number) => {
    console.log('Video duration:', duration);
    setDuration(duration);
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setSeeking(false);
    const target = e.target as HTMLInputElement;
    playerRef.current?.seekTo(parseFloat(target.value));
  };

  const handleReady = () => {
    console.log('Player ready for video:', video.title);
    setLoading(false);
  };

  const handleError = (error: any) => {
    console.error('Video playback error:', error);
    setLoading(false);
  };

  // Format time display
  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  // Get video URL (YouTube or direct)
  const getVideoUrl = () => {
    if (video.youtubeId) {
      console.log('Loading YouTube video:', video.youtubeId);
      return video.youtubeId;
    }
    console.log('Loading video URL:', video.videoUrl);
    return video.videoUrl;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        ref={containerRef}
        className={`relative w-full h-full max-w-7xl max-h-full flex flex-col ${
          fullscreen ? 'max-w-none max-h-none' : 'p-4'
        }`}
        onMouseMove={handleMouseMove}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close video player"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative flex-1 bg-black rounded-lg overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {video.youtubeId ? (
            // YouTube embed for YouTube videos
            <iframe
              key={video.id}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=${playing ? 1 : 0}&controls=1&modestbranding=1&rel=0&fs=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title={video.title}
              onLoad={() => {
                setLoading(false);
              }}
              style={{ position: 'absolute', inset: 0 }}
            />
          ) : (
            // ReactPlayer for other video types
            <ReactPlayer
              ref={playerRef}
              key={video.id}
              url={video.videoUrl}
              width="100%"
              height="100%"
              playing={playing}
              volume={volume}
              muted={muted}
              loop={false}
              onProgress={handleProgress as any}
              onDuration={handleDuration}
              onReady={handleReady}
              onError={handleError}
              progressInterval={500}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }
              }}
            />
          )}

          {/* Custom Controls Overlay - Only Navigation Buttons */}
          <div 
            className={`absolute inset-0 flex items-center justify-between pointer-events-none transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* Previous Button */}
            <div className="pointer-events-auto">
              {onPrevious && (
                <button
                  onClick={onPrevious}
                  className="ml-4 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Previous video"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 9H17a1 1 0 110 2h-5.586l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>

            {/* Next Button */}
            <div className="pointer-events-auto">
              {onNext && (
                <button
                  onClick={onNext}
                  className="mr-4 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Next video"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 11H3a1 1 0 110-2h5.586L4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Video Information */}
        <div className={`mt-4 text-white transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        } ${fullscreen ? 'hidden' : 'block'}`}>
          <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
          <p className="text-gray-300 text-sm mb-2">{video.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="capitalize">{video.category.replace(/_/g, ' ')}</span>
            {video.tags.length > 0 && (
              <div className="flex space-x-2">
                {video.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;