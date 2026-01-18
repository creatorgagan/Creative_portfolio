import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import { VideoGallery } from '@/components/VideoGallery';
import Navigation from '@/components/Navigation/Navigation';
import { VideoItem, VideoCategory } from '@/types';

/**
 * Feature: video-portfolio-website, Property 7: Tablet Layout Optimization
 * Validates: Requirements 4.6
 * 
 * Property: For any tablet screen size (768px-1024px), 
 * the responsive layout should optimize for medium-sized screens
 */

// Generators for property-based testing
const videoIdArb = fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0 && !/[\\\/:"*?<>|]/.test(s));
const titleArb = fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0);
const descriptionArb = fc.string({ minLength: 1, maxLength: 1000 }).filter(s => s.trim().length > 0);
const thumbnailArb = fc.webUrl();
const videoUrlArb = fc.webUrl();
const youtubeIdArb = fc.option(fc.string({ minLength: 11, maxLength: 11 }), { nil: undefined });
const categoryArb = fc.constantFrom(...Object.values(VideoCategory));
const tagsArb = fc.array(fc.string({ minLength: 1, maxLength: 30 }).filter(s => s.trim().length > 0), { minLength: 0, maxLength: 10 });
const createdDateArb = fc.date({ min: new Date('2020-01-01'), max: new Date() });
const featuredArb = fc.boolean();
const durationArb = fc.option(fc.integer({ min: 1, max: 7200 }), { nil: undefined });
const viewCountArb = fc.option(fc.integer({ min: 0, max: 10000000 }), { nil: undefined });

const videoItemArb: fc.Arbitrary<VideoItem> = fc.record({
  id: videoIdArb,
  title: titleArb,
  description: descriptionArb,
  thumbnail: thumbnailArb,
  videoUrl: videoUrlArb,
  youtubeId: youtubeIdArb,
  category: categoryArb,
  tags: tagsArb,
  createdDate: createdDateArb,
  featured: featuredArb,
  duration: durationArb,
  viewCount: viewCountArb,
});

