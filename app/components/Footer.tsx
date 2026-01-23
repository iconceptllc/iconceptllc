"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-cta">
            <h2>
              Let&apos;s Create <br />
              Something Great <br />
              <span className="highlight">Together</span>
            </h2>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h6>Sitemap</h6>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="links-column">
              <h6>Services</h6>
              <ul>
                <li>
                  <Link href="/services">Web Design</Link>
                </li>
                <li>
                  <Link href="/services">Branding</Link>
                </li>
                <li>
                  <Link href="/services">Marketing</Link>
                </li>
                <li>
                  <Link href="/services">Development</Link>
                </li>
              </ul>
            </div>

            <div className="links-column">
              <h6>Social</h6>
              <ul>
                <li>
                  <a href="#">Twitter / X</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Dribbble</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 iConcept. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #f5f5f5;
          border-radius: 15px;
          padding: 80px 40px 40px;
          margin-top: 20px;
          margin-bottom: 40px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-cta h2 {
          font-size: 3.5rem;
          font-weight: 500;
          line-height: 1.2;
          color: #333;
        }

        .highlight {
          color: #8b5cf6;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .links-column h6 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .links-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links-column li {
          margin-bottom: 12px;
        }

        .links-column :global(a) {
          color: #666;
          text-decoration: none;
          font-size: 0.9375rem;
          transition: color 0.3s ease;
        }

        .links-column :global(a:hover) {
          color: #8b5cf6;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .footer-bottom p {
          font-size: 0.875rem;
          color: #666;
        }

        .footer-legal {
          display: flex;
          gap: 30px;
        }

        .footer-legal :global(a) {
          font-size: 0.875rem;
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal :global(a:hover) {
          color: #8b5cf6;
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-cta h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 20px 30px;
          }

          .footer-links {
            grid-template-columns: 1fr 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
