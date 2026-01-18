import { VideoItem, VideoCategory, SiteConfig } from '@/types';
import { sampleVideos } from '@/data/sampleVideos';
import { siteConfig } from '@/data/siteConfig';

/**
 * Content Management Utilities
 * Provides functions for managing portfolio content including videos, configuration, and metadata
 */

// Video Content Management
export class VideoContentManager {
  private videos: VideoItem[];

  constructor(initialVideos: VideoItem[] = sampleVideos) {
    this.videos = [...initialVideos];
  }

  // Get all videos
  getAllVideos(): VideoItem[] {
    return [...this.videos];
  }

  // Get video by ID
  getVideoById(id: string): VideoItem | undefined {
    return this.videos.find(video => video.id === id);
  }

  // Add new video
  addVideo(video: Omit<VideoItem, 'id' | 'createdDate'>): VideoItem {
    const newVideo: VideoItem = {
      ...video,
      id: this.generateVideoId(),
      createdDate: new Date(),
    };
    this.videos.push(newVideo);
    return newVideo;
  }

  // Update existing video
  updateVideo(id: string, updates: Partial<VideoItem>): VideoItem | null {
    const index = this.videos.findIndex(video => video.id === id);
    if (index === -1) return null;

    this.videos[index] = {
      ...this.videos[index],
      ...updates,
      id: this.videos[index].id, // Preserve ID
      createdDate: this.videos[index].createdDate, // Preserve creation date
    };

    return this.videos[index];
  }

  // Delete video
  deleteVideo(id: string): boolean {
    const index = this.videos.findIndex(video => video.id === id);
    if (index === -1) return false;

    this.videos.splice(index, 1);
    return true;
  }

  // Filter videos
  filterVideos(filters: {
    category?: VideoCategory;
    tags?: string[];
    featured?: boolean;
    searchQuery?: string;
  }): VideoItem[] {
    let filtered = [...this.videos];

    if (filters.category) {
      filtered = filtered.filter(video => video.category === filters.category);
    }

    if (filters.tags && filters.tags.length > 0) {
      filtered = filtered.filter(video =>
        filters.tags!.some(tag => video.tags.includes(tag))
      );
    }

    if (filters.featured !== undefined) {
      filtered = filtered.filter(video => video.featured === filters.featured);
    }

    if (filters.searchQuery) {
      const searchTerm = filters.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(video => {
        const titleMatch = video.title.toLowerCase().includes(searchTerm);
        const descriptionMatch = video.description.toLowerCase().includes(searchTerm);
        const tagsMatch = video.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || descriptionMatch || tagsMatch;
      });
    }

    return filtered;
  }

  // Sort videos
  sortVideos(
    videos: VideoItem[],
    sortBy: 'date' | 'views' | 'title' | 'duration',
    order: 'asc' | 'desc' = 'desc'
  ): VideoItem[] {
    const sorted = [...videos];

    sorted.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'date':
          comparison = a.createdDate.getTime() - b.createdDate.getTime();
          break;
        case 'views':
          comparison = (a.viewCount || 0) - (b.viewCount || 0);
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'duration':
          comparison = (a.duration || 0) - (b.duration || 0);
          break;
      }

      return order === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }

  // Generate unique video ID
  private generateVideoId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `video-${timestamp}-${random}`;
  }

  // Get video statistics
  getStatistics() {
    return {
      total: this.videos.length,
      featured: this.videos.filter(v => v.featured).length,
      byCategory: {
        [VideoCategory.COMMERCIAL]: this.videos.filter(v => v.category === VideoCategory.COMMERCIAL).length,
        [VideoCategory.PERSONAL]: this.videos.filter(v => v.category === VideoCategory.PERSONAL).length,
        [VideoCategory.DOCUMENTARY]: this.videos.filter(v => v.category === VideoCategory.DOCUMENTARY).length,
        [VideoCategory.MUSIC_VIDEO]: this.videos.filter(v => v.category === VideoCategory.MUSIC_VIDEO).length,
        [VideoCategory.OTHER]: this.videos.filter(v => v.category === VideoCategory.OTHER).length,
      },
      totalViews: this.videos.reduce((sum, video) => sum + (video.viewCount || 0), 0),
      averageDuration: Math.round(
        this.videos.reduce((sum, video) => sum + (video.duration || 0), 0) / this.videos.length
      ),
    };
  }
}

