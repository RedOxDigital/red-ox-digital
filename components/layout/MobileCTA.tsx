"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Mobile sticky CTA bar (shows on mobile only)
export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[var(--bg-cream)] border-t border-[var(--border-color)] shadow-lg safe-area-bottom">
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        {/* Call Button */}
        <a
          href="tel:+61493992661"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--text-dark)] text-white font-semibold py-3 px-4 rounded-[var(--radius-sm)] min-h-[44px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-90"
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
          Call Now
        </a>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--primary-red)] text-white font-semibold py-3 px-4 rounded-[var(--radius-sm)] min-h-[44px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)]"
          aria-label="Contact Red Ox Digital"
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Get Quote
        </Link>
      </div>
    </div>
  );
}
