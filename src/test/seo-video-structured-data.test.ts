/**
 * Property-Based Test for Video Structured Data
 * Feature: video-portfolio-website, Property 12: Video Structured Data
 * Validates: Requirements 8.4
 * 
 * Property: For any video content displayed, the system should include structured data markup for rich search results
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { generateVideoStructuredData } from '../utils/seo';
import { VideoItem, VideoCategory, SiteConfig } from '../types';

describe('Property 12: Video Structured Data', () => {
  // Helper to create a valid site config
  const createSiteConfig = (): SiteConfig => ({
    personal: {
      name: 'Test Creator',
      tagline: 'Creative Professional',
      bio: 'Test bio',
      email: 'test@example.com',
      location: 'Test City'
    },
    social: {
      youtube: 'https://youtube.com/@test',
      instagram: 'https://instagram.com/test',
      linkedin: 'https://linkedin.com/in/test',
      twitter: 'https://twitter.com/test'
    },
    seo: {
      title: 'Test Portfolio',
      description: 'Test description',
      keywords: ['test', 'portfolio'],
      ogImage: '/test-image.jpg'
    }
  });

  it('should generate valid JSON-LD structured data for any video', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.uuid(),
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 500 }),
          thumbnail: fc.webUrl(),
          videoUrl: fc.webUrl(),
          youtubeId: fc.option(fc.stringMatching(/^[a-zA-Z0-9_-]{11}$/)),
          category: fc.constantFrom(...Object.values(VideoCategory)),
          tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 1, maxLength: 10 }),
          createdDate: fc.date({ min: new Date('2020-01-01'), max: new Date() }),
          featured: fc.boolean(),
          duration: fc.option(fc.integer({ min: 1, max: 7200 })),
          viewCount: fc.option(fc.integer({ min: 0, max: 1000000 }))
        }),
        (video: VideoItem) => {
          const siteConfig = createSiteConfig();
          const structuredData = generateVideoStructuredData(video, siteConfig);

          // Verify it's valid JSON
          expect(() => JSON.parse(structuredData)).not.toThrow();

          const parsed = JSON.parse(structuredData);

          // Verify required Schema.org VideoObject properties
          expect(parsed['@context']).toBe('https://schema.org');
          expect(parsed['@type']).toBe('VideoObject');
          expect(parsed.name).toBe(video.title);
          expect(parsed.description).toBe(video.description);
          expect(parsed.thumbnailUrl).toBe(video.thumbnail);
          expect(parsed.uploadDate).toBe(video.createdDate.toISOString());

          // Verify contentUrl or embedUrl is present
          expect(parsed.contentUrl || parsed.embedUrl).toBeTruthy();

          // If YouTube ID exists, verify embedUrl format
          if (video.youtubeId) {
            expect(parsed.embedUrl).toBe(`https://www.youtube.com/embed/${video.youtubeId}`);
          }

          // Verify author information
          expect(parsed.author).toBeDefined();
          expect(parsed.author['@type']).toBe('Person');
          expect(parsed.author.name).toBe(siteConfig.personal.name);

          // Verify publisher information
          expect(parsed.publisher).toBeDefined();
          expect(parsed.publisher['@type']).toBe('Person');
          expect(parsed.publisher.name).toBe(siteConfig.personal.name);

          // If duration exists, verify ISO 8601 format
          if (video.duration) {
            expect(parsed.duration).toBe(`PT${video.duration}S`);
            expect(parsed.duration).toMatch(/^PT\d+S$/);
          }

          // If viewCount exists, verify interaction statistic
          if (video.viewCount) {
            expect(parsed.interactionStatistic).toBeDefined();
            expect(parsed.interactionStatistic['@type']).toBe('InteractionCounter');
            expect(parsed.interactionStatistic.interactionType['@type']).toBe('WatchAction');
            expect(parsed.interactionStatistic.userInteractionCount).toBe(video.viewCount);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate structured data that validates against Schema.org VideoObject schema', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.uuid(),
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 500 }),
          thumbnail: fc.webUrl(),
          videoUrl: fc.webUrl(),
          category: fc.constantFrom(...Object.values(VideoCategory)),
          tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 1, maxLength: 5 }),
          createdDate: fc.date({ min: new Date('2020-01-01'), max: new Date() }),
          featured: fc.boolean()
        }),
        (video: VideoItem) => {
          const siteConfig = createSiteConfig();
          const structuredData = generateVideoStructuredData(video, siteConfig);
          const parsed = JSON.parse(structuredData);

          // Verify all required VideoObject properties are present
          const requiredProperties = ['@context', '@type', 'name', 'description', 'thumbnailUrl', 'uploadDate'];
          requiredProperties.forEach(prop => {
            expect(parsed[prop]).toBeDefined();
            expect(parsed[prop]).not.toBeNull();
          });

          // Verify data types are correct
          expect(typeof parsed.name).toBe('string');
          expect(typeof parsed.description).toBe('string');
          expect(typeof parsed.thumbnailUrl).toBe('string');
          expect(typeof parsed.uploadDate).toBe('string');

          // Verify uploadDate is valid ISO 8601 format
          expect(() => new Date(parsed.uploadDate)).not.toThrow();
          expect(new Date(parsed.uploadDate).toISOString()).toBe(parsed.uploadDate);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should handle optional video properties correctly', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.uuid(),
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 500 }),
          thumbnail: fc.webUrl(),
          videoUrl: fc.webUrl(),
          category: fc.constantFrom(...Object.values(VideoCategory)),
          tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 1, maxLength: 5 }),
          createdDate: fc.date({ min: new Date('2020-01-01'), max: new Date() }),
          featured: fc.boolean(),
          // Optional properties
          youtubeId: fc.option(fc.stringMatching(/^[a-zA-Z0-9_-]{11}$/), { nil: undefined }),
          duration: fc.option(fc.integer({ min: 1, max: 7200 }), { nil: undefined }),
          viewCount: fc.option(fc.integer({ min: 0, max: 1000000 }), { nil: undefined })
        }),
        (video: VideoItem) => {
          const siteConfig = createSiteConfig();
          const structuredData = generateVideoStructuredData(video, siteConfig);
          const parsed = JSON.parse(structuredData);

          // If optional properties are not provided, they should not be in the output
          if (!video.duration) {
            expect(parsed.duration).toBeUndefined();
          }

          if (!video.viewCount) {
            expect(parsed.interactionStatistic).toBeUndefined();
          }

          // But required properties should always be present
          expect(parsed.name).toBeDefined();
          expect(parsed.description).toBeDefined();
          expect(parsed.thumbnailUrl).toBeDefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate unique structured data for different videos', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.uuid(),
            title: fc.string({ minLength: 1, maxLength: 100 }),
            description: fc.string({ minLength: 1, maxLength: 500 }),
            thumbnail: fc.webUrl(),
            videoUrl: fc.webUrl(),
            category: fc.constantFrom(...Object.values(VideoCategory)),
            tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 1, maxLength: 5 }),
            createdDate: fc.date({ min: new Date('2020-01-01'), max: new Date() }),
            featured: fc.boolean()
          }),
          { minLength: 2, maxLength: 5 }
        ),
        (videos: VideoItem[]) => {
          const siteConfig = createSiteConfig();
          const structuredDataArray = videos.map(video => 
            generateVideoStructuredData(video, siteConfig)
          );

          // Verify each video generates different structured data
          const parsedArray = structuredDataArray.map(data => JSON.parse(data));

          for (let i = 0; i < parsedArray.length; i++) {
            for (let j = i + 1; j < parsedArray.length; j++) {
              // Videos should have different names or descriptions
              const isDifferent = 
                parsedArray[i].name !== parsedArray[j].name ||
                parsedArray[i].description !== parsedArray[j].description ||
                parsedArray[i].thumbnailUrl !== parsedArray[j].thumbnailUrl;
              
              expect(isDifferent).toBe(true);
            }
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should properly escape special characters in structured data', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.uuid(),
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 500 }),
          thumbnail: fc.webUrl(),
          videoUrl: fc.webUrl(),
          category: fc.constantFrom(...Object.values(VideoCategory)),
          tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 1, maxLength: 5 }),
          createdDate: fc.date({ min: new Date('2020-01-01'), max: new Date() }),
          featured: fc.boolean()
        }),
        (video: VideoItem) => {
          const siteConfig = createSiteConfig();
          const structuredData = generateVideoStructuredData(video, siteConfig);

          // Verify it's valid JSON (which means special characters are properly escaped)
          expect(() => JSON.parse(structuredData)).not.toThrow();

          const parsed = JSON.parse(structuredData);

          // Verify the parsed data matches the original video data
          expect(parsed.name).toBe(video.title);
          expect(parsed.description).toBe(video.description);
        }
      ),
      { numRuns: 100 }
    );
  });
});
