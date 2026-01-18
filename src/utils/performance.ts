/**
 * Performance Optimization Utilities
 * Provides utilities for image optimization, caching, and performance monitoring
 */

/**
 * Image optimization configuration
 */
export interface ImageOptimizationConfig {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  maxWidth?: number;
  maxHeight?: number;
}

/**
 * Cache configuration
 */
export interface CacheConfig {
  maxAge?: number; // in milliseconds
  maxSize?: number; // maximum number of items
}

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  timeToInteractive?: number;
}

/**
 * Generate optimized image URL with query parameters
 * In production, this would integrate with an image CDN or optimization service
 */
export function getOptimizedImageUrl(
  url: string,
  config: ImageOptimizationConfig = {}
): string {
  const { quality = 85, maxWidth, maxHeight } = config;
  
  // If it's a placeholder or external URL, return as-is
  if (url.startsWith('/api/placeholder') || url.startsWith('http')) {
    return url;
  }

  // Build query parameters for image optimization
  const params = new URLSearchParams();
  
  if (quality) params.append('q', quality.toString());
  if (maxWidth) params.append('w', maxWidth.toString());
  if (maxHeight) params.append('h', maxHeight.toString());

  const queryString = params.toString();
  return queryString ? `${url}?${queryString}` : url;
}

/**
 * Generate responsive image srcset
 */
export function generateSrcSet(url: string, widths: number[]): string {
  return widths
    .map(width => `${getOptimizedImageUrl(url, { maxWidth: width })} ${width}w`)
    .join(', ');
}

/**
 * Simple in-memory cache implementation
 */
class SimpleCache<T> {
  private cache: Map<string, { data: T; timestamp: number }> = new Map();
  private config: Required<CacheConfig>;

  constructor(config: CacheConfig = {}) {
    this.config = {
      maxAge: config.maxAge || 5 * 60 * 1000, // 5 minutes default
      maxSize: config.maxSize || 100
    };
  }

  set(key: string, data: T): void {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.config.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) return null;

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  clear(): void {
    this.cache.clear();
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    // Check if expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }
}

/**
 * Global cache instances
 */
export const imageCache = new SimpleCache<string>({ maxAge: 10 * 60 * 1000 }); // 10 minutes
export const dataCache = new SimpleCache<any>({ maxAge: 5 * 60 * 1000 }); // 5 minutes

/**
 * Preload critical images
 */
export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = url;
  });
}

/**
 * Preload multiple images
 */
export async function preloadImages(urls: string[]): Promise<void> {
  await Promise.all(urls.map(url => preloadImage(url)));
}

/**
 * Get performance metrics from browser Performance API
 */
export function getPerformanceMetrics(): PerformanceMetrics | null {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');

  const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
  const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

  return {
    loadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
    firstContentfulPaint: fcp?.startTime,
    largestContentfulPaint: lcp?.startTime,
    timeToInteractive: navigation?.domInteractive
  };
}

/**
 * Log performance metrics to console (development only)
 */
export function logPerformanceMetrics(): void {
  if (process.env.NODE_ENV !== 'development') return;

  const metrics = getPerformanceMetrics();
  if (metrics) {
    console.group('Performance Metrics');
    console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
    if (metrics.firstContentfulPaint) {
      console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
    }
    if (metrics.largestContentfulPaint) {
      console.log('Largest Contentful Paint:', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
    }
    if (metrics.timeToInteractive) {
      console.log('Time to Interactive:', `${metrics.timeToInteractive.toFixed(2)}ms`);
    }
    console.groupEnd();
  }
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if browser supports WebP format
 */
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    const img = new Image();
    img.onload = () => resolve(img.width === 1);
    img.onerror = () => resolve(false);
    img.src = webP;
  });
}

/**
 * Get optimal image format based on browser support
 */
export async function getOptimalImageFormat(): Promise<'webp' | 'jpeg'> {
  const webpSupported = await supportsWebP();
  return webpSupported ? 'webp' : 'jpeg';
}

/**
 * Measure component render time (for development)
 */
export function measureRenderTime(componentName: string, callback: () => void): void {
  if (process.env.NODE_ENV !== 'development') {
    callback();
    return;
  }

  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  
  console.log(`${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`);
}
