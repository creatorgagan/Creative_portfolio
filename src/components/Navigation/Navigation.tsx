import React, { useState, useEffect } from 'react';
import { NavigationProps, NavigationItem } from '../../types';

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'graphic-design', label: 'Designs', href: '#graphic-design' },
    { id: 'wedding-albums', label: 'Weddings', href: '#wedding-albums' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Handle scroll-based transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (currentSection !== navigationItems[i].id) {
            onSectionChange(navigationItems[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, onSectionChange]);

  // Smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      onSectionChange(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home', 'home')}
              className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                    currentSection === item.id
                      ? isScrolled
                        ? 'text-accent border-b-2 border-accent'
                        : 'text-white border-b-2 border-white'
                      : isScrolled
                      ? 'text-gray-700 hover:text-accent'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`mobile-menu-button inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
                isScrolled
                  ? 'text-gray-700 hover:text-accent hover:bg-gray-100 focus:ring-accent'
                  : 'text-white hover:text-white/80 hover:bg-white/10 focus:ring-white'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}
                />
                <span
                  className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu slide-out drawer */}
      <div
        className={`mobile-menu md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile navigation items */}
          <div className="flex-1 px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  currentSection === item.id
                    ? 'bg-accent text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;