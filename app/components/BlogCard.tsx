import Image from "next/image";
import Link from "next/link";
import type { WPPost } from "@/types/wordpress";
import { getFeaturedImage, getAuthorName, getCategories, formatDate, readingTime } from "@/lib/wordpress";

interface BlogCardProps {
  post: WPPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const categories = getCategories(post);
  const mins = readingTime(post.content.rendered);
  const date = formatDate(post.date);

  const excerpt = post.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .replace(/\[&hellip;\]/g, "…")
    .trim();

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__image-wrap">
        {image ? (
          <Image
            src={image}
            alt={post.title.rendered.replace(/<[^>]+>/g, "")}
            fill
            className="blog-card__image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="blog-card__image-placeholder" />
        )}
        {categories[0] && (
          <span className="blog-card__category">{categories[0]}</span>
        )}
      </div>

      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__date">{date}</span>
          <span className="blog-card__dot">·</span>
          <span className="blog-card__reading">{mins} min read</span>
        </div>

        <h3
          className="blog-card__title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <p className="blog-card__excerpt">{excerpt.slice(0, 120)}{excerpt.length > 120 ? "…" : ""}</p>

        <div className="blog-card__footer">
          <span className="blog-card__author">{author}</span>
          <span className="blog-card__arrow">→</span>
        </div>
      </div>
    </Link>
  );
}
