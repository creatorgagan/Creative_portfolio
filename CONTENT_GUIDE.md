# Content Management Guide

This guide explains how to configure and manage content for your video portfolio website.

## Table of Contents

1. [Site Configuration](#site-configuration)
2. [Video Content Management](#video-content-management)
3. [YouTube Integration](#youtube-integration)
4. [Social Media Links](#social-media-links)
5. [SEO Configuration](#seo-configuration)

## Site Configuration

### Personal Information

Edit `src/data/siteConfig.ts` to update your personal information:

```typescript
personal: {
  name: 'Your Name',
  tagline: 'Your Professional Title',
  bio: 'Your professional bio...',
  email: 'your@email.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
}
```

### Achievements and Skills

Update your achievements and skills in the same file:

```typescript
export const sampleAchievements: Achievement[] = [
  {
    title: 'Your Achievement',
    description: 'Description of the achievement',
    year: 2024
  },
  // Add more achievements...
];

export const sampleSkills: string[] = [
  'Skill 1',
  'Skill 2',
  // Add more skills...
];
```

## Video Content Management

### Adding Videos

Edit `src/data/sampleVideos.ts` to add your video content:

```typescript
{
  id: 'unique-video-id',
  title: 'Video Title',
  description: 'Detailed description of your video',
  thumbnail: 'https://your-thumbnail-url.jpg',
  videoUrl: '/videos/your-video.mp4',
  category: VideoCategory.COMMERCIAL, // or PERSONAL, DOCUMENTARY, MUSIC_VIDEO, OTHER
  tags: ['tag1', 'tag2', 'tag3'],
  createdDate: new Date('2024-01-15'),
  featured: true, // Set to true to feature on homepage
  duration: 180, // Duration in seconds
  viewCount: 1250 // Optional view count
}
```

### Video Categories

Available categories:
- `VideoCategory.COMMERCIAL` - Commercial projects and brand work
- `VideoCategory.PERSONAL` - Personal projects and creative work
- `VideoCategory.DOCUMENTARY` - Documentary films and shorts
- `VideoCategory.MUSIC_VIDEO` - Music videos
- `VideoCategory.OTHER` - Other video content

### Featured Videos

Set `featured: true` for videos you want to highlight on your homepage. Featured videos appear prominently in the gallery.

## YouTube Integration

### Setup

1. **Get YouTube API Key:**
   - Go to [Google Cloud Console](https://console.developers.google.com/)
   - Create a new project or select existing one
   - Enable YouTube Data API v3
   - Create credentials (API Key)
   - Copy the API key

2. **Find Your Channel ID:**
   - Go to [YouTube Advanced Settings](https://www.youtube.com/account_advanced)
   - Copy your Channel ID

3. **Find Your Playlist ID:**
   - Go to your playlist on YouTube
   - The URL will look like: `https://www.youtube.com/playlist?list=PLAYLIST_ID`
   - Copy the `PLAYLIST_ID` part

4. **Configure Environment Variables:**
   - Copy `.env.example` to `.env`
   - Add your credentials:

```bash
VITE_YOUTUBE_API_KEY=your_api_key_here
VITE_YOUTUBE_CHANNEL_ID=your_channel_id_here
VITE_YOUTUBE_PLAYLIST_ID=your_playlist_id_here
```

### Adding YouTube Videos

To add YouTube videos to your portfolio, include the `youtubeId` field:

```typescript
{
  id: 'youtube-VIDEO_ID',
  title: 'YouTube Video Title',
  description: 'Video description',
  thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
  youtubeId: 'VIDEO_ID', // YouTube video ID
  category: VideoCategory.PERSONAL,
  tags: ['youtube', 'tag2'],
  createdDate: new Date('2024-01-08'),
  featured: true,
  duration: 212,
  viewCount: 1500000
}
```

## Social Media Links

Configure your social media profiles in `src/data/siteConfig.ts`:

```typescript
social: {
  youtube: 'https://youtube.com/@yourchannel',
  instagram: 'https://instagram.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
}
```

Leave any field empty or remove it if you don't want to display that social link.

## SEO Configuration

### Meta Tags

Configure SEO settings in `src/data/siteConfig.ts`:

```typescript
seo: {
  title: 'Your Portfolio Title',
  description: 'Your portfolio description for search engines',
  keywords: [
    'video portfolio',
    'videographer',
    'your specialty',
    // Add relevant keywords
  ],
  ogImage: '/og-image.jpg', // Open Graph image for social sharing
}
```

### Open Graph Image

Place your Open Graph image (recommended size: 1200x630px) in the `public` folder as `og-image.jpg`.

### Sitemap

The sitemap is automatically generated and available at `/sitemap.xml`. Update it in `public/sitemap.xml` if you add new pages.

## Content Management Utilities

The project includes utility functions for managing content programmatically:

```typescript
import { 
  videoContentManager, 
  siteConfigManager,
  contentIntegration 
} from '@/utils/contentManagement';

// Get all videos
const videos = videoContentManager.getAllVideos();

// Filter videos by category
const commercialVideos = videoContentManager.filterVideos({ 
  category: VideoCategory.COMMERCIAL 
});

// Search videos
const searchResults = videoContentManager.filterVideos({ 
  searchQuery: 'brand' 
});

// Get site configuration
const config = siteConfigManager.getConfig();

// Get featured content
const featured = contentIntegration.getFeaturedContent();
```

## Best Practices

1. **Video Thumbnails:** Use high-quality thumbnails (recommended: 1920x1080px)
2. **Descriptions:** Write detailed, engaging descriptions for better SEO
3. **Tags:** Use relevant tags to improve searchability
4. **Featured Content:** Feature your best 3-5 videos on the homepage
5. **Regular Updates:** Keep your portfolio updated with recent work
6. **YouTube Integration:** Leverage YouTube for hosting to save bandwidth
7. **SEO Keywords:** Use specific, relevant keywords for your niche

## Troubleshooting

### YouTube Videos Not Loading

- Verify your API key is correct in `.env`
- Check that YouTube Data API v3 is enabled in Google Cloud Console
- Ensure your API key has no restrictions that block your domain
- Check browser console for specific error messages

### Videos Not Displaying

- Verify video URLs are correct
- Check that thumbnail URLs are accessible
- Ensure video IDs are unique
- Validate that the category is a valid VideoCategory enum value

### Configuration Not Updating

- Clear browser cache and reload
- Restart the development server
- Check for TypeScript errors in the console
- Verify the configuration file syntax is correct

## Support

For additional help or questions, refer to the main README.md or create an issue in the project repository.
