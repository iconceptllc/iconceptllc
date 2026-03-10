"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "../../components/LeftSidebar";
import Footer from "../../components/Footer";

type Service = {
  number: string;
  title: string;
  description: string;
  features: string[];
  banner: string;
  bannerFit: "contain" | "cover";
  bannerBg: string;
  bannerPos?: string;
  portfolio: { image: string; title: string; tag: string }[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "We are a one-stop digital marketing agency based in Dubai, helping brands grow their online presence through data-driven strategies. From SEO to paid campaigns, we deliver measurable results across every digital channel.",
    features: [
      "Search Engine Optimization",
      "Pay Per Click (PPC)",
      "Email Marketing",
      "Video Marketing",
      "Content Marketing",
      "Web Banner Creation",
    ],
    banner: "/imgs/digital-marketing.webp",
    bannerFit: "cover",
    bannerBg: "#111",
    bannerPos: "center center",
    portfolio: [
      { image: "/works/almarai.webp", title: "Almarai", tag: "Digital Campaign" },
      { image: "/works/alpro_nutribullet.webp", title: "Alpro", tag: "Digital Marketing" },
      { image: "/works/bekind_header.webp", title: "Be Kind", tag: "Digital Campaign" },
    ],
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description:
      "Social media has completely changed the world of marketing. We help brands build a loyal community, improve customer service, increase digital exposure, and reach new audiences through strategic social media management.",
    features: [
      "Brand showcase & identity",
      "Community management",
      "Content creation & scheduling",
      "Audience growth strategy",
      "Engagement & analytics",
      "Paid social advertising",
    ],
    banner: "/imgs/social-media-marketing.webp",
    bannerFit: "cover",
    bannerBg: "#111",
    bannerPos: "center center",
    portfolio: [
      { image: "/works/galaxy_choco_wonderland_header.webp", title: "Galaxy", tag: "Social Media" },
      { image: "/works/gliss_header.webp", title: "Gliss", tag: "Social Campaign" },
      { image: "/works/palette_header.webp", title: "Palette", tag: "Social Media" },
    ],
  },
  {
    number: "03",
    title: "Influencer Marketing",
    description:
      "Customers trust real voices. We connect your brand with the right influencers to deliver authentic, high-impact campaigns that build credibility, extend reach, and drive real engagement with your target audience.",
    features: [
      "Influencer identification",
      "Campaign strategy & brief",
      "Content collaboration",
      "Reach & performance metrics",
      "Audience analytics",
      "ROI reporting",
    ],
    banner: "/imgs/influencer-marketing.webp",
    bannerFit: "cover",
    bannerBg: "#1a0a2e",
    bannerPos: "center center",
    portfolio: [
      { image: "/works/loreal_header.webp", title: "L'Oréal", tag: "Influencer" },
      { image: "/works/pert_header.webp", title: "Pert", tag: "Influencer Campaign" },
      { image: "/works/sapora_header.webp", title: "Sapora", tag: "Influencer" },
    ],
  },
  {
    number: "04",
    title: "Branding & Advertising",
    description:
      "Your brand is more than a logo — it's the story your audience believes in. We craft compelling brand identities and advertising campaigns that resonate emotionally, differentiate you from competitors, and drive long-term loyalty.",
    features: [
      "Brand identity design",
      "Logo & visual systems",
      "Campaign concept & strategy",
      "Print & digital advertising",
      "Brand guidelines",
      "Market positioning",
    ],
    banner: "/imgs/branding-advertising.webp",
    bannerFit: "cover",
    bannerBg: "#071a10",
    bannerPos: "center center",
    portfolio: [
      { image: "/works/raising_canes.webp", title: "Raising Cane's", tag: "Branding" },
      { image: "/works/salerno.webp", title: "Salerno", tag: "Brand Identity" },
      { image: "/works/shehrazade.webp", title: "Shehrazade", tag: "Branding" },
    ],
  },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Campaigns Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "300+", label: "Happy Clients" },
];

