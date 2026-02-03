"use client";

import Image from "next/image";
import { useState } from "react";
import { MobileCTA } from "@/components/layout";
import {
  Button,
  Section,
  SectionHeader,
  Grid,
  BentoGrid,
  ServiceCard,
  TestimonialCard,
  ProcessStepCard,
  ScrollReveal,
  ScrollRevealGroup,
  Carousel,
  BentoGallery,
} from "@/components/ui";
import type { GalleryItem, CarouselSlide } from "@/components/ui";
import { generateLocalBusinessSchema, generateFAQSchema, renderSchema } from "@/lib/schema";

// Service data
const services = [
  {
    title: "Search Engine Optimisation",
    description: "Get found by customers searching for your services. We help local businesses rank higher on Google so you can stop relying on word of mouth alone.",
    href: "/services/seo",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Google & Social Ads",
    description: "Reach your ideal customers where they spend their time. We set up and manage ads that bring real leads, not just clicks.",
    href: "/services/paid-ads",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Web Design",
    description: "A website that works hard for you. We build fast, mobile-friendly sites that turn visitors into customers and make it easy for people to get in touch.",
    href: "/services/web-design",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Media Production",
    description: "Professional photography and video that showcases your business. From headshots to drone footage, we capture content that helps you stand out.",
    href: "/services/media-production",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Process steps with icons
const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "We learn about your business, goals, and what success looks like for you. No tech talk, just a friendly chat.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Strategy",
    description: "We build a clear plan based on what works for businesses like yours. You will know exactly what we will do and why.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Implementation",
    description: "We get to work. You get regular updates without the jargon. We make changes based on real results, not guesswork.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Growth",
    description: "Watch your leads grow. We track what matters and keep improving so your marketing works harder over time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// Testimonials - Real Google Reviews
const testimonials = [
  {
    quote: "Ryan from Red Ox Digital has been incredible with helping my new company with our website and corporate videos. His attention to detail and guidance on direction was incredibly insightful.",
    author: "Jodi Visser",
    role: "Business Owner",
    company: "Google Review",
  },
  {
    quote: "Huge shoutout to Ryan for helping us get our shop's digital side in order! He did a fantastic job overhauling our website and Google profile, making everything look professional and easy to find.",
    author: "Carly Stone",
    role: "Business Owner",
    company: "Google Review",
  },
  {
    quote: "When I first tried Google Ads, I wasted so much money. When I met Ryan at Red Ox Digital, he explained SEO so simply. Now we spend less money and actually generate strong leads that are converting to business.",
    author: "Stephen Adnams",
    role: "Owner, SEQ Medical",
    company: "Google Review",
  },
  {
    quote: "Ryan was a great help to our business and we have seen the results. Highly recommend Red Ox Digital for anyone looking to improve their online presence.",
    author: "Reegan Chapman",
    role: "Business Owner",
    company: "Google Review",
  },
  {
    quote: "They delivered a professional but user friendly design. Our new website has already helped bring in more enquiries. Highly recommend.",
    author: "Ken Gilkison",
    role: "Business Owner",
    company: "Google Review",
  },
  {
    quote: "Amazing experience from start to finish. The website looks great and Ryan made the whole process easy to understand. Very happy with the results.",
    author: "Jarred Harriss",
    role: "Business Owner",
    company: "Google Review",
  },
];

// Google Reviews data
const googleReviews = [
  { name: "Reegan Chapman", review: "Ryan was a great help to our business and we have seen the results. Highly recommend." },
  { name: "Carly Stone", review: "Huge shoutout to Ryan for helping us get our shop's digital side in order!" },
  { name: "Jodi Visser", review: "His attention to detail and guidance on direction was incredibly insightful." },
  { name: "Ken Gilkison", review: "They delivered a professional but user friendly design. Highly recommend." },
  { name: "Jarred Harriss", review: "Amazing experience from start to finish. The website looks great." },
  { name: "Ben Bullis", review: "Could not have been happier with the results. Great service, easy to communicate with." },
  { name: "Stephen Adnams", review: "We spend less money and actually generate strong leads that are converting." },
  { name: "Ivan Szaks", review: "If you're sick of not knowing what your marketing dollars are doing, talk to Red Ox Digital." },
];

// Portfolio gallery items
const portfolioItems: GalleryItem[] = [
  {
    id: "portfolio-1",
    imageSrc: "/images/work/web-design-portfolio.webp",
    imageAlt: "Website design project for local Brisbane business",
    size: "g-lg",
    category: "Web Design",
    title: "Local Business Website",
    description: "Complete website redesign with SEO optimisation",
  },
  {
    id: "portfolio-2",
    imageSrc: "/images/work/seo-campaign.webp",
    imageAlt: "SEO campaign results dashboard",
    size: "g-sm",
    category: "SEO",
    title: "SEO Campaign",
    description: "First page rankings achieved",
  },
  {
    id: "portfolio-3",
    imageSrc: "/images/work/google-ads.webp",
    imageAlt: "Google Ads performance dashboard",
    size: "g-md",
    category: "Paid Ads",
    title: "Google Ads Management",
    description: "300% ROI on ad spend",
  },
  {
    id: "portfolio-4",
    imageSrc: "/images/work/video-production.webp",
    imageAlt: "Professional video production setup",
    size: "g-wide",
    category: "Media",
    title: "Corporate Video",
  },
  {
    id: "portfolio-5",
    imageSrc: "/images/work/branding-project.webp",
    imageAlt: "Brand identity design showcase",
    size: "g-sq",
    category: "Branding",
    title: "Brand Identity",
  },
  {
    id: "portfolio-6",
    imageSrc: "/images/work/social-media.webp",
    imageAlt: "Social media marketing campaign",
    size: "g-sq",
    category: "Social",
    title: "Social Strategy",
  },
  {
    id: "portfolio-7",
    imageSrc: "/images/work/ecommerce-site.webp",
    imageAlt: "E-commerce website design",
    size: "g-md",
    category: "E-Commerce",
    title: "Online Store",
    description: "Full e-commerce solution with payment integration",
  },
  {
    id: "portfolio-8",
    imageSrc: "/images/work/drone-footage.webp",
    imageAlt: "Drone photography for real estate",
    size: "g-sm",
    category: "Media",
    title: "Drone Photography",
  },
  {
    id: "portfolio-9",
    imageSrc: "/images/work/local-seo.webp",
    imageAlt: "Local SEO optimization results",
    size: "g-lg",
    category: "Local SEO",
    title: "Local Search Domination",
    description: "Google Business Profile optimisation",
  },
];

// FAQ item type
interface FAQItem {
  question: string;
  answer: string;
}

// FAQ data
const faqs: FAQItem[] = [
  {
    question: "How much does digital marketing cost?",
    answer: "It depends on what you need. Most small businesses start with a website or basic SEO, which typically costs between $2,000 and $5,000 upfront. Ongoing marketing services usually range from $500 to $2,000 per month. We will give you a clear quote after learning about your goals.",
  },
  {
    question: "How long until I see results?",
    answer: "Paid ads can start bringing leads within days. SEO takes longer, usually 3 to 6 months to see significant improvement. We will set realistic expectations upfront and show you progress along the way.",
  },
  {
    question: "Do you work with businesses outside North Brisbane?",
    answer: "We focus on North Brisbane because we know the area and can meet you in person. However, we do work with select businesses elsewhere in Queensland. Get in touch and we will see if we are a good fit.",
  },
  {
    question: "What makes you different from big agencies?",
    answer: "You work directly with me, not a junior account manager. I am local, I answer my phone, and I focus on results that matter to your business. No long contracts, no confusing reports, just straightforward marketing that works.",
  },
  {
    question: "Do I need to understand marketing to work with you?",
    answer: "Not at all. I explain everything in plain English and handle the technical side. You know your business. I know marketing. Together we make it work.",
  },
];

// FAQ Accordion component with enhanced design-reference styling
function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`accordion-item border rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-[var(--primary-red)] bg-[var(--bg-off-white)]"
                : "border-[var(--border-color)] bg-[var(--bg-off-white)]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`accordion-header w-full flex items-center justify-between p-5 text-left transition-all duration-300 min-h-[60px] ${
                isOpen
                  ? "bg-transparent text-[var(--primary-red)] border-b border-[var(--primary-red)]"
                  : "bg-[var(--primary-red)] text-white hover:opacity-90"
              }`}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold pr-4">
                {faq.question}
              </span>
              <span className="flex-shrink-0 ml-4">
                <svg
                  className={`w-5 h-5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "rotate-180" : ""
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
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-5 text-[var(--text-grey)] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HomePage() {
  // Generate schemas
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(faqs);


  // Create testimonial carousel slides (3 per slide)
  const testimonialSlides: CarouselSlide[] = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    const slideTestimonials = testimonials.slice(i, i + 3);
    testimonialSlides.push({
      id: `testimonial-slide-${i}`,
      content: (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          width: '100%'
        }}>
          {slideTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      ),
    });
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([localBusinessSchema, faqSchema]),
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#F5F0E6] overflow-hidden py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content with line-by-line animation */}
            <div>
              <h1 className="font-serif text-[2.25rem] sm:text-[3rem] lg:text-[4.5rem] leading-[1.2] mb-8 sm:mb-10 lg:mb-12 text-[#1A1A1A]">
                <span
                  className="block opacity-0 translate-y-10"
                  style={{ animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
                >
                  Digital Marketing
                </span>
                <span
                  className="block opacity-0 translate-y-10"
                  style={{ animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards" }}
                >
                  Consultant in Dakabin
                </span>
                <span
                  className="block opacity-0 translate-y-10"
                  style={{ animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards" }}
                >
                  & North Brisbane
                </span>
              </h1>
              <p
                className="text-lg lg:text-xl text-[#555555] mb-8 lg:max-w-[90%] leading-relaxed opacity-0"
                style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards" }}
              >
                Stop losing customers to competitors who show up first on Google.
                Get a simple, clear marketing strategy that brings in real leads, not just clicks.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0"
                style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards" }}
              >
                <Button href="/contact" size="lg" className="w-full sm:w-auto">
                  Book a Free Discovery Call
                </Button>
                <Button href="#services" variant="outline" size="lg" className="w-full sm:w-auto">
                  See Our Services
                </Button>
              </div>

              {/* Quick trust indicators */}
              <div
                className="mt-8 lg:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm text-[#555555] opacity-0"
                style={{ animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards" }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C23B22] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Local North Brisbane Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C23B22] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Lock-in Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C23B22] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Results You Can Measure</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image - clean design matching reference */}
            <div className="relative rounded-lg overflow-hidden h-[500px] lg:h-[600px] hidden lg:block group cursor-pointer">
              <Image
                src="/images/sales-team.webp"
                alt="Ryan from Red Ox Digital helping a North Brisbane business owner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Google Reviews Infinite Scroll */}
      <section className="bg-[var(--bg-off-white)] border-y border-[var(--border-color)] py-8 md:py-12 overflow-hidden">
        <div className="mx-auto max-w-[var(--container-width)] px-[var(--spacing-md)] mb-6">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <p className="text-center text-sm text-[var(--text-grey)] uppercase tracking-wide font-medium">
              Trusted by North Brisbane Businesses
            </p>
          </div>
        </div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-off-white)] to-transparent z-10 pointer-events-none" />
          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-off-white)] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track - infinite animation */}
          <div className="flex animate-scroll"
          >
            {/* First set of reviews */}
            {googleReviews.map((review, index) => (
              <div
                key={`review-1-${index}`}
                className="flex-shrink-0 w-80 mx-3 p-4 bg-[var(--card-bg)] rounded-[var(--radius-md)] select-none"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[var(--text-dark)] mb-2 line-clamp-2">&quot;{review.review}&quot;</p>
                <p className="text-xs text-[var(--text-grey)] font-medium">{review.name}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {googleReviews.map((review, index) => (
              <div
                key={`review-2-${index}`}
                className="flex-shrink-0 w-80 mx-3 p-4 bg-[var(--card-bg)] rounded-[var(--radius-md)] select-none"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[var(--text-dark)] mb-2 line-clamp-2">&quot;{review.review}&quot;</p>
                <p className="text-xs text-[var(--text-grey)] font-medium">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with ScrollReveal */}
      <Section id="services" background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="What We Do"
            title="Marketing That Brings Real Leads"
            description="We focus on four things that work for local businesses. No fluff, no wasted budget. Just simple strategies that help customers find you."
          />
        </ScrollReveal>
        <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </ScrollRevealGroup>
        <ScrollReveal delay={2}>
          <div className="text-center mt-12">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Why Work With Us / Value Proposition */}
      <Section background="cream" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--card-bg)]">
              <Image
                src="/images/meeting-hero.webp"
                alt="Red Ox Digital team working with local business owners"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Stats overlay with offset shadow */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--primary-red)] text-white p-6 rounded-[var(--radius-md)] shadow-lg hidden md:block">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-sm opacity-90">Local Focus</p>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={1} className="order-1 lg:order-2">
            <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-2">
              Why Red Ox Digital
            </p>
            <h2 className="mb-6">Marketing That Works for Small Business</h2>
            <p className="text-[var(--text-grey)] text-lg mb-6 leading-relaxed">
              Most marketing agencies talk big but deliver reports you do not understand.
              We do things differently. You get straight answers, clear results, and a local
              partner who actually picks up the phone.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--text-dark)]">
                  <strong>Plain English reporting.</strong> You will always know what is working and what is not.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--text-dark)]">
                  <strong>No long contracts.</strong> We earn your business every month.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--text-dark)]">
                  <strong>Local knowledge.</strong> We know North Brisbane because we live and work here.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--text-dark)]">
                  <strong>Results focus.</strong> We track leads and sales, not vanity metrics.
                </span>
              </li>
            </ul>
            <Button href="/about">
              Learn More About Us
            </Button>
          </ScrollReveal>
        </div>
      </Section>

      {/* Our Process Section with ScrollReveal */}
      <Section id="process" background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="How We Work"
            title="Simple Process, Real Results"
            description="No confusion, no surprises. Here is exactly how we help your business grow."
          />
        </ScrollReveal>
        <ScrollRevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <ProcessStepCard
              key={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </ScrollRevealGroup>
        <ScrollReveal delay={2}>
          <div className="text-center mt-12">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Journey
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonials / Social Proof with Carousel */}
      <Section id="testimonials" background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="What Our Clients Say"
            title="Real Results for Real Businesses"
            description="Do not just take our word for it. Here is what North Brisbane business owners have to say."
          />
        </ScrollReveal>
        <ScrollReveal delay={1}>
          {/* Testimonial Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            width: '100%'
          }} className="testimonial-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-md)',
                  padding: '32px 24px',
                  boxShadow: '8px 8px 0px var(--primary-red)',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '280px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="testimonial-card"
              >
                {/* Star Rating */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} style={{ width: '20px', height: '20px', color: '#FBBC04' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="font-serif italic text-lg text-[var(--text-dark)] leading-relaxed mb-6 flex-grow"
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div style={{
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--primary-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', color: 'var(--text-dark)', margin: 0 }}>
                      {testimonial.author}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-grey)', margin: 0 }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CSS for responsive grid */}
          <style jsx>{`
            @media (max-width: 1024px) {
              .testimonial-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 640px) {
              .testimonial-grid {
                grid-template-columns: 1fr !important;
              }
            }
            .testimonial-card:hover {
              transform: translate(-4px, -4px);
              box-shadow: 12px 12px 0px var(--primary-red) !important;
            }
          `}</style>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="text-center mt-12">
            <a
              href="https://share.google/DSmj00oU7t0Db7d1g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--primary-red)] font-semibold hover:underline min-h-[44px] px-4 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              View All Google Reviews
            </a>
          </div>
        </ScrollReveal>
      </Section>

      {/* Our Work Gallery Section */}
      <Section id="our-work" background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Our Work"
            title="Projects We Are Proud Of"
            description="From websites to SEO campaigns, here is a glimpse of the results we have delivered for North Brisbane businesses."
          />
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <BentoGallery items={portfolioItems} />
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="text-center mt-12">
            <Button href="/contact" variant="outline">
              Start Your Project
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* FAQ Section with ScrollReveal */}
      <Section id="faq" background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Got questions? Here are the answers to what most business owners ask us."
          />
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="text-center mt-12">
            <p className="text-[var(--text-grey)] mb-4">
              Still have questions? We are happy to chat.
            </p>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Final CTA Section */}
      <Section background="primary" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--text-light)] mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-[var(--text-light)]/90 text-lg mb-8 max-w-2xl mx-auto">
              Stop wondering where your next customer will come from. Book a free discovery call
              and let us show you a clear path to more leads and more sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="light"
                size="lg"
              >
                Book Your Free Discovery Call
              </Button>
              <Button
                href="tel:+61493992661"
                variant="outline"
                size="lg"
                className="border-[var(--text-light)] text-[var(--text-light)] hover:bg-[var(--text-light)] hover:text-[var(--primary-red)]"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </Button>
            </div>
            <p className="text-[var(--text-light)]/70 text-sm mt-6">
              No obligation. No lock-in contracts. Just a straightforward chat about your goals.
            </p>
            <p className="text-[var(--text-light)]/70 text-sm mt-2">
              Based in Dakabin, serving all of North Brisbane
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <MobileCTA />
    </>
  );
}
