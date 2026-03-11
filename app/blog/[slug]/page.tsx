import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeftSidebar from "../../components/LeftSidebar";
import Footer from "../../components/Footer";
import BlogContent from "../../components/BlogContent";
import {
  getPost,
  getAllPostSlugs,
  getFeaturedImage,
  getAuthorName,
  getCategories,
  formatDate,
  readingTime,
} from "@/lib/wordpress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found | iConcept" };
  }

  const title = post.title.rendered.replace(/<[^>]+>/g, "");
  const description = post.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .replace(/\[&hellip;\]/g, "…")
    .trim()
    .slice(0, 160);
  const image = getFeaturedImage(post);
  const canonical = `https://iconceptme.com/blog/${slug}`;

  return {
    title: `${title} | iConcept Blog`,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "iConcept",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
    alternates: { canonical },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const categories = getCategories(post);
  const mins = readingTime(post.content.rendered);
  const date = formatDate(post.date);
  const title = post.title.rendered.replace(/<[^>]+>/g, "");

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: post.date,
    dateModified: post.modified,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "iConcept",
      logo: {
        "@type": "ImageObject",
        url: "https://iconceptme.com/imgs/iconcept-logo.webp",
      },
    },
    ...(image && { image }),
    url: `https://iconceptme.com/blog/${slug}`,
  };

  return (
    <div className="page-wrapper">
      <LeftSidebar />

      <main className="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="blog-post">
          {/* Hero image */}
          {image && (
            <div className="blog-post__hero">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="blog-post__hero-img"
                sizes="100vw"
              />
              <div className="blog-post__hero-overlay" />
            </div>
          )}

          <div className="blog-post__container">
            {/* Breadcrumb */}
            <nav className="blog-post__breadcrumb">
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{title}</span>
            </nav>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="blog-post__categories">
                {categories.map((cat) => (
                  <span key={cat} className="blog-post__category">
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1
              className="blog-post__title"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Meta */}
            <div className="blog-post__meta">
              <span className="blog-post__author">{author}</span>
              <span className="blog-post__dot">·</span>
              <span className="blog-post__date">{date}</span>
              <span className="blog-post__dot">·</span>
              <span className="blog-post__reading">{mins} min read</span>
            </div>

            {/* Content */}
            <BlogContent html={post.content.rendered} />

            {/* Back link */}
            <div className="blog-post__back">
              <Link href="/blog" className="blog-post__back-link">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </div>
  );
}
