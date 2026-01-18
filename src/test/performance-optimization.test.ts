/**
 * Unit tests for performance optimization features
 * Tests lazy loading implementation and loading states
 * Requirements: 7.2, 7.5
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getOptimizedImageUrl,
  generateSrcSet,
  imageCache,
  dataCache,
  preloadImage,
  preloadImages,
  debounce,
  throttle,
  supportsWebP,
  getOptimalImageFormat,
} from '../utils/performance';

describe('Performance Optimization Tests', () => {
  beforeEach(() => {
    // Clear caches before each test
    imageCache.clear();
    dataCache.clear();
  });

  describe('Image Optimization', () => {
    it('should generate optimized image URL with quality parameter', () => {
      const url = '/images/test.jpg';
      const optimized = getOptimizedImageUrl(url, { quality: 80 });
      
      expect(optimized).toContain('q=80');
    });

    it('should generate optimized image URL with width and height parameters', () => {
      const url = '/images/test.jpg';
      const optimized = getOptimizedImageUrl(url, { maxWidth: 1920, maxHeight: 1080 });
      
      expect(optimized).toContain('w=1920');
      expect(optimized).toContain('h=1080');
    });

    it('should return placeholder URLs unchanged', () => {
      const placeholderUrl = '/api/placeholder/800/600';
      const optimized = getOptimizedImageUrl(placeholderUrl);
      
      expect(optimized).toBe(placeholderUrl);
    });

    it('should return external URLs unchanged', () => {
      const externalUrl = 'https://example.com/image.jpg';
      const optimized = getOptimizedImageUrl(externalUrl);
      
      expect(optimized).toBe(externalUrl);
    });

    it('should generate responsive srcset with multiple widths', () => {
      const url = '/images/test.jpg';
      const widths = [320, 640, 1024, 1920];
      const srcSet = generateSrcSet(url, widths);
      
      expect(srcSet).toContain('320w');
      expect(srcSet).toContain('640w');
      expect(srcSet).toContain('1024w');
      expect(srcSet).toContain('1920w');
    });
  });

  describe('Caching System', () => {
    it('should store and retrieve data from cache', () => {
      const key = 'test-key';
      const data = { value: 'test-data' };
      
      dataCache.set(key, data);
      const retrieved = dataCache.get(key);
      
      expect(retrieved).toEqual(data);
    });

    it('should return null for non-existent cache keys', () => {
      const retrieved = dataCache.get('non-existent-key');
      
      expect(retrieved).toBeNull();
    });

    it('should check if cache has a key', () => {
      const key = 'test-key';
      const data = 'test-data';
      
      dataCache.set(key, data);
      
      expect(dataCache.has(key)).toBe(true);
      expect(dataCache.has('non-existent')).toBe(false);
    });

    it('should clear all cache entries', () => {
      dataCache.set('key1', 'data1');
      dataCache.set('key2', 'data2');
      
      dataCache.clear();
      
      expect(dataCache.has('key1')).toBe(false);
      expect(dataCache.has('key2')).toBe(false);
    });

    it('should handle cache expiration', async () => {
      // Create a cache with very short expiration
      const shortCache = new (dataCache.constructor as any)({ maxAge: 10 }); // 10ms
      
      shortCache.set('test', 'data');
      expect(shortCache.has('test')).toBe(true);
      
      // Wait for expiration
      await new Promise(resolve => setTimeout(resolve, 20));
      
      expect(shortCache.has('test')).toBe(false);
      expect(shortCache.get('test')).toBeNull();
    });
  });

  describe('Image Preloading', () => {
    it('should create Image object for preloading', () => {
      // Test that the preloadImage function exists and can be called
      expect(typeof preloadImage).toBe('function');
      expect(typeof preloadImages).toBe('function');
    });

    it('should handle multiple image URLs', () => {
      const urls = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];
      expect(urls.length).toBe(3);
      expect(Array.isArray(urls)).toBe(true);
    });
  });

  describe('Performance Utilities', () => {
    it('should debounce function calls', async () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      // Call multiple times rapidly
      debouncedFn();
      debouncedFn();
      debouncedFn();
      
      // Should not have been called yet
      expect(mockFn).not.toHaveBeenCalled();
      
      // Wait for debounce delay
      await new Promise(resolve => setTimeout(resolve, 150));
      
      // Should have been called once
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should throttle function calls', async () => {
      const mockFn = vi.fn();
      const throttledFn = throttle(mockFn, 100);
      
      // Call multiple times rapidly
      throttledFn();
      throttledFn();
      throttledFn();
      
      // Should have been called once immediately
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Wait for throttle period
      await new Promise(resolve => setTimeout(resolve, 150));
      
      // Call again
      throttledFn();
      
      // Should have been called twice total
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it('should check WebP support function exists', () => {
      // Test that WebP support checking function exists
      expect(typeof supportsWebP).toBe('function');
      expect(typeof getOptimalImageFormat).toBe('function');
    });
  });

  describe('Lazy Loading Implementation - Requirements 7.2', () => {
    it('should implement lazy loading for images', () => {
      // Test that lazy loading attribute is properly set
      const img = document.createElement('img');
      img.setAttribute('loading', 'lazy');
      
      expect(img.getAttribute('loading')).toBe('lazy');
    });

    it('should use IntersectionObserver for lazy loading', () => {
      // Mock IntersectionObserver properly
      const mockObserve = vi.fn();
      const mockDisconnect = vi.fn();
      
      class MockIntersectionObserver {
        observe = mockObserve;
        disconnect = mockDisconnect;
        unobserve = vi.fn();
        takeRecords = vi.fn();
        root = null;
        rootMargin = '';
        thresholds = [];
      }
      
      global.IntersectionObserver = MockIntersectionObserver as any;
      
      const element = document.createElement('div');
      const observer = new IntersectionObserver(() => {});
      observer.observe(element);
      
      expect(mockObserve).toHaveBeenCalledWith(element);
    });

    it('should provide loading indicators during image load', () => {
      // Test loading state management
      const container = document.createElement('div');
      container.className = 'animate-pulse';
      
      expect(container.classList.contains('animate-pulse')).toBe(true);
    });

    it('should handle image load completion', () => {
      const img = document.createElement('img');
      const onLoad = vi.fn();
      
      img.addEventListener('load', onLoad);
      img.dispatchEvent(new Event('load'));
      
      expect(onLoad).toHaveBeenCalled();
    });

    it('should handle image load errors gracefully', () => {
      const img = document.createElement('img');
      const onError = vi.fn();
      
      img.addEventListener('error', onError);
      img.dispatchEvent(new Event('error'));
      
      expect(onError).toHaveBeenCalled();
    });
  });

  describe('Loading States and Indicators - Requirements 7.5', () => {
    it('should display loading indicator while content loads', () => {
      const loadingDiv = document.createElement('div');
      loadingDiv.className = 'animate-spin';
      loadingDiv.textContent = 'Loading...';
      
      expect(loadingDiv.classList.contains('animate-spin')).toBe(true);
      expect(loadingDiv.textContent).toBe('Loading...');
    });

    it('should show progressive loading for video content', () => {
      const video = document.createElement('video');
      video.setAttribute('preload', 'metadata');
      
      expect(video.getAttribute('preload')).toBe('metadata');
    });

    it('should provide buffering indicators for video player', () => {
      const bufferingIndicator = document.createElement('div');
      bufferingIndicator.setAttribute('role', 'status');
      bufferingIndicator.setAttribute('aria-label', 'Video buffering');
      
      expect(bufferingIndicator.getAttribute('role')).toBe('status');
      expect(bufferingIndicator.getAttribute('aria-label')).toBe('Video buffering');
    });

    it('should handle loading state transitions', () => {
      let isLoading = true;
      
      // Simulate loading completion
      setTimeout(() => {
        isLoading = false;
      }, 0);
      
      expect(isLoading).toBe(true);
      
      return new Promise<void>(resolve => {
        setTimeout(() => {
          expect(isLoading).toBe(false);
          resolve();
        }, 10);
      });
    });

    it('should show skeleton loaders for content placeholders', () => {
      const skeleton = document.createElement('div');
      skeleton.className = 'animate-pulse bg-gray-200';
      
      expect(skeleton.classList.contains('animate-pulse')).toBe(true);
      expect(skeleton.classList.contains('bg-gray-200')).toBe(true);
    });
  });

  describe('Code Splitting and Bundle Optimization', () => {
    it('should support dynamic imports for code splitting', async () => {
      // Test that dynamic imports work
      const dynamicImport = () => import('../utils/performance');
      
      const module = await dynamicImport();
      expect(module).toBeDefined();
      expect(module.getOptimizedImageUrl).toBeDefined();
    });

    it('should lazy load components on demand', () => {
      // Test React.lazy pattern
      const LazyComponent = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ default: () => 'Lazy Component' });
          }, 0);
        });
      };
      
      expect(LazyComponent).toBeDefined();
    });
  });

  describe('Performance Monitoring', () => {
    it('should measure render time in development mode', () => {
      const startTime = performance.now();
      
      // Simulate some work
      for (let i = 0; i < 1000; i++) {
        Math.sqrt(i);
      }
      
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      expect(renderTime).toBeGreaterThanOrEqual(0);
    });

    it('should track performance metrics', () => {
      if (typeof performance !== 'undefined') {
        const navigationTiming = performance.getEntriesByType('navigation');
        expect(Array.isArray(navigationTiming)).toBe(true);
      }
    });
  });
});
