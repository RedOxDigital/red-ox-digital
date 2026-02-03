'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * AnimatedCounter - Numbers that count up when scrolled into view
 * Based on design-reference.html lines 466-502, 1132-1148, JS 2424-2465
 */

export interface AnimatedCounterProps {
  /** The target number to count to */
  value: number;
  /** Optional suffix (e.g., '%', '+', 'k') */
  suffix?: string;
  /** Optional prefix (e.g., '$', '#') */
  prefix?: string;
  /** Duration of animation in ms (default 2000) */
  duration?: number;
  /** Additional class names */
  className?: string;
  /** Whether to format with locale (commas) */
  formatLocale?: boolean;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
  formatLocale = true,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, value, duration]);

  const animateCount = () => {
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out-expo easing function (from design-reference.html)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (value - startValue) * easeOut);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const displayValue = formatLocale ? count.toLocaleString() : count.toString();

  return (
    <span ref={ref} className={cn('stat-item', className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

/**
 * StatCounter - Full stat item with icon, number, and label
 * Based on design-reference.html lines 466-502
 */
export interface StatCounterProps {
  /** The target number to count to */
  value: number;
  /** Label text below the number */
  label: string;
  /** Material symbol icon name */
  icon?: string;
  /** Optional suffix (e.g., '%', '+', 'k') */
  suffix?: string;
  /** Optional prefix */
  prefix?: string;
  /** Duration of animation in ms */
  duration?: number;
  /** Additional class names */
  className?: string;
}

export function StatCounter({
  value,
  label,
  icon,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, value, duration]);

  const animateCount = () => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(value * easeOut);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref} className={cn('stat-item text-center', className)}>
      {icon && (
        <div className="stat-icon mx-auto mb-4 text-primary">
          <span className="material-symbols-outlined text-[32px]">{icon}</span>
        </div>
      )}
      <h3 className="font-serif text-[3.5rem] leading-none mb-2 text-text-dark transition-all duration-300 hover:scale-105 hover:text-primary">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="uppercase text-[0.8rem] tracking-[1.5px] text-text-grey font-semibold">
        {label}
      </p>
    </div>
  );
}
