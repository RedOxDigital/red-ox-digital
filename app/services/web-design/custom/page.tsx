import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Custom Web Design Solutions | Unique Sites",
  description:
    "One-of-a-kind custom web design built around your brand. Stand out from competitors with a website designed specifically for your business goals.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/web-design/custom",
  },
  openGraph: {
    title: "Custom Web Design Solutions | Unique Sites",
    description:
      "One-of-a-kind custom web design built around your brand. Stand out from competitors with a website designed specifically for your business goals.",
    url: "https://redoxdigital.com.au/services/web-design/custom",
    type: "website",
  },
};

// Benefits/pillars
const benefits = [
  {
    title: "Designed Around Your Business",
    description:
      "No templates, no shortcuts. Every element is planned and built to match your brand and serve your specific business goals.",
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
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: "Stand Out From Competitors",
    description:
      "Your competitors are using the same templates. A custom design means you look different, memorable, and more professional.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Built to Scale",
    description:
      "Custom sites are built with your future in mind. Add features, sections, and functionality as your business grows without starting over.",
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

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We dig deep into your business, your customers, and your competition. This research shapes every design decision we make.",
  },
  {
    step: 2,
    title: "Implementation",
    description:
      "Our team designs and builds your site from scratch. You see mockups first, give feedback, and we refine until it is perfect.",
  },
  {
    step: 3,
    title: "Growth",
    description:
      "Launch is just the beginning. We monitor performance, make adjustments, and support your business as it grows online.",
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "Original design concept",
    benefit: "A unique look that no competitor can copy",
  },
  {
    feature: "Custom functionality",
    benefit: "Features built specifically for how your business works",
  },
  {
    feature: "Brand integration",
    benefit: "Consistent colours, fonts, and style across every page",
  },
  {
    feature: "Advanced SEO structure",
    benefit: "Technical foundation that helps you rank higher in search",
  },
  {
    feature: "Performance optimisation",
    benefit: "Lightning-fast loading that keeps visitors engaged",
  },
  {
    feature: "Scalable architecture",
    benefit: "Easy to add new features and pages as you grow",
  },
];

// FAQ items
const faqs = [
  {
    question: "What makes custom web design different from template-based design?",
    answer:
      "Template-based sites start with a pre-made design that gets customised with your content. Custom design starts with a blank canvas. Every layout, every element, every interaction is designed specifically for your business. The result is a website that looks and works exactly how you need it to, not how a template allows it to.",
  },
  {
    question: "How long does a custom website take to build?",
    answer:
      "Custom websites typically take 4 to 8 weeks depending on complexity. This includes discovery and research, design concepts and revisions, development, testing, and launch. We take more time upfront to get the design right because changes are harder once development starts. You will have a clear timeline before we begin.",
  },
  {
    question: "How much does custom web design cost?",
    answer:
      "Custom websites start from around $3,500 and go up based on the number of pages, features, and complexity. We provide a detailed quote after understanding your needs. While custom design costs more than templates, you get a website that perfectly fits your business and stands out from competitors.",
  },
  {
    question: "Do I get to approve the design before you build it?",
    answer:
      "Absolutely. We show you design mockups before writing any code. You will see exactly what your website will look like and have the chance to request changes. We typically do 2 to 3 rounds of revisions to make sure you are completely happy with the design before we start building.",
  },
  {
    question: "Can you add custom features like booking systems or member areas?",
    answer:
      "Yes, that is one of the main benefits of custom design. We can build almost any feature you need, whether that is online booking, customer portals, product configurators, calculators, or integrations with other software you use. If you can describe what you need, we can likely build it.",
  },
  {
    question: "Will I be able to update the site myself?",
    answer:
      "Yes. We build custom sites with user-friendly content management systems. You will be able to update text, images, and add new content without any coding knowledge. We provide training so you feel confident making changes. For more complex updates, we are always here to help.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Custom Web Design Solutions",
  description:
    "One-of-a-kind custom web design built around your brand and business goals. Stand out from competitors with a unique website.",
  url: "https://redoxdigital.com.au/services/web-design/custom",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Web Design", url: "https://redoxdigital.com.au/services/web-design" },
  { name: "Custom", url: "https://redoxdigital.com.au/services/web-design/custom" },
]);

export default function CustomWebDesignPage() {
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
            <li className="text-[var(--charcoal)]">Custom</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Custom Web Design Solutions</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
            When templates are not enough, custom design delivers. We build one-of-a-kind websites
            designed around your brand, your customers, and your specific business goals.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            Your business is unique. Your website should be too. Stand out from competitors with a
            site that looks different, works better, and converts more visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Discuss Your Project
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
          subtitle="Why Go Custom"
          title="A Website Built Just for You"
          description="Custom design is not about being fancy. It is about getting exactly what your business needs."
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
          subtitle="Our Process"
          title="From Your Vision to Reality"
          description="Custom design takes more planning. Here is how we make sure the result is perfect."
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
          subtitle="What You Get"
          title="Custom Features for Custom Results"
          description="Every element of your site is built with purpose. Here is what that looks like."
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-[var(--charcoal)] text-white font-semibold">
              <div className="p-4 border-r border-[var(--charcoal-light)]">What We Build</div>
              <div className="p-4">What It Does for You</div>
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
          title="Custom Web Design FAQs"
          description="Everything you need to know about our custom design process."
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
          title="Explore All Our Web Design Services"
          description="Custom design is not for everyone. See if another option fits better."
        />
        <Grid cols={2} gap="md">
          <Link
            href="/services/web-design/affordable"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Affordable Web Design
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Need a professional site on a budget? Our affordable packages use proven templates
              customised for your brand.
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
              Have an existing site that needs updating? We can transform it into something modern
              and high-performing.
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
          <h2 className="text-white mb-4">Ready for a Website That is Truly Yours?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let us talk about what you need. We will help you decide if custom design is the right
            choice for your business and give you a clear idea of what it involves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="light" size="lg">
              Start Your Project
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
