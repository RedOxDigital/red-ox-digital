import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Affordable Web Design for Small Business",
  description:
    "Quality web design that fits your budget. No hidden costs, just professional websites built to help small businesses grow without breaking the bank.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/web-design/affordable",
  },
  openGraph: {
    title: "Affordable Web Design for Small Business",
    description:
      "Quality web design that fits your budget. No hidden costs, just professional websites built to help small businesses grow without breaking the bank.",
    url: "https://redoxdigital.com.au/services/web-design/affordable",
    type: "website",
  },
};

// Benefits/pillars
const benefits = [
  {
    title: "Fixed Pricing, No Surprises",
    description:
      "You know exactly what you pay before we start. No hourly rates that blow out, no hidden fees at the end. Just honest, upfront pricing.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Professional Quality",
    description:
      "Budget-friendly does not mean cheap looking. Every site we build is designed to impress visitors and turn them into customers.",
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Turnaround",
    description:
      "Get online quickly. Most affordable websites are ready in 2 weeks, so you can start attracting customers sooner.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
      "A quick chat to understand your business, your goals, and what you need from your website. We keep it simple and focused.",
  },
  {
    step: 2,
    title: "Implementation",
    description:
      "We get to work building your site using proven templates customised for your brand. Fast, efficient, and affordable.",
  },
  {
    step: 3,
    title: "Growth",
    description:
      "Your site launches and you start getting found online. We are here if you need help or want to add features later.",
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "5-page website package",
    benefit: "Cover all the essentials: home, about, services, contact, and more",
  },
  {
    feature: "Mobile-responsive design",
    benefit: "Look professional on phones where most people search",
  },
  {
    feature: "Contact form setup",
    benefit: "Make it easy for customers to reach you",
  },
  {
    feature: "Basic SEO setup",
    benefit: "Get found when locals search for what you do",
  },
  {
    feature: "Google Maps integration",
    benefit: "Help customers find your location easily",
  },
  {
    feature: "Social media links",
    benefit: "Connect visitors to your other channels",
  },
];

// FAQ items
const faqs = [
  {
    question: "What does affordable web design actually include?",
    answer:
      "Our affordable packages include a professional 5-page website with mobile-responsive design, contact forms, basic SEO setup, Google Maps integration, and social media links. You get everything a small business needs to look professional online without paying for features you will not use.",
  },
  {
    question: "Is cheap web design as good as expensive custom design?",
    answer:
      "Affordable does not mean low quality. We use proven design templates that we customise for your brand. These templates have been tested and optimised for conversions. For most small businesses, this approach delivers better results than an expensive custom build because the designs are already proven to work.",
  },
  {
    question: "Can I upgrade my affordable site later?",
    answer:
      "Absolutely. Many businesses start with our affordable package and add features as they grow. We build all our sites with growth in mind, so adding new pages, e-commerce, booking systems, or custom features is straightforward. You are not locked into anything.",
  },
  {
    question: "How much does an affordable website cost?",
    answer:
      "Our affordable websites start from $1,500 for a 5-page site. This is a one-time fee with no hidden costs. We also offer payment plans if you need to spread the cost. Hosting and domain fees are separate and typically cost around $150 to $200 per year.",
  },
  {
    question: "Do you use templates for affordable websites?",
    answer:
      "Yes, and that is a good thing. Templates let us build faster and keep costs down while still delivering a professional result. We customise each template with your colours, fonts, images, and content so it looks unique to your business. Nobody will know it started as a template.",
  },
  {
    question: "How long does it take to build an affordable website?",
    answer:
      "Most affordable websites are ready in about 2 weeks. This includes design customisation, adding your content, testing, and launch. If you have your content ready to go, we can sometimes finish faster. We will give you a clear timeline when we start.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Affordable Web Design for Small Business",
  description:
    "Quality web design that fits your budget. Professional websites for small businesses in North Brisbane without the big agency price tag.",
  url: "https://redoxdigital.com.au/services/web-design/affordable",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Web Design", url: "https://redoxdigital.com.au/services/web-design" },
  { name: "Affordable", url: "https://redoxdigital.com.au/services/web-design/affordable" },
]);

export default function AffordableWebDesignPage() {
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
              <Link href="/services/web-design" className="hover:text-[var(--red-ox-red-text)]">
                Web Design
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--charcoal)]">Affordable</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Affordable Web Design for Small Business</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
            You do not need a massive budget to get a website that works. Our affordable web design
            packages give small businesses everything they need to look professional and attract
            customers online.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            Fixed pricing means no nasty surprises. Quality design means you still look great. Fast
            turnaround means you can start growing your business sooner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get Your Free Quote
            </Button>
            <Button href="#what-you-get" variant="outline" size="lg">
              See What Is Included
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Why Go Affordable"
          title="Quality Websites Without the Big Price Tag"
          description="Smart businesses invest wisely. Here is why our affordable approach makes sense."
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
      <Section background="dark" padding="lg">
        <SectionHeader
          subtitle="How It Works"
          title="From Idea to Online in 3 Steps"
          description="Getting an affordable website should be simple. Here is our straightforward process."
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
      <Section id="what-you-get" background="offWhite" padding="lg">
        <SectionHeader
          subtitle="What Is Included"
          title="Everything You Need to Get Started"
          description="Our affordable package covers all the essentials for a professional small business website."
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-[var(--charcoal)] text-white font-semibold">
              <div className="p-4 border-r border-[var(--charcoal-light)]">What You Get</div>
              <div className="p-4">Why It Matters</div>
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
          subtitle="Questions Answered"
          title="Affordable Web Design FAQs"
          description="Common questions about our budget-friendly web design services."
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
          subtitle="Other Web Design Options"
          title="Not Sure Affordable Is Right for You?"
          description="Explore our other web design services to find the perfect fit."
        />
        <Grid cols={2} gap="md">
          <Link
            href="/services/web-design/custom"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Custom Web Design
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Need something unique? Our custom designs are built from scratch around your brand
              and specific business needs.
            </p>
            <span className="text-[var(--red-ox-red)] font-semibold">
              Learn more &rarr;
            </span>
          </Link>
          <Link
            href="/services/web-design/redesign"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Website Redesign
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Already have a site that needs updating? We can transform your existing website into
              something modern and effective.
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
          <h2 className="text-white mb-4">Get a Professional Website Without the Big Budget</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop putting off your website because of cost. Let us show you how affordable it can be
            to get online with a site that works for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="light" size="lg">
              Get Your Free Quote
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
