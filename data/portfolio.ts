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
    heroImage: cdn("/works/anamorphic.webp"),
    heroVideo: cdn("/works/anamorphic.mp4"),
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
    videoSrc: cdn("/works/anamorphic.mp4"),
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
    heroImage: cdn("/works/cgi.webp"),
    heroVideo: cdn("/works/cgi.mp4"),
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
    videoSrc: cdn("/works/cgi.mp4"),
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
    heroImage: cdn("/works/corporate.webp"),
    heroVideo: cdn("/works/corporate.mp4"),
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
    videoSrc: cdn("/works/corporate.mp4"),
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
    heroImage: cdn("/works/2d.webp"),
    heroVideo: cdn("/works/2d.mp4"),
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
    videoSrc: cdn("/works/2d.mp4"),
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
    heroImage: cdn("/works/3d.webp"),
    heroVideo: cdn("/works/3d.mp4"),
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
    title: "Americana Spinning Wheel",
    subtitle: "Interactive Promotional Game",
    category: "Web Games",
    client: "Americana",
    year: "2024",
    projectType: "game",
    mediaSize: "mobile",
    heroImage: cdn("/works/americana-game.webp"),
    overview:
      "Interactive spinning wheel game developed for Americana's promotional campaign with engaging mechanics and prize distribution.",
    description:
      "This interactive spinning wheel game was designed to boost customer engagement during Americana's promotional campaigns. Users spin the wheel to win prizes, creating an exciting and memorable brand interaction.",
    features: [
      "Interactive Gameplay",
      "Prize Distribution System",
      "Mobile Responsive",
      "Analytics Integration",
    ],
    gallery: [
      cdn("/works/americana-game.webp"),
      cdn("/works/americana-game1.webp"),
      cdn("/works/americana-game2.webp"),
      cdn("/works/americana-game3.webp"),
    ],
    liveUrl: "https://msite.webhostingdubai.net/americana-game/",
    tags: ["Web Game", "Spinning Wheel", "Interactive"],
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
      cdn("/works/snickers.webp"),
      cdn("/works/snickers1.webp"),
      cdn("/works/snickers2.webp"),
      cdn("/works/snickers3.webp"),
      cdn("/works/snickers4.webp"),
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
      cdn("/works/persil.webp"),
      cdn("/works/persil1.webp"),
      cdn("/works/persil2.webp"),
      cdn("/works/persil3.webp"),
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
    heroImage: cdn("/works/dac.webp"),
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
      cdn("/works/dac.webp"),
      cdn("/works/dac1.webp"),
      cdn("/works/dac2.webp"),
      cdn("/works/dac3.webp"),
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
    heroImage: cdn("/works/americana.webp"),
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
      cdn("/works/americana.webp"),
      cdn("/works/americana1.webp"),
      cdn("/works/americana2.webp"),
      cdn("/works/americana3.webp"),
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
    heroImage: cdn("/works/extra.webp"),
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
      cdn("/works/extra.webp"),
      cdn("/works/extra1.webp"),
      cdn("/works/extra2.webp"),
      cdn("/works/extra3.webp"),
    ],
    tags: ["Micro Site", "Promotional", "Campaign"],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
}
