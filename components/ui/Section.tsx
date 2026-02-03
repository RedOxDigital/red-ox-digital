interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "cream" | "offWhite" | "cardBg" | "dark" | "primary";
  padding?: "none" | "sm" | "md" | "lg";
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

const backgroundStyles = {
  cream: "bg-[var(--bg-cream)]",
  offWhite: "bg-[var(--bg-off-white)]",
  cardBg: "bg-[var(--card-bg)]",
  dark: "bg-[var(--text-dark)] text-[var(--text-light)]",
  primary: "bg-[var(--primary-red)] text-white",
};

const paddingStyles = {
  none: "",
  sm: "py-[var(--spacing-md)] md:py-[var(--spacing-lg)]",
  md: "py-[var(--spacing-lg)] md:py-[var(--spacing-xl)]",
  lg: "py-[var(--spacing-xl)] md:py-[calc(var(--spacing-xl)*1.5)]",
};

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-[var(--container-width)]",
  full: "max-w-full",
};

function Section({
  children,
  id,
  className = "",
  background = "cream",
  padding = "md",
  container = true,
  containerSize = "xl",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        ${backgroundStyles[background]}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {container ? (
        <div className={`mx-auto px-[var(--spacing-md)] ${containerSizes[containerSize]}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

// Section Header component for consistent headings
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-[var(--spacing-lg)] ${alignStyles[align]} ${className}`}>
      {subtitle && (
        <p className="text-[var(--primary-red)] font-semibold text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-[2.5rem] mb-[var(--spacing-xs)]">{title}</h2>
      {description && (
        <p className="text-[var(--text-grey)] text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// Grid component for consistent layouts
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

function Grid({ children, cols = 3, gap = "md", className = "" }: GridProps) {
  const colStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapStyles = {
    sm: "gap-[var(--spacing-sm)]",
    md: "gap-[var(--spacing-md)]",
    lg: "gap-[var(--spacing-lg)]",
  };

  return (
    <div className={`grid ${colStyles[cols]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
}

// Bento Grid - 3-column asymmetric layout
interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-md)] ${className}`}>
      {children}
    </div>
  );
}

// Stats Grid - 3-column centered stats
interface StatsGridProps {
  children: React.ReactNode;
  className?: string;
}

function StatsGrid({ children, className = "" }: StatsGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-md)] text-center ${className}`}>
      {children}
    </div>
  );
}

// Stat Item
interface StatItemProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

function StatItem({ value, label, icon }: StatItemProps) {
  return (
    <div className="transition-all duration-300 hover:scale-105">
      {icon && (
        <div className="mx-auto mb-[var(--spacing-sm)] text-[var(--primary-red)]">
          <span className="text-[32px]">{icon}</span>
        </div>
      )}
      <h3 className="font-serif text-[3.5rem] leading-none mb-[var(--spacing-xs)] text-[var(--text-dark)] transition-colors duration-300 hover:text-[var(--primary-red)]">
        {value}
      </h3>
      <p className="uppercase text-[0.8rem] tracking-[1.5px] text-[var(--text-grey)] font-semibold">
        {label}
      </p>
    </div>
  );
}

// Process Grid - 4-column process steps
interface ProcessGridProps {
  children: React.ReactNode;
  className?: string;
}

function ProcessGrid({ children, className = "" }: ProcessGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-md)] ${className}`}>
      {children}
    </div>
  );
}

// Team Grid - 4-column team members
interface TeamGridProps {
  children: React.ReactNode;
  className?: string;
}

function TeamGrid({ children, className = "" }: TeamGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-md)] ${className}`}>
      {children}
    </div>
  );
}

// Blog Grid - 3-column blog posts
interface BlogGridProps {
  children: React.ReactNode;
  className?: string;
}

function BlogGrid({ children, className = "" }: BlogGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-md)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}>
      {children}
    </div>
  );
}

export { Section, SectionHeader, Grid, BentoGrid, StatsGrid, StatItem, ProcessGrid, TeamGrid, BlogGrid };
export type { SectionProps, SectionHeaderProps, GridProps, BentoGridProps, StatsGridProps, StatItemProps, ProcessGridProps, TeamGridProps, BlogGridProps };
