import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Hero from '../components/Hero/Hero';

// Mock scrollIntoView
const mockScrollIntoView = vi.fn();
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: mockScrollIntoView,
  writable: true,
});

describe('Hero Component', () => {
  const defaultProps = {
    name: 'Test Creator',
    tagline: 'Creative Professional',
    description: 'Passionate about creating compelling visual stories.',
    backgroundImage: '/test-image.jpg',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Hero Content Display', () => {
    it('should display hero content with name, tagline, and description', () => {
      render(<Hero {...defaultProps} />);

      expect(screen.getByText('Test Creator')).toBeInTheDocument();
      expect(screen.getByText('Creative Professional')).toBeInTheDocument();
      expect(screen.getByText('Passionate about creating compelling visual stories.')).toBeInTheDocument();
    });

    it('should display call-to-action buttons', () => {
      render(<Hero {...defaultProps} />);

      expect(screen.getByRole('button', { name: /view video portfolio/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
    });

    it('should display scroll indicator', () => {
      render(<Hero {...defaultProps} />);

      expect(screen.getByRole('button', { name: /scroll to portfolio section/i })).toBeInTheDocument();
      expect(screen.getByText('Explore Work')).toBeInTheDocument();
    });
  });

  describe('Background Media Loading', () => {
    it('should display background image when no video is provided', () => {
      render(<Hero {...defaultProps} />);

      const backgroundDiv = document.querySelector('[style*="background-image"]');
      expect(backgroundDiv).toBeInTheDocument();
      expect(backgroundDiv).toHaveStyle(`background-image: url(${defaultProps.backgroundImage})`);
    });

    it('should display video element when background video is provided', () => {
      const propsWithVideo = {
        ...defaultProps,
        backgroundVideo: '/test-video.mp4',
      };

      render(<Hero {...propsWithVideo} />);

      const videoElement = document.querySelector('video');
      expect(videoElement).toBeInTheDocument();
      expect(videoElement?.querySelector('source')).toHaveAttribute('src', '/test-video.mp4');
    });

    it('should have video with correct attributes for autoplay and muted', () => {
      const propsWithVideo = {
        ...defaultProps,
        backgroundVideo: '/test-video.mp4',
      };

      render(<Hero {...propsWithVideo} />);

      const videoElement = document.querySelector('video');
      expect(videoElement).toHaveProperty('autoplay', true);
      expect(videoElement).toHaveProperty('muted', true);
      expect(videoElement).toHaveProperty('loop', true);
      expect(videoElement).toHaveProperty('playsInline', true);
    });

    it('should fallback to background image when video fails to load', async () => {
      const propsWithVideo = {
        ...defaultProps,
        backgroundVideo: '/test-video.mp4',
      };

      render(<Hero {...propsWithVideo} />);

      const videoElement = document.querySelector('video');
      expect(videoElement).toBeInTheDocument();
      
      // Initially, the fallback image should be visible (opacity-100) and video should be hidden (opacity-0)
      const backgroundDiv = document.querySelector('[style*="background-image"]');
      expect(backgroundDiv).toHaveClass('opacity-100');
      expect(videoElement).toHaveClass('opacity-0');
      
      // Simulate video error - this should keep the fallback image visible
      fireEvent.error(videoElement!);

      // The background should remain visible
      expect(backgroundDiv).toHaveClass('opacity-100');
    });
  });

  describe('Call-to-Action Button Functionality', () => {
    it('should call onScrollToSection when View Portfolio button is clicked', () => {
      const mockOnScrollToSection = vi.fn();
      render(<Hero {...defaultProps} onScrollToSection={mockOnScrollToSection} />);

      const portfolioButton = screen.getByRole('button', { name: /view video portfolio/i });
      fireEvent.click(portfolioButton);

      expect(mockOnScrollToSection).toHaveBeenCalledWith('portfolio');
    });

    it('should call onScrollToSection when Get in Touch button is clicked', () => {
      const mockOnScrollToSection = vi.fn();
      render(<Hero {...defaultProps} onScrollToSection={mockOnScrollToSection} />);

      const contactButton = screen.getByRole('button', { name: /get in touch/i });
      fireEvent.click(contactButton);

      expect(mockOnScrollToSection).toHaveBeenCalledWith('contact');
    });

    it('should scroll to portfolio section when scroll indicator is clicked', () => {
      const mockOnScrollToSection = vi.fn();
      render(<Hero {...defaultProps} onScrollToSection={mockOnScrollToSection} />);

      const scrollIndicator = screen.getByRole('button', { name: /scroll to portfolio section/i });
      fireEvent.click(scrollIndicator);

      expect(mockOnScrollToSection).toHaveBeenCalledWith('portfolio');
    });

    it('should fallback to direct scroll when onScrollToSection is not provided', () => {
      // Mock getElementById to return a mock element
      const mockElement = { scrollIntoView: mockScrollIntoView };
      const mockGetElementById = vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);

      render(<Hero {...defaultProps} />);

      const portfolioButton = screen.getByRole('button', { name: /view video portfolio/i });
      fireEvent.click(portfolioButton);

      expect(mockGetElementById).toHaveBeenCalledWith('portfolio');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

      mockGetElementById.mockRestore();
    });
  });

  describe('Responsive Hero Layout', () => {
    it('should have responsive text classes for different screen sizes', () => {
      render(<Hero {...defaultProps} />);

      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl');

      const tagline = screen.getByText(defaultProps.tagline);
      expect(tagline).toHaveClass('text-xl', 'sm:text-2xl', 'md:text-3xl');

      const description = screen.getByText(defaultProps.description);
      expect(description).toHaveClass('text-lg', 'sm:text-xl', 'md:text-2xl');
    });

    it('should have responsive button layout classes', () => {
      render(<Hero {...defaultProps} />);

      const buttonContainer = screen.getByRole('button', { name: /view video portfolio/i }).parentElement;
      expect(buttonContainer).toHaveClass('flex', 'flex-col', 'sm:flex-row');
    });

    it('should have responsive padding and spacing classes', () => {
      render(<Hero {...defaultProps} />);

      const heroSection = screen.getByRole('banner');
      expect(heroSection).toHaveClass('min-h-screen');

      const contentContainer = heroSection.querySelector('.text-center');
      expect(contentContainer).toHaveClass('px-4', 'sm:px-6', 'lg:px-8');
    });
  });

  describe('Animation and Accessibility', () => {
    it('should have proper ARIA labels and roles', () => {
      render(<Hero {...defaultProps} />);

      const heroSection = screen.getByRole('banner');
      expect(heroSection).toHaveAttribute('aria-label', 'Hero section');

      const portfolioButton = screen.getByRole('button', { name: /view video portfolio/i });
      expect(portfolioButton).toHaveAttribute('aria-label', 'View video portfolio');

      const contactButton = screen.getByRole('button', { name: /get in touch/i });
      expect(contactButton).toHaveAttribute('aria-label', 'Get in touch');
    });

    it('should have animation classes for text reveal', async () => {
      render(<Hero {...defaultProps} />);

      // Wait for animation to trigger
      await waitFor(() => {
        const animatedElements = document.querySelectorAll('[class*="transition-all"]');
        expect(animatedElements.length).toBeGreaterThan(0);
      });
    });

    it('should have proper semantic HTML structure', () => {
      render(<Hero {...defaultProps} />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getAllByRole('button')).toHaveLength(3); // 2 CTA buttons + scroll indicator
    });
  });
});