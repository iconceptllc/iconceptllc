"use client";

import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    title: "Web Solutions",
    description:
      "We craft stunning, high-performance websites and web applications tailored to your business needs. From UI/UX design to full-stack development.",
    tags: ["UI/UX Design", "Web Development", "E-commerce", "CMS Solutions"],
    image: "/imgs/web-apps.webp",
    href: "/services/web-solutions",
  },
  {
    number: "02",
    title: "Marketing Services",
    description:
      "Maximise your online presence with our performance-driven digital marketing services. We help brands grow through strategic campaigns.",
    tags: ["Digital Marketing", "Social Media", "SEO", "Email Marketing"],
    image: "/imgs/marketing-services.webp",
    href: "/services/marketing-services",
  },
  {
    number: "03",
    title: "Content Production",
    description:
      "From ad films to corporate videos, we produce compelling visual content that tells your brand story and captures your audience.",
    tags: ["Ad Film Production", "CGI & Motion Graphics", "Audio Video Editing"],
    image: "/imgs/content-production.webp",
    href: "/services/content-production",
  },
  {
    number: "04",
    title: "3D & Motion",
    description:
      "Bring your products and ideas to life with stunning 3D animations, product visualizations, and explainer videos.",
    tags: ["2D & 3D Animation", "Product Visualization", "Explainer Videos"],
    image: "/imgs/3d.webp",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            {/* Hero Section */}
            <header className="pg-hero">
              <div className="hero-top">
                <div className="hero-left">
                  <span className="hero-tag">Services</span>
                </div>
                <div className="hero-right">
                  <h1>
                    We design experiences <br /> that are beautiful &amp; functional.
                  </h1>
                </div>
              </div>
              <p className="hero-description">
                From web development to motion graphics, we offer end-to-end
                creative and digital solutions that help your brand stand out
                and grow.
              </p>
            </header>

            {/* Services Grid */}
            <section className="services-grid-section">
              <div className="services-grid">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="service-card-link"
                  >
                    <article className="service-card">
                      <div className="card-media">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="card-content">
                        <span className="card-number">{service.number}</span>
                        <h3 className="card-title">{service.title}</h3>
                        <p className="card-description">{service.description}</p>
                        <div className="card-tags">
                          {service.tags.map((tag, i) => (
                            <span key={i} className="card-tag">{tag}</span>
                          ))}
                        </div>
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
        .services-page {
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

        /* ===== Services Grid ===== */
        .services-grid-section {
          margin-bottom: 60px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .services-page :global(.service-card-link) {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .service-card {
          background: #141414;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .card-media {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .card-content {
          padding: 24px;
        }

        .card-number {
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
          margin: 0 0 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .card-tag {
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.7);
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

          .services-grid {
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

          .services-grid {
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
