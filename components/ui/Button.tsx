"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--primary-red)] text-white rounded-[50px] border border-[var(--primary-red)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)] active:-translate-y-[1px] active:shadow-[0_6px_16px_rgba(194,59,34,0.25)] focus:ring-[var(--primary-red)]",
        secondary:
          "bg-[var(--text-dark)] text-white rounded-[var(--radius-sm)] hover:opacity-90 focus:ring-[var(--text-dark)]",
        outline:
          "bg-transparent border border-[var(--primary-red)] text-[var(--primary-red)] rounded-[50px] hover:bg-[var(--primary-red)] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)] focus:ring-[var(--primary-red)]",
        ghost:
          "bg-transparent text-[var(--text-dark)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-off-white)] focus:ring-[var(--text-dark)]",
        light:
          "bg-white text-[var(--primary-red)] rounded-[50px] hover:bg-[var(--bg-off-white)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)] focus:ring-white",
        destructive:
          "bg-[hsl(var(--destructive))] text-white rounded-[var(--radius-sm)] hover:bg-[hsl(var(--destructive))]/90 focus:ring-[hsl(var(--destructive))]",
        link: "text-[var(--primary-red)] underline-offset-4 hover:underline focus:ring-0",
        nav: "bg-[var(--primary-red)] text-white rounded-[var(--radius-sm)] font-semibold hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(194,59,34,0.3)] focus:ring-[var(--primary-red)]",
      },
      size: {
        sm: "px-5 py-2.5 text-sm min-h-[36px]",
        md: "px-7 py-3 text-[0.95rem] min-h-[44px]",
        lg: "px-8 py-4 text-base min-h-[52px]",
        icon: "size-9",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      asChild = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant, size, fullWidth, className })
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
