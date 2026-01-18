import { SiteConfig, Achievement } from '@/types';

// Sample achievements data
export const sampleAchievements: Achievement[] = [
  {
    title: '100+ Wedding Films Shot & Edited',
    description: 'Successfully shot and edited over 100 cinematic wedding films including highlights, teasers, and full-length videos with professional color grading.',
    year: 2024
  },
  {
    title: 'Senior Position at Bombey Digitals',
    description: 'Promoted to Senior Video Editor & Cinematographer, leading wedding cinematography, model & fashion shoots, and cinematic storytelling projects.',
    year: 2021
  },
  {
    title: 'Professional Video Editing Trainer',
    description: 'Developed expertise in teaching photography and video editing, providing hands-on training to beginners in Adobe Premiere Pro, After Effects, and DaVinci Resolve.',
    year: 2021
  },
  {
    title: '10+ Years Video Production Experience',
    description: 'Accumulated over a decade of expertise in wedding films, model and fashion shoots, and cinematic storytelling with end-to-end production management.',
    year: 2014
  },
  {
    title: 'Wedding Film Teaser Delivery Speed',
    description: 'Specialized in delivering cinematic wedding teasers within 48-72 hours while maintaining professional color grading and emotional sequencing.',
    year: 2023
  }
];

// Sample skills data
export const sampleSkills: string[] = [
  'Video Editing (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve)',
  'Cinematography (Wedding Films, Pre-wedding Shoots)',
  'Motion Graphics & After Effects',
  'Color Grading & Color Correction',
  'Audio Sync & Audio Cleanup',
  'DSLR/Mirrorless Camera Operation',
  'Gimbal & Lighting Setups',
  'Cinematic Transitions & Storytelling',
  'Instagram Reels & YouTube Optimization',
  'Wedding & Fashion Videography',
  'Client Collaboration & Project Management',
  'Content Optimization for Multiple Platforms'
];

// Sample profile images
export const sampleProfileImages: string[] = [
  '/images/profile-1.JPG',
  '/images/profile-2.jpg',
  '/images/profile-3.jpg'
];

// Load YouTube configuration from environment variables
const getYouTubeConfig = () => {
  return {
    channelId: import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UCYourChannelId',
    playlistId: import.meta.env.VITE_YOUTUBE_PLAYLIST_ID || 'PLYourPlaylistId',
    apiKey: import.meta.env.VITE_YOUTUBE_API_KEY || '',
  };
};

export const siteConfig: SiteConfig = {
  personal: {
    name: 'Gagan Rajput',
    tagline: 'Video Editor & Cinematographer',
    bio: 'Experienced Video Editor and Cinematographer with 10+ years of expertise in wedding films, model and fashion shoots, and cinematic storytelling. Highly skilled in end-to-end video production including shooting, editing, color grading, and final delivery with a strong eye for emotions and brand aesthetics. Specialized in delivering cinematic content across YouTube, Instagram Reels, and professional film formats.',
    email: 'rgagan2601@gmail.com',
    phone: '+91-7440640514',
    location: 'India',
  },
  social: {
    youtube: 'https://youtube.com/playlist?list=PLcIf6CDZreeVNLjlZ2ja4jRFR5FYKI8Rj',
    instagram: 'https://www.instagram.com/captures__you/',
    linkedin: '',
    twitter: '',
  },
  youtube: getYouTubeConfig(),
  seo: {
    title: 'Gagan Rajput - Video Editor & Cinematographer Portfolio',
    description: 'Professional video portfolio showcasing 10+ years of expertise in wedding films, cinematography, and cinematic storytelling. Award-winning editor with specialization in color grading, motion graphics, and emotional visual narratives.',
    keywords: [
      'video editor',
      'cinematographer',
      'wedding films',
      'video production',
      'color grading',
      'adobe premiere pro',
      'final cut pro',
      'davinci resolve',
      'cinematic storytelling',
      'fashion videography',
      'instagram reels',
      'youtube videos',
      'wedding cinematography',
      'motion graphics'
    ],
    ogImage: '/og-image.jpg',
  },
};

// Helper function to get site configuration
export const getSiteConfig = (): SiteConfig => {
  return siteConfig;
};

// Helper function to update site configuration (for admin panel)
export const updateSiteConfig = (updates: Partial<SiteConfig>): SiteConfig => {
  // In a real application, this would persist to a backend/database
  // For now, we'll just return the merged config
  return {
    ...siteConfig,
    ...updates,
    personal: {
      ...siteConfig.personal,
      ...(updates.personal || {}),
    },
    social: {
      ...siteConfig.social,
      ...(updates.social || {}),
    },
    youtube: {
      ...siteConfig.youtube,
      ...(updates.youtube || {}),
    },
    seo: {
      ...siteConfig.seo,
      ...(updates.seo || {}),
    },
  };
};

// Helper function to validate site configuration
export const validateSiteConfig = (config: SiteConfig): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Validate personal information
  if (!config.personal.name || config.personal.name.trim() === '') {
    errors.push('Personal name is required');
  }
  if (!config.personal.email || !config.personal.email.includes('@')) {
    errors.push('Valid email is required');
  }
  if (!config.personal.tagline || config.personal.tagline.trim() === '') {
    errors.push('Tagline is required');
  }

  // Validate social links
  const urlPattern = /^https?:\/\/.+/;
  if (config.social.youtube && !urlPattern.test(config.social.youtube)) {
    errors.push('YouTube URL must be a valid URL');
  }
  if (config.social.instagram && !urlPattern.test(config.social.instagram)) {
    errors.push('Instagram URL must be a valid URL');
  }
  if (config.social.linkedin && !urlPattern.test(config.social.linkedin)) {
    errors.push('LinkedIn URL must be a valid URL');
  }

  // Validate SEO
  if (!config.seo.title || config.seo.title.trim() === '') {
    errors.push('SEO title is required');
  }
  if (!config.seo.description || config.seo.description.trim() === '') {
    errors.push('SEO description is required');
  }
  if (!config.seo.keywords || config.seo.keywords.length === 0) {
    errors.push('At least one SEO keyword is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

export default siteConfig;