import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import { VideoGallery } from '@/components/VideoGallery';
import { VideoItem, VideoCategory } from '@/types';

/**
 * Feature: video-portfolio-website, Property 6: Mobile Gallery Layout Optimization
 * **Validates: Requirements 4.4**
 */

// Generators for property-based testing with better constraints
const videoIdArb = fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0 && !/[\\\/:"*?<>|]/.test(s));
const titleArb = fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0);
const descriptionArb = fc.string({ minLength: 1, maxLength: 1000 }).filter(s => s.trim().length > 0);
const thumbnailArb = fc.webUrl();
const videoUrlArb = fc.webUrl();
const youtubeIdArb = fc.option(fc.string({ minLength: 11, maxLength: 11 }), { nil: undefined });
const categoryArb = fc.constantFrom(...Object.values(VideoCategory));
const tagsArb = fc.array(fc.string({ minLength: 1, maxLength: 30 }).filter(s => s.trim().length > 0), { minLength: 0, maxLength: 10 });
const createdDateArb = fc.date({ min: new Date('2020-01-01'), max: new Date() });
const featuredArb = fc.boolean();
const durationArb = fc.option(fc.integer({ min: 1, max: 7200 }), { nil: undefined });
const viewCountArb = fc.option(fc.integer({ min: 0, max: 10000000 }), { nil: undefined });

const videoItemArb: fc.Arbitrary<VideoItem> = fc.record({
  id: videoIdArb,
  title: titleArb,
  description: descriptionArb,
  thumbnail: thumbnailArb,
  videoUrl: videoUrlArb,
  youtubeId: youtubeIdArb,
  category: categoryArb,
  tags: tagsArb,
  createdDate: createdDateArb,
  featured: featuredArb,
  duration: durationArb,
  viewCount: viewCountArb,
});

// Mock window.matchMedia for responsive testing
const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
};

describe('Mobile Gallery Layout Property Tests', () => {
  it('Property 6: Mobile Gallery Layout Optimization - For any mobile screen size, the gallery component should display videos in a single-column or mobile-optimized grid layout', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 1, maxLength: 20 }),
        (videos) => {
          // Mock mobile viewport
          mockMatchMedia(true); // Simulate mobile screen
          
          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that the gallery grid exists
          const galleryGrid = container.querySelector('.grid');
          expect(galleryGrid).toBeTruthy();
          
          // Check that mobile-responsive classes are applied
          // The grid should have responsive classes like grid-cols-1 for mobile
          const hasResponsiveClasses = galleryGrid?.className.includes('grid-cols-1') ||
                                     galleryGrid?.className.includes('sm:grid-cols-2') ||
                                     galleryGrid?.className.includes('lg:grid-cols-3');
          expect(hasResponsiveClasses).toBe(true);
          
          // Verify that video items are rendered
          const videoItems = container.querySelectorAll('[data-video-id]');
          expect(videoItems.length).toBe(videos.length);
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 6 Edge Case: Single video should still use responsive grid layout', () => {
    fc.assert(
      fc.property(
        videoItemArb,
        (video) => {
          mockMatchMedia(true); // Simulate mobile screen
          
          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={[video]}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Even with a single video, responsive grid should be used
          const galleryGrid = container.querySelector('.grid');
          expect(galleryGrid).toBeTruthy();
          
          // Should have responsive grid classes
          const hasResponsiveClasses = galleryGrid?.className.includes('grid-cols-1') ||
                                     galleryGrid?.className.includes('sm:grid-cols-2');
          expect(hasResponsiveClasses).toBe(true);
          
          // Single video should be displayed
          const videoItems = container.querySelectorAll('[data-video-id]');
          expect(videoItems.length).toBe(1);
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 6 Responsive Behavior: Grid layout should adapt to different screen sizes', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 2, maxLength: 12 }),
        (videos) => {
          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that the gallery has responsive grid classes
          const galleryGrid = container.querySelector('.grid');
          expect(galleryGrid).toBeTruthy();
          
          // Should have multiple responsive breakpoint classes
          const className = galleryGrid?.className || '';
          const hasMultipleBreakpoints = [
            'grid-cols-1',     // Mobile
            'sm:grid-cols-2',  // Small screens
            'lg:grid-cols-3',  // Large screens
            'xl:grid-cols-4'   // Extra large screens
          ].filter(cls => className.includes(cls)).length >= 2;
          
          expect(hasMultipleBreakpoints).toBe(true);
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 6 Layout Consistency: All video items should have consistent spacing and sizing', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 3, maxLength: 15 }),
        (videos) => {
          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that gap is applied to the grid
          const galleryGrid = container.querySelector('.grid');
          expect(galleryGrid?.className.includes('gap-')).toBe(true);
          
          // All video items should have consistent structure
          const videoItems = container.querySelectorAll('[data-video-id]');
          expect(videoItems.length).toBe(videos.length);
          
          // Each video item should have the same base classes
          videoItems.forEach((item) => {
            expect(item.className.includes('animate-fade-in')).toBe(true);
          });
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 6 Mobile Optimization: Video thumbnails should maintain aspect ratio on mobile', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 1, maxLength: 10 }),
        (videos) => {
          mockMatchMedia(true); // Simulate mobile screen
          
          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that video thumbnails have aspect-video class for consistent aspect ratio
          const thumbnailContainers = container.querySelectorAll('.aspect-video');
          expect(thumbnailContainers.length).toBe(videos.length);
          
          // Each thumbnail container should have proper responsive classes
          thumbnailContainers.forEach((thumbnail) => {
            expect(thumbnail.className.includes('aspect-video')).toBe(true);
            expect(thumbnail.className.includes('bg-gray-200')).toBe(true);
          });
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 6 Performance: Mobile layout should not affect lazy loading implementation', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 5, maxLength: 20 }),
        (videos) => {
          mockMatchMedia(true); // Simulate mobile screen
          
          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Even on mobile, lazy loading should be implemented
          const videoElements = container.querySelectorAll('[data-video-id]');
          expect(videoElements.length).toBe(videos.length);
          
          // Should have lazy loading placeholders
          const placeholders = container.querySelectorAll('.animate-pulse');
          expect(placeholders.length).toBeGreaterThan(0);
          
          // Images should have loading="lazy" attribute
          const images = container.querySelectorAll('img');
          images.forEach((img) => {
            expect(img.getAttribute('loading')).toBe('lazy');
          });
        }
      ),
      { numRuns: 3 }
    );
  });
});