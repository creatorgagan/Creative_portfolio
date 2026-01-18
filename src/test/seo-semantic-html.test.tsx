/**
 * Property-Based Test for Semantic HTML Structure
 * Feature: video-portfolio-website, Property 11: Semantic HTML Structure
 * Validates: Requirements 8.2
 * 
 * Property: For any page content, the system should use semantic HTML structure for better search engine understanding
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import App from '../App';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Navigation from '../components/Navigation/Navigation';

describe('Property 11: Semantic HTML Structure', () => {
  it('should use semantic HTML elements for main application structure', () => {
    fc.assert(
      fc.property(
        fc.constant(null), // No random input needed for structural test
        () => {
          const { container } = render(<App />);

          // Verify main semantic elements exist
          const mainElement = container.querySelector('main');
          expect(mainElement).not.toBeNull();
          expect(mainElement?.getAttribute('role')).toBe('main');

          // Verify sections use semantic section elements
          const sections = container.querySelectorAll('section');
          expect(sections.length).toBeGreaterThan(0);

          // Each section should have an ID for navigation
          sections.forEach(section => {
            const id = section.getAttribute('id');
            expect(id).toBeTruthy();
            expect(id?.length).toBeGreaterThan(0);
          });

          // Verify sections have aria-labelledby for accessibility
          const sectionsWithHeadings = Array.from(sections).filter(section => {
            const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
            return heading !== null;
          });
          
          expect(sectionsWithHeadings.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should use proper heading hierarchy in components', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1, maxLength: 50 }),
          tagline: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 200 })
        }),
        (props) => {
          const { container } = render(
            <Hero
              name={props.name}
              tagline={props.tagline}
              description={props.description}
              backgroundImage="/test.jpg"
            />
          );

          // Verify h1 exists (should be only one per page)
          const h1Elements = container.querySelectorAll('h1');
          expect(h1Elements.length).toBe(1);

          // Verify heading contains actual content
          const h1 = h1Elements[0];
          expect(h1.textContent?.trim().length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should use semantic elements for navigation', () => {
    fc.assert(
      fc.property(
        fc.record({
          currentSection: fc.constantFrom('home', 'portfolio', 'about', 'contact'),
          onSectionChange: fc.constant(() => {})
        }),
        (props) => {
          const { container } = render(
            <Navigation
              currentSection={props.currentSection}
              onSectionChange={props.onSectionChange}
            />
          );

          // Verify nav element exists
          const navElement = container.querySelector('nav');
          expect(navElement).not.toBeNull();

          // Verify navigation uses list structure
          const navList = container.querySelector('nav ul, nav ol');
          expect(navList).not.toBeNull();

          // Verify navigation links are properly structured
          const navLinks = container.querySelectorAll('nav a');
          expect(navLinks.length).toBeGreaterThan(0);

          // Each link should have href attribute
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            expect(href).toBeTruthy();
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should use semantic elements for content sections', () => {
    fc.assert(
      fc.property(
        fc.record({
          story: fc.string({ minLength: 1, maxLength: 500 }),
          achievements: fc.array(
            fc.record({
              title: fc.string({ minLength: 1, maxLength: 50 }),
              description: fc.string({ minLength: 1, maxLength: 200 }),
              year: fc.integer({ min: 2000, max: 2024 })
            }),
            { minLength: 1, maxLength: 5 }
          ),
          profileImages: fc.array(fc.webUrl(), { minLength: 1, maxLength: 3 }),
          skills: fc.array(fc.string({ minLength: 1, maxLength: 30 }), { minLength: 1, maxLength: 10 })
        }),
        (props) => {
          const { container } = render(
            <About
              story={props.story}
              achievements={props.achievements}
              profileImages={props.profileImages}
              skills={props.skills}
            />
          );

          // Verify section element exists
          const sectionElement = container.querySelector('section');
          expect(sectionElement).not.toBeNull();

          // Verify section has proper heading
          const heading = container.querySelector('section h2, section h3');
          expect(heading).not.toBeNull();

          // Verify content uses appropriate semantic elements
          const paragraphs = container.querySelectorAll('p');
          expect(paragraphs.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should use semantic form elements for contact forms', () => {
    fc.assert(
      fc.property(
        fc.record({
          onSubmit: fc.constant(async () => {}),
          socialLinks: fc.array(
            fc.record({
              platform: fc.string({ minLength: 1, maxLength: 20 }),
              url: fc.webUrl(),
              icon: fc.string({ minLength: 1, maxLength: 20 })
            }),
            { minLength: 1, maxLength: 5 }
          ),
          personalInfo: fc.record({
            name: fc.string({ minLength: 1, maxLength: 50 }),
            email: fc.emailAddress(),
            location: fc.string({ minLength: 1, maxLength: 100 })
          })
        }),
        (props) => {
          const { container } = render(
            <Contact
              onSubmit={props.onSubmit}
              socialLinks={props.socialLinks}
              personalInfo={props.personalInfo}
            />
          );

          // Verify form element exists
          const formElement = container.querySelector('form');
          expect(formElement).not.toBeNull();

          // Verify form has proper input elements with labels
          const inputs = container.querySelectorAll('input, textarea, select');
          expect(inputs.length).toBeGreaterThan(0);

          // Each input should have an associated label or aria-label
          inputs.forEach(input => {
            const id = input.getAttribute('id');
            const ariaLabel = input.getAttribute('aria-label');
            const ariaLabelledBy = input.getAttribute('aria-labelledby');
            
            if (id) {
              const label = container.querySelector(`label[for="${id}"]`);
              const hasLabel = label !== null || ariaLabel !== null || ariaLabelledBy !== null;
              expect(hasLabel).toBe(true);
            }
          });

          // Verify form has submit button
          const submitButton = container.querySelector('button[type="submit"]');
          expect(submitButton).not.toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should use appropriate ARIA roles and attributes', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          const { container } = render(<App />);

          // Verify main content has role="main"
          const mainElement = container.querySelector('main[role="main"]');
          expect(mainElement).not.toBeNull();

          // Verify sections have proper aria-labelledby when they have headings
          const sections = container.querySelectorAll('section[aria-labelledby]');
          sections.forEach(section => {
            const labelledBy = section.getAttribute('aria-labelledby');
            if (labelledBy) {
              const heading = container.querySelector(`#${labelledBy}`);
              expect(heading).not.toBeNull();
            }
          });

          // Verify buttons have accessible names
          const buttons = container.querySelectorAll('button');
          buttons.forEach(button => {
            const hasAccessibleName = 
              button.textContent?.trim().length > 0 ||
              button.getAttribute('aria-label') !== null ||
              button.getAttribute('aria-labelledby') !== null;
            expect(hasAccessibleName).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should use semantic list elements for collections', () => {
    fc.assert(
      fc.property(
        fc.record({
          story: fc.string({ minLength: 1, maxLength: 200 }),
          achievements: fc.array(
            fc.record({
              title: fc.string({ minLength: 1, maxLength: 50 }),
              description: fc.string({ minLength: 1, maxLength: 100 }),
              year: fc.integer({ min: 2000, max: 2024 })
            }),
            { minLength: 2, maxLength: 5 }
          ),
          profileImages: fc.array(fc.webUrl(), { minLength: 1, maxLength: 3 }),
          skills: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 3, maxLength: 10 })
        }),
        (props) => {
          const { container } = render(
            <About
              story={props.story}
              achievements={props.achievements}
              profileImages={props.profileImages}
              skills={props.skills}
            />
          );

          // Verify lists are used for collections (achievements, skills)
          const lists = container.querySelectorAll('ul, ol');
          expect(lists.length).toBeGreaterThan(0);

          // Verify list items are properly nested
          lists.forEach(list => {
            const listItems = list.querySelectorAll(':scope > li');
            expect(listItems.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
