import Link from "next/link";

// Footer navigation
const footerNavigation = {
  services: [
    { name: "Web Design", href: "/services/web-design" },
    { name: "SEO Services", href: "/services/seo" },
    { name: "Google Ads & PPC", href: "/services/paid-ads" },
    { name: "Media Production", href: "/services/media-production" },
  ],
  locations: [
    { name: "North Lakes", href: "/locations/north-lakes-digital-marketing" },
    { name: "Brendale", href: "/locations/brendale-commercial-marketing" },
    { name: "Narangba", href: "/locations/narangba-digital-marketing" },
    { name: "Kallangur", href: "/locations/kallangur-digital-marketing" },
    { name: "Dakabin", href: "/locations/dakabin-digital-marketing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

// Social links
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/redoxdigital",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Google Business",
    href: "https://share.google/DSmj00oU7t0Db7d1g",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--footer-bg)]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-[var(--container-width)] px-[var(--spacing-md)] py-[var(--spacing-xl)] pb-[var(--spacing-md)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-[var(--spacing-lg)]  mb-[var(--spacing-lg)]">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-[var(--spacing-sm)]">
              <h4 className="text-[1.25rem] font-extrabold">
                Red Ox <span className="text-[var(--primary-red)]">Digital</span>
              </h4>
            </Link>
            <p className="text-[var(--text-grey)] text-sm leading-relaxed mb-6">
              Your local digital marketing consultant in Dakabin, serving North Brisbane.
              Simple, effective strategies that deliver results.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 mt-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-dark)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[var(--primary-red)] hover:-translate-y-[3px]"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="text-[0.95rem] font-semibold text-[var(--text-dark)] mb-[var(--spacing-sm)]">
              Services
            </h5>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-grey)] hover:text-[var(--primary-red)] transition-colors text-[0.9rem]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h5 className="text-[0.95rem] font-semibold text-[var(--text-dark)] mb-[var(--spacing-sm)]">
              Service Areas
            </h5>
            <ul className="space-y-2">
              {footerNavigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-grey)] hover:text-[var(--primary-red)] transition-colors text-[0.9rem]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Newsletter Column */}
          <div>
            <h5 className="text-[0.95rem] font-semibold text-[var(--text-dark)] mb-[var(--spacing-sm)]">
              Company
            </h5>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-grey)] hover:text-[var(--primary-red)] transition-colors text-[0.9rem]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://share.google/DSmj00oU7t0Db7d1g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-grey)] hover:text-[var(--primary-red)] transition-colors text-[0.9rem]"
                >
                  View our Google Profile
                </a>
              </li>
            </ul>

            {/* Phone */}
            <div className="mt-6">
              <p className="text-sm text-[var(--text-grey)] mb-1">Call us:</p>
              <a
                href="tel:+61493992661"
                className="text-[var(--text-dark)] font-semibold hover:text-[var(--primary-red)] transition-colors"
              >
                0493 992 661
              </a>
            </div>

            {/* Newsletter Form */}
            <div className="mt-[var(--spacing-sm)]">
              <p className="text-sm text-[var(--text-grey)] mb-2">Stay updated:</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-2.5 py-2.5 border border-[#ccc] rounded-[var(--radius-sm)] bg-transparent text-[var(--text-dark)] text-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:border-[var(--primary-red)] focus:shadow-[0_0_0_3px_rgba(194,59,34,0.1)] focus:-translate-y-0.5"
                />
                <button
                  type="submit"
                  className="px-4 bg-[var(--primary-red)] text-white rounded-[var(--radius-sm)] text-[0.85rem] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)] active:-translate-y-[1px] active:shadow-[0_6px_16px_rgba(194,59,34,0.25)]"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[var(--spacing-sm)] border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.8rem] text-[var(--text-grey)]">
            <p>
              &copy; {currentYear} Red Ox Digital. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text-grey)] hover:text-[var(--primary-red)] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <p className="text-[var(--text-grey)] text-xs">
              Proudly serving North Brisbane from Dakabin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
