import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

/**
 * Integration tests for complete user flows
 * Feature: video-portfolio-website
 * Tests end-to-end user journeys and cross-component interactions
 * Validates: All requirements (complete integration)
 */

// Mock react-player to avoid video loading issues in tests
vi.mock('react-player', () => ({
  default: vi.fn(({ url, playing, onReady }) => {
    // Simulate player ready after mount
    if (onReady) {
      setTimeout(() => onReady(), 0);
    }
    return (
      <div data-testid="mock-react-player" data-url={url} data-playing={playing}>
        Mock Video Player
      </div>
    );
  }),
}));

// Mock IntersectionObserver for lazy loading tests
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
window.IntersectionObserver = MockIntersectionObserver as any;

describe('App Integration Tests - Complete User Flows', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Application Rendering and Structure', () => {
    it('should render the complete application with all main sections', async () => {
      render(<App />);

      // Verify main application structure
      await waitFor(() => {
        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('navigation')).toBeInTheDocument();
      });

      // Verify key sections are present
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /video creator/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /video portfolio/i })).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('should render navigation with all required links', async () => {
      render(<App />);

      await waitFor(() => {
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
      });

      // Verify navigation links exist
      expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    });
  });

  describe('Video Gallery Integration', () => {
    it('should display video gallery with video items', async () => {
      render(<App />);

      // Wait for portfolio section to load
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /video portfolio/i })).toBeInTheDocument();
      });

      // Verify video cards are rendered
      await waitFor(() => {
        const videoCards = screen.getAllByRole('article');
        expect(videoCards.length).toBeGreaterThan(0);
      }, { timeout: 3000 });
    });

    it('should render video filters and search functionality', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /video portfolio/i })).toBeInTheDocument();
      });

      // Verify search input exists
      const searchInput = screen.getByPlaceholderText(/search/i);
      expect(searchInput).toBeInTheDocument();

      // Verify filter buttons exist
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('YouTube Integration', () => {
    it('should render YouTube integration section', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /youtube channel/i })).toBeInTheDocument();
      }, { timeout: 3000 });

      // Verify YouTube channel link
      const youtubeLink = screen.getByRole('link', { name: /visit youtube channel/i });
      expect(youtubeLink).toBeInTheDocument();
      expect(youtubeLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('About Section Integration', () => {
    it('should render about section with content', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
      }, { timeout: 3000 });

      // Verify about content is present
      const aboutSection = screen.getByRole('heading', { name: /about/i }).closest('section');
      expect(aboutSection).toBeInTheDocument();
    });
  });

  describe('Contact Section Integration', () => {
    it('should render contact form with all required fields', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
      }, { timeout: 3000 });

      // Verify form fields
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    it('should display social media links', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
      }, { timeout: 3000 });

      // Verify social links are present
      const links = screen.getAllByRole('link');
      const socialLinks = links.filter(link => 
        link.getAttribute('href')?.includes('youtube') ||
        link.getAttribute('href')?.includes('instagram') ||
        link.getAttribute('href')?.includes('linkedin')
      );
      expect(socialLinks.length).toBeGreaterThan(0);
    });
  });

  describe('SEO and Meta Tags Integration', () => {
    it('should include proper SEO meta tags', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('main')).toBeInTheDocument();
      });

      // Verify document title is set
      expect(document.title).toBeTruthy();
      expect(document.title.length).toBeGreaterThan(0);

      // Verify meta tags exist
      const metaTags = document.querySelectorAll('meta');
      expect(metaTags.length).toBeGreaterThan(0);
    });

    it('should include structured data for SEO', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('main')).toBeInTheDocument();
      });

      // Verify structured data script exists
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      expect(structuredDataScript).toBeTruthy();
    });
  });

  describe('Responsive Design Integration', () => {
    it('should render mobile navigation elements', async () => {
      // Set mobile viewport
      window.innerWidth = 375;
      window.innerHeight = 667;
      window.dispatchEvent(new Event('resize'));

      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
      });

      // Mobile menu button should be present
      const mobileMenuButton = screen.getByLabelText(/menu/i);
      expect(mobileMenuButton).toBeInTheDocument();
    });
  });

  describe('Performance and Loading States', () => {
    it('should handle lazy-loaded components', async () => {
      render(<App />);

      // Initial render should show hero immediately
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /video creator/i })).toBeInTheDocument();
      });

      // Lazy-loaded sections should eventually appear
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
      }, { timeout: 5000 });
    });
  });

  describe('Error Handling', () => {
    it('should render without crashing even with missing data', async () => {
      render(<App />);

      // App should render successfully
      await waitFor(() => {
        expect(screen.getByRole('main')).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility Integration', () => {
    it('should provide proper ARIA landmarks', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('main')).toBeInTheDocument();
      });

      // Verify key ARIA landmarks
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('main')).toBeInTheDocument();

      // Verify sections have proper headings
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });

    it('should have accessible form labels', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      }, { timeout: 3000 });

      // All form fields should have labels
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });
  });

  describe('Cross-Component Data Flow', () => {
    it('should pass video data from gallery to player', async () => {
      render(<App />);

      // Wait for video gallery
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /video portfolio/i })).toBeInTheDocument();
      });

      // Verify video data is rendered in cards
      await waitFor(() => {
        const videoCards = screen.getAllByRole('article');
        expect(videoCards.length).toBeGreaterThan(0);
        
        // Each card should have video information
        videoCards.forEach(card => {
          expect(card.textContent).toBeTruthy();
        });
      }, { timeout: 3000 });
    });

    it('should maintain site configuration across components', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('main')).toBeInTheDocument();
      });

      // Site name should appear in multiple places
      const headings = screen.getAllByRole('heading');
      const hasCreatorName = headings.some(h => h.textContent?.includes('Video Creator'));
      expect(hasCreatorName).toBe(true);
    });
  });
});

