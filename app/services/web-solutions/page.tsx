"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "../../components/LeftSidebar";
import Footer from "../../components/Footer";

const subServices = [
  {
    id: "website-designing",
    number: "01",
    title: "Website Designing",
    tagline: "Stunning designs that convert visitors into customers.",
    description:
      "We create visually compelling, user-centric websites that look great and drive real business results. Using HTML5, CSS3, and modern JavaScript frameworks, our responsive designs work flawlessly on every device.",
    features: [
      "Responsive & mobile-first design",
      "Custom UI/UX design systems",
      "SEO-optimized structure",
      "Fast loading performance",
      "Accessibility compliance",
      "Cross-browser compatibility",
    ],
    image: "/imgs/serv/webdesign.png",
  },
  {
    id: "microsite-development",
    number: "02",
    title: "Microsite Development",
    tagline: "Focused campaign experiences that amplify your message.",
    description:
      "Microsites are powerful standalone web experiences built around a single campaign, product launch, or brand story. We design immersive, interactive microsites that captivate audiences and drive specific conversion goals.",
    features: [
      "Campaign-specific design",
      "Interactive & gamified experiences",
      "High-impact landing pages",
      "Social media integration",
      "Analytics & conversion tracking",
      "Rapid deployment",
    ],
    image: "/works/americana-win-instant-cash.webp",
  },
  {
    id: "ecommerce-storefront",
    number: "03",
    title: "E-commerce Storefront",
    tagline: "Sell more with a seamless shopping experience.",
    description:
      "From restaurant ordering systems to full retail stores, we build e-commerce solutions tailored to your business model. Our storefronts are fast, secure, and optimized for maximum conversion.",
    features: [
      "Custom storefront design",
      "Payment gateway integration",
      "Inventory management system",
      "Order tracking & notifications",
      "Mobile commerce ready",
      "Multi-currency & multi-language",
    ],
    image: "/imgs/serv/ecommerce-left-bg.jpg",
  },
  {
    id: "hosting-maintenance",
    number: "04",
    title: "Hosting & Maintenance",
    tagline: "Keep your website fast, secure, and always online.",
    description:
      "We offer comprehensive hosting solutions and ongoing maintenance services to keep your digital presence performing at its best. From domain registration to server management, we handle every technical detail.",
    features: [
      "Domain registration (.com, .ae, .net & more)",
      "Static, VPS & cloud hosting packages",
      "SSL certificates & security hardening",
      "Regular content updates & edits",
      "Performance monitoring & reporting",
      "24/7 technical support",
    ],
    image: "/imgs/serv/domain-registration-and-web-hosting.png",
  },
];

