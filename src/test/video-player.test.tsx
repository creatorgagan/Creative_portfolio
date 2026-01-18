import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import { VideoItem, VideoCategory } from '../types';

// Mock ReactPlayer
vi.mock('react-player', () => ({
  default: vi.fn(({ onReady, onError, onProgress, onDuration, playing, ...props }) => {
    // Simulate player behavior
    if (onReady) {
      setTimeout(() => onReady(), 100);
    }
    
    return (
      <div 
        data-testid="react-player" 
        data-playing={playing}
        data-url={props.url}
        {...props}
      >
        Mock Video Player
      </div>
    );
  })
}));

describe('VideoPlayer Component', () => {
  const mockVideo: VideoItem = {
    id: 'test-video-1',
    title: 'Test Video Title',
    description: 'Test video description for unit testing',
    thumbnail: '/test-thumbnail.jpg',
    videoUrl: '/test-video.mp4',
    youtubeId: 'test-youtube-id',
    category: VideoCategory.COMMERCIAL,
    tags: ['test', 'video', 'commercial'],
    createdDate: new Date('2024-01-01'),
    featured: true,
    duration: 120,
    viewCount: 1000
  };

  const defaultProps = {
    video: mockVideo,
    isOpen: true,
    onClose: vi.fn(),
    onNext: vi.fn(),
    onPrevious: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock document methods
    Object.defineProperty(document, 'fullscreenElement', {
      writable: true,
      value: null
    });
    document.exitFullscreen = vi.fn();
    
    // Mock element methods
    HTMLElement.prototype.requestFullscreen = vi.fn();
    
    // Reset body overflow
    document.body.style.overflow = 'unset';
  });

  describe('Video Player Modal Opening and Closing', () => {
    it('should not render when isOpen is false', () => {
      render(<VideoPlayer {...defaultProps} isOpen={false} />);
      
      expect(screen.queryByTestId('react-player')).not.toBeInTheDocument();
    });

    it('should render when isOpen is true', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      expect(screen.getByTestId('react-player')).toBeInTheDocument();
    });

    it('should call onClose when close button is clicked', () => {
      const mockOnClose = vi.fn();
      render(<VideoPlayer {...defaultProps} onClose={mockOnClose} />);
      
      const closeButton = screen.getByLabelText('Close video player');
      fireEvent.click(closeButton);
      
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should call onClose when clicking outside the video container', () => {
      const mockOnClose = vi.fn();
      render(<VideoPlayer {...defaultProps} onClose={mockOnClose} />);
      
      // Click on the overlay (the outermost div with the fixed positioning)
      const overlay = document.querySelector('.fixed.inset-0');
      
      if (overlay) {
        // Simulate clicking on the overlay itself (not its children)
        fireEvent.click(overlay, { target: overlay });
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      }
    });

    it('should set body overflow to hidden when modal is open', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should reset body overflow when modal is closed', () => {
      const { rerender } = render(<VideoPlayer {...defaultProps} />);
      
      expect(document.body.style.overflow).toBe('hidden');
      
      rerender(<VideoPlayer {...defaultProps} isOpen={false} />);
      
      expect(document.body.style.overflow).toBe('unset');
    });
  });

  describe('Playback Controls Functionality', () => {
    it('should display play/pause button', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const playPauseButtons = screen.getAllByLabelText(/play|pause/i);
      expect(playPauseButtons.length).toBeGreaterThan(0);
    });

    it('should toggle play/pause when center play button is clicked', async () => {
      render(<VideoPlayer {...defaultProps} />);
      
      // Find the center play button (the larger one)
      const centerPlayButton = screen.getAllByLabelText(/play|pause/i)
        .find(button => button.classList.contains('w-16'));
      
      expect(centerPlayButton).toBeInTheDocument();
      
      // Initially should show pause (since video auto-plays)
      expect(centerPlayButton).toHaveAttribute('aria-label', 'Pause');
      
      fireEvent.click(centerPlayButton!);
      
      await waitFor(() => {
        expect(centerPlayButton).toHaveAttribute('aria-label', 'Play');
      });
    });

    it('should display volume controls', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const muteButton = screen.getByLabelText(/mute|unmute/i);
      const sliders = screen.getAllByRole('slider');
      
      expect(muteButton).toBeInTheDocument();
      expect(sliders.length).toBeGreaterThanOrEqual(2); // Progress bar and volume slider
    });

    it('should toggle mute when mute button is clicked', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const muteButton = screen.getByLabelText(/mute|unmute/i);
      
      // Initially should show mute
      expect(muteButton).toHaveAttribute('aria-label', 'Mute');
      
      fireEvent.click(muteButton);
      
      expect(muteButton).toHaveAttribute('aria-label', 'Unmute');
    });

    it('should display fullscreen toggle button', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const fullscreenButton = screen.getByLabelText(/fullscreen/i);
      expect(fullscreenButton).toBeInTheDocument();
    });

    it('should display progress bar', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const sliders = screen.getAllByRole('slider');
      const progressBar = sliders.find(slider => 
        slider.getAttribute('step') === 'any' && 
        slider.getAttribute('max') === '1'
      );
      
      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveAttribute('type', 'range');
      expect(progressBar).toHaveAttribute('min', '0');
      expect(progressBar).toHaveAttribute('max', '1');
    });

    it('should display time information', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      // Look for time display pattern (MM:SS / MM:SS)
      const timeDisplay = screen.getByText(/\d+:\d+\s*\/\s*\d+:\d+/);
      expect(timeDisplay).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation Support', () => {
    it('should close modal when Escape key is pressed', () => {
      const mockOnClose = vi.fn();
      render(<VideoPlayer {...defaultProps} onClose={mockOnClose} />);
      
      fireEvent.keyDown(document, { key: 'Escape' });
      
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should toggle play/pause when Space key is pressed', async () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const centerPlayButton = screen.getAllByLabelText(/play|pause/i)
        .find(button => button.classList.contains('w-16'));
      
      // Initially should show pause
      expect(centerPlayButton).toHaveAttribute('aria-label', 'Pause');
      
      fireEvent.keyDown(document, { key: ' ' });
      
      await waitFor(() => {
        expect(centerPlayButton).toHaveAttribute('aria-label', 'Play');
      });
    });

    it('should toggle play/pause when k key is pressed', async () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const centerPlayButton = screen.getAllByLabelText(/play|pause/i)
        .find(button => button.classList.contains('w-16'));
      
      fireEvent.keyDown(document, { key: 'k' });
      
      await waitFor(() => {
        expect(centerPlayButton).toHaveAttribute('aria-label', 'Play');
      });
    });

    it('should call onPrevious when left arrow key is pressed', () => {
      const mockOnPrevious = vi.fn();
      render(<VideoPlayer {...defaultProps} onPrevious={mockOnPrevious} />);
      
      fireEvent.keyDown(document, { key: 'ArrowLeft' });
      
      expect(mockOnPrevious).toHaveBeenCalledTimes(1);
    });

    it('should call onNext when right arrow key is pressed', () => {
      const mockOnNext = vi.fn();
      render(<VideoPlayer {...defaultProps} onNext={mockOnNext} />);
      
      fireEvent.keyDown(document, { key: 'ArrowRight' });
      
      expect(mockOnNext).toHaveBeenCalledTimes(1);
    });

    it('should toggle mute when m key is pressed', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const muteButton = screen.getByLabelText(/mute|unmute/i);
      
      expect(muteButton).toHaveAttribute('aria-label', 'Mute');
      
      fireEvent.keyDown(document, { key: 'm' });
      
      expect(muteButton).toHaveAttribute('aria-label', 'Unmute');
    });

    it('should not respond to keyboard events when modal is closed', () => {
      const mockOnClose = vi.fn();
      render(<VideoPlayer {...defaultProps} isOpen={false} onClose={mockOnClose} />);
      
      fireEvent.keyDown(document, { key: 'Escape' });
      
      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('Video Navigation Controls', () => {
    it('should display previous button when onPrevious is provided', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const previousButton = screen.getByLabelText('Previous video');
      expect(previousButton).toBeInTheDocument();
    });

    it('should display next button when onNext is provided', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const nextButton = screen.getByLabelText('Next video');
      expect(nextButton).toBeInTheDocument();
    });

    it('should not display previous button when onPrevious is not provided', () => {
      render(<VideoPlayer {...defaultProps} onPrevious={undefined} />);
      
      const previousButton = screen.queryByLabelText('Previous video');
      expect(previousButton).not.toBeInTheDocument();
    });

    it('should not display next button when onNext is not provided', () => {
      render(<VideoPlayer {...defaultProps} onNext={undefined} />);
      
      const nextButton = screen.queryByLabelText('Next video');
      expect(nextButton).not.toBeInTheDocument();
    });

    it('should call onPrevious when previous button is clicked', () => {
      const mockOnPrevious = vi.fn();
      render(<VideoPlayer {...defaultProps} onPrevious={mockOnPrevious} />);
      
      const previousButton = screen.getByLabelText('Previous video');
      fireEvent.click(previousButton);
      
      expect(mockOnPrevious).toHaveBeenCalledTimes(1);
    });

    it('should call onNext when next button is clicked', () => {
      const mockOnNext = vi.fn();
      render(<VideoPlayer {...defaultProps} onNext={mockOnNext} />);
      
      const nextButton = screen.getByLabelText('Next video');
      fireEvent.click(nextButton);
      
      expect(mockOnNext).toHaveBeenCalledTimes(1);
    });
  });

  describe('Video Information Display', () => {
    it('should display video title', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      expect(screen.getByText(mockVideo.title)).toBeInTheDocument();
    });

    it('should display video description', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      expect(screen.getByText(mockVideo.description)).toBeInTheDocument();
    });

    it('should display video category', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      // Look for the category specifically by class
      const categoryElement = document.querySelector('.capitalize');
      expect(categoryElement).toBeInTheDocument();
      expect(categoryElement).toHaveTextContent('commercial');
    });

    it('should display video tags', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      // Check for tags that don't conflict with category
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByText('video')).toBeInTheDocument();
      // For 'commercial' tag, use getAllByText since it appears in both category and tags
      expect(screen.getAllByText('commercial')).toHaveLength(2);
    });

    it('should hide video information in fullscreen mode', () => {
      // Mock fullscreen state
      Object.defineProperty(document, 'fullscreenElement', {
        writable: true,
        value: document.createElement('div')
      });

      render(<VideoPlayer {...defaultProps} />);
      
      // Trigger fullscreen change event
      fireEvent(document, new Event('fullscreenchange'));
      
      const videoInfo = screen.getByText(mockVideo.title).closest('div');
      expect(videoInfo).toHaveClass('hidden');
    });
  });

  describe('Video URL Handling', () => {
    it('should use YouTube URL when youtubeId is provided', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const player = screen.getByTestId('react-player');
      expect(player).toHaveAttribute('data-url', `https://www.youtube.com/watch?v=${mockVideo.youtubeId}`);
    });

    it('should use direct video URL when youtubeId is not provided', () => {
      const videoWithoutYoutube = { ...mockVideo, youtubeId: undefined };
      render(<VideoPlayer {...defaultProps} video={videoWithoutYoutube} />);
      
      const player = screen.getByTestId('react-player');
      expect(player).toHaveAttribute('data-url', mockVideo.videoUrl);
    });
  });

  describe('Loading States', () => {
    it('should show loading spinner initially', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const loadingSpinner = document.querySelector('.animate-spin');
      expect(loadingSpinner).toBeInTheDocument();
    });

    it('should hide loading spinner when video is ready', async () => {
      render(<VideoPlayer {...defaultProps} />);
      
      // Wait for onReady to be called (mocked with setTimeout)
      await waitFor(() => {
        const loadingSpinner = document.querySelector('.animate-spin');
        expect(loadingSpinner).not.toBeInTheDocument();
      }, { timeout: 200 });
    });
  });

  describe('Accessibility Features', () => {
    it('should have proper ARIA labels for all interactive elements', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      expect(screen.getByLabelText('Close video player')).toBeInTheDocument();
      expect(screen.getByLabelText('Previous video')).toBeInTheDocument();
      expect(screen.getByLabelText('Next video')).toBeInTheDocument();
      expect(screen.getAllByLabelText(/play|pause/i).length).toBeGreaterThan(0);
      expect(screen.getByLabelText(/mute|unmute/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/fullscreen/i)).toBeInTheDocument();
    });

    it('should support keyboard navigation for all controls', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const interactiveElements = [
        screen.getByLabelText('Close video player'),
        screen.getByLabelText('Previous video'),
        screen.getByLabelText('Next video'),
        screen.getAllByLabelText(/play|pause/i)[0],
        screen.getByLabelText(/mute|unmute/i),
        screen.getByLabelText(/fullscreen/i)
      ];
      
      interactiveElements.forEach(element => {
        expect(element).toBeInstanceOf(HTMLButtonElement);
        expect(element.tabIndex).not.toBe(-1);
      });
    });

    it('should have proper focus management', () => {
      render(<VideoPlayer {...defaultProps} />);
      
      const closeButton = screen.getByLabelText('Close video player');
      closeButton.focus();
      
      expect(document.activeElement).toBe(closeButton);
    });
  });
});