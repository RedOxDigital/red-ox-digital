import type { Metadata } from "next";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Full-service digital marketing for North Brisbane businesses. Web design, SEO, Google Ads, and media production. Get more leads and grow your business.",
  alternates: {
    canonical: "https://redoxdigital.com.au/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
