/**
 * YouTube Integration Example
 * 
 * This file shows how to use the YouTube components in your portfolio
 */

import YouTubeEmbed from './YouTubeEmbed';
import YouTubeSection from './YouTubeVideosSection';

/**
 * Example 1: Single YouTube Video Embed
 * 
 * import YouTubeEmbed from '@/components/YouTube/YouTubeEmbed';
 * 
 * <YouTubeEmbed
 *   videoId="BM2Tgufeshg"
 *   title="Mera Ishq : Jot & Vin's Love Story"
 *   thumbnail="https://images.squarespace-cdn.com/content/v1/..."
 *   width={560}
 *   height={315}
 * />
 */

/**
 * Example 2: YouTube Videos Section with Grid
 * 
 * import YouTubeSection from '@/components/YouTube/YouTubeVideosSection';
 * 
 * const videoData = [
 *   {
 *     id: 'video-1',
 *     youtubeId: 'BM2Tgufeshg',
 *     title: 'Mera Ishq : Jot & Vin\'s Love Story',
 *     description: 'Cinematic wedding film...',
 *     thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
 *     category: 'commercial',
 *     tags: ['wedding', 'cinematic', 'love-story'],
 *     createdDate: new Date(),
 *     featured: true,
 *   },
 *   // ... more videos
 * ];
 * 
 * <YouTubeSection
 *   title="Wedding Films"
 *   description="Cinematic wedding videos captured and edited to perfection"
 *   videos={videoData}
 *   gridCols={3}
 * />
 */

/**
 * Example 3: Integration in Your App.tsx
 * 
 * In your App.tsx or main video section:
 * 
 * import YouTubeSection from '@/components/YouTube/YouTubeVideosSection';
 * import { VideoItem } from '@/types';
 * 
 * function App() {
 *   const youtubeVideos: VideoItem[] = [
 *     {
 *       id: 'youtube-1',
 *       youtubeId: 'BM2Tgufeshg',
 *       title: 'Mera Ishq : Jot & Vin\'s Love Story',
 *       description: 'A cinematic wedding highlight...',
 *       thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
 *       videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
 *       category: VideoCategory.COMMERCIAL,
 *       tags: ['wedding', 'cinematic'],
 *       createdDate: new Date(),
 *       featured: true,
 *       duration: 480,
 *       viewCount: 1250,
 *     },
 *   ];
 * 
 *   return (
 *     <YouTubeSection
 *       title="Wedding Cinematics"
 *       description="Explore our collection of wedding films"
 *       videos={youtubeVideos}
 *       gridCols={3}
 *     />
 *   );
 * }
 */

/**
 * Example 4: Using with Your Existing Video Gallery
 * 
 * The VideoPlayer component already supports YouTube via ReactPlayer
 * Just set the videoUrl to a YouTube URL and youtubeId:
 * 
 * const video: VideoItem = {
 *   id: 'video-1',
 *   title: 'Mera Ishq : Jot & Vin\'s Love Story',
 *   description: '...',
 *   thumbnail: 'https://img.youtube.com/vi/BM2Tgufeshg/maxresdefault.jpg',
 *   videoUrl: 'https://www.youtube.com/watch?v=BM2Tgufeshg',
 *   youtubeId: 'BM2Tgufeshg',
 *   category: 'commercial',
 *   tags: ['wedding'],
 *   createdDate: new Date(),
 *   featured: true,
 * };
 */

/**
 * HTML Structure Reference (what YouTubeEmbed generates):
 * 
 * <div class="sqs-video-wrapper video-none" data-provider-name="YouTube">
 *   <div class="intrinsic">
 *     <div class="intrinsic-inner" style="padding-bottom: 56.25%;">
 *       <!-- Thumbnail overlay with play button -->
 *       <div class="sqs-video-overlay">
 *         <img src="thumbnail-url" />
 *         <div class="sqs-video-icon">
 *           <!-- YouTube play button -->
 *         </div>
 *       </div>
 *       
 *       <!-- YouTube embed iframe -->
 *       <iframe 
 *         src="https://www.youtube.com/embed/VIDEO_ID"
 *         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 *       ></iframe>
 *     </div>
 *   </div>
 * </div>
 */

export { YouTubeEmbed, YouTubeSection };
