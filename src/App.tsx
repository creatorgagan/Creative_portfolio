import { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/index.css';

// Critical components (loaded immediately)
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import SEO from './components/SEO/SEO';
import StructuredData from './components/SEO/StructuredData';
import VideoGalleryWithFilters from './components/VideoGallery/VideoGalleryWithFilters';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import YouTubeSection from './components/YouTube/YouTubeVideosSection';
import ScrollEffectsProvider from './components/ScrollEffectsProvider';

// Lazy-loaded components (code splitting)
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const YouTubeIntegration = lazy(() => import('./components/YouTube/YouTubeIntegration'));
const GraphicDesignPortfolio = lazy(() => import('./components/GraphicDesignPortfolio'));
const WeddingAlbums = lazy(() => import('./components/WeddingAlbums'));
const TestClientManager = lazy(() => import('./test-client-manager'));

// Admin components
const Login = lazy(() => import('./components/Admin/Auth/Login'));
const AdminDashboard = lazy(() => import('./components/Admin/Dashboard/AdminDashboard'));

// Data imports
import { siteConfig, sampleAchievements, sampleSkills, sampleProfileImages } from './data/siteConfig';
import { sampleVideos, loadPlaylistVideos, initializeVideos, youtubeVideos } from './data/sampleVideos';
import { graphicDesignProjects } from './data/graphicDesignProjects';
import { weddingAlbums } from './data/weddingAlbums';
import { ContactFormData, SocialLink, VideoItem } from './types';

// SEO utilities
import { generatePersonStructuredData } from './utils/seo';

// Performance utilities
import { logPerformanceMetrics } from './utils/performance';

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

function MainContent() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);
  const [galleryVideos, setGalleryVideos] = useState<VideoItem[]>([]);
  const location = useLocation();

  // Load videos from YouTube playlist on mount
  useEffect(() => {
    const loadVideos = async () => {
      console.log('🚀 Starting video load from YouTube playlist...');
      
      // Try to load from YouTube API first
      await loadPlaylistVideos();
      
      console.log('📊 sampleVideos after loadPlaylistVideos:', sampleVideos.length);
      
      // Update state with loaded videos
      if (sampleVideos.length > 0) {
        console.log('✅ Videos loaded successfully:', sampleVideos.length);
        setGalleryVideos([...sampleVideos]);
      } else {
        // If no videos loaded, use fallback
        console.log('⚠️ No videos from API, using fallback...');
        initializeVideos();
        console.log('📊 Fallback videos:', sampleVideos.length);
        setGalleryVideos([...sampleVideos]);
      }
    };
    
    loadVideos();
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  // Handle video selection
  const handleVideoSelect = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsVideoPlayerOpen(true);
  };

  // Handle video player close
  const handleVideoPlayerClose = () => {
    setIsVideoPlayerOpen(false);
    // Keep selectedVideo for a moment to allow smooth transition
    setTimeout(() => setSelectedVideo(null), 300);
  };

  // Handle next/previous video navigation
  const handleNextVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = galleryVideos.findIndex(v => v.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % galleryVideos.length;
    setSelectedVideo(galleryVideos[nextIndex]);
  };

  const handlePreviousVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = galleryVideos.findIndex(v => v.id === selectedVideo.id);
    const previousIndex = currentIndex === 0 ? galleryVideos.length - 1 : currentIndex - 1;
    setSelectedVideo(galleryVideos[previousIndex]);
  };

  // Create social links from site config
  const socialLinks: SocialLink[] = Object.entries(siteConfig.social)
    .filter(([_, url]) => url) // Filter out empty URLs
    .map(([platform, url]) => ({
      platform,
      url,
      icon: platform // Will be handled by the component
    }));

  // Handle contact form submission
  const handleContactSubmit = async (data: ContactFormData): Promise<void> => {
    // In a real application, this would send the data to a backend service
    // For now, we'll simulate the submission
    console.log('Contact form submitted:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, you might use EmailJS, Netlify Forms, or a custom backend
    // throw new Error('Submission failed'); // Uncomment to test error handling
  };

  // Generate structured data for the person/website
  const personStructuredData = generatePersonStructuredData(siteConfig);

  // Determine page-specific SEO data based on route
  const getPageSEO = () => {
    const baseUrl = window.location.origin;
    const currentUrl = `${baseUrl}${location.pathname}${location.hash}`;

    // Default homepage SEO
    let seoData = {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      keywords: siteConfig.seo.keywords,
      ogTitle: siteConfig.seo.title,
      ogDescription: siteConfig.seo.description,
      ogImage: siteConfig.seo.ogImage,
      ogUrl: currentUrl,
      canonical: baseUrl
    };

    // Update SEO based on section
    if (location.hash.includes('#portfolio')) {
      seoData = {
        ...seoData,
        title: `Portfolio - ${siteConfig.personal.name}`,
        description: `Browse the video portfolio of ${siteConfig.personal.name}, featuring creative work across various categories.`,
        canonical: `${baseUrl}/#portfolio`
      };
    } else if (location.hash.includes('#about')) {
      seoData = {
        ...seoData,
        title: `About - ${siteConfig.personal.name}`,
        description: `Learn about ${siteConfig.personal.name}'s background, expertise, and approach to video production.`,
        canonical: `${baseUrl}/#about`
      };
    } else if (location.hash.includes('#contact')) {
      seoData = {
        ...seoData,
        title: `Contact - ${siteConfig.personal.name}`,
        description: `Get in touch with ${siteConfig.personal.name} for video production inquiries and collaborations.`,
        canonical: `${baseUrl}/#contact`
      };
    }

    return seoData;
  };

  const pageSEO = getPageSEO();

  // Log performance metrics on mount (development only)
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(logPerformanceMetrics, 0);
    });
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO {...pageSEO} />
      
      {/* Structured Data */}
      <StructuredData data={personStructuredData} id="person-structured-data" />

      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      <main role="main">
        {/* Hero Section */}
        <Hero
          name={siteConfig.personal.name}
          tagline={siteConfig.personal.tagline}
          description={siteConfig.personal.bio}
          backgroundImage="/api/placeholder/1920/1080"
          onScrollToSection={handleSectionChange}
        />

        {/* Video Portfolio Gallery */}
        <section id="portfolio" className="section-padding bg-white" aria-labelledby="portfolio-heading">
          <div className="container-custom">
            <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
              Video Portfolio
            </h2>
            <VideoGalleryWithFilters
              videos={galleryVideos}
              onVideoSelect={handleVideoSelect}
            />
          </div>
        </section>

        {/* YouTube Integration Section */}
        <section id="youtube" className="section-padding bg-gray-50" aria-labelledby="youtube-heading">
          <div className="container-custom">
            <h2 id="youtube-heading" className="text-3xl md:text-4xl font-bold text-center mb-4">
              YouTube Channel
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore more of my work on YouTube. Subscribe for behind-the-scenes content, tutorials, and exclusive videos.
            </p>
            <Suspense fallback={<LoadingFallback />}>
              <YouTubeIntegration
                playlistId={siteConfig.social.youtube?.split('channel/')[1] || undefined}
                maxVideos={6}
                showMetadata={true}
                onVideoSelect={handleVideoSelect}
                className="mb-8"
              />
            </Suspense>
            <div className="text-center mt-8">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </section>

        {/* About section - lazy loaded */}
        <Suspense fallback={<LoadingFallback />}>
          <About
            story={siteConfig.personal.bio}
            achievements={sampleAchievements}
            profileImages={sampleProfileImages}
            skills={sampleSkills}
          />
        </Suspense>

        {/* Graphic Design Portfolio section - lazy loaded */}
        <Suspense fallback={<LoadingFallback />}>
          <GraphicDesignPortfolio projects={graphicDesignProjects} />
        </Suspense>

        {/* Wedding Albums section - lazy loaded */}
        <Suspense fallback={<LoadingFallback />}>
          <WeddingAlbums albums={weddingAlbums} />
        </Suspense>

        {/* Contact section - lazy loaded */}
        <Suspense fallback={<LoadingFallback />}>
          <Contact
            onSubmit={handleContactSubmit}
            socialLinks={socialLinks}
            personalInfo={siteConfig.personal}
          />
        </Suspense>
      </main>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          isOpen={isVideoPlayerOpen}
          onClose={handleVideoPlayerClose}
          onNext={handleNextVideo}
          onPrevious={handlePreviousVideo}
        />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollEffectsProvider>
        <div className="App">
          <Routes>
            {/* Admin routes */}
            <Route 
              path="/admin/login" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Login />
                </Suspense>
              } 
            />
            <Route 
              path="/admin/dashboard" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <AdminDashboard />
                </Suspense>
              } 
            />
            <Route 
              path="/admin/clients" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <TestClientManager />
                </Suspense>
              } 
            />
            
            {/* Public routes */}
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </ScrollEffectsProvider>
    </Router>
  );
}

export default App;