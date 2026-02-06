// UI Components barrel export
export { Button, buttonVariants } from "./Button";
export type { ButtonProps } from "./Button";

export { Card, BentoCard, ServiceCard, TestimonialCard, CaseCard, ProcessStepCard, BlogCard } from "./Card";
export type { CardProps, BentoCardProps, ServiceCardProps, TestimonialCardProps, CaseCardProps, ProcessStepProps, BlogCardProps } from "./Card";

export { Section, SectionHeader, Grid, BentoGrid, StatsGrid, StatItem, ProcessGrid, TeamGrid, BlogGrid } from "./Section";
export type { SectionProps, SectionHeaderProps, GridProps, BentoGridProps, StatsGridProps, StatItemProps, ProcessGridProps, TeamGridProps, BlogGridProps } from "./Section";

// Design Reference Components
export { ScrollReveal, ScrollRevealGroup } from "./ScrollReveal";
export type { ScrollRevealProps, ScrollRevealGroupProps } from "./ScrollReveal";

export { AnimatedCounter, StatCounter } from "./AnimatedCounter";
export type { AnimatedCounterProps, StatCounterProps } from "./AnimatedCounter";

export { TabSystem, FeatureColumn, createTabContent } from "./TabSystem";
export type { TabItem, TabSystemProps, FeatureColumnProps, TabFeatureData } from "./TabSystem";

export { Carousel, TestimonialCarousel, BlogCarousel } from "./Carousel";
export type { CarouselSlide, CarouselProps, Testimonial, TestimonialCarouselProps, BlogCarouselProps } from "./Carousel";

export { BentoGallery, galleryLayouts, applyLayout } from "./BentoGallery";
export type { GallerySize, GalleryItem, BentoGalleryProps } from "./BentoGallery";

export { ExpandableCard, ExpandableCardGrid } from "./ExpandableCard";
export type { ExpandableCardProps, ExpandableCardGridProps } from "./ExpandableCard";

export { JotFormModal, JotFormModalProvider, useJotFormModal, CTAButton } from "./JotFormModal";
