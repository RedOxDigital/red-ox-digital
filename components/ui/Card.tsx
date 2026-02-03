import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  icon?: React.ReactNode;
  variant?: "default" | "elevated" | "bordered" | "bento";
  aspectRatio?: "video" | "square" | "portrait";
  className?: string;
  children?: React.ReactNode;
}

const variantStyles = {
  default: "bg-[var(--bg-off-white)]",
  elevated: "bg-[var(--bg-off-white)] shadow-lg hover:shadow-xl",
  bordered: "bg-[var(--bg-off-white)] border border-[var(--border-color)]",
  bento: "bg-[var(--card-bg)] border border-[var(--border-dark)] shadow-[8px_8px_0px_var(--primary-red)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_var(--primary-red)]",
};

const aspectRatioStyles = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

function Card({
  title,
  description,
  href,
  image,
  icon,
  variant = "default",
  aspectRatio = "video",
  className = "",
  children,
}: CardProps) {
  const cardContent = (
    <div
      className={`
        rounded-[var(--radius-md)] overflow-hidden
        transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${variantStyles[variant]}
        ${href ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Image */}
      {image && (
        <div className={`relative ${aspectRatioStyles[aspectRatio]} overflow-hidden`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-[var(--spacing-md)]">
        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary-red-light)] text-[var(--primary-red)]">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="font-serif text-[1.5rem] font-semibold mb-2 text-[var(--text-dark)]">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-[var(--text-grey)] text-[0.9rem] leading-relaxed">
            {description}
          </p>
        )}

        {/* Children for custom content */}
        {children}
      </div>
    </div>
  );

  // Wrap in Link if href is provided
  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

// Bento Card variant - new design with offset shadow
interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

function BentoCard({ title, description, icon, href }: BentoCardProps) {
  const cardContent = (
    <div className="bento-card p-[var(--spacing-md)] min-h-[220px] flex flex-col justify-between cursor-pointer">
      <div className="text-[var(--primary-red)] mb-[var(--spacing-sm)]">
        <span className="text-[40px]">{icon}</span>
      </div>
      <div>
        <h3 className="font-serif text-[1.5rem] font-semibold mb-[var(--spacing-xs)] text-[var(--text-dark)]">
          {title}
        </h3>
        <p className="text-[0.9rem] text-[var(--text-grey)]">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

// Service Card variant with icon - updated with bento styling
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="p-[var(--spacing-md)] rounded-[var(--radius-md)] bg-[var(--card-bg)] border border-[var(--border-dark)] shadow-[8px_8px_0px_var(--primary-red)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_var(--primary-red)] min-h-[220px] flex flex-col justify-between cursor-pointer">
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-[var(--radius-md)] text-[var(--primary-red)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]">
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold mb-2 text-[var(--text-dark)]">
            {title}
          </h3>
          <p className="text-[var(--text-grey)] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

// Testimonial Card variant - updated styling
interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
}: TestimonialCardProps) {
  return (
    <div className="h-full p-6 md:p-8 rounded-[var(--radius-md)] bg-[var(--card-bg)] border border-[var(--border-dark)] shadow-[8px_8px_0px_var(--primary-red)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_var(--primary-red)] flex flex-col">
      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif italic text-lg text-[var(--text-dark)] mb-6 leading-relaxed flex-grow">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author Info */}
      <div className="mt-auto pt-4 border-t border-[var(--border-color)]">
        <div className="flex items-center gap-3">
          {image ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={image}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-[var(--primary-red)] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">{author.charAt(0)}</span>
            </div>
          )}
          <div>
            <p className="font-bold text-[var(--text-dark)]">
              {author}
            </p>
            {(role || company) && (
              <p className="text-sm text-[var(--text-grey)]">
                {role}
                {role && company && ", "}
                {company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Case Card for client success stories
interface CaseCardProps {
  logo?: string;
  logoIcon?: string;
  companyName: string;
  quote: string;
  category: string;
  image?: string;
}

function CaseCard({ logo, logoIcon, companyName, quote, category, image }: CaseCardProps) {
  return (
    <div className="p-[var(--spacing-lg)] px-[var(--spacing-md)] rounded-[var(--radius-md)] bg-transparent border border-[var(--border-dark)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[var(--primary-red)] hover:shadow-[0_20px_40px_rgba(194,59,34,0.15)] flex flex-col items-center text-center">
      {/* Client Logo */}
      <div className="flex items-center justify-center mb-[var(--spacing-md)]">
        {logoIcon && <span className="material-symbols-outlined text-[var(--text-dark)] mr-2">{logoIcon}</span>}
        <span className="font-bold uppercase text-[0.85rem] tracking-wider">{companyName}</span>
      </div>

      {/* Quote */}
      <p className="font-serif italic text-[1.15rem] text-[var(--text-dark)] mb-[var(--spacing-sm)] leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Category */}
      <div className="text-[0.8rem] font-bold uppercase tracking-wider text-[var(--text-dark)] mb-[var(--spacing-lg)]">
        {category}
      </div>

      {/* Image */}
      {image && (
        <div className="w-full h-[180px] rounded-[var(--radius-md)] overflow-hidden mt-auto">
          <Image
            src={image}
            alt={companyName}
            width={400}
            height={180}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
          />
        </div>
      )}
    </div>
  );
}

// Process Step Card
interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber?: number;
}

function ProcessStepCard({ icon, title, description }: ProcessStepProps) {
  return (
    <div className="group bg-[var(--card-bg)] border border-[var(--border-dark)] p-[var(--spacing-md)] rounded-[var(--radius-md)] shadow-[8px_8px_0px_var(--primary-red)] flex flex-col gap-[var(--spacing-xs)] min-h-[160px] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[14px_14px_0px_var(--primary-red)]">
      <div className="text-[var(--primary-red)] mb-1">
        <span className="text-[32px] inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]">{icon}</span>
      </div>
      <h4 className="font-serif font-bold text-[1rem] mb-0.5 text-[var(--text-dark)]">
        {title}
      </h4>
      <p className="text-[0.85rem] text-[var(--text-grey)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Blog Card
interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category?: string;
}

function BlogCard({ title, excerpt, image, href, category }: BlogCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-transparent rounded-[var(--radius-md)] overflow-hidden flex flex-col transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-2">
        <div className="w-full h-[220px] rounded-[var(--radius-lg)] overflow-hidden mb-[var(--spacing-sm)]">
          <Image
            src={image}
            alt={title}
            width={400}
            height={220}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          />
        </div>
        <div className="p-0">
          <h3 className="font-serif font-bold text-[1.1rem] mb-1 leading-relaxed text-[var(--text-dark)]">
            {title}
          </h3>
          <p className="text-[0.9rem] text-[var(--text-grey)] mb-2 leading-relaxed">
            {excerpt}
          </p>
          <span className="text-[var(--primary-red)] text-[0.85rem] font-semibold capitalize inline-block relative after:content-['_→'] after:opacity-0 after:translate-x-[-10px] after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:translate-x-0">
            {category || "Read more"}
          </span>
        </div>
      </div>
    </Link>
  );
}

export { Card, BentoCard, ServiceCard, TestimonialCard, CaseCard, ProcessStepCard, BlogCard };
export type { CardProps, BentoCardProps, ServiceCardProps, TestimonialCardProps, CaseCardProps, ProcessStepProps, BlogCardProps };
