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
      "The Americana Win Instant Cash campaign microsite was developed to drive in-store product purchases and customer engagement through a gamified digital experience. After purchasing an Americana product, customers scanned a QR code placed inside malls or on product packaging, which redirected them to the campaign microsite. Users could select their preferred language (English or Arabic), complete a submission form with their details and invoice number, and then access a spinning wheel mechanic. Upon spinning the wheel, users had the chance to instantly win rewards such as AED 150 or AED 100 discount coupons, or an exclusive Americana recipe book. The platform was optimized for mobile usage, high participation volumes, and real-time prize distribution, while maintaining consistent brand identity across all touchpoints.",
    features: [
      "QR  Campaign Access",
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
    slug: "alpro-scan-and-win",
    title: "Alpro Scan & Win Barista Touch Coffee Machine Campaign",
    subtitle: "QR-Based Promotional Microsite for Product Engagement",
    category: "Micro Sites",
    client: "Alpro",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/alpro_header.webp",
    overview:
      "A QR-driven promotional microsite developed for Alpro allowing customers to enter a prize draw and win a premium Barista Touch coffee machine after purchasing Alpro products.",
    description:
      "The Scan & Win Barista Touch Coffee Machineâ€ campaign microsite was created to increase product visibility and customer engagement for Alpro across retail locations. Customers who purchased any Alpro product could scan a QR code displayed on packaging or in-store promotional materials to access the campaign microsite.<br>Upon landing on the site, users entered the draw by filling out a simple submission form with their basic details and purchase information. After successful entry, participants were automatically registered for a chance to win a premium Barista Touch coffee machine.<br>The microsite was built with a mobile-first approach to ensure smooth access via QR scans, fast form submission, and seamless participation across devices. The platform supported high campaign traffic, secure data collection, and efficient draw management while maintaining Alpro's clean and modern brand identity throughout the user journey.",
    features: [
      "QR  Campaign Entry",
      "Simple Draw Entry Form",
      "Purchase-Based Participation",
      "Mobile-First Responsive Design",
      "Secure Customer Data Collection",
      "Analytics & Campaign Performance Tracking"
    ],
    gallery: [
      "/works/alpro1.webp",
      "/works/alpro2.webp",
      "/works/alpro3.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "QR Campaign", "Gamification",
  "Spinning Wheel", "FMCG", "Customer Engagement"],
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
    heroImage: "/works/snickers-header.webp",
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
    tags: ["Web Game", "Football", "Interactive"],
  },
   {
    slug: "loreal-memory-game",
    title: "L’Oréal Paris UAE – Memory Game Promotional Campaign",
    subtitle: "In-Store Interactive Microsite for Customer Engagement",
    category: "Web Games",
    client: "L’Oréal Paris UAE",
    year: "2026",
    projectType: "game",
    mediaSize: "mobile",
    heroImage: "/works/loreal_header.webp",
    overview:
      "An interactive in-store microsite developed for L'Oréal Paris in the UAE, allowing customers to play a branded memory game on tablets operated by store promoters, with real-time tracking of performance and entry data.",
    description:
      "The L’Oréal Paris Memory Game campaign was designed to enhance in-store engagement and create a fun, interactive experience for customers across retail outlets in the UAE. Brand promoters provided tablets with the campaign microsite open, enabling users to enter their personal details and play the memory game.<br><br>The L’Oréal Paris Memory Game campaign was designed to enhance in-store engagement and create a fun, interactive experience for customers across retail outlets in the UAE. Brand promoters provided tablets with the campaign microsite open, enabling users to enter their personal details and play the memory game.<br><br>The microsite was optimized for tablet devices, ensuring smooth gameplay and responsive design. It provided a gamified experience that strengthened brand interaction while allowing L’Oréal Paris to collect valuable engagement data and measure in-store campaign performance.",
    features: [
      "In-Store Tablet-Based Interactive Game",
      "Memory Game with 4 Pairs Challenge",
      "User Registration and Personal Details Collection",
      "Timed Gameplay with 40-Second Limit",
      "Two-Chance Gameplay Mechanism",
      "Performance Tracking (Duration & Chances)",
      "Database Logging for Analytics",
      "Mobile/Tablet-Optimized Design",
      "Campaign Participation Reporting"
    ],
    gallery: [
      "/works/loreal1.webp",
      "/works/loreal2.webp",
      "/works/loreal3.webp",
      "/works/loreal5.webp",
      "/works/loreal4.webp",
    ],
    tags: ["Microsite",
        "Promotional Campaign",
        "In-Store Engagement",
        "Gamification",
        "Beauty Brand",
        "Customer Interaction",
        "Memory Game",
        "UAE Campaign",
        "Data Tracking"
      ],
  },
  {
    slug: "americana-spin-and-win",
    title: "Americana Spin & Win New Air Fryer Range Campaign",
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
      "The Americana Spin & Win New Air Fryer Range campaign microsite was created to support a purchase-based promotional activation across retail locations. Customers who purchased Americana products worth a minimum of AED 35 became eligible to participate. After scanning a QR code placed inside malls or on product packaging, users were redirected to the campaign microsite where they could choose their preferred language (English or Arabic), submit their details along with a valid invoice number, and access a spinning wheel game. Upon spinning the wheel, participants had the chance to instantly win an Americana air fryer or receive an exclusive Americana recipe book. The platform was designed for high engagement, mobile-first usability, and real-time prize distribution while reinforcing Americana's product innovation and brand presence.",
    features: [
       "QR  Campaign Entry",
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
    slug: "almarai-win-with-almarai",
    title: "Almarai Win With Almarai Panda Store Campaign",
    subtitle: "QR-Based Retail Promotional Microsite",
    category: "Micro Sites",
    client: "Almarai",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/almarai_header.webp",
    overview:
      "A QR-driven promotional microsite for Almarai, encouraging customers to participate in a product-based contest at Panda stores across Saudi Arabia",
    description:
      "The 'Win With Almarai' campaign microsite was developed to increase in-store engagement and brand visibility for . Customers visiting Panda stores in the Kingdom of Saudi Arabia could participate by taking a photo of Almarai products in their Panda shopping cart, scanning a QR code, and uploading the image along with their name and contact details to enter the contest.<br>The microsite was designed with a mobile-first approach to ensure seamless participation via QR code scans, fast image uploads, and smooth form submission. It handled high volumes of entries while maintaining data security and reinforced Almarai's retail presence and customer engagement within the KSA market.",
    features: [
       "QR  Campaign Entry",
        "Photo Upload Submission",
        "Customer Details Collection",
        "Mobile-First Responsive Design",
        "High-Volume Entry Handling",
        "Secure Data Management",
        "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/almarai.webp",
    ],
    tags: ["Microsite",
            "Promotional Campaign",
            "QR Campaign",
            "FMCG",
            "Product Launch",
            "Customer Engagement",
            "Saudi Arabia",
            "Contest Campaign"
          ],
  },
  {
    slug: "alyoum-scan-and-win",
    title: "Alyoum Scan & Win Raffle Campaign KSA",
    subtitle: "Multi-Entry QR-Based Promotional Microsite with User Dashboard",
    category: "Micro Sites",
    client: "Alyoum",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/alyoum_header.webp",
    overview:
      "A full-featured promotional microsite developed for Alyoum in Saudi Arabia, enabling customers to register, upload purchase receipts, and earn multiple raffle draw chances through a structured QR-based campaign platform.",
    description:
      "The Alyoum Scan & Win campaign microsite was designed to drive repeat purchases and customer engagement across the Kingdom of Saudi Arabia through a raffle-based promotional system. Customers scanned a QR code or visited the campaign website to access the microsite, where they selected their preferred language and completed a one-time registration to create their user profile.<br>After registration, users could securely log in to a personalized dashboard displaying their raffle chances, submission history, and participation status. Customers earned an initial raffle ticket upon registration and gained additional entries by uploading purchase receipts and invoice details. Every SAR 20 spent on Alyoum products generated extra chances in the raffle draw, encouraging repeat purchases and higher basket value.<br>The dashboard allowed users to track transaction history, total raffle entries, and submission status, while automated prompts encouraged continued participation. A robust admin module enabled backend verification of receipts, approval or rejection of entries, raffle calculation based on purchase value, and filtered data exports for campaign management. Built with a mobile-first approach, the microsite ensured seamless QR access, secure login functionality, and high-volume participation handling across Saudi Arabia.",
    features: [
      "QR Code–Based Campaign Access",
      "Bilingual Interface (English & Arabic)",
      "User Registration & Profile Creation",
      "Secure Login & Forgot Password System",
      "Personalized User Dashboard",
      "Raffle Ticket Allocation Logic",
      "Receipt Upload & Invoice Submission",
      "Multi-Entry Purchase Tracking",
      "Transaction History & Entry Status",
      "Automated Participation Confirmation",
      "Admin Verification & Approval Panel",
      "Raffle Calculation Based on Spend Value",
      "Data Export & Campaign Reporting",
      "Mobile-First Responsive Design",
    ],
    gallery: [
      "/works/alyoum1.webp",
      "/works/alyoum2.webp",
      "/works/alyoum3.webp",
      "/works/alyoum4.webp",
      "/works/alyoum5.webp",
      "/works/alyoum6.webp",
      "/works/alyoum7.webp",
      "/works/alyoum8.webp",
    ],
    tags: [
      "Microsite",
      "Promotional Campaign",
      "QR Campaign",
      "Raffle System",
      "FMCG",
      "Saudi Arabia",
      "Customer Engagement",
      "Receipt Upload Campaign",
      "Loyalty Campaign",
    ],
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
    heroImage: "/works/persil.webp",
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
  {
    slug: "americana-scan-and-win",
    title: "Americana Scan & Win Cash Voucher Campaign",
    subtitle: "QR-Based Spin & Win Promotional Microsite",
    category: "Web Games",
    client: "Americana",
    year: "2024",
    projectType: "game",
    mediaSize: "mobile",
    heroImage: "/works/americana_win_instant_cash.webp",
    overview:
      "An interactive QR-based promotional microsite developed for Americana to drive frozen product sales through a spin-and-win cash voucher campaign.",
    description:
      "The Americana Scan & Win campaign microsite was created to increase retail engagement and boost sales of Americana frozen products across participating outlets. Customers who purchased any Americana frozen items worth AED 35 or more could scan a QR code placed in-store or on product packaging to access the campaign page. After selecting their preferred language (English or Arabic), users completed a submission form with basic details, invoice number, and invoice copy. Once validated, an interactive spinning wheel appeared, giving participants a chance to win instant prizes based on availability, including AED 100 vouchers, AED 150 vouchers, or an exclusive Americana recipe book. The microsite was optimized for mobile-first participation, fast entry processing, and real-time prize allocation to ensure a smooth and engaging user experience.",
    features: [
      "QR  Campaign Entry",
      "Minimum Purchase Validation (AED 35)",
      "Bilingual Interface (English & Arabic)",
      "Invoice Upload & Number Verification",
      "Interactive Spinning Wheel Game",
      "Instant Voucher Allocation System",
      "Prize Availability Logic",
      "Mobile-First Responsive Design",
      "High-Volume Entry Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/americana_win_instant_cash1.webp",
      "/works/americana_win_instant_cash2.webp",
      "/works/americana_win_instant_cash3.webp",
      "/works/americana_win_instant_cash4.webp",
      "/works/americana_win_instant_cash5.webp",
      "/works/americana_win_instant_cash6.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "Spin and Win", "Retail Promotion", "Customer Engagement", "Voucher Campaign"],
  },

  {
    slug: "bekind-scan-and-win",
    title: "BEKIND Win Your Football Gear – Scan & Win Campaign",
    subtitle: "QR-Based Promotional Microsite for Instant Voucher Rewards",
    category: "Micro Sites",
    client: "BEKIND",
    year: "2024",
    projectType: "game",
    mediaSize: "mobile",
    heroImage: "/works/bekind_header.webp",
    overview:
      "A QR-driven promotional microsite developed for BEKIND across the UAE and KSA, enabling customers to participate in a football-themed campaign with instant-win outcomes after form submission.",
    description:
      "The BEKIND Win Your Football Gear campaign microsite was created to increase brand engagement and retail participation across the UAE and Saudi Arabia. Customers scanned a QR code displayed on promotional materials or product packaging and were redirected to a mobile-optimized campaign page.<br><br>Participants completed a simple entry form with their details to join the promotion. After submission, the system instantly revealed the result, where customers either received a digital voucher or a better luck next time message based on campaign logic and prize availability.<br><br>The microsite was designed for fast QR access, high participation volume, and seamless mobile usability across both regions. The platform supported instant-result mechanics, secure data collection, and efficient campaign tracking while maintaining BEKIND's energetic, sports-driven campaign theme.",
    features: [
      "QR  Campaign Entry",
      "UAE & KSA Campaign Deployment",
      "Bilingual Interface (English & Arabic)",
      "Instant Win Logic (Voucher or Retry)",
      "Prize Availability Logic",
      "Mobile-First Responsive Design",
      "High-Volume Entry Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/bekind1.webp",
      "/works/bekind2.webp",
      "/works/bekind3.webp",
      "/works/bekind4.webp",
   
    ],
    tags: ["Microsite", "Promotional Campaign", "Retail Promotion", "Customer Engagement", "Voucher Campaign"],
  },
  {
    slug: "palette-try-it-share-it-win-it",
    title: "Palette Try It, Share It, Win It – GCC AR Promotional Campaign",
    subtitle: "QR-Based AR Microsite with User Submission & Prize Draw",
    category: "Micro Sites",
    client: "Palette",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/palette_header.webp",
    overview:
      "A QR-driven interactive microsite developed for Palette across Bahrain, KSA, Kuwait, Oman, Qatar, and UAE, enabling users to try Palette makeup looks via an internal AR application, submit images with details, and participate in a prize draw for a trip to Paris or a luxury staycation.",
    description:
      "A QR-driven interactive microsite developed for Palette across Bahrain, KSA, Kuwait, Oman, Qatar, and UAE, enabling users to try Palette makeup looks via an internal AR application, submit images with details, and participate in a prize draw for a trip to Paris or a luxury staycation.<br><br>After trying and saving their favorite AR look, participants returned to the microsite to upload their image along with basic details and Instagram handle to enter the draw. Winners were eligible for exciting prizes, including a trip to Paris or a luxurious staycation.<br><br>After trying and saving their favorite AR look, participants returned to the microsite to upload their image along with basic details and Instagram handle to enter the draw. Winners were eligible for exciting prizes, including a trip to Paris or a luxurious staycation.",
    features: [
     "QR Code–Based Campaign Entry",
      "GCC Multi-Country Campaign Deployment",
      "Bilingual Interface (English & Arabic)",
      "AR Makeup Try-On Integration",
      "Image Upload & Instagram Handle Collection",
      "Grand Prize Draw Management",
      "Mobile-First Responsive Design",
      "Secure Customer Data Collection",
      "High-Volume Entry Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/palette1.webp",
      "/works/palette2.webp",
      "/works/palette3.webp",
      "/works/palette4.webp",
   
    ],
    tags: ["Microsite", "Promotional Campaign", "Retail Promotion", "Customer Engagement", "GCC Campaign"],
  },

  {
    slug: "americana-disha-patani-meet-and-greet",
    title: "Americana Disha Patani Meet & Greet Scan & Win VIP Cinema Campaign",
    subtitle: "QR-Based Spin & Win Campaign for VIP Dine-In Cinema Tickets",
    category: "Web Games",
    client: "Americana",
    year: "2024",
    projectType: "game",
    mediaSize: "mobile",
    heroImage: "/works/americana-cinema-tickets.webp",
    overview:
      "An interactive promotional microsite developed for Americana featuring a celebrity-led engagement campaign with Disha Patani, offering customers a chance to win VIP dine-in cinema tickets through a QR-based spinning wheel experience.",
    description:
      "The Disha Patani Meet & Greet campaign microsite was created to boost in-store sales and brand engagement for Americana frozen products through a high-impact celebrity promotion. Customers who purchased any Americana frozen product worth AED 35 or more could scan a QR code displayed in-store or on product packaging to access the campaign page. <br> After landing on the microsite, users selected their preferred language (English or Arabic) and completed a submission form by entering basic details along with their invoice number and receipt copy. Once validated, an interactive spinning wheel appeared, giving participants a chance to instantly win prizes based on availability, including couple VIP dine-in cinema tickets or an Americana e-recipe booklet. <br> The platform was designed for seamless mobile participation, high-volume campaign traffic, and real-time prize allocation, ensuring a smooth and engaging experience while amplifying brand visibility through a celebrity-driven promotional campaign.",
    features: [
      "QR  Campaign Entry",
      "Minimum Purchase Validation (AED 35)",
      "Bilingual Interface (English & Arabic)",
      "Invoice Upload & Number Verification",
      "Interactive Spinning Wheel Game",
      "Instant Voucher Allocation System",
      "Prize Availability Logic",
      "Mobile-First Responsive Design",
      "High-Volume Entry Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/americana-cinema-tickets1.webp",
      "/works/americana-cinema-tickets2.webp",
      "/works/americana-cinema-tickets3.webp",
      "/works/americana-cinema-tickets4.webp",
      "/works/americana-cinema-tickets5.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "Spin and Win", "Retail Promotion", "Customer Engagement", "Voucher Campaign", "Celebrity Campaign"],
  },

  {
    slug: "galaxy-chocowonderland",
    title: "Galaxy Join the ChocoWonderland – Scan & Enter Campaign",
    subtitle: "QR-Based Photo Entry Promotional Microsite",
    category: "Micro Sites",
    client: "Galaxy",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/galaxy_choco_wonderland_header.webp",
    overview:
      "An interactive QR-based promotional microsite developed for Galaxy in Saudi Arabia, allowing customers to enter a grand prize draw by capturing and submitting photos of Galaxy chocolate products.",
    description:
      "The “Join the ChocoWonderland” campaign microsite was created to enhance customer engagement and drive product visibility for Galaxy across Saudi Arabia. Customers scanned a QR code from campaign touchpoints and were instantly directed to a mobile-optimized microsite that activated their device camera.<br><br>Users were prompted to take a photo of a Galaxy chocolate product and submit it along with basic personal details through a simple entry form. Upon successful submission, participants were automatically entered into a grand prize draw for a chance to win a car.<br><br>The platform was designed for seamless camera integration, fast form submission, and high campaign participation. Built with a mobile-first approach, the microsite ensured smooth QR access, secure image uploads, and reliable draw entry management while delivering an immersive brand-themed digital experience aligned with the ChocoWonderland concept.",
    features: [
      "QR  Campaign Entry",
      "Direct Camera Activation & Photo Capture",
      "Mobile-First Responsive Design",
      "High-Volume Entry Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/galaxy_choco_wonderland1.webp",
      "/works/galaxy_choco_wonderland2.webp",
      "/works/galaxy_choco_wonderland3.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "Photo Upload Campaign", "Retail Promotion", "Customer Engagement"],
  },

  {
    slug: "alpro-scan-and-win-nutribullet",
    title: "Alpro Scan & Win Nutribullet Campaign",
    subtitle: "QR-Based Promotional Microsite for Nutribullet Giveaway",
    category: "Micro Sites",
    client: "Alpro",
    year: "2021-2022",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/alpro_nutribullet.webp",
    overview:
      "A QR-driven promotional microsite developed for Alpro enabling customers to participate in a purchase-based campaign for a chance to win a Nutribullet blender.",
    description:
      "The Alpro Scan & Win Nutribullet campaign microsite was created to increase customer engagement and promote Alpro’s plant-based product range through a simple and effective QR-based entry journey. Customers scanned a QR code from in-store displays or product packaging and were redirected to a mobile-optimized campaign microsite.<br><br>Participants completed a quick submission form with their basic details to enter the draw. Once the form was submitted, users received confirmation of successful participation and were automatically entered into the prize draw for a chance to win a Nutribullet blender.<br><br>The microsite was built with a mobile-first approach to ensure seamless access via QR scans, fast form submissions, and secure data collection. Designed to handle high participation volumes, the platform supported efficient draw management while maintaining Alpro’s clean and modern brand experience.",
    features: [
      "QR Code–Based Campaign Entry",
      "Multi-Country Campaign Deployment",
      "Simple User Registration Form",
      "Mobile-First Responsive Design",
      "High-Volume Participation Handling",
      "Secure Customer Data Collection",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/alpro_nutribullet1.webp",

    ],
    tags: ["Microsite", "Promotional Campaign", "QR Code Campaign", "Retail Promotion", "Customer Engagement"],
  },
   {
    slug: "raising-canes-jbr-scan-and-win",
    title: "Raising Cane’s JBR – Scan & Win Campaign",
    subtitle: "Buy a Meal & Enter to Win an iPhone 15 or E-Scooter",
    category: "Micro Sites",
    client: "Raising Cane’s",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/raising_canes.webp",
    overview:
      "A location-specific promotional microsite developed for Raising Cane's at the JBR Dubai branch, giving customers a chance to win an iPhone 15 or an e-scooter when purchasing a meal",
    description:
      "The Raising Cane’s JBR Scan & Win campaign was a limited-time retail activation designed to drive footfall and increase meal purchases during the promotional period. Customers who purchased a meal at the JBR Dubai branch scanned a QR code displayed in-store to access the campaign microsite.<br><br>Participants completed a simple entry form by submitting their basic details to enter the draw. Once the form was successfully submitted, users received confirmation that their entry had been recorded.<br><br>Participants completed a simple entry form by submitting their basic details to enter the draw. Once the form was successfully submitted, users received confirmation that their entry had been recorded.",
    features: [
      "QR Code–Based Campaign Entry",
      "Simple User Registration Form",
      "Mobile-First Responsive Design",
      "High-Volume Participation Handling",
      "Secure Customer Data Collection",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/raising_canes1.webp",
      "/works/raising_canes2.webp",

    ],
    tags: ["Microsite", "Promotional Campaign", "QR Code Campaign", "Retail Promotion", "Customer Engagement"],
  },

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
    slug: "sapora-christmas",
    title: "Sapora Christmas Campaign – Travel This Festive Season",
    subtitle: "Scan, Enter & Win with Sapora’s Winner Bottle",
    category: "Micro Sites",
    client: "Sapora",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/sapora_header.webp",
    overview:
      "A festive instant-win QR promotional microsite developed for Sapora, allowing customers to participate in a holiday-themed campaign for a chance to win gift vouchers, travel vouchers, or receive a digital calendar as a fallback reward.",
    description:
      "The Sapora Christmas campaign was designed to drive seasonal engagement and boost in-store product interaction during the festive period. Customers scanned a QR code featured on Sapora’s promotional “winner bottle” and were redirected to a dedicated campaign microsite.<br><br>Upon landing, users selected their preferred language and completed a simple form with their basic details to participate. After submission, the system executed an instant-win logic based on real-time prize availability.<br><br>If all prizes were exhausted or not allocated at the time of entry, users received a branded digital calendar as a fallback reward.<br><br>The microsite was built with an automated prize allocation engine, real-time availability tracking, and secure data capture. Designed for high-traffic participation during the holiday season, the platform ensured seamless entry flow, instant result display, and structured reporting for prize distribution management.",
    features: [
      "QR  Campaign Entry",
      "Invoice & Receipt Submission",
       "High-Volume Entry Handling",
       "Instant Win Mechanism",
"Real-Time Prize Availability Logic",
    "Mobile-First Responsive Design",
    "Retail Campaign Integration",
    "User-Friendly Entry Form",
    "Campaign Analytics & Tracking",
    ],
    gallery: [
      "/works/sapora1.webp",
      "/works/sapora2.webp",
      "/works/sapora3.webp",
      "/works/sapora4.webp",
      "/works/sapora5.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "QR Campaign", "FMCG", "Retail Promotion", "Customer Engagement", "Christmas Campaign","Festive Promotion", "Instant Win"],
  },
  

  {
    slug: "americana-back-to-school",
    title: "Americana Back to School Scan & Win Tuition Fees Campaign",
    subtitle: "QR-Based Back-to-School Promotional Microsite",
    category: "Micro Sites",
    client: "Americana",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/americana-backto-school.webp",
    overview:
      "A QR-driven back-to-school promotional microsite encouraging customers to participate in a tuition-fee campaign after purchasing Americana frozen products.",
    description:
      "The Back to School campaign microsite was developed for Americana to support a seasonal retail promotion across the UAE. Customers who spent AED 35 or more on selected Americana frozen products could scan a QR code displayed in-store or on product packaging to access the campaign site. After scanning, users were directed to a mobile-optimized microsite where they submitted their purchase details and invoice number to enter the tuition-fee campaign. The platform was built for fast participation, seamless mobile experience, and high campaign traffic, ensuring smooth entry management while reinforcing Americana's family-focused brand presence during the back-to-school season.",
    features: [
      "QR  Campaign Entry",
      "Minimum Spend Validation ",
      "Invoice & Receipt Submission",
       "High-Volume Entry Handling",
    "Mobile-First Responsive Design",
    "Retail Campaign Integration",
    "User-Friendly Entry Form",
    "Campaign Analytics & Tracking",
    ],
    gallery: [
      "/works/americana-backto-school1.webp",
      "/works/americana-backto-school2.webp",
      "/works/americana-backto-school3.webp",
      "/works/americana-backto-school4.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "QR Campaign", "FMCG", "Retail Promotion", "Customer Engagement"],
  },


  

  // Micro Sites
 

  {
    slug: "galaxy-ramadan-jewel-rewards",
    title: "Galaxy Ramadan Jewel Rewards – Scan & Enter Campaign",
    subtitle: "Ramadan QR-Based Prize Draw Promotional Microsite",
    category: "Micro Sites",
    client: "Galaxy",
    year: "2025",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/ramadan_jewels_header.webp",
    overview:
      "A Ramadan-themed promotional microsite developed for Galaxy in Saudi Arabia, allowing customers to enter a festive prize draw for a chance to win laptops and tablets through a simple QR-based participation journey.",
    description:
      "The Galaxy Ramadan Jewel Rewards campaign microsite was created to drive seasonal engagement and increase brand interaction during Ramadan across Saudi Arabia. Customers accessed the campaign by scanning a QR code from promotional materials or product packaging and were redirected to a mobile-optimized microsite.<br><br>Participants completed a simple entry form by providing their basic details and submitting their information to join the campaign. Upon successful submission, users received confirmation that they had been entered into the draw for a chance to win exciting prizes, including laptops and tablets.<br><br>The microsite was designed with a mobile-first approach to ensure seamless participation via QR scan, fast form submission, and reliable entry management. Built to handle high campaign traffic during the Ramadan season, the platform ensured secure data collection, smooth user experience, and efficient draw management aligned with Galaxy’s festive campaign theme.",
    features: [
      "QR Code–Based Campaign Entry",
      "Ramadan Themed Campaign Experience",
      "Simple User Entry Form",
      "Mobile-First Responsive Design",
      "High-Volume Participation Handling",
      "Secure Customer Data Collection",
      "KSA-Only Campaign Logic",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/ramadan_jewels1.webp",
      "/works/ramadan_jewels2.webp",
      "/works/ramadan_jewels3.webp",
    ],
    tags: [
          "Microsite",
          "Promotional Campaign",
          "QR Campaign",
          "Ramadan Campaign",
          "FMCG",
          "Saudi Arabia",
          "Customer Engagement",
          "Seasonal Promotion"
    ],
  },
  
  {
    slug: "win-with-persil-microsite",
    title: "Persil Win With Persilâ€ Campaign Microsite GCC Region (2023)",
    subtitle: "Multi-Country Promotional Campaign Platform",
    category: "Micro Sites",
    client: "Persil",
    year: "2023",
    projectType: "microsite",
    mediaSize: "full",
    heroImage: "/works/win-with-persil-header.webp",
    overview:
      "A QR-driven promotional microsite developed for Persil's Win With Persil campaign across GCC countries, designed to engage customers and reward purchases through country-specific mechanics.",
    description:
      "The Win With Persil campaign microsite was built to support a large-scale promotional activation across the GCC region in 2023. Each participating country operated under unique campaign rules, including different prize conditions, coupon values based on local currency, minimum purchase thresholds, and varying campaign durations. Customers who purchased Persil products scanned a QR code on the packaging to access the microsite, where they could view campaign details and submit their entries by uploading purchase receipts. Upon successful submission, the system dynamically allocated random prizes based on real-time availability, including digital discount coupons and high-value rewards such as washing machines. The platform was optimized for mobile use and high traffic, ensuring a seamless, user-friendly experience while maintaining consistent Persil brand messaging across all regions.",
    features: [
       "QR  Campaign Entry",
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
  {
    slug: "gliss-premium-rewards-microsite",
    title: "Gliss Premium Rewards – Scan & Enter Campaign UAE & KSA",
    subtitle: "QR-Based Purchase Validation Promotional Microsite",
    category: "Micro Sites",
    client: "Gliss",
    year: "2025",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/gliss_header.webp",
    overview:
      "A QR-driven promotional microsite developed for Gliss across United Arab Emirates and Saudi Arabia, enabling customers to participate in a premium rewards campaign through purchase-based entry submission.",
    description:
      "The Gliss Premium Rewards campaign microsite was designed to increase customer engagement and drive product purchases across the UAE and Saudi Arabia through a seamless scan-and-enter experience. Customers scanned a QR code from in-store displays or product packaging and were redirected to a mobile-optimized campaign page.<br><br>Participants selected their preferred language (English or Arabic) and completed a submission form by entering their personal details, invoice number, and uploading a clear copy of their purchase receipt. Upon successful submission, users received a confirmation message acknowledging their participation along with the campaign draw date and notification that winners would be contacted directly.<br><br>The platform was built to support high participation across multiple regions, with secure receipt uploads, efficient entry validation, and a mobile-first user experience aligned with Gliss’s premium brand positioning across GCC markets.",
    features: [
       "QR Code–Based Campaign Entry",
        "UAE & KSA Campaign Deployment",
        "Bilingual Interface (English & Arabic)",
        "Receipt Upload & Invoice Validation",
        "Secure Entry Submission & Confirmation",
        "Mobile-First Responsive Design",
        "High-Volume Participation Handling",
        "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/gliss1.webp",
      "/works/gliss2.webp",
      "/works/gliss3.webp",
    ],
    tags: [ "Microsite",  "Promotional Campaign",  "QR Campaign",  "FMCG",  "GCC",  "Beauty Campaign",  "Customer Engagement"],
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
    slug: "henkel-unlock-big-wins",
    title: "Henkel Unlock Big Wins – GCC Multi-Country Promotional Campaign",
    subtitle: "QR-Based Regional Promotional Microsite for UAE, KSA & Kuwait",
    category: "Micro Sites",
    client: "Henkel",
    year: "2025",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/henkelbts_header.webp",
    overview:
      "A multi-country promotional microsite developed for Henkel across United Arab Emirates, Saudi Arabia, and Kuwait, featuring region-specific participation journeys including prize draws and instant win mechanics.",
    description:
      "The “Unlock Big Wins” campaign microsite was created as a unified promotional platform for Henkel across UAE, Saudi Arabia, and Kuwait, with customized participation flows tailored to each market. Customers accessed the campaign by scanning QR codes placed on promotional materials and product touchpoints, leading them to a mobile-optimized microsite.<br><br>In the UAE and KSA, participants entered the campaign by submitting their basic details through a simple entry form and were automatically entered into a grand prize draw featuring rewards such as one-year tuition fees, MacBook, Nintendo Switch, iPad, and shopping vouchers.<br><br>In Saudi Arabia, users first registered their details to enter a SAR 100 voucher draw without purchase validation. After initial participation, customers were prompted to upload purchase details for Henkel products worth SAR 35 or more to gain additional chances to win premium prizes including tuition fees, electronics, and vouchers.<br><br>In Kuwait, customers scanned the QR code and submitted their purchase details to participate in an instant win system, where prizes were allocated instantly based on availability.<br><br>The platform was engineered to support multiple campaign logics across regions, high participation volumes, secure data capture, and seamless mobile-first user experience while maintaining consistent brand messaging across all GCC markets.",
    features: [
      "QR Code-Based Campaign Access",
      "Multi-Country Campaign Logic (UAE, KSA, Kuwait)",
      "Region-Specific Entry Journeys",
      "Instant Win System for Kuwait",
      "Two-Stage Participation Flow for KSA",
      "Purchase Validation & Optional Receipt Upload",
      "High-Value Prize Allocation Logic",
      "Mobile-First Responsive Design",
      "Secure Customer Data Collection",
      "High-Volume Entry Handling",
      "Admin Verification & Campaign Reporting"
    ],
    gallery: [
      "/works/henkelbts1.webp",
      "/works/henkelbts2.webp",
      "/works/henkelbts3.webp",
      "/works/henkelbts4.webp",
      "/works/henkelbts5.webp",
      "/works/henkelbts6.webp",
      "/works/henkelbts7.webp",
      "/works/henkelbts8.webp",
      "/works/henkelbts9.webp",
    ],
    tags: ["Micro Site", "Promotional", "Campaign", "GCC Campaign", "Multi-Country Campaign", "Instant Win"],
  },

  {
    slug: "alpro-win-barista-touch-coffee-machine",
    title: "Alpro Win Barista Touch Coffee Machine – Scan & Enter Campaign",
    subtitle: "QR-Based Promotional Microsite with Multi-Language Support",
    category: "Micro Sites",
    client: "Alpro",
    year: "2024",
    projectType: "microsite",
    mediaSize: "full",
    heroImage: "/works/alpro_win_barista_touch_coffee_machine_header.webp",
    overview:
      "A QR-driven promotional microsite developed for Alpro, allowing customers to enter a draw to win a Barista Touch coffee machine through a simple scan-and-submit journey, available in English and Arabic, optimized for both mobile and desktop.",
    description:
      "The Alpro “Win Barista Touch Coffee Machine” campaign microsite was created to drive customer engagement and product interaction across retail channels. Customers scanned a QR code displayed on Alpro product packaging or in-store promotions, which redirected them to a responsive microsite compatible with mobile and desktop devices.<br><br>Participants selected their preferred language (English or Arabic) and completed a submission form with their basic details to enter the prize draw. Upon successful submission, users received confirmation that they were entered into the campaign, with winners being contacted directly by the campaign team.<br><br>The microsite was designed for a seamless user experience, secure data collection, and high participation volume, ensuring smooth entry management while maintaining Alpro’s premium brand identity.",
    features: [
      "QR Code–Based Campaign Entry",
      "Multi-Language Support (English & Arabic)",
      "Mobile & Desktop Responsive Design",
      "Simple User Submission Form",
      "Entry Confirmation Workflow",
      "Secure Customer Data Collection",
      "High-Volume Participation Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/alpro_win_barista_touch_coffee_machine1.webp",
      "/works/alpro_win_barista_touch_coffee_machine2.webp",
      "/works/alpro_win_barista_touch_coffee_machine3.webp",
      
    ],
    tags: ["Micro Site", "Promotional", "Campaign", "GCC Campaign"],
  },
  {
    slug: "ariel-tide-scan-win",
    title: "Ariel & Tide Scan & Win – AED 2,000 Travel Voucher Campaign",
    subtitle: "QR-Based Promotional Microsite for Union Coop Selected Stores",
    category: "Micro Sites",
    client: "Ariel & Tide",
    year: "2022",
    projectType: "microsite",
    mediaSize: "full",
    heroImage: "/works/ariel_tide_header.webp",
    overview:
      "A QR-driven promotional microsite developed for Ariel and Tide, allowing customers to enter a draw for a chance to win a AED 2,000 travel voucher after purchasing AED 80 or more of selected products at Union Coop stores.",
    description:
      "The Ariel & Tide Scan & Win campaign microsite was designed to boost retail engagement and incentivize purchases of Ariel and Tide products at selected Union Coop outlets. Customers who purchased AED 80 or more of participating products scanned a QR code on the packaging or in-store displays, which redirected them to a mobile-optimized campaign page.<br><br>Participants completed a simple submission form with their personal details and purchase information to enter the draw for a chance to win a AED 2,000 travel voucher. Upon submission, users received confirmation of successful entry, and winners were notified directly by the campaign team.<br><br>The microsite was built for mobile-first access, fast form submission, and secure data collection. It supported high-volume participation while providing a smooth and engaging user experience aligned with Ariel and Tide’s brand image.",
    features: [
      "QR Code–Based Campaign Entry",
      "Multi-Language Support (English & Arabic)",
      "Mobile & Desktop Responsive Design",
      "Simple User Submission Form",
      "Entry Confirmation Workflow",
      "Secure Customer Data Collection",
      "High-Volume Participation Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/ariel_tide1.webp",
      "/works/ariel_tide2.webp",
      "/works/ariel_tide3.webp",
      "/works/ariel_tide4.webp",
      
    ],
    tags: ["Micro Site", "Promotional", "Campaign", "GCC Campaign"],
  },
  {
    slug: "palette-get-ready-to-fly-eid",
    title: "Palette – Get Ready to Fly This Eid",
    subtitle: "Palette – Get Ready to Fly This Eid",
    category: "Micro Sites",
    client: "Palette",
    year: "2025",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/palette_ramadan.webp",
    overview:
      "An Eid promotional microsite developed for Palette across the UAE and KSA, allowing customers to scan a QR code, submit their details, and enter a draw for a chance to win their dream trip.",
    description:
      "The “Get Ready to Fly This Eid – Color Your Dream Trip” campaign was launched across the UAE and Kingdom of Saudi Arabia to drive seasonal engagement and strengthen in-store brand interaction. Customers scanned a QR code from promotional materials and were redirected to a dedicated campaign microsite.<br><br>The “Get Ready to Fly This Eid – Color Your Dream Trip” campaign was launched across the UAE and Kingdom of Saudi Arabia to drive seasonal engagement and strengthen in-store brand interaction. Customers scanned a QR code from promotional materials and were redirected to a dedicated campaign microsite.<br><br>The microsite was developed with a mobile-first architecture to ensure seamless QR access, fast form processing, and secure customer data collection. Designed to handle large participation volumes across both markets, the platform supported structured entry management and campaign performance tracking.",
    features: [
     "QR Code–Based Campaign Entry",
      "UAE & KSA Deployment",
      "Bilingual Interface (English & Arabic)",
      "Mobile-First Responsive Design",
      "Simple User Submission Form",
      "Entry Confirmation Workflow",
      "Secure Customer Data Collection",
      "High-Volume Participation Handling",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/palette_ramadan1.webp",
      "/works/palette_ramadan2.webp",
      "/works/palette_ramadan3.webp",
      "/works/palette_ramadan4.webp",
      "/works/palette_ramadan5.webp",
   
    ],
    tags: ["Microsite", "Promotional Campaign", "Retail Promotion", "Customer Engagement", "GCC Campaign"],
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
    tags: ["Micro Site", "Interactive", "Brand"],
  },
  {
    slug: "galaxy-scan-and-enter",
    title: "Galaxy Scan & Enter – Gadget Giveaway Campaign",
    subtitle: "QR-Based Prize Draw Promotional Microsite",
    category: "Micro Sites",
    client: "Galaxy",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/galaxy_laptop_header.webp",
    overview:
      "A QR-driven promotional microsite for Galaxy in Saudi Arabia enabling customers to participate in a product-based entry campaign for a chance to win gadgets and training courses.",
    description:
      "This Galaxy promotional microsite was developed to increase customer engagement and drive in-store participation across Saudi Arabia through a simple scan-and-enter mechanism. Customers scanned a QR code from campaign touchpoints and were redirected to a mobile-optimized microsite where they could submit their entry by providing basic personal details and required information.<br><br>Once the form was completed and submitted, participants were successfully entered into a grand prize draw for a chance to win laptops, tablets, and professional training courses. The platform was designed for seamless mobile participation, secure data capture, and high-volume entry handling while maintaining Galaxy’s premium brand experience throughout the campaign journey.",
    features: [
      "QR Code–Based Campaign Entry",
      "Simple User Registration Form",
      "Mobile-First Responsive Design",
      "High-Volume Participation Handling",
      "Secure Customer Data Collection",
      "KSA-Only Campaign Logic",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/galaxy_laptop1.webp",
      "/works/galaxy_laptop2.webp",
      "/works/galaxy_laptop3.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "Photo Upload Campaign", "Retail Promotion", "Customer Engagement"],
  },
  {
    slug: "henkel-home-fresh-scan-and-enter",
    title: "Henkel Home Fresh – Scan & Enter Campaign",
    subtitle: "QR-Based Promotional Microsite for Prize Draw",
    category: "Micro Sites",
    client: "Henkel",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/henkel_homefresh_header.webp",
    overview:
      "A QR-driven promotional microsite developed for Henkel, allowing customers to participate in the Home Fresh campaign by submitting their details to enter a prize draw.",
    description:
      "The Henkel Home Fresh campaign microsite was created to engage customers and drive product interaction through a simple scan-and-enter mechanism. Customers accessed the campaign by scanning a QR code from in-store materials or product packaging, which directed them to a mobile-optimized microsite.<br><br>Participants filled out a basic entry form with their details to enter the draw for a chance to win Henkel Home Fresh prizes. After submission, users received a confirmation message acknowledging their entry and informing them that winners would be contacted directly.<br><br>The microsite was designed with a mobile-first approach to ensure seamless participation, secure data collection, and efficient draw management, providing a smooth user experience while reinforcing Henkel’s brand presence.",
    features: [
      "QR Code–Based Campaign Entry",
      "Simple User Registration Form",
      "Mobile-First Responsive Design",
      "High-Volume Participation Handling",
      "Secure Customer Data Collection",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/henkel_homefresh1.webp",
      "/works/henkel_homefresh2.webp",
      "/works/henkel_homefresh3.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "Photo Upload Campaign", "Retail Promotion", "Customer Engagement"],
  },
  {
    slug: "hisense-fifa-2022-scan-and-win",
    title: "Hisense FIFA 2022 – Scan & Win Match Ticket Campaign",
    subtitle: "QR-Based Multi-Country Promotional Microsite for FIFA Ticket Draw",
    category: "Micro Sites",
    client: "Hisense",
    year: "2021-2022",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/hisense-header.webp",
    overview:
      "A multi-region promotional microsite developed for Hisense during FIFA World Cup 2022, enabling customers across GCC and Middle East markets to enter a draw for match tickets through a simple QR-based submission process.",
    description:
      "The Hisense FIFA 2022 campaign microsite was launched across Bahrain, Iraq, Kuwait, Oman, Qatar, and the UAE to amplify brand visibility during the FIFA World Cup season. Customers accessed the campaign by scanning a QR code from retail outlets and promotional displays, leading them to a mobile-optimized entry page.<br><br>Participants completed a simple submission form with their basic details to enter the grand prize draw for a chance to win FIFA match tickets. Upon submission, users received confirmation of successful entry and were automatically enrolled in the draw.<br><br>The platform was designed to handle high campaign traffic across multiple regions while maintaining a seamless mobile-first experience. With secure data collection, fast entry processing, and centralized draw management, the microsite supported large-scale participation while aligning with Hisense’s global sports sponsorship campaign.",
    features: [
      "QR Code–Based Campaign Entry",
      "Multi-Country Campaign Deployment",
      "Simple User Registration Form",
      "Mobile-First Responsive Design",
      "High-Volume Participation Handling",
      "Secure Customer Data Collection",
      "Campaign Analytics & Reporting"
    ],
    gallery: [
      "/works/hisense1.webp",
      "/works/hisense2.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "FIFA Campaign", "Multi-Country Campaign", "Customer Engagement"],
  },
  {
    slug: "pert-scan-win-upgrade",
    title: "Pert – Scan, Win & Upgrade Campaign",
    subtitle: "Enter the Draw & Unlock Bigger Rewards",
    category: "Micro Sites",
    client: "Pert",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/pert_header.webp",
    overview:
      "A dual-stage QR promotional microsite developed for Pert, allowing customers to enter a base draw for a 100 SAR YouGotAGift voucher and unlock a second-tier prize opportunity to win an iPhone 16 and additional rewards upon product purchase validation.",
    description:
      "A dual-stage QR promotional microsite developed for Pert, allowing customers to enter a base draw for a 100 SAR YouGotAGift voucher and unlock a second-tier prize opportunity to win an iPhone 16 and additional rewards upon product purchase validation.<br><br>Upon submission, participants were entered into a draw for a chance to win a 100 SAR YouGotAGift voucher and received a thank-you confirmation message.<br><br>As part of the second-stage incentive, users were prompted with an optional upgrade: “If you purchased a Pert product, click here to get a chance to win an iPhone 16 and many more prizes.”<br><br>As part of the second-stage incentive, users were prompted with an optional upgrade: “If you purchased a Pert product, click here to get a chance to win an iPhone 16 and many more prizes.<br><br>The microsite was built with a mobile-first framework, secure receipt upload functionality, structured database logging for both entry stages, and comprehensive campaign tracking to manage eligibility and prize allocation efficiently.",
    features: [
      "QR Code–Based Campaign Entry",
      "Bilingual Interface (English & Arabic)",
      "Two-Tier Participation Mechanism",
      "100 SAR YouGotAGift Voucher Draw",
      "Purchase Validation Workflow (Invoice & Receipt Upload)",
      "Grand Prize Draw (iPhone 16 & Additional Prizes)",
      "Mobile-First Responsive Design",
      "Secure Data & Image Upload Handling",
      "Automated Entry Confirmation Messages",
      "Campaign Analytics"
    ],
    gallery: [
      "/works/pert1.webp",
      "/works/pert2.webp",
      "/works/pert3.webp",
      "/works/pert4.webp",
      "/works/pert5.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "Two-Stage Promotion", "Purchase Validation", "Customer Engagement"],
  },
  {
    slug: "shehrazade-ramadan",
    title: "Shehrazade – Sweeten Your Ramadan",
    subtitle: "Shehrazade – Sweeten Your Ramadan",
    category: "Micro Sites",
    client: "Shehrazade",
    year: "2024",
    projectType: "microsite",
    mediaSize: "mobile",
    heroImage: "/works/shehrazade.webp",
    overview:
      "A festive Ramadan promotional microsite developed for Shehrazade in the UAE, allowing customers to scan a QR code, submit their details, and participate in a seasonal campaign.",
    description:
      "The Shehrazade “Sweeten Your Ramadan” campaign was designed to engage customers during the holy month with a simple and interactive QR-based experience. Customers scanned a QR code from promotional packaging or in-store displays, selected their preferred language, and completed a submission form with their personal details.<br><br>The Shehrazade “Sweeten Your Ramadan” campaign was designed to engage customers during the holy month with a simple and interactive QR-based experience. Customers scanned a QR code from promotional packaging or in-store displays, selected their preferred language, and completed a submission form with their personal details.",
    features: [
      "QR Code–Based Campaign Entry",
      "Bilingual Interface (English & Arabic)",
      "Mobile-First Responsive Design",
      "Secure Data & Image Upload Handling",
      "Campaign Analytics"
    ],
    gallery: [
      "/works/shehrazade1.webp",
      "/works/shehrazade2.webp",
      "/works/shehrazade3.webp",
      "/works/shehrazade4.webp",
      "/works/shehrazade5.webp",
    ],
    tags: ["Microsite", "Promotional Campaign", "Ramadan Campaign",
"FMCG","UAE Campaign","Seasonal Promotion", "Customer Engagement"],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
}

