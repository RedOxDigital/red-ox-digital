import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Section, SectionHeader, Grid } from "@/components/ui";

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
  openGraph: {
    title: "Digital Marketing Blog | Red Ox Digital",
    description:
      "Practical tips and advice to help North Brisbane small businesses grow online. No jargon, just useful information you can actually use.",
    url: "https://redoxdigital.com.au/blog",
    type: "website",
  },
};

// Placeholder blog posts for topical authority building
const blogPosts = [
  {
    title: "5 Ways Small Businesses Can Rank Higher on Google in 2026",
    excerpt:
      "Want more customers finding you online? These five simple SEO tips will help your local business climb the Google rankings without spending a fortune.",
    slug: "small-business-rank-higher-google-2026",
    category: "SEO",
    date: "20 January 2026",
    readTime: "6 min read",
    image: "/images/blog/seo-ranking-tips.jpg",
    featured: true,
  },
  {
    title: "Why Your Website Needs to Load in Under 3 Seconds",
    excerpt:
      "A slow website is costing you money. Find out how page speed affects your sales and what you can do to speed things up.",
    slug: "website-load-under-3-seconds",
    category: "Web Design",
    date: "15 January 2026",
    readTime: "5 min read",
    image: "/images/blog/page-speed.jpg",
    featured: true,
  },
  {
    title: "Google Maps: The Free Tool Most North Brisbane Businesses Ignore",
    excerpt:
      "Your Google Business Profile could be bringing in new customers right now. Here is how to set it up properly and start getting noticed.",
    slug: "google-maps-north-brisbane-businesses",
    category: "Local SEO",
    date: "10 January 2026",
    readTime: "7 min read",
    image: "/images/blog/google-business-profile.jpg",
    featured: true,
  },
  {
    title: "Local SEO: How to Dominate Your Suburb on Google",
    excerpt:
      "Want to be the go to business in your area? Here is how to set up your Google Business Profile and rank for local searches.",
    slug: "local-seo-guide",
    category: "SEO",
    date: "December 2025",
    readTime: "6 min read",
    image: "/images/blog/local-seo.jpg",
    featured: false,
  },
  {
    title: "Why Most Small Businesses Waste Money on Google Ads",
    excerpt:
      "Google Ads can bring great results, but most small businesses set them up wrong. Here is how to avoid the common mistakes.",
    slug: "google-ads-mistakes",
    category: "Google Ads",
    date: "November 2025",
    readTime: "5 min read",
    image: "/images/blog/google-ads.jpg",
    featured: false,
  },
  {
    title: "How Often Should You Update Your Website Content?",
    excerpt:
      "Fresh content helps with SEO, but how often do you really need to update your site? Here is a practical guide for busy business owners.",
    slug: "website-content-updates",
    category: "Content",
    date: "November 2025",
    readTime: "4 min read",
    image: "/images/blog/content-updates.jpg",
    featured: false,
  },
];

// Categories for filtering
const categories = [
  { name: "All", slug: "all" },
  { name: "SEO", slug: "seo" },
  { name: "Local SEO", slug: "local-seo" },
  { name: "Google Ads", slug: "google-ads" },
  { name: "Web Design", slug: "web-design" },
  { name: "Marketing Strategy", slug: "marketing-strategy" },
  { name: "Content", slug: "content" },
];

