import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Red Ox Digital's privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.",
  alternates: {
    canonical: "https://redoxdigital.com.au/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "21 January 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--bg-cream)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-[var(--text-grey)] text-lg">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section background="offWhite" padding="lg">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <p className="lead text-[var(--text-grey)] text-lg">
            Red Ox Digital (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            redoxdigital.com.au and use our services.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul>
            <li>Fill out a contact form or inquiry form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a quote or consultation</li>
            <li>Engage our services</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Website URL</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain
            information about your device, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages visited and time spent on pages</li>
            <li>Links clicked</li>
            <li>Geographic location (country/region)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Provide, operate, and maintain our services</li>
            <li>Send you marketing and promotional communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyse website usage and trends</li>
            <li>Protect against fraudulent or illegal activity</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and
            track information about your browsing activities on our website.
          </p>

          <h3>Types of Cookies We Use</h3>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to
              function properly. These cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors
              interact with our website by collecting and reporting information
              anonymously.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to track visitors across
              websites to display relevant advertisements.
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings. However,
            disabling certain cookies may affect the functionality of our
            website.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>We may use third-party services that collect, monitor, and analyse data:</p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> For website analytics and
              performance monitoring
            </li>
            <li>
              <strong>Google Ads:</strong> For advertising and remarketing
            </li>
            <li>
              <strong>Facebook Pixel:</strong> For advertising and audience
              insights
            </li>
          </ul>
          <p>
            These third parties have their own privacy policies addressing how
            they use such information.
          </p>

          <h2>5. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information in the following situations:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> With trusted third-party
              service providers who assist us in operating our website and
              conducting our business
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law or in
              response to valid legal requests
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets
            </li>
            <li>
              <strong>With Your Consent:</strong> With your explicit consent for
              any other purpose
            </li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational security
            measures to protect your personal information against unauthorised
            access, alteration, disclosure, or destruction. These measures
            include:
          </p>
          <ul>
            <li>SSL/TLS encryption for data in transit</li>
            <li>Secure hosting with reputable providers</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfil the purposes outlined in this Privacy Policy, unless a longer
            retention period is required or permitted by law.
          </p>

          <h2>8. Your Rights</h2>
          <p>Under Australian Privacy Law, you have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details
            below.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 16 years of age. We
            do not knowingly collect personal information from children under
            16. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically for any
            changes.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
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
                href="/terms"
                className="text-[var(--red-ox-red-text)] hover:underline"
              >
                Terms of Service
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
