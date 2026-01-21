import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Gemini model for image generation (Imagen 3)
const IMAGE_MODEL = "imagen-3.0-generate-002";

// Brand colors for consistent image generation
export const BRAND_COLORS = {
  primary: "#D92323", // Red Ox Red
  charcoal: "#222222",
  lightGrey: "#F4F4F4",
  offWhite: "#FCFCFC",
};

// Image categories with predefined prompts for consistent branding
export const IMAGE_PROMPTS = {
  hero: {
    homepage: `Professional digital marketing agency hero image. Modern office environment with Australian business aesthetic. Clean, bright workspace with computers showing analytics dashboards and marketing metrics. Red accent colors (#D92323) subtly incorporated. Professional, trustworthy, local Brisbane/Queensland feel. High quality, photorealistic, 16:9 aspect ratio.`,
  },
  about: {
    mission: `Professional Australian small business owner working with digital marketing consultant. Modern Brisbane office setting. Collaborative meeting scene with laptops and marketing materials. Warm, approachable atmosphere. High quality, photorealistic.`,
    journey: `Australian digital marketing professional at work. Home office or modern coworking space aesthetic. Person working on computer with multiple screens showing websites and analytics. Professional but relatable, small business feel. High quality, photorealistic.`,
    team: `Professional headshot-style image of Australian digital marketing consultant. Friendly, approachable expression. Clean background with subtle red (#D92323) accent. Modern, professional appearance. High quality, photorealistic portrait.`,
  },
  services: {
    webDesign: `Modern responsive website design showcase. Multiple devices (desktop, tablet, mobile) displaying beautiful websites. Clean, minimalist aesthetic with red (#D92323) accent colors. Australian business websites. High quality, photorealistic render.`,
    seo: `SEO and search engine optimization concept. Computer screen showing Google search results with top rankings highlighted. Analytics charts showing upward growth trends. Professional office setting. High quality, photorealistic.`,
    paidAds: `Digital advertising and paid media concept. Computer screens showing Facebook Ads Manager and Google Ads dashboards. Charts showing ROI and conversion metrics. Modern marketing office. High quality, photorealistic.`,
    mediaProduction: `Professional video and media production setup. Camera equipment, drone, and editing station. Australian landscape visible through window. Creative studio environment. High quality, photorealistic.`,
    drone: `Professional drone photography and videography. DJI drone hovering over Australian suburban landscape. North Brisbane aerial view concept. Clear blue sky, professional equipment. High quality, photorealistic.`,
  },
  blog: {
    seoBasics: `SEO basics educational concept. Computer screen with search engine results and SEO checklist. Notebook with keyword research notes. Clean desk setup. Educational, informative mood. High quality, photorealistic.`,
    adsVsSeo: `Comparison concept of paid advertising vs organic SEO. Split screen showing Google Ads on one side and organic search results on other. Business decision making context. High quality, photorealistic.`,
    webDesignTips: `Web design best practices concept. Designer working on wireframes and mockups. Multiple design tools visible - Figma, sketches, color palettes. Creative workspace. High quality, photorealistic.`,
    localMarketing: `Local business marketing in Australian suburb. Small business storefront with digital presence icons overlay. Community-focused, local area feel. North Brisbane aesthetic. High quality, photorealistic.`,
    socialMedia: `Social media marketing for small business. Phone and computer showing Instagram, Facebook, LinkedIn analytics. Content calendar visible. Modern marketing setup. High quality, photorealistic.`,
    contentStrategy: `Content marketing strategy planning. Whiteboard with content calendar and strategy notes. Team brainstorming session. Professional but creative environment. High quality, photorealistic.`,
  },
  locations: {
    industrial: `Australian industrial/commercial business park. Modern warehouse and office buildings in Brisbane industrial zone. Professional business environment. Blue sky, clean architecture. High quality, photorealistic.`,
    retail: `Australian suburban shopping and retail area. Modern North Brisbane suburb with cafes, shops, and local businesses. Community feel, family-friendly. High quality, photorealistic.`,
  },
};

export interface GeneratedImage {
  base64Data: string;
  mimeType: string;
}

/**
 * Generate an image using Gemini Imagen 3
 * @param prompt - The image generation prompt
 * @param aspectRatio - Aspect ratio (default: "16:9")
 * @returns Generated image data
 */
export async function generateImage(
  prompt: string,
  aspectRatio: "1:1" | "16:9" | "9:16" | "4:3" | "3:4" = "16:9"
): Promise<GeneratedImage> {
  try {
    const model = genAI.getGenerativeModel({
      model: IMAGE_MODEL,
    });

    // Generate the image
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        // @ts-expect-error - Imagen specific config
        responseModalities: ["image"],
        responseMimeType: "image/jpeg",
      },
    });

    const response = result.response;
    const candidate = response.candidates?.[0];

    if (!candidate?.content?.parts?.[0]) {
      throw new Error("No image generated");
    }

    const imagePart = candidate.content.parts[0];

    if ("inlineData" in imagePart && imagePart.inlineData) {
      return {
        base64Data: imagePart.inlineData.data,
        mimeType: imagePart.inlineData.mimeType || "image/jpeg",
      };
    }

    throw new Error("Unexpected response format");
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}

/**
 * Generate an image and save it to the public folder
 * @param prompt - The image generation prompt
 * @param filename - The filename to save as (without extension)
 * @param aspectRatio - Aspect ratio
 * @returns The public path to the saved image
 */
export async function generateAndSaveImage(
  prompt: string,
  filename: string,
  aspectRatio: "1:1" | "16:9" | "9:16" | "4:3" | "3:4" = "16:9"
): Promise<string> {
  const image = await generateImage(prompt, aspectRatio);

  // Convert base64 to buffer
  const buffer = Buffer.from(image.base64Data, "base64");

  // Determine file extension from mime type
  const extension = image.mimeType.split("/")[1] || "jpg";
  const fullFilename = `${filename}.${extension}`;

  // Return the path where the image should be saved
  // The actual saving will be done by the API route
  return `/images/${fullFilename}`;
}

/**
 * Get a predefined prompt for a specific image category
 * @param category - The category (hero, about, services, blog, locations)
 * @param subcategory - The specific image within the category
 * @returns The prompt string
 */
export function getImagePrompt(
  category: keyof typeof IMAGE_PROMPTS,
  subcategory: string
): string {
  const categoryPrompts = IMAGE_PROMPTS[category];
  if (categoryPrompts && subcategory in categoryPrompts) {
    return categoryPrompts[subcategory as keyof typeof categoryPrompts];
  }
  throw new Error(`Unknown image prompt: ${category}/${subcategory}`);
}

/**
 * Brand-enhanced prompt generator
 * Adds Red Ox Digital branding elements to any prompt
 */
export function enhancePromptWithBranding(basePrompt: string): string {
  return `${basePrompt} Brand colors: Red (#D92323) as accent, charcoal (#222222) for dark elements. Australian business context, professional and trustworthy aesthetic. Brisbane/North Brisbane area feel.`;
}
