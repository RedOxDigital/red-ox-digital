"use client";

import { useState, useCallback } from "react";

interface GenerateImageOptions {
  prompt?: string;
  category?: string;
  subcategory?: string;
  filename: string;
  aspectRatio?: "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
  enhanceBranding?: boolean;
}

interface GenerateImageResult {
  success: boolean;
  path?: string;
  mimeType?: string;
  size?: number;
  error?: string;
}

interface UseGeminiImageReturn {
  generateImage: (options: GenerateImageOptions) => Promise<GenerateImageResult>;
  isGenerating: boolean;
  error: string | null;
  lastGeneratedPath: string | null;
}

/**
 * React hook for generating images using Gemini Imagen 3
 *
 * @example
 * ```tsx
 * const { generateImage, isGenerating, error, lastGeneratedPath } = useGeminiImage();
 *
 * // Using predefined prompts
 * await generateImage({
 *   category: "hero",
 *   subcategory: "homepage",
 *   filename: "hero-image"
 * });
 *
 * // Using custom prompt
 * await generateImage({
 *   prompt: "A beautiful sunset over Brisbane",
 *   filename: "sunset"
 * });
 * ```
 */
export function useGeminiImage(): UseGeminiImageReturn {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastGeneratedPath, setLastGeneratedPath] = useState<string | null>(null);

  const generateImage = useCallback(
    async (options: GenerateImageOptions): Promise<GenerateImageResult> => {
      setIsGenerating(true);
      setError(null);

      try {
        const response = await fetch("/api/generate-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(options),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to generate image");
        }

        setLastGeneratedPath(result.path);
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        return {
          success: false,
          error: errorMessage,
        };
      } finally {
        setIsGenerating(false);
      }
    },
    []
  );

  return {
    generateImage,
    isGenerating,
    error,
    lastGeneratedPath,
  };
}

export default useGeminiImage;
