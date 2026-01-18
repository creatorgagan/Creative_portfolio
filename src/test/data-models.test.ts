import { describe, it, expect } from 'vitest';
import {
  validateVideoItem,
  validateYouTubeVideo,
  validateSiteConfig,
  validateVideoCategory,
  validateVideoMetadata,
  validateYouTubeMetadata,
  isValidEmail,
  getYouTubeVideoId,
  formatDuration,
  formatViewCount
} from '../utils';
import {
  VideoItem,
  VideoCategory,
  YouTubeVideo,
  SiteConfig
} from '../types';

describe('Data Models Validation', () => {
  describe('VideoItem validation', () => {
    const validVideoItem: VideoItem = {
      id: 'video-123',
      title: 'Test Video',
      description: 'A test video description',
      thumbnail: 'https://example.com/thumbnail.jpg',
      videoUrl: 'https://example.com/video.mp4',
      category: VideoCategory.COMMERCIAL,
      tags: ['test', 'video'],
      createdDate: new Date('2024-01-01'),
      featured: true,
      duration: 120,
      viewCount: 1000
    };

    it('should validate a complete valid VideoItem', () => {
      const result = validateVideoItem(validVideoItem);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate VideoItem with minimal required fields', () => {
      const minimalVideo = {
        id: 'video-456',
        title: 'Minimal Video',
        description: 'Minimal description',
        thumbnail: 'https://example.com/thumb.jpg',
        videoUrl: 'https://example.com/video.mp4',
        category: VideoCategory.PERSONAL,
        tags: ['minimal'],
        createdDate: new Date(),
        featured: false
      };

      const result = validateVideoItem(minimalVideo);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject VideoItem with missing required fields', () => {
      const invalidVideo = {
        title: 'Test Video'
        // Missing other required fields
      };

      const result = validateVideoItem(invalidVideo);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors).toContain('Video ID is required and must be a non-empty string');
    });

    it('should reject VideoItem with invalid field types', () => {
      const invalidVideo = {
        id: 123, // Should be string
        title: '', // Should be non-empty
        description: null, // Should be string
        thumbnail: '',
        videoUrl: '',
        category: 'invalid-category',
        tags: 'not-an-array', // Should be array
        createdDate: 'invalid-date',
        featured: 'not-boolean' // Should be boolean
      };

      const result = validateVideoItem(invalidVideo);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should validate optional YouTube ID correctly', () => {
      const videoWithYouTube = {
        ...validVideoItem,
        youtubeId: 'dQw4w9WgXcQ' // Valid 11-character YouTube ID
      };

      const result = validateVideoItem(videoWithYouTube);
      expect(result.valid).toBe(true);

      const videoWithInvalidYouTube = {
        ...validVideoItem,
        youtubeId: 'invalid' // Invalid YouTube ID
      };

      const invalidResult = validateVideoItem(videoWithInvalidYouTube);
      expect(invalidResult.valid).toBe(false);
      expect(invalidResult.errors).toContain('YouTube ID must be an 11-character string if provided');
    });

    it('should validate duration and viewCount as positive numbers', () => {
      const videoWithNegativeDuration = {
        ...validVideoItem,
        duration: -10
      };

      const result = validateVideoItem(videoWithNegativeDuration);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Video duration must be a positive number if provided');

      const videoWithNegativeViews = {
        ...validVideoItem,
        viewCount: -5
      };

      const viewResult = validateVideoItem(videoWithNegativeViews);
      expect(viewResult.valid).toBe(false);
      expect(viewResult.errors).toContain('Video view count must be a positive number if provided');
    });
  });

  describe('YouTubeVideo validation', () => {
    const validYouTubeVideo: YouTubeVideo = {
      videoId: 'dQw4w9WgXcQ',
      title: 'Test YouTube Video',
      description: 'A test YouTube video description',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      publishedAt: new Date('2024-01-01'),
      duration: 'PT3M33S',
      viewCount: 1000000
    };

    it('should validate a complete valid YouTubeVideo', () => {
      const result = validateYouTubeVideo(validYouTubeVideo);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject YouTubeVideo with invalid video ID', () => {
      const invalidVideo = {
        ...validYouTubeVideo,
        videoId: 'invalid' // Not 11 characters
      };

      const result = validateYouTubeVideo(invalidVideo);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('YouTube video ID is required and must be an 11-character string');
    });

    it('should reject YouTubeVideo with missing required fields', () => {
      const invalidVideo = {
        videoId: 'dQw4w9WgXcQ'
        // Missing other required fields
      };

      const result = validateYouTubeVideo(invalidVideo);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should reject YouTubeVideo with negative view count', () => {
      const invalidVideo = {
        ...validYouTubeVideo,
        viewCount: -100
      };

      const result = validateYouTubeVideo(invalidVideo);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('YouTube video view count must be a positive number');
    });
  });

  describe('SiteConfig validation', () => {
    const validSiteConfig: SiteConfig = {
      personal: {
        name: 'John Doe',
        tagline: 'Professional Video Creator',
        bio: 'I create amazing videos for brands and individuals.',
        email: 'john@example.com',
        phone: '+1-555-0123',
        location: 'New York, NY'
      },
      social: {
        youtube: 'https://youtube.com/@johndoe',
        instagram: 'https://instagram.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe'
      },
      seo: {
        title: 'John Doe - Video Creator',
        description: 'Professional video creation services',
        keywords: ['video', 'creator', 'professional'],
        ogImage: 'https://example.com/og-image.jpg'
      }
    };

    it('should validate a complete valid SiteConfig', () => {
      const result = validateSiteConfig(validSiteConfig);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate SiteConfig with minimal required fields', () => {
      const minimalConfig = {
        personal: {
          name: 'Jane Doe',
          tagline: 'Video Creator',
          bio: 'I make videos.',
          email: 'jane@example.com',
          location: 'Los Angeles, CA'
        },
        social: {
          youtube: 'https://youtube.com/@janedoe'
        },
        seo: {
          title: 'Jane Doe Videos',
          description: 'Video creation',
          keywords: ['video'],
          ogImage: 'https://example.com/og.jpg'
        }
      };

      const result = validateSiteConfig(minimalConfig);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject SiteConfig with invalid email', () => {
      const invalidConfig = {
        ...validSiteConfig,
        personal: {
          ...validSiteConfig.personal,
          email: 'invalid-email'
        }
      };

      const result = validateSiteConfig(invalidConfig);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Personal email is required and must be a valid email address');
    });

    it('should reject SiteConfig with missing required sections', () => {
      const invalidConfig = {
        personal: validSiteConfig.personal
        // Missing social and seo sections
      };

      const result = validateSiteConfig(invalidConfig);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Site config social section is required and must be an object');
      expect(result.errors).toContain('Site config SEO section is required and must be an object');
    });

    it('should reject SiteConfig with empty required fields', () => {
      const invalidConfig = {
        personal: {
          name: '', // Empty name
          tagline: 'Video Creator',
          bio: 'I make videos.',
          email: 'jane@example.com',
          location: 'Los Angeles, CA'
        },
        social: {
          youtube: '' // Empty YouTube URL
        },
        seo: {
          title: 'Jane Doe Videos',
          description: '',
          keywords: [],
          ogImage: 'https://example.com/og.jpg'
        }
      };

      const result = validateSiteConfig(invalidConfig);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Personal name is required and must be a non-empty string');
      expect(result.errors).toContain('Social YouTube URL is required and must be a non-empty string');
      expect(result.errors).toContain('SEO description is required and must be a non-empty string');
    });

    it('should validate optional social media fields correctly', () => {
      const configWithEmptyOptional = {
        ...validSiteConfig,
        social: {
          youtube: 'https://youtube.com/@johndoe',
          instagram: '', // Empty optional field should be invalid
          linkedin: undefined, // Undefined optional field should be valid
          twitter: 'https://twitter.com/johndoe'
        }
      };

      const result = validateSiteConfig(configWithEmptyOptional);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Social instagram must be a non-empty string if provided');
    });
  });

  describe('Video category validation', () => {
    it('should validate correct video categories', () => {
      expect(validateVideoCategory('commercial')).toBe(true);
      expect(validateVideoCategory('personal')).toBe(true);
      expect(validateVideoCategory('documentary')).toBe(true);
      expect(validateVideoCategory('music-video')).toBe(true);
      expect(validateVideoCategory('other')).toBe(true);
    });

    it('should reject invalid video categories', () => {
      expect(validateVideoCategory('invalid')).toBe(false);
      expect(validateVideoCategory('')).toBe(false);
      expect(validateVideoCategory('COMMERCIAL')).toBe(false); // Case sensitive
    });
  });

  describe('Video metadata validation for display (Requirements 2.3)', () => {
    it('should validate video with complete metadata for display', () => {
      const video = {
        title: 'Test Video',
        description: 'A comprehensive description',
        tags: ['tag1', 'tag2', 'tag3']
      };

      const result = validateVideoMetadata(video);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject video with missing title for display', () => {
      const video = {
        title: '',
        description: 'A description',
        tags: ['tag1']
      };

      const result = validateVideoMetadata(video);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Video must have a title for display');
    });

    it('should reject video with missing description for display', () => {
      const video = {
        title: 'Test Video',
        description: '',
        tags: ['tag1']
      };

      const result = validateVideoMetadata(video);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Video must have a description for display');
    });

    it('should reject video with no tags for display', () => {
      const video = {
        title: 'Test Video',
        description: 'A description',
        tags: []
      };

      const result = validateVideoMetadata(video);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Video must have relevant tags for display');
    });
  });

  describe('YouTube metadata validation for display (Requirements 3.3)', () => {
    it('should validate YouTube video with complete metadata for display', () => {
      const video = {
        title: 'YouTube Test Video',
        description: 'A YouTube video description',
        viewCount: 1000
      };

      const result = validateYouTubeMetadata(video);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject YouTube video with missing title for display', () => {
      const video = {
        title: '',
        description: 'A description',
        viewCount: 1000
      };

      const result = validateYouTubeMetadata(video);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('YouTube video must have a title for display');
    });

    it('should reject YouTube video with missing description for display', () => {
      const video = {
        title: 'YouTube Video',
        description: '',
        viewCount: 1000
      };

      const result = validateYouTubeMetadata(video);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('YouTube video must have a description for display');
    });

    it('should reject YouTube video with invalid view count for display', () => {
      const video = {
        title: 'YouTube Video',
        description: 'A description',
        viewCount: -100
      };

      const result = validateYouTubeMetadata(video);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('YouTube video must have a valid view count for display');
    });
  });
});

