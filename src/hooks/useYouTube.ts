import { useState, useEffect, useCallback } from 'react';
import { YouTubePlaylist, YouTubeVideo, VideoItem, VideoCategory } from '../types';
import { youtubeService, handleYouTubeError } from '../services/youtube';

export interface UseYouTubeState {
  playlist: YouTubePlaylist | null;
  videos: VideoItem[];
  loading: boolean;
  error: string | null;
}

export interface UseYouTubeActions {
  fetchPlaylist: (playlistId: string, category?: VideoCategory) => Promise<void>;
  fetchVideo: (videoId: string, category?: VideoCategory) => Promise<VideoItem | null>;
  clearError: () => void;
  retry: () => void;
}

export interface UseYouTubeReturn extends UseYouTubeState, UseYouTubeActions {}

/**
 * Custom hook for YouTube API integration
 */
export const useYouTube = (initialPlaylistId?: string): UseYouTubeReturn => {
  const [state, setState] = useState<UseYouTubeState>({
    playlist: null,
    videos: [],
    loading: false,
    error: null
  });

  const [lastPlaylistId, setLastPlaylistId] = useState<string | undefined>(initialPlaylistId);

  const fetchPlaylist = useCallback(async (playlistId: string, category: VideoCategory = VideoCategory.OTHER) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    setLastPlaylistId(playlistId);

    try {
      const playlist = await youtubeService.fetchPlaylist(playlistId);
      const videos = youtubeService.convertPlaylistToVideoItems(playlist, category);

      setState(prev => ({
        ...prev,
        playlist,
        videos,
        loading: false,
        error: null
      }));
    } catch (error) {
      const errorMessage = handleYouTubeError(error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage
      }));
    }
  }, []);

  const fetchVideo = useCallback(async (videoId: string, category: VideoCategory = VideoCategory.OTHER): Promise<VideoItem | null> => {
    try {
      const youtubeVideo = await youtubeService.fetchVideo(videoId);
      return youtubeService.convertToVideoItem(youtubeVideo, category);
    } catch (error) {
      const errorMessage = handleYouTubeError(error);
      setState(prev => ({ ...prev, error: errorMessage }));
      return null;
    }
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const retry = useCallback(() => {
    if (lastPlaylistId) {
      fetchPlaylist(lastPlaylistId);
    }
  }, [lastPlaylistId, fetchPlaylist]);

  // Auto-fetch initial playlist if provided
  useEffect(() => {
    if (initialPlaylistId && !state.playlist && !state.loading) {
      fetchPlaylist(initialPlaylistId);
    }
  }, [initialPlaylistId, fetchPlaylist, state.playlist, state.loading]);

  return {
    ...state,
    fetchPlaylist,
    fetchVideo,
    clearError,
    retry
  };
};

/**
 * Hook for fetching a single YouTube video
 */
export const useYouTubeVideo = (videoId?: string) => {
  const [video, setVideo] = useState<VideoItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideo = useCallback(async (id: string, category: VideoCategory = VideoCategory.OTHER) => {
    setLoading(true);
    setError(null);

    try {
      const youtubeVideo = await youtubeService.fetchVideo(id);
      const videoItem = youtubeService.convertToVideoItem(youtubeVideo, category);
      setVideo(videoItem);
    } catch (err) {
      const errorMessage = handleYouTubeError(err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    if (videoId) {
      fetchVideo(videoId);
    }
  }, [videoId, fetchVideo]);

  return {
    video,
    loading,
    error,
    fetchVideo,
    clearError
  };
};

/**
 * Hook for managing multiple YouTube playlists
 */
export const useYouTubePlaylists = () => {
  const [playlists, setPlaylists] = useState<Map<string, YouTubePlaylist>>(new Map());
  const [loading, setLoading] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<Map<string, string>>(new Map());

  const fetchPlaylist = useCallback(async (playlistId: string, category: VideoCategory = VideoCategory.OTHER) => {
    setLoading(prev => new Set(prev).add(playlistId));
    setErrors(prev => {
      const newErrors = new Map(prev);
      newErrors.delete(playlistId);
      return newErrors;
    });

    try {
      const playlist = await youtubeService.fetchPlaylist(playlistId);
      setPlaylists(prev => new Map(prev).set(playlistId, playlist));
    } catch (error) {
      const errorMessage = handleYouTubeError(error);
      setErrors(prev => new Map(prev).set(playlistId, errorMessage));
    } finally {
      setLoading(prev => {
        const newLoading = new Set(prev);
        newLoading.delete(playlistId);
        return newLoading;
      });
    }
  }, []);

  const getPlaylist = useCallback((playlistId: string) => {
    return playlists.get(playlistId) || null;
  }, [playlists]);

  const isLoading = useCallback((playlistId: string) => {
    return loading.has(playlistId);
  }, [loading]);

  const getError = useCallback((playlistId: string) => {
    return errors.get(playlistId) || null;
  }, [errors]);

  const clearError = useCallback((playlistId: string) => {
    setErrors(prev => {
      const newErrors = new Map(prev);
      newErrors.delete(playlistId);
      return newErrors;
    });
  }, []);

  const getAllVideos = useCallback((category: VideoCategory = VideoCategory.OTHER): VideoItem[] => {
    const allVideos: VideoItem[] = [];
    
    playlists.forEach(playlist => {
      const videos = youtubeService.convertPlaylistToVideoItems(playlist, category);
      allVideos.push(...videos);
    });

    return allVideos;
  }, [playlists]);

  return {
    playlists: Array.from(playlists.values()),
    fetchPlaylist,
    getPlaylist,
    isLoading,
    getError,
    clearError,
    getAllVideos
  };
};