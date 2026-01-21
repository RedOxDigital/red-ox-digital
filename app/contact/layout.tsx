import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Red Ox Digital - North Brisbane Digital Marketing",
  description:
    "Get in touch with Red Ox Digital, your local freelance digital marketer in Dakabin. Call us, email us, or fill out our contact form. Serving North Brisbane businesses.",
  keywords: [
    "contact Red Ox Digital",
    "digital marketing North Brisbane",
    "Dakabin marketing agency",
    "freelance digital marketer contact",
    "North Brisbane business marketing",
  ],
  openGraph: {
    title: "Contact Red Ox Digital | North Brisbane Digital Marketing",
    description:
      "Ready to grow your business? Get in touch with your local freelance digital marketer. No pressure, just a friendly chat about how we can help.",
    url: "https://redoxdigital.com.au/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
