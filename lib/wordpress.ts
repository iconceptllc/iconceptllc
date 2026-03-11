import type { WPPost, WPPostsResponse } from "@/types/wordpress";

const WP_API = "https://blog.iconceptme.com/wp-json/wp/v2";
const PER_PAGE = 9;

export async function getPosts(page = 1): Promise<WPPostsResponse> {
  const res = await fetch(
    `${WP_API}/posts?_embed&per_page=${PER_PAGE}&page=${page}&status=publish`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  const posts: WPPost[] = await res.json();
  const total = parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "1", 10);

  return { posts, total, totalPages };
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${WP_API}/posts?_embed&slug=${encodeURIComponent(slug)}&status=publish`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) return null;

  const posts: WPPost[] = await res.json();
  return posts[0] ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&status=publish&fields=slug`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) return [];

  const posts: Pick<WPPost, "slug">[] = await res.json();
  return posts.map((p) => p.slug);
}

export function getFeaturedImage(post: WPPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  return (
    media.media_details?.sizes?.large?.source_url ??
    media.media_details?.sizes?.medium?.source_url ??
    media.source_url ??
    null
  );
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name ?? "iConcept";
}

export function getCategories(post: WPPost): string[] {
  const terms = post._embedded?.["wp:term"]?.[0];
  return terms?.map((t) => t.name) ?? [];
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function readingTime(content: string): number {
  const text = content.replace(/<[^>]+>/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
