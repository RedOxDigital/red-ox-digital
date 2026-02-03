import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, ScrollReveal } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
  ProcessSection,
  FAQSection,
  TestimonialCarouselSection,
  BenefitsSection,
  ChildServicesSection,
  FeaturesBenefitsTable,
} from "./WebDesignClient";

export const metadata: Metadata = {
  title: "Website Designer & Web Development Services",
  description:
    "Professional website design and development services for small businesses. Get a site that looks great and converts visitors into paying customers.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/web-design",
  },
  openGraph: {
    title: "Website Designer & Web Development Services",
    description:
      "Professional website design and development services for small businesses. Get a site that looks great and converts visitors into paying customers.",
    url: "https://redoxdigital.com.au/services/web-design",
    type: "website",
  },
};

// Child services for internal linking
const childServices = [
  {
    title: "Affordable Web Design",
    description:
      "Quality websites that fit your budget. No hidden costs, just results.",
    href: "/services/web-design/affordable",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    details: [
      "5-page website packages from $1,500",
      "No hidden costs or ongoing fees",
      "Mobile-responsive design included",
      "Basic SEO setup included",
    ],
  },
  {
    title: "Custom Web Design",
    description:
      "One-of-a-kind designs built around your brand and business goals.",
    href: "/services/web-design/custom",
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
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    details: [
      "Unique designs tailored to your brand",
      "Custom functionality and features",
      "E-commerce and booking systems",
      "Ongoing support and maintenance",
    ],
  },
  {
    title: "Website Redesign",
    description:
      "Transform your outdated site into a modern, high-performing asset.",
    href: "/services/web-design/redesign",
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    details: [
      "Modern, mobile-first redesign",
      "Improved site speed and performance",
      "Better user experience and navigation",
      "SEO improvements for better rankings",
    ],
  },
];

// Benefits/pillars
const benefits = [
  {
    title: "Built to Convert",
    description:
      "Every design choice serves a purpose. We focus on turning visitors into enquiries, not just making things look pretty.",
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Fast and Mobile-Ready",
    description:
      "Over 60% of searches happen on phones. Your site loads fast and works perfectly on every device, every time.",
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Easy to Update",
    description:
      "No tech skills needed. Make changes yourself, or let us handle it. You stay in control of your content.",
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We learn about your business, your customers, and what success looks like for you. No guesswork, just clarity.",
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Implementation",
    description:
      "We build your site with conversion in mind. Clean code, fast loading, and designed to rank in search results.",
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Growth",
    description:
      "Your site goes live, but we do not disappear. Ongoing support and updates keep your business moving forward.",
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "Mobile-responsive design",
    benefit: "Capture customers searching on their phones while on the go",
  },
  {
    feature: "SEO-optimised structure",
    benefit: "Show up when locals search for what you offer",
  },
  {
    feature: "Fast page loading",
    benefit: "Keep visitors engaged instead of bouncing to competitors",
  },
  {
    feature: "Clear calls to action",
    benefit: "Make it simple for visitors to contact you or buy",
  },
  {
    feature: "Analytics tracking",
    benefit: "See exactly how your site performs and where leads come from",
  },
  {
    feature: "SSL security certificate",
    benefit: "Build trust with visitors and rank better in Google",
  },
];

// FAQ items
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small business websites take 2 to 4 weeks from start to finish. This includes our discovery chat, design, development, and testing. Complex sites with lots of pages or custom features may take longer. We will give you a clear timeline before we start.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our websites start from $1,500 for a simple 5-page site. The final price depends on what you need, such as the number of pages, custom features, and e-commerce functionality. We provide a fixed quote upfront so there are no surprises.",
  },
  {
    question: "Do I need to provide content and images?",
    answer:
      "You can, but you do not have to. We can write your website copy and source professional images for you. Many business owners are too busy running their business to write content, and that is totally fine. We handle it.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes, absolutely. Every website we build is mobile-responsive from the start. Over 60% of web traffic comes from mobile devices, so this is not optional. Your site will look great and work perfectly on phones, tablets, and desktops.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Yes. We build sites that are easy to manage. You can update text, images, and add blog posts without any coding knowledge. We also provide training so you feel confident making changes. Or, if you prefer, we can handle updates for you.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We offer maintenance plans that cover updates, security, backups, and small changes. Having ongoing support means your site stays secure and up to date without you having to think about it.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Reached out to Red Ox Digital to rebuild our website, looking for a professional but user friendly design. Ryan and his team delivered. They also took drone footage and photos at no extra cost.",
    author: "Ken Gilkison",
    role: "Business Owner",
    company: "Google Review",
  },
  {
    quote: "I'm a plumber and used Red Ox to get my website up and running, got some photos for my website. Could not have been happier with the results. Great service, easy to communicate with.",
    author: "Ben Bullis",
    role: "Plumber",
    company: "Google Review",
  },
  {
    quote: "Amazing experience from start to finish. The website looks great and the product photography and videos turned out even better than expected. They really understood our brand.",
    author: "Jarred Harriss",
    role: "Business Owner",
    company: "Google Review",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Website Design & Development Services",
  description:
    "Professional website design and development services for small businesses in North Brisbane. Custom, affordable, and conversion-focused websites.",
  url: "https://redoxdigital.com.au/services/web-design",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Web Design", url: "https://redoxdigital.com.au/services/web-design" },
]);

