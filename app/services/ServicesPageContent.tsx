'use client';

import Link from "next/link";
import {
  Button,
  Section,
  SectionHeader,
  Grid,
  ScrollReveal,
  ScrollRevealGroup,
  BentoGallery
} from "@/components/ui";
import type { GalleryItem } from "@/components/ui";

// Service icons
const WebIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SeoIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const AdsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
);

const MediaIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const services = [
  {
    title: "Web Design & Development",
    description: "Websites built to convert visitors into customers. Fast, mobile-friendly, and designed for results.",
    href: "/services/web-design",
    icon: <WebIcon />,
    subservices: ["Affordable Web Design", "Custom Web Design", "Website Redesign"],
  },
  {
    title: "Search Engine Optimisation",
    description: "Get found on Google by customers actively searching for your services. Sustainable growth that compounds over time.",
    href: "/services/seo",
    icon: <SeoIcon />,
    subservices: ["Local SEO", "On-Page SEO", "Technical SEO"],
  },
  {
    title: "Google Ads & PPC",
    description: "Targeted advertising that brings leads, not just clicks. Every dollar tracked and optimised for maximum return.",
    href: "/services/paid-ads",
    icon: <AdsIcon />,
    subservices: ["Google Ads Management", "Facebook Ads", "Remarketing"],
  },
  {
    title: "Media Production",
    description: "Professional photography and video that builds trust and showcases your business at its best.",
    href: "/services/media-production",
    icon: <MediaIcon />,
    subservices: ["Corporate Photography", "Drone Photography", "Video Production"],
  },
];

// Gallery items showcasing portfolio work across all services
const galleryItems: GalleryItem[] = [
  {
    id: "web-design-1",
    imageSrc: "/images/lead-generation.webp",
    imageAlt: "Modern website design for lead generation",
    size: "g-lg",
    category: "Web Design",
    title: "Lead Generation Website",
    description: "High-converting landing pages designed for local businesses",
  },
  {
    id: "seo-1",
    imageSrc: "/images/blog/local-seo.jpg",
    imageAlt: "Local SEO campaign results",
    size: "g-sm",
    category: "SEO",
    title: "Local SEO Campaign",
  },
  {
    id: "ads-1",
    imageSrc: "/images/blog/google-ads.jpg",
    imageAlt: "Google Ads management dashboard",
    size: "g-md",
    category: "Paid Ads",
    title: "Google Ads Management",
    description: "ROI-focused ad campaigns for North Brisbane businesses",
  },
  {
    id: "media-1",
    imageSrc: "/images/meeting-hero.webp",
    imageAlt: "Professional business photography",
    size: "g-wide",
    category: "Media Production",
    title: "Corporate Photography",
  },
  {
    id: "web-design-2",
    imageSrc: "/images/blog/page-speed.jpg",
    imageAlt: "Fast-loading website optimization",
    size: "g-sq",
    category: "Web Design",
    title: "Speed Optimization",
  },
  {
    id: "seo-2",
    imageSrc: "/images/blog/google-business-profile.jpg",
    imageAlt: "Google Business Profile optimization",
    size: "g-sq",
    category: "SEO",
    title: "GBP Optimization",
  },
  {
    id: "media-2",
    imageSrc: "/images/north-lakes-aerial.webp",
    imageAlt: "Aerial drone photography",
    size: "g-md",
    category: "Media Production",
    title: "Drone Photography",
    description: "Stunning aerial views for real estate and commercial properties",
  },
  {
    id: "ads-2",
    imageSrc: "/images/business-advocates.webp",
    imageAlt: "Facebook advertising campaign",
    size: "g-sm",
    category: "Paid Ads",
    title: "Social Media Ads",
  },
  {
    id: "web-design-3",
    imageSrc: "/images/sales-team.webp",
    imageAlt: "E-commerce website development",
    size: "g-lg",
    category: "Web Design",
    title: "Business Website",
    description: "Custom websites built to drive sales and conversions",
  },
];

