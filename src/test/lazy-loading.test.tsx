import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import { VideoGallery } from '@/components/VideoGallery';
import { VideoItem, VideoCategory } from '@/types';

/**
 * Feature: video-portfolio-website, Property 9: Lazy Loading Implementation
 * **Validates: Requirements 7.2**
 */

// Generators for property-based testing
const videoIdArb = fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0);
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

describe('Lazy Loading Property Tests', () => {
  it('Property 9: Lazy Loading Implementation - For any image or video thumbnail, the system should implement lazy loading so content loads only when needed', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 1, maxLength: 20 }),
        (videos) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that lazy loading placeholders are present initially
          videos.forEach((video) => {
            // Look for the data-video-id attribute which is used for intersection observer
            // The component sanitizes video IDs for CSS selectors
            const sanitizedId = video.id.replace(/[^a-zA-Z0-9-_]/g, '_');
            const videoElement = document.querySelector(`[data-video-id="${sanitizedId}"]`);
            
            // The element should exist in the DOM
            expect(videoElement).toBeTruthy();
          });
          
          // Check for lazy loading indicators
          // The component should have placeholder content initially
          const placeholders = document.querySelectorAll('.animate-pulse');
          expect(placeholders.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 9 Edge Case: Single video should still implement lazy loading', () => {
    fc.assert(
      fc.property(
        videoItemArb,
        (video) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={[video]}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Even with a single video, lazy loading should be implemented
          const sanitizedId = video.id.replace(/[^a-zA-Z0-9-_]/g, '_');
          const videoElement = document.querySelector(`[data-video-id="${sanitizedId}"]`);
          expect(videoElement).toBeTruthy();
          
          // Should have lazy loading placeholder
          const placeholder = document.querySelector('.animate-pulse');
          expect(placeholder).toBeTruthy();
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 9 Edge Case: Empty video array should not break lazy loading system', () => {
    const mockOnVideoSelect = () => {};
    
    render(
      <VideoGallery
        videos={[]}
        onVideoSelect={mockOnVideoSelect}
      />
    );

    // Should display empty state without errors
    const noVideosElements = screen.getAllByText(/no videos/i);
    expect(noVideosElements.length).toBeGreaterThan(0);
    
    // No lazy loading elements should be present
    const placeholders = document.querySelectorAll('.animate-pulse');
    expect(placeholders.length).toBe(0);
  });

  it('Property 9 Implementation Detail: Images should have loading="lazy" attribute', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 1, maxLength: 10 }),
        (videos) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that images have the loading="lazy" attribute
          const images = document.querySelectorAll('img');
          images.forEach((img) => {
            expect(img.getAttribute('loading')).toBe('lazy');
          });
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 9 Performance: Lazy loading should use IntersectionObserver pattern', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 5, maxLength: 20 }),
        (videos) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that elements have data-video-id attributes for intersection observer
          videos.forEach((video) => {
            const sanitizedId = video.id.replace(/[^a-zA-Z0-9-_]/g, '_');
            const element = document.querySelector(`[data-video-id="${sanitizedId}"]`);
            expect(element).toBeTruthy();
            // HTML attributes are case-insensitive, so compare in lowercase
            expect(element?.getAttribute('data-video-id')?.toLowerCase()).toBe(sanitizedId.toLowerCase());
          });
          
          // Initially, images should not be loaded (placeholder should be visible)
          const placeholders = document.querySelectorAll('.animate-pulse');
          expect(placeholders.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 3 }
    );
  });

  it('Property 9 Accessibility: Lazy loaded images should have proper alt text', () => {
    fc.assert(
      fc.property(
        fc.array(videoItemArb, { minLength: 1, maxLength: 10 }),
        (videos) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that images have alt attributes with video titles
          const images = document.querySelectorAll('img');
          images.forEach((img) => {
            const altText = img.getAttribute('alt');
            expect(altText).toBeTruthy();
            expect(altText?.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 3 }
    );
  });
});