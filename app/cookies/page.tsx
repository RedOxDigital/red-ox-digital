import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Red Ox Digital. Learn about the cookies we use on our website and how to manage your cookie preferences.",
  alternates: {
    canonical: "https://redoxdigital.com.au/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  const lastUpdated = "21 January 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--off-white)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4">Cookie Policy</h1>
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
            This Cookie Policy explains how Red Ox Digital uses cookies and
            similar technologies when you visit our website at
            redoxdigital.com.au.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and to provide information to website
            owners.
          </p>
          <p>
            Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies
            remain on your device for a set period or until you delete them.
            Session cookies are deleted when you close your browser.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            We use cookies and similar tracking technologies for various
            purposes including:
          </p>
          <ul>
            <li>To make our website function properly</li>
            <li>To understand how visitors use our website</li>
            <li>To remember your preferences</li>
            <li>To improve your experience</li>
            <li>To deliver relevant advertising</li>
          </ul>

          <h2>Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot
            be switched off in our systems. They are usually only set in
            response to actions made by you, such as setting your privacy
            preferences, logging in, or filling in forms.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie Name</th>
                  <th className="text-left">Purpose</th>
                  <th className="text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cookie_consent</td>
                  <td>Stores your cookie consent preferences</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can
            measure and improve the performance of our site. They help us know
            which pages are the most and least popular and see how visitors move
            around the site.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie Name</th>
                  <th className="text-left">Provider</th>
                  <th className="text-left">Purpose</th>
                  <th className="text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Distinguishes unique users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_ga_*</td>
                  <td>Google Analytics</td>
                  <td>Maintains session state</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics</td>
                  <td>Distinguishes users</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Marketing Cookies</h3>
          <p>
            These cookies may be set through our site by our advertising
            partners. They may be used by those companies to build a profile of
            your interests and show you relevant adverts on other sites.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie Name</th>
                  <th className="text-left">Provider</th>
                  <th className="text-left">Purpose</th>
                  <th className="text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_gcl_au</td>
                  <td>Google Ads</td>
                  <td>Conversion tracking</td>
                  <td>90 days</td>
                </tr>
                <tr>
                  <td>_fbp</td>
                  <td>Facebook</td>
                  <td>Advertising and analytics</td>
                  <td>90 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Managing Cookies</h2>
          <p>
            You can manage your cookie preferences at any time by clicking the
            &quot;Cookie Settings&quot; link in our website footer.
          </p>
          <p>
            You can also control cookies through your browser settings. Most
            browsers allow you to:
          </p>
          <ul>
            <li>See what cookies you have and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that if you choose to block or delete cookies, some
            features of our website may not function properly.
          </p>

          <h3>Browser-Specific Instructions</h3>
          <ul>
            <li>
              <strong>Chrome:</strong> Settings → Privacy and security → Cookies
              and other site data
            </li>
            <li>
              <strong>Firefox:</strong> Options → Privacy & Security → Cookies
              and Site Data
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy → Manage Website
              Data
            </li>
            <li>
              <strong>Edge:</strong> Settings → Cookies and site permissions →
              Manage and delete cookies and site data
            </li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our
            pages. We do not control the dissemination of these cookies. You
            should check the third-party websites for more information about
            these cookies and how to manage them.
          </p>

          <h3>Google</h3>
          <p>
            We use Google Analytics and Google Ads. You can opt out of Google
            Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--red-ox-red)]"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            . You can control Google advertising preferences in your{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--red-ox-red)]"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <h3>Facebook</h3>
          <p>
            We may use Facebook Pixel for advertising. You can control your
            Facebook advertising preferences in your{" "}
            <a
              href="https://www.facebook.com/ads/preferences/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--red-ox-red)]"
            >
              Facebook Ad Preferences
            </a>
            .
          </p>

          <h2>Do Not Track</h2>
          <p>
            Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to
            websites that you do not want to be tracked. We currently do not
            respond to DNT signals. However, you can use the cookie management
            options described above to limit tracking.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology or legislation, or for other operational or
            business reasons. Any changes will be posted on this page with an
            updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact
            us:
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
                href="/terms"
                className="text-[var(--red-ox-red-text)] hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
