import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import {
  generateImage,
  getImagePrompt,
  enhancePromptWithBranding,
  IMAGE_PROMPTS,
} from "@/lib/gemini";

export const maxDuration = 60; // Allow up to 60 seconds for image generation

interface GenerateImageRequest {
  prompt?: string;
  category?: keyof typeof IMAGE_PROMPTS;
  subcategory?: string;
  filename: string;
  aspectRatio?: "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
  enhanceBranding?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateImageRequest = await request.json();

    const {
      prompt: customPrompt,
      category,
      subcategory,
      filename,
      aspectRatio = "16:9",
      enhanceBranding = true,
    } = body;

    if (!filename) {
      return NextResponse.json(
        { error: "Filename is required" },
        { status: 400 }
      );
    }

    // Determine the prompt to use
    let prompt: string;

    if (customPrompt) {
      prompt = customPrompt;
    } else if (category && subcategory) {
      try {
        prompt = getImagePrompt(category, subcategory);
      } catch {
        return NextResponse.json(
          { error: `Invalid category/subcategory: ${category}/${subcategory}` },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Either prompt or category/subcategory is required" },
        { status: 400 }
      );
    }

    // Enhance prompt with branding if requested
    if (enhanceBranding) {
      prompt = enhancePromptWithBranding(prompt);
    }

    // Generate the image
    const image = await generateImage(prompt, aspectRatio);

    // Ensure the images directory exists
    const imagesDir = path.join(process.cwd(), "public", "images");
    await mkdir(imagesDir, { recursive: true });

    // Determine file extension and full path
    const extension = image.mimeType.split("/")[1] || "jpg";
    const fullFilename = filename.includes(".")
      ? filename
      : `${filename}.${extension}`;
    const filePath = path.join(imagesDir, fullFilename);

    // Save the image
    const buffer = Buffer.from(image.base64Data, "base64");
    await writeFile(filePath, buffer);

    const publicPath = `/images/${fullFilename}`;

    return NextResponse.json({
      success: true,
      path: publicPath,
      mimeType: image.mimeType,
      size: buffer.length,
    });
  } catch (error) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate image",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to list available image prompts
export async function GET() {
  return NextResponse.json({
    availablePrompts: IMAGE_PROMPTS,
    usage: {
      customPrompt: {
        method: "POST",
        body: {
          prompt: "Your custom image prompt",
          filename: "output-filename",
          aspectRatio: "16:9",
          enhanceBranding: true,
        },
      },
      predefinedPrompt: {
        method: "POST",
        body: {
          category: "hero | about | services | blog | locations",
          subcategory: "specific image name within category",
          filename: "output-filename",
          aspectRatio: "16:9",
        },
      },
    },
  });
}
