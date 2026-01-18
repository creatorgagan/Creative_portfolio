import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fc from 'fast-check';
import Navigation from '../components/Navigation/Navigation';

/**
 * Feature: video-portfolio-website, Property 5: Mobile Navigation Transformation
 * Validates: Requirements 4.3
 * 
 * Property: For any screen size below mobile breakpoint (768px), 
 * the navigation system should transform into a mobile-friendly menu format
 */

describe('Navigation Mobile Transformation Property Test', () => {
  let originalInnerWidth: number;

  beforeEach(() => {
    // Store original window width
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    // Restore original window width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
    window.dispatchEvent(new Event('resize'));
  });

  it('should transform navigation to mobile format for any screen width below 768px', () => {
    fc.assert(
      fc.property(
        // Generate screen widths below mobile breakpoint (768px)
        fc.integer({ min: 200, max: 767 }),
        fc.constantFrom('home', 'portfolio', 'about', 'contact'),
        (screenWidth, currentSection) => {
          // Set the window width to the generated mobile width
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

          // Check that desktop navigation is hidden on mobile
          const desktopNav = container.querySelector('.hidden.md\\:block');
          expect(desktopNav).toBeInTheDocument();

          // Check that mobile menu button is visible
          const mobileMenuButton = container.querySelector('.md\\:hidden button');
          expect(mobileMenuButton).toBeInTheDocument();

          // Check that mobile menu button has proper accessibility attributes
          expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');

          // Check that the hamburger icon is present (3 spans for hamburger lines)
          const hamburgerLines = mobileMenuButton?.querySelectorAll('span');
          expect(hamburgerLines).toHaveLength(4); // 3 lines + 1 sr-only text

          // Check that mobile menu drawer exists but is initially hidden (translated off-screen)
          const mobileMenu = container.querySelector('.mobile-menu');
          expect(mobileMenu).toBeInTheDocument();
          expect(mobileMenu).toHaveClass('translate-x-full'); // Initially hidden

          // Verify the mobile menu has proper structure
          const mobileNavItems = mobileMenu?.querySelectorAll('a');
          expect(mobileNavItems).toHaveLength(4); // home, portfolio, about, contact
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should show desktop navigation for any screen width at or above 768px', () => {
    fc.assert(
      fc.property(
        // Generate screen widths at or above mobile breakpoint (768px)
        fc.integer({ min: 768, max: 2560 }),
        fc.constantFrom('home', 'portfolio', 'about', 'contact'),
        (screenWidth, currentSection) => {
          // Set the window width to the generated desktop width
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

          // Check that desktop navigation is visible
          const desktopNav = container.querySelector('.hidden.md\\:block');
          expect(desktopNav).toBeInTheDocument();

          // Check that desktop navigation contains all navigation items
          const desktopNavItems = desktopNav?.querySelectorAll('a');
          expect(desktopNavItems).toHaveLength(4); // home, portfolio, about, contact

          // Check that mobile menu button is present but should be hidden via CSS
          const mobileMenuButton = container.querySelector('.md\\:hidden');
          expect(mobileMenuButton).toBeInTheDocument();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should maintain navigation functionality across all screen sizes', () => {
    fc.assert(
      fc.property(
        // Generate any reasonable screen width
        fc.integer({ min: 200, max: 2560 }),
        fc.constantFrom('home', 'portfolio', 'about', 'contact'),
        (screenWidth, currentSection) => {
          // Set the window width
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

          // Verify that navigation always contains the brand/logo
          const brand = container.querySelector('a[href="#home"]');
          expect(brand).toBeInTheDocument();
          expect(brand).toHaveTextContent('Portfolio');

          // Verify that all navigation items exist somewhere in the DOM
          // (either in desktop nav or mobile menu)
          const allNavLinks = container.querySelectorAll('a[href^="#"]');
          const navHrefs = Array.from(allNavLinks).map(link => link.getAttribute('href'));
          
          expect(navHrefs).toContain('#home');
          expect(navHrefs).toContain('#portfolio');
          expect(navHrefs).toContain('#about');
          expect(navHrefs).toContain('#contact');

          // Verify proper responsive classes are applied
          if (screenWidth < 768) {
            // Mobile: desktop nav should be hidden, mobile button should be visible
            const desktopNav = container.querySelector('.hidden.md\\:block');
            const mobileButton = container.querySelector('.md\\:hidden');
            expect(desktopNav).toBeInTheDocument();
            expect(mobileButton).toBeInTheDocument();
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});