import React, { useState, useMemo } from 'react';
import { VideoItem, VideoCategory } from '@/types';
import VideoGallery from './VideoGallery';
import VideoFilters from './VideoFilters';

interface VideoGalleryWithFiltersProps {
  videos: VideoItem[];
  onVideoSelect: (video: VideoItem) => void;
}

const VideoGalleryWithFilters: React.FC<VideoGalleryWithFiltersProps> = ({
  videos,
  onVideoSelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get available categories from videos
  const availableCategories = useMemo(() => {
    const categories = new Set<VideoCategory>();
    videos.forEach(video => categories.add(video.category));
    return Array.from(categories).sort();
  }, [videos]);

  // Filter videos based on category and search query
  const filteredVideos = useMemo(() => {
    let filtered = videos;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(video => {
        const titleMatch = video.title.toLowerCase().includes(query);
        const descriptionMatch = video.description.toLowerCase().includes(query);
        const tagsMatch = video.tags.some(tag => 
          tag.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || tagsMatch;
      });
    }

    return filtered;
  }, [videos, selectedCategory, searchQuery]);

  // Sort filtered videos - featured first, then by creation date
  const sortedVideos = useMemo(() => {
    return [...filteredVideos].sort((a, b) => {
      // Featured videos first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      
      // Then by creation date (newest first)
      return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    });
  }, [filteredVideos]);

  const handleCategoryChange = (category: VideoCategory | 'all') => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="w-full">
      {/* Filters */}
      <VideoFilters
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        availableCategories={availableCategories}
        totalVideos={videos.length}
        filteredCount={sortedVideos.length}
      />

      {/* Gallery */}
      <div className="container-custom py-8">
        <VideoGallery
          videos={sortedVideos}
          onVideoSelect={onVideoSelect}
          selectedCategory={selectedCategory === 'all' ? undefined : selectedCategory}
        />
      </div>
    </div>
  );
};

export default VideoGalleryWithFilters;