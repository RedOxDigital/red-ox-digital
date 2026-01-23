import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Section } from "@/components/ui";

// Blog posts data with full content
const blogPostsData: Record<string, BlogPost> = {
  "small-business-rank-higher-google-2026": {
    title: "5 Ways Small Businesses Can Rank Higher on Google in 2026",
    excerpt:
      "Want more customers finding you online? These five simple SEO tips will help your local business climb the Google rankings without spending a fortune.",
    category: "SEO",
    date: "20 January 2026",
    readTime: "6 min read",
    image: "/images/blog/seo-ranking-tips.jpg",
    content: [
      {
        type: "paragraph",
        text: "If you run a small business in North Brisbane, you have probably heard that you need to be on Google. But between running your day to day operations, managing staff, and keeping customers happy, who has time to figure out all this SEO stuff?",
      },
      {
        type: "paragraph",
        text: "The good news is that ranking higher on Google does not have to be complicated or expensive. In fact, some of the most effective strategies cost nothing but a bit of your time. Here are five practical ways to help your local business get found by more customers in 2026.",
      },
      {
        type: "heading",
        text: "1. Claim and Optimise Your Google Business Profile",
      },
      {
        type: "paragraph",
        text: "This is the single most important thing you can do for local SEO, and it is completely free. Your Google Business Profile (formerly Google My Business) is what shows up when someone searches for businesses like yours on Google Maps or in the local pack results.",
      },
      {
        type: "paragraph",
        text: "If you have not claimed your profile yet, head to business.google.com and do it today. If you already have one, make sure it is fully filled out. That means adding your business hours, phone number, website, services, and plenty of photos. Google loves profiles that are complete, and so do potential customers.",
      },
      {
        type: "paragraph",
        text: "Here in North Brisbane, we see businesses in Dakabin, Kallangur, North Lakes, and surrounding suburbs missing out on local customers simply because their profile is incomplete or outdated. Do not let that be you.",
      },
      {
        type: "list",
        items: [
          "Add at least 10 high quality photos of your business, team, and work",
          "Write a detailed business description using words your customers would search for",
          "Keep your hours updated, especially around public holidays",
          "Add all your services or products with descriptions",
          "Post updates at least once a month to show Google your profile is active",
        ],
      },
      {
        type: "heading",
        text: "2. Use Local Keywords on Your Website",
      },
      {
        type: "paragraph",
        text: "When people search for a business, they usually include their location. Think about it. You probably search for things like plumber North Lakes or cafe near Petrie rather than just plumber or cafe.",
      },
      {
        type: "paragraph",
        text: "Your website needs to include these local keywords naturally throughout your pages. This tells Google where you are based and who you serve. But here is the key word: naturally. Do not stuff your pages with location names. Write like you are talking to a customer, and mention your service area where it makes sense.",
      },
      {
        type: "paragraph",
        text: "For example, instead of writing We offer plumbing services, try We offer plumbing services across North Brisbane, including Dakabin, Kallangur, Murrumba Downs, and North Lakes. It reads well, and it helps Google understand your coverage area.",
      },
      {
        type: "heading",
        text: "3. Make Your Website Mobile Friendly and Fast",
      },
      {
        type: "paragraph",
        text: "More than half of all Google searches now happen on mobile phones. If your website is slow to load or hard to use on a phone, you are losing customers before they even get a chance to see what you offer.",
      },
      {
        type: "paragraph",
        text: "Google has made it clear that mobile experience and page speed are ranking factors. That means a slow, clunky website will struggle to rank well, no matter how good your other SEO efforts are.",
      },
      {
        type: "paragraph",
        text: "Here is a quick test. Pull out your phone and visit your own website. Does it load in under three seconds? Can you easily tap buttons and read text without zooming? Is your phone number clickable so people can call you directly? If you answered no to any of these, your website needs some attention.",
      },
      {
        type: "heading",
        text: "4. Get More Google Reviews (and Respond to Them)",
      },
      {
        type: "paragraph",
        text: "Reviews are gold for local SEO. When someone searches for a business, Google shows star ratings right in the search results. A business with fifty five star reviews is going to get more clicks than one with three reviews, every single time.",
      },
      {
        type: "paragraph",
        text: "But here is what many business owners miss. It is not just about having reviews. Google also looks at how recent they are and whether you respond to them. A business that regularly gets new reviews and takes the time to reply looks active and engaged.",
      },
      {
        type: "paragraph",
        text: "The best way to get more reviews is simply to ask. After you complete a job or sale, send a follow up message thanking the customer and including a direct link to your Google review page. Make it as easy as possible for them.",
      },
      {
        type: "heading",
        text: "5. Create Helpful Content That Answers Real Questions",
      },
      {
        type: "paragraph",
        text: "Google wants to show people the most helpful, relevant results for their search. One of the best ways to prove you are helpful is to create content that answers the questions your customers are actually asking.",
      },
      {
        type: "paragraph",
        text: "Think about the questions you get asked all the time. How much does a service cost? How long does it take? What should I look for when choosing a provider? These are the exact questions people are typing into Google. If your website answers them, you have a chance to show up in those results.",
      },
      {
        type: "heading",
        text: "Start With One Thing",
      },
      {
        type: "paragraph",
        text: "If this list feels overwhelming, do not try to do everything at once. Pick one thing and do it properly. For most businesses, starting with your Google Business Profile gives you the biggest return for your effort. Once that is sorted, move on to the next item.",
      },
      {
        type: "paragraph",
        text: "SEO is a long game. The businesses that succeed are the ones that make small, consistent improvements over time rather than looking for quick fixes.",
      },
      {
        type: "heading",
        text: "Need a Hand Getting Started?",
      },
      {
        type: "paragraph",
        text: "If you would rather focus on running your business and leave the SEO to someone else, we are here to help. At Red Ox Digital, we specialise in helping North Brisbane small businesses get found online. Based right here in Dakabin, we understand the local market and what it takes to stand out.",
      },
      {
        type: "paragraph",
        text: "Book a free discovery call today and let us talk about your goals. No pressure, no jargon. Just honest advice about what will work for your business.",
      },
    ],
  },
  "website-load-under-3-seconds": {
    title: "Why Your Website Needs to Load in Under 3 Seconds",
    excerpt:
      "A slow website is costing you money. Find out how page speed affects your sales and what you can do to speed things up.",
    category: "Web Design",
    date: "15 January 2026",
    readTime: "5 min read",
    image: "/images/blog/page-speed.jpg",
    content: [
      {
        type: "paragraph",
        text: "Picture this: a potential customer searches for a service you offer, clicks on your website, and then... nothing. They are staring at a blank screen, waiting for something to happen. After a few seconds of frustration, they hit the back button and click on your competitor instead.",
      },
      {
        type: "paragraph",
        text: "That scenario plays out thousands of times every day across North Brisbane businesses. And the worst part? Most business owners have no idea it is happening.",
      },
      {
        type: "heading",
        text: "The Numbers Do Not Lie",
      },
      {
        type: "paragraph",
        text: "Here is the uncomfortable truth about page speed: 53% of mobile users will abandon a website that takes longer than 3 seconds to load. Let that sink in. More than half of your potential customers could be leaving before they even see what you have to offer.",
      },
      {
        type: "paragraph",
        text: "But it gets worse. For every additional second your website takes to load, your conversion rate drops by an average of 4.4%. If your website takes 5 seconds to load instead of 2, you could be losing nearly 15% of your potential sales.",
      },
      {
        type: "heading",
        text: "Google Cares About Speed (And So Should You)",
      },
      {
        type: "paragraph",
        text: "Since 2021, Google has used page speed as a ranking factor for search results. They call them Core Web Vitals, and they measure things like how fast your page loads, how quickly it becomes interactive, and whether elements jump around while loading.",
      },
      {
        type: "paragraph",
        text: "In plain English: if your website is slow, Google will push you down in search results. And if your competitor in Brendale or Strathpine has a faster website with similar content, they will likely rank above you.",
      },
      {
        type: "heading",
        text: "Mobile Users Are Especially Impatient",
      },
      {
        type: "paragraph",
        text: "Here in Australia, over 60% of web traffic comes from mobile devices. People are searching for businesses while sitting in traffic on Gympie Road, waiting at the train station in Petrie, or grabbing a coffee in Kallangur.",
      },
      {
        type: "paragraph",
        text: "Mobile connections can be inconsistent, which makes page speed even more critical. A website that loads fine on your office computer might crawl on someone's phone using mobile data.",
      },
      {
        type: "heading",
        text: "What Makes Websites Slow?",
      },
      {
        type: "paragraph",
        text: "Before you can fix a slow website, you need to understand what is slowing it down. Here are the most common culprits:",
      },
      {
        type: "list",
        items: [
          "Oversized images: That beautiful photo of your shopfront might be 5MB when it only needs to be 200KB.",
          "Cheap hosting: Budget hosting services cram thousands of websites onto the same server.",
          "Too many plugins: Every plugin on your website adds extra code that needs to load.",
          "Unoptimised code: Bloated themes and unnecessary scripts can add seconds to your load time.",
          "No caching: Without proper caching, your server has to rebuild the entire page from scratch every time.",
        ],
      },
      {
        type: "heading",
        text: "How to Speed Up Your Website",
      },
      {
        type: "paragraph",
        text: "The good news is that most speed issues can be fixed. Use tools like TinyPNG to compress images before uploading them. Consider upgrading to a managed hosting provider. Remove plugins you are not using. Enable caching on your website.",
      },
      {
        type: "paragraph",
        text: "Test your site speed at Google PageSpeed Insights. It is free and will give you a score out of 100 with specific recommendations. Aim for at least 70 on mobile.",
      },
      {
        type: "heading",
        text: "When Is It Time for a New Website?",
      },
      {
        type: "paragraph",
        text: "Sometimes, no amount of optimisation can save an old website. If your site was built more than five years ago, runs on an outdated platform, or was built without performance in mind, you might be better off starting fresh.",
      },
      {
        type: "paragraph",
        text: "A modern website built with performance in mind can load in under a second. Compare that to older sites that struggle to load in five or six seconds, and the business impact becomes clear.",
      },
      {
        type: "heading",
        text: "Ready to Speed Things Up?",
      },
      {
        type: "paragraph",
        text: "At Red Ox Digital, we build websites that are fast by default. Every site we create is optimised for speed, mobile-friendly, and built to help you rank on Google.",
      },
      {
        type: "paragraph",
        text: "If your current website is letting you down, let us chat about what a new site could do for your business. We are based right here in Dakabin and work with businesses across North Brisbane. Book a free discovery call and we will give you honest advice on the best path forward.",
      },
    ],
  },
  "google-maps-north-brisbane-businesses": {
    title: "Google Maps: The Free Tool Most North Brisbane Businesses Ignore",
    excerpt:
      "Your Google Business Profile could be bringing in new customers right now. Here is how to set it up properly and start getting noticed.",
    category: "Local SEO",
    date: "10 January 2026",
    readTime: "7 min read",
    image: "/images/blog/google-business-profile.jpg",
    content: [
      {
        type: "paragraph",
        text: "If you run a business in North Brisbane, there is a good chance you are missing out on free leads every single day. Not from expensive ads or complicated marketing funnels, but from something sitting right under your nose: Google Maps.",
      },
      {
        type: "paragraph",
        text: "When someone in North Lakes searches for a plumber, or a Brendale business owner looks for a local accountant, or a family in Kallangur needs a hairdresser, most of them head straight to Google. And what shows up first? That map with the three business listings underneath it.",
      },
      {
        type: "paragraph",
        text: "That prime real estate is controlled by your Google Business Profile. And here is the thing: setting it up properly costs you nothing.",
      },
      {
        type: "heading",
        text: "Step 1: Claim Your Google Business Profile",
      },
      {
        type: "paragraph",
        text: "First things first. If you have not claimed your business on Google yet, that needs to happen today. Head to business.google.com and search for your business name. If it already exists, you will need to verify that you are the actual owner.",
      },
      {
        type: "paragraph",
        text: "We have seen businesses around Strathpine, Petrie, and Murrumba Downs that have unclaimed profiles with wrong phone numbers or old addresses. That is potential customers calling the wrong number or driving to the wrong location.",
      },
      {
        type: "heading",
        text: "Step 2: Fill In Every Single Field",
      },
      {
        type: "paragraph",
        text: "Once you are in, Google gives you a bunch of fields to complete. Here is where most people go wrong: they fill in the basics and call it done. But Google rewards profiles that are thorough.",
      },
      {
        type: "list",
        items: [
          "Your exact business name (no keyword stuffing, just your real name)",
          "Primary and secondary business categories",
          "Your full service area if you travel to customers",
          "Opening hours, including special hours for public holidays",
          "Phone number that goes to a real person",
          "Your website URL",
          "A detailed business description",
          "Services or products you offer with descriptions",
        ],
      },
      {
        type: "heading",
        text: "Step 3: Add Photos That Actually Show Your Business",
      },
      {
        type: "paragraph",
        text: "Businesses with photos get significantly more clicks and direction requests. Add photos of your shopfront, your team at work, your products or examples of your work, and the inside of your premises.",
      },
      {
        type: "paragraph",
        text: "Do not use stock photos. People can tell, and it looks impersonal. A quick photo from your phone of your actual team is worth more than a polished stock image.",
      },
      {
        type: "heading",
        text: "Step 4: Respond to Every Review",
      },
      {
        type: "paragraph",
        text: "Reviews build trust with potential customers and send positive signals to Google. But here is what separates good profiles from great ones: responding to reviews. Thank positive reviewers by name and address concerns professionally in negative reviews.",
      },
      {
        type: "paragraph",
        text: "The businesses across North Brisbane who respond to every review consistently outperform those who ignore them.",
      },
      {
        type: "heading",
        text: "Step 5: Post Updates Like It Is Social Media",
      },
      {
        type: "paragraph",
        text: "Google Posts let you publish updates that show up when people find your business. Share special offers, new services, recent projects, or tips related to your industry. Posts expire after seven days, so make it a habit to post something fresh each week.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Your Google Business Profile is free. It takes a few hours to set up properly, and maybe 30 minutes a week to maintain. In return, you get visibility in front of people actively searching for what you offer.",
      },
      {
        type: "paragraph",
        text: "If you are a business in Dakabin, North Lakes, Brendale, Kallangur, or anywhere in the region, there is no reason not to have a fully optimised profile. Need help getting started? We specialise in local SEO for North Brisbane businesses. Give us a call or book a free discovery call to chat about your business.",
      },
    ],
  },
  "local-seo-guide": {
    title: "Local SEO: How to Dominate Your Suburb on Google",
    excerpt:
      "Want to be the go to business in your area? Here is how to set up your Google Business Profile and rank for local searches.",
    category: "SEO",
    date: "December 2025",
    readTime: "6 min read",
    image: "/images/blog/local-seo.jpg",
    content: [
      {
        type: "paragraph",
        text: "If you run a local business in North Brisbane, you have probably noticed something. When someone searches for a service in their area, certain businesses always seem to show up first. That is not luck. Those businesses have figured out local SEO.",
      },
      {
        type: "paragraph",
        text: "Local SEO is simply the process of making your business visible to people searching in your specific area. Whether you are a plumber in Dakabin, a cafe in Petrie, or a physiotherapist in Mango Hill, the same principles apply.",
      },
      {
        type: "heading",
        text: "Start With Local Keyword Research",
      },
      {
        type: "paragraph",
        text: "Before you do anything else, you need to understand what your potential customers are actually typing into Google. Think about the services you offer and combine them with your location.",
      },
      {
        type: "paragraph",
        text: "If you are a mechanic in Griffin, your target keywords might include things like mechanic Griffin, car service Griffin QLD, or brake repairs near Griffin. The pattern is simple: your service plus your suburb.",
      },
      {
        type: "heading",
        text: "Create Location Specific Pages",
      },
      {
        type: "paragraph",
        text: "Once you know your target keywords, you need pages on your website that target them. A location page is a dedicated page for each suburb you serve.",
      },
      {
        type: "paragraph",
        text: "But do not just copy and paste the same content and swap out the suburb names. Each page should include genuine, helpful information specific to that area. Mention local landmarks, include work you have done in that suburb, and add testimonials from customers in that area.",
      },
      {
        type: "heading",
        text: "Get Your NAP Consistent Everywhere",
      },
      {
        type: "paragraph",
        text: "NAP stands for Name, Address, and Phone number. Google uses your NAP information to verify that your business is legitimate. If your business name is different across platforms, you are confusing Google.",
      },
      {
        type: "paragraph",
        text: "Go through every place your business is listed online and make sure the details are identical. That means the exact same business name, address format, and phone number everywhere.",
      },
      {
        type: "heading",
        text: "Build Local Citations",
      },
      {
        type: "paragraph",
        text: "A citation is a mention of your business on another website. For North Brisbane businesses, important citations include:",
      },
      {
        type: "list",
        items: [
          "Google Business Profile (the most important one)",
          "Australian directories like Yellow Pages, True Local, and Yelp Australia",
          "Industry specific directories like Hipages for tradies",
          "Local directories and business associations",
        ],
      },
      {
        type: "heading",
        text: "Add Local Business Schema Markup",
      },
      {
        type: "paragraph",
        text: "Schema markup is code you add to your website that helps Google understand what your business is about. For local businesses, LocalBusiness schema tells Google your name, address, phone number, opening hours, and service area.",
      },
      {
        type: "paragraph",
        text: "Most modern website platforms have plugins that can add this for you. On WordPress, plugins like Rank Math or Yoast SEO can handle this.",
      },
      {
        type: "heading",
        text: "Build Local Links",
      },
      {
        type: "paragraph",
        text: "Links from other local websites carry extra weight for local SEO. Sponsor local sports teams or events, partner with complementary local businesses, get featured in local media, and join local business associations.",
      },
      {
        type: "heading",
        text: "Need Help With Your Local SEO?",
      },
      {
        type: "paragraph",
        text: "If you would rather focus on what you do best and leave the local SEO to someone else, we are here to help. Red Ox Digital is based right here in Dakabin, and we specialise in helping North Brisbane businesses get found online.",
      },
      {
        type: "paragraph",
        text: "Book a free discovery call and let us talk about your business goals. No pressure, no jargon, just honest advice about what will actually move the needle for your business.",
      },
    ],
  },
  "google-ads-mistakes": {
    title: "Why Most Small Businesses Waste Money on Google Ads",
    excerpt:
      "Google Ads can bring great results, but most small businesses set them up wrong. Here is how to avoid the common mistakes.",
    category: "Google Ads",
    date: "November 2025",
    readTime: "5 min read",
    image: "/images/blog/google-ads.jpg",
    content: [
      {
        type: "paragraph",
        text: "Let me be straight with you. Google Ads works. When set up properly, it can bring a steady stream of customers to your business almost overnight. The problem is that most small businesses get it wrong.",
      },
      {
        type: "paragraph",
        text: "We see this all the time with North Brisbane businesses who come to us after trying to run their own campaigns. They have spent hundreds or even thousands of dollars with little to show for it.",
      },
      {
        type: "heading",
        text: "1. Using Broad Match Keywords",
      },
      {
        type: "paragraph",
        text: "This is the number one way businesses throw money away. If you sell landscaping services in Kallangur and you use the broad match keyword landscaping, your ad might show up for searches like landscaping jobs or DIY landscaping tips. These people are not looking to hire you.",
      },
      {
        type: "paragraph",
        text: "Use phrase match or exact match keywords instead. You will get fewer clicks, but the clicks you do get will be from people actually looking to buy.",
      },
      {
        type: "heading",
        text: "2. Not Using Negative Keywords",
      },
      {
        type: "paragraph",
        text: "Even with tighter matching, you need negative keywords. These tell Google what searches you do not want to appear for. A plumber in North Lakes should add negatives like free, jobs, salary, DIY, and how to.",
      },
      {
        type: "paragraph",
        text: "Check your Search Terms report regularly to see what people are actually searching when they click your ads. You will find plenty more to add.",
      },
      {
        type: "heading",
        text: "3. Sending Traffic to Poor Landing Pages",
      },
      {
        type: "paragraph",
        text: "Too many businesses send all their Google Ads traffic to their homepage. If someone searches for bathroom renovations Dakabin, they should land on a page specifically about bathroom renovations, not your homepage where they have to hunt around.",
      },
      {
        type: "paragraph",
        text: "A good landing page has a clear headline that matches the ad, explains your service, shows social proof, and makes it dead simple to contact you.",
      },
      {
        type: "heading",
        text: "4. Ignoring Quality Score",
      },
      {
        type: "paragraph",
        text: "Google gives each keyword a Quality Score from 1 to 10. This affects how much you pay per click and how often your ads show up. A higher score means lower costs and better ad positions.",
      },
      {
        type: "list",
        items: [
          "Write ads that include your keywords naturally",
          "Make sure your landing page content matches what the ad promises",
          "Organise campaigns into tightly themed ad groups",
          "Test different ad variations to improve click-through rates",
        ],
      },
      {
        type: "heading",
        text: "5. Not Tracking Conversions",
      },
      {
        type: "paragraph",
        text: "If you are not tracking conversions, you have no idea which keywords or ads are actually bringing in customers. You might be spending most of your budget on keywords that get lots of clicks but zero enquiries.",
      },
      {
        type: "heading",
        text: "6. Setting and Forgetting Campaigns",
      },
      {
        type: "paragraph",
        text: "Google Ads is not a set-it-and-forget-it platform. At minimum, check your campaigns weekly. Look at your Search Terms report, check which ads are performing best, adjust bids based on what is converting, and test new ad copy.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Google Ads can be incredibly effective for small businesses. We have seen local trades, professional services, and retail businesses across North Brisbane generate consistent leads at a reasonable cost. But it only works if you avoid these common pitfalls.",
      },
      {
        type: "paragraph",
        text: "If you would rather focus on running your business, that is what we are here for. We manage Google Ads campaigns for small businesses across North Brisbane. Book a free discovery call and we will have an honest chat about whether it makes sense for your situation.",
      },
    ],
  },
  "website-content-updates": {
    title: "How Often Should You Update Your Website Content?",
    excerpt:
      "Fresh content helps with SEO, but how often do you really need to update your site? Here is a practical guide for busy business owners.",
    category: "Content",
    date: "November 2025",
    readTime: "4 min read",
    image: "/images/blog/content-updates.jpg",
    content: [
      {
        type: "paragraph",
        text: "You have probably heard that you need to keep your website fresh with regular updates. But if you are running a business in North Brisbane, you have got a hundred other things to do. When are you supposed to find time to update your website?",
      },
      {
        type: "paragraph",
        text: "The good news is that you do not need to update your site every day, or even every week. The bad news is that leaving it completely untouched for years is hurting your business more than you realise.",
      },
      {
        type: "heading",
        text: "Why Fresh Content Matters for Search Rankings",
      },
      {
        type: "paragraph",
        text: "Google wants to show searchers the most relevant, up-to-date information. When your website has not been touched in two years, it sends a signal that your business might not be active. Fresh content also gives Google more reasons to visit your site.",
      },
      {
        type: "paragraph",
        text: "But here is the thing. Freshness is just one of many ranking factors. A well-written, useful page from 2023 will outrank a hastily thrown together page from yesterday. Quality always wins over frequency.",
      },
      {
        type: "heading",
        text: "Different Pages Need Different Update Schedules",
      },
      {
        type: "paragraph",
        text: "Not all pages need the same attention. Your service pages should be reviewed every 6 to 12 months. Are your prices accurate? Have you added new services? Are the photos still representing your current work?",
      },
      {
        type: "paragraph",
        text: "Blog posts should come at least once a month if you can manage it. Even one solid article per month is 12 new pages for Google to index over a year.",
      },
      {
        type: "paragraph",
        text: "Your homepage usually does not need frequent text changes, but it should always look current. Update testimonials every few months and swap out photos annually.",
      },
      {
        type: "heading",
        text: "A Realistic Update Schedule",
      },
      {
        type: "list",
        items: [
          "Monthly: Publish one blog post or news update. Add any new customer reviews.",
          "Quarterly: Review your service pages for accuracy. Check that all links and forms are working.",
          "Annually: Refresh photos across the site. Review and update your About page. Check contact details everywhere.",
        ],
      },
      {
        type: "heading",
        text: "Easy Updates Anyone Can Do",
      },
      {
        type: "list",
        items: [
          "Add new photos from recent jobs or projects",
          "Post customer reviews and testimonials as you receive them",
          "Write short updates about new equipment, staff, or capabilities",
          "Update your FAQ section when customers ask new questions",
          "Include seasonal tips related to your industry",
        ],
      },
      {
        type: "heading",
        text: "When to Add New Pages",
      },
      {
        type: "paragraph",
        text: "Sometimes freshness is about creating new pages. Consider adding new pages when you start offering a new service, want to target a specific suburb like Kallangur or Murrumba Downs, have a frequently asked question that needs a detailed answer, or want to showcase a major project.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "You do not need to obsess over your website, but you cannot ignore it either. Set a realistic schedule, stick to it, and focus on updates that actually help your customers.",
      },
      {
        type: "paragraph",
        text: "If your website has been sitting untouched and you are not sure where to start, we can help. A quick audit will show you what needs attention first. Get in touch for a free chat about where your site stands and what would make the biggest difference for your business.",
      },
    ],
  },
};

