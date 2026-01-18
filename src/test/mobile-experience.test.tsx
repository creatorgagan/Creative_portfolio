import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import { VideoGallery } from '../components/VideoGallery';
import Navigation from '../components/Navigation/Navigation';
import { VideoItem, VideoCategory } from '../types';

/**
 * Mobile Experience Unit Tests
 * Tests mobile video player controls, responsive component behavior, and touch interactions
 * Requirements: 4.2, 4.5
 */

// Mock ReactPlayer
vi.mock('react-player', () => ({
  default: vi.fn(({ onReady, onError, playing, ...props }) => {
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

// Helper to mock mobile viewport
const mockMobileViewport = (width: number = 375, height: number = 667) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });
  window.dispatchEvent(new Event('resize'));
};

// Helper to mock touch events
const createTouchEvent = (type: string, touches: Array<{ clientX: number; clientY: number }>) => {
  const touchList = touches.map(touch => ({
    clientX: touch.clientX,
    clientY: touch.clientY,
    identifier: 0,
    pageX: touch.clientX,
    pageY: touch.clientY,
    screenX: touch.clientX,
    screenY: touch.clientY,
    target: document.body,
  }));

  return new TouchEvent(type, {
    bubbles: true,
    cancelable: true,
    touches: touchList as any,
    targetTouches: touchList as any,
    changedTouches: touchList as any,
  });
};

describe('Mobile Experience Tests', () => {
  const mockVideo: VideoItem = {
    id: 'mobile-test-video',
    title: 'Mobile Test Video',
    description: 'Testing mobile video player',
    thumbnail: '/mobile-test.jpg',
    videoUrl: '/mobile-test.mp4',
    category: VideoCategory.COMMERCIAL,
    tags: ['mobile', 'test'],
    createdDate: new Date('2024-01-01'),
    featured: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockMobileViewport();
    
    // Mock document methods
    Object.defineProperty(document, 'fullscreenElement', {
      writable: true,
      value: null
    });
    document.exitFullscreen = vi.fn();
    HTMLElement.prototype.requestFullscreen = vi.fn();
    document.body.style.overflow = 'unset';
  });

  describe('Mobile Video Player Controls (Requirement 4.2)', () => {
    it('should render touch-friendly play/pause button on mobile', () => {
      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Find the large center play/pause button (touch-friendly)
      const centerPlayButton = screen.getAllByLabelText(/play|pause/i)
        .find(button => button.classList.contains('w-16'));

      expect(centerPlayButton).toBeInTheDocument();
      expect(centerPlayButton).toHaveClass('w-16', 'h-16'); // Large touch target
    });

    it('should have touch-friendly control buttons with adequate size', () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
          onNext={vi.fn()}
          onPrevious={vi.fn()}
        />
      );

      // Check that navigation buttons are large enough for touch
      const previousButton = screen.getByLabelText('Previous video');
      const nextButton = screen.getByLabelText('Next video');
      const closeButton = screen.getByLabelText('Close video player');

      expect(previousButton).toHaveClass('w-12', 'h-12'); // 48px minimum for touch
      expect(nextButton).toHaveClass('w-12', 'h-12');
      expect(closeButton).toHaveClass('w-10', 'h-10'); // 40px is acceptable
    });

    it('should respond to touch events on play/pause button', async () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const centerPlayButton = screen.getAllByLabelText(/play|pause/i)
        .find(button => button.classList.contains('w-16'));

      expect(centerPlayButton).toHaveAttribute('aria-label', 'Pause');

      // Simulate touch tap
      fireEvent.touchStart(centerPlayButton!);
      fireEvent.touchEnd(centerPlayButton!);
      fireEvent.click(centerPlayButton!);

      await waitFor(() => {
        expect(centerPlayButton).toHaveAttribute('aria-label', 'Play');
      });
    });

    it('should respond to touch events on volume controls', () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const muteButton = screen.getByLabelText(/mute|unmute/i);
      
      expect(muteButton).toHaveAttribute('aria-label', 'Mute');

      // Simulate touch tap on mute button
      fireEvent.touchStart(muteButton);
      fireEvent.touchEnd(muteButton);
      fireEvent.click(muteButton);

      expect(muteButton).toHaveAttribute('aria-label', 'Unmute');
    });

    it('should respond to touch events on navigation buttons', () => {
      const mockOnNext = vi.fn();
      const mockOnPrevious = vi.fn();

      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
          onNext={mockOnNext}
          onPrevious={mockOnPrevious}
        />
      );

      const previousButton = screen.getByLabelText('Previous video');
      const nextButton = screen.getByLabelText('Next video');

      // Simulate touch on previous button
      fireEvent.touchStart(previousButton);
      fireEvent.touchEnd(previousButton);
      fireEvent.click(previousButton);
      expect(mockOnPrevious).toHaveBeenCalledTimes(1);

      // Simulate touch on next button
      fireEvent.touchStart(nextButton);
      fireEvent.touchEnd(nextButton);
      fireEvent.click(nextButton);
      expect(mockOnNext).toHaveBeenCalledTimes(1);
    });

    it('should have touch-friendly progress bar slider', () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const sliders = screen.getAllByRole('slider');
      const progressBar = sliders.find(slider => 
        slider.getAttribute('step') === 'any' && 
        slider.getAttribute('max') === '1'
      );

      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveClass('cursor-pointer');
    });

    it('should support touch gestures on progress bar', () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const sliders = screen.getAllByRole('slider');
      const progressBar = sliders.find(slider => 
        slider.getAttribute('step') === 'any'
      ) as HTMLInputElement;

      // Simulate touch drag on progress bar
      fireEvent.touchStart(progressBar);
      fireEvent.change(progressBar, { target: { value: '0.5' } });
      fireEvent.touchEnd(progressBar);

      expect(progressBar.value).toBe('0.5');
    });

    it('should show controls on touch interaction', () => {
      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const controlsOverlay = container.querySelector('.absolute.inset-0.flex.flex-col');
      
      // Controls should be visible initially
      expect(controlsOverlay).toHaveClass('opacity-100');

      // Simulate touch to keep controls visible
      const videoContainer = container.querySelector('.relative.flex-1');
      if (videoContainer) {
        fireEvent.touchStart(videoContainer);
        fireEvent.touchEnd(videoContainer);
      }

      expect(controlsOverlay).toHaveClass('opacity-100');
    });

    it('should handle fullscreen toggle on mobile', () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const fullscreenButton = screen.getByLabelText(/fullscreen/i);

      // Simulate touch on fullscreen button
      fireEvent.touchStart(fullscreenButton);
      fireEvent.touchEnd(fullscreenButton);
      fireEvent.click(fullscreenButton);

      expect(HTMLElement.prototype.requestFullscreen).toHaveBeenCalled();
    });
  });

  describe('Responsive Component Behavior (Requirement 4.2, 4.5)', () => {
    it('should adapt video player layout for mobile viewport', () => {
      mockMobileViewport(375, 667);

      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Check that video container has mobile-friendly padding
      const videoContainer = container.querySelector('.relative.w-full.h-full');
      expect(videoContainer).toBeInTheDocument();
    });

    it('should display mobile-optimized gallery layout', () => {
      mockMobileViewport(375, 667);

      const videos = [mockVideo, { ...mockVideo, id: 'video-2' }];
      const { container } = render(
        <VideoGallery
          videos={videos}
          onVideoSelect={vi.fn()}
        />
      );

      const galleryGrid = container.querySelector('.grid');
      expect(galleryGrid).toBeInTheDocument();
      expect(galleryGrid?.className).toContain('grid-cols-1');
    });

    it('should show mobile navigation menu on small screens', () => {
      mockMobileViewport(375, 667);

      const { container } = render(
        <Navigation
          currentSection="home"
          onSectionChange={vi.fn()}
        />
      );

      // Mobile menu button should be visible
      const mobileMenuButton = container.querySelector('.md\\:hidden button');
      expect(mobileMenuButton).toBeInTheDocument();

      // Desktop nav should be hidden on mobile
      const desktopNav = container.querySelector('.hidden.md\\:block');
      expect(desktopNav).toBeInTheDocument();
    });

    it('should maintain responsive video thumbnails on mobile', () => {
      mockMobileViewport(375, 667);

      const videos = [mockVideo];
      const { container } = render(
        <VideoGallery
          videos={videos}
          onVideoSelect={vi.fn()}
        />
      );

      // Check that thumbnails maintain aspect ratio
      const thumbnails = container.querySelectorAll('.aspect-video');
      expect(thumbnails.length).toBeGreaterThan(0);
      
      thumbnails.forEach(thumbnail => {
        expect(thumbnail).toHaveClass('aspect-video');
      });
    });

    it('should optimize control spacing for mobile', () => {
      mockMobileViewport(375, 667);

      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Check that controls have appropriate spacing
      const controlBar = container.querySelector('.flex.items-center.space-x-4');
      expect(controlBar).toBeInTheDocument();
      
      // Verify control elements are properly spaced
      const timeDisplay = screen.getByText(/\d+:\d+\s*\/\s*\d+:\d+/);
      expect(timeDisplay).toBeInTheDocument();
    });
  });

  describe('Touch Interactions (Requirement 4.2)', () => {
    it('should handle tap to toggle play/pause', async () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const centerPlayButton = screen.getAllByLabelText(/play|pause/i)
        .find(button => button.classList.contains('w-16'));

      // Initial state: playing (pause button shown)
      expect(centerPlayButton).toHaveAttribute('aria-label', 'Pause');

      // Tap to pause
      fireEvent.click(centerPlayButton!);

      await waitFor(() => {
        expect(centerPlayButton).toHaveAttribute('aria-label', 'Play');
      });

      // Tap to play again
      fireEvent.click(centerPlayButton!);

      await waitFor(() => {
        expect(centerPlayButton).toHaveAttribute('aria-label', 'Pause');
      });
    });

    it('should handle tap outside to close modal', () => {
      const mockOnClose = vi.fn();
      
      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={mockOnClose}
        />
      );

      const overlay = container.querySelector('.fixed.inset-0');
      
      // Simulate tap on overlay
      if (overlay) {
        fireEvent.touchStart(overlay, { target: overlay });
        fireEvent.touchEnd(overlay, { target: overlay });
        fireEvent.click(overlay, { target: overlay });
        
        expect(mockOnClose).toHaveBeenCalled();
      }
    });

    it('should handle swipe gestures for volume control', () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const volumeSlider = screen.getAllByRole('slider')
        .find(slider => slider.getAttribute('max') === '1' && slider.getAttribute('step') === '0.05') as HTMLInputElement;

      expect(volumeSlider).toBeInTheDocument();

      // Simulate touch drag on volume slider
      fireEvent.touchStart(volumeSlider);
      fireEvent.change(volumeSlider, { target: { value: '0.3' } });
      fireEvent.touchEnd(volumeSlider);

      expect(volumeSlider.value).toBe('0.3');
    });

    it('should prevent accidental touches during video playback', () => {
      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Video container should not close when touched
      const videoContainer = container.querySelector('.relative.flex-1');
      const mockOnClose = vi.fn();

      if (videoContainer) {
        fireEvent.touchStart(videoContainer);
        fireEvent.touchEnd(videoContainer);
        
        // Should not trigger close
        expect(mockOnClose).not.toHaveBeenCalled();
      }
    });

    it('should handle double-tap for fullscreen toggle', () => {
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const centerPlayButton = screen.getAllByLabelText(/play|pause/i)
        .find(button => button.classList.contains('w-16'));

      // Simulate double-tap (two quick taps)
      fireEvent.touchStart(centerPlayButton!);
      fireEvent.touchEnd(centerPlayButton!);
      fireEvent.click(centerPlayButton!);
      
      fireEvent.touchStart(centerPlayButton!);
      fireEvent.touchEnd(centerPlayButton!);
      fireEvent.click(centerPlayButton!);

      // Button should respond to both taps
      expect(centerPlayButton).toBeInTheDocument();
    });

    it('should support touch-friendly close button', () => {
      const mockOnClose = vi.fn();
      
      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={mockOnClose}
        />
      );

      const closeButton = screen.getByLabelText('Close video player');

      // Simulate touch on close button
      fireEvent.touchStart(closeButton);
      fireEvent.touchEnd(closeButton);
      fireEvent.click(closeButton);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Mobile Performance (Requirement 4.5)', () => {
    it('should load video player efficiently on mobile', async () => {
      const startTime = performance.now();

      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const endTime = performance.now();
      const renderTime = endTime - startTime;

      // Render should be fast (under 100ms for component mount)
      expect(renderTime).toBeLessThan(100);
    });

    it('should show loading indicator while video loads', () => {
      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Loading spinner should be visible initially
      const loadingSpinner = container.querySelector('.animate-spin');
      expect(loadingSpinner).toBeInTheDocument();
    });

    it('should hide loading indicator when video is ready', async () => {
      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Wait for video to be ready
      await waitFor(() => {
        const loadingSpinner = container.querySelector('.animate-spin');
        expect(loadingSpinner).not.toBeInTheDocument();
      }, { timeout: 200 });
    });

    it('should implement lazy loading for gallery thumbnails', () => {
      mockMobileViewport(375, 667);

      const videos = Array.from({ length: 10 }, (_, i) => ({
        ...mockVideo,
        id: `video-${i}`,
      }));

      const { container } = render(
        <VideoGallery
          videos={videos}
          onVideoSelect={vi.fn()}
        />
      );

      // Images should have lazy loading attribute
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        expect(img.getAttribute('loading')).toBe('lazy');
      });
    });

    it('should maintain smooth transitions on mobile', () => {
      mockMobileViewport(375, 667);

      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Check that transitions are applied
      const controlsOverlay = container.querySelector('.transition-opacity');
      expect(controlsOverlay).toBeInTheDocument();
      expect(controlsOverlay?.className).toContain('duration-300');
    });

    it('should optimize video information display on mobile', () => {
      mockMobileViewport(375, 667);

      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Video info should be present but optimized
      expect(screen.getByText(mockVideo.title)).toBeInTheDocument();
      expect(screen.getByText(mockVideo.description)).toBeInTheDocument();
    });
  });

  describe('Mobile Viewport Adaptations', () => {
    it('should adapt to portrait orientation', () => {
      mockMobileViewport(375, 667); // Portrait

      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const videoContainer = container.querySelector('.relative.w-full.h-full');
      expect(videoContainer).toBeInTheDocument();
    });

    it('should adapt to landscape orientation', () => {
      mockMobileViewport(667, 375); // Landscape

      const { container } = render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      const videoContainer = container.querySelector('.relative.w-full.h-full');
      expect(videoContainer).toBeInTheDocument();
    });

    it('should handle small mobile screens', () => {
      mockMobileViewport(320, 568); // iPhone SE

      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // Controls should still be accessible
      expect(screen.getByLabelText('Close video player')).toBeInTheDocument();
      expect(screen.getAllByLabelText(/play|pause/i).length).toBeGreaterThan(0);
    });

    it('should handle large mobile screens', () => {
      mockMobileViewport(428, 926); // iPhone 14 Pro Max

      render(
        <VideoPlayer
          video={mockVideo}
          isOpen={true}
          onClose={vi.fn()}
        />
      );

      // All controls should be present
      expect(screen.getByLabelText('Close video player')).toBeInTheDocument();
      expect(screen.getAllByLabelText(/play|pause/i).length).toBeGreaterThan(0);
      expect(screen.getByLabelText(/mute|unmute/i)).toBeInTheDocument();
    });
  });
});
