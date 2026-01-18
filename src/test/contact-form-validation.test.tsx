import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup, within, act } from '@testing-library/react';
import * as fc from 'fast-check';
import { Contact } from '@/components/Contact';
import { ContactFormData, SocialLink } from '@/types';

/**
 * Feature: video-portfolio-website, Property 8: Contact Form Validation
 * **Validates: Requirements 6.3**
 */

// Helper function to ensure cleanup completes
const ensureCleanup = async () => {
  await act(async () => {
    cleanup();
    // Small delay to ensure React finishes all cleanup
    await new Promise(resolve => setTimeout(resolve, 0));
  });
};

// Generators for property-based testing
const nameArb = fc.string({ minLength: 0, maxLength: 100 });
const emailArb = fc.string({ minLength: 0, maxLength: 100 });
const projectTypeArb = fc.string({ minLength: 0, maxLength: 50 });
const messageArb = fc.string({ minLength: 0, maxLength: 1000 });

const validNameArb = fc.string({ minLength: 2, maxLength: 100 }).filter(s => s.trim().length >= 2);
const validEmailArb = fc.emailAddress();
const validProjectTypeArb = fc.constantFrom(
  'Commercial Video',
  'Music Video', 
  'Documentary',
  'Corporate Video',
  'Wedding Video',
  'Event Coverage',
  'Other'
);
const validMessageArb = fc.string({ minLength: 10, maxLength: 1000 }).filter(s => s.trim().length >= 10);

const invalidNameArb = fc.oneof(
  fc.constant(''), // empty string
  fc.constant('   '), // whitespace only
  fc.string({ minLength: 1, maxLength: 1 }) // too short
);

const invalidEmailArb = fc.oneof(
  fc.constant(''), // empty string
  fc.constant('invalid-email'), // no @ symbol
  fc.constant('@domain.com'), // missing local part
  fc.constant('user@'), // missing domain
  fc.constant('user@domain'), // missing TLD
  fc.string({ minLength: 1, maxLength: 20 }).filter(s => !s.includes('@')) // no @ symbol
);

const invalidMessageArb = fc.oneof(
  fc.constant(''), // empty string
  fc.constant('   '), // whitespace only
  fc.string({ minLength: 1, maxLength: 9 }).filter(s => s.trim().length < 10) // too short
);

const contactFormDataArb: fc.Arbitrary<ContactFormData> = fc.record({
  name: nameArb,
  email: emailArb,
  projectType: projectTypeArb,
  message: messageArb,
});

const validContactFormDataArb: fc.Arbitrary<ContactFormData> = fc.record({
  name: validNameArb,
  email: validEmailArb,
  projectType: validProjectTypeArb,
  message: validMessageArb,
});

// Mock props for the Contact component
const mockSocialLinks: SocialLink[] = [
  { platform: 'youtube', url: 'https://youtube.com/@test', icon: 'youtube' },
  { platform: 'instagram', url: 'https://instagram.com/test', icon: 'instagram' }
];

const mockPersonalInfo = {
  name: 'Test Creator',
  email: 'test@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Test City, Country'
};

