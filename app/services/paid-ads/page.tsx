import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid, ServiceCard, TestimonialCard } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Google Ads Management & PPC Services | Red Ox Digital",
  description:
    "Get more leads, not just clicks. Our Google Ads management focuses on quality leads and real ROI. No wasted spend on broad match keywords.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/paid-ads",
  },
  openGraph: {
    title: "Google Ads Management & PPC Services | Red Ox Digital",
    description:
      "Get more leads, not just clicks. Our Google Ads management focuses on quality leads and real ROI. No wasted spend on broad match keywords.",
    url: "https://redoxdigital.com.au/services/paid-ads",
    type: "website",
  },
};

// Child services for internal linking
const childServices = [
  {
    title: "Facebook Ads",
    description:
      "Reach your ideal customers on Facebook and Instagram with targeted social media advertising.",
    href: "/services/paid-ads/facebook-ads",
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
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
];

// Benefits/pillars
const benefits = [
  {
    title: "Leads, Not Just Clicks",
    description:
      "Clicks mean nothing if they do not turn into customers. We optimise for leads and sales, not vanity metrics. Your budget goes toward bringing in real business.",
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
    title: "No Broad Match Waste",
    description:
      "Broad match keywords are where budgets go to die. We use precise targeting to make sure your ads show up for searches that actually matter to your business.",
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
    title: "Transparent Spend",
    description:
      "Know exactly where your money goes. We provide clear reports showing every dollar spent and every lead generated. No hidden fees, no surprises.",
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
    title: "Strategy and Setup",
    description:
      "We research your market, identify the best keywords, and build campaigns designed for conversions. No guesswork, just data-driven decisions.",
  },
  {
    step: 2,
    title: "Launch and Optimise",
    description:
      "Your campaigns go live and we monitor everything closely. We cut waste, boost winners, and constantly refine to improve your results.",
  },
  {
    step: 3,
    title: "Scale and Grow",
    description:
      "Once we find what works, we scale it. More budget goes to the campaigns that bring the best leads at the lowest cost.",
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "Keyword research and selection",
    benefit: "Target the exact searches your customers use to find businesses like yours",
  },
  {
    feature: "Ad copy writing",
    benefit: "Ads that stand out and get the right people to click",
  },
  {
    feature: "Landing page recommendations",
    benefit: "Turn more clicks into actual enquiries and sales",
  },
  {
    feature: "Conversion tracking setup",
    benefit: "Know exactly which ads are bringing in leads and sales",
  },
  {
    feature: "Negative keyword management",
    benefit: "Stop wasting money on searches that never convert",
  },
  {
    feature: "Monthly reporting and optimisation",
    benefit: "Campaigns that get better month after month",
  },
];

// FAQ items
const faqs = [
  {
    question: "How much should I spend on Google Ads?",
    answer:
      "It depends on your industry and competition. Most small businesses start with $1,000 to $2,000 per month in ad spend, plus management fees. We can help you figure out the right budget based on your goals and what your competitors are spending.",
  },
  {
    question: "How quickly will I see results from Google Ads?",
    answer:
      "You can start getting clicks and leads from day one. However, it takes 2 to 4 weeks to gather enough data to properly optimise your campaigns. Most businesses see their best results after 2 to 3 months of ongoing optimisation.",
  },
  {
    question: "What is the difference between Google Ads and SEO?",
    answer:
      "Google Ads gives you instant visibility at the top of search results, but you pay for every click. SEO takes longer but brings free traffic once you rank. Most businesses benefit from doing both. Ads bring immediate leads while SEO builds long-term traffic.",
  },
  {
    question: "Why do you avoid broad match keywords?",
    answer:
      "Broad match keywords tell Google to show your ads for loosely related searches. This wastes budget on clicks from people who are not looking for what you offer. We use phrase and exact match keywords to make sure every click has real potential to become a customer.",
  },
  {
    question: "How do you measure success with Google Ads?",
    answer:
      "We track conversions, not just clicks. A conversion might be a phone call, a form submission, or a sale. We set up tracking so you can see exactly how many leads your ads are generating and what each lead costs you.",
  },
  {
    question: "Can I pause my Google Ads campaign?",
    answer:
      "Yes. You are in control and can pause anytime. Some businesses pause during slow seasons or when they have too much work. Just keep in mind that stopping and starting frequently can affect performance since campaigns need time to optimise.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Google Ads Management & PPC Services",
  description:
    "Professional Google Ads management for small businesses in North Brisbane. Get more leads with targeted PPC campaigns that focus on ROI, not just clicks.",
  url: "https://redoxdigital.com.au/services/paid-ads",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Paid Ads", url: "https://redoxdigital.com.au/services/paid-ads" },
]);

export default function PaidAdsPage() {
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
            <li className="text-[var(--charcoal)]">Paid Ads</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Google Ads Management & PPC Services</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
            Stop wasting money on clicks that go nowhere. Our <strong>Google Ads management</strong>{" "}
            focuses on what actually matters. Getting you leads that turn into paying customers.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            We do not chase impressions or clicks. We build campaigns that bring in real enquiries
            for your business. Every dollar is tracked, optimised, and working to grow your bottom
            line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Free Ads Audit
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </Section>

      {/* Google Ads Specialist Section */}
      <Section background="light" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Google Ads Specialist</h2>
              <p className="text-[var(--medium-grey)] mb-4 leading-relaxed">
                Managing Google Ads well takes more than setting up a few keywords. It takes
                someone who understands the platform inside out and knows how to get results without
                burning through your budget.
              </p>
              <p className="text-[var(--medium-grey)] mb-4 leading-relaxed">
                As a <strong>Google Ads specialist</strong>, I have managed campaigns for businesses
                across North Brisbane. I know what works, what wastes money, and how to turn ad
                spend into actual customers walking through your door.
              </p>
              <p className="text-[var(--medium-grey)] leading-relaxed">
                No jargon, no confusing reports. Just clear communication about what is working and
                what we are doing to improve it.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[var(--red-ox-red-light)]">
                  <svg
                    className="w-10 h-10 text-[var(--red-ox-red)]"
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
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--charcoal)]">
                  What You Get
                </h3>
                <ul className="text-left text-[var(--medium-grey)] space-y-3">
                  <li className="flex items-start">
                    <span className="text-[var(--red-ox-red)] mr-2">&#10003;</span>
                    Campaign setup and management
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--red-ox-red)] mr-2">&#10003;</span>
                    Keyword research and targeting
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--red-ox-red)] mr-2">&#10003;</span>
                    Ad copy that converts
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--red-ox-red)] mr-2">&#10003;</span>
                    Monthly optimisation and reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Google Ads Freelancer Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-[var(--charcoal)] p-8 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Why Work with a Freelancer?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[var(--red-ox-red)] mr-3 text-xl">&#10003;</span>
                  <div>
                    <strong>Direct Communication</strong>
                    <p className="text-gray-400 text-sm mt-1">
                      Talk directly to the person managing your ads. No account managers or juniors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--red-ox-red)] mr-3 text-xl">&#10003;</span>
                  <div>
                    <strong>Lower Overhead</strong>
                    <p className="text-gray-400 text-sm mt-1">
                      Agency prices without the agency overhead. Your budget goes further.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--red-ox-red)] mr-3 text-xl">&#10003;</span>
                  <div>
                    <strong>Flexible Service</strong>
                    <p className="text-gray-400 text-sm mt-1">
                      Scale up or down as needed. No long contracts or minimum terms.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-4">Google Ads Freelancer</h2>
              <p className="text-[var(--medium-grey)] mb-4 leading-relaxed">
                Choosing a <strong>Google Ads freelancer</strong> over a big agency means you get
                personal attention and better value. No being passed between account managers or
                getting lost in a sea of clients.
              </p>
              <p className="text-[var(--medium-grey)] mb-4 leading-relaxed">
                When you work with me, you work with the person actually running your campaigns. I
                learn your business, understand your customers, and treat your budget like it was my
                own.
              </p>
              <p className="text-[var(--medium-grey)] leading-relaxed">
                This direct relationship means faster responses, better strategy, and campaigns that
                actually reflect what makes your business unique.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="Our Approach"
          title="PPC Management That Delivers"
          description="We focus on what matters. Getting you customers, not just clicks."
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
          subtitle="Other Paid Advertising"
          title="Reach Customers on More Platforms"
          description="Google Ads is just one piece of the puzzle. We can help you advertise across multiple channels."
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
          title="Our 3-Step PPC Process"
          description="A clear path from setup to scaling your campaigns."
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
          title="Complete Google Ads Management"
          description="Everything you need for campaigns that actually deliver results."
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
          title="Google Ads FAQs"
          description="Answers to the questions we hear most about paid advertising."
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
          subtitle="Client Feedback"
          title="What Our Clients Say"
          description="Real results from real businesses who trusted us with their Google Ads."
        />
        <div className="max-w-2xl mx-auto">
          <TestimonialCard
            quote="Our Google Ads used to waste money on random clicks. Now every dollar goes to real leads who actually want our services."
            author="[Trade Business Owner]"
            role="Business Owner"
            company="North Brisbane"
          />
        </div>
      </Section>

      {/* Service Areas Section */}
      <Section background="white" padding="md">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--medium-grey)] leading-relaxed">
            Running targeted campaigns for businesses in{" "}
            <Link href="/locations/north-lakes-digital-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
              North Lakes
            </Link>
            ,{" "}
            <Link href="/locations/narangba-digital-marketing" className="text-[var(--red-ox-red-text)] hover:underline font-medium">
              Narangba
            </Link>
            , and the wider North Brisbane region.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">Ready to Get More Leads from Google Ads?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop wasting budget on clicks that do not convert. Get a free audit of your current
            campaigns or let us show you what is possible for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Your Free Ads Audit
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
