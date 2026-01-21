"use client";

import Link from "next/link";
import { useState } from "react";

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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border-grey)]">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" aria-label="Red Ox Digital Home">
                <span className="text-2xl font-bold text-[var(--red-ox-red)]">
                  Red Ox
                </span>
                <span className="text-2xl font-bold text-[var(--charcoal)] ml-1">
                  Digital
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-[var(--charcoal)] hover:text-[var(--red-ox-red-text)] font-medium transition-colors py-2"
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
                      <div className="bg-white rounded-lg shadow-lg border border-[var(--border-grey)] py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-[var(--charcoal)] hover:bg-[var(--light-grey)] hover:text-[var(--red-ox-red-text)] transition-colors"
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

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex lg:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-[var(--red-ox-red)] text-white hover:bg-[var(--red-ox-red-hover)] transition-colors min-h-[44px]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2.5 text-[var(--charcoal)] min-w-[44px] min-h-[44px]"
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
          <div className="relative bg-white h-full overflow-y-auto shadow-xl">
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-lg font-medium text-[var(--charcoal)] border-b border-[var(--border-grey)]"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 py-2 space-y-1 bg-[var(--light-grey)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-[var(--medium-grey)] hover:text-[var(--red-ox-red-text)]"
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
                  className="block w-full text-center px-6 py-3 text-base font-semibold rounded-lg bg-[var(--red-ox-red)] text-white hover:bg-[var(--red-ox-red-hover)] transition-colors"
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
