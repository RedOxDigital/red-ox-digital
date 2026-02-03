import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website Redesign Services | Refresh Your Site",
  description:
    "Transform your outdated website into a modern, high-performing asset. Professional website redesign services that boost conversions and improve user experience.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/web-design/redesign",
  },
  openGraph: {
    title: "Website Redesign Services | Refresh Your Site",
    description:
      "Transform your outdated website into a modern, high-performing asset. Professional website redesign services that boost conversions and improve user experience.",
    url: "https://redoxdigital.com.au/services/web-design/redesign",
    type: "website",
  },
};

// Benefits/pillars
const benefits = [
  {
    title: "Keep What Works",
    description:
      "We do not throw everything away. A redesign means identifying what is working, fixing what is not, and building on your existing foundation.",
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
    title: "Modern and Mobile-Ready",
    description:
      "Outdated designs hurt your credibility. We bring your site up to current standards so it looks professional on every device.",
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
    title: "Better Performance",
    description:
      "Slow sites lose customers. A redesign includes speed optimisation so your pages load fast and visitors stick around.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
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
      "We audit your current site to find what is working and what is holding you back. Data guides our decisions, not guesswork.",
  },
  {
    step: 2,
    title: "Implementation",
    description:
      "We redesign and rebuild your site with a focus on speed, mobile experience, and conversion. Your content migrates across seamlessly.",
  },
  {
    step: 3,
    title: "Growth",
    description:
      "Your refreshed site goes live. We monitor performance, handle any issues, and help you get the most from your investment.",
  },
];

// Features vs Benefits
const featuresBenefits = [
  {
    feature: "Complete site audit",
    benefit: "Understand exactly what needs fixing and why",
  },
  {
    feature: "Modern visual design",
    benefit: "Look current and professional to build trust with visitors",
  },
  {
    feature: "Mobile optimisation",
    benefit: "Work perfectly on phones where most people browse",
  },
  {
    feature: "Speed improvements",
    benefit: "Load faster to keep visitors engaged",
  },
  {
    feature: "SEO preservation",
    benefit: "Keep your search rankings while improving the site",
  },
  {
    feature: "Content migration",
    benefit: "All your existing content moves to the new design",
  },
];

// Signs you need a redesign
const redesignSigns = [
  {
    sign: "Your site is not mobile-friendly",
    detail: "Over 60% of web traffic is mobile. If your site does not work well on phones, you are losing customers.",
  },
  {
    sign: "Pages take more than 3 seconds to load",
    detail: "Slow sites frustrate visitors. Studies show that 40% of people leave sites that take over 3 seconds to load.",
  },
  {
    sign: "Your design looks dated",
    detail: "Web design trends change. A site that looked modern in 2018 can make your business look behind the times now.",
  },
  {
    sign: "You are embarrassed to share your website",
    detail: "If you hesitate to put your URL on business cards, that is a clear sign something needs to change.",
  },
  {
    sign: "Visitors leave without taking action",
    detail: "High bounce rates and low enquiries suggest your site is not doing its job of converting visitors.",
  },
  {
    sign: "You cannot update content easily",
    detail: "If adding a blog post or updating your phone number requires a developer, your site is holding you back.",
  },
];