interface ContentBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: ContentBlock[];
}

export function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData[slug];

  if (!post) {
    return {
      title: "Post Not Found | Red Ox Digital",
    };
  }

  return {
    title: `${post.title} | Red Ox Digital Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://redoxdigital.com.au/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://redoxdigital.com.au/blog/${slug}`,
      type: "article",
      images: [
        {
          url: `https://redoxdigital.com.au${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostsData[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--off-white)] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D92323' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-[var(--red-ox-red-text)] font-medium mb-6 hover:underline"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-[var(--red-ox-red)] text-white text-xs font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-3 text-[var(--medium-grey)]">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-[var(--medium-grey)] rounded-full" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <Section background="white" padding="lg">
        <article className="max-w-3xl mx-auto prose prose-lg">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-semibold text-[var(--charcoal)] mt-10 mb-4"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="list-disc pl-6 space-y-2 text-[var(--medium-grey)] my-6"
                >
                  {block.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={index}
                className="text-[var(--medium-grey)] leading-relaxed mb-6"
              >
                {block.text}
              </p>
            );
          })}
        </article>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white mb-6">
            Want Personalised Advice for Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Reading is great, but nothing beats a one on one chat about your
            specific situation. Book a free discovery call and let us talk about
            your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="light" size="lg">
              Book a Free Discovery Call
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--red-ox-red-text)]"
            >
              View Our Services
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Based in Dakabin, serving all of North Brisbane
          </p>
        </div>
      </Section>
    </>
  );
}
