"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";
import { cdn } from "@/lib/cloudinary";

const services = [
  {
    number: "01",
    title: "Web Solutions",
    description:
      "We craft stunning, high-performance websites and web applications tailored to your business needs. From UI/UX design to full-stack development.",
    tags: ["UI/UX Design", "Web Development", "E-commerce", "CMS Solutions"],
    image: cdn("/imgs/serv/s1.jpg"),
  },
  {
    number: "02",
    title: "Marketing Services",
    description:
      "Maximise your online presence with our performance-driven digital marketing services. We help brands grow through strategic campaigns.",
    tags: [
      "Digital Marketing",
      "Social Media",
      "SEO",
      "Email Marketing",
    ],
    image: cdn("/imgs/serv/s2.jpg"),
  },
  {
    number: "03",
    title: "Content Production",
    description:
      "From ad films to corporate videos, we produce compelling visual content that tells your brand story and captures your audience.",
    tags: [
      "Ad Film Production",
      "CGI & Motion Graphics",
      "Audio Video Editing",
    ],
    image: cdn("/imgs/serv/s3.jpg"),
  },
  {
    number: "04",
    title: "3D & Motion",
    description:
      "Bring your products and ideas to life with stunning 3D animations, product visualizations, and explainer videos.",
    tags: [
      "2D & 3D Animation",
      "Product Visualization",
      "Explainer Videos",
    ],
    image: cdn("/imgs/serv/s4.jpg"),
  },
];

const marqueeItems = [
  "Web Solutions",
  "Marketing",
  "Content Production",
  "3D & Motion",
  "Branding",
  "E-commerce",
];

