"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, FormEvent } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";

// ─── Fill in your EmailJS credentials below ─────────────────────────────────
// Get these from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID  = "service_o33r0ql";   // e.g. "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = "template_z4t0a4f";  // e.g. "template_xxxxxxx"
const EMAILJS_PUBLIC_KEY  = "pS-7ri9xDO_oaLRgx";   // e.g. "xxxxxxxxxxxxxxx"
// ────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">

            {/* ── Hero ── */}
            <header className="pg-hero">
              <div className="hero-top">
                <div className="hero-left">
                  <span className="hero-tag">Contact Us</span>
                </div>
                <div className="hero-right">
                  <h1>
                    Have a project in mind?{" "}
                    <em>Let&apos;s talk.</em>
                  </h1>
                </div>
              </div>

              {/* Hero image */}
              <div className="hero-image-wrapper">
                <Image
                  src="/imgs/contact-us.webp"
                  alt="Contact iConcept"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
                {/* Inspire badge overlaid on image */}
                <div className="inspire-overlay">
                  <div className="inspire-badge">
                    <Image
                      src="/imgs/inspire-innovate-impact-white.webp"
                      alt="Inspire · Innovate · Impact"
                      width={120}
                      height={120}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </header>

            {/* ── Contact info + form ── */}
            <section className="contact-body">

              {/* Left col: info cards */}
              <div className="info-col">
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h6>Our Studio</h6>
                  <div className="info-divider" />
                  <p>Office no: 906, Capital Golden Tower,<br />Business Bay, Dubai, UAE</p>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h6>Mail Support 24/7</h6>
                  <div className="info-divider" />
                  <a href="mailto:contact@iconceptme.com">contact@iconceptme.com</a>
                  {/* <a href="mailto:info@iconceptme.com">info@iconceptme.com</a> */}
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h6>Phone</h6>
                  <div className="info-divider" />
                  <a href="tel:+971503690637">(+971) 50 369 0637</a>
                  <a href="tel:+971589588080">(+971) 58 958 8080</a>
                </div>
              </div>

              {/* Right col: form */}
              <div className="form-col">
                <div className="form-header">
                  <h2>Send us a message</h2>
                  <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="from_name">Name</label>
                      <input id="from_name" type="text" name="from_name" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="from_email">Email</label>
                      <input id="from_email" type="email" name="from_email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" type="tel" name="phone" placeholder="+971 XX XXX XXXX" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input id="subject" type="text" name="subject" placeholder="How can we help?" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
                  </div>

                  <button type="submit" className="submit-btn" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        <span className="spinner" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="form-feedback success">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      Message sent! We&apos;ll be in touch shortly.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="form-feedback error">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}
                </form>
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <style jsx global>{`
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

        .content-wrapper { display: flex; gap: 12px; }
        .left-spacer { flex-shrink: 0; width: 300px; }

        .right-content {
          flex: 1;
          max-width: 1226px;
          padding: 20px 0;
        }

        /* ── Hero ── */
        .pg-hero { margin-bottom: 60px; }

        .hero-top {
          display: flex;
          gap: 30px;
          margin-bottom: 32px;
          align-items: flex-start;
        }

        .hero-left { flex-shrink: 0; padding-top: 6px; }

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
          font-size: clamp(2rem, 4.5vw, 4rem);
          font-weight: 600;
          line-height: 1.15;
          margin: 0;
        }

        .hero-right h1 em {
          font-style: italic;
          color: #7b61ff;
          font-weight: 500;
        }

        /* Hero image */
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 6;
          border-radius: 28px;
          overflow: hidden;
        }

        .inspire-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 50%);
          display: flex;
          align-items: center;
          padding: 40px;
          z-index: 1;
        }

        .inspire-badge {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        /* ── Contact body (info + form side by side) ── */
        .contact-body {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 32px;
          align-items: start;
          margin-bottom: 60px;
        }

        /* Info column */
        .info-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          background: #141414;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: border-color 0.2s;
        }

        .info-card:hover {
          border-color: rgba(123,97,255,0.25);
        }

        .info-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(123,97,255,0.2), rgba(123,97,255,0.05));
          border: 1px solid rgba(123,97,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #7b61ff;
        }

        .info-card-icon svg { width: 20px; height: 20px; }

        .info-card h6 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          margin: 0 0 14px;
        }

        .info-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin-bottom: 16px;
        }

        .info-card p {
          margin: 0;
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .info-card a {
          display: block;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.9rem;
          line-height: 1.9;
          transition: color 0.2s;
        }

        .info-card a:hover { color: #7b61ff; }

        /* Form column */
        .form-col {
          background: #141414;
          border-radius: 24px;
          padding: 44px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .form-header {
          margin-bottom: 36px;
        }

        .form-header h2 {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 600;
          margin: 0 0 10px;
          line-height: 1.2;
        }

        .form-header p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          font-family: inherit;
          box-sizing: border-box;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: rgba(123,97,255,0.6);
          background: rgba(123,97,255,0.05);
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 130px;
          margin-bottom: 28px;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 999px;
          border: none;
          background: #7b61ff;
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          align-self: flex-start;
        }

        .submit-btn:hover:not(:disabled) {
          background: #6b51ef;
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn svg { width: 18px; height: 18px; }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .form-feedback {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          padding: 14px 18px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-feedback svg { width: 20px; height: 20px; flex-shrink: 0; }

        .form-feedback.success {
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.3);
          color: #4ade80;
        }

        .form-feedback.error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.3);
          color: #f87171;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .contact-body {
            grid-template-columns: 1fr;
          }

          .info-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .main-container { width: 90%; }
          .left-spacer { display: none; }
          .right-content { padding-top: 80px; }
        }

        @media (max-width: 768px) {
          .hero-top { flex-direction: column; gap: 12px; margin-bottom: 20px; }
          .hero-right h1 { font-size: 1.8rem; }
          .hero-image-wrapper { aspect-ratio: 4 / 3; border-radius: 18px; }
          .inspire-badge { width: 90px; height: 90px; }
          .form-col { padding: 28px 24px; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
          .info-col { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
