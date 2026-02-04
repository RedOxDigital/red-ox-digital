import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Local SEO Expert | North Brisbane Services",
  description:
    "Get found by customers in your area. Our local SEO services help businesses dominate Google Maps and local search results. Own your local market.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/seo/local-seo",
  },
  openGraph: {
    title: "Local SEO Expert & Services for Local Business | Red Ox Digital",
    description:
      "Get found by customers in your area. Our local SEO services help businesses dominate Google Maps and local search results. Own your local market.",
    url: "https://redoxdigital.com.au/services/seo/local-seo",
    type: "website",
  },
};

// Benefits/pillars - Own the Map philosophy
const benefits = [
  {
    title: "Own the Map",
    description:
      "When someone searches for your service nearby, you want to be in that map pack at the top of Google. We make that happen. Owning the map means owning your local market.",
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
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: "Beat Local Competitors",
    description:
      "Your competitors are already working on their local SEO. We help you catch up and overtake them. When customers search, they will find you first.",
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
    title: "Drive Real Foot Traffic",
    description:
      "Local search is about getting customers through your door or on the phone. We focus on the searches that turn into real business for you.",
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Local Audit",
    description:
      "We review your Google Business Profile, local citations, reviews, and website. This shows us exactly what needs fixing to improve your local rankings.",
  },
  {
    step: 2,
    title: "Optimise Everything",
    description:
      "We fix your Google Business Profile, clean up your citations, build local links, and optimise your site for local search terms. Every detail matters.",
  },
  {
    step: 3,
    title: "Monitor and Grow",
    description:
      "We track your map rankings, manage your review strategy, and keep building your local authority. You climb higher and stay there.",
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "Google Business Profile optimisation",
    benefit: "Show up in the map pack when locals search for your services",
  },
  {
    feature: "Local citation building",
    benefit: "Consistent business info across the web builds trust with Google",
  },
  {
    feature: "Review generation strategy",
    benefit: "More positive reviews mean higher rankings and more trust",
  },
  {
    feature: "Local keyword targeting",
    benefit: "Rank for the search terms your local customers actually use",
  },
  {
    feature: "Competitor analysis",
    benefit: "Know exactly what it takes to outrank businesses in your area",
  },
  {
    feature: "Local link building",
    benefit: "Build authority with links from other local businesses and sites",
  },
];

// FAQ items
const faqs = [
  {
    question: "What is local SEO and how is it different from regular SEO?",
    answer:
      "Local SEO focuses on getting your business found when people search for services in a specific area. It includes things like Google Business Profile optimisation, local citations, and map rankings. Regular SEO is broader and focuses on ranking nationally or globally. If you serve customers in a specific area, local SEO is what you need.",
  },
  {
    question: "How long does it take to rank in the Google Maps pack?",
    answer:
      "Most businesses see improvement in their map rankings within 2 to 4 months. The exact timeline depends on your current situation, your competition, and how well your business info is set up across the web. Some quick wins can happen in weeks, but lasting results take consistent effort.",
  },
  {
    question: "Do I need a physical address for local SEO?",
    answer:
      "It depends on your business type. If customers visit your location, a physical address helps. If you go to customers (like a tradie or mobile service), you can set up a service area business in Google. We help you set this up correctly either way.",
  },
  {
    question: "How important are Google reviews for local SEO?",
    answer:
      "Very important. Reviews affect both your map rankings and whether customers choose you over competitors. We help you build a review strategy that gets more positive reviews and shows Google that customers trust your business.",
  },
  {
    question: "What is a Google Business Profile and do I need one?",
    answer:
      "Google Business Profile (formerly Google My Business) is your free business listing on Google. It is what shows up in the map pack and the right side of search results. If you want to be found locally, you absolutely need one. We can set it up and optimise it for you.",
  },
  {
    question: "Can you help if I have multiple locations?",
    answer:
      "Yes. We manage local SEO for businesses with multiple locations. Each location needs its own optimised Google Business Profile and local strategy. We make sure all your locations are set up correctly and competing effectively in their areas.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Local SEO Services",
  description:
    "Local SEO expert services for businesses in North Brisbane. Get found in Google Maps and dominate local search results in your area.",
  url: "https://redoxdigital.com.au/services/seo/local-seo",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "SEO", url: "https://redoxdigital.com.au/services/seo" },
  { name: "Local SEO", url: "https://redoxdigital.com.au/services/seo/local-seo" },
]);

