'use client';

import { cn } from '@/lib/utils';

/**
 * BentoGallery - 12-column asymmetric image grid with hover info overlays
 * Based on design-reference.html lines 1165-1286
 */

export type GallerySize = 'g-lg' | 'g-md' | 'g-sm' | 'g-wide' | 'g-sq';

export interface GalleryItem {
  id: string;
  /** Image source URL */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Size class: g-lg (5col x 2row), g-md (4col x 2row), g-sm (3col x 2row), g-wide (4col x 1row), g-sq (3col x 1row) */
  size: GallerySize;
  /** Category label (e.g., "E-Commerce", "Branding") */
  category?: string;
  /** Title text */
  title?: string;
  /** Description text (only shown on larger items) */
  description?: string;
  /** Optional link URL */
  href?: string;
}

export interface BentoGalleryProps {
  /** Array of gallery items */
  items: GalleryItem[];
  /** Additional class names */
  className?: string;
}

export function BentoGallery({ items, className }: BentoGalleryProps) {
  return (
    <div className={cn('gallery-bento', className)}>
      {items.map((item) => (
        <GalleryItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

interface GalleryItemComponentProps {
  item: GalleryItem;
}

function GalleryItemComponent({ item }: GalleryItemComponentProps) {
  const hasInfo = item.category || item.title || item.description;
  const isLargeItem = item.size === 'g-lg' || item.size === 'g-md';

  const content = (
    <>
      <img src={item.imageSrc} alt={item.imageAlt} />
      {hasInfo && (
        <div className="gallery-info">
          {item.category && (
            <span className="gallery-info-category">{item.category}</span>
          )}
          {item.title && (
            <span className="gallery-info-title">{item.title}</span>
          )}
          {item.description && isLargeItem && (
            <span className="gallery-info-desc">{item.description}</span>
          )}
        </div>
      )}
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} className={cn('gallery-item', item.size)}>
        {content}
      </a>
    );
  }

  return <div className={cn('gallery-item', item.size)}>{content}</div>;
}

/**
 * Preset gallery layouts based on design-reference.html
 */
export const galleryLayouts = {
  /** Standard 3-row layout from design-reference */
  standard: [
    { size: 'g-lg' as GallerySize },
    { size: 'g-sm' as GallerySize },
    { size: 'g-md' as GallerySize },
    { size: 'g-wide' as GallerySize },
    { size: 'g-sq' as GallerySize },
    { size: 'g-sq' as GallerySize },
    { size: 'g-md' as GallerySize },
    { size: 'g-sm' as GallerySize },
    { size: 'g-lg' as GallerySize },
  ],
  /** Compact 2-row layout */
  compact: [
    { size: 'g-md' as GallerySize },
    { size: 'g-md' as GallerySize },
    { size: 'g-md' as GallerySize },
    { size: 'g-sm' as GallerySize },
    { size: 'g-sm' as GallerySize },
    { size: 'g-sm' as GallerySize },
    { size: 'g-sm' as GallerySize },
  ],
  /** Wide items only */
  wide: [
    { size: 'g-lg' as GallerySize },
    { size: 'g-lg' as GallerySize },
    { size: 'g-wide' as GallerySize },
    { size: 'g-wide' as GallerySize },
    { size: 'g-wide' as GallerySize },
  ],
};

/**
 * Helper function to apply a layout to gallery data
 */
export function applyLayout(
  data: Omit<GalleryItem, 'size'>[],
  layout: { size: GallerySize }[]
): GalleryItem[] {
  return data.map((item, index) => ({
    ...item,
    size: layout[index % layout.length].size,
  }));
}
