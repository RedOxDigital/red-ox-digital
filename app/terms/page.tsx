import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Red Ox Digital. Read our terms and conditions for using our website and digital marketing services.",
  alternates: {
    canonical: "https://redoxdigital.com.au/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "21 January 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--off-white)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-[var(--medium-grey)] text-lg">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <p className="lead text-[var(--medium-grey)] text-lg">
            Welcome to Red Ox Digital. By accessing our website at
            redoxdigital.com.au or engaging our services, you agree to be bound
            by these Terms of Service. Please read them carefully.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website or engaging our services, you
            accept and agree to be bound by the terms and provisions of this
            agreement. If you do not agree to abide by these terms, please do
            not use this website or our services.
          </p>

          <h2>2. Services</h2>
          <p>
            Red Ox Digital provides digital marketing services including but not
            limited to:
          </p>
          <ul>
            <li>Website design and development</li>
            <li>Search Engine Optimisation (SEO)</li>
            <li>Google Ads and PPC management</li>
            <li>Social media advertising</li>
            <li>Content creation and marketing</li>
            <li>Media production services</li>
          </ul>
          <p>
            Specific services, deliverables, timelines, and pricing will be
            outlined in individual service agreements or proposals.
          </p>

          <h2>3. Intellectual Property</h2>

          <h3>Our Content</h3>
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of Red Ox Digital or its
            content suppliers and is protected by Australian and international
            copyright laws.
          </p>

          <h3>Client Content</h3>
          <p>
            For work created under a service agreement, ownership of
            deliverables will be specified in the relevant agreement. Generally:
          </p>
          <ul>
            <li>
              Upon full payment, clients receive ownership of custom work created
              specifically for them
            </li>
            <li>
              We retain the right to showcase work in our portfolio unless
              otherwise agreed
            </li>
            <li>
              Third-party assets (stock images, fonts, plugins) remain subject to
              their respective licences
            </li>
          </ul>

          <h2>4. User Obligations</h2>
          <p>When using our website or services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Not use the website for any unlawful purpose</li>
            <li>Not attempt to gain unauthorised access to any part of the website</li>
            <li>Not interfere with or disrupt the website or servers</li>
            <li>Not reproduce, duplicate, or exploit any part of the website without permission</li>
          </ul>

          <h2>5. Service Agreements</h2>
          <p>
            Engagement of our services requires a separate service agreement or
            accepted proposal that will include:
          </p>
          <ul>
            <li>Scope of work and deliverables</li>
            <li>Timeline and milestones</li>
            <li>Pricing and payment terms</li>
            <li>Revision and approval processes</li>
            <li>Cancellation and refund policies</li>
          </ul>
          <p>
            These service agreements take precedence over these general Terms of
            Service where there is any conflict.
          </p>

          <h2>6. Payment Terms</h2>
          <p>Unless otherwise specified in a service agreement:</p>
          <ul>
            <li>Deposits are required before work commences</li>
            <li>Invoices are payable within 14 days of issue</li>
            <li>Late payments may incur interest at 2% per month</li>
            <li>
              We reserve the right to suspend work if payments are overdue
            </li>
          </ul>

          <h2>7. Warranties and Disclaimers</h2>

          <h3>Website Disclaimer</h3>
          <p>
            The information on this website is provided &quot;as is&quot; without any
            representations or warranties, express or implied. We make no
            representations or warranties about:
          </p>
          <ul>
            <li>The accuracy or completeness of the content</li>
            <li>The suitability of the information for any purpose</li>
            <li>The availability of the website</li>
          </ul>

          <h3>Service Disclaimer</h3>
          <p>
            While we strive to deliver excellent results, we cannot guarantee
            specific outcomes such as:
          </p>
          <ul>
            <li>Specific search engine rankings</li>
            <li>Specific traffic or conversion numbers</li>
            <li>Specific return on investment</li>
          </ul>
          <p>
            Digital marketing results depend on many factors outside our
            control, including market conditions, competition, and client
            cooperation.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Red Ox Digital shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly.
          </p>
          <p>
            Our total liability for any claim arising from our services shall
            not exceed the amount paid by you for those services in the 12
            months preceding the claim.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Red Ox Digital, its
            directors, employees, and agents from any claims, damages, losses,
            or expenses (including legal fees) arising from:
          </p>
          <ul>
            <li>Your use of our website or services</li>
            <li>Your breach of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Any content you provide to us</li>
          </ul>

          <h2>10. Privacy</h2>
          <p>
            Your use of our website is also governed by our{" "}
            <Link href="/privacy" className="text-[var(--red-ox-red)]">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>

          <h2>11. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. These links
            are provided for your convenience only. We have no control over the
            content of these websites and accept no responsibility for them or
            for any loss or damage that may arise from your use of them.
          </p>

          <h2>12. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our website
            or services immediately, without prior notice, for any reason,
            including breach of these Terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Queensland, Australia. Any disputes arising under these
            Terms shall be subject to the exclusive jurisdiction of the courts
            of Queensland.
          </p>

          <h2>14. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be effective immediately upon posting to the website. Your continued
            use of the website after changes are posted constitutes acceptance
            of the modified Terms.
          </p>

          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision shall be limited or eliminated to the
            minimum extent necessary so that these Terms shall otherwise remain
            in full force and effect.
          </p>

          <h2>16. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@redoxdigital.com.au">
                info@redoxdigital.com.au
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+61493992661">0493 992 661</a>
            </li>
            <li>
              <strong>Address:</strong> Dakabin, Queensland, Australia
            </li>
          </ul>

          <div className="mt-12 p-6 bg-[var(--light-grey)] rounded-xl">
            <p className="text-[var(--charcoal)] font-medium mb-4">
              Related Legal Documents
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy"
                className="text-[var(--red-ox-red-text)] hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-[var(--red-ox-red-text)] hover:underline"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