// Blog post card component
function BlogPostCard({
  post,
  featured = false,
}: {
  post: (typeof blogPosts)[0];
  featured?: boolean;
}) {
  return (
    <article
      className={`bg-white rounded-xl overflow-hidden border border-[var(--border-grey)] hover:border-[var(--red-ox-red)] hover:shadow-lg transition-all duration-300 ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-video bg-[var(--light-grey)] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[var(--red-ox-red)] text-white text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-[var(--medium-grey)] mb-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-[var(--medium-grey)] rounded-full" />
            <span>{post.readTime}</span>
          </div>
          <h2 className="text-xl font-semibold text-[var(--charcoal)] mb-3 line-clamp-2 group-hover:text-[var(--red-ox-red-text)] transition-colors">
            {post.title}
          </h2>
          <p className="text-[var(--medium-grey)] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center text-[var(--red-ox-red-text)] font-medium">
            Read More
            <svg
              className="w-4 h-4 ml-2"
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
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--off-white)] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D92323' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-4">
              Our Blog
            </p>
            <h1 className="mb-6">
              Digital Marketing Tips for Small Business
            </h1>
            <p className="text-lg md:text-xl text-[var(--medium-grey)]">
              Practical advice to help your North Brisbane business grow online.
              No jargon, no fluff. Just useful information you can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <Section background="white" padding="sm">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.slug}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                category.slug === "all"
                  ? "bg-[var(--red-ox-red)] text-white"
                  : "bg-[var(--light-grey)] text-[var(--charcoal)] hover:bg-[var(--red-ox-red-light)] hover:text-[var(--red-ox-red-text)]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured Posts */}
      <Section background="white" padding="md">
        <SectionHeader
          subtitle="Featured Articles"
          title="Our Latest Thinking"
          description="Start here. These are the articles we think every North Brisbane business owner should read."
          align="left"
        />
        <Grid cols={3} gap="md">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} featured />
          ))}
        </Grid>
      </Section>

      {/* All Posts */}
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="More Articles"
          title="Keep Learning"
          description="Browse all our articles on SEO, Google Ads, web design, and growing your business online."
          align="left"
        />
        <Grid cols={3} gap="md">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </Grid>

        {/* Load More Placeholder */}
        <div className="text-center mt-12">
          <Button variant="outline" disabled>
            Load More Articles (Coming Soon)
          </Button>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="white" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Get Marketing Tips in Your Inbox</h2>
          <p className="text-[var(--medium-grey)] text-lg mb-8">
            Join other North Brisbane business owners who get our best tips
            delivered straight to their inbox. No spam, just useful advice you
            can use.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-[var(--border-grey)] rounded-lg focus:ring-2 focus:ring-[var(--red-ox-red)] focus:border-transparent transition-colors"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-sm text-[var(--medium-grey)] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      {/* Topics We Cover */}
      <Section background="light" padding="lg">
        <SectionHeader
          subtitle="Topics We Cover"
          title="What You Will Learn Here"
          description="We write about the things that actually matter for small business marketing."
        />
        <Grid cols={4} gap="md">
          <div className="p-6 bg-white rounded-xl border border-[var(--border-grey)] text-center">
            <div className="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--charcoal)] mb-2">SEO</h3>
            <p className="text-sm text-[var(--medium-grey)]">
              Get found on Google without paying for every click
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-[var(--border-grey)] text-center">
            <div className="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--charcoal)] mb-2">
              Google Ads
            </h3>
            <p className="text-sm text-[var(--medium-grey)]">
              Run ads that bring leads, not just clicks
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-[var(--border-grey)] text-center">
            <div className="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--charcoal)] mb-2">
              Web Design
            </h3>
            <p className="text-sm text-[var(--medium-grey)]">
              Build websites that turn visitors into customers
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-[var(--border-grey)] text-center">
            <div className="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--charcoal)] mb-2">
              Content
            </h3>
            <p className="text-sm text-[var(--medium-grey)]">
              Create content that attracts and converts
            </p>
          </div>
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white mb-6">
            Want Personalised Advice for Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Reading is great, but nothing beats a one on one chat about your
            specific situation. Book a free discovery call and let us talk about
            your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-[var(--red-ox-red-text)] hover:bg-[var(--off-white)]"
            >
              Book a Free Discovery Call
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--red-ox-red-text)]"
            >
              View Our Services
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Based in Dakabin, serving all of North Brisbane
          </p>
        </div>
      </Section>
    </>
  );
}
