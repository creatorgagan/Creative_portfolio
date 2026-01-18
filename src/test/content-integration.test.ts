import { describe, it, expect, beforeEach } from 'vitest';
import {
  VideoContentManager,
  SiteConfigManager,
  ContentIntegration,
  videoContentManager,
  siteConfigManager,
  contentIntegration,
  getPortfolioContent,
  getFeaturedContent,
  searchContent,
  getContentByCategory,
} from '@/utils/contentManagement';
import { VideoCategory } from '@/types';
import { sampleVideos } from '@/data/sampleVideos';
import { siteConfig } from '@/data/siteConfig';

/**
 * Test Suite: Content Integration
 * Requirements: 3.5, 6.1, 6.5
 * 
 * Tests site configuration loading and content display/management
 */

describe('Content Integration - Site Configuration Loading', () => {
  describe('SiteConfigManager', () => {
    let manager: SiteConfigManager;

    beforeEach(() => {
      manager = new SiteConfigManager();
    });

    it('should load site configuration correctly', () => {
      const config = manager.getConfig();

      expect(config).toBeDefined();
      expect(config.personal).toBeDefined();
      expect(config.social).toBeDefined();
      expect(config.seo).toBeDefined();
    });

    it('should have valid personal information', () => {
      const config = manager.getConfig();

      expect(config.personal.name).toBeTruthy();
      expect(config.personal.tagline).toBeTruthy();
      expect(config.personal.bio).toBeTruthy();
      expect(config.personal.email).toContain('@');
      expect(config.personal.location).toBeTruthy();
    });

    it('should have valid social media links', () => {
      const config = manager.getConfig();

      expect(config.social.youtube).toBeTruthy();
      expect(config.social.youtube).toMatch(/^https?:\/\//);
      
      // Optional social links should be valid URLs if present
      if (config.social.instagram) {
        expect(config.social.instagram).toMatch(/^https?:\/\//);
      }
      if (config.social.linkedin) {
        expect(config.social.linkedin).toMatch(/^https?:\/\//);
      }
      if (config.social.twitter) {
        expect(config.social.twitter).toMatch(/^https?:\/\//);
      }
    });

    it('should have valid SEO configuration', () => {
      const config = manager.getConfig();

      expect(config.seo.title).toBeTruthy();
      expect(config.seo.description).toBeTruthy();
      expect(config.seo.keywords).toBeInstanceOf(Array);
      expect(config.seo.keywords.length).toBeGreaterThan(0);
      expect(config.seo.ogImage).toBeTruthy();
    });

    it('should have YouTube configuration', () => {
      const config = manager.getConfig();

      expect(config.youtube).toBeDefined();
      expect(config.youtube?.channelId).toBeDefined();
      expect(config.youtube?.playlistId).toBeDefined();
    });

    it('should update configuration correctly', () => {
      const updates = {
        personal: {
          name: 'Test Name',
          email: 'test@example.com',
        },
      };

      const updated = manager.updateConfig(updates);

      expect(updated.personal.name).toBe('Test Name');
      expect(updated.personal.email).toBe('test@example.com');
      // Other fields should remain unchanged
      expect(updated.personal.tagline).toBeTruthy();
    });

    it('should validate configuration correctly', () => {
      const validation = manager.validate();

      expect(validation).toHaveProperty('valid');
      expect(validation).toHaveProperty('errors');
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('should detect invalid configuration', () => {
      manager.updateConfig({
        personal: {
          name: '',
          email: 'invalid-email',
        },
      });

      const validation = manager.validate();

      expect(validation.valid).toBe(false);
      expect(validation.errors.length).toBeGreaterThan(0);
    });

    it('should export configuration as JSON', () => {
      const json = manager.exportConfig();

      expect(json).toBeTruthy();
      expect(() => JSON.parse(json)).not.toThrow();
      
      const parsed = JSON.parse(json);
      expect(parsed.personal).toBeDefined();
      expect(parsed.social).toBeDefined();
    });

    it('should import valid configuration from JSON', () => {
      const config = manager.getConfig();
      const json = JSON.stringify(config);

      const result = manager.importConfig(json);

      expect(result.success).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should reject invalid JSON during import', () => {
      const result = manager.importConfig('invalid json');

      expect(result.success).toBe(false);
      expect(result.error).toBeTruthy();
    });
  });

  describe('Global Site Config', () => {
    it('should export default site configuration', () => {
      expect(siteConfig).toBeDefined();
      expect(siteConfig.personal).toBeDefined();
      expect(siteConfig.social).toBeDefined();
      expect(siteConfig.seo).toBeDefined();
    });

    it('should have environment-aware YouTube configuration', () => {
      expect(siteConfig.youtube).toBeDefined();
      expect(siteConfig.youtube?.channelId).toBeTruthy();
      expect(siteConfig.youtube?.playlistId).toBeTruthy();
    });
  });
});

describe('Content Integration - Video Content Management', () => {
  describe('VideoContentManager', () => {
    let manager: VideoContentManager;

    beforeEach(() => {
      manager = new VideoContentManager();
    });

    it('should load all videos correctly', () => {
      const videos = manager.getAllVideos();

      expect(videos).toBeInstanceOf(Array);
      expect(videos.length).toBeGreaterThan(0);
    });

    it('should get video by ID', () => {
      const videos = manager.getAllVideos();
      const firstVideo = videos[0];

      const found = manager.getVideoById(firstVideo.id);

      expect(found).toBeDefined();
      expect(found?.id).toBe(firstVideo.id);
      expect(found?.title).toBe(firstVideo.title);
    });

    it('should return undefined for non-existent video ID', () => {
      const found = manager.getVideoById('non-existent-id');

      expect(found).toBeUndefined();
    });

    it('should add new video correctly', () => {
      const initialCount = manager.getAllVideos().length;

      const newVideo = manager.addVideo({
        title: 'Test Video',
        description: 'Test description',
        thumbnail: 'https://example.com/thumb.jpg',
        videoUrl: '/videos/test.mp4',
        category: VideoCategory.PERSONAL,
        tags: ['test'],
        featured: false,
      });

      expect(newVideo.id).toBeTruthy();
      expect(newVideo.createdDate).toBeInstanceOf(Date);
      expect(manager.getAllVideos().length).toBe(initialCount + 1);
    });

    it('should update existing video', () => {
      const videos = manager.getAllVideos();
      const videoToUpdate = videos[0];

      const updated = manager.updateVideo(videoToUpdate.id, {
        title: 'Updated Title',
        featured: true,
      });

      expect(updated).toBeDefined();
      expect(updated?.title).toBe('Updated Title');
      expect(updated?.featured).toBe(true);
      expect(updated?.id).toBe(videoToUpdate.id);
    });

    it('should return null when updating non-existent video', () => {
      const result = manager.updateVideo('non-existent-id', {
        title: 'Updated',
      });

      expect(result).toBeNull();
    });

    it('should delete video correctly', () => {
      const videos = manager.getAllVideos();
      const initialCount = videos.length;
      const videoToDelete = videos[0];

      const deleted = manager.deleteVideo(videoToDelete.id);

      expect(deleted).toBe(true);
      expect(manager.getAllVideos().length).toBe(initialCount - 1);
      expect(manager.getVideoById(videoToDelete.id)).toBeUndefined();
    });

    it('should return false when deleting non-existent video', () => {
      const result = manager.deleteVideo('non-existent-id');

      expect(result).toBe(false);
    });

    it('should filter videos by category', () => {
      const filtered = manager.filterVideos({
        category: VideoCategory.COMMERCIAL,
      });

      expect(filtered).toBeInstanceOf(Array);
      filtered.forEach(video => {
        expect(video.category).toBe(VideoCategory.COMMERCIAL);
      });
    });

    it('should filter videos by tags', () => {
      const filtered = manager.filterVideos({
        tags: ['commercial'],
      });

      expect(filtered).toBeInstanceOf(Array);
      filtered.forEach(video => {
        expect(video.tags).toContain('commercial');
      });
    });

    it('should filter videos by featured status', () => {
      const featured = manager.filterVideos({ featured: true });

      expect(featured).toBeInstanceOf(Array);
      featured.forEach(video => {
        expect(video.featured).toBe(true);
      });
    });

    it('should filter videos by search query', () => {
      const results = manager.filterVideos({
        searchQuery: 'brand',
      });

      expect(results).toBeInstanceOf(Array);
      results.forEach(video => {
        const matchesTitle = video.title.toLowerCase().includes('brand');
        const matchesDescription = video.description.toLowerCase().includes('brand');
        const matchesTags = video.tags.some(tag => tag.toLowerCase().includes('brand'));
        
        expect(matchesTitle || matchesDescription || matchesTags).toBe(true);
      });
    });

    it('should filter videos by multiple criteria', () => {
      const filtered = manager.filterVideos({
        category: VideoCategory.COMMERCIAL,
        featured: true,
      });

      filtered.forEach(video => {
        expect(video.category).toBe(VideoCategory.COMMERCIAL);
        expect(video.featured).toBe(true);
      });
    });

    it('should sort videos by date descending', () => {
      const videos = manager.getAllVideos();
      const sorted = manager.sortVideos(videos, 'date', 'desc');

      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].createdDate.getTime()).toBeGreaterThanOrEqual(
          sorted[i + 1].createdDate.getTime()
        );
      }
    });

    it('should sort videos by views descending', () => {
      const videos = manager.getAllVideos();
      const sorted = manager.sortVideos(videos, 'views', 'desc');

      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].viewCount || 0).toBeGreaterThanOrEqual(
          sorted[i + 1].viewCount || 0
        );
      }
    });

    it('should sort videos by title ascending', () => {
      const videos = manager.getAllVideos();
      const sorted = manager.sortVideos(videos, 'title', 'asc');

      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].title.localeCompare(sorted[i + 1].title)).toBeLessThanOrEqual(0);
      }
    });

    it('should get video statistics', () => {
      const stats = manager.getStatistics();

      expect(stats.total).toBeGreaterThan(0);
      expect(stats.featured).toBeGreaterThanOrEqual(0);
      expect(stats.byCategory).toBeDefined();
      expect(stats.totalViews).toBeGreaterThanOrEqual(0);
      expect(stats.averageDuration).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Sample Videos Data', () => {
    it('should have valid sample videos', () => {
      expect(sampleVideos).toBeInstanceOf(Array);
      expect(sampleVideos.length).toBeGreaterThan(0);
    });

    it('should have videos with required fields', () => {
      sampleVideos.forEach(video => {
        expect(video.id).toBeTruthy();
        expect(video.title).toBeTruthy();
        expect(video.description).toBeTruthy();
        expect(video.thumbnail).toBeTruthy();
        expect(video.videoUrl).toBeTruthy();
        expect(video.category).toBeTruthy();
        expect(video.tags).toBeInstanceOf(Array);
        expect(video.createdDate).toBeInstanceOf(Date);
        expect(typeof video.featured).toBe('boolean');
      });
    });

    it('should have YouTube videos with youtubeId', () => {
      const youtubeVideos = sampleVideos.filter(v => v.youtubeId);

      youtubeVideos.forEach(video => {
        expect(video.youtubeId).toBeTruthy();
        expect(video.videoUrl).toContain('youtube.com');
      });
    });
  });
});