describe('Utility Functions for Data Handling', () => {
  describe('Email validation', () => {
    it('should validate correct email formats', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.org')).toBe(true);
    });

    it('should reject invalid email formats', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test.example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('YouTube video ID extraction', () => {
    it('should extract video ID from various YouTube URL formats', () => {
      expect(getYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
      expect(getYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
      expect(getYouTubeVideoId('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
      expect(getYouTubeVideoId('https://www.youtube.com/v/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
    });

    it('should return null for invalid YouTube URLs', () => {
      expect(getYouTubeVideoId('https://example.com/video')).toBe(null);
      expect(getYouTubeVideoId('invalid-url')).toBe(null);
      expect(getYouTubeVideoId('')).toBe(null);
    });
  });

  describe('Duration formatting', () => {
    it('should format duration correctly', () => {
      expect(formatDuration(0)).toBe('0:00');
      expect(formatDuration(30)).toBe('0:30');
      expect(formatDuration(60)).toBe('1:00');
      expect(formatDuration(90)).toBe('1:30');
      expect(formatDuration(3661)).toBe('61:01'); // 1 hour 1 minute 1 second
    });
  });

  describe('View count formatting', () => {
    it('should format view counts correctly', () => {
      expect(formatViewCount(0)).toBe('0');
      expect(formatViewCount(999)).toBe('999');
      expect(formatViewCount(1000)).toBe('1.0K');
      expect(formatViewCount(1500)).toBe('1.5K');
      expect(formatViewCount(1000000)).toBe('1.0M');
      expect(formatViewCount(1500000)).toBe('1.5M');
      expect(formatViewCount(1000000000)).toBe('1.0B');
    });
  });
});

describe('Type Safety and Structure', () => {
  describe('VideoCategory enum', () => {
    it('should have all expected category values', () => {
      expect(VideoCategory.COMMERCIAL).toBe('commercial');
      expect(VideoCategory.PERSONAL).toBe('personal');
      expect(VideoCategory.DOCUMENTARY).toBe('documentary');
      expect(VideoCategory.MUSIC_VIDEO).toBe('music-video');
      expect(VideoCategory.OTHER).toBe('other');
    });
  });

  describe('Data structure consistency', () => {
    it('should maintain consistent date handling', () => {
      const video: VideoItem = {
        id: 'test-123',
        title: 'Test Video',
        description: 'Test description',
        thumbnail: 'https://example.com/thumb.jpg',
        videoUrl: 'https://example.com/video.mp4',
        category: VideoCategory.COMMERCIAL,
        tags: ['test'],
        createdDate: new Date('2024-01-01'),
        featured: false
      };

      expect(video.createdDate).toBeInstanceOf(Date);
      expect(video.createdDate.getFullYear()).toBe(2024);
    });

    it('should handle optional fields correctly', () => {
      const minimalVideo: VideoItem = {
        id: 'test-456',
        title: 'Minimal Video',
        description: 'Minimal description',
        thumbnail: 'https://example.com/thumb.jpg',
        videoUrl: 'https://example.com/video.mp4',
        category: VideoCategory.PERSONAL,
        tags: ['minimal'],
        createdDate: new Date(),
        featured: false
        // Optional fields: youtubeId, duration, viewCount are undefined
      };

      expect(minimalVideo.youtubeId).toBeUndefined();
      expect(minimalVideo.duration).toBeUndefined();
      expect(minimalVideo.viewCount).toBeUndefined();
    });
  });
});