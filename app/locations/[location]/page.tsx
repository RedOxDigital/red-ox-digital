import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeader, Grid, Button } from "@/components/ui";
import {
  getAllLocationSlugs,
  getLocationBySlug,
  type Location,
} from "@/lib/locations";
import { generateLocationSchema, generateBreadcrumbSchema } from "@/lib/schema";

// Generate static paths for all 10 location pages
export function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((location) => ({
    location,
  }));
}

// Generate unique metadata for each location page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: slug } = await params;
  const locationData = getLocationBySlug(slug);

  if (!locationData) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: locationData.title,
    description: locationData.description,
    keywords: locationData.keywords,
    alternates: {
      canonical: `https://redoxdigital.com.au/locations/${slug}`,
    },
    openGraph: {
      title: locationData.title,
      description: locationData.description,
      url: `https://redoxdigital.com.au/locations/${slug}`,
      type: "website",
      locale: "en_AU",
    },
  };
}

// Zone-specific content for Industrial locations
function getIndustrialContent(location: Location) {
  const industrialBenefits = [
    {
      title: "Websites Built for Trade Businesses",
      description: `We create websites that work as hard as you do. Clear contact details, service lists, and job galleries that show off your work to ${location.name} customers.`,
    },
    {
      title: "Marketing That Speaks Your Language",
      description: `No fancy jargon here. We understand how trade businesses in ${location.name} operate and create marketing that connects with your ideal customers.`,
    },
    {
      title: "Lead Generation That Works",
      description: `Get more quote requests from ${location.name} and surrounding industrial areas. Our B2B strategies bring serious enquiries, not tyre kickers.`,
    },
    {
      title: "Local Knowledge, Local Results",
      description: `We know the ${location.landmarks.join(", ")} area inside out. That local insight helps us target the right customers for your trade services.`,
    },
  ];

  return {
    intro: `${location.name} is home to some of North Brisbane's busiest industrial and trade businesses. From warehousing operations to manufacturing plants and trade services, this area needs marketing that cuts through the noise.`,
    context: `We work with tradies, manufacturers, and industrial businesses in ${location.name} who need practical digital marketing solutions. No fluff, no filler. Just websites, ads, and SEO that bring in quality leads.`,
    benefits: industrialBenefits,
    ctaText: `Ready to grow your ${location.name} trade business?`,
  };
}

// Zone-specific content for Retail locations
function getRetailContent(location: Location) {
  const retailBenefits = [
    {
      title: "Stand Out From Local Competition",
      description: `${location.name} has plenty of businesses competing for attention. We help you rise above the noise with websites and marketing that capture what makes you different.`,
    },
    {
      title: "Get Found on Google Maps",
      description: `When ${location.name} locals search for services like yours, your business should appear first. Our local SEO puts you where customers are looking.`,
    },
    {
      title: "Websites That Convert Browsers to Buyers",
      description: `Your website is your 24/7 salesperson. We build sites that look professional, load fast, and turn visitors into paying customers.`,
    },
    {
      title: "Marketing That Fits Your Budget",
      description: `Small business friendly pricing without small business results. We deliver enterprise level strategies sized for ${location.name} local businesses.`,
    },
  ];

  return {
    intro: `${location.name} is a thriving community with growing opportunities for local businesses. From retail shops to professional services, this area rewards businesses that invest in their digital presence.`,
    context: `We partner with ${location.name} businesses who want to attract more local customers. Whether you run a cafe, salon, medical practice, or retail store, we create marketing that brings people through your door.`,
    benefits: retailBenefits,
    ctaText: `Ready to attract more ${location.name} customers?`,
  };
}

// Get zone-specific content based on location data
function getZoneContent(location: Location) {
  if (location.zone === "industrial") {
    return getIndustrialContent(location);
  }
  return getRetailContent(location);
}