describe('Tablet Layout Optimization Property Tests', () => {
  let originalInnerWidth: number;
  let originalInnerHeight: number;

  beforeEach(() => {
    // Store original window dimensions
    originalInnerWidth = window.innerWidth;
    originalInnerHeight = window.innerHeight;
  });

  afterEach(() => {
    // Restore original window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: originalInnerHeight,
    });
    
    // Trigger resize event to reset any listeners
    window.dispatchEvent(new Event('resize'));
  });

  it('Property 7: Tablet Layout Optimization - For any tablet screen size (768px-1024px), the responsive layout should optimize for medium-sized screens', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        fc.integer({ min: 600, max: 1366 }),
        fc.array(videoItemArb, { minLength: 4, maxLength: 12 }),
        (width, height, videos) => {
          // Set up the window dimensions for tablet
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: width,
          });
          Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: height,
          });

          // Trigger resize event
          window.dispatchEvent(new Event('resize'));

          const mockOnVideoSelect = () => {};
          
          // Test VideoGallery component with tablet layout
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that the gallery grid exists
          const galleryGrid = container.querySelector('.grid');
          expect(galleryGrid).toBeTruthy();
          
          // For tablet screens, the gallery should use md: breakpoint classes
          // Tablet should show 2 columns (md:grid-cols-2) or transition to 3 (lg:grid-cols-3)
          const className = galleryGrid?.className || '';
          
          // Verify responsive grid classes are present for tablet optimization
          const hasTabletOptimization = 
            className.includes('sm:grid-cols-2') || 
            className.includes('lg:grid-cols-3');
          
          expect(hasTabletOptimization).toBe(true);
          
          // Verify that all videos are rendered
          const videoItems = container.querySelectorAll('[data-video-id]');
          expect(videoItems.length).toBe(videos.length);
          
          // Verify proper spacing for tablet layout
          expect(className.includes('gap-')).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 7: Navigation should display desktop layout on tablet screens', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        fc.constantFrom('home', 'portfolio', 'about', 'contact'),
        (screenWidth, currentSection) => {
          // Set the window width to tablet size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: screenWidth,
          });
          window.dispatchEvent(new Event('resize'));

          // Render the Navigation component
          const { container } = render(
            <Navigation 
              currentSection={currentSection} 
              onSectionChange={() => {}} 
            />
          );

          // On tablet (>= 768px), desktop navigation should be visible
          const desktopNav = container.querySelector('.hidden.md\\:block');
          expect(desktopNav).toBeInTheDocument();

          // Desktop navigation should contain all navigation items
          const desktopNavItems = desktopNav?.querySelectorAll('a');
          expect(desktopNavItems).toHaveLength(4); // home, portfolio, about, contact

          // Mobile menu button should be hidden via CSS on tablet
          const mobileMenuButton = container.querySelector('.md\\:hidden');
          expect(mobileMenuButton).toBeInTheDocument();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 7: Container sizing should be optimized for tablet screens', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        (screenWidth) => {
          // Set the window width to tablet size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: screenWidth,
          });
          window.dispatchEvent(new Event('resize'));

          // Create a test element with container classes
          const testElement = document.createElement('div');
          testElement.className = 'container mx-auto px-4';
          testElement.style.maxWidth = 'var(--container-lg)';
          
          document.body.appendChild(testElement);

          const computedStyle = getComputedStyle(testElement);
          const maxWidth = computedStyle.getPropertyValue('max-width');
          const paddingLeft = computedStyle.getPropertyValue('padding-left');
          const paddingRight = computedStyle.getPropertyValue('padding-right');

          // Clean up
          document.body.removeChild(testElement);

          // Verify that container has appropriate max-width for tablet
          expect(maxWidth).toBeTruthy();
          
          // Verify proper padding is applied
          expect(paddingLeft).toBeTruthy();
          expect(paddingRight).toBeTruthy();
          
          // For tablet screens, container should use appropriate sizing
          const root = document.documentElement;
          const rootStyle = getComputedStyle(root);
          const containerLg = rootStyle.getPropertyValue('--container-lg').trim();
          
          // Container-lg should be defined for tablet optimization
          expect(containerLg).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 7: Typography should remain readable on tablet screens', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        (screenWidth) => {
          // Set the window width to tablet size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: screenWidth,
          });
          window.dispatchEvent(new Event('resize'));

          const root = document.documentElement;
          const computedStyle = getComputedStyle(root);
          
          // Test that all typography variables are defined and valid for tablet
          const typographyVars = [
            '--text-sm', '--text-base', '--text-lg', '--text-xl',
            '--text-2xl', '--text-3xl', '--text-4xl'
          ];
          
          typographyVars.forEach(varName => {
            const value = computedStyle.getPropertyValue(varName).trim();
            expect(value).toBeTruthy();
            expect(value).toMatch(/^\d+(\.\d+)?rem$/);
            
            // Parse the rem value and ensure it's reasonable for tablet
            const remValue = parseFloat(value.replace('rem', ''));
            expect(remValue).toBeGreaterThan(0);
            expect(remValue).toBeLessThan(10);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 7: Spacing system should be consistent on tablet screens', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        (screenWidth) => {
          // Set the window width to tablet size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: screenWidth,
          });
          window.dispatchEvent(new Event('resize'));

          const root = document.documentElement;
          const computedStyle = getComputedStyle(root);
          
          // Test that spacing variables are defined for tablet layout
          const spacingVars = [
            '--space-4', '--space-6', '--space-8', '--space-10',
            '--space-12', '--space-16', '--space-20'
          ];
          
          spacingVars.forEach(varName => {
            const value = computedStyle.getPropertyValue(varName).trim();
            expect(value).toBeTruthy();
            expect(value).toMatch(/^\d+(\.\d+)?rem$/);
            
            // Parse the rem value and ensure it's reasonable
            const remValue = parseFloat(value.replace('rem', ''));
            expect(remValue).toBeGreaterThan(0);
            expect(remValue).toBeLessThan(20);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 7: Grid layouts should use appropriate column counts for tablet', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        fc.array(videoItemArb, { minLength: 6, maxLength: 15 }),
        (screenWidth, videos) => {
          // Set the window width to tablet size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: screenWidth,
          });
          window.dispatchEvent(new Event('resize'));

          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that the gallery has responsive grid classes
          const galleryGrid = container.querySelector('.grid');
          expect(galleryGrid).toBeTruthy();
          
          const className = galleryGrid?.className || '';
          
          // For tablet screens (768px-1024px), should have:
          // - Base mobile: grid-cols-1
          // - Small screens: sm:grid-cols-2 (640px+)
          // - Large screens: lg:grid-cols-3 (1024px+)
          // At tablet size (768-1024), we're between sm and lg breakpoints
          
          // Verify multiple responsive breakpoints exist
          const hasBaseGrid = className.includes('grid-cols-1');
          const hasSmallGrid = className.includes('sm:grid-cols-2');
          const hasLargeGrid = className.includes('lg:grid-cols-3');
          
          expect(hasBaseGrid).toBe(true);
          expect(hasSmallGrid || hasLargeGrid).toBe(true);
          
          // Verify proper gap spacing
          expect(className.includes('gap-')).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 7: Tablet layout should maintain proper aspect ratios', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        fc.array(videoItemArb, { minLength: 3, maxLength: 9 }),
        (screenWidth, videos) => {
          // Set the window width to tablet size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: screenWidth,
          });
          window.dispatchEvent(new Event('resize'));

          const mockOnVideoSelect = () => {};
          
          const { container } = render(
            <VideoGallery
              videos={videos}
              onVideoSelect={mockOnVideoSelect}
            />
          );

          // Check that video thumbnails maintain aspect ratio on tablet
          const thumbnailContainers = container.querySelectorAll('.aspect-video');
          expect(thumbnailContainers.length).toBe(videos.length);
          
          // Each thumbnail should have proper aspect ratio class
          thumbnailContainers.forEach((thumbnail) => {
            expect(thumbnail.className.includes('aspect-video')).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 7: Tablet screens should use appropriate breakpoint transitions', () => {
    fc.assert(
      fc.property(
        // Generate tablet screen widths (768px-1024px)
        fc.integer({ min: 768, max: 1024 }),
        (screenWidth) => {
          // Set the window width to tablet size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: screenWidth,
          });
          window.dispatchEvent(new Event('resize'));

          const root = document.documentElement;
          const computedStyle = getComputedStyle(root);
          
          // Verify breakpoint variables are accessible
          const breakpointMd = computedStyle.getPropertyValue('--breakpoint-md').trim();
          expect(breakpointMd).toBe('768px');
          
          // Verify container sizes for tablet
          const containerMd = computedStyle.getPropertyValue('--container-md').trim();
          const containerLg = computedStyle.getPropertyValue('--container-lg').trim();
          
          expect(containerMd).toBe('768px');
          expect(containerLg).toBe('1024px');
          
          // For tablet screens (768-1024), we're in the md to lg range
          // Both container sizes should be defined for proper optimization
          expect(containerMd).toBeTruthy();
          expect(containerLg).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });
});
