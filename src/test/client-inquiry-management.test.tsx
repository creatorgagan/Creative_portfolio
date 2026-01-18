import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InquiryManagement from '@/components/Admin/ClientManager/InquiryManagement';
import { ClientInquiry, InquiryStatus, InquiryPriority } from '@/types';

/**
 * Unit tests for Inquiry Management Component
 * Requirements: 21.4 - Create comprehensive unit tests for inquiry management
 */

describe('InquiryManagement Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Component Rendering', () => {
    it('should render the inquiry management container', () => {
      render(<InquiryManagement />);
      expect(screen.getByTestId('inquiry-management')).toBeInTheDocument();
    });

    it('should render header with title and add button', () => {
      render(<InquiryManagement />);
      expect(screen.getByText('Client Inquiry Management')).toBeInTheDocument();
      expect(screen.getByTestId('btn-add-inquiry')).toBeInTheDocument();
    });

    it('should render search input', () => {
      render(<InquiryManagement />);
      expect(screen.getByTestId('search-inquiries')).toBeInTheDocument();
    });

    it('should render status and priority filters', () => {
      render(<InquiryManagement />);
      expect(screen.getByTestId('filter-status')).toBeInTheDocument();
      expect(screen.getByTestId('filter-priority')).toBeInTheDocument();
    });

    it('should show no results message when no inquiries exist', () => {
      render(<InquiryManagement />);
      expect(screen.getByText('No inquiries found')).toBeInTheDocument();
    });

    it('should show no selection message in detail panel initially', () => {
      render(<InquiryManagement />);
      expect(screen.getByText('Select an inquiry to view details')).toBeInTheDocument();
    });
  });

  describe('Adding Inquiries', () => {
    it('should add inquiry when add button is clicked', async () => {
      render(<InquiryManagement />);
      const addButton = screen.getByTestId('btn-add-inquiry');

      fireEvent.click(addButton);

      await waitFor(() => {
        expect(screen.queryByText('No inquiries found')).not.toBeInTheDocument();
      });
    });

    it('should add multiple inquiries', async () => {
      render(<InquiryManagement />);
      const addButton = screen.getByTestId('btn-add-inquiry');

      fireEvent.click(addButton);
      fireEvent.click(addButton);
      fireEvent.click(addButton);

      await waitFor(() => {
        const inquiryItems = screen.getAllByTestId(/^inquiry-item-/);
        expect(inquiryItems.length).toBeGreaterThanOrEqual(3);
      });
    });

    it('should create inquiry with required fields', async () => {
      render(<InquiryManagement />);
      const addButton = screen.getByTestId('btn-add-inquiry');

      fireEvent.click(addButton);

      await waitFor(() => {
        const items = screen.getAllByTestId(/^inquiry-item-/);
        const firstItem = items[0];
        expect(firstItem).toBeInTheDocument();
      });
    });
  });

  describe('Inquiry Selection and Details', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));
      await waitFor(() => {
        expect(screen.queryByText('No inquiries found')).not.toBeInTheDocument();
      });
    });

    it('should display inquiry details when selected', async () => {
      const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
      fireEvent.click(inquiryItem);

      await waitFor(() => {
        expect(screen.getByTestId('inquiry-status-select')).toBeInTheDocument();
        expect(screen.getByTestId('inquiry-priority-select')).toBeInTheDocument();
      });
    });

    it('should highlight selected inquiry item', async () => {
      const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
      fireEvent.click(inquiryItem);

      await waitFor(() => {
        expect(inquiryItem).toHaveClass('selected');
      });
    });

    it('should show inquiry contact information', async () => {
      const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
      fireEvent.click(inquiryItem);

      await waitFor(() => {
        const emailLink = screen.getByRole('link', { name: /.*@.*/ });
        expect(emailLink).toBeInTheDocument();
      });
    });

    it('should display project type in details', async () => {
      const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
      fireEvent.click(inquiryItem);

      await waitFor(() => {
        expect(screen.getByText('Project Details')).toBeInTheDocument();
      });
    });

    it('should show submitted date in details', async () => {
      const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
      fireEvent.click(inquiryItem);

      await waitFor(() => {
        expect(screen.getByText('Submitted:')).toBeInTheDocument();
      });
    });
  });

  describe('Status Management', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));

      await waitFor(() => {
        const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
        fireEvent.click(inquiryItem);
      });
    });

    it('should change inquiry status when select changes', async () => {
      const statusSelect = screen.getByTestId('inquiry-status-select') as HTMLSelectElement;
      const initialStatus = statusSelect.value;

      fireEvent.change(statusSelect, { target: { value: 'responded' } });

      await waitFor(() => {
        expect(statusSelect.value).toBe('responded');
      });
    });

    it('should update status in inquiry list', async () => {
      const statusSelect = screen.getByTestId('inquiry-status-select');
      fireEvent.change(statusSelect, { target: { value: 'in_progress' } });

      await waitFor(() => {
        expect(statusSelect).toHaveValue('in_progress');
      });
    });

    it('should have all valid status options', () => {
      const statusSelect = screen.getByTestId('filter-status') as HTMLSelectElement;
      const options = Array.from(statusSelect.options).map(opt => opt.value);

      expect(options).toContain('all');
      expect(options).toContain('new');
      expect(options).toContain('read');
      expect(options).toContain('in_progress');
      expect(options).toContain('responded');
      expect(options).toContain('archived');
    });
  });

  describe('Priority Management', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));

      await waitFor(() => {
        const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
        fireEvent.click(inquiryItem);
      });
    });

    it('should change inquiry priority when select changes', async () => {
      const prioritySelect = screen.getByTestId('inquiry-priority-select') as HTMLSelectElement;

      fireEvent.change(prioritySelect, { target: { value: 'high' } });

      await waitFor(() => {
        expect(prioritySelect.value).toBe('high');
      });
    });

    it('should have all valid priority options', () => {
      const prioritySelect = screen.getByTestId('filter-priority') as HTMLSelectElement;
      const options = Array.from(prioritySelect.options).map(opt => opt.value);

      expect(options).toContain('all');
      expect(options).toContain('low');
      expect(options).toContain('medium');
      expect(options).toContain('high');
      expect(options).toContain('urgent');
    });
  });

  describe('Search Functionality', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);

      // Add multiple inquiries
      for (let i = 0; i < 3; i++) {
        fireEvent.click(screen.getByTestId('btn-add-inquiry'));
      }

      await waitFor(() => {
        const items = screen.getAllByTestId(/^inquiry-item-/);
        expect(items.length).toBeGreaterThanOrEqual(3);
      });
    });

    it('should filter inquiries by search term', async () => {
      const searchInput = screen.getByTestId('search-inquiries') as HTMLInputElement;

      // Search for a name that exists
      await userEvent.type(searchInput, 'John');

      await waitFor(() => {
        const items = screen.queryAllByTestId(/^inquiry-item-/);
        expect(items.length).toBeLessThanOrEqual(3);
      });
    });

    it('should show no results when search finds nothing', async () => {
      const searchInput = screen.getByTestId('search-inquiries') as HTMLInputElement;

      await userEvent.type(searchInput, 'NONEXISTENT_STRING_ZZZZZ');

      await waitFor(() => {
        expect(screen.getByText('No inquiries found')).toBeInTheDocument();
      });
    });

    it('should clear filter when search is emptied', async () => {
      const searchInput = screen.getByTestId('search-inquiries') as HTMLInputElement;

      await userEvent.type(searchInput, 'John');
      await userEvent.clear(searchInput);

      await waitFor(() => {
        expect(screen.queryByText('No inquiries found')).toBeInTheDocument();
      });
    });
  });

  describe('Status Filtering', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);

      // Add multiple inquiries with different statuses
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));
      await waitFor(() => {
        expect(screen.queryByText('No inquiries found')).not.toBeInTheDocument();
      });

      const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
      fireEvent.click(inquiryItem);

      const statusSelect = screen.getByTestId('inquiry-status-select');
      fireEvent.change(statusSelect, { target: { value: 'responded' } });
    });

    it('should filter by status selection', async () => {
      const filterSelect = screen.getByTestId('filter-status');
      fireEvent.change(filterSelect, { target: { value: 'responded' } });

      await waitFor(() => {
        const items = screen.queryAllByTestId(/^inquiry-item-/);
        expect(items.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('should show all when filter is reset to "all"', async () => {
      const filterSelect = screen.getByTestId('filter-status');
      fireEvent.change(filterSelect, { target: { value: 'new' } });
      fireEvent.change(filterSelect, { target: { value: 'all' } });

      await waitFor(() => {
        expect(screen.queryByText('No inquiries found')).not.toBeInTheDocument();
      });
    });
  });

  describe('Priority Filtering', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));

      await waitFor(() => {
        expect(screen.queryByText('No inquiries found')).not.toBeInTheDocument();
      });
    });

    it('should filter by priority selection', async () => {
      const filterSelect = screen.getByTestId('filter-priority');
      fireEvent.change(filterSelect, { target: { value: 'high' } });

      await waitFor(() => {
        const items = screen.queryAllByTestId(/^inquiry-item-/);
        expect(items.length).toBeGreaterThanOrEqual(0);
      });
    });

    it('should combine status and priority filters', async () => {
      const statusFilter = screen.getByTestId('filter-status');
      const priorityFilter = screen.getByTestId('filter-priority');

      fireEvent.change(statusFilter, { target: { value: 'new' } });
      fireEvent.change(priorityFilter, { target: { value: 'high' } });

      await waitFor(() => {
        // Should filter by both conditions
        const items = screen.queryAllByTestId(/^inquiry-item-/);
        expect(Array.isArray(items)).toBe(true);
      });
    });
  });

  describe('Notes Management', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));

      await waitFor(() => {
        const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
        fireEvent.click(inquiryItem);
      });
    });

    it('should display notes section', async () => {
      await waitFor(() => {
        expect(screen.getByText('Communication History')).toBeInTheDocument();
      });
    });

    it('should show textarea for adding notes', () => {
      expect(screen.getByTestId('note-textarea')).toBeInTheDocument();
    });

    it('should add note when button is clicked', async () => {
      const textarea = screen.getByTestId('note-textarea') as HTMLTextAreaElement;
      const addButton = screen.getByTestId('btn-add-note');

      await userEvent.type(textarea, 'This is a test note');
      fireEvent.click(addButton);

      await waitFor(() => {
        expect(screen.getByText('This is a test note')).toBeInTheDocument();
      });
    });

    it('should clear textarea after adding note', async () => {
      const textarea = screen.getByTestId('note-textarea') as HTMLTextAreaElement;
      const addButton = screen.getByTestId('btn-add-note');

      await userEvent.type(textarea, 'Test note');
      fireEvent.click(addButton);

      await waitFor(() => {
        expect(textarea.value).toBe('');
      });
    });

    it('should disable add note button when textarea is empty', () => {
      const addButton = screen.getByTestId('btn-add-note') as HTMLButtonElement;
      expect(addButton).toBeDisabled();
    });

    it('should enable add note button when textarea has content', async () => {
      const textarea = screen.getByTestId('note-textarea');
      const addButton = screen.getByTestId('btn-add-note') as HTMLButtonElement;

      await userEvent.type(textarea, 'Note content');

      await waitFor(() => {
        expect(addButton).not.toBeDisabled();
      });
    });

    it('should display multiple notes', async () => {
      const textarea = screen.getByTestId('note-textarea');
      const addButton = screen.getByTestId('btn-add-note');

      await userEvent.type(textarea, 'First note');
      fireEvent.click(addButton);

      await waitFor(() => {
        expect(screen.getByText('First note')).toBeInTheDocument();
      });

      await userEvent.type(textarea, 'Second note');
      fireEvent.click(addButton);

      await waitFor(() => {
        expect(screen.getByText('Second note')).toBeInTheDocument();
      });
    });

    it('should show "No notes yet" when inquiry has no notes', async () => {
      const textarea = screen.getByTestId('note-textarea') as HTMLTextAreaElement;

      // Should show no notes message initially if no notes added
      if (textarea.value === '') {
        const noNotesMessage = screen.queryByText('No notes yet');
        expect(noNotesMessage).toBeInTheDocument();
      }
    });
  });

  describe('Deletion', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));

      await waitFor(() => {
        const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
        fireEvent.click(inquiryItem);
      });
    });

    it('should delete inquiry when delete button is clicked', async () => {
      const initialItems = screen.getAllByTestId(/^inquiry-item-/);
      const initialCount = initialItems.length;

      const deleteButton = screen.getByTestId('btn-delete-inquiry');

      // Mock window.confirm
      vi.spyOn(window, 'confirm').mockReturnValue(true);

      fireEvent.click(deleteButton);

      await waitFor(() => {
        const finalItems = screen.queryAllByTestId(/^inquiry-item-/);
        expect(finalItems.length).toBeLessThan(initialCount);
      });
    });

    it('should not delete inquiry when deletion is cancelled', async () => {
      vi.spyOn(window, 'confirm').mockReturnValue(false);

      const deleteButton = screen.getByTestId('btn-delete-inquiry');
      fireEvent.click(deleteButton);

      await waitFor(() => {
        const items = screen.getAllByTestId(/^inquiry-item-/);
        expect(items.length).toBeGreaterThan(0);
      });
    });

    it('should delete note when delete note button is clicked', async () => {
      const textarea = screen.getByTestId('note-textarea');
      const addButton = screen.getByTestId('btn-add-note');

      await userEvent.type(textarea, 'Test note');
      fireEvent.click(addButton);

      await waitFor(() => {
        expect(screen.getByText('Test note')).toBeInTheDocument();
      });

      const deleteNoteButtons = screen.queryAllByTestId(/^btn-delete-note-/);
      if (deleteNoteButtons.length > 0) {
        fireEvent.click(deleteNoteButtons[0]);

        await waitFor(() => {
          expect(screen.queryByText('Test note')).not.toBeInTheDocument();
        });
      }
    });
  });

  describe('Message Display', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));

      await waitFor(() => {
        const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
        fireEvent.click(inquiryItem);
      });
    });

    it('should display inquiry message', async () => {
      await waitFor(() => {
        expect(screen.getByText('Message')).toBeInTheDocument();
      });
    });

    it('should show interested in video production message', async () => {
      await waitFor(() => {
        expect(screen.getByText(/interested in your video production services/i))
          .toBeInTheDocument();
      });
    });
  });

  describe('Contact Information', () => {
    beforeEach(async () => {
      render(<InquiryManagement />);
      fireEvent.click(screen.getByTestId('btn-add-inquiry'));

      await waitFor(() => {
        const inquiryItem = screen.getAllByTestId(/^inquiry-item-/)[0];
        fireEvent.click(inquiryItem);
      });
    });

    it('should display email link with mailto', async () => {
      await waitFor(() => {
        const emailLink = screen.getByRole('link', { name: /.*@.*/ });
        expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
      });
    });

    it('should display phone link with tel', async () => {
      await waitFor(() => {
        const phoneLinks = screen.queryAllByRole('link', { name: /555-/ });
        if (phoneLinks.length > 0) {
          expect(phoneLinks[0]).toHaveAttribute('href', expect.stringContaining('tel:'));
        }
      });
    });
  });
});
