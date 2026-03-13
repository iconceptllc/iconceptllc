"use client";

import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "../components/LeftSidebar";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";

const highlights = [
  {
    title: "Award‑winning digital content & web agency",
    description:
      "Based in Dubai with a production hub in Kochi, we craft digital content, web solutions, and marketing for government and private organizations worldwide.",
  },
  {
    title: "20+ years of expertise",
    description:
      "From early web builds to AI-powered content, our team blends creativity with advanced technology to launch experiences that connect, engage, and grow brands.",
  },
  {
    title: "Global delivery, local agility",
    description:
      "Projects delivered across the UAE, India, and the UK with multilingual capability, rapid support, and culturally tuned storytelling.",
  },
  {
    title: "Trusted results",
    description:
      "Hundreds of prestigious projects completed across diverse industries, earning repeat partnerships through reliability, quality, and measurable impact.",
  },
];

const services = [
  "Website Designing & Web App Development",
  "E-commerce Storefronts & Microsites",
  "Mobile App Development",
  "Digital Marketing, SEO, SEM & PPC",
  "Branding & Advertising",
  "CGI, AI & Motion Graphics",
  "2D & 3D Animation",
  "Ad Film & Content Production",
  "Game Development (Web / PC / Mobile / AR / VR)",
  "Audio / Video Editing & Podcast Recording",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            <section className="about-hero">
              <div className="hero-top">
                <span className="hero-tag">Our Studio</span>
                <h1>About iConcept LLC</h1>
                <p className="subtitle">
                  Award-winning digital content and web solutions agency with 20+ years of delivery across UAE, India, and the UK.
                </p>
                <p className="lead">
                  We inspire ideas, innovate with technology, and deliver impact across web, content production, and marketing.
                </p>
              </div>

              {/* <div className="hero-grid">
                <div className="hero-left">
                  <h3>We are specialised in</h3>
                  <ul className="hero-list">
                    {services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div className="hero-right">
                  <div className="hero-image-large">
                    <Image
                      src="/imgs/about.webp"
                      alt="iConcept team at work"
                      width={760}
                      height={640}
                      priority
                    />
                  </div>
                  <div className="hero-image-small">
                    <Image
                      src="/imgs/inspire-innovate-impact-white.webp"
                      alt="Inspire · Innovate · Impact"
                      width={420}
                      height={420}
                    />
                  </div>
                  <div className="hero-card">
                    <h4>What we do</h4>
                    <p>
                      From smart, scalable web platforms to high-impact films, CGI, and animation, we combine creativity with advanced technology to build digital experiences that move audiences and grow brands.
                    </p>
                  </div>
                </div>
              </div> */}
            </section>

            <section className="about-highlights">
              <div className="sec-head">
                <h6>OUR STORY</h6>
              </div>
              <div className="highlight-grid">
                {highlights.map((item) => (
                  <div key={item.title} className="highlight-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="about-case-studies">
              <div className="case-card">
                <div>
                  <h2>Case studies</h2>
                  <p>
                    From CGI-powered product launches to gamified microsites and large-scale government portals, we deliver measurable results across industries. Explore a few of the stories that shaped our journey.
                  </p>
                </div>
                <Link href="/portfolio" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  border: '1px solid rgba(123, 97, 255, 0.5)',
                  background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.15), rgba(123, 97, 255, 0.05))',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}>
                  View projects <span>→</span>
                </Link>
              </div>
            </section>

            <ProcessSection />

            <section className="about-contact">
              <div className="contact-card">
                <div>
                  <h2>Let’s shape your next digital experience</h2>
                  <p className="contact-info">+971 50 369 0637</p>
                  <p className="contact-info">+971 58 958 8080</p>
                  <p className="contact-info">
                    <a href="mailto:contact@iconceptme.com">contact@iconceptme.com</a>
                  </p>
                </div>
                <Link href="/contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  border: '1px solid rgba(123, 97, 255, 0.5)',
                  background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.15), rgba(123, 97, 255, 0.05))',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}>
                  Talk to us today <span>→</span>
                </Link>
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <style jsx>{`
        .about-page {
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

        .about-hero {
          background: linear-gradient(135deg, #111 0%, #0b0b0b 100%);
          border-radius: 18px;
          padding: 70px 50px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .about-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at top right,
              rgba(139, 92, 246, 0.18),
              transparent 45%
            ),
            radial-gradient(
              circle at 15% 80%,
              rgba(59, 130, 246, 0.16),
              transparent 40%
            );
          pointer-events: none;
        }

        .hero-top {
          position: relative;
          z-index: 1;
          margin-bottom: 50px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
        }

        .about-hero h1 {
          font-size: 3.4rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 10px;
        }

        .lead {
          font-size: 1.3rem;
          color: #ffffff;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 40px;
          align-items: start;
        }

        .hero-left h3 {
          font-size: 1.3rem;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }

        .hero-list li {
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .hero-right {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          grid-template-rows: auto auto;
          gap: 20px;
        }

        .hero-image-large {
          grid-row: 1 / span 2;
        }

        .hero-image-large :global(img),
        .hero-image-small :global(img) {
          width: 100%;
          height: auto;
          border-radius: 18px;
          display: block;
        }

        .hero-image-large :global(img) {
          min-height: 520px;
          object-fit: cover;
        }

        .hero-card {
          background: rgba(15, 15, 15, 0.9);
          border-radius: 18px;
          padding: 22px 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }

        .hero-card h4 {
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .hero-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .about-highlights {
          background: #111;
          border-radius: 18px;
          padding: 60px 40px;
          margin-top: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .sec-head {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 20px;
          margin-bottom: 40px;
        }

        .sec-head h6 {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: white;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .highlight-card {
          background: #0d0d0d;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease, border 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-6px);
          border-color: rgba(139, 92, 246, 0.5);
        }

        .highlight-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .highlight-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
        }

        .about-case-studies {
          margin-top: 20px;
        }

        .case-card {
          background: linear-gradient(135deg, #121212, #0b0b0b);
          border-radius: 18px;
          padding: 50px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .case-card h2 {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .case-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .case-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid rgba(123, 97, 255, 0.5);
          background: linear-gradient(135deg, rgba(123, 97, 255, 0.15), rgba(123, 97, 255, 0.05));
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .case-link:hover {
          background: linear-gradient(135deg, rgba(123, 97, 255, 0.35), rgba(123, 97, 255, 0.2));
          border-color: rgba(123, 97, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(123, 97, 255, 0.25);
        }

        .about-contact {
          margin-top: 20px;
        }

        .contact-card {
          background: #0f0f0f;
          border-radius: 18px;
          padding: 50px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-card h2 {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .contact-info {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 6px;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid rgba(123, 97, 255, 0.5);
          background: linear-gradient(135deg, rgba(123, 97, 255, 0.15), rgba(123, 97, 255, 0.05));
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .contact-link:hover {
          background: linear-gradient(135deg, rgba(123, 97, 255, 0.35), rgba(123, 97, 255, 0.2));
          border-color: rgba(123, 97, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(123, 97, 255, 0.25);
        }

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

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-right {
            grid-template-columns: 1fr;
          }

          .hero-image-large {
            grid-row: auto;
          }

          .case-card,
          .contact-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .about-hero,
          .about-highlights,
          .case-card,
          .about-founder,
          .contact-card {
            padding: 40px 20px;
          }

          .about-hero h1 {
            font-size: 2.4rem;
          }

          .highlight-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
