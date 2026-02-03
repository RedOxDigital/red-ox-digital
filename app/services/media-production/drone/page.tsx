import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid } from "@/components/ui";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Drone Photography & Aerial Imaging | Red Ox Digital",
  description:
    "Professional drone photography and aerial imaging services in North Brisbane. Stunning aerial photos and video for real estate, construction, events, and more.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services/media-production/drone",
  },
  openGraph: {
    title: "Drone Photography & Aerial Imaging | Red Ox Digital",
    description:
      "Professional drone photography and aerial imaging services in North Brisbane. Stunning aerial photos and video for real estate, construction, events, and more.",
    url: "https://redoxdigital.com.au/services/media-production/drone",
    type: "website",
  },
};

// Benefits/pillars
const benefits = [
  {
    title: "A Unique Perspective",
    description:
      "Aerial shots capture things ground-level cameras simply cannot. Show the full scope of a property, the scale of a project, or the atmosphere of an event from above.",
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
    title: "Stand Out from Competitors",
    description:
      "Most businesses use standard photos. Aerial imagery helps you stand out, grab attention, and make a memorable impression on potential customers.",
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
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    title: "Fully Licensed and Insured",
    description:
      "We hold all required CASA certifications and carry public liability insurance. Your shoot is compliant, safe, and covered. No shortcuts, no risk to you.",
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
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Plan the Flight",
    description:
      "We discuss your goals, scout the location, check airspace restrictions, and plan the shots. Proper planning means no surprises on shoot day.",
  },
  {
    step: 2,
    title: "Capture from Above",
    description:
      "On shoot day, we fly and capture the footage you need. Multiple angles, heights, and movements give you options to choose from.",
  },
  {
    step: 3,
    title: "Edit and Deliver",
    description:
      "We process and edit your footage, colour correct, and deliver files ready to use on your website, social media, or marketing materials.",
  },
];

// Use cases
const useCases = [
  {
    title: "Real Estate",
    description:
      "Show properties from above to highlight land size, location, and surroundings. Aerial shots help buyers understand the full picture.",
  },
  {
    title: "Construction and Progress",
    description:
      "Document construction projects from start to finish. Track progress, share updates with stakeholders, and create compelling before and after content.",
  },
  {
    title: "Events and Functions",
    description:
      "Capture the scale and atmosphere of events, festivals, and corporate functions from a perspective that ground cameras cannot match.",
  },
  {
    title: "Tourism and Hospitality",
    description:
      "Showcase resorts, venues, and tourist attractions with stunning aerial views that make people want to visit.",
  },
];

// FAQ items
const faqs = [
  {
    question: "Is drone photography legal?",
    answer:
      "Yes, when done by a licensed operator. We hold the required CASA certifications to operate commercially in Australia. We also check airspace restrictions, obtain necessary permits, and follow all regulations. You can trust that every shoot is fully compliant.",
  },
  {
    question: "How much does drone photography cost?",
    answer:
      "Our drone photography packages start from $300 for a basic shoot with edited photos. Pricing depends on location, duration, and whether you need video or photos. We provide a clear quote after understanding your project requirements.",
  },
  {
    question: "Can you fly anywhere?",
    answer:
      "Not everywhere. Drones cannot fly in certain airspace, near airports, over crowds, or in restricted areas without special permission. We check every location before the shoot and obtain any required approvals. If there are restrictions, we will let you know upfront.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Drones cannot fly safely in rain, strong winds, or poor visibility. We monitor weather forecasts and reschedule if conditions are not suitable. Safety comes first, and we will work with you to find an alternative date if needed.",
  },
  {
    question: "Do you do drone video as well as photos?",
    answer:
      "Yes. We capture both high-resolution photos and 4K video footage. Many clients want a mix of both. Video is particularly effective for real estate walkthroughs, construction progress, and creating engaging social media content.",
  },
  {
    question: "How long does a drone shoot take?",
    answer:
      "A typical shoot takes 1 to 2 hours on site, including setup, multiple flights, and pack down. Complex projects or large areas may take longer. We will give you a time estimate when we quote your project.",
  },
];

