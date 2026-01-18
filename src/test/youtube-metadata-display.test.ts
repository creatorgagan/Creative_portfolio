import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { YouTubeVideo, VideoItem } from '../types';
import { youtubeService, YouTubeService } from '../services/youtube';
import { validateYouTubeMetadata } from '../utils';

/**
 * Property-based test for YouTube metadata display
 * Feature: video-portfolio-website, Property 3: YouTube Video Metadata Display
 * 
 * Property: For any YouTube video integrated into the portfolio, 
 * the system should display titles, descriptions, and view counts
 * 
 * Validates: Requirements 3.3
 */

// Generator for valid YouTube video IDs (11 characters, alphanumeric + underscore + hyphen)
const youtubeVideoIdArb = fc.string({ minLength: 11, maxLength: 11 }).filter(s => 
  /^[A-Za-z0-9_-]{11}$/.test(s)
);

// Generator for YouTube video objects with valid data
const youtubeVideoArb = fc.record({
  videoId: youtubeVideoIdArb,
  title: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
  description: fc.string({ minLength: 0, maxLength: 500 }),
  thumbnail: fc.webUrl(),
  publishedAt: fc.date(),
  duration: fc.constantFrom('PT1M30S', 'PT5M45S', 'PT10M12S', 'PT2H15M30S'),
  viewCount: fc.integer({ min: 0, max: 1000000000 })
});

describe('YouTube Metadata Display Property Tests', () => {
  it('Property 3: YouTube Video Metadata Display - should display titles, descriptions, and view counts for any YouTube video', () => {
    fc.assert(
      fc.property(youtubeVideoArb, (youtubeVideo: YouTubeVideo) => {
        // Convert YouTube video to VideoItem format
        const videoItem = youtubeService.convertToVideoItem(youtubeVideo);
        
        // Verify that the converted video item contains all required metadata
        expect(videoItem.title).toBeDefined();
        expect(videoItem.title).toBe(youtubeVideo.title);
        expect(videoItem.title.length).toBeGreaterThan(0);
        
        expect(videoItem.description).toBeDefined();
        expect(videoItem.description).toBe(youtubeVideo.description);
        
        expect(videoItem.viewCount).toBeDefined();
        expect(videoItem.viewCount).toBe(youtubeVideo.viewCount);
        expect(videoItem.viewCount).toBeGreaterThanOrEqual(0);
        
        // Verify YouTube-specific fields are properly set
        expect(videoItem.youtubeId).toBe(youtubeVideo.videoId);
        expect(videoItem.videoUrl).toBe(`https://www.youtube.com/watch?v=${youtubeVideo.videoId}`);
        
        // Verify thumbnail is set
        expect(videoItem.thumbnail).toBeDefined();
        expect(videoItem.thumbnail).toBe(youtubeVideo.thumbnail);
        
        // Verify metadata validation passes (only if title and description are non-empty)
        if (youtubeVideo.title.trim().length > 0 && youtubeVideo.description.trim().length > 0) {
          const validation = validateYouTubeMetadata(youtubeVideo);
          expect(validation.valid).toBe(true);
          expect(validation.errors).toHaveLength(0);
        }
        
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('Property 3a: YouTube metadata should be preserved during conversion', () => {
    fc.assert(
      fc.property(youtubeVideoArb, (youtubeVideo: YouTubeVideo) => {
        const videoItem = youtubeService.convertToVideoItem(youtubeVideo);
        
        // All YouTube metadata should be preserved in the VideoItem
        expect(videoItem.title).toBe(youtubeVideo.title);
        expect(videoItem.description).toBe(youtubeVideo.description);
        expect(videoItem.viewCount).toBe(youtubeVideo.viewCount);
        expect(videoItem.youtubeId).toBe(youtubeVideo.videoId);
        expect(videoItem.thumbnail).toBe(youtubeVideo.thumbnail);
        expect(videoItem.createdDate).toEqual(youtubeVideo.publishedAt);
        
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('Property 3b: YouTube video URLs should be properly formatted', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 11, maxLength: 11 }).filter(s => /^[A-Za-z0-9_-]{11}$/.test(s)), (videoId: string) => {
        const mockYouTubeVideo: YouTubeVideo = {
          videoId,
          title: 'Test Video',
          description: 'Test Description',
          thumbnail: 'https://example.com/thumb.jpg',
          publishedAt: new Date(),
          duration: 'PT5M30S',
          viewCount: 1000
        };
        
        const videoItem = youtubeService.convertToVideoItem(mockYouTubeVideo);
        
        // YouTube URL should be properly formatted
        expect(videoItem.videoUrl).toBe(`https://www.youtube.com/watch?v=${videoId}`);
        expect(videoItem.youtubeId).toBe(videoId);
        
        // URL should be a valid YouTube watch URL
        const urlPattern = /^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/;
        expect(videoItem.videoUrl).toMatch(urlPattern);
        
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('Property 3c: YouTube view count formatting should be consistent', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 1000000000 }), (viewCount: number) => {
        const mockYouTubeVideo: YouTubeVideo = {
          videoId: 'test12345678',
          title: 'Test Video',
          description: 'Test Description',
          thumbnail: 'https://example.com/thumb.jpg',
          publishedAt: new Date(),
          duration: 'PT5M30S',
          viewCount
        };
        
        const videoItem = youtubeService.convertToVideoItem(mockYouTubeVideo);
        const formattedViewCount = YouTubeService.formatViewCount(viewCount);
        
        // View count should be preserved as number
        expect(videoItem.viewCount).toBe(viewCount);
        
        // Formatted view count should be a string
        expect(typeof formattedViewCount).toBe('string');
        
        // Formatted view count should contain the word "views"
        expect(formattedViewCount).toMatch(/views$/);
        
        // For large numbers, should use K, M, or B notation
        if (viewCount >= 1000000000) {
          expect(formattedViewCount).toMatch(/\d+\.?\d*B views/);
        } else if (viewCount >= 1000000) {
          expect(formattedViewCount).toMatch(/\d+\.?\d*M views/);
        } else if (viewCount >= 1000) {
          expect(formattedViewCount).toMatch(/\d+\.?\d*K views/);
        } else {
          expect(formattedViewCount).toBe(`${viewCount} views`);
        }
        
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('Property 3d: YouTube duration parsing should be consistent', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('PT30S', 'PT1M30S', 'PT5M45S', 'PT1H15M30S', 'PT2H30M45S'),
        (duration: string) => {
          const mockYouTubeVideo: YouTubeVideo = {
            videoId: 'test12345678',
            title: 'Test Video',
            description: 'Test Description',
            thumbnail: 'https://example.com/thumb.jpg',
            publishedAt: new Date(),
            duration,
            viewCount: 1000
          };
          
          const videoItem = youtubeService.convertToVideoItem(mockYouTubeVideo);
          
          // Duration should be converted to seconds
          expect(typeof videoItem.duration).toBe('number');
          expect(videoItem.duration).toBeGreaterThan(0);
          
          // Formatted duration should be readable
          const formattedDuration = YouTubeService.formatDuration(videoItem.duration!);
          expect(typeof formattedDuration).toBe('string');
          expect(formattedDuration).toMatch(/^\d+:\d{2}(:\d{2})?$/);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});