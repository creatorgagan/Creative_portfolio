import { VideoItem, VideoCategory } from '../types';

// Videos loaded from YouTube playlist via API
// Configure your playlist ID in .env file:
// VITE_YOUTUBE_PLAYLIST_ID=PLcIf6CDZreeVNLjlZ2ja4jRFR5FYKI8Rj
// VITE_YOUTUBE_API_KEY=your_api_key_here

export let sampleVideos: VideoItem[] = [];

// Function to load videos from YouTube playlist
export const loadPlaylistVideos = async () => {
  const playlistId = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID || 'PLcIf6CDZreeVNLjlZ2ja4jRFR5FYKI8Rj';
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn('YouTube API key not configured. Set VITE_YOUTUBE_API_KEY in your .env file to load videos from playlist.');
    return;
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=50&key=${apiKey}`;
    console.log('Fetching YouTube playlist from:', url.replace(apiKey, 'API_KEY_HIDDEN'));
    
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('YouTube API Error:', response.status, errorData);
      return;
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      console.warn('No items found in YouTube playlist:', playlistId);
      return;
    }

    sampleVideos = data.items
      .filter((item: any) => item.snippet && item.snippet.resourceId && item.snippet.resourceId.videoId)
      .map((item: any, index: number) => ({
        id: `youtube-${item.snippet.resourceId.videoId}`,
        title: item.snippet.title || 'Untitled Video',
        description: item.snippet.description || 'Professional video from YouTube playlist',
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url || '',
        videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        youtubeId: item.snippet.resourceId.videoId,
        category: VideoCategory.PERSONAL,
        tags: ['youtube', 'portfolio', 'professional'],
        createdDate: new Date(item.snippet.publishedAt || new Date()),
        featured: index === 0 || index === 1,
        duration: 0,
        viewCount: 0
      }));

    console.log(`✅ Successfully loaded ${sampleVideos.length} videos from YouTube playlist`);
  } catch (error) {
    console.error('Error loading YouTube playlist:', error);
  }
};

// YouTube Videos Integration
const youtubeVideos: VideoItem[] = [
  {
    id: 'youtube-1',
    title: 'Mera Ishq : Jot & Vin\'s Love Story',
    description: 'Cinematic wedding film capturing the emotional journey and beautiful moments of a wedding celebration.',
    thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
    youtubeId: 'BM2Tgufeshg',
    category: VideoCategory.COMMERCIAL,
    tags: ['wedding', 'cinematic', 'love-story', 'emotional'],
    createdDate: new Date('2024-01-15'),
    featured: true,
    duration: 480,
    viewCount: 5250
  },
  {
    id: 'youtube-2',
    title: 'Wedding Cinematic Teaser',
    description: 'Fast-turnaround wedding teaser with professional music sync and cinematic color correction.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.COMMERCIAL,
    tags: ['wedding', 'teaser', 'cinematic'],
    createdDate: new Date('2024-01-20'),
    featured: true,
    duration: 120,
    viewCount: 2100
  },
  {
    id: 'youtube-3',
    title: 'Pre-Wedding Shoot Collection',
    description: 'Romantic pre-wedding shoot capturing candid moments and beautiful locations.',
    thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    youtubeId: '9bZkp7q19f0',
    category: VideoCategory.DOCUMENTARY,
    tags: ['wedding', 'prewedding', 'romantic', 'couple'],
    createdDate: new Date('2024-01-12'),
    featured: true,
    duration: 420,
    viewCount: 2850
  }
];

// Fallback sample videos - used if YouTube API not available
const fallbackVideos: VideoItem[] = [
  // Featured Wedding Films
  {
    id: 'video-1',
    title: 'Priya & Arjun - Wedding Cinematic Highlights',
    description: 'A cinematic wedding highlight film capturing the emotional journey of a beautiful wedding celebration.',
    thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
    youtubeId: 'BM2Tgufeshg',
    category: VideoCategory.COMMERCIAL,
    tags: ['wedding', 'cinematic', 'highlights', 'emotional', 'color-graded'],
    createdDate: new Date('2024-01-15'),
    featured: true,
    duration: 480,
    viewCount: 1250
  },
  {
    id: 'video-2',
    title: 'Ananya & Rohan - Wedding Teaser (48-Hour Delivery)',
    description: 'Fast-turnaround wedding teaser delivered within 48 hours. Features emotional sequencing, professional music sync, and cinematic color correction.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.COMMERCIAL,
    tags: ['wedding', 'teaser', 'fast-delivery', 'cinematic', 'highlights'],
    createdDate: new Date('2024-01-20'),
    featured: true,
    duration: 120,
    viewCount: 2100
  },
  
  // Model & Fashion Shoots
  {
    id: 'video-3',
    title: 'Fashion Model Portfolio Shoot - Clean Framing',
    description: 'Professional model portfolio video with clean framing and modern color tones. Perfect for Instagram Reels and influencer brand collaborations.',
    thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    youtubeId: '9bZkp7q19f0',
    category: VideoCategory.COMMERCIAL,
    tags: ['model', 'fashion', 'portfolio', 'instagram', 'brand'],
    createdDate: new Date('2024-01-10'),
    featured: true,
    duration: 240,
    viewCount: 890
  },
  {
    id: 'video-4',
    title: 'Influencer Campaign - Brand Collaboration',
    description: 'High-engagement Instagram Reels and brand video for influencer collaboration. Optimized for social media platforms with dynamic cuts and trending music sync.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.MUSIC_VIDEO,
    tags: ['music', 'electronic', 'neon', 'urban', 'choreography'],
    createdDate: new Date('2024-01-18'),
    featured: false,
    duration: 195,
    viewCount: 1450
  },
  
  // Documentary & Pre-Wedding Projects
  {
    id: 'video-5',
    title: 'Priya & Arjun - Pre-Wedding Shoot',
    description: 'Romantic pre-wedding shoot capturing candid moments and chemistry of the couple. Features stunning outdoor locations with cinematic color grading and emotional sequencing.',
    thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    youtubeId: '9bZkp7q19f0',
    category: VideoCategory.DOCUMENTARY,
    tags: ['wedding', 'prewedding', 'romantic', 'couple', 'cinematic'],
    createdDate: new Date('2024-01-12'),
    featured: true,
    duration: 420,
    viewCount: 2850
  },
  {
    id: 'video-6',
    title: 'Deepika & Vikram - Mehendi Highlights',
    description: 'Vibrant Mehendi celebration captured with dynamic camera movements and color-graded to match festival aesthetics. Includes guest reactions, traditional rituals, and dance moments.',
    thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
    youtubeId: 'BM2Tgufeshg',
    category: VideoCategory.DOCUMENTARY,
    tags: ['wedding', 'mehendi', 'celebration', 'traditional', 'color-graded'],
    createdDate: new Date('2024-01-08'),
    featured: false,
    duration: 360,
    viewCount: 3120
  },
  
  // Personal Projects - Wedding Teasers
  {
    id: 'video-7',
    title: 'Neha & Rohan - 48 Hour Wedding Teaser',
    description: 'Lightning-fast 48-hour teaser capturing the essence of a grand wedding. Shot same-day, edited overnight - cinematic color grading, emotional pacing, and Instagram-optimized cuts.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.PERSONAL,
    tags: ['wedding', 'teaser', '48hour', 'cinematic', 'instagram'],
    createdDate: new Date('2024-01-03'),
    featured: false,
    duration: 120,
    viewCount: 4200
  },
  {
    id: 'video-8',
    title: 'Sanya - Fashion Model Portfolio Reel',
    description: 'Professional fashion and modeling portfolio compiled into an Instagram Reels-optimized video. Features multiple looks, styling transitions, and editorial photography sequences with audio sync.',
    thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    youtubeId: '9bZkp7q19f0',
    category: VideoCategory.PERSONAL,
    tags: ['fashion', 'model', 'portfolio', 'editorial', 'instagram-reels'],
    createdDate: new Date('2024-01-05'),
    featured: false,
    duration: 60,
    viewCount: 5430
  },
  
  // YouTube Integration - Wedding & Cinematography Content
  {
    id: 'youtube-dQw4w9WgXcQ',
    title: 'Complete Wedding Film - Aryan & Pooja',
    description: 'Full wedding film showcasing the complete day - from getting ready to reception. This YouTube video demonstrates integration with YouTube API and displays complete wedding cinematography work.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.PERSONAL,
    tags: ['youtube', 'wedding', 'full-film', 'cinematography', 'complete'],
    createdDate: new Date('2024-01-08'),
    featured: true,
    duration: 2400,
    viewCount: 8750
  },
  {
    id: 'youtube-jNQXAC9IVRw',
    title: 'Gimbal Cinematography Tutorial - Wedding Edition',
    description: 'Educational content teaching professional gimbal movement techniques specifically for wedding videography. Covers smooth camera movements, transition techniques, and equipment setup.',
    thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    youtubeId: 'jNQXAC9IVRw',
    category: VideoCategory.OTHER,
    tags: ['youtube', 'tutorial', 'gimbal', 'cinematography', 'wedding-tech'],
    createdDate: new Date('2024-01-05'),
    featured: false,
    duration: 480,
    viewCount: 12400
  },
  
  // Additional Wedding Work
  {
    id: 'video-9',
    title: 'Engagement Shoot - Aisha & Kabir',
    description: 'Romantic engagement celebration shoot featuring couple portraits and candid moments. Professional cinematography with day-to-night color grading and emotional storytelling for social media.',
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=450&fit=crop',
    videoUrl: '/videos/aisha-kabir-engagement.mp4',
    category: VideoCategory.COMMERCIAL,
    tags: ['wedding', 'engagement', 'romantic', 'portrait', 'social-media'],
    createdDate: new Date('2024-01-22'),
    featured: false,
    duration: 180,
    viewCount: 2340
  },
  {
    id: 'video-10',
    title: 'Fashion Brand Collaboration - Shoot BTS',
    description: 'Behind-the-scenes and final edit from a fashion brand collaboration project. Showcases lighting setups, model direction, and the post-production color grading workflow for commercial content.',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop',
    videoUrl: '/videos/fashion-brand-bts.mp4',
    category: VideoCategory.COMMERCIAL,
    tags: ['fashion', 'brand', 'behind-the-scenes', 'commercial', 'color-grading'],
    createdDate: new Date('2024-01-25'),
    featured: false,
    duration: 240,
    viewCount: 3850
  },
];

// Initialize with fallback videos if YouTube not available
export const initializeVideos = () => {
  if (sampleVideos.length === 0) {
    sampleVideos = fallbackVideos;
    console.log('Using fallback sample videos. Configure YouTube API to load your actual playlist.');
  }
};
export const getVideosByCategory = (category: VideoCategory): VideoItem[] => {
  return sampleVideos.filter(video => video.category === category);
};

// Function to get featured videos
export const getFeaturedVideos = (): VideoItem[] => {
  return sampleVideos.filter(video => video.featured);
};

// Function to get YouTube videos only
export const getYouTubeVideos = (): VideoItem[] => {
  return sampleVideos.filter(video => video.youtubeId);
};

// Function to get regular (non-YouTube) videos
export const getRegularVideos = (): VideoItem[] => {
  return sampleVideos.filter(video => !video.youtubeId);
};

// Function to search videos
export const searchVideos = (query: string): VideoItem[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return sampleVideos;
  
  return sampleVideos.filter(video => {
    const titleMatch = video.title.toLowerCase().includes(searchTerm);
    const descriptionMatch = video.description.toLowerCase().includes(searchTerm);
    const tagsMatch = video.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    
    return titleMatch || descriptionMatch || tagsMatch;
  });
};

// Function to filter videos by multiple criteria
export const filterVideos = (filters: {
  category?: VideoCategory;
  tags?: string[];
  featured?: boolean;
  searchQuery?: string;
}): VideoItem[] => {
  let filtered = [...sampleVideos];

  // Filter by category
  if (filters.category) {
    filtered = filtered.filter(video => video.category === filters.category);
  }

  // Filter by tags
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(video =>
      filters.tags!.some(tag => video.tags.includes(tag))
    );
  }

  // Filter by featured status
  if (filters.featured !== undefined) {
    filtered = filtered.filter(video => video.featured === filters.featured);
  }

  // Filter by search query
  if (filters.searchQuery) {
    const searchTerm = filters.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(video => {
      const titleMatch = video.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = video.description.toLowerCase().includes(searchTerm);
      const tagsMatch = video.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      return titleMatch || descriptionMatch || tagsMatch;
    });
  }

  return filtered;
};

// Export YouTube videos
export { youtubeVideos };

// Function to get video by ID
export const getVideoById = (id: string): VideoItem | undefined => {
  return sampleVideos.find(video => video.id === id);
};

// Function to get related videos (same category, excluding current video)
export const getRelatedVideos = (videoId: string, limit: number = 3): VideoItem[] => {
  const currentVideo = getVideoById(videoId);
  if (!currentVideo) return [];

  return sampleVideos
    .filter(video => 
      video.id !== videoId && 
      video.category === currentVideo.category
    )
    .slice(0, limit);
};

// Function to get all unique tags
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  sampleVideos.forEach(video => {
    video.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

// Function to get video statistics
export const getVideoStatistics = () => {
  return {
    total: sampleVideos.length,
    featured: getFeaturedVideos().length,
    byCategory: {
      [VideoCategory.COMMERCIAL]: getVideosByCategory(VideoCategory.COMMERCIAL).length,
      [VideoCategory.PERSONAL]: getVideosByCategory(VideoCategory.PERSONAL).length,
      [VideoCategory.DOCUMENTARY]: getVideosByCategory(VideoCategory.DOCUMENTARY).length,
      [VideoCategory.MUSIC_VIDEO]: getVideosByCategory(VideoCategory.MUSIC_VIDEO).length,
      [VideoCategory.OTHER]: getVideosByCategory(VideoCategory.OTHER).length,
    },
    totalViews: sampleVideos.reduce((sum, video) => sum + (video.viewCount || 0), 0),
    averageDuration: Math.round(
      sampleVideos.reduce((sum, video) => sum + (video.duration || 0), 0) / sampleVideos.length
    ),
  };
};