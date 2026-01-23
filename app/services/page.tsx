import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout";
import { Button, Section, SectionHeader, Grid, ServiceCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Full-service digital marketing for North Brisbane businesses. Web design, SEO, Google Ads, and media production. Get more leads and grow your business.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services",
  },
};

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="dark" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[var(--red-ox-red)] font-semibold mb-4">Our Services</p>
          <h1 className="text-white mb-6">
            Full-Service Digital Marketing for North Brisbane
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Everything your business needs to grow online, from one local partner.
            No agencies, no middlemen, just results.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section padding="lg">
        <Grid cols={2} gap="lg">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl border border-[var(--border-grey)] p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold mb-3">{service.title}</h2>
              <p className="text-[var(--medium-grey)] mb-6">{service.description}</p>

              {/* Subservices */}
              <ul className="mb-6 space-y-2">
                {service.subservices.map((sub) => (
                  <li key={sub} className="flex items-center text-sm text-[var(--charcoal)]">
                    <svg className="w-4 h-4 mr-2 text-[var(--red-ox-red)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {sub}
                  </li>
                ))}
              </ul>

              <Button href={service.href} variant="outline">
                Learn More
              </Button>
            </div>
          ))}
        </Grid>
      </Section>

      {/* Why Full Service */}
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="The Full Cycle"
          title="Why Work With One Partner?"
          description="When your web designer, SEO specialist, and ad manager are all the same person, nothing falls through the cracks."
        />
        <Grid cols={3} gap="md">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--red-ox-red)] text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Consistent Strategy</h3>
            <p className="text-[var(--medium-grey)] text-sm">
              Your website, SEO, and ads all work together towards the same goal.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--red-ox-red)] text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Faster Results</h3>
            <p className="text-[var(--medium-grey)] text-sm">
              No waiting for agencies to talk to each other. Changes happen fast.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--red-ox-red)] text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Lower Costs</h3>
            <p className="text-[var(--medium-grey)] text-sm">
              One partner means less overhead and more of your budget goes to work.
            </p>
          </div>
        </Grid>
      </Section>

      {/* Service Areas Section */}
      <Section background="white" padding="lg">
        <SectionHeader
          subtitle="Where We Work"
          title="Service Areas"
          description="We proudly serve businesses across North Brisbane. Click below to learn more about our services in your area."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/locations/north-lakes-digital-marketing"
            className="px-6 py-3 bg-[var(--light-grey)] rounded-lg text-[var(--charcoal)] hover:bg-[var(--red-ox-red)] hover:text-white transition-colors font-medium"
          >
            North Lakes
          </Link>
          <Link
            href="/locations/brendale-commercial-marketing"
            className="px-6 py-3 bg-[var(--light-grey)] rounded-lg text-[var(--charcoal)] hover:bg-[var(--red-ox-red)] hover:text-white transition-colors font-medium"
          >
            Brendale
          </Link>
          <Link
            href="/locations/narangba-digital-marketing"
            className="px-6 py-3 bg-[var(--light-grey)] rounded-lg text-[var(--charcoal)] hover:bg-[var(--red-ox-red)] hover:text-white transition-colors font-medium"
          >
            Narangba
          </Link>
          <Link
            href="/locations/kallangur-digital-marketing"
            className="px-6 py-3 bg-[var(--light-grey)] rounded-lg text-[var(--charcoal)] hover:bg-[var(--red-ox-red)] hover:text-white transition-colors font-medium"
          >
            Kallangur
          </Link>
          <Link
            href="/locations/dakabin-digital-marketing"
            className="px-6 py-3 bg-[var(--light-grey)] rounded-lg text-[var(--charcoal)] hover:bg-[var(--red-ox-red)] hover:text-white transition-colors font-medium"
          >
            Dakabin
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/locations"
            className="text-[var(--red-ox-red-text)] font-semibold hover:underline"
          >
            View All Service Areas
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/90 mb-8">
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
              className="border-white text-white hover:bg-white hover:text-[var(--red-ox-red-text)]"
            >
              Call 0493 992 661
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
