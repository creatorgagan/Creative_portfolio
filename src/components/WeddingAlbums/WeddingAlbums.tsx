import React, { useState } from 'react';
import { WeddingAlbum } from '@/data/weddingAlbums';

interface WeddingAlbumsProps {
  albums: WeddingAlbum[];
}

const WeddingAlbums: React.FC<WeddingAlbumsProps> = ({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<WeddingAlbum | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (album: WeddingAlbum, imageIndex: number = 0) => {
    setSelectedAlbum(album);
    setSelectedImageIndex(imageIndex);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedAlbum(null), 300);
  };

  const handlePreviousImage = () => {
    if (selectedAlbum) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedAlbum) {
      setSelectedImageIndex((prev) => 
        prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const eventTypeLabels = {
    'wedding': '💒 Wedding',
    'pre-wedding': '💕 Pre-Wedding',
    'engagement': '💍 Engagement',
    'mehendi': '🌟 Mehendi',
    'reception': '🎉 Reception'
  };

  return (
    <section id="wedding-albums" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            💒 My album works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Beautiful moments captured from the wedding celebration
          </p>
        </div>

        {/* Albums Grid */}
        {albums.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div key={album.id} className="group">
                <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Album Cover Image - Hoverable */}
                  <div 
                    className="relative h-80 cursor-pointer overflow-hidden bg-gray-300 flex items-center justify-center"
                    onClick={() => handleOpenLightbox(album, 0)}
                  >
                    {album.images.length > 0 && (
                      <>
                        <img
                          src={album.images[0]}
                          alt={album.clientName}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                            </svg>
                            <p className="font-semibold">View Album</p>
                            <p className="text-sm opacity-90">{album.imageCount} photos</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Album Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{album.clientName}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-2">
                      {eventTypeLabels[album.eventType]}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{album.description}</p>
                    
                    {/* Stats */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{album.year}</span>
                      <button
                        onClick={() => handleOpenLightbox(album, 0)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                      >
                        View Photos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 text-lg">No wedding albums yet. Upload images to get started!</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedAlbum && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={handleCloseLightbox}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
              </svg>
            </button>

            {/* Main Image */}
            <div className="bg-black rounded-lg overflow-hidden mb-4">
              <div className="flex items-center justify-center h-96 bg-gray-900">
                <img
                  src={selectedAlbum.images[selectedImageIndex]}
                  alt={`${selectedAlbum.clientName} - Photo ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between text-white">
              <button
                onClick={handlePreviousImage}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
              >
                ← Previous
              </button>

              <div className="text-center">
                <p className="font-semibold">{selectedAlbum.clientName}</p>
                <p className="text-sm text-gray-400">
                  Photo {selectedImageIndex + 1} of {selectedAlbum.images.length}
                </p>
              </div>

              <button
                onClick={handleNextImage}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
              >
                Next →
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
              {selectedAlbum.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === selectedImageIndex 
                      ? 'border-blue-500 scale-110' 
                      : 'border-gray-600 hover:border-gray-400 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingAlbums;
