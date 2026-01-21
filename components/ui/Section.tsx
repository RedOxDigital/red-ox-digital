interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light" | "dark" | "primary";
  padding?: "none" | "sm" | "md" | "lg";
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

const backgroundStyles = {
  white: "bg-[var(--off-white)]",
  light: "bg-[var(--light-grey)]",
  dark: "bg-[var(--charcoal)] text-white",
  primary: "bg-[var(--red-ox-red)] text-white",
};

const paddingStyles = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16 lg:py-20",
  lg: "py-16 md:py-24 lg:py-32",
};

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

function Section({
  children,
  id,
  className = "",
  background = "white",
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
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerSizes[containerSize]}`}>
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
    <div className={`max-w-3xl mb-12 ${alignStyles[align]} ${className}`}>
      {subtitle && (
        <p className="text-[var(--red-ox-red)] font-semibold text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="mb-4">{title}</h2>
      {description && (
        <p className="text-[var(--medium-grey)] text-lg leading-relaxed">
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
    sm: "gap-4",
    md: "gap-6 lg:gap-8",
    lg: "gap-8 lg:gap-12",
  };

  return (
    <div className={`grid ${colStyles[cols]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
}

export { Section, SectionHeader, Grid };
export type { SectionProps, SectionHeaderProps, GridProps };
