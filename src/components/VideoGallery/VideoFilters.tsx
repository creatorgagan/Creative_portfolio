import React, { useState, useEffect } from 'react';
import { VideoCategory } from '@/types';

interface VideoFiltersProps {
  selectedCategory?: VideoCategory | 'all';
  onCategoryChange: (category: VideoCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  availableCategories: VideoCategory[];
  totalVideos: number;
  filteredCount: number;
}

const VideoFilters: React.FC<VideoFiltersProps> = ({
  selectedCategory = 'all',
  onCategoryChange,
  searchQuery,
  onSearchChange,
  availableCategories,
  totalVideos,
  filteredCount,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categoryLabels: Record<VideoCategory | 'all', string> = {
    all: 'All Videos',
    [VideoCategory.COMMERCIAL]: 'Commercial',
    [VideoCategory.PERSONAL]: 'Personal',
    [VideoCategory.DOCUMENTARY]: 'Documentary',
    [VideoCategory.MUSIC_VIDEO]: 'Music Video',
    [VideoCategory.OTHER]: 'Other',
  };

  const handleClearSearch = () => {
    onSearchChange('');
  };

  const handleClearFilters = () => {
    onCategoryChange('all');
    onSearchChange('');
  };

  const hasActiveFilters = selectedCategory !== 'all' || searchQuery.length > 0;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container-custom py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className={`h-5 w-5 transition-colors duration-200 ${
                  isSearchFocused ? 'text-accent' : 'text-gray-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search videos by title or tags..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
                isSearchFocused ? 'border-accent' : 'border-gray-300'
              }`}
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {/* All Videos Button */}
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-accent text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {categoryLabels.all}
          </button>

          {/* Category Buttons */}
          {availableCategories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Results Summary and Clear Filters */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            {hasActiveFilters ? (
              <span>
                Showing {filteredCount} of {totalVideos} videos
                {searchQuery && (
                  <span className="ml-1">
                    for "<span className="font-medium text-gray-900">{searchQuery}</span>"
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="ml-1">
                    in <span className="font-medium text-gray-900">{categoryLabels[selectedCategory]}</span>
                  </span>
                )}
              </span>
            ) : (
              <span>Showing all {totalVideos} videos</span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-accent hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoFilters;