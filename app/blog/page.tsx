import type { Metadata } from "next";
import Link from "next/link";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { getPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | iConcept",
  description:
    "Insights, tips, and creative inspiration from the iConcept team — Dubai's leading creative and digital agency.",
  openGraph: {
    title: "Blog | iConcept",
    description:
      "Insights, tips, and creative inspiration from the iConcept team — Dubai's leading creative and digital agency.",
    url: "https://iconceptme.com/blog",
    siteName: "iConcept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | iConcept",
    description: "Insights, tips, and creative inspiration from the iConcept team.",
  },
  alternates: { canonical: "https://iconceptme.com/blog" },
};

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page ?? "1", 10);

  let posts = [];
  let totalPages = 1;

  try {
    const data = await getPosts(currentPage);
    posts = data.posts;
    totalPages = data.totalPages;
  } catch {
    // Show empty state on error
  }

  return (
    <div className="service-detail-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">

            {/* Banner */}
            <div className="blog-page-banner">
              <Link href="/" className="back-pill">
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M17 11.5H6.9365M6.9365 11.5L11.4365 7M6.9365 11.5L11.4365 16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Home
              </Link>
              <div className="blog-page-banner__overlay" />
              <div className="blog-page-banner__text">
                <span className="blog-page-banner__label">Our Journal</span>
                <h1 className="blog-page-banner__title">
                  Ideas. Insights.{" "}
                  <span className="gradient-text">Inspiration.</span>
                </h1>
                <p className="blog-page-banner__sub">
                  Stories and strategies from the iConcept creative studio.
                </p>
              </div>
            </div>

            {/* Grid */}
            <section className="blog-section">
              {posts.length === 0 ? (
                <div className="blog-empty">
                  <p>No posts found. Check back soon.</p>
                </div>
              ) : (
                <div className="blog-grid">
                  {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <nav className="blog-pagination">
                  {currentPage > 1 && (
                    <Link href={`/blog?page=${currentPage - 1}`} className="blog-pagination__btn">
                      ← Previous
                    </Link>
                  )}
                  <div className="blog-pagination__pages">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <Link
                        key={p}
                        href={`/blog?page=${p}`}
                        className={`blog-pagination__page${p === currentPage ? " active" : ""}`}
                      >
                        {p}
                      </Link>
                    ))}
                  </div>
                  {currentPage < totalPages && (
                    <Link href={`/blog?page=${currentPage + 1}`} className="blog-pagination__btn">
                      Next →
                    </Link>
                  )}
                </nav>
              )}
            </section>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
