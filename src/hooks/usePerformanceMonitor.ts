import { useEffect, useState } from 'react';
import { getPerformanceMetrics, PerformanceMetrics } from '../utils/performance';

/**
 * Hook for monitoring performance metrics
 */
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    // Wait for page load to complete
    const handleLoad = () => {
      setTimeout(() => {
        const performanceMetrics = getPerformanceMetrics();
        setMetrics(performanceMetrics);
      }, 0);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return metrics;
}

/**
 * Hook for tracking component render performance
 */
export function useRenderPerformance(componentName: string) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      console.log(`${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`);
    };
  }, [componentName]);
}
