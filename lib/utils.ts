// Utility functions

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine class names with Tailwind class conflict resolution
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format phone number for display
export function formatPhone(phone: string): string {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, "");

  // Format as Australian mobile: 0400 000 000
  if (cleaned.length === 10 && cleaned.startsWith("04")) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  // Format as Australian landline: (07) 0000 0000
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`;
  }

  return phone;
}

// Generate slug from string
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

// Truncate text with ellipsis
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

// Check if we're on the server
export const isServer = typeof window === "undefined";

// Check if we're on the client
export const isClient = !isServer;

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format date for display (Australian format)
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Get absolute URL
export function absoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://redoxdigital.com.au";
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
