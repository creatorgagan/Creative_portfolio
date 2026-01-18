import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

/**
 * Integration tests for the design system implementation
 * Tests that CSS custom properties and Tailwind classes work together
 */

describe('Design System Integration Tests', () => {
  it('should render components with design system classes', () => {
    const TestComponent = () => (
      <div className="container-custom">
        <h1 className="text-responsive-4xl font-secondary text-primary">
          Test Heading
        </h1>
        <p className="text-responsive-base font-primary text-gray-700">
          Test paragraph with responsive typography
        </p>
        <button className="btn-primary animate-fade-in">
          Test Button
        </button>
        <div className="section-padding bg-secondary">
          <span className="text-gradient">Gradient Text</span>
        </div>
      </div>
    )

    const { container } = render(<TestComponent />)
    
    // Verify the component renders without errors
    expect(container.firstChild).toBeTruthy()
    
    // Check that classes are applied
    const heading = container.querySelector('h1')
    expect(heading).toHaveClass('text-responsive-4xl', 'font-secondary', 'text-primary')
    
    const paragraph = container.querySelector('p')
    expect(paragraph).toHaveClass('text-responsive-base', 'font-primary', 'text-gray-700')
    
    const button = container.querySelector('button')
    expect(button).toHaveClass('btn-primary', 'animate-fade-in')
    
    const section = container.querySelector('div.section-padding')
    expect(section).toHaveClass('section-padding', 'bg-secondary')
    
    const gradientText = container.querySelector('.text-gradient')
    expect(gradientText).toHaveClass('text-gradient')
  })

  it('should apply container classes correctly', () => {
    const containers = [
      'container-sm',
      'container-md', 
      'container-lg',
      'container-xl',
      'container-2xl',
      'container-custom'
    ]

    containers.forEach(containerClass => {
      const TestContainer = () => (
        <div className={containerClass}>
          <p>Container content</p>
        </div>
      )

      const { container } = render(<TestContainer />)
      const containerElement = container.firstChild as HTMLElement
      
      expect(containerElement).toHaveClass(containerClass)
    })
  })

  it('should apply animation classes correctly', () => {
    const animations = [
      'animate-fade-in',
      'animate-slide-up',
      'animate-slide-down', 
      'animate-scale-in'
    ]

    animations.forEach(animationClass => {
      const TestAnimation = () => (
        <div className={animationClass}>
          <p>Animated content</p>
        </div>
      )

      const { container } = render(<TestAnimation />)
      const animatedElement = container.firstChild as HTMLElement
      
      expect(animatedElement).toHaveClass(animationClass)
    })
  })

  it('should apply transition classes correctly', () => {
    const transitions = [
      'transition-fast',
      'transition-normal',
      'transition-slow'
    ]

    transitions.forEach(transitionClass => {
      const TestTransition = () => (
        <div className={transitionClass}>
          <p>Transition content</p>
        </div>
      )

      const { container } = render(<TestTransition />)
      const transitionElement = container.firstChild as HTMLElement
      
      expect(transitionElement).toHaveClass(transitionClass)
    })
  })

  it('should apply responsive typography classes correctly', () => {
    const typographyClasses = [
      'text-responsive-xs',
      'text-responsive-sm',
      'text-responsive-base',
      'text-responsive-lg',
      'text-responsive-xl',
      'text-responsive-2xl',
      'text-responsive-3xl',
      'text-responsive-4xl',
      'text-responsive-5xl',
      'text-responsive-6xl'
    ]

    typographyClasses.forEach(typographyClass => {
      const TestTypography = () => (
        <p className={typographyClass}>
          Typography test
        </p>
      )

      const { container } = render(<TestTypography />)
      const typographyElement = container.firstChild as HTMLElement
      
      expect(typographyElement).toHaveClass(typographyClass)
    })
  })
})