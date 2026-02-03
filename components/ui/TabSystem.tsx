'use client';

import { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * TabSystem - Tabs with animated content panels
 * Based on design-reference.html lines 253-328, 982-1032, JS 2318-2381
 */

export interface TabItem {
  /** Unique identifier for the tab */
  id: string;
  /** Display label for the tab */
  label: string;
  /** Content to render when tab is active */
  content: ReactNode;
}

export interface TabSystemProps {
  /** Array of tab items */
  tabs: TabItem[];
  /** Default active tab id */
  defaultTab?: string;
  /** Additional class for the container */
  className?: string;
  /** Additional class for the tabs navigation */
  navClassName?: string;
  /** Additional class for the content panels */
  contentClassName?: string;
  /** Callback when tab changes */
  onTabChange?: (tabId: string) => void;
}

export function TabSystem({
  tabs,
  defaultTab,
  className,
  navClassName,
  contentClassName,
  onTabChange,
}: TabSystemProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={cn('tabs-container max-w-[1000px] mx-auto', className)}>
      {/* Tab Navigation */}
      <div className={cn('tabs-nav', navClassName)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn('tab-item', activeTab === tab.id && 'active')}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={tab.id}
          className={cn(
            'tab-panel',
            activeTab === tab.id && 'active',
            contentClassName
          )}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

/**
 * FeatureColumn - Individual feature card for tab content
 * Based on design-reference.html lines 288-327
 */
export interface FeatureColumnProps {
  /** Header label (appears in colored bar) */
  header: string;
  /** Main title */
  title: string;
  /** Description text */
  description: string;
  /** Image URL */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Additional class names */
  className?: string;
}

export function FeatureColumn({
  header,
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: FeatureColumnProps) {
  return (
    <div className={cn('feature-column', className)}>
      <div className="feature-header">{header}</div>
      <div className="feature-body">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="feature-img">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
}

/**
 * Helper to create tab content with feature columns
 */
export interface TabFeatureData {
  header: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export function createTabContent(features: TabFeatureData[]) {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureColumn
          key={index}
          header={feature.header}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt || feature.title}
        />
      ))}
    </>
  );
}
