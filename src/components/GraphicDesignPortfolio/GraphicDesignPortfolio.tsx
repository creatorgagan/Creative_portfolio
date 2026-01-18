import React, { useState, useMemo } from 'react';
import { GraphicDesignProject, getAllDesignCategories } from '@/data/graphicDesignProjects';

interface GraphicDesignPortfolioProps {
  projects: GraphicDesignProject[];
}

const GraphicDesignPortfolio: React.FC<GraphicDesignPortfolioProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<GraphicDesignProject['category'] | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<GraphicDesignProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = getAllDesignCategories();

  const categoryLabels: Record<GraphicDesignProject['category'], string> = {
    'album-design': 'Album Design',
    'graphic-design': 'Graphic Design',
    'poster': 'Posters',
    'branding': 'Branding'
  };

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [projects, selectedCategory, searchQuery]);

  const handleProjectClick = (project: GraphicDesignProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="graphic-design" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Graphic Design Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional graphic design work including album covers, branding, and multimedia designs
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search designs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-600'
              }`}
            >
              All Works
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-600'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gray-200 overflow-hidden flex items-center justify-center">
                {project.images[0] && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {categoryLabels[project.category]}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Year */}
                <div className="text-sm text-gray-500 font-medium">{project.year}</div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No designs found matching your search.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-900 z-10"
              >
                ✕
              </button>

              {/* Images Carousel */}
              <div className="relative bg-gray-200 h-96 flex items-center justify-center overflow-auto">
                {selectedProject.images[0] && (
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-600 text-lg mb-4">{selectedProject.description}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category and Year */}
                <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-1">CATEGORY</p>
                    <p className="text-gray-900 text-lg font-bold">{categoryLabels[selectedProject.category]}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-1">YEAR</p>
                    <p className="text-gray-900 text-lg font-bold">{selectedProject.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicDesignPortfolio;
