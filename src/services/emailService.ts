import emailjs from '@emailjs/browser';

// Get configuration from environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cinematographer';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact_form';
const RECIPIENT_EMAIL = 'creatorgagan2001@gmail.com';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  if (!EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS public key is not configured. Please set VITE_EMAILJS_PUBLIC_KEY in .env');
    return;
  }
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

export interface EmailData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export const sendContactEmail = async (formData: EmailData): Promise<void> => {
  try {
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Alternative: Send email to user confirmation
export const sendConfirmationEmail = async (formData: EmailData): Promise<void> => {
  try {
    const confirmationParams = {
      to_email: formData.email,
      from_name: 'Cinematographer Gagan',
      user_name: formData.name,
      message: `Thank you for reaching out! We received your ${formData.projectType} inquiry and will get back to you soon.`,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_confirmation', // Confirmation template
      confirmationParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    // Don't throw - this is optional
  }
};
