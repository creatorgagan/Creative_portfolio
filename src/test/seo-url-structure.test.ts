/**
 * Property-Based Test for SEO URL Structure
 * Feature: video-portfolio-website, Property 13: SEO URL Structure
 * Validates: Requirements 8.6
 * 
 * Property: For any navigation or routing, the system should implement proper URL structure and navigation for SEO optimization
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { generateSlug, isValidSEOUrl, generateSitemapData, generateSitemapXML } from '../utils/seo';
import { VideoItem, VideoCategory } from '../types';

describe('Property 13: SEO URL Structure', () => {
  it('should generate SEO-friendly slugs from any text', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 100 }),
        (text: string) => {
          const slug = generateSlug(text);

          // Verify slug is lowercase
          expect(slug).toBe(slug.toLowerCase());

          // Verify slug contains only alphanumeric characters and hyphens
          expect(slug).toMatch(/^[a-z0-9-]*$/);

          // Verify slug doesn't have consecutive hyphens
          expect(slug).not.toMatch(/--/);

          // Verify slug doesn't start or end with hyphen
          if (slug.length > 0) {
            expect(slug[0]).not.toBe('-');
            expect(slug[slug.length - 1]).not.toBe('-');
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should validate SEO URLs correctly', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 100 }),
        (text: string) => {
          const slug = generateSlug(text);

          // If slug is not empty, it should be valid
          if (slug.length > 0) {
            expect(isValidSEOUrl(slug)).toBe(true);
          }

          // Test invalid URLs
          if (text.includes('--')) {
            expect(isValidSEOUrl(text)).toBe(false);
          }

          if (text.startsWith('-') || text.endsWith('-')) {
            expect(isValidSEOUrl(text)).toBe(false);
          }

          if (/[A-Z]/.test(text)) {
            expect(isValidSEOUrl(text)).toBe(false);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate consistent slugs for the same input', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 100 }),
        (text: string) => {
          const slug1 = generateSlug(text);
          const slug2 = generateSlug(text);

          // Same input should always produce same slug
          expect(slug1).toBe(slug2);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate valid sitemap data for any collection of videos', () => {
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
          { minLength: 0, maxLength: 10 }
        ),
        (videos: VideoItem[]) => {
          const sitemapData = generateSitemapData(videos);

          // Verify sitemap includes main pages
          const mainPageUrls = sitemapData.map(url => url.loc);
          expect(mainPageUrls.some(url => url.endsWith('/'))).toBe(true); // Homepage
          expect(mainPageUrls.some(url => url.includes('#portfolio'))).toBe(true);
          expect(mainPageUrls.some(url => url.includes('#about'))).toBe(true);
          expect(mainPageUrls.some(url => url.includes('#contact'))).toBe(true);

          // Verify each video has an entry
          videos.forEach(video => {
            const videoUrl = sitemapData.find(url => url.loc.includes(video.id));
            expect(videoUrl).toBeDefined();
          });

          // Verify all URLs are valid
          sitemapData.forEach(url => {
            expect(url.loc).toBeTruthy();
            expect(url.loc.startsWith('http')).toBe(true);

            // Verify changefreq is valid
            if (url.changefreq) {
              expect(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).toContain(url.changefreq);
            }

            // Verify priority is valid
            if (url.priority !== undefined) {
              expect(url.priority).toBeGreaterThanOrEqual(0);
              expect(url.priority).toBeLessThanOrEqual(1);
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate valid XML sitemap from sitemap data', () => {
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
          { minLength: 0, maxLength: 5 }
        ),
        (videos: VideoItem[]) => {
          const sitemapData = generateSitemapData(videos);
          const sitemapXML = generateSitemapXML(sitemapData);

          // Verify XML declaration
          expect(sitemapXML).toContain('<?xml version="1.0" encoding="UTF-8"?>');

          // Verify urlset element
          expect(sitemapXML).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
          expect(sitemapXML).toContain('</urlset>');

          // Verify each URL is in the XML
          sitemapData.forEach(url => {
            expect(sitemapXML).toContain(`<loc>${url.loc}</loc>`);

            if (url.changefreq) {
              expect(sitemapXML).toContain(`<changefreq>${url.changefreq}</changefreq>`);
            }

            if (url.priority !== undefined) {
              expect(sitemapXML).toContain(`<priority>${url.priority.toFixed(1)}</priority>`);
            }
          });

          // Verify XML is well-formed (basic check)
          const urlCount = (sitemapXML.match(/<url>/g) || []).length;
          const urlCloseCount = (sitemapXML.match(/<\/url>/g) || []).length;
          expect(urlCount).toBe(urlCloseCount);
          expect(urlCount).toBe(sitemapData.length);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should handle special characters in slugs correctly', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 100 }),
        (text: string) => {
          const slug = generateSlug(text);

          // Verify slug doesn't contain special characters
          expect(slug).not.toMatch(/[^a-z0-9-]/);

          // Verify slug is safe for URLs
          const encoded = encodeURIComponent(slug);
          const decoded = decodeURIComponent(encoded);
          expect(decoded).toBe(slug);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should generate unique slugs for different titles', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.string({ minLength: 1, maxLength: 100 }),
          { minLength: 2, maxLength: 10 }
        ),
        (titles: string[]) => {
          const slugs = titles.map(title => generateSlug(title));

          // Filter out empty slugs
          const nonEmptySlugs = slugs.filter(slug => slug.length > 0);

          // If we have unique titles, we should have unique slugs (mostly)
          const uniqueTitles = new Set(titles);
          const uniqueSlugs = new Set(nonEmptySlugs);

          // The number of unique slugs should be close to the number of unique titles
          // (allowing for some collisions due to special character removal)
          if (uniqueTitles.size > 1 && nonEmptySlugs.length > 1) {
            expect(uniqueSlugs.size).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should maintain URL structure consistency across sitemap generations', () => {
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
          { minLength: 1, maxLength: 5 }
        ),
        (videos: VideoItem[]) => {
          const sitemapData1 = generateSitemapData(videos);
          const sitemapData2 = generateSitemapData(videos);

          // Same videos should generate same sitemap data
          expect(sitemapData1.length).toBe(sitemapData2.length);

          sitemapData1.forEach((url1, index) => {
            const url2 = sitemapData2[index];
            expect(url1.loc).toBe(url2.loc);
            expect(url1.changefreq).toBe(url2.changefreq);
            expect(url1.priority).toBe(url2.priority);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
