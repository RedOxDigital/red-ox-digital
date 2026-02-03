'use client';

import { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * ExpandableCard - Click to expand card with smooth animation
 * Based on design-reference.html lines 1456-1601, JS 2249-2257
 */

export interface ExpandableCardProps {
  /** Image source URL */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Card title */
  title: string;
  /** Short description text (always visible) */
  description: string;
  /** Expanded content (shown when expanded) */
  expandedContent?: ReactNode;
  /** List items for expanded content */
  listItems?: string[];
  /** Additional paragraph for expanded content */
  additionalText?: string;
  /** Button labels */
  expandLabel?: string;
  collapseLabel?: string;
  /** Additional class names */
  className?: string;
  /** Default expanded state */
  defaultExpanded?: boolean;
  /** Callback when expand state changes */
  onExpandChange?: (expanded: boolean) => void;
}

export function ExpandableCard({
  imageSrc,
  imageAlt,
  title,
  description,
  expandedContent,
  listItems,
  additionalText,
  expandLabel = 'Read More',
  collapseLabel = 'Show Less',
  className,
  defaultExpanded = false,
  onExpandChange,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onExpandChange?.(newState);
  };

  const hasExpandableContent = expandedContent || listItems || additionalText;

  return (
    <div className={cn('expandable-card', isExpanded && 'expanded', className)}>
      {/* Image */}
      <div className="expandable-card-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>

      {/* Content */}
      <div className="expandable-card-content">
        <h3 className="expandable-card-header">{title}</h3>
        <p className="expandable-card-subtext">{description}</p>

        {/* Expandable Details */}
        {hasExpandableContent && (
          <div className="expandable-card-details">
            {expandedContent}

            {!expandedContent && (
              <>
                {additionalText && <p>{additionalText}</p>}

                {listItems && listItems.length > 0 && (
                  <ul>
                    {listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        )}

        {/* Expand Button */}
        {hasExpandableContent && (
          <button className="expand-btn" onClick={toggleExpand}>
            {isExpanded ? collapseLabel : expandLabel}
            <span className="material-symbols-outlined chevron-icon">
              expand_more
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * ExpandableCardGrid - 2-column grid of expandable cards
 * Based on design-reference.html .expandable-grid
 */
export interface ExpandableCardGridProps {
  children: ReactNode;
  className?: string;
}

export function ExpandableCardGrid({
  children,
  className,
}: ExpandableCardGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-8', className)}>
      {children}
    </div>
  );
}
