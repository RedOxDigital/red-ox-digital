"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

import { Button, Section, SectionHeader, ScrollReveal, ScrollRevealGroup } from "@/components/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

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

// Contact form component using shadcn/ui Form
function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      // Simulate form submission (replace with actual form handling)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message sent!", {
        description:
          "Thanks for reaching out! We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or call us directly.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Name <span className="text-[var(--primary-red)]">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-grey)]" />
                  <Input placeholder="John Smith" className="pl-11" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email Address <span className="text-[var(--primary-red)]">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-grey)]" />
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    className="pl-11"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-grey)]" />
                  <Input
                    placeholder="0493 992 661"
                    type="tel"
                    className="pl-11"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Message <span className="text-[var(--primary-red)]">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[var(--text-grey)]" />
                  <Textarea
                    placeholder="Tell us about your business and what you are looking to achieve..."
                    className="pl-11 min-h-[140px]"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" fullWidth isLoading={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}

// Contact info card with bento-style hover effects
interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  href?: string;
}

function ContactInfoCard({ icon, title, children, href }: ContactInfoCardProps) {
  const cardContent = (
    <div className="flex items-start gap-4 p-5 bg-[var(--card-bg)] border border-[var(--border-dark)] rounded-[var(--radius-md)] cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[8px_8px_0px_var(--primary-red)] hover:shadow-[12px_12px_0px_var(--primary-red)] hover:translate-x-[-4px] hover:translate-y-[-4px] group">
      <div className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary-red-light)] text-[var(--primary-red)] flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-[var(--text-dark)] mb-1">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

// Service area card with bento-style hover effects
interface ServiceAreaCardProps {
  name: string;
  description: string;
}

function ServiceAreaCard({ name, description }: ServiceAreaCardProps) {
  return (
    <div className="p-5 bg-[var(--card-bg)] border border-[var(--border-dark)] rounded-[var(--radius-md)] cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[8px_8px_0px_var(--primary-red)] hover:shadow-[12px_12px_0px_var(--primary-red)] hover:translate-x-[-4px] hover:translate-y-[-4px] group">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--primary-red-light)] text-[var(--primary-red)] flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]">
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
        <h3 className="font-semibold text-[var(--text-dark)]">
          {name}
        </h3>
      </div>
      <p className="text-sm text-[var(--text-grey)] pl-11">
        {description}
      </p>
    </div>
  );
}

