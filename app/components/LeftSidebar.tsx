"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";

export default function LeftSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <aside className="left-sidebar">
      <div className="sidebar-top">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src={"/iconcept-logo.png"}
              alt="iConcept Logo"
              width={170}
              height={50}
              priority
            />
          </Link>

          <div className="menu-toggle">
            <button className="menu-icon" onClick={() => setMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="info-section">
          {/* Circle Text Animation */}
          <div className="circle-text-wrapper">
            <Image
              src={"/circle-text.svg"}
              alt="Circle Text"
              width={210}
              height={210}
              className="circle-text"
            />
            <Image
              src={"/iconcept-icon.png"}
              alt="iConcept Icon"
              width={170}
              height={170}
              className="center-icon"
            />
          </div>

          <div className="contact-info">
            <ul>
              <li>contact@iconceptme.com</li>
              <li>(+971) 58 958 8080</li>
              <li>Dubai &amp; Sharjah</li>
              <li>United Arab Emirates</li>
            </ul>
            <span className="copyright">© 2026, All Rights Reserved</span>
            <div className="social-icons">
              <a href="https://www.facebook.com/iconceptllc" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M14 8.5h2.5V5.5H14v-1c0-1.1.4-1.5 1.6-1.5H16.5V1c-.7-.1-1.7-.1-2.6-.1C10.8.9 9 2.5 9 5.3V5.5H6.5v3H9V21h5V8.5z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@iconceptllc" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="6.5" width="18" height="11" rx="2.5" ry="2.5" />
                  <path d="m11 10 4 2-4 2z" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/iconcept-llc/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="5" cy="5" r="2.2" />
                  <path d="M3.5 9h3v10h-3z" />
                  <path d="M10 9h2.8v1.8h.1c.4-.9 1.4-1.9 3-1.9 3.1 0 3.7 2 3.7 4.7V19h-3v-4.5c0-1.1-.1-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V19H10z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/iconceptllc/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-bottom">
        <Link href="/contact" className="work-with-us-btn">
          <span className="btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <span>Work With Us</span>
        </Link>
      </div>

      <style jsx>{`
        .left-sidebar {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          max-width: 1600px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px 0 40px 0;
          pointer-events: none;
        }

        .left-sidebar > * {
          width: 300px;
          pointer-events: auto;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 30px;
        }

        .logo {
          display: block;
          width: 170px;
        }

        .menu-icon {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
        }

        .menu-icon:hover {
          opacity: 0.7;
        }

        .info-section {
          margin-top: 80px;
          text-align: center;
        }

        .circle-text-wrapper {
          width: 220px;
          height: 220px;
          margin: 0 auto;
          position: relative;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-text-wrapper :global(.circle-text) {
          animation: rotate 20s linear infinite;
        }

        .circle-text-wrapper :global(.center-icon) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .contact-info {
          margin-top: 30px;
          color: #fff;
          font-size: 18px;
        }

        .contact-info ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-info li {
          margin-bottom: 5px;
        }

        .copyright {
          display: block;
          margin-top: 30px;
          font-size: 12px;
          color: #666;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
        }

        .social-icons a {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
        }

        .social-icons a:hover {
          background: linear-gradient(135deg, #8b5cf6, #6ee7ff);
          border-color: transparent;
          color: #0b0b0b;
          transform: translateY(-2px);
        }

        .sidebar-bottom {
          padding-left: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        :global(.work-with-us-btn) {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.4s ease;
          background: transparent;
        }

        :global(.work-with-us-btn:hover) {
          background: white;
          color: #1a1a1a;
          border-color: white;
        }

        :global(.work-with-us-btn .btn-icon) {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* WhatsApp FAB styles live in globals.css */

        @media (max-width: 1600px) {
          .left-sidebar {
            width: 85%;
          }

          .left-sidebar > * {
            width: 280px;
          }
        }

        @media (max-width: 1400px) {
          .left-sidebar {
            width: 90%;
          }

          .left-sidebar > * {
            width: 260px;
          }

          .circle-text-wrapper {
            width: 200px;
            height: 200px;
          }

          .contact-info {
            font-size: 16px;
          }
        }

        @media (max-width: 1366px) {
          .left-sidebar {
            width: 92%;
          }

          .left-sidebar > * {
            width: 240px;
          }

          .sidebar-bottom {
            padding-left: 20px;
          }

          .navbar {
            padding-left: 20px;
          }

          .circle-text-wrapper {
            width: 180px;
            height: 180px;
          }

          .circle-text-wrapper :global(.center-icon) {
            width: 150px !important;
            height: 150px !important;
          }

          .contact-info {
            font-size: 15px;
          }
        }

        @media (max-width: 1200px) {
          .left-sidebar {
            width: 94%;
          }

          .left-sidebar > * {
            width: 220px;
          }

          .sidebar-bottom {
            padding-left: 16px;
          }

          .navbar {
            padding-left: 16px;
          }

          .circle-text-wrapper {
            width: 160px;
            height: 160px;
          }

          .contact-info {
            font-size: 14px;
          }
        }

        @media (max-width: 1024px) {
          .left-sidebar {
            width: 92%;
          }

          .info-section,
          .sidebar-bottom {
            display: none;
          }

          .left-sidebar > * {
            width: 100%;
          }

          .navbar {
            padding-left: 0;
          }
        }

        @media (max-width: 768px) {
          .left-sidebar {
            width: 100%;
            padding: 15px;
          }
        }
      `}</style>
      <NavigationMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </aside>

    {/* Floating WhatsApp Button — outside <aside> so .left-sidebar > * width rule doesn't apply */}
    <a
      href="https://wa.me/971589588080"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    </a>
    </>
  );
}
