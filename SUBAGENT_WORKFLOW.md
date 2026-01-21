# Red Ox Digital Website Build: Subagent Workflow Documentation

## Project Overview
Built a high-conversion, SEO-optimised website for Red Ox Digital, a digital marketing consultancy based in Dakabin, North Brisbane. Deployed on Vercel with Next.js 16 App Router.

**Final Build:** 28 statically generated pages

---

## Technical Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 16+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display + Open Sans (next/font) |
| Hosting | Vercel (Sydney region) |
| Rendering | Static Site Generation (SSG) |

---

## Subagent Structure (13 Agents Defined)

### Agent 0: NEXT.JS/VERCEL BUILD AGENT (Lead Developer)
**Focus:** Core application architecture and Vercel deployment

**Tasks Completed:**
- Created Next.js 14 project with App Router
- Configured TypeScript and Tailwind CSS
- Set up `next.config.ts` with image optimisation and caching headers
- Created `vercel.json` for Sydney region deployment
- Configured `next/font` for zero-CLS typography
- Built project folder structure

**Files Created:**
- `next.config.ts`
- `vercel.json`
- `app/layout.tsx`
- `app/globals.css`

---

### Agent 1: COPYWRITER AGENT
**Focus:** Content creation following brand voice and SEO requirements

**Guidelines Applied:**
- Australian English (organise, optimise, colour)
- Year 7 reading level
- No em dashes
- No jargon
- Benefit-led headers
- ROI-focused messaging

**Content Created:**
- Homepage copy with H1: "Digital Marketing Consultant in Dakabin & North Brisbane"
- All service page copy with required key phrases
- Location page copy differentiated by zone (Industrial vs Retail)
- About page targeting "Freelance Digital Marketer"
- FAQ content for objection handling

---

### Agent 2: MOBILE UI AGENT
**Focus:** Mobile-first responsive design (375px breakpoint)

**Components Built:**
- `MobileCTA.tsx` - Sticky "Call Now" / "Get Quote" footer bar
- Mobile hamburger menu with full-screen overlay
- Touch-friendly form designs (44x44px minimum targets)
- Accordion patterns for information density

---

### Agent 3: DESKTOP UI AGENT
**Focus:** Cinematic desktop experience (1440px breakpoint)

**Components Built:**
- `Button.tsx` - Primary, secondary, outline, ghost variants
- `Card.tsx` - Card, ServiceCard, TestimonialCard variants
- `Section.tsx` - Section, SectionHeader, Grid components
- `Header.tsx` - Horizontal navigation with dropdowns
- `Footer.tsx` - Multi-column footer with service areas

**Brand Colours Implemented:**
- Red Ox Red: #D92323
- Dark Charcoal: #222222
- Light Grey: #F4F4F4
- Off-White: #FCFCFC
- Medium Grey: #777777

---

### Agent 4: TABLET UI AGENT
**Focus:** Tablet breakpoint bridging (768px)

**Implementation:**
- Responsive grid transitions (3-col → 2-col → 1-col)
- Navigation adaptation for touch + larger screen
- Content reordering at breakpoints

---

### Agent 5: SEO TECHNICAL AGENT
**Focus:** On-page SEO and technical optimisation

**Tasks Completed:**
- Proper heading hierarchy (single H1 per page)
- Title tags (<60 characters)
- Meta descriptions (<155 characters)
- Canonical tags on all pages
- Internal linking structure ("Spiderweb")
- XML sitemap generation (automatic via Next.js)

**Files Created:**
- Metadata exports in every page file

---

### Agent 6: LOCAL SEO AGENT
**Focus:** Google Business Profile integration and local search

**Schema Implemented:**
- LocalBusiness/ProfessionalService schema
- Service schema on service pages
- FAQ schema on pages with FAQs
- Breadcrumb schema for navigation
- areaServed property with all 10 suburbs

**Files Created:**
- `lib/schema.ts` - Schema generation utilities
- `lib/locations.ts` - Location data with zone differentiation

**GMB Integration:**
- Google Maps iframe embedded
- "View our Google Profile" link in footer
- sameAs linking to: `https://share.google/DSmj00oU7t0Db7d1g`

---

### Agent 7: PERFORMANCE AGENT (Vercel/Next.js Specialist)
**Focus:** Core Web Vitals excellence

**Optimisations Applied:**
- Static Site Generation (SSG) for all 28 pages
- `next/image` configured for WebP/AVIF auto-conversion
- `next/font` for zero-CLS typography
- Lazy loading on iframes
- Caching headers (1 year for static assets)

**Targets:**
| Metric | Mobile | Desktop |
|--------|--------|---------|
| LCP | < 2.5s | < 1.5s |
| INP | < 200ms | < 100ms |
| CLS | < 0.1 | < 0.1 |

---

### Agent 8: ACCESSIBILITY AGENT
**Focus:** WCAG compliance and inclusive design

**Implementation:**
- Skip to main content link
- Semantic HTML throughout
- ARIA labels on interactive elements
- Focus states on all interactive elements
- 44x44px minimum touch targets
- Colour contrast verification

---

### Agent 9: CONTENT STRATEGY AGENT
**Focus:** Blog planning and topical authority

**Blog Structure Created:**
- Blog index page with category filter
- 6 placeholder blog posts across topic clusters:
  - SEO cluster
  - Google Ads cluster
  - Web Design cluster
  - Content Marketing cluster
- Newsletter signup form

---

