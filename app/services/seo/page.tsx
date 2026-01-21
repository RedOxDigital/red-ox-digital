import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid, ServiceCard, TestimonialCard } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO Services to Grow Your Traffic | Red Ox Digital",
  description:
    "Get more website visitors with our SEO services. We help small businesses in North Brisbane rank higher on Google and attract customers who are ready to buy.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/seo",
  },
  openGraph: {
    title: "SEO Services to Grow Your Traffic | Red Ox Digital",
    description:
      "Get more website visitors with our SEO services. We help small businesses in North Brisbane rank higher on Google and attract customers who are ready to buy.",
    url: "https://redoxdigital.com.au/services/seo",
    type: "website",
  },
};

// Child services for internal linking
const childServices = [
  {
    title: "Local SEO",
    description:
      "Dominate your local area. Get found when people search for businesses like yours nearby.",
    href: "/services/seo/local-seo",
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

// Benefits/pillars
const benefits = [
  {
    title: "More Qualified Traffic",
    description:
      "We focus on bringing visitors who are actually looking for what you offer. Not just any traffic, but people ready to become customers.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Long-Term Results",
    description:
      "Unlike ads that stop when you stop paying, good SEO keeps working for you. Build an asset that brings leads month after month.",
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
    title: "Transparent Reporting",
    description:
      "Know exactly where your money goes. Monthly reports show you what we did, what changed, and what comes next. No mystery, no fluff.",
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
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Audit and Research",
    description:
      "We dig into your website, your competitors, and what your customers are searching for. This tells us exactly where to focus.",
  },
  {
    step: 2,
    title: "Optimise and Build",
    description:
      "We fix technical issues, improve your content, and build your authority. Every action is designed to move you up in search results.",
  },
  {
    step: 3,
    title: "Track and Improve",
    description:
      "SEO is not set and forget. We monitor your rankings, traffic, and conversions. Then we adjust to keep improving your results.",
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "Keyword research and strategy",
    benefit: "Target the terms your customers actually use when searching",
  },
  {
    feature: "On-page optimisation",
    benefit: "Make every page on your site work harder to rank",
  },
  {
    feature: "Technical SEO fixes",
    benefit: "Remove barriers that stop Google from ranking you higher",
  },
  {
    feature: "Content recommendations",
    benefit: "Know exactly what to write to attract more visitors",
  },
  {
    feature: "Link building",
    benefit: "Build the authority Google looks for when ranking websites",
  },
  {
    feature: "Monthly reporting",
    benefit: "See exactly how your investment is paying off",
  },
];

// FAQ items
const faqs = [
  {
    question: "How long does SEO take to work?",
    answer:
      "Most businesses start seeing improvements in 3 to 6 months. SEO is a long-term strategy, not an overnight fix. The good news is that results compound over time. Once you start ranking well, it becomes easier to stay there and rank for more terms.",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "Our SEO services start from $800 per month for small businesses. The exact price depends on your competition, your goals, and how much work your site needs upfront. We will give you a clear quote after looking at your situation.",
  },
  {
    question: "Is SEO worth it for a small business?",
    answer:
      "Yes, especially for local businesses. When someone searches for what you offer in your area, showing up at the top of Google is incredibly valuable. Unlike ads, you do not pay per click. The traffic keeps coming as long as you maintain your rankings.",
  },
  {
    question: "What is the difference between SEO and paid ads?",
    answer:
      "Paid ads give you instant visibility, but you pay for every click and it stops when you stop paying. SEO takes longer to work, but it builds an asset. Once you rank well, you get free traffic every day. Most businesses do best with a mix of both.",
  },
  {
    question: "Do I need to change my website for SEO?",
    answer:
      "Usually, yes. SEO involves making changes to your site to help it rank better. This includes things like improving page titles, adding content, fixing technical issues, and making your site faster. We handle all of this for you.",
  },
  {
    question: "How do you report on SEO progress?",
    answer:
      "You get a monthly report that shows your keyword rankings, traffic changes, and the work we completed. We keep it simple and focused on what matters to your business. You will always know where you stand and what we are doing.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "SEO Services",
  description:
    "Professional SEO services for small businesses in North Brisbane. Get more website traffic and higher Google rankings with our proven strategies.",
  url: "https://redoxdigital.com.au/services/seo",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "SEO", url: "https://redoxdigital.com.au/services/seo" },
]);

export default function SEOServicesPage() {
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
      <Section background="white" padding="none" className="py-4 border-b border-[var(--border-grey)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[var(--medium-grey)]">
            <li>
              <Link href="/" className="hover:text-[var(--red-ox-red-text)]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--charcoal)]">SEO Services</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">SEO Services to Grow Your Traffic</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
            Your customers are searching for what you offer right now. The question is whether they
            find you or your competitors. Our <strong>SEO services</strong> help your business show
            up when it matters most.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            We do not chase vanity metrics. We focus on getting you in front of people who are
            ready to buy. More qualified traffic means more leads and more sales for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Free SEO Audit
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="Why Choose Our SEO"
          title="Search Engine Optimisation That Delivers"
          description="Forget about gaming the system. We focus on what actually works to grow your business."
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

      {/* Child Services Section */}
      <Section id="services" background="white" padding="lg">
        <SectionHeader
          subtitle="Our SEO Services"
          title="Find the Right SEO Solution"
          description="Different businesses need different approaches. Here is how we can help you get found online."
        />
        <Grid cols={3} gap="md">
          {childServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </Grid>
      </Section>

      {/* Process Section */}
      <Section id="how-it-works" background="dark" padding="lg">
        <SectionHeader
          subtitle="How It Works"
          title="Our 3-Step SEO Process"
          description="No confusing jargon. Just a clear path to better search rankings."
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
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="What You Get"
          title="Everything Included in Our SEO Services"
          description="Here is what we deliver and why it matters for your business."
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
      <Section background="white" padding="lg">
        <SectionHeader
          subtitle="Common Questions"
          title="SEO Services FAQs"
          description="Get answers to the questions we hear most about search engine optimisation."
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

      {/* Testimonial Section */}
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="Google Reviews"
          title="What Our Clients Say"
          description="Real results from real businesses who trusted us with their SEO."
        />
        <Grid cols={2} gap="lg">
          <TestimonialCard
            quote="When I first tried Google Ads, I wasted so much money. When I met Ryan at Red Ox Digital, he explained SEO so simply. Now we spend less money and actually generate strong leads that are converting to business."
            author="Stephen Adnams"
            role="Owner"
            company="SEQ Medical"
          />
          <TestimonialCard
            quote="We're showing up on ChatGPT and Gemini, climbing the Google rankings, and our Google Ads spend is down significantly. If you're sick of not knowing what your marketing dollars are doing, talk to Red Ox Digital."
            author="Ivan Szaks"
            role="Business Owner"
            company="Google Review"
          />
        </Grid>
      </Section>

      {/* Service Areas Section */}
      <Section background="white" padding="md">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--medium-grey)] leading-relaxed">
            We help businesses rank in{" "}
            <Link href="/locations/north-lakes-digital-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
              North Lakes
            </Link>
            ,{" "}
            <Link href="/locations/brendale-commercial-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
              Brendale
            </Link>
            ,{" "}
            <Link href="/locations/kallangur-digital-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
              Kallangur
            </Link>
            , and across North Brisbane.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">Ready to Get More Traffic?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop losing customers to competitors who rank above you. Let us show you exactly where
            your website stands and what it would take to climb the rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Your Free SEO Audit
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
          <p className="text-white/70 text-sm mt-6">
            No obligation. No lock-in contracts. Just a straightforward chat about your goals.
          </p>
        </div>
      </Section>
    </>
  );
}
