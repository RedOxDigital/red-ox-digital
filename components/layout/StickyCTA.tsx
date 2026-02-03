"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Desktop sticky CTA bar (shows on desktop only, after 400px scroll)
// Note: On mobile, MobileCTA handles the sticky CTA functionality
export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50
        hidden lg:block
        bg-[var(--text-dark)] border-t border-[var(--border-dark)]
        shadow-[0_-4px_20px_rgba(0,0,0,0.15)]
        transform transition-transform duration-300 ease-out
        safe-area-bottom
        ${isVisible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Promotional text */}
          <div className="text-[var(--text-light)]">
            <p className="text-lg font-semibold">
              Ready to grow your business online?
            </p>
            <p className="text-sm text-[var(--text-grey)]">
              Get a free consultation with our digital experts today.
            </p>
          </div>

          {/* Right: CTA buttons */}
          <div className="flex items-center gap-4">
            {/* Call Button */}
            <a
              href="tel:+61493992661"
              className="inline-flex items-center gap-2 bg-[var(--bg-off-white)] text-[var(--text-dark)] font-semibold py-3 px-6 rounded-[var(--radius-sm)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[var(--bg-cream)] hover:shadow-md hover:-translate-y-[2px]"
              aria-label="Call Red Ox Digital"
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
              <span className="hidden xl:inline">Call Us</span>
            </a>

            {/* Get a Free Quote Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--primary-red)] text-white font-semibold py-3 px-6 rounded-[var(--radius-sm)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)]"
              aria-label="Get a free quote from Red Ox Digital"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