### Agent 10: CONVERSION RATE AGENT
**Focus:** CTA optimisation and sales funnel

**Implementation:**
- "5-Second Rule" homepage layout
- Trust Bar with client logos
- Sticky CTA on mobile
- FAQ sections for objection handling
- Clear conversion paths:
  - Homepage → Service → Contact
  - Location → Service → Contact
  - Blog → Service → Contact

---

### Agent 11: IMAGE GENERATION AGENT (Gemini)
**Focus:** AI-generated imagery

**API Configuration:**
- Model: Gemini Imagen 3
- API Key: Provided

**Placeholder Structure:**
- Hero image placeholders
- Service card images
- Location-specific imagery (zone-appropriate)
- Team/about imagery

---

### Agent 12: QA/VALIDATION AGENT
**Focus:** Pre-launch checklist verification

**Verified:**
- ✅ No duplicate H1 tags
- ✅ All pages build successfully
- ✅ 28 static pages generated
- ✅ TypeScript compilation passes
- ✅ Mobile sticky CTA functional
- ✅ Unique content per location zone

---

## Pages Built (28 Total)

### Core Pages
| Page | URL |
|------|-----|
| Homepage | `/` |
| About | `/about` |
| Contact | `/contact` |
| Blog | `/blog` |
| Services Index | `/services` |

### Service Hub Pages (10)
| Service | Parent URL | Child Pages |
|---------|------------|-------------|
| Web Design | `/services/web-design` | affordable, custom, redesign |
| SEO | `/services/seo` | local-seo |
| Paid Ads | `/services/paid-ads` | facebook-ads |
| Media Production | `/services/media-production` | drone |

### Location Pages (10)
| Location | Zone | URL |
|----------|------|-----|
| North Lakes | Retail | `/locations/north-lakes-digital-marketing` |
| Brendale | Industrial | `/locations/brendale-commercial-marketing` |
| Lawnton | Industrial | `/locations/lawnton-commercial-marketing` |
| Narangba | Industrial | `/locations/narangba-digital-marketing` |
| Kallangur | Retail | `/locations/kallangur-digital-marketing` |
| Mango Hill | Retail | `/locations/mango-hill-digital-marketing` |
| Griffin | Retail | `/locations/griffin-digital-marketing` |
| Murrumba Downs | Retail | `/locations/murrumba-downs-digital-marketing` |
| Petrie | Retail | `/locations/petrie-digital-marketing` |
| Dakabin | Retail | `/locations/dakabin-digital-marketing` |

---

## Workflow Phases Executed

### Phase 1: Strategy & Planning
- Content Strategy Agent: Topic clusters defined
- Conversion Rate Agent: User flows mapped
- Next.js/Vercel Build Agent: Project structure created

### Phase 2: Content Creation
- Copywriter Agent: All page content written
- SEO Technical Agent: Meta tags and linking defined

### Phase 3: Design & Assets
- Desktop UI Agent: Component library built
- Mobile UI Agent: Mobile components created
- Tablet UI Agent: Breakpoints bridged
- Image Generation Agent: Placeholder structure ready
- Accessibility Agent: Designs reviewed

### Phase 4: Technical Implementation
- Next.js/Vercel Build Agent: All pages implemented
- Local SEO Agent: Schema markup integrated
- Performance Agent: Optimisations applied
- Conversion Rate Agent: Tracking structure ready

### Phase 5: Quality Assurance & Deployment
- Performance Agent: Build verified
- Accessibility Agent: Compliance checked
- QA/Validation Agent: Checklist completed
- Next.js/Vercel Build Agent: Ready for deployment

---

## Key Constraints Applied

### Content
- ✅ Australian English only
- ✅ No em dashes
- ✅ Year 7 reading level
- ✅ No street address (SAB compliance)
- ✅ Unique copy per location zone

### Performance
- ✅ Static Site Generation (SSG)
- ✅ next/image with WebP/AVIF
- ✅ next/font for zero CLS
- ✅ 44x44px minimum touch targets

### SEO
- ✅ Single H1 per page
- ✅ JSON-LD schema on all pages
- ✅ Internal linking structure
- ✅ Canonical URLs

---

## Deployment

```bash
cd red-ox-digital
npx vercel
```

Or connect GitHub repo to Vercel for automatic deployments.

---

## File Structure

```
red-ox-digital/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Brand colours & typography
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services index
│   │   ├── web-design/
│   │   ├── seo/
│   │   ├── paid-ads/
│   │   └── media-production/
│   └── locations/
│       └── [location]/page.tsx # Dynamic location pages
├── components/
│   ├── ui/                     # Button, Card, Section
│   ├── layout/                 # Header, Footer, MobileCTA
│   ├── sections/
│   └── forms/
├── lib/
│   ├── schema.ts               # JSON-LD generators
│   ├── locations.ts            # Location data
│   └── utils.ts                # Utility functions
├── public/
│   └── images/
├── next.config.ts
├── vercel.json
├── tailwind.config.ts
└── package.json
```

---

## Next Steps

1. **Add real content** - Replace placeholder text and images
2. **Configure domain** - Point redoxdigital.com.au to Vercel
3. **Add Google Search Console** - Verify ownership
4. **Set up analytics** - Vercel Analytics + GA4
5. **Generate images** - Use Gemini API with provided key
6. **Add real testimonials** - Replace placeholder reviews
7. **Test Core Web Vitals** - Run Lighthouse audit post-deployment
