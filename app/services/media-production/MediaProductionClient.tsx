'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import {
  ScrollReveal,
  ScrollRevealGroup,
  TestimonialCard,
  BentoGallery,
  ExpandableCard
} from '@/components/ui';
import type { GalleryItem } from '@/components/ui';

// ============================================
// PROCESS STEPS COMPONENT (Bento-style)
// ============================================
interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <ScrollRevealGroup className="grid md:grid-cols-3 gap-8">
      {steps.map((step) => (
        <div
          key={step.step}
          className="process-step bg-[var(--card-bg)] border border-[var(--border-dark)] p-8 rounded-lg cursor-pointer"
          style={{
            boxShadow: '8px 8px 0px var(--primary-red)',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-xs)'
          }}
        >
          {/* Icon - scales on hover via CSS (no rotation) */}
          <div className="process-icon text-[var(--primary-red)] mb-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white transition-transform duration-300">
              {step.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[var(--text-dark)]">{step.title}</h3>
          <p className="text-[var(--text-grey)] text-[0.9rem] leading-relaxed">{step.description}</p>
        </div>
      ))}
    </ScrollRevealGroup>
  );
}

// ============================================
// FAQ ACCORDION COMPONENT
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ScrollReveal className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="accordion-header"
            onClick={() => toggleFAQ(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(index);
              }
            }}
            aria-expanded={activeIndex === index}
          >
            <span className="font-medium text-base">{faq.question}</span>
            {/* Chevron rotation IS allowed for expand/collapse indicators */}
            <svg
              className={`w-5 h-5 accordion-icon transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="accordion-body">
            <p className="text-[var(--text-grey)] text-[0.95rem] leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </ScrollReveal>
  );
}

// ============================================
// TESTIMONIAL CAROUSEL COMPONENT
// ============================================
interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialCarouselSectionProps {
  testimonials: TestimonialData[];
}

export function TestimonialCarouselSection({ testimonials }: TestimonialCarouselSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    setTimeout(() => setIsAnimating(false), 600);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % testimonials.length;
    goToSlide(next);
  }, [currentSlide, testimonials.length, goToSlide]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <ScrollReveal>
      <div className="carousel-wrapper relative overflow-hidden">
        {/* Carousel Track */}
        <div
          className="transition-all duration-600"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'translateX(20px)' : 'translateX(0)',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <TestimonialCard
              quote={testimonials[currentSlide].quote}
              author={testimonials[currentSlide].author}
              role={testimonials[currentSlide].role}
              company={testimonials[currentSlide].company}
            />
          </div>
        </div>

        {/* Pagination Dots */}
        {testimonials.length > 1 && (
          <div className="pagination-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`pagination-dot ${currentSlide === index ? 'active' : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentSlide === index ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

// ============================================
// BENEFITS SECTION (Bento-style cards)
// ============================================
interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <ScrollRevealGroup className="grid md:grid-cols-3 gap-8">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="bento-card p-8 cursor-pointer"
        >
          {/* Icon - scales on hover via CSS (no rotation) */}
          <div className="bento-icon w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--primary-red)] transition-transform duration-300">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[var(--text-dark)]">
            {benefit.title}
          </h3>
          <p className="text-[var(--text-grey)] leading-relaxed">
            {benefit.description}
          </p>
        </div>
      ))}
    </ScrollRevealGroup>
  );
}

// ============================================
// CHILD SERVICES SECTION (Expandable Cards)
// ============================================
interface ChildService {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  details?: string[];
  imageSrc?: string;
}

interface ChildServicesSectionProps {
  services: ChildService[];
}

export function ChildServicesSection({ services }: ChildServicesSectionProps) {
  return (
    <ScrollRevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ExpandableCard
          key={service.title}
          imageSrc={service.imageSrc || '/images/placeholder-service.jpg'}
          imageAlt={service.title}
          title={service.title}
          description={service.description}
          listItems={service.details}
          expandLabel="View Details"
          collapseLabel="Hide Details"
        />
      ))}
    </ScrollRevealGroup>
  );
}

// ============================================
// PORTFOLIO GALLERY SECTION (BentoGallery)
// ============================================
interface PortfolioGallerySectionProps {
  items: GalleryItem[];
}

export function PortfolioGallerySection({ items }: PortfolioGallerySectionProps) {
  return (
    <ScrollReveal>
      <BentoGallery items={items} />
    </ScrollReveal>
  );
}

// ============================================
// PHOTOGRAPHY TYPES SECTION (with scroll animation)
// ============================================
interface PhotographyType {
  title: string;
  description: string;
}

interface PhotographyTypesSectionProps {
  types: PhotographyType[];
}

export function PhotographyTypesSection({ types }: PhotographyTypesSectionProps) {
  return (
    <ScrollRevealGroup className="grid md:grid-cols-2 gap-6">
      {types.map((type) => (
        <div
          key={type.title}
          className="bg-[var(--card-bg)] p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-3 text-[var(--text-dark)]">
            {type.title}
          </h3>
          <p className="text-[var(--text-grey)] leading-relaxed">
            {type.description}
          </p>
        </div>
      ))}
    </ScrollRevealGroup>
  );
}
