import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Facebook Ads Expert | Social Media Marketing",
  description:
    "Reach your ideal customers on Facebook and Instagram. Our Facebook ads expert helps small businesses get real results from social media advertising.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/paid-ads/facebook-ads",
  },
  openGraph: {
    title: "Facebook Ads Expert & Social Media Marketing | Red Ox Digital",
    description:
      "Reach your ideal customers on Facebook and Instagram. Our Facebook ads expert helps small businesses get real results from social media advertising.",
    url: "https://redoxdigital.com.au/services/paid-ads/facebook-ads",
    type: "website",
  },
};

// Benefits/pillars
const benefits = [
  {
    title: "Reach the Right People",
    description:
      "Facebook knows more about your customers than any other platform. We use that data to put your ads in front of people most likely to buy from you.",
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
    title: "Visually Engaging Ads",
    description:
      "Social media is visual. We create scroll-stopping ads with images and video that grab attention and get people to take action.",
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
  {
    title: "Retarget and Convert",
    description:
      "Most people do not buy the first time they see your brand. We retarget website visitors and warm leads to bring them back when they are ready to buy.",
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Strategy and Audience",
    description:
      "We identify your ideal customers and build detailed audience profiles. The better we know who to target, the better your ads will perform.",
  },
  {
    step: 2,
    title: "Create and Launch",
    description:
      "We design eye-catching ads and write copy that speaks to your audience. Then we launch campaigns across Facebook and Instagram.",
  },
  {
    step: 3,
    title: "Test and Scale",
    description:
      "We test different audiences, ads, and offers to find what works best. Winners get more budget, losers get cut. Your results keep improving.",
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "Custom audience targeting",
    benefit: "Reach people based on interests, behaviours, and demographics",
  },
  {
    feature: "Lookalike audience creation",
    benefit: "Find new customers who are similar to your best existing ones",
  },
  {
    feature: "Retargeting campaigns",
    benefit: "Bring back people who visited your site but did not convert",
  },
  {
    feature: "Ad creative development",
    benefit: "Scroll-stopping images and videos that get attention",
  },
  {
    feature: "A/B testing",
    benefit: "Find out what works and double down on winners",
  },
  {
    feature: "Performance reporting",
    benefit: "See exactly how your ads are performing and what we are doing to improve",
  },
];

// FAQ items
const faqs = [
  {
    question: "Is Facebook advertising still worth it?",
    answer:
      "Yes. Despite changes to privacy settings, Facebook and Instagram remain powerful advertising platforms. Billions of people use these platforms daily, and the targeting options are still more detailed than most other channels. For many businesses, Facebook ads deliver some of the best return on investment.",
  },
  {
    question: "How much should I spend on Facebook Ads?",
    answer:
      "Most small businesses start with $500 to $1,500 per month in ad spend, plus management fees. The right budget depends on your goals, your audience size, and how competitive your market is. We can help you figure out a starting point that makes sense for your business.",
  },
  {
    question: "Do Facebook Ads work for local businesses?",
    answer:
      "Absolutely. Local businesses can target people within a specific area around their location. This is great for restaurants, tradies, retail shops, and service businesses. You can reach people in your suburb or within a certain distance of your business.",
  },
  {
    question: "What is the difference between Facebook Ads and Google Ads?",
    answer:
      "Google Ads targets people who are actively searching for something. Facebook Ads targets people based on who they are and what they are interested in. Google catches demand that already exists. Facebook creates demand by putting your offer in front of the right people. Most businesses benefit from using both.",
  },
  {
    question: "How long does it take to see results from Facebook Ads?",
    answer:
      "You can start seeing traffic and engagement within days. However, Facebook needs time to learn and optimise your campaigns. Give it 2 to 4 weeks to gather enough data to perform at its best. The longer you run campaigns, the better Facebook gets at finding your ideal customers.",
  },
  {
    question: "Can you create the images and videos for my ads?",
    answer:
      "We can help with basic ad creatives and can work with assets you provide. For high-quality video production or professional photography, we can coordinate with our media production team or recommend trusted partners. Great creative makes a huge difference in ad performance.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Facebook Ads & Social Media Marketing",
  description:
    "Expert Facebook and Instagram advertising for small businesses in North Brisbane. Targeted social media campaigns that reach your ideal customers.",
  url: "https://redoxdigital.com.au/services/paid-ads/facebook-ads",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Paid Ads", url: "https://redoxdigital.com.au/services/paid-ads" },
  { name: "Facebook Ads", url: "https://redoxdigital.com.au/services/paid-ads/facebook-ads" },
]);

export default function FacebookAdsPage() {
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
              <Link href="/services/paid-ads" className="hover:text-[var(--red-ox-red-text)]">
                Paid Ads
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--charcoal)]">Facebook Ads</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif leading-[1.1]" style={{ fontSize: "clamp(2.75rem, 8vw, 4rem)" }}>Facebook Ads Expert & Social Media Marketing</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto" style={{ paddingTop: "48px" }}>
            Your customers are scrolling through Facebook and Instagram right now. A{" "}
            <strong>Facebook ads expert</strong> can put your business right in front of them with
            ads that grab attention and drive action.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            We create targeted social media campaigns that reach the right people at the right time.
            No wasted impressions on people who will never buy. Just smart advertising that grows
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Why Facebook Ads"
          title="Reach Customers Where They Spend Their Time"
          description="Facebook and Instagram give you access to powerful targeting options no other platform can match."
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

      {/* How Social Media Marketing Works Section */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                Social Media Marketing
              </p>
              <h2 className="mb-4">Advertising on Facebook and Instagram</h2>
              <p className="text-[var(--medium-grey)] mb-4 leading-relaxed">
                Social media marketing through paid ads lets you reach exactly who you want to
                reach. Unlike posting organically and hoping for the best, paid ads guarantee your
                message gets in front of your target audience.
              </p>
              <p className="text-[var(--medium-grey)] mb-4 leading-relaxed">
                We can target people based on their location, age, interests, job title, and even
                their past behaviour on your website. This means every dollar of your ad spend goes
                toward reaching potential customers, not random scrollers.
              </p>
              <p className="text-[var(--medium-grey)] leading-relaxed">
                Whether you want to build brand awareness, generate leads, or drive sales, we build
                campaigns designed to hit your specific goals.
              </p>
            </div>
            <div className="bg-[var(--light-grey)] p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-[var(--charcoal)]">
                Perfect for Businesses That:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-[var(--medium-grey)]">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Sell products that look great in photos or video
                </li>
                <li className="flex items-start text-[var(--medium-grey)]">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Want to build brand awareness in their area
                </li>
                <li className="flex items-start text-[var(--medium-grey)]">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Need to retarget website visitors who did not convert
                </li>
                <li className="flex items-start text-[var(--medium-grey)]">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Have a specific demographic they want to reach
                </li>
                <li className="flex items-start text-[var(--medium-grey)]">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Want to promote events, sales, or special offers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="how-it-works" background="dark" padding="lg">
        <SectionHeader
          subtitle="How It Works"
          title="Our Facebook Ads Process"
          description="A proven approach to social media advertising that delivers results."
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
          title="Complete Facebook Ads Management"
          description="Everything you need for social media campaigns that deliver results."
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
          title="Facebook Ads FAQs"
          description="Answers to the questions we hear most about social media advertising."
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
          title="Complete Your Advertising Strategy"
          description="Combine Facebook Ads with other channels for maximum impact."
        />
        <Grid cols={2} gap="md">
          <Link
            href="/services/paid-ads"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Google Ads
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Catch customers who are actively searching for what you offer. Google Ads and
              Facebook Ads work powerfully together.
            </p>
            <span className="text-[var(--red-ox-red)] font-semibold">
              Learn more &rarr;
            </span>
          </Link>
          <Link
            href="/services/media-production"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Media Production
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Great ads need great visuals. Our photography and video services create content that
              makes your ads stand out.
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
          <h2 className="text-white mb-4">Ready to Reach Your Ideal Customers?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop hoping your posts get seen. Start putting your business in front of the people most
            likely to become customers with targeted Facebook and Instagram advertising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="light" size="lg">
              Get a Free Consultation
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
