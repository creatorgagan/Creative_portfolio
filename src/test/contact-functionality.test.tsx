import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Contact } from '@/components/Contact';
import { ContactFormData, SocialLink } from '@/types';

describe('Contact Component Unit Tests', () => {
  const mockSocialLinks: SocialLink[] = [
    { platform: 'youtube', url: 'https://youtube.com/@test', icon: 'youtube' },
    { platform: 'instagram', url: 'https://instagram.com/test', icon: 'instagram' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/test', icon: 'linkedin' },
    { platform: 'twitter', url: 'https://twitter.com/test', icon: 'twitter' }
  ];

  const mockPersonalInfo = {
    name: 'Test Creator',
    email: 'test@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Test City, Country'
  };

  let mockOnSubmit: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnSubmit = vi.fn().mockResolvedValue(undefined);
  });

  describe('Form Field Validation and Submission', () => {
    it('should display all required form fields', () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/project type/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/project details/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('should show validation errors for empty required fields', async () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const submitButton = screen.getByRole('button', { name: /send message/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/please select a project type/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should show validation error for invalid email format', async () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const emailInput = screen.getByLabelText(/email address/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should show validation error for name that is too short', async () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(nameInput, { target: { value: 'A' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should show validation error for message that is too short', async () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const messageTextarea = screen.getByLabelText(/project details/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(messageTextarea, { target: { value: 'Short' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should submit form successfully with valid data', async () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const validFormData: ContactFormData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        projectType: 'Commercial Video',
        message: 'I would like to discuss a commercial video project for my business.'
      };

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email address/i);
      const projectTypeSelect = screen.getByLabelText(/project type/i);
      const messageTextarea = screen.getByLabelText(/project details/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(nameInput, { target: { value: validFormData.name } });
      fireEvent.change(emailInput, { target: { value: validFormData.email } });
      fireEvent.change(projectTypeSelect, { target: { value: validFormData.projectType } });
      fireEvent.change(messageTextarea, { target: { value: validFormData.message } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith(validFormData);
      });
    });

    it('should show success message after successful submission', async () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const validFormData: ContactFormData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        projectType: 'Commercial Video',
        message: 'I would like to discuss a commercial video project for my business.'
      };

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email address/i);
      const projectTypeSelect = screen.getByLabelText(/project type/i);
      const messageTextarea = screen.getByLabelText(/project details/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(nameInput, { target: { value: validFormData.name } });
      fireEvent.change(emailInput, { target: { value: validFormData.email } });
      fireEvent.change(projectTypeSelect, { target: { value: validFormData.projectType } });
      fireEvent.change(messageTextarea, { target: { value: validFormData.message } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
      });
    });

    it('should clear form fields after successful submission', async () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const validFormData: ContactFormData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        projectType: 'Commercial Video',
        message: 'I would like to discuss a commercial video project for my business.'
      };

      const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;
      const projectTypeSelect = screen.getByLabelText(/project type/i) as HTMLSelectElement;
      const messageTextarea = screen.getByLabelText(/project details/i) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(nameInput, { target: { value: validFormData.name } });
      fireEvent.change(emailInput, { target: { value: validFormData.email } });
      fireEvent.change(projectTypeSelect, { target: { value: validFormData.projectType } });
      fireEvent.change(messageTextarea, { target: { value: validFormData.message } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(projectTypeSelect.value).toBe('');
        expect(messageTextarea.value).toBe('');
      });
    });

    it('should show error message when submission fails', async () => {
      const mockOnSubmitError = vi.fn().mockRejectedValue(new Error('Submission failed'));

      render(
        <Contact
          onSubmit={mockOnSubmitError}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const validFormData: ContactFormData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        projectType: 'Commercial Video',
        message: 'I would like to discuss a commercial video project for my business.'
      };

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email address/i);
      const projectTypeSelect = screen.getByLabelText(/project type/i);
      const messageTextarea = screen.getByLabelText(/project details/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(nameInput, { target: { value: validFormData.name } });
      fireEvent.change(emailInput, { target: { value: validFormData.email } });
      fireEvent.change(projectTypeSelect, { target: { value: validFormData.projectType } });
      fireEvent.change(messageTextarea, { target: { value: validFormData.message } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/sorry, there was an error sending your message/i)).toBeInTheDocument();
      });
    });

    it('should disable submit button while submitting', async () => {
      // Create a mock that resolves after a delay
      const mockOnSubmitDelay = vi.fn(() => new Promise(resolve => setTimeout(resolve, 100)));

      render(
        <Contact
          onSubmit={mockOnSubmitDelay}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const validFormData: ContactFormData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        projectType: 'Commercial Video',
        message: 'I would like to discuss a commercial video project for my business.'
      };

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email address/i);
      const projectTypeSelect = screen.getByLabelText(/project type/i);
      const messageTextarea = screen.getByLabelText(/project details/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(nameInput, { target: { value: validFormData.name } });
      fireEvent.change(emailInput, { target: { value: validFormData.email } });
      fireEvent.change(projectTypeSelect, { target: { value: validFormData.projectType } });
      fireEvent.change(messageTextarea, { target: { value: validFormData.message } });

      fireEvent.click(submitButton);

      // Check that button is disabled and shows "Sending..." text
      expect(submitButton).toBeDisabled();
      expect(screen.getByText(/sending.../i)).toBeInTheDocument();

      // Wait for submission to complete
      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });
  });

  describe('Social Media Links and Contact Information Display', () => {
    it('should display all provided social media links', () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      mockSocialLinks.forEach(link => {
        const linkElement = screen.getByRole('link', { name: new RegExp(link.platform, 'i') });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link.url);
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    it('should display professional contact information', () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      // Check email display and link
      const emailLink = screen.getByRole('link', { name: mockPersonalInfo.email });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', `mailto:${mockPersonalInfo.email}`);

      // Check phone display and link (if provided)
      if (mockPersonalInfo.phone) {
        const phoneLink = screen.getByRole('link', { name: mockPersonalInfo.phone });
        expect(phoneLink).toBeInTheDocument();
        expect(phoneLink).toHaveAttribute('href', `tel:${mockPersonalInfo.phone}`);
      }

      // Check location display
      expect(screen.getByText(mockPersonalInfo.location)).toBeInTheDocument();
    });

    it('should handle missing phone number gracefully', () => {
      const personalInfoWithoutPhone = {
        ...mockPersonalInfo,
        phone: undefined
      };

      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={personalInfoWithoutPhone}
        />
      );

      // Phone contact section should not be rendered
      expect(screen.queryByText(/phone/i, { selector: 'p.font-medium' })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: /phone/i })).not.toBeInTheDocument();
      
      // But email and location should still be there
      expect(screen.getByText(personalInfoWithoutPhone.email)).toBeInTheDocument();
      expect(screen.getByText(personalInfoWithoutPhone.location)).toBeInTheDocument();
    });

    it('should display response time information', () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      expect(screen.getByText(/response time/i)).toBeInTheDocument();
      expect(screen.getByText(/24 hours/i)).toBeInTheDocument();
      expect(screen.getByText(/preferred contact method/i)).toBeInTheDocument();
    });

    it('should display all project type options', () => {
      render(
        <Contact
          onSubmit={mockOnSubmit}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const projectTypeSelect = screen.getByLabelText(/project type/i);
      
      const expectedOptions = [
        'Commercial Video',
        'Music Video',
        'Documentary',
        'Corporate Video',
        'Wedding Video',
        'Event Coverage',
        'Other'
      ];

      expectedOptions.forEach(option => {
        expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
      });
    });
  });

  describe('Error Handling for Form Submission', () => {
    it('should handle network errors gracefully', async () => {
      const mockOnSubmitNetworkError = vi.fn().mockRejectedValue(new Error('Network error'));

      render(
        <Contact
          onSubmit={mockOnSubmitNetworkError}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const validFormData: ContactFormData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        projectType: 'Commercial Video',
        message: 'I would like to discuss a commercial video project for my business.'
      };

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email address/i);
      const projectTypeSelect = screen.getByLabelText(/project type/i);
      const messageTextarea = screen.getByLabelText(/project details/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      fireEvent.change(nameInput, { target: { value: validFormData.name } });
      fireEvent.change(emailInput, { target: { value: validFormData.email } });
      fireEvent.change(projectTypeSelect, { target: { value: validFormData.projectType } });
      fireEvent.change(messageTextarea, { target: { value: validFormData.message } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/sorry, there was an error sending your message/i)).toBeInTheDocument();
        expect(screen.getByText(/please try again or contact me directly/i)).toBeInTheDocument();
      });

      // Form should not be cleared on error
      expect((nameInput as HTMLInputElement).value).toBe(validFormData.name);
      expect((emailInput as HTMLInputElement).value).toBe(validFormData.email);
    });

    it('should allow retry after submission error', async () => {
      let callCount = 0;
      const mockOnSubmitRetry = vi.fn().mockImplementation(() => {
        callCount++;
        if (callCount === 1) {
          return Promise.reject(new Error('First attempt failed'));
        }
        return Promise.resolve();
      });

      render(
        <Contact
          onSubmit={mockOnSubmitRetry}
          socialLinks={mockSocialLinks}
          personalInfo={mockPersonalInfo}
        />
      );

      const validFormData: ContactFormData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        projectType: 'Commercial Video',
        message: 'I would like to discuss a commercial video project for my business.'
      };

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email address/i);
      const projectTypeSelect = screen.getByLabelText(/project type/i);
      const messageTextarea = screen.getByLabelText(/project details/i);
      const submitButton = screen.getByRole('button', { name: /send message/i });

      // Fill form
      fireEvent.change(nameInput, { target: { value: validFormData.name } });
      fireEvent.change(emailInput, { target: { value: validFormData.email } });
      fireEvent.change(projectTypeSelect, { target: { value: validFormData.projectType } });
      fireEvent.change(messageTextarea, { target: { value: validFormData.message } });

      // First attempt - should fail
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/sorry, there was an error sending your message/i)).toBeInTheDocument();
      });

      // Second attempt - should succeed
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
      });

      expect(mockOnSubmitRetry).toHaveBeenCalledTimes(2);
    });
  });
});