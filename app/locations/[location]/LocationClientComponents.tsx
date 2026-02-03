'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CaseStudyStats - Animated counters for case study metrics
 * Based on design-reference.html AnimatedCounter component
 * Numbers count up when scrolled into view
 */

interface CaseStudyMetric {
  value: number;
  suffix?: string;
  label: string;
}

interface CaseStudyStatsProps {
  metrics: CaseStudyMetric[];
}

export function CaseStudyStats({ metrics }: CaseStudyStatsProps) {
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));
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
            animateCounts();
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
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out-expo easing function (from design-reference.html)
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCounts(metrics.map((metric) => Math.floor(metric.value * easeOut)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <p className="text-2xl font-bold text-[var(--primary-red)]">
            {counts[index]}
            {metric.suffix || ''}
          </p>
          <p className="text-xs text-[var(--text-grey)]">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * BenefitCard - Single benefit card with bento styling and hover effects
 * Based on design-reference.html bento-card styling
 * - Shadow: 8px base -> 12px on hover
 * - Transform: translate(-4px, -4px) on hover
 * - Icon scale 1.15 on hover (NO rotation)
 */
interface BenefitCardProps {
  index: number;
  title: string;
  description: string;
}

export function BenefitCard({ index, title, description }: BenefitCardProps) {
  return (
    <div className="group bento-card p-6 rounded-xl cursor-pointer">
      <div className="bento-icon w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-[var(--primary-red)] text-[var(--text-light)]">
        <span className="text-xl font-bold">{index + 1}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[var(--text-dark)]">
        {title}
      </h3>
      <p className="text-[var(--text-grey)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/**
 * ServiceCard - Service card with enhanced bento-style hover effects
 * Based on design-reference.html bento-card styling
 */
interface ServiceCardProps {
  service: string;
  icon: React.ReactNode;
}

export function ServiceCardEnhanced({ service, icon }: ServiceCardProps) {
  return (
    <div className="group bento-card p-6 rounded-xl text-center cursor-pointer">
      <div className="bento-icon w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[var(--red-ox-red-light)] text-[var(--primary-red)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[var(--text-dark)]">
        {service}
      </h3>
    </div>
  );
}
