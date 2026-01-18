/**
 * Unit Tests for SEO Implementation
 * Tests Open Graph tags, XML sitemap generation, and URL structure
 * Validates: Requirements 8.3, 8.5, 8.6
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  updateMetaTags,
  generateSitemapXML,
  generateSitemapData,
  generateSlug,
  isValidSEOUrl,
  extractKeywords
} from '../utils/seo';
import { VideoItem, VideoCategory } from '../types';

describe('SEO Implementation Unit Tests', () => {
  // Store original document state
  let originalTitle: string;
  let originalMetaTags: Element[];

  beforeEach(() => {
    originalTitle = document.title;
    originalMetaTags = Array.from(document.head.querySelectorAll('meta'));
  });

  afterEach(() => {
    document.title = originalTitle;
    document.head.querySelectorAll('meta').forEach(tag => tag.remove());
    originalMetaTags.forEach(tag => {
      document.head.appendChild(tag.cloneNode(true));
    });
  });

  describe('Open Graph Tags and Social Media Sharing (Requirement 8.3)', () => {
    it('should set Open Graph type to website', () => {
      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description'
      });

      const ogType = document.querySelector('meta[property="og:type"]');
      expect(ogType).not.toBeNull();
      expect(ogType?.getAttribute('content')).toBe('website');
    });

    it('should set Open Graph image for social media sharing', () => {
      const imageUrl = 'https://example.com/og-image.jpg';
      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description',
        ogImage: imageUrl
      });

      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage).not.toBeNull();
      expect(ogImage?.getAttribute('content')).toBe(imageUrl);
    });

    it('should set Open Graph URL for social media sharing', () => {
      const url = 'https://example.com/portfolio';
      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description',
        ogUrl: url
      });

      const ogUrl = document.querySelector('meta[property="og:url"]');
      expect(ogUrl).not.toBeNull();
      expect(ogUrl?.getAttribute('content')).toBe(url);
    });

    it('should set Twitter Card meta tags for Twitter sharing', () => {
      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description',
        twitterCard: 'summary_large_image',
        twitterImage: 'https://example.com/twitter-image.jpg'
      });

      const twitterCard = document.querySelector('meta[property="twitter:card"]');
      expect(twitterCard).not.toBeNull();
      expect(twitterCard?.getAttribute('content')).toBe('summary_large_image');

      const twitterImage = document.querySelector('meta[property="twitter:image"]');
      expect(twitterImage).not.toBeNull();
      expect(twitterImage?.getAttribute('content')).toBe('https://example.com/twitter-image.jpg');
    });

    it('should use default Twitter card type if not specified', () => {
      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description'
      });

      const twitterCard = document.querySelector('meta[property="twitter:card"]');
      expect(twitterCard).not.toBeNull();
      expect(twitterCard?.getAttribute('content')).toBe('summary_large_image');
    });

    it('should set all required Open Graph tags for social media', () => {
      updateMetaTags({
        title: 'My Portfolio',
        description: 'A showcase of my work',
        ogImage: 'https://example.com/image.jpg',
        ogUrl: 'https://example.com'
      });

      // Verify all required OG tags are present
      expect(document.querySelector('meta[property="og:title"]')).not.toBeNull();
      expect(document.querySelector('meta[property="og:description"]')).not.toBeNull();
      expect(document.querySelector('meta[property="og:image"]')).not.toBeNull();
      expect(document.querySelector('meta[property="og:url"]')).not.toBeNull();
    });
  });

  describe('XML Sitemap Generation (Requirement 8.5)', () => {
    it('should generate valid XML sitemap with proper structure', () => {
      const videos: VideoItem[] = [
        {
          id: 'video-1',
          title: 'Test Video',
          description: 'Test description',
          thumbnail: 'https://example.com/thumb.jpg',
          videoUrl: 'https://example.com/video.mp4',
          category: VideoCategory.COMMERCIAL,
          tags: ['test'],
          createdDate: new Date('2024-01-01'),
          featured: true
        }
      ];

      const sitemapData = generateSitemapData(videos);
      const sitemapXML = generateSitemapXML(sitemapData);

      // Verify XML declaration
      expect(sitemapXML).toContain('<?xml version="1.0" encoding="UTF-8"?>');

      // Verify urlset element with namespace
      expect(sitemapXML).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      expect(sitemapXML).toContain('</urlset>');

      // Verify URL elements are properly closed
      const urlOpenTags = (sitemapXML.match(/<url>/g) || []).length;
      const urlCloseTags = (sitemapXML.match(/<\/url>/g) || []).length;
      expect(urlOpenTags).toBe(urlCloseTags);
    });

    it('should include main pages in sitemap', () => {
      const sitemapData = generateSitemapData([]);
      const sitemapXML = generateSitemapXML(sitemapData);

      // Verify main pages are included
      expect(sitemapXML).toContain('#portfolio');
      expect(sitemapXML).toContain('#about');
      expect(sitemapXML).toContain('#contact');
    });

    it('should include video pages in sitemap', () => {
      const videos: VideoItem[] = [
        {
          id: 'video-123',
          title: 'Test Video',
          description: 'Test description',
          thumbnail: 'https://example.com/thumb.jpg',
          videoUrl: 'https://example.com/video.mp4',
          category: VideoCategory.COMMERCIAL,
          tags: ['test'],
          createdDate: new Date('2024-01-01'),
          featured: true
        }
      ];

      const sitemapData = generateSitemapData(videos);
      const sitemapXML = generateSitemapXML(sitemapData);

      // Verify video page is included
      expect(sitemapXML).toContain('video-123');
    });

    it('should include changefreq and priority in sitemap', () => {
      const sitemapData = generateSitemapData([]);
      const sitemapXML = generateSitemapXML(sitemapData);

      // Verify changefreq and priority are included
      expect(sitemapXML).toContain('<changefreq>');
      expect(sitemapXML).toContain('</changefreq>');
      expect(sitemapXML).toContain('<priority>');
      expect(sitemapXML).toContain('</priority>');
    });

    it('should format priority with one decimal place', () => {
      const sitemapData = generateSitemapData([]);
      const sitemapXML = generateSitemapXML(sitemapData);

      // Verify priority format (e.g., 1.0, 0.9, 0.8)
      expect(sitemapXML).toMatch(/<priority>\d\.\d<\/priority>/);
    });
  });

  describe('URL Structure and Routing (Requirement 8.6)', () => {
    it('should generate SEO-friendly slugs from titles', () => {
      expect(generateSlug('My Amazing Video')).toBe('my-amazing-video');
      expect(generateSlug('Test Video 123')).toBe('test-video-123');
      expect(generateSlug('Special!@#$%Characters')).toBe('specialcharacters');
    });

    it('should handle multiple spaces in slug generation', () => {
      expect(generateSlug('Multiple   Spaces   Here')).toBe('multiple-spaces-here');
    });

    it('should remove leading and trailing hyphens from slugs', () => {
      expect(generateSlug('-leading-hyphen')).toBe('leading-hyphen');
      expect(generateSlug('trailing-hyphen-')).toBe('trailing-hyphen');
      expect(generateSlug('-both-')).toBe('both');
    });

    it('should validate proper SEO URLs', () => {
      expect(isValidSEOUrl('my-video-title')).toBe(true);
      expect(isValidSEOUrl('video-123')).toBe(true);
      expect(isValidSEOUrl('portfolio/video-1')).toBe(true);
    });

    it('should reject invalid SEO URLs', () => {
      expect(isValidSEOUrl('My-Video-Title')).toBe(false); // Uppercase
      expect(isValidSEOUrl('video--title')).toBe(false); // Double hyphen
      expect(isValidSEOUrl('-video-title')).toBe(false); // Leading hyphen
      expect(isValidSEOUrl('video-title-')).toBe(false); // Trailing hyphen
      expect(isValidSEOUrl('video_title')).toBe(false); // Underscore
    });

    it('should generate consistent slugs for the same input', () => {
      const title = 'Consistent Video Title';
      const slug1 = generateSlug(title);
      const slug2 = generateSlug(title);
      expect(slug1).toBe(slug2);
    });

    it('should handle empty strings in slug generation', () => {
      expect(generateSlug('')).toBe('');
      expect(generateSlug('   ')).toBe('');
    });

    it('should handle special characters in slug generation', () => {
      expect(generateSlug('C++ Programming')).toBe('c-programming');
      expect(generateSlug('Node.js Tutorial')).toBe('nodejs-tutorial');
      expect(generateSlug('React & Redux')).toBe('react-redux');
    });
  });

  describe('Keyword Extraction', () => {
    it('should extract keywords from text', () => {
      const text = 'This is a test video about programming and development';
      const keywords = extractKeywords(text, 5);

      expect(keywords.length).toBeLessThanOrEqual(5);
      expect(keywords.length).toBeGreaterThan(0);
      
      // Should not include stop words
      expect(keywords).not.toContain('this');
      expect(keywords).not.toContain('is');
      expect(keywords).not.toContain('a');
      expect(keywords).not.toContain('about');
      expect(keywords).not.toContain('and');
    });

    it('should filter out short words', () => {
      const text = 'The cat sat on the mat with a big dog';
      const keywords = extractKeywords(text, 10);

      // Should not include words with 3 or fewer characters
      keywords.forEach(keyword => {
        expect(keyword.length).toBeGreaterThan(3);
      });
    });

    it('should return keywords in lowercase', () => {
      const text = 'Programming JavaScript TypeScript React';
      const keywords = extractKeywords(text, 10);

      keywords.forEach(keyword => {
        expect(keyword).toBe(keyword.toLowerCase());
      });
    });

    it('should limit number of keywords returned', () => {
      const text = 'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10';
      const keywords = extractKeywords(text, 5);

      expect(keywords.length).toBeLessThanOrEqual(5);
    });
  });

  describe('Canonical URL', () => {
    it('should set canonical URL link tag', () => {
      const canonicalUrl = 'https://example.com/portfolio';
      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description',
        canonical: canonicalUrl
      });

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      expect(canonicalLink).not.toBeNull();
      expect(canonicalLink?.getAttribute('href')).toBe(canonicalUrl);
    });

    it('should update canonical URL when changed', () => {
      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description',
        canonical: 'https://example.com/page1'
      });

      updateMetaTags({
        title: 'Test Portfolio',
        description: 'Test description',
        canonical: 'https://example.com/page2'
      });

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      expect(canonicalLink?.getAttribute('href')).toBe('https://example.com/page2');
    });
  });
});
