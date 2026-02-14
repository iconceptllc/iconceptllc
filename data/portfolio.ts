import { cdn } from "@/lib/cloudinary";

export type MediaType = "video" | "image";
export type ProjectType = "microsite" | "game" | "website" | "video";
export type MediaSize = "mobile" | "tablet" | "full";

export type ProjectMedia = {
  type: MediaType;
  src: string;
  alt?: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  projectType: ProjectType;
  mediaSize: MediaSize; // mobile = 3/5, tablet = 4/5, full = 100%
  heroImage: string;
  heroVideo?: string;
  overview: string;
  description: string;
  features: string[];
  // For image galleries (stacking cards effect)
  gallery: string[];
  // For video projects
  videoSrc?: string;
  // External link
  liveUrl?: string;
  // Tags for filtering
  tags: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  // Video Production Projects
  {
    slug: "anamorphic-billboard",
    title: "Anamorphic Billboard",
    subtitle: "3D Illusion Advertising",
    category: "Video Production",
    client: "Various Brands",
    year: "2024",
    projectType: "video",
    mediaSize: "full",
    heroImage: "/works/anamorphic.webp",
    heroVideo: cdn("/videos/anamorphic.mp4"),
    overview:
      "Eye-catching 3D anamorphic billboard content that creates stunning visual illusions for outdoor advertising campaigns.",
    description:
      "Anamorphic billboards represent the cutting edge of outdoor advertising, creating jaw-dropping 3D illusions that stop pedestrians in their tracks. Our team specializes in creating these mind-bending visual experiences that blur the line between digital and physical reality.",
    features: [
      "3D Visual Illusions",
      "High-Impact Advertising",
      "Outdoor Display Optimization",
      "Brand Storytelling",
    ],
    gallery: [],
    videoSrc: cdn("/videos/anamorphic.mp4"),
    tags: ["Anamorphic", "Video Production", "3D"],
  },
  {
    slug: "cgi-product-visualization",
    title: "CGI Product Visualization",
    subtitle: "Photorealistic 3D Renders",
    category: "CGI & 3D",
    client: "Multiple Clients",
    year: "2024",
    projectType: "video",
    mediaSize: "full",
    heroImage: "/works/cgi.webp",
    heroVideo: cdn("/videos/cgi.mp4"),
    overview:
      "Photorealistic CGI product renders and animations that bring products to life with stunning detail and visual impact.",
    description:
      "Our CGI team creates hyper-realistic product visualizations that showcase every detail of your product. From sleek electronics to luxury goods, we bring products to life in ways traditional photography cannot match.",
    features: [
      "Photorealistic Rendering",
      "Product Animation",
      "Material Simulation",
      "Lighting Design",
    ],
    gallery: [],
    videoSrc: cdn("/videos/cgi.mp4"),
    tags: ["CGI", "3D", "Product Visualization"],
  },
  {
    slug: "corporate-video",
    title: "Corporate Video",
    subtitle: "Brand Storytelling",
    category: "Video Production",
    client: "Corporate Clients",
    year: "2024",
    projectType: "video",
    mediaSize: "full",
    heroImage: "/works/corporate.webp",
    heroVideo: cdn("/videos/corporate.mp4"),
    overview:
      "Professional corporate video production showcasing brand identity, company values, and organizational stories.",
    description:
      "Corporate videos are essential for modern business communication. We create compelling narratives that capture your company's essence, from executive interviews to facility tours and brand documentaries.",
    features: [
      "Brand Storytelling",
      "Executive Interviews",
      "Company Culture Videos",
      "Event Coverage",
    ],
    gallery: [],
    videoSrc: cdn("/videos/corporate.mp4"),
    tags: ["Corporate", "Branding", "Video Production"],
  },
  {
    slug: "2d-animation",
    title: "2D Animation",
    subtitle: "Creative Motion Graphics",
    category: "Video Production",
    client: "Various Brands",
    year: "2024",
    projectType: "video",
    mediaSize: "full",
    heroImage: "/works/2d.webp",
    heroVideo: cdn("/videos/2d.mp4"),
    overview:
      "Creative 2D animations that tell compelling stories through fluid motion, vibrant visuals, and engaging characters.",
    description:
      "2D animation remains one of the most versatile and engaging forms of visual storytelling. Our animators bring concepts to life with smooth motion, expressive characters, and eye-catching visuals that captivate audiences.",
    features: [
      "Character Animation",
      "Motion Graphics",
      "Explainer Videos",
      "Brand Animation",
    ],
    gallery: [],
    videoSrc: cdn("/videos/2d.mp4"),
    tags: ["2D", "Animation", "Motion Graphics"],
  },
  {
    slug: "3d-animation",
    title: "3D Animation",
    subtitle: "Immersive Visual Experiences",
    category: "CGI & 3D",
    client: "Multiple Clients",
    year: "2024",
    projectType: "video",
    mediaSize: "full",
    heroImage: "/works/3d.webp",
    heroVideo: cdn("/videos/3d.mp4"),
    overview:
      "Immersive 3D animations that bring concepts to life with depth, realism, and powerful visual impact.",
    description:
      "3D animation opens up unlimited creative possibilities. From architectural visualizations to product demos and brand stories, our 3D team creates stunning animations that engage and inspire.",
    features: [
      "3D Modeling",
      "Character Rigging",
      "Environment Design",
      "Visual Effects",
    ],
    gallery: [],
    videoSrc: cdn("/works/3d.mp4"),
    tags: ["3D", "Animation", "CGI"],
  },

  // Web Games
  {
    slug: "americana-spinning-wheel",
    title: "Americana Win Instant Cash - Spinning Wheel Campaign",
    subtitle: "Interactive QR-Based Promotional Platform",
    category: "Web Games",
    client: "Americana",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/americana-win-instant-cash.webp",
    overview:
      "An interactive promotional microsite for Americana featuring a QR-driven spinning wheel experience designed to reward customers instantly after purchase.",
    description:
      "The ‘Americana Win Instant Cash’ campaign microsite was developed to drive in-store product purchases and customer engagement through a gamified digital experience. After purchasing an Americana product, customers scanned a QR code placed inside malls or on product packaging, which redirected them to the campaign microsite. Users could select their preferred language (English or Arabic), complete a submission form with their details and invoice number, and then access a spinning wheel mechanic. Upon spinning the wheel, users had the chance to instantly win rewards such as AED 150 or AED 100 discount coupons, or an exclusive Americana recipe book. The platform was optimized for mobile usage, high participation volumes, and real-time prize distribution, while maintaining consistent brand identity across all touchpoints.",
    features: [
      "QR Code–Based Campaign Access",
  "Bilingual Interface (English & Arabic)",
  "Gamified Spinning Wheel Mechanism",
  "Instant Win Reward System",
  "Invoice Number Validation",
  "Coupon & Digital Reward Management",
  "Mobile-First Responsive Design",
  "Analytics & Campaign Performance Tracking"
    ],
    gallery: [
      "/works/americana-game.webp",
      "/works/americana-game1.webp",
      "/works/americana-game2.webp",
      "/works/americana-game3.webp",
    ],
    liveUrl: "https://msite.webhostingdubai.net/americana-game/",
    tags: ["Microsite", "Promotional Campaign", "QR Campaign", "Gamification",
  "Spinning Wheel", "FMCG", "Customer Engagement"],
  },
  {
    slug: "americana-spin-and-win",
    title: "Americana Spin & Win – New Air Fryer Range Campaign",
    subtitle: "Gamified QR-Based Promotional Microsite",
    category: "Web Games",
    client: "Americana",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/americana-air-fryer-rpomo-header.webp",
    overview:
      "A QR-driven spin-and-win promotional microsite developed for Americana to promote its new air fryer range and incentivize purchases through instant rewards.",
    description:
      "The ‘Americana Spin & Win – New Air Fryer Range’ campaign microsite was created to support a purchase-based promotional activation across retail locations. Customers who purchased Americana products worth a minimum of AED 35 became eligible to participate. After scanning a QR code placed inside malls or on product packaging, users were redirected to the campaign microsite where they could choose their preferred language (English or Arabic), submit their details along with a valid invoice number, and access a spinning wheel game. Upon spinning the wheel, participants had the chance to instantly win an Americana air fryer or receive an exclusive Americana recipe book. The platform was designed for high engagement, mobile-first usability, and real-time prize distribution while reinforcing Americana’s product innovation and brand presence.",
    features: [
       "QR Code–Based Campaign Entry",
        "Minimum Purchase Validation (AED 35)",
        "Bilingual Interface (English & Arabic)",
        "Interactive Spinning Wheel Game",
        "Instant Win Prize Allocation",
        "High-Value Product Reward Management",
        "Invoice Number Submission & Verification",
        "Mobile-First Responsive Design",
        "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/Air-fryer-promo-microsite.webp",
      "/works/Air-fryer-promo-microsite1.webp",
      "/works/Air-fryer-promo-microsite2.webp",
      "/works/Air-fryer-promo-microsite3.webp",
      "/works/Air-fryer-promo-microsite4.webp",
    ],
    liveUrl: "https://msite.webhostingdubai.net/americana-game/",
    tags: ["Microsite",
            "Promotional Campaign",
            "Spin and Win",
            "QR Campaign",
            "Gamification",
            "FMCG",
            "Product Launch",
            "Customer Engagement"
          ],
  },
  {
    slug: "snickers-football-game",
    title: "Snickers Football Game",
    subtitle: "Sports-Themed Web Game",
    category: "Web Games",
    client: "Snickers",
    year: "2024",
    projectType: "game",
    mediaSize: "mobile",
    heroImage: cdn("/works/snickers.webp"),
    overview:
      "Engaging football-themed web game created for Snickers' marketing campaign with interactive gameplay and score tracking.",
    description:
      "A fun and addictive football game designed for Snickers' promotional campaign. Players kick goals, earn points, and compete for prizes while engaging with the Snickers brand.",
    features: [
      "Football Gameplay",
      "Score Tracking",
      "Leaderboard System",
      "Social Sharing",
    ],
    gallery: [
      "/works/snickers.webp",
      "/works/snickers1.webp",
      "/works/snickers2.webp",
      "/works/snickers3.webp",
      "/works/snickers4.webp",
    ],
    liveUrl: "https://msite.webhostingdubai.net/snickers1/",
    tags: ["Web Game", "Football", "Interactive"],
  },
  {
    slug: "persil-spinning-wheel",
    title: "Persil Spinning Wheel",
    subtitle: "Promotional Game Campaign",
    category: "Web Games",
    client: "Persil",
    year: "2024",
    projectType: "game",
    mediaSize: "mobile",
    heroImage: cdn("/works/persil.webp"),
    overview:
      "Fun and interactive spinning wheel game for Persil's promotional activities with instant win mechanics.",
    description:
      "Persil's promotional spinning wheel game engages customers with instant win opportunities. The smooth animation and satisfying mechanics keep users coming back for more chances to win.",
    features: [
      "Instant Win System",
      "Smooth Animations",
      "Mobile Optimized",
      "Campaign Analytics",
    ],
    gallery: [
      "/works/persil.webp",
      "/works/persil1.webp",
      "/works/persil2.webp",
      "/works/persil3.webp",
    ],
    tags: ["Web Game", "Spinning Wheel", "Promotional"],
  },

  // Micro Sites
  {
    slug: "dac-microsite",
    title: "DAC Micro Site",
    subtitle: "Brand Campaign Platform",
    category: "Micro Sites",
    client: "DAC",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/dac.webp",
    overview:
      "Custom micro site designed for DAC featuring modern design, seamless user experience, and campaign-focused content.",
    description:
      "This micro site was designed to support DAC's marketing campaign with a focused, single-purpose design that drives conversions and engagement. The clean layout and intuitive navigation ensure users find what they need quickly.",
    features: [
      "Campaign Landing Page",
      "Lead Generation",
      "Mobile First Design",
      "Fast Loading",
    ],
    gallery: [
      "/works/dac.webp",
      "/works/dac1.webp",
      "/works/dac2.webp",
      "/works/dac3.webp",
    ],
    liveUrl: "https://msite.webhostingdubai.net/dac/kw",
    tags: ["Micro Site", "Campaign", "Web Design"],
  },
  {
    slug: "americana-microsite",
    title: "Americana Micro Site",
    subtitle: "Interactive Brand Experience",
    category: "Micro Sites",
    client: "Americana",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/americana.webp",
    overview:
      "Engaging micro site for Americana with interactive elements, brand-focused design, and promotional content.",
    description:
      "Americana's micro site combines beautiful design with interactive elements to create an engaging brand experience. The site showcases products, promotions, and brand values in a cohesive digital package.",
    features: [
      "Interactive Elements",
      "Product Showcase",
      "Brand Storytelling",
      "Responsive Design",
    ],
    gallery: [
      "/works/americana.webp",
      "/works/americana1.webp",
      "/works/americana2.webp",
      "/works/americana3.webp",
    ],
    liveUrl: "https://msite.webhostingdubai.net/americana/",
    tags: ["Micro Site", "Interactive", "Brand"],
  },
  {
    slug: "extra-microsite",
    title: "Extra Micro Site",
    subtitle: "Promotional Campaign Platform",
    category: "Micro Sites",
    client: "Extra Gum",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/extra.webp",
    overview:
      "Creative micro site for Extra gum featuring promotional content, user engagement features, and brand messaging.",
    description:
      "Extra gum's micro site was designed to support their promotional campaigns with engaging content and interactive features. The playful design reflects the brand's personality while driving user engagement.",
    features: [
      "Promotional Content",
      "User Engagement",
      "Social Integration",
      "Analytics Tracking",
    ],
    gallery: [
      "/works/extra.webp",
      "/works/extra1.webp",
      "/works/extra2.webp",
      "/works/extra3.webp",
    ],
    tags: ["Micro Site", "Promotional", "Campaign"],
  },
  {
    slug: "win-with-persil-microsite",
    title: "Persil “Win With Persil” Campaign Microsite – GCC Region (2023)",
    subtitle: "Multi-Country Promotional Campaign Platform",
    category: "Micro Sites",
    client: "Persil",
    year: "2023",
    projectType: "microsite",
    mediaSize: "full",
    heroImage: "/works/win-with-persil-header.webp",
    overview:
      "A QR-driven promotional microsite developed for Persil’s ‘Win With Persil’ campaign across GCC countries, designed to engage customers and reward purchases through country-specific mechanics.",
    description:
      "The ‘Win With Persil’ campaign microsite was built to support a large-scale promotional activation across the GCC region in 2023. Each participating country operated under unique campaign rules, including different prize conditions, coupon values based on local currency, minimum purchase thresholds, and varying campaign durations. Customers who purchased Persil products scanned a QR code on the packaging to access the microsite, where they could view campaign details and submit their entries by uploading purchase receipts. Upon successful submission, the system dynamically allocated random prizes based on real-time availability, including digital discount coupons and high-value rewards such as washing machines. The platform was optimized for mobile use and high traffic, ensuring a seamless, user-friendly experience while maintaining consistent Persil brand messaging across all regions.",
    features: [
       "QR Code–Based Campaign Entry",
      "Multi-Country & Currency-Specific Logic",
      "Receipt Upload & Validation",
      "Dynamic Prize Allocation System",
      "Discount Coupon & Gift Prize Management",
      "Mobile-First Responsive Design",
      "Campaign Duration & Rule Configuration",
      "Analytics & Performance Tracking",
    ],
    gallery: [
      "/works/win-with-persil1.webp",
      "/works/win-with-persil2.webp",
      "/works/win-with-persil3.webp",
      "/works/win-with-persil4.webp",
    ],
    tags: [ "Microsite",  "Promotional Campaign",  "QR Campaign",  "FMCG",  "GCC",  "Brand Activation",  "Customer Engagement"],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
}
