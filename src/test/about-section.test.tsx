import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '@/components/About/About';
import { Achievement } from '@/types';

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn((cb) => {
  setTimeout(cb, 16);
  return 1;
});

describe('About Component', () => {
  const mockAchievements: Achievement[] = [
    {
      title: 'Best Cinematography Award',
      description: 'Recognized for outstanding cinematography at the International Film Festival.',
      year: 2023
    },
    {
      title: 'Featured in Creative Magazine',
      description: 'Portfolio featured as "Rising Talent" in Creative Professional Magazine.',
      year: 2022
    }
  ];

  const mockSkills = [
    'Video Production',
    'Cinematography',
    'Post-Production',
    'Color Grading'
  ];

  const mockProfileImages = [
    '/images/profile-1.jpg',
    '/images/profile-2.jpg'
  ];

  const mockStory = 'Passionate about creating compelling visual stories that connect with audiences and drive meaningful engagement.';

  const defaultProps = {
    story: mockStory,
    achievements: mockAchievements,
    profileImages: mockProfileImages,
    skills: mockSkills
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  describe('Content Display', () => {
    it('should display the about section with correct heading', () => {
      render(<About {...defaultProps} />);
      
      expect(screen.getByText('About Me')).toBeInTheDocument();
    });

    it('should display the personal story text', () => {
      render(<About {...defaultProps} />);
      
      expect(screen.getByText(mockStory)).toBeInTheDocument();
    });

    it('should display all profile images', () => {
      render(<About {...defaultProps} />);
      
      const images = screen.getAllByAltText(/Profile \d+/);
      expect(images).toHaveLength(mockProfileImages.length);
      
      mockProfileImages.forEach((imageSrc, index) => {
        expect(images[index]).toHaveAttribute('src', imageSrc);
      });
    });
  });

  describe('Skills Showcase', () => {
    it('should display skills section heading', () => {
      render(<About {...defaultProps} />);
      
      expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
    });

    it('should display all skills', () => {
      render(<About {...defaultProps} />);
      
      mockSkills.forEach(skill => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });
    });

    it('should render skills with proper styling', () => {
      render(<About {...defaultProps} />);
      
      const skillElement = screen.getByText('Video Production');
      expect(skillElement).toHaveClass('bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    });
  });

  describe('Achievements Timeline', () => {
    it('should display achievements section heading', () => {
      render(<About {...defaultProps} />);
      
      expect(screen.getByText('Journey & Achievements')).toBeInTheDocument();
    });

    it('should display all achievements', () => {
      render(<About {...defaultProps} />);
      
      mockAchievements.forEach(achievement => {
        expect(screen.getByText(achievement.title)).toBeInTheDocument();
        expect(screen.getByText(achievement.description)).toBeInTheDocument();
        expect(screen.getByText(achievement.year.toString())).toBeInTheDocument();
      });
    });

    it('should sort achievements by year in descending order', () => {
      const unsortedAchievements: Achievement[] = [
        { title: 'Old Achievement', description: 'Old desc', year: 2020 },
        { title: 'New Achievement', description: 'New desc', year: 2023 },
        { title: 'Middle Achievement', description: 'Middle desc', year: 2021 }
      ];

      render(<About {...defaultProps} achievements={unsortedAchievements} />);
      
      const achievementTitles = screen.getAllByText(/Achievement$/);
      expect(achievementTitles[0]).toHaveTextContent('New Achievement');
      expect(achievementTitles[1]).toHaveTextContent('Middle Achievement');
      expect(achievementTitles[2]).toHaveTextContent('Old Achievement');
    });
  });

  describe('Statistics Counters', () => {
    it('should display statistics section', () => {
      render(<About {...defaultProps} />);
      
      expect(screen.getByText('Achievements')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Satisfaction')).toBeInTheDocument();
    });
  });

  describe('Call-to-Action Buttons', () => {
    it('should display call-to-action buttons', () => {
      render(<About {...defaultProps} />);
      
      expect(screen.getByText('View My Work')).toBeInTheDocument();
      expect(screen.getByText("Let's Collaborate")).toBeInTheDocument();
    });

    it('should handle portfolio button click', () => {
      // Mock getElementById
      const mockElement = { scrollIntoView: vi.fn() };
      vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);
      
      render(<About {...defaultProps} />);
      
      const portfolioButton = screen.getByText('View My Work');
      fireEvent.click(portfolioButton);
      
      expect(document.getElementById).toHaveBeenCalledWith('portfolio');
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('should handle contact button click', () => {
      // Mock getElementById
      const mockElement = { scrollIntoView: vi.fn() };
      vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);
      
      render(<About {...defaultProps} />);
      
      const contactButton = screen.getByText("Let's Collaborate");
      fireEvent.click(contactButton);
      
      expect(document.getElementById).toHaveBeenCalledWith('contact');
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('should handle missing target elements gracefully', () => {
      vi.spyOn(document, 'getElementById').mockReturnValue(null);
      
      render(<About {...defaultProps} />);
      
      const portfolioButton = screen.getByText('View My Work');
      
      // Should not throw error when element is not found
      expect(() => fireEvent.click(portfolioButton)).not.toThrow();
    });
  });

  describe('Responsive Design', () => {
    it('should apply responsive classes for layout', () => {
      const { container } = render(<About {...defaultProps} />);
      
      const mainGrid = container.querySelector('.grid.lg\\:grid-cols-2');
      expect(mainGrid).toBeInTheDocument();
    });

    it('should apply responsive classes for buttons', () => {
      const { container } = render(<About {...defaultProps} />);
      
      const buttonContainer = container.querySelector('.flex.flex-col.sm\\:flex-row');
      expect(buttonContainer).toBeInTheDocument();
    });

    it('should apply responsive text sizing', () => {
      render(<About {...defaultProps} />);
      
      const heading = screen.getByText('About Me');
      expect(heading).toHaveClass('text-4xl', 'md:text-5xl');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty achievements array', () => {
      const emptyAchievementsProps = {
        ...defaultProps,
        achievements: []
      };
      
      render(<About {...emptyAchievementsProps} />);
      
      expect(screen.getByText('Journey & Achievements')).toBeInTheDocument();
      // Should not crash and should still display the section
    });

    it('should handle empty skills array', () => {
      const emptySkillsProps = {
        ...defaultProps,
        skills: []
      };
      
      render(<About {...emptySkillsProps} />);
      
      expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
      // Should not crash and should still display the section
    });

    it('should handle empty profile images array', () => {
      const emptyImagesProps = {
        ...defaultProps,
        profileImages: []
      };
      
      render(<About {...emptyImagesProps} />);
      
      // Should not crash when no images are provided
      const images = screen.queryAllByAltText(/Profile \d+/);
      expect(images).toHaveLength(0);
    });

    it('should handle very long story text', () => {
      const longStory = 'A'.repeat(1000);
      const longStoryProps = {
        ...defaultProps,
        story: longStory
      };
      
      render(<About {...longStoryProps} />);
      
      expect(screen.getByText(longStory)).toBeInTheDocument();
    });
  });
});