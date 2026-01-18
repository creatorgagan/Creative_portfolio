export interface GraphicDesignProject {
  id: string;
  title: string;
  description: string;
  category: 'album-design' | 'graphic-design' | 'poster' | 'branding';
  images: string[];
  pdfUrl?: string;
  year: number;
  featured: boolean;
  tags: string[];
}

export const graphicDesignProjects: GraphicDesignProject[] = [
  {
    id: 'album-1',
    title: 'Album Cover Design 1',
    description: 'Professional album cover design with high-resolution artwork suitable for digital and physical distribution.',
    category: 'album-design',
    images: ['/designs/album-1.jpg'],
    year: 2024,
    featured: true,
    tags: ['album', 'music', 'design']
  },
  {
    id: 'album-2',
    title: 'Album Cover Design 2',
    description: 'Creative album artwork with professional color grading and visual elements.',
    category: 'album-design',
    images: ['/designs/album-2.jpg'],
    year: 2024,
    featured: true,
    tags: ['album', 'music', 'design']
  },
  {
    id: 'album-3',
    title: 'Album Cover Design 3',
    description: 'Modern album design showcasing professional cinematography and design expertise.',
    category: 'album-design',
    images: ['/designs/album-3.jpg'],
    year: 2024,
    featured: false,
    tags: ['album', 'music', 'design']
  },
  {
    id: 'branding-1',
    title: 'Logo Design',
    description: 'Professional brand identity logo with modern aesthetics and clean design.',
    category: 'branding',
    images: ['/designs/LOGO (2).png'],
    year: 2024,
    featured: true,
    tags: ['logo', 'branding', 'identity']
  },
  {
    id: 'graphic-1',
    title: 'Project Design 1',
    description: 'Creative graphic design project showcasing professional design skills.',
    category: 'graphic-design',
    images: ['/designs/project.png'],
    year: 2024,
    featured: true,
    tags: ['graphic', 'design', 'creative']
  },
  {
    id: 'graphic-2',
    title: 'Project Design 2',
    description: 'Professional graphic design work with attention to detail and visual impact.',
    category: 'graphic-design',
    images: ['/designs/project 2.png'],
    year: 2024,
    featured: false,
    tags: ['graphic', 'design', 'creative']
  },
  {
    id: 'graphic-3',
    title: 'Food Text Effect Design',
    description: 'Creative text effect design with modern styling and visual elements.',
    category: 'graphic-design',
    images: ['/designs/Food_Text_Effect.png'],
    year: 2024,
    featured: false,
    tags: ['graphic', 'text-effect', 'design']
  },
  {
    id: 'poster-1',
    title: 'Ishita Birthday - PDF Design',
    description: 'Professional poster design with print-ready specifications.',
    category: 'poster',
    images: ['/designs/0C2A8124.JPG'],
    pdfUrl: '/designs/ishita birthday.pdf',
    year: 2024,
    featured: true,
    tags: ['poster', 'birthday', 'event']
  },
  {
    id: 'photography-1',
    title: 'Professional Photography Set 1',
    description: 'Professional photography showcase from cinematography work.',
    category: 'graphic-design',
    images: ['/designs/0C2A8144.JPG'],
    year: 2024,
    featured: false,
    tags: ['photography', 'cinema', 'production']
  },
  {
    id: 'photography-2',
    title: 'Professional Photography Set 2',
    description: 'High-quality photography from professional shoots.',
    category: 'graphic-design',
    images: ['/designs/0C2A8181.JPG'],
    year: 2024,
    featured: false,
    tags: ['photography', 'cinema', 'production']
  },
  {
    id: 'photography-3',
    title: 'Professional Photography Set 3',
    description: 'Professional cinematography and photography work.',
    category: 'graphic-design',
    images: ['/designs/0C2A8746.JPG'],
    year: 2024,
    featured: false,
    tags: ['photography', 'cinema', 'production']
  },
  {
    id: 'photography-4',
    title: 'Professional Photography Set 4',
    description: 'Behind-the-scenes photography from professional shoots.',
    category: 'graphic-design',
    images: ['/designs/DSC04481.JPG'],
    year: 2024,
    featured: false,
    tags: ['photography', 'cinema', 'production']
  },
  {
    id: 'photography-5',
    title: 'Professional Photography Set 5',
    description: 'Professional equipment and cinematography showcase.',
    category: 'graphic-design',
    images: ['/designs/DSC04486.JPG'],
    year: 2024,
    featured: false,
    tags: ['photography', 'cinema', 'production']
  }
];

// Helper functions
export const getDesignsByCategory = (category: GraphicDesignProject['category']): GraphicDesignProject[] => {
  return graphicDesignProjects.filter(project => project.category === category);
};

export const getFeaturedDesigns = (): GraphicDesignProject[] => {
  return graphicDesignProjects.filter(project => project.featured);
};

export const searchDesigns = (query: string): GraphicDesignProject[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return graphicDesignProjects;

  return graphicDesignProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getDesignsByYear = (year: number): GraphicDesignProject[] => {
  return graphicDesignProjects.filter(project => project.year === year);
};

export const getAllDesignCategories = (): GraphicDesignProject['category'][] => {
  const categories = new Set<GraphicDesignProject['category']>();
  graphicDesignProjects.forEach(project => categories.add(project.category));
  return Array.from(categories).sort();
};
