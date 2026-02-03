"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultConsent: ConsentSettings = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentSettings>(defaultConsent);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookie_consent");
    if (!savedConsent) {
      // Small delay before showing for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const parsed = JSON.parse(savedConsent);
        setConsent(parsed);
        applyConsent(parsed);
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const applyConsent = (settings: ConsentSettings) => {
    // Apply analytics consent
    if (settings.analytics && typeof window !== "undefined") {
      // Enable Google Analytics
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }

    // Apply marketing consent
    if (settings.marketing && typeof window !== "undefined") {
      // Enable marketing cookies
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const saveConsent = (settings: ConsentSettings) => {
    localStorage.setItem("cookie_consent", JSON.stringify(settings));
    localStorage.setItem("cookie_consent_date", new Date().toISOString());
    setConsent(settings);
    applyConsent(settings);
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(consent);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        aria-hidden="true"
      />

      {/* Cookie Banner */}
      <div className="relative w-full max-w-lg transform overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bg-off-white)] shadow-2xl transition-all sm:max-w-xl">
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Cookie Icon */}
            <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-red-light)]">
              <svg
                className="h-6 w-6 text-[var(--primary-red)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h2
                id="cookie-consent-title"
                className="text-lg font-semibold text-[var(--text-dark)]"
              >
                We value your privacy
              </h2>
              <p className="mt-2 text-sm text-[var(--text-grey)]">
                We use cookies to enhance your browsing experience, analyse site
                traffic, and serve personalised content. By clicking
                &quot;Accept All&quot;, you consent to our use of cookies.{" "}
                <Link
                  href="/cookies"
                  className="text-[var(--primary-red)] hover:underline"
                >
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="mt-6 space-y-4 border-t border-[var(--border-color)] pt-6">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[var(--text-dark)]">
                    Essential Cookies
                  </p>
                  <p className="text-sm text-[var(--text-grey)]">
                    Required for the website to function
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="sr-only"
                    aria-label="Essential cookies (always enabled)"
                  />
                  <div className="h-6 w-11 rounded-full bg-[var(--primary-red)] opacity-50 cursor-not-allowed">
                    <div className="h-5 w-5 translate-x-5 translate-y-0.5 rounded-full bg-white shadow transition" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[var(--text-dark)]">
                    Analytics Cookies
                  </p>
                  <p className="text-sm text-[var(--text-grey)]">
                    Help us improve our website
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConsent((prev) => ({
                      ...prev,
                      analytics: !prev.analytics,
                    }))
                  }
                  className="relative"
                  aria-label={`Analytics cookies ${consent.analytics ? "enabled" : "disabled"}`}
                >
                  <div
                    className={`h-6 w-11 rounded-full transition-colors ${
                      consent.analytics
                        ? "bg-[var(--primary-red)]"
                        : "bg-[var(--card-bg)]"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition ${
                        consent.analytics ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[var(--text-dark)]">
                    Marketing Cookies
                  </p>
                  <p className="text-sm text-[var(--text-grey)]">
                    Used for targeted advertising
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConsent((prev) => ({
                      ...prev,
                      marketing: !prev.marketing,
                    }))
                  }
                  className="relative"
                  aria-label={`Marketing cookies ${consent.marketing ? "enabled" : "disabled"}`}
                >
                  <div
                    className={`h-6 w-11 rounded-full transition-colors ${
                      consent.marketing
                        ? "bg-[var(--primary-red)]"
                        : "bg-[var(--card-bg)]"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition ${
                        consent.marketing ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            {!showSettings ? (
              <>
                <button
                  onClick={() => setShowSettings(true)}
                  className="order-3 sm:order-1 px-4 py-2 text-sm font-medium text-[var(--text-grey)] hover:text-[var(--text-dark)] transition-colors"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={acceptEssential}
                  className="order-2 px-4 py-2 text-sm font-medium text-[var(--text-dark)] border border-[var(--border-color)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-cream)] transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="order-1 sm:order-3 px-4 py-2 text-sm font-medium text-white bg-[var(--primary-red)] rounded-[var(--radius-sm)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)]"
                >
                  Accept All
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 text-sm font-medium text-[var(--text-grey)] hover:text-[var(--text-dark)] transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={savePreferences}
                  className="px-4 py-2 text-sm font-medium text-white bg-[var(--primary-red)] rounded-[var(--radius-sm)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)]"
                >
                  Save Preferences
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Add gtag to window type
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string>
    ) => void;
    dataLayer?: unknown[];
  }
}
