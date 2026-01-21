"use client";

import { useState } from "react";
import { Button, Section, SectionHeader } from "@/components/ui";

// Service areas
const serviceAreas = [
  { name: "North Lakes", description: "Full digital marketing services" },
  { name: "Brendale", description: "Commercial and industrial marketing" },
  { name: "Narangba", description: "Local business marketing" },
  { name: "Dakabin", description: "Home base and surrounding areas" },
  { name: "Kallangur", description: "Small business marketing" },
  { name: "Murrumba Downs", description: "Residential and commercial" },
  { name: "Griffin", description: "Growing community services" },
  { name: "Petrie", description: "Local marketing support" },
];

// Contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form handling)
    try {
      // In a real implementation, you would send this to your backend or form service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Your Name <span className="text-[var(--red-ox-red)]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--border-grey)] rounded-lg focus:ring-2 focus:ring-[var(--red-ox-red)] focus:border-transparent transition-colors"
          placeholder="John Smith"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Email Address <span className="text-[var(--red-ox-red)]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--border-grey)] rounded-lg focus:ring-2 focus:ring-[var(--red-ox-red)] focus:border-transparent transition-colors"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--border-grey)] rounded-lg focus:ring-2 focus:ring-[var(--red-ox-red)] focus:border-transparent transition-colors"
          placeholder="0493 992 661"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Your Message <span className="text-[var(--red-ox-red)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--border-grey)] rounded-lg focus:ring-2 focus:ring-[var(--red-ox-red)] focus:border-transparent transition-colors resize-y"
          placeholder="Tell us about your business and what you are looking to achieve..."
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" fullWidth isLoading={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-green-600"
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
            <p className="text-green-700">
              Thanks for reaching out! We will get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-red-600"
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
            <p className="text-red-700">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--off-white)] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D92323' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-4">
              Get in Touch
            </p>
            <h1 className="mb-6">Let Us Chat About Your Business</h1>
            <p className="text-lg md:text-xl text-[var(--medium-grey)]">
              Ready to grow your business? Have a question? Just want to say hi?
              We would love to hear from you. No pressure, no hard sell. Just a
              friendly chat about how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <Section background="white" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-2">
              Send Us a Message
            </h2>
            <p className="text-[var(--medium-grey)] mb-8">
              Fill out the form below and we will get back to you within 24
              hours. Usually much sooner.
            </p>
            <ContactForm />
          </div>

          {/* Right: Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-2">
              Other Ways to Reach Us
            </h2>
            <p className="text-[var(--medium-grey)] mb-8">
              Prefer to chat on the phone or find us on the map? Here is how you
              can get in touch.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)] flex-shrink-0">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)] mb-1">
                    Give Us a Call
                  </h3>
                  <a
                    href="tel:+61493992661"
                    className="text-[var(--red-ox-red-text)] text-lg font-medium hover:underline"
                  >
                    0493 992 661
                  </a>
                  <p className="text-sm text-[var(--medium-grey)] mt-1">
                    Monday to Friday, 9am to 5pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)] flex-shrink-0">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)] mb-1">
                    Send an Email
                  </h3>
                  <a
                    href="mailto:info@redoxdigital.com.au"
                    className="text-[var(--red-ox-red-text)] font-medium hover:underline"
                  >
                    info@redoxdigital.com.au
                  </a>
                  <p className="text-sm text-[var(--medium-grey)] mt-1">
                    We aim to respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)] flex-shrink-0">
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
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)] mb-1">
                    Based In
                  </h3>
                  <p className="text-[var(--charcoal)]">
                    Dakabin, North Brisbane
                  </p>
                  <p className="text-sm text-[var(--medium-grey)] mt-1">
                    Serving all of North Brisbane and surrounds
                  </p>
                </div>
              </div>
            </div>

            {/* Leave a Review Button */}
            <div className="p-6 bg-[var(--light-grey)] rounded-xl mb-8">
              <h3 className="font-semibold text-[var(--charcoal)] mb-2">
                Happy With Our Service?
              </h3>
              <p className="text-[var(--medium-grey)] text-sm mb-4">
                If we have helped your business grow, we would really appreciate
                a review. It helps other local businesses find us.
              </p>
              <a
                href="https://share.google/DSmj00oU7t0Db7d1g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[var(--border-grey)] rounded-lg font-semibold text-[var(--charcoal)] hover:border-[var(--red-ox-red-text)] hover:text-[var(--red-ox-red-text)] transition-colors min-h-[44px]"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Leave Us a Review
              </a>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <svg
                className="w-5 h-5 text-green-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-green-700 text-sm">
                <strong>Quick Response:</strong> Most enquiries answered within
                a few hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Google Maps Section */}
      <Section background="light" padding="md">
        <SectionHeader
          subtitle="Find Us"
          title="Our Location"
          description="Based in Dakabin, serving businesses across North Brisbane and the Moreton Bay Region."
        />

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143062.763293835!2d152.96393270000002!3d-27.25019175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b0f8611d8f8719d%3A0x42dc25c8ec92eaf1!2sRed%20Ox%20Digital%20Marketing!5e1!3m2!1sen!2sau!4v1768892955452!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Red Ox Digital Marketing location on Google Maps"
          />
        </div>
      </Section>

      {/* Service Areas Section */}
      <Section background="white" padding="lg">
        <SectionHeader
          subtitle="Service Areas"
          title="Proudly Serving North Brisbane"
          description="We work with businesses across North Brisbane and the Moreton Bay Region. Here are some of the areas we serve."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceAreas.map((area) => (
            <div
              key={area.name}
              className="p-4 bg-[var(--light-grey)] rounded-lg"
            >
              <h3 className="font-semibold text-[var(--charcoal)] mb-1">
                {area.name}
              </h3>
              <p className="text-sm text-[var(--medium-grey)]">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-[var(--medium-grey)]">
            Do not see your area listed? We might still be able to help.{" "}
            <a
              href="tel:+61493992661"
              className="text-[var(--red-ox-red-text)] font-medium hover:underline"
            >
              Give us a call
            </a>{" "}
            to find out.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are just starting out or looking to grow your existing
            business, we are here to help. Book a free discovery call and let us
            chat about your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+61493992661"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--red-ox-red-text)] font-semibold rounded-lg hover:bg-[var(--off-white)] transition-colors min-h-[52px]"
            >
              <svg
                className="w-5 h-5"
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
              Call 0493 992 661
            </a>
            <a
              href="mailto:info@redoxdigital.com.au"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--red-ox-red-text)] transition-colors min-h-[52px]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Based in Dakabin, serving all of North Brisbane
          </p>
        </div>
      </Section>
    </>
  );
}

// Metadata for SEO (exported separately since this is a client component)
// Note: For client components, metadata should be handled in a separate layout or
// by using generateMetadata in a server component wrapper
