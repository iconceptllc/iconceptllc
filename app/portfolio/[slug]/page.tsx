"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import LeftSidebar from "../../components/LeftSidebar";
import Footer from "../../components/Footer";
import {
  getProjectBySlug,
  portfolioProjects,
  type PortfolioProject,
} from "@/data/portfolio";

function StackingCards({ images, title }: { images: string[]; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number[]>(
    images.map(() => 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const cards = container.querySelectorAll(".stack-card");
      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const newProgress = images.map((_, index) => {
        const card = cards[index] as HTMLElement;
        if (!card) return 0;

        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        const triggerPoint = viewportHeight * 0.7;

        // Calculate progress: 0 = card below viewport, 1 = card at final position
        if (cardTop > viewportHeight) return 0;
        if (cardTop <= triggerPoint - 200) return 1;

        const progress = 1 - (cardTop - (triggerPoint - 200)) / (viewportHeight - (triggerPoint - 200));
        return Math.max(0, Math.min(1, progress));
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  return (
    <div className="stacking-cards" ref={containerRef}>
      {images.map((src, index) => {
        const progress = scrollProgress[index];
        // Scale from 1.15 to 1 as progress goes 0 to 1
        const scale = 1.15 - progress * 0.15;
        // Opacity from 0.6 to 1
        const opacity = 0.6 + progress * 0.4;

        return (
          <div
            key={index}
            className="stack-card"
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
              zIndex: index + 1,
            }}
          >
            <div className="card-inner">
              <Image
                src={src}
                alt={`${title} screen ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .stacking-cards {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 40px 0;
        }

        .stack-card {
          position: sticky;
          top: 100px;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          will-change: transform, opacity;
        }

        .card-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          max-height: 80vh;
          border-radius: 24px;
          overflow: hidden;
          background: #1a1a1a;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 768px) {
          .stack-card {
            top: 80px;
          }

          .card-inner {
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="not-found">
        <LeftSidebar />
        <div className="main-container">
          <div className="content-wrapper">
            <div className="left-spacer" />
            <main className="right-content">
              <div className="error-content">
                <h1>Project Not Found</h1>
                <p>The project you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/portfolio" className="back-link">
                  Back to Portfolio
                </Link>
              </div>
              <Footer />
            </main>
          </div>
        </div>
        <style jsx>{`
          .not-found {
            min-height: 100vh;
            background: #0b0b0b;
            color: white;
          }
          .main-container {
            width: 80%;
            max-width: 1600px;
            margin: 0 auto;
          }
          .content-wrapper {
            display: flex;
            gap: 12px;
          }
          .left-spacer {
            flex-shrink: 0;
            width: 300px;
          }
          .right-content {
            flex: 1;
            padding: 20px 0;
          }
          .error-content {
            padding: 100px 0;
            text-align: center;
          }
          .error-content h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
          }
          .error-content p {
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 24px;
          }
          .back-link {
            display: inline-block;
            padding: 12px 24px;
            background: #7b61ff;
            color: white;
            border-radius: 999px;
            text-decoration: none;
          }
          @media (max-width: 1024px) {
            .left-spacer {
              display: none;
            }
            .right-content {
              padding-top: 80px;
            }
          }
        `}</style>
      </div>
    );
  }

  // Determine content width based on mediaSize
  const getContentWidth = () => {
    switch (project.mediaSize) {
      case "mobile":
        return "60%";
      case "tablet":
        return "80%";
      case "full":
      default:
        return "100%";
    }
  };

  return (
    <div className="portfolio-detail">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            {/* Hero Section */}
            <header className="pg-hero">
              <div className="hero-top">
                <div className="hero-left">
                  <span className="hero-tag">Project Details</span>
                </div>
                <div className="hero-right">
                  <span className="category-label">{project.category}</span>
                  <h1>{project.title}</h1>
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Client</span>
                      <span className="meta-value">{project.client}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Year</span>
                      <span className="meta-value">{project.year}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Category</span>
                      <span className="meta-value">{project.category}</span>
                    </div>
                    {project.liveUrl && (
                      <div className="meta-item">
                        <span className="meta-label">Live</span>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="meta-link"
                        >
                          View Site
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hero Media */}
              <div className="hero-media">
                {project.heroVideo ? (
                  <video autoPlay muted loop playsInline>
                    <source src={project.heroVideo} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                )}
              </div>
            </header>

            {/* Overview Section */}
            <section className="overview-section">
              <div className="overview-grid">
                <div className="overview-label">
                  <h6>Project Overview</h6>
                </div>
                <div className="overview-content">
                  <p className="overview-text">{project.overview}</p>
                  <p className="description-text">{project.description}</p>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
              <div className="features-grid">
                <div className="features-label">
                  <h6>Key Features</h6>
                </div>
                <div className="features-list">
                  {project.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery Section - Stacking Cards for Image Projects */}
            {project.gallery.length > 0 && (
              <section className="gallery-section">
                <div
                  className="gallery-container"
                  style={{ maxWidth: getContentWidth(), margin: "0 auto" }}
                >
                  <StackingCards
                    images={project.gallery}
                    title={project.title}
                  />
                </div>
              </section>
            )}

            {/* Video Section for Video Projects */}
            {project.videoSrc && project.projectType === "video" && (
              <section className="video-section">
                <div className="video-container">
                  <video autoPlay muted loop playsInline controls>
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </section>
            )}

            {/* Navigation to other projects */}
            <section className="project-nav">
              <Link href="/portfolio" className="nav-link back">
                <span className="nav-arrow">←</span>
                <span>All Projects</span>
              </Link>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <style jsx>{`
        .portfolio-detail {
          min-height: 100vh;
          background: #0b0b0b;
          color: white;
        }

        .main-container {
          width: 80%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .content-wrapper {
          display: flex;
          gap: 12px;
        }

        .left-spacer {
          flex-shrink: 0;
          width: 300px;
        }

        .right-content {
          flex: 1;
          max-width: 1226px;
          padding: 20px 0;
        }

        /* ===== Hero Section ===== */
        .pg-hero {
          margin-bottom: 60px;
        }

        .hero-top {
          display: flex;
          gap: 30px;
          margin-bottom: 40px;
          align-items: flex-start;
        }

        .hero-left {
          flex-shrink: 0;
          padding-top: 8px;
        }

        .hero-tag {
          display: inline-flex;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-right {
          flex: 1;
        }

        .category-label {
          display: inline-block;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #7b61ff;
          margin-bottom: 12px;
        }

        .hero-right h1 {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 600;
          line-height: 1.15;
          margin: 0 0 30px;
        }

        .project-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .meta-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.5);
        }

        .meta-value {
          font-size: 1rem;
          font-weight: 500;
        }

        .meta-link {
          font-size: 1rem;
          font-weight: 500;
          color: #7b61ff;
          text-decoration: none;
        }

        .meta-link:hover {
          text-decoration: underline;
        }

        .hero-media {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 24px;
          overflow: hidden;
        }

        .hero-media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ===== Overview Section ===== */
        .overview-section {
          padding: 60px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
        }

        .overview-label h6 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .overview-text {
          font-size: 1.5rem;
          line-height: 1.5;
          margin: 0 0 30px;
          font-weight: 500;
        }

        .description-text {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        /* ===== Features Section ===== */
        .features-section {
          padding: 60px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .features-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
        }

        .features-label h6 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #141414;
          border-radius: 12px;
        }

        .feature-number {
          font-size: 0.8rem;
          color: #7b61ff;
          font-weight: 600;
        }

        .feature-text {
          font-size: 1rem;
        }

        /* ===== Gallery Section ===== */
        .gallery-section {
          padding: 60px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* ===== Video Section ===== */
        .video-section {
          padding: 60px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-container {
          border-radius: 24px;
          overflow: hidden;
        }

        .video-container video {
          width: 100%;
          display: block;
        }

        /* ===== Project Navigation ===== */
        .project-nav {
          padding: 60px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: center;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background: white;
          color: #0b0b0b;
          border-color: white;
        }

        .nav-arrow {
          font-size: 1.2rem;
        }

        /* ===== Responsive ===== */
        @media (max-width: 1024px) {
          .main-container {
            width: 90%;
          }

          .left-spacer {
            display: none;
          }

          .right-content {
            padding-top: 80px;
          }

          .overview-grid,
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .features-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-top {
            flex-direction: column;
            gap: 16px;
          }

          .hero-right h1 {
            font-size: 2rem;
          }

          .project-meta {
            gap: 24px;
          }

          .hero-media {
            height: 300px;
            border-radius: 16px;
          }

          .overview-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}
