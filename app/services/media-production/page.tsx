import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, ScrollReveal } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import type { GalleryItem } from "@/components/ui";
import {
  ProcessSection,
  FAQSection,
  TestimonialCarouselSection,
  BenefitsSection,
  ChildServicesSection,
  PortfolioGallerySection,
  PhotographyTypesSection
} from "./MediaProductionClient";

export const metadata: Metadata = {
  title: "Corporate Photography | Business Photographer",
  description:
    "Professional corporate photography and business photographer services in North Brisbane. From headshots to product photos, we capture images that grow your business.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/media-production",
  },
  openGraph: {
    title: "Corporate Photography & Business Photographer | Red Ox Digital",
    description:
      "Professional corporate photography and business photographer services in North Brisbane. From headshots to product photos, we capture images that grow your business.",
    url: "https://redoxdigital.com.au/services/media-production",
    type: "website",
  },
};

// Child services for internal linking
const childServices = [
  {
    title: "Drone Photography",
    description:
      "Stunning aerial shots that show your property, project, or event from a perspective that stands out.",
    href: "/services/media-production/drone",
    imageSrc: "/images/drone-photography.jpg",
    details: [
      "Aerial property photography",
      "Construction progress documentation",
      "Real estate and commercial drone shots",
      "Event aerial coverage",
      "Licensed and insured drone operators"
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
];

// Benefits/pillars
const benefits = [
  {
    title: "Look Professional",
    description:
      "First impressions matter. Quality photos tell customers you are a real business that cares about how you present yourself. Amateur photos say the opposite.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Build Trust",
    description:
      "Real photos of your team, your work, and your business build trust with potential customers. Stock photos look fake because they are fake.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Content That Works",
    description:
      "Great photos work across your website, social media, ads, and marketing materials. One shoot gives you content you can use everywhere.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

// Process steps with icons
const processSteps = [
  {
    step: 1,
    title: "Plan the Shoot",
    description:
      "We discuss what you need, where you need it, and how you will use the photos. This ensures we capture exactly what will work for your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Capture the Content",
    description:
      "On shoot day, we handle everything. You just need to show up and be yourself. We make sure every shot is right before we leave.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Deliver and Use",
    description:
      "You get professionally edited images ready to use. We can also help you implement them on your website and marketing materials.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

// Photography types
const photographyTypes = [
  {
    title: "Team and Headshots",
    description:
      "Professional headshots for your team that work on your website, LinkedIn, and marketing materials. We make everyone look their best.",
  },
  {
    title: "Product Photography",
    description:
      "Showcase your products with clean, professional images that sell. Perfect for websites, catalogues, and social media.",
  },
  {
    title: "Workplace and Location",
    description:
      "Capture your office, shopfront, or workspace. Show customers where you work and the environment they can expect.",
  },
  {
    title: "Event Coverage",
    description:
      "Document your corporate events, launches, and functions. Capture the moments that matter for future marketing.",
  },
];

// FAQ items
const faqs = [
  {
    question: "How much does corporate photography cost?",
    answer:
      "Our photography packages start from $350 for basic headshots and go up depending on the scope of the project. A half-day business shoot covering multiple types of content typically costs between $600 and $1,200. We provide a clear quote after understanding what you need.",
  },
  {
    question: "How long does a typical photo shoot take?",
    answer:
      "It depends on what you need. Individual headshots take about 15 to 20 minutes per person. A comprehensive business shoot covering your team, products, and workplace typically takes half a day. Larger projects may take a full day or multiple sessions.",
  },
  {
    question: "Where do you shoot?",
    answer:
      "We come to you. Most corporate photography happens at your workplace, which makes sense because that is where your business is. We can also arrange studio shoots for headshots or product photography if that suits your needs better.",
  },
  {
    question: "How many photos do I get?",
    answer:
      "You receive all the good shots from the session, professionally edited and ready to use. A typical headshot session delivers 5 to 10 selects per person. A half-day business shoot usually provides 50 to 100 final images. We never hold your photos hostage.",
  },
  {
    question: "Can I use the photos anywhere I want?",
    answer:
      "Yes. You get full commercial rights to use the images however you need for your business. Website, social media, print materials, advertising. They are yours to use without restrictions or ongoing fees.",
  },
  {
    question: "Do you also do video?",
    answer:
      "Yes. As part of our freelance videographer services, we offer video production for businesses. From short social media clips to longer promotional videos, we can capture moving content alongside photography or as a separate project.",
  },
];

// Testimonials data
const testimonials = [
  {
    quote: "Ryan from Red Ox Digital has been incredible with helping my new company with our website and corporate videos. His attention to detail and guidance on direction was incredibly insightful.",
    author: "Jodi Visser",
    role: "Business Owner",
    company: "Google Review",
  },
  {
    quote: "Amazing experience from start to finish. The website looks great and the product photography and videos turned out even better than expected. They really understood our brand and made the process effortless.",
    author: "Jarred Harriss",
    role: "Business Owner",
    company: "Google Review",
  },
  {
    quote: "Reached out to Red Ox Digital to rebuild our website. They also took care of our digital marketing too, on top of that they took drone footage and photos at no extra cost. Highly recommend.",
    author: "Ken Gilkison",
    role: "Business Owner",
    company: "Google Review",
  },
];

// Portfolio gallery items
const portfolioItems: GalleryItem[] = [
  {
    id: 'portfolio-1',
    imageSrc: '/images/portfolio/corporate-headshot.jpg',
    imageAlt: 'Professional corporate headshot photography',
    size: 'g-lg',
    category: 'Corporate',
    title: 'Executive Headshots',
    description: 'Professional headshots for leadership team'
  },
  {
    id: 'portfolio-2',
    imageSrc: '/images/portfolio/product-photo.jpg',
    imageAlt: 'E-commerce product photography',
    size: 'g-sm',
    category: 'Product',
    title: 'Product Photography'
  },
  {
    id: 'portfolio-3',
    imageSrc: '/images/portfolio/drone-aerial.jpg',
    imageAlt: 'Aerial drone photography of property',
    size: 'g-md',
    category: 'Drone',
    title: 'Aerial Property Shots',
    description: 'Stunning drone footage for real estate'
  },
  {
    id: 'portfolio-4',
    imageSrc: '/images/portfolio/event-coverage.jpg',
    imageAlt: 'Corporate event photography',
    size: 'g-wide',
    category: 'Events',
    title: 'Corporate Events'
  },
  {
    id: 'portfolio-5',
    imageSrc: '/images/portfolio/video-production.jpg',
    imageAlt: 'Business video production',
    size: 'g-sq',
    category: 'Video',
    title: 'Promo Videos'
  },
  {
    id: 'portfolio-6',
    imageSrc: '/images/portfolio/workplace.jpg',
    imageAlt: 'Workplace photography',
    size: 'g-sq',
    category: 'Corporate',
    title: 'Office Environment'
  },
  {
    id: 'portfolio-7',
    imageSrc: '/images/portfolio/team-photo.jpg',
    imageAlt: 'Team photography for business',
    size: 'g-md',
    category: 'Photography',
    title: 'Team Photography',
    description: 'Capturing company culture'
  },
  {
    id: 'portfolio-8',
    imageSrc: '/images/portfolio/social-content.jpg',
    imageAlt: 'Social media content creation',
    size: 'g-sm',
    category: 'Social',
    title: 'Social Content'
  },
  {
    id: 'portfolio-9',
    imageSrc: '/images/portfolio/construction-drone.jpg',
    imageAlt: 'Construction site drone photography',
    size: 'g-lg',
    category: 'Drone',
    title: 'Construction Documentation',
    description: 'Progress tracking from above'
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Corporate Photography & Business Photographer",
  description:
    "Professional corporate photography and business photographer services in North Brisbane. Headshots, product photos, and workplace photography for small businesses.",
  url: "https://redoxdigital.com.au/services/media-production",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Media Production", url: "https://redoxdigital.com.au/services/media-production" },
]);

export default function MediaProductionPage() {
  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Breadcrumb navigation */}
      <Section background="cream" padding="none" className="py-4 border-b border-[var(--border-color)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-grey)]">
            <li>
              <Link href="/" className="hover:text-[var(--red-ox-red-text)]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--text-dark)]">Media Production</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="cream" padding="lg">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif leading-[1.1]" style={{ fontSize: "clamp(2.75rem, 8vw, 4rem)" }}>Corporate Photography & Business Photographer</h1>
            <h2 className="text-2xl font-semibold text-[var(--text-dark)] mb-6" style={{ paddingTop: "48px" }}>
              Freelance Videographer Services in North Brisbane
            </h2>
            <p className="text-xl text-[var(--text-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
              Great photos and videos do more than make your business look good. They build trust, show
              customers who you are, and give you content that works across every platform.
            </p>
            <p className="text-lg text-[var(--text-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
              As a <strong>business photographer and freelance videographer</strong> in North Brisbane, I help small businesses
              get professional images and video content without the big agency price tag. Real photos and videos of your team,
              your work, and your business that you can use everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get a Quote
              </Button>
              <Button href="#services" variant="outline" size="lg">
                See Our Services
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Benefits Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Why Professional Photos"
          title="Images That Work for Your Business"
          description="Investing in quality photography pays off across your entire marketing."
        />
        <BenefitsSection benefits={benefits} />
      </Section>

      {/* Photography Types Section */}
      <Section id="services" background="cream" padding="lg">
        <SectionHeader
          subtitle="Corporate Photography Services"
          title="What We Capture"
          description="From headshots to events, we cover all your business photography needs."
        />
        <PhotographyTypesSection types={photographyTypes} />
      </Section>

      {/* Freelance Videographer Section */}
      <Section background="dark" padding="lg">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                  Video Services
                </p>
                <h2 className="text-[var(--text-light)] mb-4">Freelance Videographer Services</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Video is the most engaging content format online. Our freelance videographer
                  services help businesses create professional video content without the production
                  company price tag.
                </p>
                <p className="text-[var(--text-grey)] mb-4 leading-relaxed">
                  From short clips for social media to longer promotional videos, we capture moving
                  content that tells your story. Video helps customers understand your business,
                  trust your team, and take action.
                </p>
                <p className="text-[var(--text-grey)] leading-relaxed">
                  We can combine photography and video in the same session, giving you content for
                  every platform in one efficient shoot.
                </p>
              </div>
              <div className="bg-[var(--charcoal-light)] p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-[var(--text-light)]">
                  Video Services Include:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <span className="text-[var(--primary-red)] mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Business promotional videos
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-[var(--primary-red)] mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Social media video content
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-[var(--primary-red)] mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Team and culture videos
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-[var(--primary-red)] mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Product demonstrations
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-[var(--primary-red)] mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Event coverage and highlights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Child Services Section (Expandable Cards) */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Specialised Services"
          title="Other Media Services"
          description="Beyond standard photography, we offer specialised services to capture unique perspectives."
        />
        <ChildServicesSection services={childServices} />
      </Section>

      {/* Process Section (Bento-style) */}
      <Section background="cream" padding="lg">
        <SectionHeader
          subtitle="How It Works"
          title="Our Simple 3-Step Process"
          description="Getting professional photos for your business is easier than you think."
        />
        <ProcessSection steps={processSteps} />
      </Section>

      {/* Testimonial Section (Carousel with auto-advance) */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Google Reviews"
          title="What Our Clients Say"
          description="Real results from real businesses who trusted us with their media production."
        />
        <TestimonialCarouselSection testimonials={testimonials} />
      </Section>

      {/* Portfolio Gallery Section (BentoGallery) */}
      <Section background="cream" padding="lg">
        <SectionHeader
          subtitle="Our Work"
          title="Portfolio Gallery"
          description="Browse our collection of photography and video work for local businesses."
        />
        <PortfolioGallerySection items={portfolioItems} />
      </Section>

      {/* FAQ Section (Enhanced Accordion) */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Common Questions"
          title="Corporate Photography FAQs"
          description="Answers to the questions we hear most about our photography services."
        />
        <FAQSection faqs={faqs} />
      </Section>

      {/* Service Areas Section */}
      <Section background="cream" padding="md">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-grey)] leading-relaxed">
              Capturing stunning visuals for businesses across{" "}
              <Link href="/locations/north-lakes-digital-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
                North Lakes
              </Link>
              ,{" "}
              <Link href="/locations/brendale-commercial-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
                Brendale
              </Link>
              , and North Brisbane.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[var(--text-light)] mb-4">Ready for Professional Business Photos?</h2>
            <p className="text-xl text-[var(--text-light)]/90 mb-8 leading-relaxed">
              Stop using outdated photos or awkward selfies. Get professional images that make your
              business look as good as it really is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="light" size="lg">
                Get a Quote
              </Button>
              <Button
                href="tel:+61493992661"
                variant="lightOutline"
                size="lg"
              >
                Call 0493 992 661
              </Button>
            </div>
            <p className="text-[var(--text-light)]/70 text-sm mt-6">
              No obligation. No lock-in contracts. Just a straightforward chat about your goals.
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
