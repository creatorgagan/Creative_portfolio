import { useState, useEffect } from 'react';
import { 
  getOptimizedImageUrl, 
  generateSrcSet, 
  imageCache,
  ImageOptimizationConfig 
} from '../utils/performance';

/**
 * Hook for optimized image loading with caching
 */
export function useImageOptimization(
  url: string,
  config: ImageOptimizationConfig = {}
) {
  const [optimizedUrl, setOptimizedUrl] = useState<string>('');
  const [srcSet, setSrcSet] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Check cache first
    const cacheKey = `${url}-${JSON.stringify(config)}`;
    const cached = imageCache.get(cacheKey);

    if (cached) {
      setOptimizedUrl(cached);
      setIsLoading(false);
      return;
    }

    // Generate optimized URL
    const optimized = getOptimizedImageUrl(url, config);
    
    // Generate srcSet for responsive images
    const responsiveSrcSet = generateSrcSet(url, [320, 640, 768, 1024, 1280, 1920]);

    // Preload the image
    const img = new Image();
    img.onload = () => {
      imageCache.set(cacheKey, optimized);
      setOptimizedUrl(optimized);
      setSrcSet(responsiveSrcSet);
      setIsLoading(false);
    };
    img.onerror = () => {
      setError(new Error(`Failed to load image: ${url}`));
      setIsLoading(false);
    };
    img.src = optimized;

  }, [url, config]);

  return { optimizedUrl, srcSet, isLoading, error };
}

/**
 * Hook for lazy loading images with Intersection Observer
 */
export function useLazyImage(ref: React.RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before element is visible
        threshold: 0.01
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isVisible;
}
