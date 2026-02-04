"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Navigation items
const navigation = [
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "SEO", href: "/services/seo" },
      { name: "Google Ads & PPC", href: "/services/paid-ads" },
      { name: "Media Production", href: "/services/media-production" },
    ],
  },
  {
    name: "Locations",
    href: "/locations",
    children: [
      { name: "North Lakes", href: "/locations/north-lakes-digital-marketing" },
      { name: "Brendale", href: "/locations/brendale-commercial-marketing" },
      { name: "Narangba", href: "/locations/narangba-digital-marketing" },
      { name: "Dakabin", href: "/locations/dakabin-digital-marketing" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-[rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "py-3 bg-[rgba(245,240,230,0.95)] backdrop-blur-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
            : "py-[var(--spacing-md)] bg-[var(--bg-cream)]"
        }`}
      >
        <nav className="mx-auto max-w-[var(--container-width)] px-[var(--spacing-md)]" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" aria-label="Red Ox Digital Home">
                <span className="text-[1.5rem] font-extrabold uppercase tracking-[-0.5px]">
                  Red Ox <span className="text-[var(--primary-red)]">Digital</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-[var(--spacing-md)]">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative text-[0.9rem] font-medium text-[var(--text-dark)] py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-red)] after:transition-[width] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:w-full"
                  >
                    {item.name}
                    {item.children && (
                      <svg
                        className="inline-block ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="bg-[var(--bg-off-white)] rounded-[var(--radius-md)] shadow-lg border border-[rgba(0,0,0,0.05)] py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-[var(--text-dark)] text-[0.9rem] hover:bg-[var(--bg-cream)] hover:text-[var(--primary-red)] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button (Desktop) - Nav button style (not pill) */}
            <div className="hidden lg:flex lg:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-[0.85rem] font-semibold rounded-[var(--radius-sm)] bg-[var(--primary-red)] text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)] active:-translate-y-[1px] active:shadow-[0_6px_16px_rgba(194,59,34,0.25)]"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[var(--radius-sm)] p-2.5 text-[var(--text-dark)] min-w-[44px] min-h-[44px] transition-colors hover:bg-[var(--bg-off-white)]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Completely outside header for proper stacking */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 z-[60]"
          style={{ top: '64px' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="relative bg-[var(--bg-cream)] h-full overflow-y-auto shadow-xl">
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-lg font-medium text-[var(--text-dark)] border-b border-[var(--border-color)]"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 py-2 space-y-1 bg-[var(--bg-off-white)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-[var(--text-grey)] hover:text-[var(--primary-red)] transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 text-base font-semibold rounded-[var(--radius-sm)] bg-[var(--primary-red)] text-white transition-all duration-300 hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)]"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