// Site Configuration Management
export class SiteConfigManager {
  private config: SiteConfig;

  constructor(initialConfig: SiteConfig = siteConfig) {
    this.config = { ...initialConfig };
  }

  // Get current configuration
  getConfig(): SiteConfig {
    return { ...this.config };
  }

  // Update configuration
  updateConfig(updates: Partial<SiteConfig>): SiteConfig {
    this.config = {
      ...this.config,
      ...updates,
      personal: {
        ...this.config.personal,
        ...(updates.personal || {}),
      },
      social: {
        ...this.config.social,
        ...(updates.social || {}),
      },
      youtube: {
        ...this.config.youtube,
        ...(updates.youtube || {}),
      },
      seo: {
        ...this.config.seo,
        ...(updates.seo || {}),
      },
    };

    return this.getConfig();
  }

  // Validate configuration
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate personal information
    if (!this.config.personal.name || this.config.personal.name.trim() === '') {
      errors.push('Personal name is required');
    }
    if (!this.config.personal.email || !this.config.personal.email.includes('@')) {
      errors.push('Valid email is required');
    }
    if (!this.config.personal.tagline || this.config.personal.tagline.trim() === '') {
      errors.push('Tagline is required');
    }

    // Validate social links
    const urlPattern = /^https?:\/\/.+/;
    if (this.config.social.youtube && !urlPattern.test(this.config.social.youtube)) {
      errors.push('YouTube URL must be a valid URL');
    }

    // Validate SEO
    if (!this.config.seo.title || this.config.seo.title.trim() === '') {
      errors.push('SEO title is required');
    }
    if (!this.config.seo.description || this.config.seo.description.trim() === '') {
      errors.push('SEO description is required');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  // Export configuration as JSON
  exportConfig(): string {
    return JSON.stringify(this.config, null, 2);
  }

  // Import configuration from JSON
  importConfig(jsonString: string): { success: boolean; error?: string } {
    try {
      const imported = JSON.parse(jsonString);
      this.config = imported;
      const validation = this.validate();
      
      if (!validation.valid) {
        return {
          success: false,
          error: `Invalid configuration: ${validation.errors.join(', ')}`,
        };
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: 'Invalid JSON format',
      };
    }
  }
}

// Content Integration Helper
export class ContentIntegration {
  private videoManager: VideoContentManager;
  private configManager: SiteConfigManager;

  constructor() {
    this.videoManager = new VideoContentManager();
    this.configManager = new SiteConfigManager();
  }

  // Get all content for display
  getPortfolioContent() {
    return {
      config: this.configManager.getConfig(),
      videos: this.videoManager.getAllVideos(),
      statistics: this.videoManager.getStatistics(),
    };
  }

  // Get featured content for homepage
  getFeaturedContent() {
    const allVideos = this.videoManager.getAllVideos();
    const featured = allVideos.filter(v => v.featured);
    
    return {
      config: this.configManager.getConfig(),
      featuredVideos: featured,
      recentVideos: this.videoManager.sortVideos(allVideos, 'date', 'desc').slice(0, 6),
    };
  }

  // Search across all content
  searchContent(query: string) {
    const videos = this.videoManager.filterVideos({ searchQuery: query });
    
    return {
      videos,
      count: videos.length,
      query,
    };
  }

  // Get content by category
  getContentByCategory(category: VideoCategory) {
    return {
      category,
      videos: this.videoManager.filterVideos({ category }),
      config: this.configManager.getConfig(),
    };
  }
}

// Export singleton instances
export const videoContentManager = new VideoContentManager();
export const siteConfigManager = new SiteConfigManager();
export const contentIntegration = new ContentIntegration();

// Export utility functions
export const getPortfolioContent = () => contentIntegration.getPortfolioContent();
export const getFeaturedContent = () => contentIntegration.getFeaturedContent();
export const searchContent = (query: string) => contentIntegration.searchContent(query);
export const getContentByCategory = (category: VideoCategory) => 
  contentIntegration.getContentByCategory(category);
