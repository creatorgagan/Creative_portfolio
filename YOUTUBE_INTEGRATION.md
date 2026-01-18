# YouTube Video Integration Guide

Your portfolio now has full YouTube integration! Here's how to use it:

## 🎥 Components Available

### 1. **YouTubeEmbed** - Single Video Embed
Display a single YouTube video with thumbnail and play button.

```tsx
import YouTubeEmbed from '@/components/YouTube/YouTubeEmbed';

<YouTubeEmbed
  videoId="BM2Tgufeshg"
  title="Mera Ishq : Jot & Vin's Love Story"
  thumbnail="https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg"
  width={560}
  height={315}
/>
```

**Features:**
- ✅ Lazy loads - Shows thumbnail until clicked
- ✅ Responsive aspect ratio (16:9)
- ✅ Custom thumbnail support
- ✅ Keyboard accessible (Enter/Space to play)
- ✅ Play button overlay with hover effect
- ✅ Full iframe embed with all YouTube features

---

### 2. **YouTubeSection** - Videos Grid
Display multiple YouTube videos in a responsive grid.

```tsx
import YouTubeSection from '@/components/YouTube/YouTubeVideosSection';
import { VideoItem, VideoCategory } from '@/types';

const videos: VideoItem[] = [
  {
    id: 'video-1',
    youtubeId: 'BM2Tgufeshg',
    title: 'Mera Ishq : Jot & Vin\'s Love Story',
    description: 'Cinematic wedding film capturing emotions...',
    thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
    category: VideoCategory.COMMERCIAL,
    tags: ['wedding', 'cinematic', 'love-story'],
    createdDate: new Date(),
    featured: true,
    duration: 480,
    viewCount: 1250,
  },
];

<YouTubeSection
  title="Wedding Cinematics"
  description="Explore our collection of wedding films"
  videos={videos}
  gridCols={3}  // 1, 2, or 3 columns
/>
```

**Features:**
- ✅ Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- ✅ Video metadata display (duration, view count)
- ✅ Tags display
- ✅ Hover effects
- ✅ Shows video description
- ✅ Customizable grid columns

---

### 3. **VideoPlayer** - Full-Screen Player
Your existing VideoPlayer already supports YouTube!

```tsx
import { VideoItem } from '@/types';

const video: VideoItem = {
  id: 'video-1',
  youtubeId: 'BM2Tgufeshg',
  title: 'Mera Ishq : Jot & Vin\'s Love Story',
  description: '...',
  thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
  category: 'commercial',
  tags: ['wedding'],
  createdDate: new Date(),
  featured: true,
};

// VideoPlayer will automatically play it
<VideoPlayer video={video} isOpen={true} onClose={() => {}} />
```

**Features:**
- ✅ Keyboard controls (Space to play/pause, arrows to navigate)
- ✅ Volume control
- ✅ Full-screen mode
- ✅ Playlist navigation (prev/next)
- ✅ Auto-detects YouTube URLs

---

## 📺 HTML Structure Generated

The YouTube components generate HTML similar to your reference:

```html
<div class="sqs-video-wrapper video-none" data-provider-name="YouTube">
  <div class="intrinsic">
    <div class="intrinsic-inner" style="padding-bottom: 56.25%;">
      <!-- Thumbnail + Play Button (shown before playing) -->
      <div class="sqs-video-overlay">
        <img src="https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg" />
        <div class="sqs-video-icon">
          <!-- Play button -->
        </div>
      </div>
      
      <!-- YouTube iframe (shown after clicking play) -->
      <iframe 
        src="https://www.youtube.com/embed/BM2Tgufeshg?autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
```

---

## 🔧 Implementation in Your App

### Option A: Add to Existing Video Gallery
Your `VideoGalleryWithFilters` already works with YouTube videos! Just ensure videos have `youtubeId` and `videoUrl` set.

### Option B: Create a YouTube-Only Section
Add a new section in `App.tsx`:

