export interface WeddingAlbum {
  id: string;
  clientName: string;
  eventType: 'wedding' | 'pre-wedding' | 'engagement' | 'mehendi' | 'reception';
  images: string[];
  year: number;
  description: string;
  featured: boolean;
  imageCount: number;
}

export const weddingAlbums: WeddingAlbum[] = [
  {
    id: 'Album Design and Clients',
    clientName: 'Harsh & Honey',
    eventType: 'wedding',
    images: [
      '/weddings/harsh-honey/0 (1).jpg',
      '/weddings/harsh-honey/0 (3).jpg',
      '/weddings/harsh-honey/0 (4).jpg',
      '/weddings/harsh-honey/00.jpg',
      '/weddings/harsh-honey/30.jpg',
      '/weddings/harsh-honey/33.jpg',
      '/weddings/harsh-honey/38 (1).jpg',
      '/weddings/harsh-honey/38 (2).jpg',
      '/weddings/harsh-honey/38 (3).jpg',
      '/weddings/harsh-honey/a1.jpg',
      '/weddings/harsh-honey/a5.jpg',
      '/weddings/harsh-honey/a9.jpg'
    ],
    year: 2024,
    description: 'Beautiful wedding celebration capturing the joy and emotions of Harsh & Honey\'s special day with professional cinematography and emotional storytelling.',
    featured: true,
    imageCount: 12
  }
];

export const getWeddingsByType = (type: WeddingAlbum['eventType']): WeddingAlbum[] => {
  return weddingAlbums.filter(album => album.eventType === type);
};

export const getFeaturedWeddings = (): WeddingAlbum[] => {
  return weddingAlbums.filter(album => album.featured);
};

export const getWeddingsByYear = (year: number): WeddingAlbum[] => {
  return weddingAlbums.filter(album => album.year === year);
};

export const getAllWeddingYears = (): number[] => {
  const years = new Set<number>();
  weddingAlbums.forEach(album => years.add(album.year));
  return Array.from(years).sort((a, b) => b - a);
};
