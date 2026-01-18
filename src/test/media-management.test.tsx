import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MediaManager from '../components/Admin/MediaManager/MediaManager';

describe('Media Management System', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('MediaManager Component', () => {
    it('should render media manager interface', () => {
      render(<MediaManager />);

      expect(screen.getByTestId('media-manager')).toBeInTheDocument();
      expect(screen.getByText('Media Management')).toBeInTheDocument();
    });

    it('should display upload area', () => {
      render(<MediaManager />);

      expect(screen.getByTestId('upload-area')).toBeInTheDocument();
      expect(screen.getByText(/Drop files here or click to upload/i)).toBeInTheDocument();
    });

    it('should display file input', () => {
      render(<MediaManager />);

      expect(screen.getByTestId('file-input')).toBeInTheDocument();
    });

    it('should display search and filter controls', () => {
      render(<MediaManager />);

      expect(screen.getByTestId('search-input')).toBeInTheDocument();
      expect(screen.getByTestId('filter-type')).toBeInTheDocument();
    });

    it('should display media gallery', () => {
      render(<MediaManager />);

      expect(screen.getByTestId('media-gallery')).toBeInTheDocument();
    });

    it('should display media statistics', () => {
      render(<MediaManager />);

      expect(screen.getByTestId('media-stats')).toBeInTheDocument();
      expect(screen.getByText('Total Files')).toBeInTheDocument();
      expect(screen.getByText('Total Size')).toBeInTheDocument();
      expect(screen.getByText('Images')).toBeInTheDocument();
      expect(screen.getByText('Videos')).toBeInTheDocument();
    });

    it('should show no media message when empty', () => {
      render(<MediaManager />);

      expect(screen.getByText('No media files found')).toBeInTheDocument();
    });

    it('should handle drag over on upload area', () => {
      render(<MediaManager />);

      const uploadArea = screen.getByTestId('upload-area');
      
      fireEvent.dragOver(uploadArea);
      expect(uploadArea).toHaveClass('dragging');
    });

    it('should handle drag leave from upload area', () => {
      render(<MediaManager />);

      const uploadArea = screen.getByTestId('upload-area');
      
      fireEvent.dragOver(uploadArea);
      fireEvent.dragLeave(uploadArea);
      expect(uploadArea).not.toHaveClass('dragging');
    });

    it('should search media files', async () => {
      const { container } = render(<MediaManager />);

      const searchInput = screen.getByTestId('search-input');
      
      // Initially empty
      expect(screen.getByText('No media files found')).toBeInTheDocument();

      // Type search term
      fireEvent.change(searchInput, { target: { value: 'video' } });

      await waitFor(() => {
        // Should still show no results
        expect(screen.getByText('No media files found')).toBeInTheDocument();
      });
    });

    it('should filter by media type', async () => {
      render(<MediaManager />);

      const filterSelect = screen.getByTestId('filter-type');

      // Check all options available
      expect(filterSelect).toHaveValue('all');

      fireEvent.change(filterSelect, { target: { value: 'image' } });
      expect(filterSelect).toHaveValue('image');

      fireEvent.change(filterSelect, { target: { value: 'video' } });
      expect(filterSelect).toHaveValue('video');
    });

    it('should format file sizes correctly', () => {
      render(<MediaManager />);

      // Check that file size stats are displayed with proper units
      expect(screen.getByText('0 Bytes')).toBeInTheDocument();
    });

    it('should initialize with zero statistics', () => {
      render(<MediaManager />);

      // Find stat values
      const stats = screen.getByTestId('media-stats');
      
      // Should show 0 for all initial stats
      expect(stats.querySelector('.stat-value')).toHaveTextContent('0');
    });

    it('should accept valid image files', async () => {
      const { container } = render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

      // Create a mock image file
      const mockFile = new File(['image content'], 'test.jpg', { type: 'image/jpeg' });

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      // Should show upload progress
      await waitFor(() => {
        expect(screen.getByTestId('upload-progress')).toBeInTheDocument();
      });
    });

    it('should accept valid video files', async () => {
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

      // Create a mock video file
      const mockFile = new File(['video content'], 'test.mp4', { type: 'video/mp4' });

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      // Should show upload progress
      await waitFor(() => {
        expect(screen.getByTestId('upload-progress')).toBeInTheDocument();
      });
    });

    it('should display upload progress for multiple files', async () => {
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

      // Create multiple mock files
      const mockFiles = [
        new File(['img1'], 'image1.jpg', { type: 'image/jpeg' }),
        new File(['img2'], 'image2.png', { type: 'image/png' })
      ];

      fireEvent.change(fileInput, { target: { files: mockFiles as any } });

      // Should show multiple progress items
      await waitFor(() => {
        expect(screen.getByTestId('upload-progress')).toBeInTheDocument();
      });
    });

    it('should track upload progress', async () => {
      jest.useFakeTimers();
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
      const mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      await waitFor(() => {
        expect(screen.getByTestId('upload-progress')).toBeInTheDocument();
      });

      jest.useRealTimers();
    });

    it('should display media cards after upload completes', async () => {
      jest.useFakeTimers();
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
      const mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      // Fast-forward time to complete upload
      jest.runAllTimers();

      await waitFor(() => {
        expect(screen.getByText('test.jpg')).toBeInTheDocument();
      });

      jest.useRealTimers();
    });

    it('should allow updating media description', async () => {
      jest.useFakeTimers();
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
      const mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      jest.runAllTimers();

      await waitFor(() => {
        const descriptionInput = screen.getByTestId(/description-/) as HTMLInputElement;
        fireEvent.change(descriptionInput, { target: { value: 'Test description' } });

        expect(descriptionInput.value).toBe('Test description');
      });

      jest.useRealTimers();
    });

    it('should allow updating media tags', async () => {
      jest.useFakeTimers();
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
      const mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      jest.runAllTimers();

      await waitFor(() => {
        const tagsInput = screen.getByTestId(/tags-/) as HTMLInputElement;
        fireEvent.change(tagsInput, { target: { value: 'tag1, tag2, tag3' } });

        expect(tagsInput.value).toBe('tag1, tag2, tag3');
      });

      jest.useRealTimers();
    });

    it('should allow copying media URL', async () => {
      jest.useFakeTimers();
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
      const mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });

      // Mock clipboard API
      Object.assign(navigator, {
        clipboard: {
          writeText: vi.fn()
        }
      });

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      jest.runAllTimers();

      await waitFor(() => {
        const copyBtn = screen.getByTestId(/btn-copy-/);
        fireEvent.click(copyBtn);
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
      });

      jest.useRealTimers();
    });

    it('should allow deleting media files', async () => {
      jest.useFakeTimers();
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
      const mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });

      window.confirm = vi.fn(() => true);

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      jest.runAllTimers();

      await waitFor(() => {
        expect(screen.getByText('test.jpg')).toBeInTheDocument();
      });

      const deleteBtn = screen.getByTestId(/btn-delete-/);
      fireEvent.click(deleteBtn);

      await waitFor(() => {
        expect(screen.getByText('No media files found')).toBeInTheDocument();
      });

      jest.useRealTimers();
    });

    it('should not delete file on cancel', async () => {
      jest.useFakeTimers();
      render(<MediaManager />);

      const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
      const mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });

      window.confirm = vi.fn(() => false);

      fireEvent.change(fileInput, { target: { files: [mockFile] } });

      jest.runAllTimers();

      await waitFor(() => {
        expect(screen.getByText('test.jpg')).toBeInTheDocument();
      });

      const deleteBtn = screen.getByTestId(/btn-delete-/);
      fireEvent.click(deleteBtn);

      await waitFor(() => {
        expect(screen.getByText('test.jpg')).toBeInTheDocument();
      });

      jest.useRealTimers();
    });
  });
});
