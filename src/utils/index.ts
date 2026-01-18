// Utility functions for the video portfolio website
import { VideoItem, YouTubeVideo, SiteConfig, VideoCategory } from '../types';

// Export SEO utilities
export * from './seo';

// Export performance utilities
export * from './performance';

/**
 * Format duration from seconds to MM:SS format
 */
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

/**
 * Format view count to human readable format (1.2K, 1.5M, etc.)
 */
export const formatViewCount = (count: number): string => {
  if (count < 1000) return count.toString();
  if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
  if (count < 1000000000) return `${(count / 1000000).toFixed(1)}M`;
  return `${(count / 1000000000).toFixed(1)}B`;
};

/**
 * Debounce function for search inputs
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Check if a string is a valid email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Get YouTube video ID from URL
 */
export const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

/**
 * Generate YouTube thumbnail URL
 */
export const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'high'): string => {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
};

/**
 * Format file size to human readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Generate secure random password
 */
export const generatePassword = (length: number = 12): string => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

/**
 * Validate admin credentials format
 */
export const validateCredentials = (username: string, password: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!username || username.length < 3) {
    errors.push('Username must be at least 3 characters long');
  }
  
  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (password && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one lowercase letter, one uppercase letter, and one number');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Format date for admin interface
 */
export const formatAdminDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

/**
 * Generate unique ID for admin entities
 */
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Sanitize HTML content for admin display
 */
export const sanitizeHtml = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

// Data validation utilities for video content

/**
 * Validate VideoItem data structure
 */
export const validateVideoItem = (video: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!video || typeof video !== 'object') {
    errors.push('Video must be an object');
    return { valid: false, errors };
  }
  
  // Required fields validation
  if (!video.id || typeof video.id !== 'string' || video.id.trim().length === 0) {
    errors.push('Video ID is required and must be a non-empty string');
  }
  
  if (!video.title || typeof video.title !== 'string' || video.title.trim().length === 0) {
    errors.push('Video title is required and must be a non-empty string');
  }
  
  if (!video.description || typeof video.description !== 'string') {
    errors.push('Video description is required and must be a string');
  }
  
  if (!video.thumbnail || typeof video.thumbnail !== 'string' || video.thumbnail.trim().length === 0) {
    errors.push('Video thumbnail is required and must be a non-empty string');
  }
  
  if (!video.videoUrl || typeof video.videoUrl !== 'string' || video.videoUrl.trim().length === 0) {
    errors.push('Video URL is required and must be a non-empty string');
  }
  
  if (!video.category || typeof video.category !== 'string') {
    errors.push('Video category is required and must be a string');
  }
  
  if (!Array.isArray(video.tags)) {
    errors.push('Video tags must be an array');
  } else {
    video.tags.forEach((tag: any, index: number) => {
      if (typeof tag !== 'string') {
        errors.push(`Tag at index ${index} must be a string`);
      }
    });
  }
  
  if (!(video.createdDate instanceof Date) && typeof video.createdDate !== 'string') {
    errors.push('Video createdDate must be a Date object or ISO string');
  }
  
  if (typeof video.featured !== 'boolean') {
    errors.push('Video featured must be a boolean');
  }
  
  // Optional fields validation
  if (video.youtubeId !== undefined && (typeof video.youtubeId !== 'string' || video.youtubeId.length !== 11)) {
    errors.push('YouTube ID must be an 11-character string if provided');
  }
  
  if (video.duration !== undefined && (typeof video.duration !== 'number' || video.duration < 0)) {
    errors.push('Video duration must be a positive number if provided');
  }
  
  if (video.viewCount !== undefined && (typeof video.viewCount !== 'number' || video.viewCount < 0)) {
    errors.push('Video view count must be a positive number if provided');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validate YouTubeVideo data structure
 */
export const validateYouTubeVideo = (video: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!video || typeof video !== 'object') {
    errors.push('YouTube video must be an object');
    return { valid: false, errors };
  }
  
  if (!video.videoId || typeof video.videoId !== 'string' || video.videoId.length !== 11) {
    errors.push('YouTube video ID is required and must be an 11-character string');
  }
  
  if (!video.title || typeof video.title !== 'string' || video.title.trim().length === 0) {
    errors.push('YouTube video title is required and must be a non-empty string');
  }
  
  if (!video.description || typeof video.description !== 'string') {
    errors.push('YouTube video description is required and must be a string');
  }
  
  if (!video.thumbnail || typeof video.thumbnail !== 'string' || video.thumbnail.trim().length === 0) {
    errors.push('YouTube video thumbnail is required and must be a non-empty string');
  }
  
  if (!(video.publishedAt instanceof Date) && typeof video.publishedAt !== 'string') {
    errors.push('YouTube video publishedAt must be a Date object or ISO string');
  }
  
  if (!video.duration || typeof video.duration !== 'string') {
    errors.push('YouTube video duration is required and must be a string');
  }
  
  if (typeof video.viewCount !== 'number' || video.viewCount < 0) {
    errors.push('YouTube video view count must be a positive number');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validate SiteConfig data structure
 */
export const validateSiteConfig = (config: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!config || typeof config !== 'object') {
    errors.push('Site config must be an object');
    return { valid: false, errors };
  }
  
  // Validate personal section
  if (!config.personal || typeof config.personal !== 'object') {
    errors.push('Site config personal section is required and must be an object');
  } else {
    const personal = config.personal;
    
    if (!personal.name || typeof personal.name !== 'string' || personal.name.trim().length === 0) {
      errors.push('Personal name is required and must be a non-empty string');
    }
    
    if (!personal.tagline || typeof personal.tagline !== 'string' || personal.tagline.trim().length === 0) {
      errors.push('Personal tagline is required and must be a non-empty string');
    }
    
    if (!personal.bio || typeof personal.bio !== 'string' || personal.bio.trim().length === 0) {
      errors.push('Personal bio is required and must be a non-empty string');
    }
    
    if (!personal.email || typeof personal.email !== 'string' || !isValidEmail(personal.email)) {
      errors.push('Personal email is required and must be a valid email address');
    }
    
    if (!personal.location || typeof personal.location !== 'string' || personal.location.trim().length === 0) {
      errors.push('Personal location is required and must be a non-empty string');
    }
    
    if (personal.phone !== undefined && (typeof personal.phone !== 'string' || personal.phone.trim().length === 0)) {
      errors.push('Personal phone must be a non-empty string if provided');
    }
  }
  
  // Validate social section
  if (!config.social || typeof config.social !== 'object') {
    errors.push('Site config social section is required and must be an object');
  } else {
    const social = config.social;
    
    if (!social.youtube || typeof social.youtube !== 'string' || social.youtube.trim().length === 0) {
      errors.push('Social YouTube URL is required and must be a non-empty string');
    }
    
    // Optional social links validation
    ['instagram', 'linkedin', 'twitter'].forEach(platform => {
      if (social[platform] !== undefined && (typeof social[platform] !== 'string' || social[platform].trim().length === 0)) {
        errors.push(`Social ${platform} must be a non-empty string if provided`);
      }
    });
  }
  
  // Validate SEO section
  if (!config.seo || typeof config.seo !== 'object') {
    errors.push('Site config SEO section is required and must be an object');
  } else {
    const seo = config.seo;
    
    if (!seo.title || typeof seo.title !== 'string' || seo.title.trim().length === 0) {
      errors.push('SEO title is required and must be a non-empty string');
    }
    
    if (!seo.description || typeof seo.description !== 'string' || seo.description.trim().length === 0) {
      errors.push('SEO description is required and must be a non-empty string');
    }
    
    if (!Array.isArray(seo.keywords)) {
      errors.push('SEO keywords must be an array');
    } else {
      seo.keywords.forEach((keyword: any, index: number) => {
        if (typeof keyword !== 'string' || keyword.trim().length === 0) {
          errors.push(`SEO keyword at index ${index} must be a non-empty string`);
        }
      });
    }
    
    if (!seo.ogImage || typeof seo.ogImage !== 'string' || seo.ogImage.trim().length === 0) {
      errors.push('SEO ogImage is required and must be a non-empty string');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validate video category enum value
 */
export const validateVideoCategory = (category: string): boolean => {
  const validCategories = ['commercial', 'personal', 'documentary', 'music-video', 'other'];
  return validCategories.includes(category);
};

/**
 * Validate video metadata for display requirements
 */
export const validateVideoMetadata = (video: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Check if video has required metadata for display (Requirements 2.3)
  if (!video.title || video.title.trim().length === 0) {
    errors.push('Video must have a title for display');
  }
  
  if (!video.description || video.description.trim().length === 0) {
    errors.push('Video must have a description for display');
  }
  
  if (!Array.isArray(video.tags) || video.tags.length === 0) {
    errors.push('Video must have relevant tags for display');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validate YouTube video metadata for display requirements
 */
export const validateYouTubeMetadata = (video: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Check if YouTube video has required metadata for display (Requirements 3.3)
  if (!video.title || video.title.trim().length === 0) {
    errors.push('YouTube video must have a title for display');
  }
  
  if (!video.description || video.description.trim().length === 0) {
    errors.push('YouTube video must have a description for display');
  }
  
  if (typeof video.viewCount !== 'number' || video.viewCount < 0) {
    errors.push('YouTube video must have a valid view count for display');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};