// Service icons (inline SVG components for performance)
const ServiceIcons: Record<string, React.ReactNode> = {
  default: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  web: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  seo: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  ads: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  social: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  lead: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  content: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  email: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  photo: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

// Map service names to icons
function getServiceIcon(serviceName: string): React.ReactNode {
  const name = serviceName.toLowerCase();
  if (name.includes("web") || name.includes("design") || name.includes("development")) return ServiceIcons.web;
  if (name.includes("seo") || name.includes("search")) return ServiceIcons.seo;
  if (name.includes("ads") || name.includes("ppc") || name.includes("google ads")) return ServiceIcons.ads;
  if (name.includes("social") || name.includes("facebook")) return ServiceIcons.social;
  if (name.includes("lead") || name.includes("b2b")) return ServiceIcons.lead;
  if (name.includes("content") || name.includes("marketing")) return ServiceIcons.content;
  if (name.includes("email")) return ServiceIcons.email;
  if (name.includes("photo") || name.includes("media")) return ServiceIcons.photo;
  return ServiceIcons.default;
}

// Main page component
export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const zoneContent = getZoneContent(location);
  const pageUrl = `https://redoxdigital.com.au/locations/${slug}`;

  // Generate JSON-LD schemas
  const locationSchema = generateLocationSchema({
    location: location.name,
    description: location.description,
    url: pageUrl,
    services: location.focusServices,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://redoxdigital.com.au" },
    { name: "Locations", url: "https://redoxdigital.com.au/locations" },
    { name: location.name, url: pageUrl },
  ]);

  // Check if this is Dakabin (home base) for special messaging
  const isDakabin = location.slug === "dakabin-digital-marketing";

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([locationSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero Section */}
      <Section background="dark" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[var(--red-ox-red)]">{location.name}</li>
            </ol>
          </nav>

          {/* H1 */}
          <h1 className="text-white mb-6">{location.h1}</h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {isDakabin
              ? "Proudly based right here in Dakabin, we are your neighbours and your digital marketing partner."
              : `Just minutes from our Dakabin office, we provide hands on digital marketing support for ${location.name} businesses.`}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Location Businesses Choose Us Section */}
      <Section background="white" padding="lg">
        <SectionHeader
          subtitle={location.zone === "industrial" ? "For Trade & Industrial" : "For Local Businesses"}
          title={`Why ${location.name} Businesses Choose Red Ox Digital`}
          description={zoneContent.intro}
          align="center"
        />

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-[var(--medium-grey)] text-lg leading-relaxed text-center">
            {zoneContent.context}
          </p>
        </div>

        <Grid cols={2} gap="lg">
          {zoneContent.benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[var(--light-grey)] border border-[var(--border-grey)]"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-[var(--red-ox-red)] text-white">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
                {benefit.title}
              </h3>
              <p className="text-[var(--medium-grey)] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </Grid>
      </Section>

      {/* Zone-Specific Service Links */}
      <Section background="white" padding="md">
        <div className="max-w-3xl mx-auto">
          {location.zone === "industrial" ? (
            <div className="bg-[var(--light-grey)] p-6 rounded-xl border border-[var(--border-grey)]">
              <p className="text-[var(--medium-grey)] leading-relaxed">
                Looking for{" "}
                <Link href="/services/web-design" className="text-[var(--red-ox-red-text)] hover:underline font-semibold">
                  Industrial Web Design
                </Link>
                ? We specialise in websites for manufacturing and trade businesses. Need more leads? Our{" "}
                <Link href="/services/seo" className="text-[var(--red-ox-red-text)] hover:underline font-semibold">
                  SEO services
                </Link>{" "}
                help you rank for B2B searches.
              </p>
            </div>
          ) : (
            <div className="bg-[var(--light-grey)] p-6 rounded-xl border border-[var(--border-grey)]">
              <p className="text-[var(--medium-grey)] leading-relaxed">
                Looking for{" "}
                <Link href="/services/web-design" className="text-[var(--red-ox-red-text)] hover:underline font-semibold">
                  Web Design
                </Link>{" "}
                that converts? We build sites that turn visitors into customers. Our{" "}
                <Link href="/services/seo/local-seo" className="text-[var(--red-ox-red-text)] hover:underline font-semibold">
                  Local SEO
                </Link>{" "}
                helps you dominate Google Maps.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Services Available Section */}
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="What We Offer"
          title={`Digital Marketing Services in ${location.name}`}
          description={`Our team specialises in these services for ${location.name} businesses. Each solution is tailored to your specific industry and goals.`}
          align="center"
        />

        <Grid cols={4} gap="md">
          {location.focusServices.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-[var(--border-grey)] hover:border-[var(--red-ox-red)] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
                {getServiceIcon(service)}
              </div>
              <h3 className="text-lg font-semibold text-[var(--charcoal)]">
                {service}
              </h3>
            </div>
          ))}
        </Grid>

        <div className="text-center mt-12">
          <Button href="/services" variant="secondary" size="lg">
            Explore All Services
          </Button>
        </div>
      </Section>

      {/* Project Spotlight Section */}
      <Section background="white" padding="lg">
        <SectionHeader
          subtitle="Our Work"
          title={`Project Spotlight: ${location.name}`}
          description={`See how we have helped ${location.name} businesses grow their online presence and attract more customers.`}
          align="center"
        />

        {/* Case Studies - Different templates for Industrial vs Retail zones */}
        {location.zone === "industrial" ? (
          /* Industrial Zone Case Study Template */
          <div className="max-w-4xl mx-auto">
            <div className="bg-[var(--light-grey)] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Case Study Image */}
                <div className="relative min-h-[300px]">
                  <Image
                    src="/images/tradies-background.webp"
                    alt={`Manufacturing client success story in ${location.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Case Study Content */}
                <div className="p-8">
                  <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                    Trade Business Success
                  </p>
                  <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-4">
                    Local Manufacturing Company Grows B2B Leads
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="font-semibold text-[var(--charcoal)] mb-1">The Challenge</p>
                      <p className="text-[var(--medium-grey)] text-sm leading-relaxed">
                        A {location.name} manufacturing business was struggling to be found by B2B customers. Their old website did not show up in Google searches, and they relied only on word of mouth for new work.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[var(--charcoal)] mb-1">Our Solution</p>
                      <p className="text-[var(--medium-grey)] text-sm leading-relaxed">
                        We built a new industrial web design with clear service pages and strong calls to action. Then we added local SEO to help them rank for trade searches in the {location.landmarks[0]} area.
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-white rounded-lg p-4 border border-[var(--border-grey)]">
                    <p className="font-semibold text-[var(--charcoal)] mb-3">The Results</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[var(--red-ox-red)]">45%</p>
                        <p className="text-xs text-[var(--medium-grey)]">More Quote Requests</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[var(--red-ox-red)]">Page 1</p>
                        <p className="text-xs text-[var(--medium-grey)]">Google Rankings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Retail Zone Case Study Template */
          <div className="max-w-4xl mx-auto">
            <div className="bg-[var(--light-grey)] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Case Study Image */}
                <div className="relative min-h-[300px]">
                  <Image
                    src="/images/north-lakes-location.webp"
                    alt={`Local retail client success story in ${location.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Case Study Content */}
                <div className="p-8">
                  <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                    Local Business Win
                  </p>
                  <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-4">
                    Cafe Stands Out Against Big Chain Competition
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="font-semibold text-[var(--charcoal)] mb-1">The Challenge</p>
                      <p className="text-[var(--medium-grey)] text-sm leading-relaxed">
                        A {location.name} cafe was losing customers to chain stores near {location.landmarks[0]}. They needed a way to reach local families and workers who wanted something better than a franchise coffee.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[var(--charcoal)] mb-1">Our Solution</p>
                      <p className="text-[var(--medium-grey)] text-sm leading-relaxed">
                        We optimised their Google Maps listing and ran targeted local ads to reach people searching for cafes in {location.name}. We also helped them collect and respond to customer reviews.
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-white rounded-lg p-4 border border-[var(--border-grey)]">
                    <p className="font-semibold text-[var(--charcoal)] mb-3">The Results</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[var(--red-ox-red)]">30%</p>
                        <p className="text-xs text-[var(--medium-grey)]">More Foot Traffic</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[var(--red-ox-red)]">4.8</p>
                        <p className="text-xs text-[var(--medium-grey)]">Star Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-[var(--medium-grey)]">
            Want to be our next success story?{" "}
            <Link href="/contact" className="text-[var(--red-ox-red-text)] font-semibold hover:underline">
              Let&apos;s chat about your project
            </Link>
          </p>
        </div>
      </Section>

      {/* Local Area Context Section */}
      <Section background="light" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                Your Local Area
              </p>
              <h2 className="mb-6">
                {location.zone === "industrial"
                  ? `Working With ${location.name}'s Industrial Community`
                  : `Part of the ${location.name} Community`}
              </h2>
              <p className="text-[var(--medium-grey)] text-lg leading-relaxed mb-6">
                {location.zone === "industrial"
                  ? `${location.name} is a hub for industrial activity in North Brisbane. The area around ${location.landmarks[0]} is home to manufacturers, distributors, and trade businesses that keep the region running.`
                  : `${location.name} is a growing community in North Brisbane, close to ${location.landmarks.join(", ")}. Local businesses here serve families, professionals, and the wider community.`}
              </p>
              <p className="text-[var(--medium-grey)] leading-relaxed mb-6">
                {isDakabin
                  ? "As Dakabin locals ourselves, we understand what it takes to succeed in this community. We see the businesses we work with every day, and that keeps us accountable to delivering real results."
                  : `Being based in nearby Dakabin means we can meet face to face, understand your local market, and provide the hands on support that ${location.name} businesses deserve.`}
              </p>

              {/* Local landmarks tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-[var(--medium-grey)] mr-2">Nearby:</span>
                {location.landmarks.map((landmark, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white rounded-full text-sm text-[var(--charcoal)] border border-[var(--border-grey)]"
                  >
                    {landmark}
                  </span>
                ))}
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143062.763293835!2d152.96393270000002!3d-27.25019175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b0f8611d8f8719d%3A0x42dc25c8ec92eaf1!2sRed%20Ox%20Digital%20Marketing!5e1!3m2!1sen!2sau!4v1768892955452!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Red Ox Digital location serving ${location.name}`}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white mb-6">{zoneContent.ctaText}</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {isDakabin
              ? "As your neighbours, we are here to help your business thrive. Let us show you what local expertise and genuine care can do for your digital presence."
              : `Get in touch today for a free consultation. We will discuss your goals, analyse your current digital presence, and show you exactly how we can help your ${location.name} business grow.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="light"
              size="lg"
            >
              Book a Free Consultation
            </Button>
            <a
              href="tel:+61493992661"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white/10 text-white border-2 border-white hover:bg-white hover:text-[var(--red-ox-red-text)] transition-all duration-200 min-h-[52px]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>

          <p className="text-white/70 text-sm mt-8">
            No obligation. No lock-in contracts. Just a straightforward chat about your goals.
          </p>
        </div>
      </Section>

      {/* Related Locations (Internal Linking) */}
      <Section background="white" padding="md">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-[var(--charcoal)]">
            Also Serving Nearby Areas
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {getAllLocationSlugs()
            .filter((s) => s !== slug)
            .slice(0, 5)
            .map((locationSlug) => {
              const loc = getLocationBySlug(locationSlug);
              if (!loc) return null;
              return (
                <Link
                  key={locationSlug}
                  href={`/locations/${locationSlug}`}
                  className="px-4 py-2 bg-[var(--light-grey)] rounded-lg text-[var(--charcoal)] hover:bg-[var(--red-ox-red)] hover:text-white transition-colors text-sm font-medium"
                >
                  {loc.name}
                </Link>
              );
            })}
          <Link
            href="/locations"
            className="px-4 py-2 bg-[var(--charcoal)] rounded-lg text-white hover:bg-[var(--red-ox-red)] transition-colors text-sm font-medium"
          >
            View All Locations
          </Link>
        </div>
      </Section>
    </>
  );
}