const stats = [
  { value: "2k+", label: "Successfully\ncompleted projects" },
  { value: "80%", label: "Of customers recommend\nour services" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="services-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            {/* Hero Section */}
            <section className="hero">
              <div className="hero-top">
                <span className="hero-tag">Our Services</span>
                <h1>
                  We design experiences that are beautiful &amp; functional.
                </h1>
              </div>

              <div className="hero-stats">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`stat-card ${i === 0 ? "stat-accent" : "stat-dark"}`}
                  >
                    <h2 className="stat-value">{stat.value}</h2>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Services Section */}
            <section className="interactive-services">
              <div className="sec-head">
                <div className="sec-head-row">
                  <h6>OUR CAPABILITIES</h6>
                  <Link href="/contact" className="see-pricing-link">
                    <span>GET IN TOUCH</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="interactive-grid">
                <div className="tab-image-area">
                  <div className="tab-image">
                    <Image
                      src={services[activeTab].image}
                      alt={services[activeTab].title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="tab-description">
                    <p>{services[activeTab].description}</p>
                    <Link
                      href="/contact"
                      className="read-more-btn"
                    >
                      <span>READ MORE</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="tab-titles">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`tab-title ${activeTab === index ? "active" : ""}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <h3>{service.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Marquee Section */}
            <section className="marquee-section">
              <div className="marquee-track">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <div key={i} className="marquee-item">
                    <h4>{item}</h4>
                    <span className="marquee-star">*</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Cards Section */}
            <section className="service-cards">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card card-variant-${index}`}
                >
                  <div className="card-content">
                    <div className="card-text">
                      <h6 className="card-number">{service.number}</h6>
                      <h2 className="card-title">{service.title}</h2>
                      <p className="card-desc">{service.description}</p>
                      <div className="card-tags">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="card-image">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* CTA Section */}
            <section className="cta-section">
              <div className="cta-content">
                <div>
                  <h2>
                    Let&apos;s Start <br /> your project
                  </h2>
                </div>
                <Link href="/contact" className="cta-btn">
                  <span>GET IN TOUCH</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </Link>
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
          overflow-x: hidden;
        }

        .main-container {
          width: 80%;
          max-width: 1600px;
          margin: 0 auto;
          overflow: hidden;
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
          min-width: 0;
          max-width: 1226px;
          padding: 20px 0;
          overflow: hidden;
        }

        /* ===== Hero ===== */
        .hero {
          background: linear-gradient(135deg, #111 0%, #0b0b0b 100%);
          border-radius: 18px;
          padding: 70px 50px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        .hero-top {
          margin-bottom: 50px;
        }

        .hero-tag {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: 3.4rem;
          font-weight: 500;
          line-height: 1.15;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .stat-card {
          border-radius: 20px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 200px;
          justify-content: flex-end;
        }

        .stat-accent {
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
        }

        .stat-dark {
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-value {
          font-size: 4rem;
          font-weight: 300;
          font-family: "Mozilla Text", sans-serif;
        }

        .stat-label {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          white-space: pre-line;
        }

        /* ===== Interactive Services ===== */
        .interactive-services {
          background: #1a1a1a;
          border-radius: 18px;
          padding: 60px 40px;
          margin-top: 20px;
          overflow: hidden;
          max-width: 100%;
          box-sizing: border-box;
        }

        .sec-head {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 20px;
          margin-bottom: 50px;
        }

        .sec-head-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sec-head h6 {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: white;
        }

        .see-pricing-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .see-pricing-link svg {
          width: 20px;
          height: 20px;
        }

        .interactive-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
        }

        .tab-image-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tab-image {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 15px;
          overflow: hidden;
        }

        .tab-description p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          padding: 0 10px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          padding: 12px 24px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: white;
          color: #111;
        }

        .read-more-btn svg {
          width: 18px;
          height: 18px;
        }

        .tab-titles {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tab-title {
          padding: 25px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: opacity 0.3s ease;
          opacity: 0.4;
        }

        .tab-title:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-title.active {
          opacity: 1;
        }

        .tab-title:hover {
          opacity: 0.8;
        }

        .tab-title h3 {
          font-size: 3rem;
          font-weight: 500;
        }

        /* ===== Marquee ===== */
        .marquee-section {
          margin-top: 20px;
          overflow: hidden;
          padding: 40px 0;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 30px;
          width: max-content;
          animation: marquee-scroll 20s linear infinite;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 30px;
          white-space: nowrap;
        }

        .marquee-item h4 {
          font-size: 3rem;
          font-weight: 400;
          opacity: 0.5;
        }

        .marquee-star {
          font-size: 2rem;
          opacity: 0.3;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* ===== Service Cards ===== */
        .service-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-card {
          border-radius: 20px;
          padding: 50px 40px;
          overflow: hidden;
          max-width: 100%;
          box-sizing: border-box;
        }

        .card-variant-0 {
          background: #1a1a1a;
        }

        .card-variant-1 {
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
        }

        .card-variant-2 {
          background: #f5f5f5;
          color: #333;
        }

        .card-variant-3 {
          background: linear-gradient(135deg, #1e3a5f, #0d1b2a);
        }

        .card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .card-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 300px;
        }

        .card-number {
          font-size: 0.875rem;
          margin-bottom: 15px;
          opacity: 0.7;
        }

        .card-title {
          font-size: 2.5rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.8;
          margin-bottom: 20px;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .card-tag {
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .card-variant-0 .card-tag {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .card-variant-1 .card-tag {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .card-variant-2 .card-tag {
          background: rgba(0, 0, 0, 0.08);
          color: #333;
        }

        .card-variant-3 .card-tag {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }

        .card-image {
          position: relative;
          height: 350px;
          border-radius: 15px;
          overflow: hidden;
        }

        /* ===== CTA Section ===== */
        .cta-section {
          background: #1a1a1a;
          border-radius: 18px;
          padding: 60px 40px;
          margin-top: 20px;
          margin-bottom: 20px;
          overflow: hidden;
          max-width: 100%;
          box-sizing: border-box;
        }

        .cta-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 500;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: white;
          color: #111;
        }

        .cta-btn svg {
          width: 20px;
          height: 20px;
        }

        /* ===== Responsive ===== */
        @media (max-width: 1600px) {
          .main-container {
            width: 85%;
          }

          .left-spacer {
            width: 280px;
          }
        }

        @media (max-width: 1400px) {
          .main-container {
            width: 90%;
          }

          .left-spacer {
            width: 260px;
          }

          .tab-title h3 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 1200px) {
          .left-spacer {
            width: 240px;
          }

          .interactive-grid {
            grid-template-columns: 1fr;
          }

          .tab-title h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 1024px) {
          .main-container {
            width: 92%;
          }

          .left-spacer {
            display: none;
          }

          .right-content {
            padding-top: 80px;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .card-content {
            grid-template-columns: 1fr;
          }

          .card-image {
            height: 280px;
          }

          .card-text {
            min-height: auto;
          }

          .cta-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            width: 100%;
            padding: 0 15px;
          }

          .hero {
            padding: 40px 20px;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .stat-value {
            font-size: 3rem;
          }

          .interactive-services {
            padding: 40px 20px;
          }

          .tab-title h3 {
            font-size: 1.8rem;
          }

          .tab-title {
            padding: 18px 0;
          }

          .marquee-item h4 {
            font-size: 2rem;
          }

          .service-card {
            padding: 30px 20px;
          }

          .card-title {
            font-size: 1.8rem;
          }

          .cta-section {
            padding: 40px 20px;
          }

          .cta-content h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 30px 15px;
          }

          .hero h1 {
            font-size: 1.6rem;
          }

          .tab-title h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