export default function LocalSEOPage() {
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
      <Section background="offWhite" padding="none" className="py-4 border-b border-[var(--border-grey)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[var(--medium-grey)]">
            <li>
              <Link href="/" className="hover:text-[var(--red-ox-red-text)]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services/seo" className="hover:text-[var(--red-ox-red-text)]">
                SEO
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--charcoal)]">Local SEO</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif leading-[1.1]" style={{ fontSize: "clamp(2.75rem, 8vw, 4rem)" }}>Local SEO Expert & Services for Local Business</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto" style={{ paddingTop: "48px" }}>
            When someone searches for a business like yours in your area, you need to be the one they
            find. As a <strong>local SEO expert</strong>, I help small businesses own their local
            market and get in front of customers who are ready to buy.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            Our <strong>SEO services for local business</strong> focus on what matters most. Getting
            you into that Google Maps pack, collecting more reviews, and making sure your business
            shows up whenever locals search for what you offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Free Local SEO Audit
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </Section>

      {/* Own the Map Section */}
      <Section background="dark" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
            Our Philosophy
          </p>
          <h2 className="text-white mb-6">Own the Map, Own Your Market</h2>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            The Google Maps pack is prime real estate. When someone searches for your service
            &ldquo;near me&rdquo; or in your suburb, those three businesses at the top get the
            lion&apos;s share of clicks and calls.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our job is to get you into that pack and keep you there. We call it &ldquo;owning the
            map&rdquo; because when you dominate local search, you dominate your local market.
            Customers find you first, trust you more, and choose you over the competition.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Why Local SEO Matters"
          title="Get Found by Customers in Your Area"
          description="Local search is how customers find businesses like yours. Here is why it matters."
        />
        <Grid cols={3} gap="lg">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
                {benefit.icon}
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

      {/* Process Section */}
      <Section id="how-it-works" background="dark" padding="lg">
        <SectionHeader
          subtitle="How It Works"
          title="Our Local SEO Process"
          description="A clear path to dominating local search in your area."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[var(--red-ox-red)] text-white text-2xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features vs Benefits Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="What You Get"
          title="Complete Local SEO Services"
          description="Everything you need to rank higher in local search and get more customers."
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-[var(--charcoal)] text-white font-semibold">
              <div className="p-4 border-r border-[var(--charcoal-light)]">What We Do</div>
              <div className="p-4">What It Means for You</div>
            </div>
            {featuresBenefits.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-2 ${
                  index % 2 === 0 ? "bg-white" : "bg-[var(--light-grey)]"
                }`}
              >
                <div className="p-4 border-r border-[var(--border-grey)] text-[var(--charcoal)]">
                  {item.feature}
                </div>
                <div className="p-4 text-[var(--medium-grey)]">{item.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Common Questions"
          title="Local SEO FAQs"
          description="Answers to the questions we hear most about local search optimisation."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border border-[var(--border-grey)] rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-[var(--charcoal)] hover:bg-[var(--light-grey)] transition-colors">
                {faq.question}
                <svg
                  className="w-5 h-5 text-[var(--medium-grey)] group-open:rotate-180 transition-transform"
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
              </summary>
              <div className="px-6 pb-6 text-[var(--medium-grey)] leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Related Services */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Related Services"
          title="Boost Your Local Presence"
          description="Combine local SEO with other services for even better results."
        />
        <Grid cols={2} gap="md">
          <Link
            href="/services/seo"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              SEO Services
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Expand beyond local with our full SEO services. Rank for broader terms and reach
              customers across a wider area.
            </p>
            <span className="text-[var(--red-ox-red)] font-semibold">
              Learn more &rarr;
            </span>
          </Link>
          <Link
            href="/services/paid-ads"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Google Ads
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Get instant visibility in local search while your organic rankings build. A powerful
              combination for local businesses.
            </p>
            <span className="text-[var(--red-ox-red)] font-semibold">
              Learn more &rarr;
            </span>
          </Link>
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">Ready to Own Your Local Market?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop losing local customers to competitors. Get a free audit of your local search
            presence and see exactly what it takes to dominate your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="light" size="lg">
              Get Your Free Local SEO Audit
            </Button>
            <Button
              href="tel:+61493992661"
              variant="lightOutline"
              size="lg"
            >
              Call 0493 992 661
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
