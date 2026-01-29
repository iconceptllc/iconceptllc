"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";
import { getProjectsByCategory } from "@/data/portfolio";

const categories = [
  "All",
  "Video Production",
  "CGI & 3D",
  "Web Games",
  "Micro Sites",
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          style={{
            objectFit: "cover",
            opacity: i === activeIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = getProjectsByCategory(activeCategory);

  return (
    <div className="portfolio-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            {/* Hero Section */}
            <header className="pg-hero">
              <div className="hero-top">
                <div className="hero-left">
                  <span className="hero-tag">Portfolio</span>
                </div>
                <div className="hero-right">
                  <h1>
                    Our Creative <br /> Works
                  </h1>
                </div>
              </div>
              <p className="hero-description">
                Discover the outstanding projects that have shaped our legacy.
                Each project represents our commitment to creativity,
                innovation, and delivering exceptional results for our clients.
              </p>
            </header>

            {/* Category Filter */}
            <section className="filter-section">
              <div className="filter-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-tab ${activeCategory === category ? "active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* Portfolio Grid */}
            <section className="portfolio-grid-section">
              <div className="portfolio-grid">
                {filteredItems.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    className="portfolio-card-link"
                  >
                    <article className="portfolio-card">
                      <div className="card-media">
                        {project.heroVideo ? (
                          <video autoPlay muted loop playsInline>
                            <source src={project.heroVideo} type="video/mp4" />
                          </video>
                        ) : project.gallery.length > 0 ? (
                          <ImageCarousel
                            images={project.gallery}
                            alt={project.title}
                          />
                        ) : (
                          <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        )}
                      </div>
                      <div className="card-content">
                        <span className="card-category">{project.category}</span>
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-description">{project.overview}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <style jsx>{`
        .portfolio-page {
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
          margin-bottom: 40px;
        }

        .hero-top {
          display: flex;
          gap: 30px;
          margin-bottom: 30px;
          align-items: flex-start;
        }

        .hero-left {
          flex-shrink: 0;
          padding-top: 8px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
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

        .hero-right h1 {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 600;
          line-height: 1.15;
          margin: 0;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          max-width: 700px;
          margin: 0;
        }

        /* ===== Filter Section ===== */
        .filter-section {
          margin-bottom: 40px;
        }

        .filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .filter-tab {
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-tab:hover {
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
        }

        .filter-tab.active {
          background: white;
          color: #0b0b0b;
          border-color: white;
        }

        /* ===== Portfolio Grid ===== */
        .portfolio-grid-section {
          margin-bottom: 60px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .portfolio-page :global(.portfolio-card-link) {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .portfolio-card {
          background: #141414;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease;
          height: 100%;
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
        }

        .card-media {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .card-media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 24px;
        }

        .card-category {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #7b61ff;
          margin-bottom: 12px;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 12px;
          line-height: 1.3;
        }

        .card-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero-top {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 20px;
          }

          .hero-right h1 {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .filter-tabs {
            gap: 8px;
          }

          .filter-tab {
            padding: 8px 16px;
            font-size: 0.8rem;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card-media {
            height: 250px;
          }

          .card-content {
            padding: 20px;
          }

          .card-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}