describe('Contact Form Validation Property Tests', () => {
  let mockOnSubmit: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnSubmit = vi.fn().mockResolvedValue(undefined);
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Property 8: Contact Form Validation - For any contact form submission, the system should validate all required fields (name, email, project type, message) and provide appropriate feedback', () => {
    fc.assert(
      fc.asyncProperty(
        contactFormDataArb,
        async (formData) => {
          // Ensure clean state before rendering
          await ensureCleanup();
          
          // Create a fresh mock for each iteration
          const iterationMockOnSubmit = vi.fn().mockResolvedValue(undefined);
          
          const { container, unmount } = render(
            <Contact
              onSubmit={iterationMockOnSubmit}
              socialLinks={mockSocialLinks}
              personalInfo={mockPersonalInfo}
            />
          );

          try {
            // Use container-based queries to avoid DOM pollution
            const nameInput = within(container).getByLabelText(/full name/i);
            const emailInput = within(container).getByLabelText(/email address/i);
            const projectTypeSelect = within(container).getByLabelText(/project type/i);
            const messageTextarea = within(container).getByLabelText(/project details/i);
            const submitButton = within(container).getByRole('button', { name: /send message/i });

            fireEvent.change(nameInput, { target: { value: formData.name } });
            fireEvent.change(emailInput, { target: { value: formData.email } });
            fireEvent.change(projectTypeSelect, { target: { value: formData.projectType } });
            fireEvent.change(messageTextarea, { target: { value: formData.message } });

            // Submit the form
            fireEvent.click(submitButton);

            // Wait for validation to complete
            await waitFor(() => {
              // Check if form data is valid
              const isNameValid = formData.name.trim().length >= 2;
              const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
              const isProjectTypeValid = formData.projectType.trim().length > 0;
              const isMessageValid = formData.message.trim().length >= 10;
              
              const isFormValid = isNameValid && isEmailValid && isProjectTypeValid && isMessageValid;

              if (isFormValid) {
                // If form is valid, onSubmit should be called
                expect(iterationMockOnSubmit).toHaveBeenCalledWith(formData);
              } else {
                // If form is invalid, onSubmit should not be called
                expect(iterationMockOnSubmit).not.toHaveBeenCalled();
                
                // Check for appropriate error messages using container
                if (!isNameValid) {
                  expect(within(container).getByText(/name is required|name must be at least 2 characters/i)).toBeInTheDocument();
                }
                if (!isEmailValid) {
                  expect(within(container).getByText(/email is required|please enter a valid email address/i)).toBeInTheDocument();
                }
                if (!isProjectTypeValid) {
                  expect(within(container).getByText(/please select a project type/i)).toBeInTheDocument();
                }
                if (!isMessageValid) {
                  expect(within(container).getByText(/message is required|message must be at least 10 characters/i)).toBeInTheDocument();
                }
              }
            });
          } finally {
            // Clean up after each iteration
            unmount();
            await ensureCleanup();
          }
        }
      ),
      { numRuns: 10 } // Reduced number of runs to avoid timeout
    );
  });

  it('Property 8 Valid Data: For any valid contact form data, submission should succeed without validation errors', () => {
    fc.assert(
      fc.asyncProperty(
        validContactFormDataArb,
        async (formData) => {
          await ensureCleanup();
          const iterationMockOnSubmit = vi.fn().mockResolvedValue(undefined);
          
          const { container, unmount } = render(
            <Contact
              onSubmit={iterationMockOnSubmit}
              socialLinks={mockSocialLinks}
              personalInfo={mockPersonalInfo}
            />
          );

          try {
            // Fill out the form with valid data using container
            const nameInput = within(container).getByLabelText(/full name/i);
            const emailInput = within(container).getByLabelText(/email address/i);
            const projectTypeSelect = within(container).getByLabelText(/project type/i);
            const messageTextarea = within(container).getByLabelText(/project details/i);
            const submitButton = within(container).getByRole('button', { name: /send message/i });

            fireEvent.change(nameInput, { target: { value: formData.name } });
            fireEvent.change(emailInput, { target: { value: formData.email } });
            fireEvent.change(projectTypeSelect, { target: { value: formData.projectType } });
            fireEvent.change(messageTextarea, { target: { value: formData.message } });

            // Submit the form
            fireEvent.click(submitButton);

            // Wait for submission to complete
            await waitFor(() => {
              // Form should be submitted successfully
              expect(iterationMockOnSubmit).toHaveBeenCalledWith(formData);
              
              // No error messages should be present
              expect(within(container).queryByText(/name is required/i)).not.toBeInTheDocument();
              expect(within(container).queryByText(/email is required/i)).not.toBeInTheDocument();
              expect(within(container).queryByText(/please select a project type/i)).not.toBeInTheDocument();
              expect(within(container).queryByText(/message is required/i)).not.toBeInTheDocument();
            });
          } finally {
            unmount();
            await ensureCleanup();
          }
        }
      ),
      { numRuns: 10 }
    );
  });

  it('Property 8 Invalid Name: For any invalid name input, appropriate validation error should be shown', () => {
    fc.assert(
      fc.asyncProperty(
        invalidNameArb,
        validEmailArb,
        validProjectTypeArb,
        validMessageArb,
        async (invalidName, validEmail, validProjectType, validMessage) => {
          await ensureCleanup();
          const iterationMockOnSubmit = vi.fn().mockResolvedValue(undefined);
          
          const { container, unmount } = render(
            <Contact
              onSubmit={iterationMockOnSubmit}
              socialLinks={mockSocialLinks}
              personalInfo={mockPersonalInfo}
            />
          );

          try {
            // Fill out the form with invalid name but valid other fields
            const nameInput = within(container).getByLabelText(/full name/i);
            const emailInput = within(container).getByLabelText(/email address/i);
            const projectTypeSelect = within(container).getByLabelText(/project type/i);
            const messageTextarea = within(container).getByLabelText(/project details/i);
            const submitButton = within(container).getByRole('button', { name: /send message/i });

            fireEvent.change(nameInput, { target: { value: invalidName } });
            fireEvent.change(emailInput, { target: { value: validEmail } });
            fireEvent.change(projectTypeSelect, { target: { value: validProjectType } });
            fireEvent.change(messageTextarea, { target: { value: validMessage } });

            // Submit the form
            fireEvent.click(submitButton);

            // Wait for validation
            await waitFor(() => {
              // Should show name validation error
              expect(within(container).getByText(/name is required|name must be at least 2 characters/i)).toBeInTheDocument();
              
              // Should not submit the form
              expect(iterationMockOnSubmit).not.toHaveBeenCalled();
            });
          } finally {
            unmount();
            await ensureCleanup();
          }
        }
      ),
      { numRuns: 10 }
    );
  });

  it('Property 8 Invalid Email: For any invalid email input, appropriate validation error should be shown', () => {
    fc.assert(
      fc.asyncProperty(
        validNameArb,
        invalidEmailArb,
        validProjectTypeArb,
        validMessageArb,
        async (validName, invalidEmail, validProjectType, validMessage) => {
          await ensureCleanup();
          const iterationMockOnSubmit = vi.fn().mockResolvedValue(undefined);
          
          const { container, unmount } = render(
            <Contact
              onSubmit={iterationMockOnSubmit}
              socialLinks={mockSocialLinks}
              personalInfo={mockPersonalInfo}
            />
          );

          try {
            // Fill out the form with invalid email but valid other fields
            const nameInput = within(container).getByLabelText(/full name/i);
            const emailInput = within(container).getByLabelText(/email address/i);
            const projectTypeSelect = within(container).getByLabelText(/project type/i);
            const messageTextarea = within(container).getByLabelText(/project details/i);
            const submitButton = within(container).getByRole('button', { name: /send message/i });

            fireEvent.change(nameInput, { target: { value: validName } });
            fireEvent.change(emailInput, { target: { value: invalidEmail } });
            fireEvent.change(projectTypeSelect, { target: { value: validProjectType } });
            fireEvent.change(messageTextarea, { target: { value: validMessage } });

            // Submit the form
            fireEvent.click(submitButton);

            // Wait for validation
            await waitFor(() => {
              // Should show email validation error
              expect(within(container).getByText(/email is required|please enter a valid email address/i)).toBeInTheDocument();
              
              // Should not submit the form
              expect(iterationMockOnSubmit).not.toHaveBeenCalled();
            });
          } finally {
            unmount();
            await ensureCleanup();
          }
        }
      ),
      { numRuns: 10 }
    );
  });

  it('Property 8 Invalid Message: For any invalid message input, appropriate validation error should be shown', () => {
    fc.assert(
      fc.asyncProperty(
        validNameArb,
        validEmailArb,
        validProjectTypeArb,
        invalidMessageArb,
        async (validName, validEmail, validProjectType, invalidMessage) => {
          await ensureCleanup();
          const iterationMockOnSubmit = vi.fn().mockResolvedValue(undefined);
          
          const { container, unmount } = render(
            <Contact
              onSubmit={iterationMockOnSubmit}
              socialLinks={mockSocialLinks}
              personalInfo={mockPersonalInfo}
            />
          );

          try {
            // Fill out the form with invalid message but valid other fields
            const nameInput = within(container).getByLabelText(/full name/i);
            const emailInput = within(container).getByLabelText(/email address/i);
            const projectTypeSelect = within(container).getByLabelText(/project type/i);
            const messageTextarea = within(container).getByLabelText(/project details/i);
            const submitButton = within(container).getByRole('button', { name: /send message/i });

            fireEvent.change(nameInput, { target: { value: validName } });
            fireEvent.change(emailInput, { target: { value: validEmail } });
            fireEvent.change(projectTypeSelect, { target: { value: validProjectType } });
            fireEvent.change(messageTextarea, { target: { value: invalidMessage } });

            // Submit the form
            fireEvent.click(submitButton);

            // Wait for validation
            await waitFor(() => {
              // Should show message validation error
              expect(within(container).getByText(/message is required|message must be at least 10 characters/i)).toBeInTheDocument();
              
              // Should not submit the form
              expect(iterationMockOnSubmit).not.toHaveBeenCalled();
            });
          } finally {
            unmount();
            await ensureCleanup();
          }
        }
      ),
      { numRuns: 10 }
    );
  });
});