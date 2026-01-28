"use client";

import Image from "next/image";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            {/* Hero Header */}
            <header className="pg-hero">
              <div className="hero-top">
                <div className="hero-left">
                  <span className="hero-tag">Contact</span>
                </div>
                <div className="hero-right">
                  <h1>
                    Have a project in mind? <br /> Let&apos;s discuss.
                  </h1>
                </div>
              </div>
              <div className="hero-image-wrapper">
                <div className="hero-image-inner">
                  <Image
                    src="/h6.png"
                    alt="Contact hero"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>
            </header>

            {/* Contact Info Cards */}
            <section className="contact-info">
              <div className="info-grid">
                <div className="info-card">
                  <span className="info-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <h6>Address Studio</h6>
                  <p>
                    Office no: 906, Capital Golden Tower, Business Bay, Dubai,
                    UAE
                  </p>
                </div>
                <div className="info-card">
                  <span className="info-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <h6>Mail Support 24/7</h6>
                  <p>
                    <a href="mailto:contact@iconceptme.com">
                      contact@iconceptme.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@iconceptme.com">
                      info@iconceptme.com
                    </a>
                  </p>
                </div>
                <div className="info-card">
                  <span className="info-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <h6>Phone</h6>
                  <p>(+971) 58 958 8080</p>
                  <p>(+971) 50 123 4567</p>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
              <form className="contact-form" action="#" method="post">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    required
                  />
                </div>
                <div className="form-submit">
                  <button type="submit" className="submit-btn">
                    <span>Send a Message</span>
                    <span className="arrow-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
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

        /* ===== Hero Header ===== */
        .pg-hero {
          margin-bottom: 20px;
        }

        .hero-top {
          display: flex;
          gap: 30px;
          margin-bottom: 50px;
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
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 600;
          line-height: 1.15;
          margin: 0;
        }

        .hero-image-wrapper {
          width: 100%;
          overflow: hidden;
          border-radius: 40px;
        }

        .hero-image-inner {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 55%;
        }

        /* ===== Contact Info Cards ===== */
        .contact-info {
          margin-top: 60px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .info-card {
          background: #141414;
          border-radius: 20px;
          padding: 30px;
        }

        .info-icon {
          display: block;
          font-size: 2.2rem;
          margin-bottom: 24px;
          color: white;
        }

        .info-card h6 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-weight: 600;
        }

        .info-card p {
          margin: 0 0 6px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .info-card a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }

        .info-card a:hover {
          color: white;
        }

        /* ===== Contact Form ===== */
        .contact-form-section {
          margin-top: 60px;
        }

        .contact-form {
          max-width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 16px 0;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          background: transparent;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-bottom-color: rgba(255, 255, 255, 0.5);
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .contact-form textarea {
          resize: vertical;
        }

        .form-submit {
          margin-top: 20px;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 999px;
          border: none;
          background: #7B61FF;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: #6a4fef;
        }

        .submit-btn .arrow-icon {
          display: inline-flex;
          width: 24px;
          height: 24px;
        }

        .submit-btn .arrow-icon svg {
          width: 100%;
          height: 100%;
          stroke: currentColor;
          stroke-width: 1.5;
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

          .info-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-top {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 30px;
          }

          .hero-right h1 {
            font-size: 2rem;
          }

          .hero-image-wrapper {
            border-radius: 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
