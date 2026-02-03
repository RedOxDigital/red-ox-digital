"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Section,
  SectionHeader,
  ScrollReveal,
  ScrollRevealGroup,
  BlogCarousel,
} from "@/components/ui";

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

// Topics with icons
const topics = [
  {
    name: "SEO",
    description: "Get found on Google without paying for every click",
    icon: (
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
    ),
  },
  {
    name: "Google Ads",
    description: "Run ads that bring leads, not just clicks",
    icon: (
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
    ),
  },
  {
    name: "Web Design",
    description: "Build websites that turn visitors into customers",
    icon: (
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
    ),
  },
  {
    name: "Content",
    description: "Create content that attracts and converts",
    icon: (
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
    ),
  },
];

// Blog post card component with design-reference styles
function BlogPostCard({
  post,
}: {
  post: (typeof blogPosts)[0];
}) {
  return (
    <article className="blog-card bg-transparent rounded-[var(--radius-md)] overflow-hidden flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block group">
        {/* Image wrapper with design-reference styling */}
        <div className="blog-img-wrapper w-full h-[220px] rounded-[var(--radius-lg)] overflow-hidden mb-[var(--spacing-sm)] relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[var(--primary-red)] text-[var(--text-light)] text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-0">
          <div className="flex items-center gap-3 text-sm text-[var(--text-grey)] mb-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-[var(--text-grey)] rounded-full" />
            <span>{post.readTime}</span>
          </div>
          <h2 className="font-serif font-bold text-[1.1rem] mb-2 leading-relaxed text-[var(--text-dark)] line-clamp-2">
            {post.title}
          </h2>
          <p className="text-[0.9rem] text-[var(--text-grey)] mb-3 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <span className="read-more text-[var(--primary-red)] text-[0.85rem] font-semibold inline-block">
            Read More
          </span>
        </div>
      </Link>
    </article>
  );
}

// Featured blog card for carousel
function FeaturedBlogCard({
  post,
}: {
  post: (typeof blogPosts)[0];
}) {
  return (
    <article className="blog-card bg-white rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary-red)] flex flex-col md:flex-row">
      <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row w-full group">
        {/* Image wrapper */}
        <div className="blog-img-wrapper w-full md:w-1/2 h-[250px] md:h-[300px] overflow-hidden relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[var(--primary-red)] text-[var(--text-light)] text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
          <div className="flex items-center gap-3 text-sm text-[var(--text-grey)] mb-4">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-[var(--text-grey)] rounded-full" />
            <span>{post.readTime}</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-4 leading-tight">
            {post.title}
          </h2>
          <p className="text-[var(--text-grey)] leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <span className="read-more text-[var(--primary-red)] font-semibold inline-block">
            Read Full Article
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPageClient() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  // Create carousel slides from featured posts
  const featuredSlides = featuredPosts.map((post) => ({
    id: post.slug,
    content: <FeaturedBlogCard post={post} />,
  }));

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
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-4">
                Our Blog
              </p>
              <h1 className="mb-6">
                Digital Marketing Tips for Small Business
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-grey)]">
                Practical advice to help your North Brisbane business grow online.
                No jargon, no fluff. Just useful information you can actually use.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <Section background="cream" padding="sm">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                  category.slug === "all"
                    ? "bg-[var(--primary-red)] text-[var(--text-light)]"
                    : "bg-[var(--card-bg)] text-[var(--text-dark)] hover:bg-[var(--red-ox-red-light)] hover:text-[var(--red-ox-red-text)]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Featured Posts Carousel */}
      <Section background="cream" padding="md">
        <ScrollReveal>
          <BlogCarousel
            slides={featuredSlides}
            header={
              <div>
                <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-2">
                  Featured Articles
                </p>
                <h2 className="font-serif text-[2rem] md:text-[2.5rem] m-0">
                  Our Latest Thinking
                </h2>
              </div>
            }
          />
        </ScrollReveal>
      </Section>

      {/* All Posts */}
      <Section background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="More Articles"
            title="Keep Learning"
            description="Browse all our articles on SEO, Google Ads, web design, and growing your business online."
            align="left"
          />
        </ScrollReveal>
        <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-md)]">
          {recentPosts.map((post, index) => (
            <div key={post.slug} className={`animate-on-scroll delay-${(index % 5) + 1}`}>
              <BlogPostCard post={post} />
            </div>
          ))}
        </ScrollRevealGroup>

        {/* Load More Placeholder */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="outline" disabled>
              Load More Articles (Coming Soon)
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Newsletter Signup */}
      <Section background="cream" padding="lg">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Get Marketing Tips in Your Inbox</h2>
            <p className="text-[var(--text-grey)] text-lg mb-8">
              Join other North Brisbane business owners who get our best tips
              delivered straight to their inbox. No spam, just useful advice you
              can use.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-[var(--text-grey)] mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Topics We Cover - Bento Style */}
      <Section background="offWhite" padding="lg">
        <ScrollReveal>
          <SectionHeader
            subtitle="Topics We Cover"
            title="What You Will Learn Here"
            description="We write about the things that actually matter for small business marketing."
          />
        </ScrollReveal>
        <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-md)]">
          {topics.map((topic, index) => (
            <div
              key={topic.name}
              className={`bento-card p-6 text-center animate-on-scroll delay-${(index % 5) + 1}`}
            >
              <div className="bento-icon w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--primary-red)]">
                {topic.icon}
              </div>
              <h3 className="font-semibold text-[var(--text-dark)] mb-2">
                {topic.name}
              </h3>
              <p className="text-sm text-[var(--text-grey)]">
                {topic.description}
              </p>
            </div>
          ))}
        </ScrollRevealGroup>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--text-light)] mb-6">
              Want Personalised Advice for Your Business?
            </h2>
            <p className="text-[var(--text-light)]/90 text-lg mb-8 max-w-2xl mx-auto">
              Reading is great, but nothing beats a one on one chat about your
              specific situation. Book a free discovery call and let us talk about
              your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="light"
                size="lg"
              >
                Book a Free Discovery Call
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-[var(--text-light)] hover:bg-white hover:text-[var(--red-ox-red-text)]"
              >
                View Our Services
              </Button>
            </div>
            <p className="text-[var(--text-light)]/70 text-sm mt-6">
              Based in Dakabin, serving all of North Brisbane
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
