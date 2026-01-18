import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContentManager from '../components/Admin/ContentManager/ContentManager';
import { ContentStatus, VideoCategory } from '../types';

describe('Content Management System', () => {
  beforeEach(() => {
    // Clear any mocks
    vi.clearAllMocks();
  });

  describe('ContentManager Component', () => {
    it('should render content manager interface', () => {
      render(<ContentManager />);

      expect(screen.getByTestId('content-manager')).toBeInTheDocument();
      expect(screen.getByText('Content Management')).toBeInTheDocument();
    });

    it('should display add content button', () => {
      render(<ContentManager />);

      expect(screen.getByTestId('btn-add-content')).toBeInTheDocument();
      expect(screen.getByText('+ Add New Content')).toBeInTheDocument();
    });

    it('should display status filter', () => {
      render(<ContentManager />);

      expect(screen.getByTestId('status-filter')).toBeInTheDocument();
      expect(screen.getByText('Filter by Status:')).toBeInTheDocument();
    });

    it('should show form when add button is clicked', () => {
      render(<ContentManager />);

      fireEvent.click(screen.getByTestId('btn-add-content'));

      expect(screen.getByTestId('content-form')).toBeInTheDocument();
      expect(screen.getByText('Add New Content')).toBeInTheDocument();
    });

    it('should display form fields correctly', () => {
      render(<ContentManager />);

      fireEvent.click(screen.getByTestId('btn-add-content'));

      expect(screen.getByTestId('input-title')).toBeInTheDocument();
      expect(screen.getByTestId('select-type')).toBeInTheDocument();
      expect(screen.getByTestId('select-category')).toBeInTheDocument();
      expect(screen.getByTestId('textarea-description')).toBeInTheDocument();
      expect(screen.getByTestId('select-status')).toBeInTheDocument();
    });

    it('should validate required fields', async () => {
      render(<ContentManager />);

      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Please enter a title')).toBeInTheDocument();
      });
    });

    it('should create new content item', async () => {
      render(<ContentManager />);

      fireEvent.click(screen.getByTestId('btn-add-content'));

      const titleInput = screen.getByTestId('input-title');
      const descriptionInput = screen.getByTestId('textarea-description');

      fireEvent.change(titleInput, { target: { value: 'Test Video' } });
      fireEvent.change(descriptionInput, {
        target: { value: 'Test description' }
      });

      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Test Video')).toBeInTheDocument();
      });
    });

    it('should display content items in table', async () => {
      render(<ContentManager />);

      // Add first item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Video 1' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Video 1')).toBeInTheDocument();
      });

      // Add second item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Video 2' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Video 2')).toBeInTheDocument();
      });
    });

    it('should edit existing content', async () => {
      render(<ContentManager />);

      // Create item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Original Title' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Original Title')).toBeInTheDocument();
      });

      // Edit item
      const editButton = screen.getByTestId(/btn-edit-/);
      fireEvent.click(editButton);

      await waitFor(() => {
        expect(screen.getByText('Edit Content')).toBeInTheDocument();
      });

      const titleInput = screen.getByTestId('input-title');
      fireEvent.change(titleInput, { target: { value: 'Updated Title' } });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Updated Title')).toBeInTheDocument();
        expect(screen.queryByText('Original Title')).not.toBeInTheDocument();
      });
    });

    it('should delete content item', async () => {
      render(<ContentManager />);

      // Create item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Delete Me' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Delete Me')).toBeInTheDocument();
      });

      // Delete item
      const deleteButton = screen.getByTestId(/btn-delete-/);
      window.confirm = vi.fn(() => true);
      fireEvent.click(deleteButton);

      await waitFor(() => {
        expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
      });
    });

    it('should publish draft content', async () => {
      render(<ContentManager />);

      // Create draft item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Draft Content' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Draft Content')).toBeInTheDocument();
      });

      // Check initial status is draft
      expect(screen.getByText('draft')).toBeInTheDocument();

      // Publish
      const publishButton = screen.getByTestId(/btn-publish-/);
      fireEvent.click(publishButton);

      await waitFor(() => {
        expect(screen.getByText('published')).toBeInTheDocument();
      });
    });

    it('should archive content', async () => {
      render(<ContentManager />);

      // Create item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Archive Me' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Archive Me')).toBeInTheDocument();
      });

      // Archive
      const archiveButton = screen.getByTestId(/btn-archive-/);
      fireEvent.click(archiveButton);

      await waitFor(() => {
        expect(screen.getByText('archived')).toBeInTheDocument();
      });
    });

    it('should filter content by status', async () => {
      render(<ContentManager />);

      // Create draft item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Draft Item' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Draft Item')).toBeInTheDocument();
      });

      // Create and publish another item
      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Published Item' }
      });
      const statusSelect = screen.getByTestId('select-status');
      fireEvent.change(statusSelect, { target: { value: 'published' } });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('Published Item')).toBeInTheDocument();
      });

      // Filter by draft
      const filterSelect = screen.getByTestId('status-filter');
      fireEvent.change(filterSelect, { target: { value: 'draft' } });

      await waitFor(() => {
        expect(screen.getByText('Draft Item')).toBeInTheDocument();
        expect(screen.queryByText('Published Item')).not.toBeInTheDocument();
      });
    });

    it('should close form on cancel', async () => {
      render(<ContentManager />);

      fireEvent.click(screen.getByTestId('btn-add-content'));

      expect(screen.getByTestId('content-form')).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('btn-cancel'));

      expect(screen.queryByTestId('content-form')).not.toBeInTheDocument();
    });

    it('should set correct content type', async () => {
      render(<ContentManager />);

      fireEvent.click(screen.getByTestId('btn-add-content'));

      const typeSelect = screen.getByTestId('select-type');
      fireEvent.change(typeSelect, { target: { value: 'image' } });

      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Image Content' }
      });

      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        expect(screen.getByText('image')).toBeInTheDocument();
      });
    });

    it('should display no items message when empty', () => {
      render(<ContentManager />);

      expect(screen.getByText('No content items found')).toBeInTheDocument();
    });

    it('should format dates correctly', async () => {
      render(<ContentManager />);

      fireEvent.click(screen.getByTestId('btn-add-content'));
      fireEvent.change(screen.getByTestId('input-title'), {
        target: { value: 'Dated Content' }
      });
      fireEvent.click(screen.getByTestId('btn-save'));

      await waitFor(() => {
        const today = new Date().toLocaleDateString();
        expect(screen.getByText(today)).toBeInTheDocument();
      });
    });
  });
});
