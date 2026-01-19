import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  intensity?: number; // 0-1, how intense the parallax effect is
  enableParallax?: boolean;
  enableScaleTransform?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { intensity = 0.5, enableParallax = true, enableScaleTransform = true } = options;
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight)));

      if (enableParallax) {
        const parallaxOffset = (1 - scrollProgress) * intensity * 30;
        element.style.transform = `translateY(${parallaxOffset}px)`;
      }

      if (enableScaleTransform) {
        element.style.opacity = String(0.7 + scrollProgress * 0.3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity, enableParallax, enableScaleTransform]);

  return elementRef;
};
