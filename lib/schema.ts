// JSON-LD Schema generation utilities for Local SEO
// Red Ox Digital - Service Area Business (SAB)

// Service areas for areaServed property
export const SERVICE_AREAS = [
  { name: "North Lakes", state: "QLD", country: "AU" },
  { name: "Brendale", state: "QLD", country: "AU" },
  { name: "Griffin", state: "QLD", country: "AU" },
  { name: "Dakabin", state: "QLD", country: "AU" },
  { name: "Kallangur", state: "QLD", country: "AU" },
  { name: "Narangba", state: "QLD", country: "AU" },
  { name: "Mango Hill", state: "QLD", country: "AU" },
  { name: "Murrumba Downs", state: "QLD", country: "AU" },
  { name: "Petrie", state: "QLD", country: "AU" },
  { name: "Lawnton", state: "QLD", country: "AU" },
];

// Business information
const BUSINESS_INFO = {
  name: "Red Ox Digital",
  description: "Digital marketing consultant and web design services for North Brisbane businesses",
  url: "https://redoxdigital.com.au",
  telephone: "+61493992661",
  email: "info@redoxdigital.com.au", // Update with actual email
  priceRange: "$$",
  image: "https://redoxdigital.com.au/images/og-image.jpg",
  // GMB links
  sameAs: [
    "https://www.facebook.com/redoxdigital",
    "https://share.google/DSmj00oU7t0Db7d1g",
  ],
  hasMap: "https://share.google/DSmj00oU7t0Db7d1g",
};

// Base LocalBusiness schema for homepage
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BUSINESS_INFO.url}/#organization`,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    image: BUSINESS_INFO.image,
    sameAs: BUSINESS_INFO.sameAs,
    hasMap: BUSINESS_INFO.hasMap,
    // Service Area Business - no street address
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: area.state,
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.2501, // Dakabin area approximate
      longitude: 152.9639,
    },
    // Business hours (update as needed)
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    // Aggregate rating (add when you have reviews)
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "5",
    //   reviewCount: "10"
    // },
  };
}

// Service schema for service pages
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function generateServiceSchema({
  name,
  description,
  url,
  image,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: image || BUSINESS_INFO.image,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${BUSINESS_INFO.url}/#organization`,
      name: BUSINESS_INFO.name,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    serviceType: name,
  };
}

// Location page schema
interface LocationSchemaProps {
  location: string;
  description: string;
  url: string;
  services?: string[];
}

export function generateLocationSchema({
  location,
  description,
  url,
  services = [],
}: LocationSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BUSINESS_INFO.name} - ${location}`,
    description,
    url,
    telephone: BUSINESS_INFO.telephone,
    image: BUSINESS_INFO.image,
    sameAs: BUSINESS_INFO.sameAs,
    hasMap: BUSINESS_INFO.hasMap,
    areaServed: {
      "@type": "City",
      name: location,
      containedInPlace: {
        "@type": "State",
        name: "QLD",
      },
    },
    // List services available in this location
    ...(services.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Services in ${location}`,
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
          position: index + 1,
        })),
      },
    }),
  };
}

// BreadcrumbList schema for navigation
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQ schema for FAQ sections
interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// WebPage schema for all pages
interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateWebPageSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: WebPageSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    image: image || BUSINESS_INFO.image,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    isPartOf: {
      "@type": "WebSite",
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BUSINESS_INFO.url}/#organization`,
      name: BUSINESS_INFO.name,
    },
  };
}

// Helper to render schema as script tag content
export function renderSchema(schema: object | object[]): string {
  return JSON.stringify(schema, null, 0);
}