```tsx
import YouTubeSection from '@/components/YouTube/YouTubeVideosSection';

// In your App component:
<YouTubeSection
  title="My YouTube Videos"
  description="Check out my latest work"
  videos={galleryVideos.filter(v => v.youtubeId)}
  gridCols={3}
/>
```

### Option C: Use Individual Embeds
Place embeds directly in your content:

```tsx
<section className="py-12 bg-gray-100">
  <div className="container-custom">
    <h2 className="text-4xl font-bold mb-8">Featured Work</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <YouTubeEmbed
        videoId="BM2Tgufeshg"
        title="Mera Ishq : Jot & Vin's Love Story"
      />
      <YouTubeEmbed
        videoId="ANOTHER_VIDEO_ID"
        title="Another Video"
      />
    </div>
  </div>
</section>
```

---

## 🎬 Getting YouTube Video IDs

### Method 1: From URL
```
URL: https://www.youtube.com/watch?v=BM2Tgufeshg
ID: BM2Tgufeshg
```

### Method 2: From Short URL
```
URL: https://youtu.be/BM2Tgufeshg
ID: BM2Tgufeshg
```

### Method 3: From Embed
```html
<iframe src="https://www.youtube.com/embed/BM2Tgufeshg"></iframe>
ID: BM2Tgufeshg
```

---

## 🖼️ Getting Video Thumbnails

YouTube automatically generates thumbnails:

```
https://img.youtube.com/vi/VIDEO_ID/default.jpg      // 120x90
https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg    // 320x180 (medium)
https://img.youtube.com/vi/VIDEO_ID/sddefault.jpg    // 640x480 (standard)
https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg    // 480x360 (high)
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg // 1280x720 (max)
```

Example:
```
https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg
```

---

## ⚙️ Configuration

### Environment Variables
Your `.env` file already supports:

```env
VITE_YOUTUBE_API_KEY=your_key_here
VITE_YOUTUBE_PLAYLIST_ID=your_playlist_id
VITE_YOUTUBE_CHANNEL_ID=your_channel_id
```

---

## 🎨 Customization

### Style YouTubeSection
```tsx
<YouTubeSection
  title="Wedding Films"
  videos={videos}
  gridCols={2}
  className="bg-gradient-to-r from-blue-50 to-indigo-50"
/>
```

### Style YouTubeEmbed
```tsx
<YouTubeEmbed
  videoId="BM2Tgufeshg"
  title="Video"
  className="rounded-xl shadow-2xl"
/>
```

---

## ✅ Full Example Usage

```tsx
import { useState } from 'react';
import YouTubeSection from '@/components/YouTube/YouTubeVideosSection';
import YouTubeEmbed from '@/components/YouTube/YouTubeEmbed';
import { VideoItem, VideoCategory } from '@/types';

function App() {
  const [videos] = useState<VideoItem[]>([
    {
      id: '1',
      youtubeId: 'BM2Tgufeshg',
      title: 'Mera Ishq : Jot & Vin\'s Love Story',
      description: 'A cinematic wedding film...',
      thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
      category: VideoCategory.COMMERCIAL,
      tags: ['wedding', 'cinematic'],
      createdDate: new Date(),
      featured: true,
      duration: 480,
      viewCount: 1250,
    },
    // Add more videos...
  ]);

  return (
    <>
      {/* Hero section with featured video */}
      <section>
        <YouTubeEmbed
          videoId="BM2Tgufeshg"
          title="Mera Ishq : Jot & Vin's Love Story"
        />
      </section>

      {/* Grid section */}
      <YouTubeSection
        title="All Wedding Films"
        videos={videos}
        gridCols={3}
      />
    </>
  );
}
```

---

## 🚀 Next Steps

1. ✅ Components are ready to use
2. Add your YouTube video IDs to your `sampleVideos.ts`
3. Import `YouTubeSection` or `YouTubeEmbed` where needed
4. Videos will display with thumbnails and play on click
5. All keyboard and touch controls work automatically

Enjoy your YouTube integration! 🎉
