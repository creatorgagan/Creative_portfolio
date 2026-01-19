# Email Integration Setup Guide

Your contact form is now connected to send emails directly to **creatorgagan2001@gmail.com**.

## ✅ What's Already Done

- ✅ Contact form enhanced to send emails
- ✅ Automatic confirmation emails sent to users
- ✅ EmailJS service integrated
- ✅ Environment variables configured

## 🔧 Setup Steps (5 minutes)

### Step 1: Sign Up for EmailJS

1. Go to **https://www.emailjs.com/**
2. Click **Sign Up** and create a free account
3. Verify your email

### Step 2: Connect Gmail

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** as the service provider
4. Click **Connect Account** and authorize Gmail
5. Copy the **Service ID** (should be: `service_cinematographer`)

### Step 3: Get Your Public Key

1. In EmailJS Dashboard, go to **Account** (top right)
2. Copy your **Public Key**
3. Paste it in `.env` file:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### Step 4: Create Email Templates

#### Template 1 - Send to Your Gmail (Admin Notification)

1. Go to **Email Templates** in EmailJS Dashboard
2. Click **Create New Template**
3. Set **Template Name**: `template_contact_form`
4. Set **From Name**: `{{from_name}}`
5. Set **To Email**: `creatorgagan2001@gmail.com`
6. Set **Subject**: `New Project Inquiry from {{from_name}}`
7. Set **Email Content**:
   ```
   Hello,
   
   You have received a new project inquiry:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Project Type: {{project_type}}
   
   Message:
   {{message}}
   
   Reply-to: {{from_email}}
   
   Best regards,
   Your Portfolio Contact Form
   ```
8. Click **Save Template**

#### Template 2 - Confirmation Email to User

1. Click **Create New Template**
2. Set **Template Name**: `template_confirmation`
3. Set **From Name**: `Cinematographer Gagan`
4. Set **To Email**: `{{to_email}}`
5. Set **Subject**: `Thank You for Your Inquiry`
6. Set **Email Content**:
   ```
   Hi {{user_name}},
   
   Thank you for reaching out! I received your inquiry about a {{project_type}} project.
   
   I'll review your project details and get back to you within 24 hours with a personalized response.
   
   In the meantime, feel free to check out my portfolio and previous work.
   
   Looking forward to collaborating with you!
   
   Best regards,
   Gagan
   Cinematographer
   ```
7. Click **Save Template**

### Step 5: Test the Form

1. Restart your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Scroll to the **Contact** section
4. Fill out the form and click **Send Message**
5. Check your Gmail inbox - you should receive the message!

## 📧 Email Flow

**When someone submits the contact form:**

1. ✉️ Email is sent to your Gmail: `creatorgagan2001@gmail.com`
2. ✉️ Confirmation email is sent to the user's email address
3. ✅ Success message displayed on the website

## 🔒 Security

- Your EmailJS Public Key is safe to use in frontend code
- Gmail credentials are managed through EmailJS (you authorize once)
- No passwords or sensitive data stored in your repository

## 📋 Environment Variables

Your `.env` file now contains:

```
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=service_cinematographer
VITE_EMAILJS_TEMPLATE_ID=template_contact_form
```

## ✨ Features

- ✅ Form validation before sending
- ✅ Loading state while sending
- ✅ Success/error messages
- ✅ User confirmation emails
- ✅ Admin notifications to your Gmail
- ✅ Professional email templates

## 🆘 Troubleshooting

**"EmailJS public key is not configured"**
- Add your public key to `.env` file
- Restart the dev server

**"Emails not arriving"**
- Check .env file has correct Public Key
- Verify Service ID and Template IDs in EmailJS
- Check Gmail spam folder
- Check EmailJS Dashboard for errors

**"Form still not sending after setup"**
- Reload the page after updating .env
- Clear browser cache
- Check browser console for errors (F12)

## 📞 Next Steps

After setup is complete:
1. Test with a real inquiry
2. Customize email templates with your branding
3. Deploy to production (Vercel/Netlify will load .env automatically)

---

**Setup Time**: ~5 minutes  
**Cost**: FREE (EmailJS has generous free tier)  
**Result**: Professional email system without backend code!
