export interface WPImage {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      medium?: { source_url: string; width: number; height: number };
      large?: { source_url: string; width: number; height: number };
      full?: { source_url: string; width: number; height: number };
    };
  };
}

export interface WPAuthor {
  id: number;
  name: string;
  slug: string;
  avatar_urls: {
    "24"?: string;
    "48"?: string;
    "96"?: string;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WPPost {
  id: number;
  slug: string;
  status: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  author: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: WPImage[];
    author?: WPAuthor[];
    "wp:term"?: WPCategory[][];
  };
}

export interface WPPostsResponse {
  posts: WPPost[];
  total: number;
  totalPages: number;
}
