import React, { useState, useEffect, useRef } from 'react';
import { AboutProps, Achievement } from '@/types';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

interface TimelineItemProps {
  achievement: Achievement;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ achievement, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 pb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-transparent"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
      
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {achievement.year}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
      </div>
    </div>
  );
};

interface SkillItemProps {
  skill: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={skillRef}
      className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {skill}
    </div>
  );
};

const About: React.FC<AboutProps> = ({ 
  story, 
  achievements, 
  profileImages, 
  skills 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (profileImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [profileImages.length]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {story}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={achievements.length} suffix="+" />
                </div>
                <p className="text-gray-600 text-sm uppercase tracking-wide">
                  Achievements
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-gray-600 text-sm uppercase tracking-wide">
                  Projects
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-gray-600 text-sm uppercase tracking-wide">
                  Satisfaction
                </p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handlePortfolioClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Let's Collaborate
              </button>
            </div>
          </div>

          {/* Profile Images */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              {profileImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Profile ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Image indicators */}
            {profileImages.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-blue-600 scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Journey & Achievements
          </h3>
          <div className="max-w-3xl mx-auto">
            {achievements
              .sort((a, b) => b.year - a.year)
              .map((achievement, index) => (
                <TimelineItem
                  key={`${achievement.year}-${achievement.title}`}
                  achievement={achievement}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;