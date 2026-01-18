import { YouTubePlaylist, YouTubeVideo, VideoItem, VideoCategory } from '../types';

// YouTube API configuration
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// YouTube API key should be set as environment variable
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || '';

export class YouTubeAPIError extends Error {
  public code: number;
  public details?: any;

  constructor(code: number, message: string, details?: any) {
    super(message);
    this.name = 'YouTubeAPIError';
    this.code = code;
    this.details = details;
  }
}

export class YouTubeService {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || API_KEY;
  }

  /**
   * Fetch playlist information and videos from YouTube API
   */
  async fetchPlaylist(playlistId: string): Promise<YouTubePlaylist> {
    if (!this.apiKey) {
      throw new Error('YouTube API key is required');
    }

    try {
      // Fetch playlist details
      const playlistResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/playlists?part=snippet&id=${playlistId}&key=${this.apiKey}`
      );

      if (!playlistResponse.ok) {
        throw new YouTubeAPIError(
          playlistResponse.status,
          `Failed to fetch playlist: ${playlistResponse.statusText}`
        );
      }

      const playlistData = await playlistResponse.json();
      
      if (!playlistData.items || playlistData.items.length === 0) {
        throw new Error('Playlist not found');
      }

      const playlistInfo = playlistData.items[0];

      // Fetch playlist items (videos)
      const videosResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${this.apiKey}`
      );

      if (!videosResponse.ok) {
        throw new YouTubeAPIError(
          videosResponse.status,
          `Failed to fetch playlist videos: ${videosResponse.statusText}`
        );
      }

      const videosData = await videosResponse.json();

      // Get video details for duration and view count
      const videoIds = videosData.items
        .map((item: any) => item.snippet.resourceId.videoId)
        .join(',');

      const videoDetailsResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/videos?part=contentDetails,statistics&id=${videoIds}&key=${this.apiKey}`
      );

      const videoDetailsData = videoDetailsResponse.ok 
        ? await videoDetailsResponse.json() 
        : { items: [] };

      // Process videos
      const videos: YouTubeVideo[] = videosData.items.map((item: any, index: number) => {
        const videoId = item.snippet.resourceId.videoId;
        const details = videoDetailsData.items?.find((detail: any) => detail.id === videoId);
        
        return {
          videoId,
          title: item.snippet.title,
          description: item.snippet.description || '',
          thumbnail: item.snippet.thumbnails?.maxres?.url || 
                    item.snippet.thumbnails?.high?.url || 
                    item.snippet.thumbnails?.medium?.url || 
                    item.snippet.thumbnails?.default?.url || '',
          publishedAt: new Date(item.snippet.publishedAt),
          duration: details?.contentDetails?.duration || 'PT0S',
          viewCount: parseInt(details?.statistics?.viewCount || '0', 10)
        };
      });

      return {
        playlistId,
        title: playlistInfo.snippet.title,
        description: playlistInfo.snippet.description || '',
        videos
      };
    } catch (error) {
      if (error instanceof YouTubeAPIError) {
        throw error;
      }
      if (error instanceof Error) {
        throw new Error(`YouTube API error: ${error.message}`);
      }
      throw new Error(`YouTube API error: ${error}`);
    }
  }

  /**
   * Fetch individual video details
   */
  async fetchVideo(videoId: string): Promise<YouTubeVideo> {
    if (!this.apiKey) {
      throw new Error('YouTube API key is required');
    }

    try {
      const response = await fetch(
        `${YOUTUBE_API_BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new YouTubeAPIError(
          response.status,
          `Failed to fetch video: ${response.statusText}`
        );
      }

      const data = await response.json();
      
      if (!data.items || data.items.length === 0) {
        throw new Error('Video not found');
      }

      const video = data.items[0];

      return {
        videoId,
        title: video.snippet.title,
        description: video.snippet.description || '',
        thumbnail: video.snippet.thumbnails?.maxres?.url || 
                  video.snippet.thumbnails?.high?.url || 
                  video.snippet.thumbnails?.medium?.url || 
                  video.snippet.thumbnails?.default?.url || '',
        publishedAt: new Date(video.snippet.publishedAt),
        duration: video.contentDetails?.duration || 'PT0S',
        viewCount: parseInt(video.statistics?.viewCount || '0', 10)
      };
    } catch (error) {
      if (error instanceof YouTubeAPIError) {
        throw error;
      }
      if (error instanceof Error) {
        throw new Error(`YouTube API error: ${error.message}`);
      }
      throw new Error(`YouTube API error: ${error}`);
    }
  }

  /**
   * Convert YouTube video to VideoItem format
   */
  convertToVideoItem(youtubeVideo: YouTubeVideo, category: VideoCategory = VideoCategory.OTHER): VideoItem {
    return {
      id: `youtube-${youtubeVideo.videoId}`,
      title: youtubeVideo.title,
      description: youtubeVideo.description,
      thumbnail: youtubeVideo.thumbnail,
      videoUrl: `https://www.youtube.com/watch?v=${youtubeVideo.videoId}`,
      youtubeId: youtubeVideo.videoId,
      category,
      tags: this.extractTagsFromDescription(youtubeVideo.description),
      createdDate: youtubeVideo.publishedAt,
      featured: false,
      duration: this.parseDuration(youtubeVideo.duration),
      viewCount: youtubeVideo.viewCount
    };
  }

  /**
   * Convert YouTube playlist to VideoItem array
   */
  convertPlaylistToVideoItems(playlist: YouTubePlaylist, category: VideoCategory = VideoCategory.OTHER): VideoItem[] {
    return playlist.videos.map(video => this.convertToVideoItem(video, category));
  }

  /**
   * Parse YouTube duration format (PT4M13S) to seconds
   */
  private parseDuration(duration: string): number {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;

    const hours = parseInt(match[1] || '0', 10);
    const minutes = parseInt(match[2] || '0', 10);
    const seconds = parseInt(match[3] || '0', 10);

    return hours * 3600 + minutes * 60 + seconds;
  }

  /**
   * Extract tags from video description
   */
  private extractTagsFromDescription(description: string): string[] {
    const tags: string[] = [];
    
    // Look for hashtags
    const hashtagMatches = description.match(/#[\w]+/g);
    if (hashtagMatches) {
      tags.push(...hashtagMatches.map(tag => tag.substring(1).toLowerCase()));
    }

    // Look for common keywords
    const keywords = [
      'commercial', 'music video', 'documentary', 'short film', 
      'wedding', 'corporate', 'event', 'promotional', 'cinematic'
    ];

    keywords.forEach(keyword => {
      if (description.toLowerCase().includes(keyword)) {
        tags.push(keyword.replace(' ', '-'));
      }
    });

    return [...new Set(tags)]; // Remove duplicates
  }

  /**
   * Get video thumbnail URL with fallback sizes
   */
  static getThumbnailUrl(video: YouTubeVideo, size: 'default' | 'medium' | 'high' | 'maxres' = 'high'): string {
    const thumbnails = {
      maxres: video.thumbnail,
      high: video.thumbnail,
      medium: video.thumbnail,
      default: video.thumbnail
    };

    return thumbnails[size] || video.thumbnail;
  }

  /**
   * Format view count for display
   */
  static formatViewCount(viewCount: number): string {
    if (viewCount >= 1000000000) {
      return `${(viewCount / 1000000000).toFixed(1)}B views`;
    } else if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(1)}M views`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(1)}K views`;
    }
    return `${viewCount} views`;
  }

  /**
   * Format duration for display
   */
  static formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }
}

// Default instance
export const youtubeService = new YouTubeService();

// Error handling utilities
export const handleYouTubeError = (error: any): string => {
  if (error instanceof YouTubeAPIError) {
    switch (error.code) {
      case 400:
        return 'Invalid request. Please check the video or playlist ID.';
      case 403:
        return 'Access forbidden. Please check your API key permissions.';
      case 404:
        return 'Video or playlist not found.';
      case 429:
        return 'Too many requests. Please try again later.';
      default:
        return `YouTube API error: ${error.message}`;
    }
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unexpected error occurred while fetching YouTube data.';
};