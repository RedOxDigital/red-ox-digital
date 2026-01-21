// Location data for location pages
// Each location has zone-specific content as per the brief

export type LocationZone = "industrial" | "retail";

export interface Location {
  slug: string;
  name: string;
  zone: LocationZone;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  landmarks: string[];
  focusServices: string[];
}

// Industrial Zone locations (Brendale, Lawnton, Narangba)
const industrialLocations: Location[] = [
  {
    slug: "brendale-commercial-marketing",
    name: "Brendale",
    zone: "industrial",
    title: "Digital Marketing for Brendale Businesses",
    h1: "Digital Marketing Services in Brendale",
    description:
      "Red Ox Digital provides digital marketing and web design services for Brendale businesses. Specialising in industrial web design, marketing for tradies, and B2B lead generation in the Brendale Industrial Estate.",
    keywords: [
      "Brendale digital marketing",
      "Industrial web design",
      "Marketing for tradies",
      "B2B lead generation Brendale",
      "Brendale web design",
    ],
    landmarks: ["Brendale Industrial Estate", "Strathpine", "Lawnton"],
    focusServices: [
      "Industrial Web Design",
      "Marketing for Tradies",
      "B2B Lead Generation",
      "Google Ads for Trade Services",
    ],
  },
  {
    slug: "lawnton-commercial-marketing",
    name: "Lawnton",
    zone: "industrial",
    title: "Digital Marketing for Lawnton Trade Services",
    h1: "Digital Marketing Services in Lawnton",
    description:
      "Red Ox Digital helps Lawnton trade businesses grow with targeted digital marketing. From industrial web design to Google Ads management, we understand the unique needs of trade services in the Lawnton Pocket area.",
    keywords: [
      "Lawnton digital marketing",
      "Trade services marketing",
      "Industrial web design Lawnton",
      "Marketing for tradies",
    ],
    landmarks: ["Lawnton Pocket", "Strathpine", "Petrie"],
    focusServices: [
      "Trade Services Marketing",
      "Industrial Web Design",
      "Local SEO for Tradies",
      "Google Ads Management",
    ],
  },
  {
    slug: "narangba-digital-marketing",
    name: "Narangba",
    zone: "industrial",
    title: "Digital Marketing in Narangba",
    h1: "Digital Marketing Services in Narangba",
    description:
      "Based in Dakabin, Red Ox Digital is your local digital marketing partner for Narangba businesses. We specialise in helping industrial and trade businesses near the Narangba Innovation Precinct grow their online presence.",
    keywords: [
      "Narangba digital marketing",
      "Web design Narangba",
      "Industrial marketing",
      "Narangba Innovation Precinct",
    ],
    landmarks: ["Narangba Innovation Precinct", "Burpengary", "Deception Bay"],
    focusServices: [
      "Industrial Marketing",
      "B2B Web Design",
      "SEO for Manufacturing",
      "Lead Generation",
    ],
  },
];

