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
  variant?: "default" | "elevated" | "bordered";
  aspectRatio?: "video" | "square" | "portrait";
  className?: string;
  children?: React.ReactNode;
}

const variantStyles = {
  default: "bg-white",
  elevated: "bg-white shadow-lg hover:shadow-xl",
  bordered: "bg-white border border-[var(--border-grey)]",
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
        rounded-xl overflow-hidden
        transition-all duration-300
        ${variantStyles[variant]}
        ${href ? "hover:scale-[1.02] cursor-pointer" : ""}
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
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)]">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-[var(--charcoal)]">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-[var(--medium-grey)] leading-relaxed">
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

// Service Card variant with icon
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="p-6 rounded-xl bg-white border border-[var(--border-grey)] transition-all duration-300 hover:border-[var(--red-ox-red)] hover:shadow-lg">
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--red-ox-red)] group-hover:bg-[var(--red-ox-red)] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-[var(--charcoal)] group-hover:text-[var(--red-ox-red-text)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--medium-grey)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}

// Testimonial Card variant
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
    <div className="p-6 rounded-xl bg-white shadow-lg">
      {/* Quote Icon */}
      <svg
        className="w-8 h-8 text-[var(--red-ox-red)] mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote */}
      <p className="text-[var(--charcoal)] mb-6 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-[var(--charcoal)]">{author}</p>
          {(role || company) && (
            <p className="text-sm text-[var(--medium-grey)]">
              {role}
              {role && company && ", "}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export { Card, ServiceCard, TestimonialCard };
export type { CardProps, ServiceCardProps, TestimonialCardProps };
