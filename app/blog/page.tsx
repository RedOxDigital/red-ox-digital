import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Red Ox Digital - Digital Marketing Tips for Small Business",
  description:
    "Practical digital marketing tips and advice for North Brisbane small businesses. Learn about SEO, Google Ads, web design, and growing your business online.",
  keywords: [
    "digital marketing blog",
    "small business marketing tips",
    "SEO advice",
    "Google Ads tips",
    "North Brisbane business blog",
    "marketing for small business",
  ],
  alternates: {
    canonical: "https://redoxdigital.com.au/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog | Red Ox Digital",
    description:
      "Practical tips and advice to help North Brisbane small businesses grow online. No jargon, just useful information you can actually use.",
    url: "https://redoxdigital.com.au/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