// Retail Zone locations (North Lakes, Mango Hill, Griffin, etc.)
const retailLocations: Location[] = [
  {
    slug: "north-lakes-digital-marketing",
    name: "North Lakes",
    zone: "retail",
    title: "Digital Marketing in North Lakes",
    h1: "Digital Marketing Services in North Lakes",
    description:
      "Red Ox Digital helps North Lakes businesses stand out in a busy retail hub. Whether you run a boutique near Westfield, a cafe in the town centre, or a service business in the North Lakes Business Park, we help you compete with the big chains and attract local shoppers.",
    keywords: [
      "North Lakes digital marketing",
      "Web design North Lakes",
      "SEO North Lakes",
      "Small business marketing",
      "Google Maps ranking",
    ],
    landmarks: ["Westfield North Lakes", "North Lakes Business Park", "IKEA North Lakes"],
    focusServices: [
      "Small Business Web Design",
      "Local SEO",
      "Google Maps Optimisation",
      "Ecommerce Development",
    ],
  },
  {
    slug: "mango-hill-digital-marketing",
    name: "Mango Hill",
    zone: "retail",
    title: "Digital Marketing in Mango Hill",
    h1: "Digital Marketing Services in Mango Hill",
    description:
      "Red Ox Digital supports the growing Mango Hill community. With new families moving in near Mango Hill train station and the Capestone estate, local health clinics, childcare centres, and home services are thriving. We help these businesses reach residents who want to shop local.",
    keywords: [
      "Mango Hill digital marketing",
      "Web design Mango Hill",
      "Local business marketing",
      "Professional services marketing",
    ],
    landmarks: ["Mango Hill train station", "Capestone estate", "Rothwell"],
    focusServices: [
      "Local Business Marketing",
      "Professional Services Web Design",
      "Social Media Marketing",
      "Google Ads",
    ],
  },
  {
    slug: "griffin-digital-marketing",
    name: "Griffin",
    zone: "retail",
    title: "Digital Marketing in Griffin",
    h1: "Digital Marketing Services in Griffin",
    description:
      "Red Ox Digital works with Griffin businesses serving young families in this fast-growing suburb. From fitness studios near Griffin Sports Complex to home renovation services and tutoring centres, we help local operators build their presence before the competition moves in.",
    keywords: [
      "Griffin digital marketing",
      "Web design Griffin",
      "SEO Griffin",
      "Local marketing",
    ],
    landmarks: ["Griffin Sports Complex", "Griffin State School", "North Lakes"],
    focusServices: [
      "Web Design",
      "Local SEO",
      "Google Ads Management",
      "Business Photography",
    ],
  },
  {
    slug: "kallangur-digital-marketing",
    name: "Kallangur",
    zone: "retail",
    title: "Digital Marketing in Kallangur",
    h1: "Digital Marketing Services in Kallangur",
    description:
      "Red Ox Digital partners with Kallangur businesses along Anzac Avenue and beyond. This established suburb has loyal locals who support their hairdressers, mechanics, takeaway shops, and medical centres. We help you show up when neighbours search for services nearby.",
    keywords: [
      "Kallangur digital marketing",
      "Web design Kallangur",
      "SEO Kallangur",
      "Small business marketing",
    ],
    landmarks: ["Anzac Avenue shops", "Kallangur train station", "Murrumba Downs"],
    focusServices: [
      "Small Business Web Design",
      "Local SEO",
      "Google Ads",
      "Facebook Ads",
    ],
  },
  {
    slug: "murrumba-downs-digital-marketing",
    name: "Murrumba Downs",
    zone: "retail",
    title: "Digital Marketing in Murrumba Downs",
    h1: "Digital Marketing Services in Murrumba Downs",
    description:
      "Red Ox Digital serves Murrumba Downs businesses near the Gateway Motorway corridor. This quiet residential area is home to accountants, beauty therapists, pet groomers, and tradies who work from home. We help you reach the families in surrounding streets who need your services.",
    keywords: [
      "Murrumba Downs digital marketing",
      "Web design Murrumba Downs",
      "Local SEO",
      "Business marketing",
    ],
    landmarks: ["Murrumba Downs train station", "Gateway Motorway", "Dohles Rocks Road"],
    focusServices: [
      "Business Web Design",
      "Local SEO Services",
      "Google My Business Optimisation",
      "Content Marketing",
    ],
  },
  {
    slug: "petrie-digital-marketing",
    name: "Petrie",
    zone: "retail",
    title: "Digital Marketing in Petrie",
    h1: "Digital Marketing Services in Petrie",
    description:
      "Red Ox Digital helps Petrie businesses near the old town centre and university precinct. With USC Moreton Bay campus bringing students and staff to the area, cafes, print shops, and professional services have new customers to reach. We help you connect with this changing community.",
    keywords: [
      "Petrie digital marketing",
      "Web design Petrie",
      "SEO Petrie",
      "Local business marketing",
    ],
    landmarks: ["USC Moreton Bay campus", "Petrie train station", "Old Petrie Town"],
    focusServices: [
      "Local Business Web Design",
      "SEO Services",
      "Social Media Marketing",
      "Email Marketing",
    ],
  },
  {
    slug: "dakabin-digital-marketing",
    name: "Dakabin",
    zone: "retail",
    title: "Digital Marketing in Dakabin | Our Home Base",
    h1: "Digital Marketing Services in Dakabin",
    description:
      "Red Ox Digital is proudly based in Dakabin, right here where the train line meets the bush. We know the local shops at Dakabin station, the families at Dakabin State School, and the businesses that make this quiet suburb tick. As your neighbours, we are here to help you grow.",
    keywords: [
      "Dakabin digital marketing",
      "Web design Dakabin",
      "Local marketing consultant",
      "Digital marketing consultant Dakabin",
    ],
    landmarks: ["Dakabin train station", "Dakabin State School", "Petrie"],
    focusServices: [
      "Full-Service Digital Marketing",
      "Web Design & Development",
      "SEO & Local Search",
      "Google Ads & PPC",
    ],
  },
];

// All locations combined
export const LOCATIONS: Location[] = [...industrialLocations, ...retailLocations];

// Get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}

// Get all location slugs (for generateStaticParams)
export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((loc) => loc.slug);
}

// Get locations by zone
export function getLocationsByZone(zone: LocationZone): Location[] {
  return LOCATIONS.filter((loc) => loc.zone === zone);
}
