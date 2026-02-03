'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * ScrollReveal - IntersectionObserver wrapper for scroll-triggered fade-in animations
 * Based on design-reference.html lines 775-811, JS 2268-2295
 */

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay index for stagger effect (1-5) */
  delay?: 1 | 2 | 3 | 4 | 5;
  /** Threshold for intersection (0-1), default 0.1 */
  threshold?: number;
  /** Whether to animate only once or every time element enters viewport */
  once?: boolean;
  /** Custom root margin */
  rootMargin?: string;
}

export function ScrollReveal({
  children,
  className,
  delay,
  threshold = 0.1,
  once = true,
  rootMargin = '0px 0px -50px 0px',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll',
        delay && `delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * ScrollRevealGroup - Wrapper for staggered children animations
 * Based on design-reference.html .stagger-children class
 */
export interface ScrollRevealGroupProps {
  children: ReactNode;
  className?: string;
  /** Threshold for intersection (0-1), default 0.1 */
  threshold?: number;
  /** Whether to animate only once */
  once?: boolean;
  /** Custom root margin */
  rootMargin?: string;
}

export function ScrollRevealGroup({
  children,
  className,
  threshold = 0.1,
  once = true,
  rootMargin = '0px 0px -50px 0px',
}: ScrollRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return (
    <div ref={ref} className={cn('stagger-children', className)}>
      {children}
    </div>
  );
}
