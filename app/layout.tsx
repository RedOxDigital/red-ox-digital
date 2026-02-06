import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header, Footer, MobileCTA } from "@/components/layout";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Toaster } from "@/components/ui/sonner";
import { JotFormModalProvider } from "@/components/ui/JotFormModal";
import "./globals.css";

// Google Analytics Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Serif font for headings (classic, authoritative)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Sans-serif font for body (clean, modern)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Base metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://redoxdigital.com.au"),
  title: {
    default: "Digital Marketing Consultant in Dakabin & North Brisbane | Red Ox Digital",
    template: "%s | Red Ox Digital",
  },
  description:
    "Red Ox Digital is your local digital marketing consultant in Dakabin, serving North Brisbane. We offer web design, SEO, Google Ads, and media production services for small businesses.",
  keywords: [
    "Digital Marketing Consultant",
    "Digital Marketing Specialist",
    "Freelance Digital Marketer",
    "Web Design North Brisbane",
    "SEO Services",
    "Google Ads Management",
    "Dakabin",
    "North Lakes",
    "Brendale",
  ],
  authors: [{ name: "Red Ox Digital" }],
  creator: "Red Ox Digital",
  publisher: "Red Ox Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://redoxdigital.com.au",
    siteName: "Red Ox Digital",
    title: "Digital Marketing Consultant in Dakabin & North Brisbane",
    description:
      "Your local digital marketing partner. Web design, SEO, Google Ads, and media production for North Brisbane businesses.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Red Ox Digital - Digital Marketing Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Consultant | Red Ox Digital",
    description:
      "Your local digital marketing partner in North Brisbane. Web design, SEO, Google Ads, and media production.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://redoxdigital.com.au",
  },
  verification: {
    // Add Google Search Console verification here
    // google: "verification-code",
  },
};

// Viewport configuration for mobile optimisation
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#C23B22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Material Symbols for icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />

        {/* Favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        {/* Google Analytics */}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />

        <JotFormModalProvider>
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
          >
            Skip to main content
          </a>

          {/* Header */}
          <Header />

          {/* Main content */}
          <main id="main-content" className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile sticky CTA */}
          <MobileCTA />

          {/* Cookie Consent Banner */}
          <CookieConsent />

          {/* Toast Notifications */}
          <Toaster position="top-right" />
        </JotFormModalProvider>
      </body>
    </html>
  );
}
