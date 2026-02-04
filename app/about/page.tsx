import { Metadata } from "next";
import Image from "next/image";
import { Button, Section, SectionHeader, Grid, ScrollReveal, ScrollRevealGroup, StatCounter } from "@/components/ui";

export const metadata: Metadata = {
  title: "Freelance Digital Marketer | North Brisbane",
  description:
    "Meet your local freelance digital marketer in Dakabin. No flashy agency tactics, just honest, full-cycle digital marketing that delivers real results for North Brisbane businesses.",
  keywords: [
    "freelance digital marketer",
    "digital marketing consultant",
    "North Brisbane digital marketing",
    "Dakabin marketing agency",
    "local marketing expert",
    "small business marketing",
  ],
  alternates: {
    canonical: "https://redoxdigital.com.au/about",
  },
  openGraph: {
    title: "About Red Ox Digital | Your Freelance Digital Marketer",
    description:
      "We are the antidote to flashy agencies. Meet your local freelance digital marketer who delivers transparent, ROI-focused results.",
    url: "https://redoxdigital.com.au/about",
    type: "website",
  },
};

// Core values that differentiate us
const coreValues = [
  {
    title: "Straight Talk",
    description:
      "No jargon. No smoke and mirrors. We explain everything in plain English so you always know what is happening with your marketing.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Results First",
    description:
      "We measure what matters to your business. Leads. Sales. Phone calls. Not vanity metrics that look good but mean nothing.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Full Transparency",
    description:
      "You will never wonder what we are doing or where your money goes. We share everything, including the bits that are not working yet.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Local Knowledge",
    description:
      "We live and work in North Brisbane. We understand the local market, the competition, and what it takes to stand out around here.",
    icon: (
      <svg
        className="w-7 h-7"
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

// What we do differently
const differences = [
  {
    bad: "Big agencies pass you off to junior staff",
    good: "You work directly with an experienced freelance digital marketer who knows your business",
  },
  {
    bad: "Confusing reports full of industry jargon",
    good: "Clear updates that show exactly how your marketing is performing",
  },
  {
    bad: "Long contracts that lock you in",
    good: "Month to month service because we earn your business every month",
  },
  {
    bad: "Hidden fees and surprise charges",
    good: "Upfront pricing with no unexpected costs",
  },
  {
    bad: "One size fits all packages",
    good: "Custom strategies built around your specific business goals",
  },
];

// Full cycle services
const fullCycleServices = [
  {
    title: "Web Design",
    description: "Fast, mobile-first websites that convert visitors into customers",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "SEO",
    description: "Get found when customers search for your services",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Paid Ads",
    description: "Google Ads campaigns that deliver measurable ROI",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    title: "Content",
    description: "Engaging content that builds trust and drives action",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--bg-cream)] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C23B22' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[var(--container-width)] px-[var(--spacing-md)] py-[var(--spacing-xl)]">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-4">
                About Red Ox Digital
              </p>
              <h1 className="font-serif leading-[1.1]" style={{ fontSize: "clamp(2.75rem, 8vw, 4rem)" }}>
                Your Local Freelance Digital Marketer in North Brisbane
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-grey)] mb-8" style={{ paddingTop: "48px" }}>
                Tired of agencies that overpromise and underdeliver? We are the
                antidote. Just one experienced freelance digital marketer, working
                directly with you, focused on what actually matters: getting you
                more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg">
                  Book a Free Discovery Call
                </Button>
                <Button href="#our-story" variant="outline" size="lg">
                  Learn Our Story
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <Section id="mission" background="offWhite" padding="lg">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                Our Mission
              </p>
              <h2 className="mb-6">
                Making Digital Marketing Simple for Small Business
              </h2>
              <p className="text-[var(--text-grey)] text-lg mb-6 leading-relaxed">
                Too many small business owners get burned by marketing. They pay
                good money for services they do not understand, get reports full
                of numbers that mean nothing, and end up worse off than when they
                started.
              </p>
              <p className="text-[var(--text-grey)] text-lg mb-6 leading-relaxed">
                We started Red Ox Digital to change that. Our mission is simple:
                deliver marketing that actually works, explained in a way you can
                understand, at a price that makes sense for your business.
              </p>
              <p className="text-[var(--text-dark)] text-lg font-medium">
                No tricks. No jargon. Just honest work that brings real results.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--card-bg)]">
                <Image
                  src="/images/business-advocates.webp"
                  alt="Red Ox Digital working with local North Brisbane business owners"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Statistics Section */}
      <Section background="cream" padding="lg" className="border-t border-b border-black/5">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCounter
              value={100}
              suffix="+"
              label="Happy Clients"
              icon="groups"
            />
            <StatCounter
              value={5}
              suffix="+"
              label="Years Experience"
              icon="calendar_today"
            />
            <StatCounter
              value={500}
              suffix="+"
              label="Projects Delivered"
              icon="task_alt"
            />
          </div>
        </ScrollReveal>
      </Section>

      {/* Why Choose Us (USP Section) */}
      <Section id="why-us" background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Why Choose Us"
            title="The Antidote to Flashy Agencies"
            description="We know you have been let down before. Here is how we do things differently as your dedicated freelance digital marketer."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-4">
              {differences.map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-4 bg-[var(--bg-off-white)] rounded-[var(--radius-md)] overflow-hidden"
                >
                  {/* Bad way */}
                  <div className="p-6 bg-[var(--card-bg)] border-l-4 border-[var(--border-color)]">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-[var(--text-grey)] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-[var(--text-grey)]">{item.bad}</p>
                    </div>
                  </div>

                  {/* Good way */}
                  <div className="p-6 bg-[var(--bg-off-white)] border-l-4 border-[var(--primary-red)]">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-[var(--text-dark)] font-medium">
                        {item.good}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Core Values - Bento Cards with enhanced hover */}
        <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="group bento-card p-6 rounded-[var(--radius-md)] bg-[var(--card-bg)] border border-[#333] text-center cursor-pointer"
            >
              <div className="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary-red-light)] text-[var(--primary-red)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">
                {value.title}
              </h3>
              <p className="text-[var(--text-grey)] text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </ScrollRevealGroup>
      </Section>

      {/* Guide Position - You're the Hero Section */}
      <Section id="your-success" background="offWhite" padding="lg">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--card-bg)]">
                <Image
                  src="/images/lead-generation.webp"
                  alt="Business owner celebrating success after working with Red Ox Digital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[var(--primary-red)] text-white p-6 rounded-[var(--radius-md)] shadow-lg hidden md:block">
                <p className="text-4xl font-bold mb-1">You</p>
                <p className="text-sm opacity-90">Are the Hero</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                Your Success Story
              </p>
              <h2 className="mb-6">You Are the Hero. We Are Your Guide.</h2>
              <p className="text-[var(--text-grey)] text-lg mb-6 leading-relaxed">
                Every great success story has a hero. That is you. You built your
                business from nothing. You know your customers better than anyone.
                You have put in the hard yards.
              </p>
              <p className="text-[var(--text-grey)] text-lg mb-6 leading-relaxed">
                But even the best heroes need a guide. Someone who has been down
                this path before. Someone who can help you avoid the traps and
                take the shortcuts. Someone who wants to see you win.
              </p>
              <p className="text-[var(--text-dark)] text-lg mb-8 font-medium">
                That is our role. We are not here to take over. We are here to
                give you the tools, the knowledge, and the support you need to
                take your business where you want it to go.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[var(--text-dark)]">
                    <strong>Your goals drive everything.</strong> We build our
                    strategy around what you want to achieve.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[var(--text-dark)]">
                    <strong>You stay in control.</strong> Your business, your
                    brand, your decisions. We just make them easier.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--primary-red)] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[var(--text-dark)]">
                    <strong>You get the credit.</strong> When your marketing works,
                    that is your success. We are just proud to have helped.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Team Section - Rectangular card style */}
      <Section id="our-story" background="cream" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="The Team"
            title="Meet Your Freelance Digital Marketer"
            description="When you work with Red Ox Digital, you work directly with an experienced digital marketing professional who cares about your success."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Team Member Card - Using team-card styles */}
              <div className="team-card">
                <div className="team-img-wrapper relative">
                  <Image
                    src="/images/tradies-background.webp"
                    alt="Local North Brisbane tradesperson at work - the type of business Red Ox Digital helps grow"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="team-name mt-4">Ryan</h3>
                <p className="team-role">Founder & Freelance Digital Marketer</p>
              </div>

              {/* Team Member Bio */}
              <div>
                <p className="text-[var(--text-grey)] leading-relaxed mb-4">
                  After years of watching small businesses get ripped off by
                  agencies that did not care, I started Red Ox Digital to do
                  things differently.
                </p>
                <p className="text-[var(--text-grey)] leading-relaxed mb-4">
                  I live here in North Brisbane. I understand the local market. And
                  I genuinely want to see local businesses succeed. When you call
                  me, you get me. Not a call centre. Not a junior account manager.
                  Just someone who knows your business and wants to help it grow.
                </p>
                <p className="text-[var(--text-grey)] leading-relaxed mb-6">
                  I handle everything from SEO and web design to Google Ads and
                  content marketing. Full cycle digital marketing, all under one
                  roof, with someone you can actually talk to.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[var(--primary-red-light)] text-[var(--primary-red)] text-sm rounded-full">
                    SEO Expert
                  </span>
                  <span className="px-3 py-1 bg-[var(--primary-red-light)] text-[var(--primary-red)] text-sm rounded-full">
                    Google Ads Certified
                  </span>
                  <span className="px-3 py-1 bg-[var(--primary-red-light)] text-[var(--primary-red)] text-sm rounded-full">
                    Web Design
                  </span>
                  <span className="px-3 py-1 bg-[var(--primary-red-light)] text-[var(--primary-red)] text-sm rounded-full">
                    Content Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Full Cycle Service */}
      <Section background="dark" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-2">
              Full Cycle Service
            </p>
            <h2 className="text-[var(--text-light)] mb-6">
              Everything You Need, From One Trusted Partner
            </h2>
            <p className="text-[var(--text-grey)] text-lg mb-8">
              Unlike agencies that specialise in just one thing, we handle your
              entire digital marketing from start to finish. Website, SEO, ads,
              content. All working together. All from someone you trust.
            </p>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-4 gap-6 mb-12">
          {fullCycleServices.map((service) => (
            <div
              key={service.title}
              className="group process-step bg-[var(--card-bg)] border border-[#333] p-6 rounded-[var(--radius-md)] shadow-[8px_8px_0px_var(--primary-red)] cursor-pointer"
            >
              <div className="process-icon w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-red)] flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]">
                {service.icon}
              </div>
              <h4 className="text-[var(--text-dark)] font-semibold text-center">{service.title}</h4>
              <p className="text-[var(--text-grey)] text-sm text-center mt-2">{service.description}</p>
            </div>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal>
          <div className="text-center">
            <Button
              href="/services"
              variant="light"
              size="lg"
            >
              Explore Our Services
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--text-light)] mb-6">
              Ready to Work With a Freelance Digital Marketer Who Cares?
            </h2>
            <p className="text-[var(--text-light)]/90 text-lg mb-8 max-w-2xl mx-auto">
              Stop dealing with agencies that do not know your name. Book a free
              discovery call and let us chat about your business goals. No
              pressure. No hard sell. Just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="light"
                size="lg"
              >
                Book Your Free Discovery Call
              </Button>
              <Button
                href="tel:+61493992661"
                variant="lightOutline"
                size="lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </Button>
            </div>
            <p className="text-[var(--text-light)]/70 text-sm mt-6">
              Proudly serving North Brisbane from Dakabin
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
