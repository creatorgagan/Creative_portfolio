import React, { useEffect, useRef } from 'react';

const ScrollEffectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Add CSS variables for scroll-based animations
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --scroll-y: 0;
        --scroll-progress: 0;
      }

      /* Smooth scroll behavior */
      html {
        scroll-behavior: smooth;
      }

      /* Enhanced animations with scroll */
      @keyframes float-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slide-in-left {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slide-in-right {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .scroll-animate {
        animation: float-in 0.8s ease-out forwards;
        color: inherit;
        font-weight: 600;
      }

      .scroll-animate-left {
        animation: slide-in-left 0.8s ease-out forwards;
        color: inherit;
        font-weight: 600;
      }

      .scroll-animate-right {
        animation: slide-in-right 0.8s ease-out forwards;
        color: inherit;
        font-weight: 600;
      }

      /* Parallax effect helper */
      .parallax-element {
        will-change: transform;
        transform: translateZ(0);
      }

      /* Fade-in on scroll */
      .fade-on-scroll {
        opacity: 0;
        transition: opacity 0.6s ease-out;
        font-weight: 500;
      }

      .fade-on-scroll.visible {
        opacity: 1;
        font-weight: 500;
      }

      /* Smooth reveal */
      .reveal-on-scroll {
        position: relative;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-weight: 500;
      }

      .reveal-on-scroll.active {
        opacity: 1;
        transform: translateY(0);
        font-weight: 500;
      }
    `;
    document.head.appendChild(style);

    // Update scroll position and handle scroll animations
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);

      // Calculate scroll progress (0 to 1)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      document.documentElement.style.setProperty('--scroll-progress', String(scrollProgress));

      // Trigger reveal animations
      const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.active)');
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.75;
        if (rect.top < triggerPoint) {
          element.classList.add('active');
        }
      });

      // Fade on scroll
      const fadeElements = document.querySelectorAll('.fade-on-scroll:not(.visible)');
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.8;
        if (rect.top < triggerPoint) {
          element.classList.add('visible');
        }
      });
    };

    // Track mouse position for potential interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollEffectsProvider;
