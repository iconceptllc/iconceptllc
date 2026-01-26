"use client";

import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/Footer";

const contactCards = [
  {
    title: "Contact Info",
    details: [
      "iconcept llc",
      "office no : 906,",
      "capital golden tower,",
      "business bay,",
      "dubai, UAE.",
    ],
  },
  {
    title: "Email",
    details: ["contact@iconceptme.com"],
  },
  {
    title: "Business Hours",
    details: ["mon - sat: 9am to 6pm"],
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            <section className="contact-hero">
              <div className="hero-copy">
                <span className="hero-tag">Contact</span>
                <h1>Have a project in mind? Let us talk.</h1>
                <p className="hero-subtitle">
                  We would love to learn about your goals and how we can help.
                </p>
              </div>
              <div className="hero-visual" aria-hidden="true" />
            </section>

            <section className="contact-info">
              <div className="info-grid">
                {contactCards.map((card) => (
                  <div key={card.title} className="info-card">
                    <h3>{card.title}</h3>
                    <div className="info-details">
                      {card.details.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="contact-form">
              <div className="form-grid">
                <div className="form-copy">
                  <h2>Send a message</h2>
                  <p>
                    Tell us about your project. Our team will respond within 1
                    to 2 business days.
                  </p>
                </div>
                <form className="form-card" action="#" method="post">
                  <div className="form-row">
                    <label>
                      Name
                      <input type="text" name="name" placeholder="Your name" />
                    </label>
                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>
                  <label>
                    Subject
                    <input type="text" name="subject" placeholder="Project" />
                  </label>
                  <label>
                    Message
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project goals."
                    />
                  </label>
                  <button type="submit" className="submit-btn">
                    Send a message
                  </button>
                </form>
              </div>
            </section>

            <section className="contact-map">
              <div className="map-card">
                <h2>Visit our studio</h2>
                <div className="map-frame">
                  <iframe
                    src="https://www.google.com/maps?ll=25.177922,55.273788&z=14&t=m&hl=en&gl=AE&mapclient=embed&cid=8314138900576672402"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="iconcept llc location"
                  />
                </div>
              </div>
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

        .contact-hero {
          background: linear-gradient(135deg, #111 0%, #0b0b0b 100%);
          border-radius: 18px;
          padding: 60px 50px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .contact-hero::before {
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

        .hero-copy {
          position: relative;
          z-index: 1;
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

        .contact-hero h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .hero-visual {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 260px;
          border-radius: 18px;
          background: linear-gradient(150deg, #232323, #0b0b0b);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.35);
        }

        .hero-visual::before {
          content: "";
          position: absolute;
          inset: 16px;
          border-radius: 14px;
          background: url("https://www.iconceptme.com/wp-content/uploads/2021/03/about-iconcept.jpg")
            center/cover no-repeat;
          opacity: 0.85;
          filter: saturate(0.8);
        }

        .contact-info {
          margin-top: 20px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .info-card {
          background: #111;
          border-radius: 18px;
          padding: 32px 26px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          min-height: 220px;
        }

        .info-card h3 {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .info-details p {
          margin: 0 0 8px;
          color: rgba(255, 255, 255, 0.7);
        }

        .contact-form {
          margin-top: 20px;
          background: #0f0f0f;
          border-radius: 18px;
          padding: 50px 40px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: start;
        }

        .form-copy h2 {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .form-copy p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .form-card {
          display: grid;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        label {
          display: grid;
          gap: 8px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        input,
        textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #141414;
          color: white;
          font-size: 0.95rem;
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .submit-btn {
          padding: 14px 26px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background: transparent;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          justify-self: start;
        }

        .submit-btn:hover {
          background: #fff;
          color: #111;
        }

        .contact-map {
          margin-top: 20px;
        }

        .map-card {
          background: #111;
          border-radius: 18px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .map-card h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .map-frame {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .map-frame iframe {
          width: 100%;
          height: 420px;
          border: 0;
          display: block;
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

          .contact-hero {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-hero,
          .contact-form,
          .map-card {
            padding: 36px 20px;
          }

          .contact-hero h1 {
            font-size: 2.2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .map-frame iframe {
            height: 320px;
          }
        }
      `}</style>
    </div>
  );
}
