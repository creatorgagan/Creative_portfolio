import { useState, useEffect } from 'react';
import { HeroProps } from '../../types';
import CanvasScrollEffect from './CanvasScrollEffect';

interface HeroComponentProps extends HeroProps {
  onScrollToSection?: (section: string) => void;
}

const Hero: React.FC<HeroComponentProps> = ({
  name,
  tagline,
  description,
  backgroundVideo,
  backgroundImage,
  onScrollToSection
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setIsVideoError(false);
  };

  const handleVideoError = () => {
    setIsVideoError(true);
    setIsVideoLoaded(false);
  };

  const handleScrollToPortfolio = () => {
    if (onScrollToSection) {
      onScrollToSection('portfolio');
    } else {
      // Fallback to direct scroll
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollToContact = () => {
    if (onScrollToSection) {
      onScrollToSection('contact');
    } else {
      // Fallback to direct scroll
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const shouldShowVideo = backgroundVideo && !isVideoError;
  const backgroundImageUrl = backgroundImage || '/api/placeholder/1920/1080';

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Canvas Scroll Effect */}
      <CanvasScrollEffect />

      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {/* Hero Background Image with Black & White Filter and 60% Opacity */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/images/hero-bg.jpg)`,
            filter: 'grayscale(100%)',
            opacity: 0.6,
            backgroundAttachment: 'fixed'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Text Content */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)' }}>
            <span className="block">{name}</span>
          </h1>
          
          <p className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms', textShadow: '0 3px 10px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.5)' }}>
            {tagline}
          </p>
          
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '400ms', textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' }}>
            {description}
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <button
            onClick={handleScrollToPortfolio}
            className="btn-primary text-lg px-8 py-4 min-w-[200px] hover:scale-105 transition-transform duration-300"
            aria-label="View video portfolio"
          >
            View Portfolio
          </button>
          
          <button
            onClick={handleScrollToContact}
            className="btn-secondary text-lg px-8 py-4 min-w-[200px] hover:scale-105 transition-transform duration-300 text-white border-white hover:bg-white hover:text-gray-900"
            aria-label="Get in touch"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '800ms' }}>
        <button
          onClick={handleScrollToPortfolio}
          className="flex flex-col items-center text-white hover:text-gray-300 transition-colors duration-300 group"
          aria-label="Scroll to portfolio section"
        >
          <span className="text-sm mb-2 font-medium">Explore Work</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce group-hover:bg-gray-300 transition-colors duration-300"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;