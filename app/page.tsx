"use client";

import Image from "next/image";
import { useState } from "react";
import { MobileCTA } from "@/components/layout";
import { Button, Section, SectionHeader, Grid, ServiceCard, TestimonialCard } from "@/components/ui";
import { generateLocalBusinessSchema, generateFAQSchema, renderSchema } from "@/lib/schema";

// Service data
const services = [
  {
    title: "Search Engine Optimisation",
    description: "Get found by customers searching for your services. We help local businesses rank higher on Google so you can stop relying on word of mouth alone.",
    href: "/services/seo",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Google & Social Ads",
    description: "Reach your ideal customers where they spend their time. We set up and manage ads that bring real leads, not just clicks.",
    href: "/services/paid-ads",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Web Design",
    description: "A website that works hard for you. We build fast, mobile-friendly sites that turn visitors into customers and make it easy for people to get in touch.",
    href: "/services/web-design",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "We learn about your business, goals, and what success looks like for you. No tech talk, just a friendly chat.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "We build a clear plan based on what works for businesses like yours. You will know exactly what we will do and why.",
  },
  {
    step: 3,
    title: "Implementation",
    description: "We get to work. You get regular updates without the jargon. We make changes based on real results, not guesswork.",
  },
  {
    step: 4,
    title: "Growth",
    description: "Watch your leads grow. We track what matters and keep improving so your marketing works harder over time.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Ryan helped us get to the first page of Google. We went from barely any calls to getting new enquiries every week. Best investment we have made.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "North Lakes Accounting",
  },
  {
    quote: "Finally, someone who explains things in plain English. Our new website looks great and we are getting twice as many quote requests.",
    author: "James Chen",
    role: "Director",
    company: "Brendale Industrial Supplies",
  },
  {
    quote: "I was spending too much on ads that did not work. Red Ox fixed our campaigns and now I know exactly where my leads come from.",
    author: "Michelle Torres",
    role: "Owner",
    company: "Narangba Family Dental",
  },
];

// Trusted by logos (placeholders)
const trustedByLogos = [
  { name: "North Lakes Accounting", alt: "North Lakes Accounting logo" },
  { name: "Brendale Industrial", alt: "Brendale Industrial Supplies logo" },
  { name: "Narangba Dental", alt: "Narangba Family Dental logo" },
  { name: "Dakabin Auto", alt: "Dakabin Automotive logo" },
  { name: "Kallangur Trades", alt: "Kallangur Trades logo" },
];

// FAQ item type
interface FAQItem {
  question: string;
  answer: string;
}

// FAQ data
const faqs: FAQItem[] = [
  {
    question: "How much does digital marketing cost?",
    answer: "It depends on what you need. Most small businesses start with a website or basic SEO, which typically costs between $2,000 and $5,000 upfront. Ongoing marketing services usually range from $500 to $2,000 per month. We will give you a clear quote after learning about your goals.",
  },
  {
    question: "How long until I see results?",
    answer: "Paid ads can start bringing leads within days. SEO takes longer, usually 3 to 6 months to see significant improvement. We will set realistic expectations upfront and show you progress along the way.",
  },
  {
    question: "Do you work with businesses outside North Brisbane?",
    answer: "We focus on North Brisbane because we know the area and can meet you in person. However, we do work with select businesses elsewhere in Queensland. Get in touch and we will see if we are a good fit.",
  },
  {
    question: "What makes you different from big agencies?",
    answer: "You work directly with me, not a junior account manager. I am local, I answer my phone, and I focus on results that matter to your business. No long contracts, no confusing reports, just straightforward marketing that works.",
  },
  {
    question: "Do I need to understand marketing to work with you?",
    answer: "Not at all. I explain everything in plain English and handle the technical side. You know your business. I know marketing. Together we make it work.",
  },
];