describe('Content Integration - Full Integration', () => {
  describe('ContentIntegration', () => {
    let integration: ContentIntegration;

    beforeEach(() => {
      integration = new ContentIntegration();
    });

    it('should get complete portfolio content', () => {
      const content = integration.getPortfolioContent();

      expect(content.config).toBeDefined();
      expect(content.videos).toBeInstanceOf(Array);
      expect(content.statistics).toBeDefined();
    });

    it('should get featured content for homepage', () => {
      const content = integration.getFeaturedContent();

      expect(content.config).toBeDefined();
      expect(content.featuredVideos).toBeInstanceOf(Array);
      expect(content.recentVideos).toBeInstanceOf(Array);
      expect(content.recentVideos.length).toBeLessThanOrEqual(6);
    });

    it('should search across all content', () => {
      const results = integration.searchContent('commercial');

      expect(results.videos).toBeInstanceOf(Array);
      expect(results.count).toBeGreaterThanOrEqual(0);
      expect(results.query).toBe('commercial');
    });

    it('should get content by category', () => {
      const content = integration.getContentByCategory(VideoCategory.COMMERCIAL);

      expect(content.category).toBe(VideoCategory.COMMERCIAL);
      expect(content.videos).toBeInstanceOf(Array);
      expect(content.config).toBeDefined();

      content.videos.forEach(video => {
        expect(video.category).toBe(VideoCategory.COMMERCIAL);
      });
    });
  });

  describe('Global Content Integration Functions', () => {
    it('should export getPortfolioContent function', () => {
      const content = getPortfolioContent();

      expect(content).toBeDefined();
      expect(content.config).toBeDefined();
      expect(content.videos).toBeInstanceOf(Array);
    });

    it('should export getFeaturedContent function', () => {
      const content = getFeaturedContent();

      expect(content).toBeDefined();
      expect(content.featuredVideos).toBeInstanceOf(Array);
      expect(content.recentVideos).toBeInstanceOf(Array);
    });

    it('should export searchContent function', () => {
      const results = searchContent('test');

      expect(results).toBeDefined();
      expect(results.videos).toBeInstanceOf(Array);
      expect(results.query).toBe('test');
    });

    it('should export getContentByCategory function', () => {
      const content = getContentByCategory(VideoCategory.PERSONAL);

      expect(content).toBeDefined();
      expect(content.category).toBe(VideoCategory.PERSONAL);
      expect(content.videos).toBeInstanceOf(Array);
    });
  });

  describe('Singleton Instances', () => {
    it('should export videoContentManager singleton', () => {
      expect(videoContentManager).toBeDefined();
      expect(videoContentManager.getAllVideos).toBeDefined();
    });

    it('should export siteConfigManager singleton', () => {
      expect(siteConfigManager).toBeDefined();
      expect(siteConfigManager.getConfig).toBeDefined();
    });

    it('should export contentIntegration singleton', () => {
      expect(contentIntegration).toBeDefined();
      expect(contentIntegration.getPortfolioContent).toBeDefined();
    });
  });
});

describe('Content Integration - Data Consistency', () => {
  it('should have consistent video categories', () => {
    sampleVideos.forEach(video => {
      expect(Object.values(VideoCategory)).toContain(video.category);
    });
  });

  it('should have valid thumbnail URLs', () => {
    sampleVideos.forEach(video => {
      expect(video.thumbnail).toMatch(/^https?:\/\//);
    });
  });

  it('should have valid video URLs', () => {
    sampleVideos.forEach(video => {
      const isLocalPath = video.videoUrl.startsWith('/');
      const isYouTubeUrl = video.videoUrl.includes('youtube.com');
      
      expect(isLocalPath || isYouTubeUrl).toBe(true);
    });
  });

  it('should have unique video IDs', () => {
    const ids = sampleVideos.map(v => v.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have valid date objects', () => {
    sampleVideos.forEach(video => {
      expect(video.createdDate).toBeInstanceOf(Date);
      expect(video.createdDate.getTime()).not.toBeNaN();
    });
  });
});
