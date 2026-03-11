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

  if (!post) return { title: "Post Not Found | iConcept" };

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.rendered.replace(/<[^>]+>/g, ""),
    datePublished: post.date,
    dateModified: post.modified,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "iConcept",
      logo: { "@type": "ImageObject", url: "https://iconceptme.com/imgs/iconcept-logo.webp" },
    },
    ...(image && { image }),
    url: `https://iconceptme.com/blog/${slug}`,
  };

  return (
    <div className="service-detail-page">
      <LeftSidebar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">

            {/* Hero image */}
            <div className={`bp-hero${!image ? " bp-hero--no-image" : ""}`}>
              {image && (
                <Image
                  src={image}
                  alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                  fill
                  priority
                  className="bp-hero__img"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              )}
              {image && <div className="bp-hero__overlay" />}
              <Link href="/blog" className="back-pill">
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M17 11.5H6.9365M6.9365 11.5L11.4365 7M6.9365 11.5L11.4365 16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Blog
              </Link>
            </div>

            {/* Article */}
            <article className="bp-article">
              {categories.length > 0 && (
                <div className="bp-categories">
                  {categories.map((cat) => (
                    <span key={cat} className="bp-category">{cat}</span>
                  ))}
                </div>
              )}

              <h1
                className="bp-title"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <div className="bp-meta">
                <span className="bp-author">{author}</span>
                <span className="bp-dot">·</span>
                <span>{date}</span>
                <span className="bp-dot">·</span>
                <span>{mins} min read</span>
              </div>

              <div className="bp-divider" />

              <BlogContent html={post.content.rendered} />

              <div className="bp-back">
                <Link href="/blog" className="bp-back-link">
                  ← Back to Blog
                </Link>
              </div>
            </article>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