// FAQ Accordion component
function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-[var(--border-grey)] rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[var(--light-grey)] transition-colors min-h-[60px]"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-semibold text-[var(--charcoal)] pr-4">
              {faq.question}
            </span>
            <span className="flex-shrink-0 ml-4">
              <svg
                className={`w-5 h-5 text-[var(--red-ox-red)] transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
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
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="p-6 pt-0 text-[var(--medium-grey)] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  // Generate schemas
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([localBusinessSchema, faqSchema]),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-[var(--off-white)] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D92323' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h1 className="mb-6">
                Digital Marketing Consultant in Dakabin & North Brisbane
              </h1>
              <p className="text-lg md:text-xl text-[var(--medium-grey)] mb-8 max-w-xl mx-auto lg:mx-0">
                Stop losing customers to competitors who show up first on Google.
                Get a simple, clear marketing strategy that brings in real leads, not just clicks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/contact" size="lg">
                  Book a Free Discovery Call
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  See Our Services
                </Button>
              </div>

              {/* Quick trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-[var(--medium-grey)]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--red-ox-red)]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Local North Brisbane Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--red-ox-red)]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Lock-in Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--red-ox-red)]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Results You Can Measure</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image Placeholder */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-4 bg-[var(--red-ox-red)] rounded-3xl transform rotate-3"></div>
                {/* Image placeholder */}
                <div className="relative bg-[var(--light-grey)] rounded-3xl overflow-hidden aspect-square border-4 border-white shadow-2xl">
                  <Image
                    src="/images/hero-placeholder.jpg"
                    alt="Ryan from Red Ox Digital helping a North Brisbane business owner with their digital marketing strategy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* Fallback if image doesn't exist */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--light-grey)]">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--red-ox-red-light)] flex items-center justify-center">
                        <svg className="w-12 h-12 text-[var(--red-ox-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-[var(--medium-grey)] text-sm">Hero image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-[var(--border-grey)] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-[var(--medium-grey)] mb-6 uppercase tracking-wide font-medium">
            Trusted by North Brisbane Businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustedByLogos.map((logo, index) => (
              <div
                key={index}
                className="h-12 w-32 flex items-center justify-center bg-[var(--light-grey)] rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                aria-label={logo.alt}
              >
                {/* Placeholder for client logos */}
                <span className="text-xs text-[var(--medium-grey)] text-center px-2">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services" background="light" padding="lg">
        <SectionHeader
          subtitle="What We Do"
          title="Marketing That Brings Real Leads"
          description="We focus on three things that work for local businesses. No fluff, no wasted budget. Just simple strategies that help customers find you."
        />
        <Grid cols={3}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </Grid>
        <div className="text-center mt-12">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Why Work With Us / Value Proposition */}
      <Section background="white" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--light-grey)]">
              <Image
                src="/images/about-placeholder.jpg"
                alt="Red Ox Digital team working with local business owners"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Fallback */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto text-[var(--medium-grey)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[var(--medium-grey)] text-sm">About section image</p>
                </div>
              </div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--red-ox-red)] text-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-sm opacity-90">Local Focus</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
              Why Red Ox Digital
            </p>
            <h2 className="mb-6">Marketing That Works for Small Business</h2>
            <p className="text-[var(--medium-grey)] text-lg mb-6 leading-relaxed">
              Most marketing agencies talk big but deliver reports you do not understand.
              We do things differently. You get straight answers, clear results, and a local
              partner who actually picks up the phone.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--red-ox-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--charcoal)]">
                  <strong>Plain English reporting.</strong> You will always know what is working and what is not.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--red-ox-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--charcoal)]">
                  <strong>No long contracts.</strong> We earn your business every month.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--red-ox-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--charcoal)]">
                  <strong>Local knowledge.</strong> We know North Brisbane because we live and work here.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--red-ox-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--charcoal)]">
                  <strong>Results focus.</strong> We track leads and sales, not vanity metrics.
                </span>
              </li>
            </ul>
            <Button href="/about">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Our Process Section */}
      <Section id="process" background="dark" padding="lg">
        <SectionHeader
          subtitle="How We Work"
          title="Simple Process, Real Results"
          description="No confusion, no surprises. Here is exactly how we help your business grow."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-[var(--red-ox-red)] opacity-30" />
              )}
              <div className="relative text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--red-ox-red)] text-white text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/contact" variant="primary" size="lg">
            Start Your Journey
          </Button>
        </div>
      </Section>

      {/* Testimonials / Social Proof */}
      <Section id="testimonials" background="light" padding="lg">
        <SectionHeader
          subtitle="What Our Clients Say"
          title="Real Results for Real Businesses"
          description="Do not just take our word for it. Here is what North Brisbane business owners have to say."
        />
        <Grid cols={3}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </Grid>
        <div className="text-center mt-12">
          <a
            href="https://share.google/DSmj00oU7t0Db7d1g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--red-ox-red-text)] font-semibold hover:underline min-h-[44px] px-4"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View All Google Reviews
          </a>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" background="white" padding="lg">
        <SectionHeader
          subtitle="Common Questions"
          title="Frequently Asked Questions"
          description="Got questions? Here are the answers to what most business owners ask us."
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="text-center mt-12">
          <p className="text-[var(--medium-grey)] mb-4">
            Still have questions? We are happy to chat.
          </p>
          <Button href="/contact" variant="outline">
            Get in Touch
          </Button>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Stop wondering where your next customer will come from. Book a free discovery call
            and let us show you a clear path to more leads and more sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-[var(--red-ox-red-text)] hover:bg-[var(--off-white)]"
            >
              Book Your Free Discovery Call
            </Button>
            <Button
              href="tel:+61493992661"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--red-ox-red-text)]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-6">
            No obligation. No lock-in contracts. Just a straightforward chat about your goals.
          </p>
          <p className="text-white/70 text-sm mt-2">
            Based in Dakabin, serving all of North Brisbane
          </p>
        </div>
      </Section>

      <MobileCTA />
    </>
  );
}