const stats = [
  { value: "16+", label: "Years of Experience" },
  { value: "500+", label: "Websites Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const process = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your business goals, target audience, and competitive landscape to build the right strategy.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Our designers craft wireframes and high-fidelity mockups aligned with your brand identity and user expectations.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Clean, performant code built on modern frameworks, tested across all devices and browsers for flawless delivery.",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "We deploy, monitor, and continuously optimize your digital presence to keep you ahead of the competition.",
  },
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

export default function WebSolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="service-detail-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">

            {/* Hero */}
            <header className="pg-hero">
              <div className="hero-top">
                <div className="hero-left">
                  <Link href="/services" className="back-pill">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M17 11.5H6.9365M6.9365 11.5L11.4365 7M6.9365 11.5L11.4365 16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Services
                  </Link>
                  <span className="hero-tag">Web Solutions</span>
                </div>
                <div className="hero-right">
                  <h1>
                    Good websites get applause.{" "}
                    <em>Great websites get business.</em>
                  </h1>
                </div>
              </div>
              <p className="hero-description">
                Don&apos;t let your website be just another URL on the web. With over 16 years of experience, we craft powerful digital experiences that attract, engage, and convert your ideal customers.
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

            {/* Interactive Service Tabs */}
            <section className="tabs-section">
              <div className="tabs-header">
                <h2 className="tabs-title">What we offer</h2>
                <div className="tab-nav">
                  {subServices.map((service, i) => (
                    <button
                      key={i}
                      className={`tab-btn ${activeTab === i ? "active" : ""}`}
                      onClick={() => setActiveTab(i)}
                    >
                      <span className="tab-num">{service.number}</span>
                      <span className="tab-name">{service.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="tab-panels">
                {subServices.map((service, i) => (
                  <div
                    key={i}
                    className={`tab-panel ${activeTab === i ? "active" : ""}`}
                  >
                    <div className="panel-text">
                      <p className="panel-tagline">{service.tagline}</p>
                      <p className="panel-desc">{service.description}</p>
                      <ul className="panel-features">
                        {service.features.map((f, fi) => (
                          <li key={fi}>
                            <span className="plus">+</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="panel-cta">
                        Get a Quote
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </Link>
                    </div>
                    <div className="panel-image">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deep-dive service blocks */}
            <section className="detail-blocks">
              {subServices.map((service, index) => (
                <div
                  key={index}
                  className={`detail-block ${index % 2 === 1 ? "reverse" : ""}`}
                >
                  <div className="block-image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="block-image-overlay" />
                  </div>
                  <div className="block-text">
                    <span className="block-number">{service.number}</span>
                    <h2 className="block-title">{service.title}</h2>
                    <p className="block-tagline">{service.tagline}</p>
                    <p className="block-desc">{service.description}</p>
                    <ul className="block-features">
                      {service.features.map((f, fi) => (
                        <li key={fi}>
                          <span className="plus">+</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="block-cta">
                      Start a Project
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </section>

            {/* Process */}
            <section className="process-section">
              <div className="process-header">
                <span className="section-tag">How We Work</span>
                <h2>Our Process</h2>
              </div>
              <div className="process-steps">
                {process.map((step, i) => (
                  <div key={i} className="process-step">
                    <span className="step-num">{step.num}</span>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
              <div className="cta-inner">
                <div className="cta-text">
                  <h2>Ready to build something great?</h2>
                  <p>Let&apos;s create a website that works as hard as you do.</p>
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

      <style jsx>{`
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

        /* ===== Hero ===== */
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
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .back-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .back-pill:hover {
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
        }

        .back-pill svg {
          width: 14px;
          height: 14px;
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

        .hero-right h1 em {
          font-style: italic;
          color: #7b61ff;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          max-width: 700px;
          margin: 0;
        }

        /* ===== Stats ===== */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
          padding: 40px;
          background: #141414;
          border-radius: 20px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-left: 20px;
          border-left: 2px solid #7b61ff;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 300;
          line-height: 1;
          color: white;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* ===== Tabs ===== */
        .tabs-section {
          margin-bottom: 60px;
        }

        .tabs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .tabs-title {
          font-size: 1.8rem;
          font-weight: 500;
          margin: 0;
        }

        .tab-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
        }

        .tab-btn.active {
          background: white;
          color: #0b0b0b;
          border-color: white;
        }

        .tab-num {
          font-size: 0.7rem;
          opacity: 0.6;
        }

        .tab-btn.active .tab-num {
          opacity: 0.5;
        }

        .tab-panels {
          position: relative;
        }

        .tab-panel {
          display: none;
        }

        .tab-panel.active {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: #141414;
          border-radius: 24px;
          overflow: hidden;
          min-height: 480px;
        }

        .panel-text {
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }

        .panel-tagline {
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.4;
          margin: 0;
          color: white;
        }

        .panel-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        .panel-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .panel-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.75);
        }

        .plus {
          color: #7b61ff;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .panel-cta {
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
          align-self: flex-start;
          transition: background 0.2s ease;
        }

        .panel-cta:hover {
          background: #6b51ef;
        }

        .panel-cta svg {
          width: 18px;
          height: 18px;
        }

        .panel-image {
          position: relative;
          min-height: 400px;
        }

        /* ===== Detail Blocks ===== */
        .detail-blocks {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 60px;
        }

        .detail-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: #141414;
          border-radius: 24px;
          overflow: hidden;
          min-height: 500px;
        }

        .detail-block.reverse {
          direction: rtl;
        }

        .detail-block.reverse > * {
          direction: ltr;
        }

        .block-image {
          position: relative;
        }

        .block-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(20, 20, 20, 0.4), transparent);
          pointer-events: none;
          z-index: 1;
        }

        .detail-block.reverse .block-image-overlay {
          background: linear-gradient(to left, rgba(20, 20, 20, 0.4), transparent);
        }

        .block-text {
          padding: 60px 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        .block-number {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #7b61ff;
        }

        .block-title {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }

        .block-tagline {
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .block-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .block-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .block-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .block-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: white;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          align-self: flex-start;
          margin-top: 8px;
          transition: all 0.2s ease;
        }

        .block-cta:hover {
          background: white;
          color: #0b0b0b;
          border-color: white;
        }

        .block-cta svg {
          width: 18px;
          height: 18px;
        }

        /* ===== Process ===== */
        .process-section {
          margin-bottom: 60px;
          padding: 60px 40px;
          background: #141414;
          border-radius: 24px;
        }

        .process-header {
          margin-bottom: 50px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 16px;
        }

        .process-header h2 {
          font-size: 2.5rem;
          font-weight: 500;
          margin: 0;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-step {
          padding: 30px 24px;
          background: #1e1e1e;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .process-step:hover {
          border-color: rgba(123, 97, 255, 0.3);
          transform: translateY(-4px);
        }

        .step-num {
          font-size: 0.75rem;
          color: #7b61ff;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .step-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .step-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }

        /* ===== CTA ===== */
        .cta-section {
          margin-bottom: 40px;
          padding: 70px 50px;
          background: linear-gradient(135deg, #1a0f3c, #0d1b2a);
          border-radius: 24px;
          border: 1px solid rgba(123, 97, 255, 0.2);
        }

        .cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .cta-text h2 {
          font-size: 2.5rem;
          font-weight: 500;
          margin: 0 0 10px;
        }

        .cta-text p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        .cta-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

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

        .cta-primary:hover {
          background: #6b51ef;
        }

        .cta-primary svg {
          width: 18px;
          height: 18px;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.3);
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
          .main-container {
            width: 90%;
          }

          .left-spacer {
            display: none;
          }

          .right-content {
            padding-top: 80px;
          }

          .stats-section {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .tab-panel.active {
            grid-template-columns: 1fr;
          }

          .panel-image {
            min-height: 280px;
          }

          .detail-block {
            grid-template-columns: 1fr;
          }

          .detail-block.reverse {
            direction: ltr;
          }

          .block-image {
            min-height: 280px;
          }

          .block-text {
            padding: 40px 30px;
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

          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            padding: 24px;
            gap: 24px;
          }

          .stat-value {
            font-size: 2rem;
          }

          .tabs-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .panel-text {
            padding: 30px 24px;
          }

          .process-section {
            padding: 40px 24px;
          }

          .process-steps {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 40px 24px;
          }

          .cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .cta-text h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
