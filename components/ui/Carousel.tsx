'use client';

import { useState, useEffect, ReactNode, useCallback } from 'react';
import { cn } from '@/lib/utils';

/**
 * Carousel - Enhanced carousel with pagination dots
 * Based on design-reference.html lines 329-418, 1052-1098, JS 2469-2537
 */

export interface CarouselSlide {
  id: string;
  content: ReactNode;
}

export interface CarouselProps {
  /** Array of slides */
  slides: CarouselSlide[];
  /** Auto-advance interval in ms (default 6000, set to 0 to disable) */
  autoPlayInterval?: number;
  /** Show pagination dots */
  showDots?: boolean;
  /** Additional class for container */
  className?: string;
  /** Additional class for the track */
  trackClassName?: string;
  /** Callback when slide changes */
  onSlideChange?: (index: number) => void;
}

export function Carousel({
  slides,
  autoPlayInterval = 6000,
  showDots = true,
  className,
  trackClassName,
  onSlideChange,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(index);
    onSlideChange?.(index);

    setTimeout(() => setIsAnimating(false), 600);
  }, [currentSlide, isAnimating, onSlideChange]);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, [currentSlide, slides.length, goToSlide]);

  // Auto-advance
  useEffect(() => {
    if (autoPlayInterval <= 0) return;

    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, nextSlide]);

  return (
    <div className={cn('carousel-wrapper relative overflow-hidden', className)}>
      {/* Carousel Track */}
      <div
        className={cn(
          'carousel-track transition-all duration-600',
          trackClassName
        )}
        style={{
          width: '100%',
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? 'translateX(20px)' : 'translateX(0)',
        }}
      >
        {slides[currentSlide]?.content}
      </div>

      {/* Pagination Dots */}
      {showDots && slides.length > 1 && (
        <div className="pagination-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'pagination-dot',
                currentSlide === index && 'active'
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * TestimonialCarousel - Pre-styled carousel for testimonials
 * Based on design-reference.html case-card styling
 */
export interface Testimonial {
  id: string;
  icon?: string;
  company: string;
  quote: string;
  type: string;
  imageSrc?: string;
}

export interface TestimonialCarouselProps {
  /** Array of testimonial sets (each set shows 3 testimonials) */
  testimonials: Testimonial[][];
  /** Auto-advance interval in ms */
  autoPlayInterval?: number;
  /** Additional class */
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 6000,
  className,
}: TestimonialCarouselProps) {
  const slides: CarouselSlide[] = testimonials.map((set, index) => ({
    id: `testimonial-set-${index}`,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {set.map((testimonial) => (
          <div key={testimonial.id} className="case-card">
            <div className="client-logo flex items-center justify-center font-bold uppercase text-[0.85rem] tracking-wider mb-8">
              {testimonial.icon && (
                <span className="material-symbols-outlined mr-2 text-text-dark">
                  {testimonial.icon}
                </span>
              )}
              {testimonial.company}
            </div>
            <p className="case-quote font-serif italic text-[1.15rem] text-text-dark mb-4 leading-snug">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="case-link text-[0.8rem] font-bold text-text-dark uppercase tracking-wider mb-8">
              {testimonial.type}
            </div>
            {testimonial.imageSrc && (
              <div className="case-img-bottom w-full h-[180px] rounded-lg overflow-hidden mt-auto">
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <Carousel
      slides={slides}
      autoPlayInterval={autoPlayInterval}
      showDots={true}
      className={className}
    />
  );
}

/**
 * BlogCarousel - Carousel with arrow navigation for blog posts
 * Based on design-reference.html lines 590-686, JS 2542-2602
 */
export interface BlogCarouselProps {
  /** Array of slide sets */
  slides: CarouselSlide[];
  /** Additional class */
  className?: string;
  /** Header content (title) */
  header?: ReactNode;
}

export function BlogCarousel({
  slides,
  className,
  header,
}: BlogCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < slides.length - 1;

  const goToSlide = (direction: 'prev' | 'next') => {
    if (isAnimating) return;

    const newSlide = direction === 'next'
      ? Math.min(currentSlide + 1, slides.length - 1)
      : Math.max(currentSlide - 1, 0);

    if (newSlide === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(newSlide);

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className={cn('blog-carousel', className)}>
      {/* Header with navigation */}
      <div className="blog-header-wrapper flex justify-between items-center mb-16">
        {header || <h2 className="font-serif text-[2.5rem] m-0">Blog Section</h2>}
        <div className="blog-nav flex gap-3">
          <button
            onClick={() => goToSlide('prev')}
            className={cn(
              'blog-nav-btn w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300',
              canGoPrev
                ? 'bg-primary text-white hover:-translate-y-1 hover:shadow-lg'
                : 'bg-card-bg text-text-grey cursor-not-allowed'
            )}
            disabled={!canGoPrev}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => goToSlide('next')}
            className={cn(
              'blog-nav-btn w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300',
              canGoNext
                ? 'bg-primary text-white hover:-translate-y-1 hover:shadow-lg'
                : 'bg-card-bg text-text-grey cursor-not-allowed'
            )}
            disabled={!canGoNext}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        className="blog-grid transition-all duration-500"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? 'translateX(30px)' : 'translateX(0)',
        }}
      >
        {slides[currentSlide]?.content}
      </div>
    </div>
  );
}