export default function WebDesignPage() {
  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero Section */}
      <Section background="cream" padding="lg">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Website Designer & Development Services</h1>
            <p className="text-xl text-[var(--text-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
              As a <strong>Freelance Web Designer</strong> based in North Brisbane, I help small
              businesses get websites that actually work. Not just something that looks nice, but a
              site that brings in leads and grows your business.
            </p>
            <p className="text-lg text-[var(--text-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
              Your website is often the first impression customers get. Make it count with a
              professional, fast-loading site built to convert visitors into enquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Benefits Section */}
      <Section background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Why Choose Us"
            title="Websites That Do More Than Look Good"
            description="A pretty website means nothing if it does not bring in business. Here is what sets our approach apart."
          />
        </ScrollReveal>
        <BenefitsSection benefits={benefits} />
      </Section>

      {/* Child Services Section */}
      <Section id="services" background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Our Web Design Services"
            title="Find the Right Solution for Your Business"
            description="Whether you need a budget-friendly site, a custom build, or a fresh update to your existing website, we have you covered."
          />
        </ScrollReveal>
        <ChildServicesSection services={childServices} />
      </Section>

      {/* Process Section */}
      <Section background="dark" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="How We Work"
            title="A Simple 3-Step Process"
            description="No complicated jargon or endless meetings. Just a clear path from idea to launch."
          />
        </ScrollReveal>
        <ProcessSection steps={processSteps} />
      </Section>

      {/* Features vs Benefits Section */}
      <Section background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="What You Get"
            title="Features That Actually Matter"
            description="Every feature we include serves a purpose. Here is what each one does for your business."
          />
        </ScrollReveal>
        <FeaturesBenefitsTable items={featuresBenefits} />
      </Section>

      {/* FAQ Section */}
      <Section background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Common Questions"
            title="Web Design FAQs"
            description="Get answers to the questions we hear most often about our web design services."
          />
        </ScrollReveal>
        <FAQSection faqs={faqs} />
      </Section>

      {/* Testimonial Section with Carousel */}
      <Section background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Google Reviews"
            title="What Our Clients Say"
            description="Real results from real businesses who trusted us with their web design."
          />
        </ScrollReveal>
        <TestimonialCarouselSection testimonials={testimonials} />
      </Section>

      {/* Service Areas Section */}
      <Section background="cream" padding="md">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-grey)] leading-relaxed">
              Serving businesses across North Brisbane, including{" "}
              <Link href="/locations/north-lakes-digital-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
                North Lakes
              </Link>
              ,{" "}
              <Link href="/locations/brendale-commercial-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
                Brendale Industrial Estate
              </Link>
              , and{" "}
              <Link href="/locations/narangba-digital-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
                Narangba
              </Link>
              . We understand the unique needs of local businesses.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[var(--text-light)] mb-4">Ready to Get a Website That Works?</h2>
            <p className="text-xl text-[var(--text-light)]/90 mb-8 leading-relaxed">
              Stop losing customers to a slow or outdated website. Let us chat about what you need
              and how we can help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="light" size="lg">
                Request a Free Quote
              </Button>
              <Button
                href="tel:+61493992661"
                variant="outline"
                size="lg"
                className="border-white text-[var(--text-light)] hover:bg-white hover:text-[var(--red-ox-red-text)]"
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