// FAQ items
const faqs = [
  {
    question: "When should I redesign my website instead of building new?",
    answer:
      "A redesign makes sense when your site has good content and some existing traffic, but the design is outdated or not converting. If your current site has no valuable content, poor structure, or you want to completely change direction, building new might be better. We can help you decide during a free consultation.",
  },
  {
    question: "Will I lose my Google rankings during a redesign?",
    answer:
      "Not if done properly. We take SEO seriously during redesigns. We preserve your URL structure where possible, set up proper redirects for any changes, and ensure all your optimised content carries over. Most businesses see their rankings improve after a redesign because of better speed and mobile experience.",
  },
  {
    question: "How long does a website redesign take?",
    answer:
      "Most redesigns take 3 to 6 weeks depending on the size of your site and how much changes. This includes auditing your current site, designing the new look, developing it, migrating content, and testing. We give you a clear timeline after reviewing your current site.",
  },
  {
    question: "How much does a website redesign cost?",
    answer:
      "Redesigns typically cost between $2,000 and $5,000 depending on the size of your site and what needs to change. Sometimes a redesign is more cost-effective than building new because we can keep existing content and functionality. We provide a detailed quote after auditing your current site.",
  },
  {
    question: "What happens to my existing content?",
    answer:
      "All your content migrates to the new design. Text, images, blog posts, product listings - everything moves across. This is one of the main advantages of a redesign over building new. You keep all the content you have invested in while getting a fresh, modern look.",
  },
  {
    question: "Can you redesign just part of my site?",
    answer:
      "Yes, sometimes you only need to refresh certain pages or sections. We can redesign your homepage, add new service pages, or update specific areas while keeping the rest as is. This can be a cost-effective way to improve your site without a complete overhaul.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Website Redesign Services",
  description:
    "Transform your outdated website into a modern, high-performing asset. Professional redesign services for small businesses in North Brisbane.",
  url: "https://redoxdigital.com.au/services/web-design/redesign",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Web Design", url: "https://redoxdigital.com.au/services/web-design" },
  { name: "Redesign", url: "https://redoxdigital.com.au/services/web-design/redesign" },
]);

export default function WebsiteRedesignPage() {
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
            <li className="text-[var(--charcoal)]">Redesign</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Website Redesign Services</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
            Your website has served you well, but it is time for a refresh. We transform outdated
            sites into modern, fast, mobile-friendly experiences that convert visitors into customers.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            A redesign is not about starting from scratch. It is about keeping what works, fixing
            what does not, and bringing your online presence up to today's standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Free Site Audit
            </Button>
            <Button href="#signs" variant="outline" size="lg">
              Do I Need a Redesign?
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Why Redesign"
          title="Refresh Without Starting Over"
          description="A smart redesign builds on your existing investment while fixing the problems holding you back."
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

      {/* Signs You Need a Redesign Section */}
      <Section id="signs" background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Self-Assessment"
          title="Signs Your Website Needs a Redesign"
          description="Not sure if it is time? Here are the warning signs that your site is costing you business."
        />
        <div className="max-w-4xl mx-auto">
          <Grid cols={2} gap="md">
            {redesignSigns.map((item) => (
              <div
                key={item.sign}
                className="bg-[var(--light-grey)] p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--red-ox-red)] text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)] mb-2">
                      {item.sign}
                    </h3>
                    <p className="text-sm text-[var(--medium-grey)] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
          <div className="mt-8 text-center">
            <p className="text-[var(--medium-grey)] mb-4">
              Recognise any of these? Let us take a look at your site and tell you what we recommend.
            </p>
            <Button href="/contact">Request a Free Site Audit</Button>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="dark" padding="lg">
        <SectionHeader
          subtitle="Our Process"
          title="How We Handle Your Redesign"
          description="A careful, structured approach that protects your rankings while improving your site."
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
          subtitle="What Is Included"
          title="Everything You Need for a Successful Refresh"
          description="Our redesign service covers all the bases to ensure your new site performs better."
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-[var(--charcoal)] text-white font-semibold">
              <div className="p-4 border-r border-[var(--charcoal-light)]">What We Do</div>
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
          title="Website Redesign FAQs"
          description="Common questions about refreshing your existing website."
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
          title="Not Sure Redesign Is Right for You?"
          description="Explore our other web design services to find the best fit."
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
              Starting fresh on a budget? Our affordable packages get you online with a professional
              site without the big investment.
            </p>
            <span className="text-[var(--red-ox-red)] font-semibold">
              Learn more &rarr;
            </span>
          </Link>
          <Link
            href="/services/web-design/custom"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Custom Web Design
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Want something completely unique? Our custom designs are built from scratch around
              your brand and business goals.
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
          <h2 className="text-white mb-4">Ready to Give Your Website New Life?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop losing customers to an outdated site. Let us audit your current website and show
            you exactly how a redesign can improve your results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="light" size="lg">
              Get Your Free Site Audit
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
