/**
 * Image Generation Script for Red Ox Digital
 *
 * This script generates all placeholder images for the website using Gemini Imagen 3.
 *
 * Usage:
 *   npx tsx scripts/generate-images.ts
 *   npx tsx scripts/generate-images.ts --category hero
 *   npx tsx scripts/generate-images.ts --category blog --image seo-basics
 */

import { GoogleGenAI } from "@google/genai";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY not found in .env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// All images to generate with their prompts and output paths
const IMAGES_TO_GENERATE = {
  hero: {
    homepage: {
      filename: "hero-homepage.png",
      prompt: `Professional digital marketing agency hero image. Modern office environment with Australian business aesthetic. Clean, bright workspace with computers showing analytics dashboards and marketing metrics. Red accent colors subtly incorporated. Professional, trustworthy, local Brisbane Queensland feel. High quality, photorealistic.`,
    },
  },
  about: {
    mission: {
      filename: "mission.png",
      prompt: `Professional Australian small business owner working with digital marketing consultant. Modern Brisbane office setting. Collaborative meeting scene with laptops and marketing materials. Warm, approachable atmosphere. High quality, photorealistic.`,
    },
    journey: {
      filename: "journey.png",
      prompt: `Australian digital marketing professional at work. Home office or modern coworking space aesthetic. Person working on computer with multiple screens showing websites and analytics. Professional but relatable, small business feel. High quality, photorealistic.`,
    },
    team: {
      filename: "team-ryan.png",
      prompt: `Professional headshot-style image of Australian digital marketing consultant. Male, friendly, approachable expression. Clean background with subtle red accent. Modern, professional appearance. Business casual attire. High quality, photorealistic portrait.`,
    },
  },
  services: {
    webDesign: {
      filename: "services/web-design.png",
      prompt: `Modern responsive website design showcase. Multiple devices desktop tablet mobile displaying beautiful websites. Clean, minimalist aesthetic with red accent colors. Australian business websites. High quality, photorealistic render.`,
    },
    webDesignAffordable: {
      filename: "services/web-design-affordable.png",
      prompt: `Affordable website design concept for small businesses. Simple, clean website on laptop screen. Budget-friendly, professional result. Australian small business context. Modern minimalist design. High quality, photorealistic.`,
    },
    webDesignCustom: {
      filename: "services/web-design-custom.png",
      prompt: `Custom bespoke website design process. Designer creating unique website mockup on large monitor. Wireframes, color palettes, and custom graphics visible. Premium, tailored design work. High quality, photorealistic.`,
    },
    webDesignRedesign: {
      filename: "services/web-design-redesign.png",
      prompt: `Website redesign transformation concept. Before and after website comparison on split screen. Old outdated design transforming into modern, sleek website. Refresh and modernization theme. High quality, photorealistic.`,
    },
    seo: {
      filename: "services/seo.png",
      prompt: `SEO and search engine optimization concept. Computer screen showing search results with top rankings highlighted. Analytics charts showing upward growth trends. Professional office setting. High quality, photorealistic.`,
    },
    localSeo: {
      filename: "services/local-seo.png",
      prompt: `Local SEO concept. Maps showing local business listings. Business profile on screen. Local Brisbane North Brisbane area map visible. Small business storefront with 5-star reviews. High quality, photorealistic.`,
    },
    paidAds: {
      filename: "services/paid-ads.png",
      prompt: `Digital advertising and paid media concept. Computer screens showing advertising dashboards. Charts showing ROI and conversion metrics. Modern marketing office. High quality, photorealistic.`,
    },
    facebookAds: {
      filename: "services/facebook-ads.png",
      prompt: `Social media advertising concept. Social media ads manager interface on screen. Carousel ads, video ads, and lead generation campaigns visible. Social engagement metrics. High quality, photorealistic.`,
    },
    mediaProduction: {
      filename: "services/media-production.png",
      prompt: `Professional video and media production setup. Camera equipment, drone, and editing station. Australian landscape visible through window. Creative studio environment. High quality, photorealistic.`,
    },
    drone: {
      filename: "services/drone.png",
      prompt: `Professional drone photography and videography. Drone hovering over Australian suburban landscape. North Brisbane aerial view concept. Clear blue sky, professional equipment. High quality, photorealistic.`,
    },
  },
  blog: {
    seoBasics: {
      filename: "blog/seo-basics.png",
      prompt: `SEO basics educational concept. Computer screen with search engine results and SEO checklist. Notebook with keyword research notes. Clean desk setup. Educational, informative mood. High quality, photorealistic.`,
    },
    adsVsSeo: {
      filename: "blog/ads-vs-seo.png",
      prompt: `Comparison concept of paid advertising vs organic SEO. Split screen showing paid ads on one side and organic search results on other. Business decision making context. High quality, photorealistic.`,
    },
    webDesignTips: {
      filename: "blog/web-design-tips.png",
      prompt: `Web design best practices concept. Designer working on wireframes and mockups. Multiple design tools visible such as sketches and color palettes. Creative workspace. High quality, photorealistic.`,
    },
    localMarketing: {
      filename: "blog/local-marketing.png",
      prompt: `Local business marketing in Australian suburb. Small business storefront with digital presence icons overlay. Community-focused, local area feel. North Brisbane aesthetic. High quality, photorealistic.`,
    },
    socialMedia: {
      filename: "blog/social-media.png",
      prompt: `Social media marketing for small business. Phone and computer showing social media analytics. Content calendar visible. Modern marketing setup. High quality, photorealistic.`,
    },
    contentStrategy: {
      filename: "blog/content-strategy.png",
      prompt: `Content marketing strategy planning. Whiteboard with content calendar and strategy notes. Team brainstorming session. Professional but creative environment. High quality, photorealistic.`,
    },
  },
  locations: {
    industrial: {
      filename: "locations/industrial-zone.png",
      prompt: `Australian industrial commercial business park. Modern warehouse and office buildings in Brisbane industrial zone. Professional business environment. Blue sky, clean architecture. High quality, photorealistic.`,
    },
    retail: {
      filename: "locations/retail-zone.png",
      prompt: `Australian suburban shopping and retail area. Modern North Brisbane suburb with cafes, shops, and local businesses. Community feel, family-friendly. High quality, photorealistic.`,
    },
    brendale: {
      filename: "locations/brendale.png",
      prompt: `Brendale industrial area Brisbane. Modern commercial buildings and business parks. Professional industrial zone aesthetic. Australian business district. High quality, photorealistic.`,
    },
    northLakes: {
      filename: "locations/north-lakes.png",
      prompt: `North Lakes Brisbane suburban area. Shopping center and surrounding retail precinct. Modern Australian suburb with families. Community atmosphere. High quality, photorealistic.`,
    },
  },
  testimonials: {
    placeholder1: {
      filename: "testimonials/customer-1.png",
      prompt: `Professional headshot of Australian small business owner. Female, middle-aged, friendly smile. Clean neutral background. Professional but approachable. Business attire. High quality, photorealistic portrait.`,
    },
    placeholder2: {
      filename: "testimonials/customer-2.png",
      prompt: `Professional headshot of Australian tradesperson or contractor. Male, 30s-40s, confident expression. Clean neutral background. Work attire or business casual. Trustworthy appearance. High quality, photorealistic portrait.`,
    },
    placeholder3: {
      filename: "testimonials/customer-3.png",
      prompt: `Professional headshot of Australian cafe or restaurant owner. Female, 30s, warm smile. Clean neutral background. Casual professional attire. Approachable hospitality vibe. High quality, photorealistic portrait.`,
    },
  },
  icons: {
    webDesignIcon: {
      filename: "icons/web-design-icon.png",
      prompt: `Minimalist icon illustration of a computer monitor displaying a website layout. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    seoIcon: {
      filename: "icons/seo-icon.png",
      prompt: `Minimalist icon illustration of a magnifying glass over a search bar with upward trending graph. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    paidAdsIcon: {
      filename: "icons/paid-ads-icon.png",
      prompt: `Minimalist icon illustration of a megaphone or speaker with dollar sign and target. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    mediaProductionIcon: {
      filename: "icons/media-production-icon.png",
      prompt: `Minimalist icon illustration of a video camera with play button. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    droneIcon: {
      filename: "icons/drone-icon.png",
      prompt: `Minimalist icon illustration of a drone quadcopter with camera. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    localSeoIcon: {
      filename: "icons/local-seo-icon.png",
      prompt: `Minimalist icon illustration of a map pin marker with star rating. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    supportIcon: {
      filename: "icons/support-icon.png",
      prompt: `Minimalist icon illustration of a headset with speech bubble. Customer support concept. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    analyticsIcon: {
      filename: "icons/analytics-icon.png",
      prompt: `Minimalist icon illustration of a bar chart with upward arrow trend. Analytics and growth concept. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    strategyIcon: {
      filename: "icons/strategy-icon.png",
      prompt: `Minimalist icon illustration of a chess piece knight or lightbulb with gears. Strategy and planning concept. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    rocketIcon: {
      filename: "icons/rocket-icon.png",
      prompt: `Minimalist icon illustration of a rocket ship launching upward. Growth and success concept. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    checkmarkIcon: {
      filename: "icons/checkmark-icon.png",
      prompt: `Minimalist icon illustration of a checkmark in a circle or shield. Trust and quality concept. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
    phoneIcon: {
      filename: "icons/phone-icon.png",
      prompt: `Minimalist icon illustration of a smartphone with notification. Mobile and communication concept. Clean, modern design with red accent color. White background. Simple, professional iconography style. High quality.`,
    },
  },
};

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateImage(prompt: string, retries = 3): Promise<Buffer> {
  // Try Imagen 4.0 first, then fall back to Gemini models
  const modelsToTry = [
    { model: "imagen-4.0-fast-generate-001", method: "predict" as const },
    { model: "gemini-2.5-flash-image", method: "generateContent" as const },
    { model: "gemini-2.0-flash-exp-image-generation", method: "generateContent" as const },
  ];

  for (let attempt = 1; attempt <= retries; attempt++) {
    for (const { model, method } of modelsToTry) {
      try {
        if (method === "predict") {
          // Use predict method for Imagen models
          const response = await ai.models.generateImages({
            model: model,
            prompt: prompt,
            config: {
              numberOfImages: 1,
            },
          });

          if (response.generatedImages && response.generatedImages.length > 0) {
            const imageBytes = response.generatedImages[0].image?.imageBytes;
            if (imageBytes) {
              return Buffer.from(imageBytes, "base64");
            }
          }
        } else {
          // Use generateContent for Gemini models
          const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
              responseModalities: ["Text", "Image"],
            },
          });

          const candidates = response.candidates;
          if (candidates && candidates.length > 0) {
            const parts = candidates[0].content?.parts;
            if (parts) {
              for (const part of parts) {
                if (part.inlineData?.data) {
                  return Buffer.from(part.inlineData.data, "base64");
                }
              }
            }
          }
        }
      } catch (error: unknown) {
        const isRateLimitError =
          error instanceof Error &&
          (error.message.includes("429") ||
            error.message.includes("quota") ||
            error.message.includes("RESOURCE_EXHAUSTED"));

        const isNotFoundError =
          error instanceof Error && error.message.includes("404");

        // If rate limited, wait and retry with same model
        if (isRateLimitError && attempt < retries) {
          const waitTime = attempt * 15000; // 15s, 30s, 45s
          console.log(`  ⏳ Rate limited on ${model}, waiting ${waitTime / 1000}s...`);
          await sleep(waitTime);
          break; // Break inner loop to retry
        }

        // If model not found, try next model
        if (isNotFoundError) {
          console.log(`  ⚠️ Model ${model} not available, trying next...`);
          continue;
        }

        // For other errors on last model, throw
        if (modelsToTry.indexOf({ model, method }) === modelsToTry.length - 1) {
          throw error;
        }
      }
    }
  }

  throw new Error("Failed to generate image after all retries and models");
}

async function saveImage(buffer: Buffer, filename: string): Promise<void> {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const fullPath = path.join(imagesDir, filename);

  // Ensure directory exists
  await mkdir(path.dirname(fullPath), { recursive: true });

  // Save image
  await writeFile(fullPath, buffer);

  console.log(
    `  ✅ Saved: /images/${filename} (${(buffer.length / 1024).toFixed(1)} KB)`
  );
}

async function generateAllImages(
  filterCategory?: string,
  filterImage?: string
): Promise<void> {
  console.log("\n🖼️  Red Ox Digital - Gemini Imagen 3 Generator\n");
  console.log("=".repeat(50));

  let totalGenerated = 0;
  let totalFailed = 0;

  for (const [category, images] of Object.entries(IMAGES_TO_GENERATE)) {
    // Skip if filtering by category and this isn't it
    if (filterCategory && category !== filterCategory) continue;

    console.log(`\n📁 Category: ${category}`);
    console.log("-".repeat(40));

    for (const [name, config] of Object.entries(images)) {
      // Skip if filtering by image and this isn't it
      if (filterImage && name !== filterImage) continue;

      console.log(`\n  Generating: ${name}`);
      console.log(`  Prompt: ${config.prompt.substring(0, 60)}...`);

      try {
        const buffer = await generateImage(config.prompt);
        await saveImage(buffer, config.filename);
        totalGenerated++;

        // Add a small delay between requests to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(`  ❌ Failed to generate ${name}:`, error);
        totalFailed++;
      }
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log(`\n✅ Generated: ${totalGenerated} images`);
  if (totalFailed > 0) {
    console.log(`❌ Failed: ${totalFailed} images`);
  }
  console.log("\n");
}

// Parse command line arguments
const args = process.argv.slice(2);
let filterCategory: string | undefined;
let filterImage: string | undefined;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--category" && args[i + 1]) {
    filterCategory = args[i + 1];
    i++;
  } else if (args[i] === "--image" && args[i + 1]) {
    filterImage = args[i + 1];
    i++;
  }
}

// Run the generator
generateAllImages(filterCategory, filterImage).catch(console.error);