// Schema data
const serviceSchema = generateServiceSchema({
  name: "Drone Photography & Aerial Imaging",
  description:
    "Professional drone photography and aerial imaging services in North Brisbane. Licensed and insured aerial photos and video for real estate, construction, and events.",
  url: "https://redoxdigital.com.au/services/media-production/drone",
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://redoxdigital.com.au" },
  { name: "Services", url: "https://redoxdigital.com.au/services" },
  { name: "Media Production", url: "https://redoxdigital.com.au/services/media-production" },
  { name: "Drone Photography", url: "https://redoxdigital.com.au/services/media-production/drone" },
]);

export default function DronePhotographyPage() {
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
              <Link href="/services/media-production" className="hover:text-[var(--red-ox-red-text)]">
                Media Production
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--charcoal)]">Drone Photography</li>
          </ol>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Drone Photography & Aerial Imaging</h1>
          <p className="text-xl text-[var(--medium-grey)] mb-4 leading-relaxed max-w-3xl mx-auto">
            See your property, project, or event from a whole new angle. Our{" "}
            <strong>drone photography</strong> services capture stunning aerial images and video
            that stand out from the crowd.
          </p>
          <p className="text-lg text-[var(--medium-grey)] mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you are selling real estate, documenting construction progress, or promoting
            your venue, aerial shots add a perspective that ground-level cameras simply cannot
            provide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get a Quote
            </Button>
            <Button href="#use-cases" variant="outline" size="lg">
              See Use Cases
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Why Drone Photography"
          title="The View from Above"
          description="Aerial imaging offers advantages that traditional photography cannot match."
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

      {/* Use Cases Section */}
      <Section id="use-cases" background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Who Uses Drone Photography"
          title="Perfect for These Industries"
          description="Aerial imaging adds value across many different business types and projects."
        />
        <Grid cols={2} gap="md">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-[var(--light-grey)] p-8 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
                {useCase.title}
              </h3>
              <p className="text-[var(--medium-grey)] leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </Grid>
      </Section>

      {/* Aerial Imaging Details Section */}
      <Section background="dark" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                Professional Aerial Imaging
              </p>
              <h2 className="text-white mb-4">Photos and Video from the Sky</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our aerial imaging services include both high-resolution still photography and
                smooth 4K video footage. Whether you need static shots that showcase a location or
                dynamic footage that takes viewers on a journey, we capture it all.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We fly professional-grade drones equipped with stabilised cameras that produce
                crisp, clear results. Every image and video is professionally edited before
                delivery.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For real estate and construction clients, we can provide raw footage for your own
                editing or fully produced content ready to publish.
              </p>
            </div>
            <div className="bg-[var(--charcoal-light)] p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-white">
                What You Get
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  High-resolution aerial photos
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  4K drone video footage
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Professional editing and colour grading
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Files ready for web and print
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[var(--red-ox-red)] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Full commercial usage rights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="How It Works"
          title="Our Drone Photography Process"
          description="From planning to delivery, here is how we capture your aerial content."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[var(--red-ox-red)] text-white text-2xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">{step.title}</h3>
              <p className="text-[var(--medium-grey)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="offWhite" padding="lg">
        <SectionHeader
          subtitle="Common Questions"
          title="Drone Photography FAQs"
          description="Answers to the questions we hear most about our aerial imaging services."
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
          title="Complete Your Media Package"
          description="Combine drone photography with our other media services for comprehensive coverage."
        />
        <Grid cols={2} gap="md">
          <Link
            href="/services/media-production"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Corporate Photography
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Complement aerial shots with ground-level photography. Headshots, products, and
              workplace photos that tell your complete story.
            </p>
            <span className="text-[var(--red-ox-red)] font-semibold">
              Learn more &rarr;
            </span>
          </Link>
          <Link
            href="/services/web-design"
            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[var(--red-ox-red)] border border-transparent"
          >
            <h3 className="text-xl font-semibold mb-3 text-[var(--charcoal)]">
              Website Design
            </h3>
            <p className="text-[var(--medium-grey)] mb-4">
              Put your stunning aerial photos to work on a website that converts visitors into
              customers. We build sites that showcase your content.
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
          <h2 className="text-white mb-4">Ready for a New Perspective?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            See your property, project, or event from above. Get stunning aerial photos and video
            that set you apart from the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="light" size="lg">
              Get a Quote
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