export default function ContactPage() {
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

        <div className="relative mx-auto max-w-[var(--container-width)] px-[var(--spacing-md)] py-[var(--spacing-lg)]">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-4">
                Get in Touch
              </p>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6">Let Us Chat About Your Business</h1>
              <p className="text-lg md:text-xl text-[var(--text-grey)]">
                Ready to grow your business? Have a question? Just want to say hi?
                We would love to hear from you. No pressure, no hard sell. Just a
                friendly chat about how we can help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <Section background="offWhite" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[var(--text-grey)] mb-8">
                Fill out the form below and we will get back to you within 24
                hours. Usually much sooner.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Right: Contact Information */}
          <ScrollReveal delay={2}>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
                Other Ways to Reach Us
              </h2>
              <p className="text-[var(--text-grey)] mb-8">
                Prefer to chat on the phone or find us on the map? Here is how you
                can get in touch.
              </p>

              {/* Contact Details with bento-style cards */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <ContactInfoCard
                  icon={<Phone className="w-6 h-6" />}
                  title="Give Us a Call"
                  href="tel:+61493992661"
                >
                  <span className="text-[var(--primary-red)] text-lg font-medium">
                    0493 992 661
                  </span>
                  <p className="text-sm text-[var(--text-grey)] mt-1">
                    Monday to Friday, 9am to 5pm
                  </p>
                </ContactInfoCard>

                {/* Email */}
                <ContactInfoCard
                  icon={<Mail className="w-6 h-6" />}
                  title="Send an Email"
                  href="mailto:info@redoxdigital.com.au"
                >
                  <span className="text-[var(--primary-red)] font-medium">
                    info@redoxdigital.com.au
                  </span>
                  <p className="text-sm text-[var(--text-grey)] mt-1">
                    We aim to respond within 24 hours
                  </p>
                </ContactInfoCard>

                {/* Location */}
                <ContactInfoCard
                  icon={
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
                  }
                  title="Based In"
                >
                  <p className="text-[var(--text-dark)]">
                    Dakabin, North Brisbane
                  </p>
                  <p className="text-sm text-[var(--text-grey)] mt-1">
                    Serving all of North Brisbane and surrounds
                  </p>
                </ContactInfoCard>
              </div>

              {/* Leave a Review Button */}
              <div className="p-6 bg-[var(--card-bg)] border border-[var(--border-dark)] rounded-[var(--radius-md)] mb-8 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[8px_8px_0px_var(--primary-red)] hover:shadow-[12px_12px_0px_var(--primary-red)] hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer group">
                <h3 className="font-semibold text-[var(--text-dark)] mb-2">
                  Happy With Our Service?
                </h3>
                <p className="text-[var(--text-grey)] text-sm mb-4">
                  If we have helped your business grow, we would really appreciate
                  a review. It helps other local businesses find us.
                </p>
                <a
                  href="https://share.google/DSmj00oU7t0Db7d1g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-off-white)] border border-[var(--border-color)] rounded-[var(--radius-sm)] font-semibold text-[var(--text-dark)] hover:border-[var(--primary-red)] hover:text-[var(--primary-red)] transition-colors min-h-[44px]"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]"
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
              <div className="flex items-center gap-3 p-4 bg-[var(--primary-red-light)] rounded-[var(--radius-sm)]">
                <svg
                  className="w-5 h-5 text-[var(--primary-red)] flex-shrink-0"
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
                <p className="text-[var(--text-dark)] text-sm">
                  <strong>Quick Response:</strong> Most enquiries answered within
                  a few hours during business hours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Google Maps Section */}
      <Section background="cream" padding="md">
        <ScrollReveal>
          <SectionHeader
            subtitle="Find Us"
            title="Our Location"
            description="Based in Dakabin, serving businesses across North Brisbane and the Moreton Bay Region."
          />
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-lg">
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
        </ScrollReveal>
      </Section>

      {/* Service Areas Section */}
      <Section background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Service Areas"
            title="Proudly Serving North Brisbane"
            description="We work with businesses across North Brisbane and the Moreton Bay Region. Here are some of the areas we serve."
          />
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceAreas.map((area) => (
            <ServiceAreaCard
              key={area.name}
              name={area.name}
              description={area.description}
            />
          ))}
        </ScrollRevealGroup>

        <ScrollReveal delay={3}>
          <div className="text-center mt-8">
            <p className="text-[var(--text-grey)]">
              Do not see your area listed? We might still be able to help.{" "}
              <a
                href="tel:+61493992661"
                className="text-[var(--primary-red)] font-medium hover:underline"
              >
                Give us a call
              </a>{" "}
              to find out.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--text-light)] mb-6">Ready to Get Started?</h2>
            <p className="text-[var(--text-light)]/90 text-lg mb-8 max-w-2xl mx-auto">
              Whether you are just starting out or looking to grow your existing
              business, we are here to help. Book a free discovery call and let us
              chat about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61493992661"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--text-light)] text-[var(--primary-red)] font-semibold rounded-[var(--radius-pill)] hover:opacity-90 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)] min-h-[52px]"
              >
                <Phone className="w-5 h-5" />
                Call 0493 992 661
              </a>
              <a
                href="mailto:info@redoxdigital.com.au"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--text-light)] text-[var(--text-light)] font-semibold rounded-[var(--radius-pill)] hover:bg-[var(--text-light)] hover:text-[var(--primary-red)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[52px]"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <p className="text-[var(--text-light)]/70 text-sm mt-6">
              Based in Dakabin, serving all of North Brisbane
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
