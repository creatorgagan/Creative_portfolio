/**
 * Property-Based Test for SEO Meta Tags
 * Feature: video-portfolio-website, Property 10: SEO Meta Tags Presence
 * Validates: Requirements 8.1
 * 
 * Property: For any page in the portfolio, proper meta tags, titles, and descriptions should be present
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fc from 'fast-check';
import { updateMetaTags, MetaTags } from '../utils/seo';

describe('Property 10: SEO Meta Tags Presence', () => {
  // Store original document state
  let originalTitle: string;
  let originalMetaTags: Element[];

  // Custom string generator that produces strings without leading/trailing whitespace
  const trimmedString = (minLength: number, maxLength: number) =>
    fc.string({ minLength, maxLength })
      .filter(s => s.trim().length > 0)
      .map(s => s.trim());

  beforeEach(() => {
    // Save original state
    originalTitle = document.title;
    originalMetaTags = Array.from(document.head.querySelectorAll('meta'));
  });

  afterEach(() => {
    // Restore original state
    document.title = originalTitle;
    
    // Remove all meta tags
    document.head.querySelectorAll('meta').forEach(tag => tag.remove());
    
    // Restore original meta tags
    originalMetaTags.forEach(tag => {
      document.head.appendChild(tag.cloneNode(true));
    });
  });

  it('should ensure all pages have required meta tags (title, description)', () => {
    fc.assert(
      fc.property(
        // Generate arbitrary page meta tags
        fc.record({
          title: trimmedString(1, 100),
          description: trimmedString(1, 200),
          keywords: fc.option(fc.array(trimmedString(1, 20), { minLength: 1, maxLength: 10 })),
          ogTitle: fc.option(trimmedString(1, 100)),
          ogDescription: fc.option(trimmedString(1, 200)),
          ogImage: fc.option(fc.webUrl()),
          ogUrl: fc.option(fc.webUrl()),
          canonical: fc.option(fc.webUrl())
        }),
        (metaTags: MetaTags) => {
          // Apply meta tags
          updateMetaTags(metaTags);

          // Verify title is set
          expect(document.title).toBe(metaTags.title);
          expect(document.title.length).toBeGreaterThan(0);

          // Verify description meta tag exists and has content
          const descriptionTag = document.querySelector('meta[name="description"]');
          expect(descriptionTag).not.toBeNull();
          expect(descriptionTag?.getAttribute('content')).toBe(metaTags.description);
          expect(descriptionTag?.getAttribute('content')?.length).toBeGreaterThan(0);

          // Verify Open Graph title (should default to title if not provided)
          const ogTitleTag = document.querySelector('meta[property="og:title"]');
          expect(ogTitleTag).not.toBeNull();
          const expectedOgTitle = metaTags.ogTitle || metaTags.title;
          expect(ogTitleTag?.getAttribute('content')).toBe(expectedOgTitle);

          // Verify Open Graph description (should default to description if not provided)
          const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
          expect(ogDescriptionTag).not.toBeNull();
          const expectedOgDescription = metaTags.ogDescription || metaTags.description;
          expect(ogDescriptionTag?.getAttribute('content')).toBe(expectedOgDescription);

          // Verify Twitter card meta tags
          const twitterCardTag = document.querySelector('meta[property="twitter:card"]');
          expect(twitterCardTag).not.toBeNull();
          
          const twitterTitleTag = document.querySelector('meta[property="twitter:title"]');
          expect(twitterTitleTag).not.toBeNull();
          expect(twitterTitleTag?.getAttribute('content')).toBe(metaTags.twitterTitle || metaTags.title);

          const twitterDescriptionTag = document.querySelector('meta[property="twitter:description"]');
          expect(twitterDescriptionTag).not.toBeNull();
          expect(twitterDescriptionTag?.getAttribute('content')).toBe(metaTags.twitterDescription || metaTags.description);

          // If keywords provided, verify they exist
          if (metaTags.keywords && metaTags.keywords.length > 0) {
            const keywordsTag = document.querySelector('meta[name="keywords"]');
            expect(keywordsTag).not.toBeNull();
            expect(keywordsTag?.getAttribute('content')).toBe(metaTags.keywords.join(', '));
          }

          // If canonical URL provided, verify it exists
          if (metaTags.canonical) {
            const canonicalLink = document.querySelector('link[rel="canonical"]');
            expect(canonicalLink).not.toBeNull();
            expect(canonicalLink?.getAttribute('href')).toBe(metaTags.canonical);
          }

          // If OG image provided, verify it exists
          if (metaTags.ogImage) {
            const ogImageTag = document.querySelector('meta[property="og:image"]');
            expect(ogImageTag).not.toBeNull();
            expect(ogImageTag?.getAttribute('content')).toBe(metaTags.ogImage);
          }

          // If OG URL provided, verify it exists
          if (metaTags.ogUrl) {
            const ogUrlTag = document.querySelector('meta[property="og:url"]');
            expect(ogUrlTag).not.toBeNull();
            expect(ogUrlTag?.getAttribute('content')).toBe(metaTags.ogUrl);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should maintain meta tag consistency across multiple updates', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            title: trimmedString(1, 100),
            description: trimmedString(1, 200),
            keywords: fc.option(fc.array(trimmedString(1, 20), { minLength: 1, maxLength: 5 }))
          }),
          { minLength: 2, maxLength: 5 }
        ),
        (metaTagsArray: MetaTags[]) => {
          // Apply each set of meta tags sequentially
          metaTagsArray.forEach(metaTags => {
            updateMetaTags(metaTags);

            // After each update, verify the current meta tags are correct
            expect(document.title).toBe(metaTags.title);
            
            const descriptionTag = document.querySelector('meta[name="description"]');
            expect(descriptionTag?.getAttribute('content')).toBe(metaTags.description);
          });

          // Verify the final state matches the last update
          const lastMetaTags = metaTagsArray[metaTagsArray.length - 1];
          expect(document.title).toBe(lastMetaTags.title);
          
          const finalDescriptionTag = document.querySelector('meta[name="description"]');
          expect(finalDescriptionTag?.getAttribute('content')).toBe(lastMetaTags.description);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should not create duplicate meta tags', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: trimmedString(1, 100),
          description: trimmedString(1, 200)
        }),
        (metaTags: MetaTags) => {
          // Apply meta tags twice
          updateMetaTags(metaTags);
          updateMetaTags(metaTags);

          // Verify no duplicate meta tags exist
          const descriptionTags = document.querySelectorAll('meta[name="description"]');
          expect(descriptionTags.length).toBe(1);

          const ogTitleTags = document.querySelectorAll('meta[property="og:title"]');
          expect(ogTitleTags.length).toBe(1);

          const ogDescriptionTags = document.querySelectorAll('meta[property="og:description"]');
          expect(ogDescriptionTags.length).toBe(1);

          const twitterCardTags = document.querySelectorAll('meta[property="twitter:card"]');
          expect(twitterCardTags.length).toBe(1);
        }
      ),
      { numRuns: 100 }
    );
  });
});
