"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cdn } from "@/lib/cloudinary";
import NavigationMenu from "./NavigationMenu";

export default function LeftSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="left-sidebar">
      <div className="sidebar-top">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src={cdn("/iconcept-logo.png")}
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
              src={cdn("/circle-text.svg")}
              alt="Circle Text"
              width={210}
              height={210}
              className="circle-text"
            />
            <Image
              src={cdn("/iconcept-icon.png")}
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
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Dribbble">
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
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
          gap: 20px;
          margin-top: 30px;
        }

        .social-icons a {
              color: #999;
              transition: color .3s;
              border: 1px solid rgba(255, 255, 255, 0.1);
              margin: 0 2px;
              font-size: 14px;
              width: 50px;
              height: 50px;
              line-height: 50px;
              border-radius: 50%;
              transition: all 0.4s;
              display: flex;
              justify-content: center;
              align-items: center;
        }

        .social-icons a:hover {
          color: white;
          background: #fff;
          color: #1f1f1f;
        }

        .sidebar-bottom {
          padding-left: 30px;
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

        @media (max-width: 1200px) {
          .left-sidebar > * {
            width: 240px;
          }

          .circle-text-wrapper {
            width: 180px;
            height: 180px;
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
  );
}