export function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[var(--primary-red)] font-semibold mb-4">Our Services</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6">
              Full-Service Digital Marketing for North Brisbane
            </h1>
            <p className="text-[var(--text-grey)] text-lg mb-8">
              Everything your business needs to grow online, from one local partner.
              No agencies, no middlemen, just results.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Services Grid */}
      <Section background="offWhite" padding="lg">
        <ScrollRevealGroup>
          <Grid cols={2} gap="lg">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bento-card bg-[var(--card-bg)] rounded-[var(--radius-md)] border border-[#333] p-8 shadow-[8px_8px_0px_var(--primary-red)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_var(--primary-red)] cursor-pointer group"
              >
                <div className="bento-icon w-14 h-14 mb-6 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary-red-light)] text-[var(--primary-red)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold mb-3 text-[var(--text-dark)]">{service.title}</h2>
                <p className="text-[var(--text-grey)] mb-6">{service.description}</p>

                {/* Subservices */}
                <ul className="mb-6 space-y-2">
                  {service.subservices.map((sub) => (
                    <li key={sub} className="flex items-center text-sm text-[var(--text-dark)]">
                      <svg className="w-4 h-4 mr-2 text-[var(--primary-red)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {sub}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center px-6 py-2.5 border-2 border-[var(--primary-red)] text-[var(--primary-red)] rounded-full font-medium transition-all duration-300 group-hover:bg-[var(--primary-red)] group-hover:text-white">
                  Learn More
                </span>
              </Link>
            ))}
          </Grid>
        </ScrollRevealGroup>
      </Section>

      {/* Why Full Service */}
      <Section background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="The Full Cycle"
            title="Why Work With One Partner?"
            description="When your web designer, SEO specialist, and ad manager are all the same person, nothing falls through the cracks."
          />
        </ScrollReveal>
        <ScrollRevealGroup>
          <Grid cols={3} gap="md">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">Consistent Strategy</h3>
              <p className="text-[var(--text-grey)] text-sm">
                Your website, SEO, and ads all work together towards the same goal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">Faster Results</h3>
              <p className="text-[var(--text-grey)] text-sm">
                No waiting for agencies to talk to each other. Changes happen fast.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">Lower Costs</h3>
              <p className="text-[var(--text-grey)] text-sm">
                One partner means less overhead and more of your budget goes to work.
              </p>
            </div>
          </Grid>
        </ScrollRevealGroup>
      </Section>

      {/* Gallery Section */}
      <Section background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Our Work"
            title="Recent Projects"
            description="A showcase of our digital marketing work across web design, SEO, paid advertising, and media production."
          />
        </ScrollReveal>
        <ScrollReveal>
          <BentoGallery items={galleryItems} />
        </ScrollReveal>
      </Section>

      {/* Service Areas Section */}
      <Section background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Where We Work"
            title="Service Areas"
            description="We proudly serve businesses across North Brisbane. Click below to learn more about our services in your area."
          />
        </ScrollReveal>
        <ScrollRevealGroup>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/locations/north-lakes-digital-marketing"
              className="px-6 py-3 bg-[var(--card-bg)] rounded-[var(--radius-sm)] text-[var(--text-dark)] hover:bg-[var(--primary-red)] hover:text-white transition-colors font-medium"
            >
              North Lakes
            </Link>
            <Link
              href="/locations/brendale-commercial-marketing"
              className="px-6 py-3 bg-[var(--card-bg)] rounded-[var(--radius-sm)] text-[var(--text-dark)] hover:bg-[var(--primary-red)] hover:text-white transition-colors font-medium"
            >
              Brendale
            </Link>
            <Link
              href="/locations/narangba-digital-marketing"
              className="px-6 py-3 bg-[var(--card-bg)] rounded-[var(--radius-sm)] text-[var(--text-dark)] hover:bg-[var(--primary-red)] hover:text-white transition-colors font-medium"
            >
              Narangba
            </Link>
            <Link
              href="/locations/kallangur-digital-marketing"
              className="px-6 py-3 bg-[var(--card-bg)] rounded-[var(--radius-sm)] text-[var(--text-dark)] hover:bg-[var(--primary-red)] hover:text-white transition-colors font-medium"
            >
              Kallangur
            </Link>
            <Link
              href="/locations/dakabin-digital-marketing"
              className="px-6 py-3 bg-[var(--card-bg)] rounded-[var(--radius-sm)] text-[var(--text-dark)] hover:bg-[var(--primary-red)] hover:text-white transition-colors font-medium"
            >
              Dakabin
            </Link>
          </div>
        </ScrollRevealGroup>
        <ScrollReveal delay={2}>
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="text-[var(--primary-red)] font-semibold hover:underline"
            >
              View All Service Areas
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section background="primary" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[var(--text-light)] mb-4">Not Sure Where to Start?</h2>
            <p className="text-[var(--text-light)]/90 mb-8">
              Book a free discovery call. We will look at your business and recommend where to focus first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="light" size="lg">
                Book a Discovery Call
              </Button>
              <Button
                href="tel:+61493992661"
                variant="outline"
                size="lg"
                className="border-[var(--text-light)] text-[var(--text-light)] hover:bg-[var(--text-light)] hover:text-[var(--primary-red)]"
              >
                Call 0493 992 661
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
