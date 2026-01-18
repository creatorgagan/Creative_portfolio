import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import { VideoGallery } from '@/components/VideoGallery';
import { VideoItem, VideoCategory } from '@/types';

/**
 * Feature: video-portfolio-website, Property 1: Video Metadata Display Consistency
 * **Validates: Requirements 2.3**
 */

// Generators for property-based testing with better constraints
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
const durationArb = fc.option(fc.integer({ min: 1, max: 7200 }), { nil: undefined }); // 0 to 2 hours in seconds
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

describe('Video Metadata Display Property Tests', () => {
  it('Property 1: Video Metadata Display Consistency - For any video in the portfolio, the display should include title, description, and relevant tags', () => {
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

          // Collect all expected display values
          const expectedTitles = videos.map(video => video.title.trim() || 'Untitled Video');
          const expectedDescriptions = videos.map(video => video.description.trim() || 'No description available');
          const expectedCategories = videos.map(video => video.category.replace(/_/g, ' '));
          
          // Verify that all expected titles are present
          expectedTitles.forEach((title) => {
            const titleElements = screen.getAllByText(title);
            expect(titleElements.length).toBeGreaterThan(0);
          });
          
          // Verify that all expected descriptions are present
          expectedDescriptions.forEach((description) => {
            const descriptionElements = screen.getAllByText(description);
            expect(descriptionElements.length).toBeGreaterThan(0);
          });
          
          // Verify that all expected categories are present
          expectedCategories.forEach((category) => {
            const categoryElements = screen.getAllByText(category);
            expect(categoryElements.length).toBeGreaterThan(0);
          });
          
          // Check tags for videos that have them
          videos.forEach((video) => {
            if (video.tags.length > 0) {
              const firstTag = video.tags[0].trim() || 'Tag';
              const tagElements = screen.getAllByText(firstTag);
              expect(tagElements.length).toBeGreaterThan(0);
            }
          });
        }
      ),
      { numRuns: 2 }
    );
  });

  it('Property 1 Edge Case: Empty tags array should not break metadata display', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: videoIdArb,
          title: titleArb,
          description: descriptionArb,
          thumbnail: thumbnailArb,
          videoUrl: videoUrlArb,
          youtubeId: youtubeIdArb,
          category: categoryArb,
          tags: fc.constant([]) as fc.Arbitrary<string[]>, // Force empty tags array
          createdDate: createdDateArb,
          featured: featuredArb,
          duration: durationArb,
          viewCount: viewCountArb,
        }),
        (video) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={[video]}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Title and description should still be present
          const displayTitle = video.title.trim() || 'Untitled Video';
          const displayDescription = video.description.trim() || 'No description available';
          
          const titleElements = screen.getAllByText(displayTitle);
          expect(titleElements.length).toBeGreaterThan(0);
          
          const descriptionElements = screen.getAllByText(displayDescription);
          expect(descriptionElements.length).toBeGreaterThan(0);
          
          // Category should be displayed
          const formattedCategory = video.category.replace(/_/g, ' ');
          const categoryElements = screen.getAllByText(formattedCategory);
          expect(categoryElements.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 2 }
    );
  });

  it('Property 1 Edge Case: Long titles and descriptions should be handled gracefully', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: videoIdArb,
          title: fc.string({ minLength: 50, maxLength: 200 }).filter(s => s.trim().length > 0 && !/[<>&"']/.test(s)), // Avoid HTML entities
          description: fc.string({ minLength: 100, maxLength: 500 }).filter(s => s.trim().length > 0 && !/[<>&"']/.test(s)), // Avoid HTML entities
          thumbnail: thumbnailArb,
          videoUrl: videoUrlArb,
          youtubeId: youtubeIdArb,
          category: categoryArb,
          tags: tagsArb,
          createdDate: createdDateArb,
          featured: featuredArb,
          duration: durationArb,
          viewCount: viewCountArb,
        }),
        (video) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={[video]}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Even with long content, metadata should be displayed
          const displayTitle = video.title.trim() || 'Untitled Video';
          const displayDescription = video.description.trim() || 'No description available';
          
          // Use partial text matching for long content that might be truncated
          const titleElements = screen.getAllByText((_, element) => {
            return element?.textContent?.includes(displayTitle.substring(0, 20)) || false;
          });
          expect(titleElements.length).toBeGreaterThan(0);
          
          const descriptionElements = screen.getAllByText((_, element) => {
            return element?.textContent?.includes(displayDescription.substring(0, 20)) || false;
          });
          expect(descriptionElements.length).toBeGreaterThan(0);
          
          const formattedCategory = video.category.replace(/_/g, ' ');
          const categoryElements = screen.getAllByText(formattedCategory);
          expect(categoryElements.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 2 }
    );
  });

  it('Property 1 Edge Case: Special characters in metadata should be displayed correctly', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: videoIdArb,
          title: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
          description: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
          thumbnail: thumbnailArb,
          videoUrl: videoUrlArb,
          youtubeId: youtubeIdArb,
          category: categoryArb,
          tags: fc.array(fc.string({ minLength: 1, maxLength: 30 }).filter(s => s.trim().length > 0), { minLength: 1, maxLength: 5 }),
          createdDate: createdDateArb,
          featured: featuredArb,
          duration: durationArb,
          viewCount: viewCountArb,
        }),
        (video) => {
          const mockOnVideoSelect = () => {};
          
          render(
            <VideoGallery
              videos={[video]}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Special characters should be properly escaped and displayed
          const displayTitle = video.title.trim() || 'Untitled Video';
          const displayDescription = video.description.trim() || 'No description available';
          
          const titleElements = screen.getAllByText(displayTitle);
          expect(titleElements.length).toBeGreaterThan(0);
          
          const descriptionElements = screen.getAllByText(displayDescription);
          expect(descriptionElements.length).toBeGreaterThan(0);
          
          // First tag with special characters should be displayed
          if (video.tags.length > 0) {
            const firstTag = video.tags[0].trim() || 'Tag';
            const tagElements = screen.getAllByText(firstTag);
            expect(tagElements.length).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 2 }
    );
  });
});