function AnimatedNumber({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const num = parseInt(target.replace(/\D/g, ""));
          const suffix = target.replace(/[\d]/g, "");
          if (isNaN(num)) { setDisplay(target); return; }
          let start = 0;
          const step = Math.ceil(num / 40);
          const interval = setInterval(() => {
            start = Math.min(start + step, num);
            setDisplay(start + suffix);
            if (start >= num) clearInterval(interval);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <article className="service-card">
      {/* Banner */}
      <div className="card-banner" style={{ background: service.bannerBg }}>
        <Image
          src={service.banner}
          alt={service.title}
          fill
          style={{
            objectFit: "cover",
            objectPosition: service.bannerPos ?? "center",
          }}
        />
        <span className="banner-num">{service.number}</span>
      </div>

      {/* Content */}
      <div className="card-body">
        <div className="card-info">
          <h2 className="card-title">{service.title}</h2>
          <p className="card-desc">{service.description}</p>
          <ul className="card-features">
            {service.features.map((f, i) => (
              <li key={i}>
                <span className="feat-plus">+</span>
                {f}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="card-cta">
            Get a Quote
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>

        {/* Portfolio row */}
        <div className="card-portfolio">
          <span className="portfolio-label">Related Work</span>
          <div className="portfolio-row">
            {service.portfolio.map((item, i) => (
              <Link
                key={i}
                href="/portfolio"
                className="port-thumb"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="port-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                      transform: hovered === i ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  <div className="port-overlay" />
                </div>
                <div className="port-meta">
                  <span className="port-tag">{item.tag}</span>
                  <span className="port-title">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MarketingServicesPage() {
  return (
    <div className="service-detail-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">

            {/* YouTube video banner */}
            <div className="page-banner">
              <iframe
                src="https://www.youtube.com/embed/Ft5EjwGejpo?autoplay=1&mute=1&loop=1&playlist=Ft5EjwGejpo&controls=0&start=5&rel=0&showinfo=0&modestbranding=1"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
                title="Marketing Services"
              />
              <Link href="/services" className="back-pill">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 11.5H6.9365M6.9365 11.5L11.4365 7M6.9365 11.5L11.4365 16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Services
              </Link>
            </div>

            {/* Hero */}
            <header className="pg-hero">
              <div className="hero-top">
                <div className="hero-left">
                  <span className="hero-tag">Marketing Services</span>
                </div>
                <div className="hero-right">
                  <h1>
                    One-stop solution for all your{" "}
                    <em>digital marketing needs.</em>
                  </h1>
                </div>
              </div>
              <p className="hero-description">
                From SEO and social media to influencer campaigns and brand advertising — we help your business grow online with strategies that deliver real, measurable results.
              </p>
            </header>

            {/* Stats */}
            <section className="stats-section">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">
                    <AnimatedNumber target={stat.value} />
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </section>

            {/* Service cards */}
            <section className="services-list">
              {services.map((service) => (
                <ServiceCard key={service.number} service={service} />
              ))}
            </section>

            {/* CTA */}
            <section className="cta-section">
              <div className="cta-inner">
                <div className="cta-text">
                  <h2>Ready to grow your brand?</h2>
                  <p>Let&apos;s build a marketing strategy that delivers real results.</p>
                </div>
                <div className="cta-actions">
                  <Link href="/contact" className="cta-primary">
                    Get In Touch
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </Link>
                  <Link href="/portfolio" className="cta-secondary">
                    View Our Work
                  </Link>
                </div>
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <style jsx global>{`
        .service-detail-page {
          min-height: 100vh;
          background: #0b0b0b;
          color: white;
        }

        .main-container {
          width: 80%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .content-wrapper { display: flex; gap: 12px; }
        .left-spacer { flex-shrink: 0; width: 300px; }

        .right-content {
          flex: 1;
          max-width: 1226px;
          padding: 20px 0;
        }

        /* ===== Video banner ===== */
        .page-banner {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 32px;
          background: #000;
        }

        .page-banner iframe {
          /* scale up to fill the 16:7 crop — iframe is 16:9, so scale to match width and offset vertically */
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          /* 16:9 natural height = width * 9/16; our container is 7/16 tall, so scale iframe to fill */
          height: calc(100% * 16 / 7 * 9 / 16);
          transform: translate(-50%, -50%);
          border: none;
          pointer-events: none;
        }

        /* Gradient overlay so pill is readable */
        .page-banner::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 40%, transparent 70%, rgba(0,0,0,0.4) 100%);
          pointer-events: none;
          z-index: 1;
        }

        .back-pill {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .back-pill:hover {
          background: rgba(0,0,0,0.65);
          border-color: rgba(255,255,255,0.5);
          color: white;
        }

        .back-pill svg { width: 14px; height: 14px; }

        /* ===== Hero ===== */
        .pg-hero { margin-bottom: 40px; }

        .hero-top {
          display: flex;
          gap: 30px;
          margin-bottom: 20px;
          align-items: flex-start;
        }

        .hero-left {
          flex-shrink: 0;
          padding-top: 6px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.8);
          white-space: nowrap;
        }

        .hero-right h1 {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.15;
          margin: 0;
        }

        .hero-right h1 em {
          font-style: italic;
          color: #7b61ff;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.65);
          max-width: 700px;
          margin: 0;
        }

        /* ===== Stats ===== */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          margin-bottom: 60px;
          background: rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 36px 32px;
          background: #141414;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 300;
          line-height: 1;
          color: white;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
        }

        /* ===== Services list ===== */
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 60px;
        }

        /* ===== Service card ===== */
        .service-card {
          background: #141414;
          border-radius: 24px;
          overflow: hidden;
        }

        .card-banner {
          position: relative;
          height: 440px;
          overflow: hidden;
        }

        .banner-num {
          position: absolute;
          bottom: 16px;
          left: 24px;
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(6px);
          padding: 5px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .card-body {
          padding: 40px 44px 44px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .card-info { margin-bottom: 40px; }

        .card-title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 600;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 0.95rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.6);
          margin: 0 0 28px;
          max-width: 680px;
        }

        .card-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px 20px;
        }

        .card-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.7);
        }

        .feat-plus {
          color: #7b61ff;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 999px;
          background: #7b61ff;
          color: white;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        .card-cta:hover { background: #6b51ef; }
        .card-cta svg { width: 18px; height: 18px; }

        /* Portfolio row */
        .card-portfolio {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 32px;
        }

        .portfolio-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.35);
          margin-bottom: 18px;
        }

        .portfolio-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .port-thumb {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .port-img {
          position: relative;
          height: 180px;
          border-radius: 14px;
          overflow: hidden;
          background: #1e1e1e;
          margin-bottom: 12px;
        }

        .port-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
          pointer-events: none;
        }

        .port-meta {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .port-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #7b61ff;
        }

        .port-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
        }

        /* ===== CTA ===== */
        .cta-section {
          margin-bottom: 40px;
          padding: 70px 50px;
          background: linear-gradient(135deg, #1a0f3c, #0d1b2a);
          border-radius: 24px;
          border: 1px solid rgba(123,97,255,0.2);
        }

        .cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .cta-text h2 { font-size: 2.5rem; font-weight: 500; margin: 0 0 10px; }
        .cta-text p { font-size: 1rem; color: rgba(255,255,255,0.65); margin: 0; }
        .cta-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 999px;
          background: #7b61ff;
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        .cta-primary:hover { background: #6b51ef; }
        .cta-primary svg { width: 18px; height: 18px; }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .cta-secondary:hover {
          background: white;
          color: #0b0b0b;
          border-color: white;
        }

        /* ===== Responsive ===== */
        @media (max-width: 1024px) {
          .main-container { width: 90%; }
          .left-spacer { display: none; }
          .right-content { padding-top: 80px; }
          .stats-section { grid-template-columns: repeat(2, 1fr); }
          .card-features { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .page-banner { aspect-ratio: 16 / 9; border-radius: 14px; }
          .page-banner iframe { height: 100%; }
          .hero-top { flex-direction: column; gap: 12px; margin-bottom: 16px; }
          .hero-right h1 { font-size: 1.6rem; }
          .hero-description { font-size: 1rem; }
          .stats-section { grid-template-columns: repeat(2, 1fr); }
          .stat-item { padding: 24px 20px; }
          .stat-value { font-size: 2rem; }
          .card-body { padding: 28px 24px 32px; }
          .card-banner { height: 220px; }
          .card-features { grid-template-columns: repeat(2, 1fr); }
          .portfolio-row { grid-template-columns: repeat(3, 1fr); gap: 10px; }
          .port-img { height: 130px; }
          .cta-section { padding: 40px 24px; }
          .cta-inner { flex-direction: column; align-items: flex-start; }
          .cta-text h2 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
          .card-features { grid-template-columns: 1fr; }
          .portfolio-row { grid-template-columns: 1fr; }
          .port-img { height: 200px; }
        }
      `}</style>
    </div>
  );
}
