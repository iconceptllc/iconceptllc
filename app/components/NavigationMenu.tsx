"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { cdn } from "@/lib/cloudinary";

const menuItems = [
  {
    title: "HOME",
    href: "/",
    subItems: null,
  },
  {
    title: "PAGES",
    href: "#",
    subItems: [
      { title: "About Us", href: "/about" },
      { title: "Our Services", href: "/services" },
      { title: "Our Team", href: "/team" },
      { title: "Pricing", href: "/pricing" },
      { title: "FAQS", href: "/faqs" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "PORTFOLIO",
    href: "#",
    subItems: [
      { title: "Portfolio Grid", href: "/portfolio" },
      { title: "Portfolio Masonry", href: "/portfolio-masonry" },
      { title: "Project Details", href: "/project-details" },
    ],
  },
  {
    title: "BLOG",
    href: "#",
    subItems: [
      { title: "Blog Grid", href: "/blog" },
      { title: "Blog Details", href: "/blog-details" },
    ],
  },
  {
    title: "CONTACT US",
    href: "/contact",
    subItems: null,
  },
];

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setClosing(false);
      setOverlayVisible(true);
      const timer = setTimeout(() => setContentVisible(true), 400);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setClosing(true);
    setContentVisible(false);
    const timer = setTimeout(() => {
      setOverlayVisible(false);
      setClosing(false);
      setExpandedItem(null);
      setHoveredItem(null);
      onClose();
    }, 700);
    return () => clearTimeout(timer);
  }, [onClose]);

  const toggleSubMenu = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!isOpen && !overlayVisible) return null;
  if (!mounted) return null;

  return createPortal(
    <div className={`hamenu ${overlayVisible ? "is-open" : ""} ${closing ? "is-closing" : ""}`}>
      <div className="hamenu-content">
        {/* Left - Menu Links */}
        <div className={`menu-links ${contentVisible ? "visible" : ""} ${closing ? "closing" : ""}`}>
          <ul className="main-menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-item ${expandedItem === index ? "expanded" : ""} ${
                  hoveredItem !== null && hoveredItem !== index ? "faded" : ""
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="menu-link-row">
                  {item.subItems ? (
                    <span
                      className="menu-title"
                      onClick={() => toggleSubMenu(index)}
                    >
                      {item.title}
                    </span>
                  ) : (
                    <Link href={item.href} className="menu-title" onClick={handleClose}>
                      {item.title}
                    </Link>
                  )}
                  {item.subItems && (
                    <button
                      className="toggle-btn"
                      onClick={() => toggleSubMenu(index)}
                    >
                      {expandedItem === index ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.subItems && (
                  <div className={`sub-menu ${expandedItem === index ? "open" : ""}`}>
                    <ul>
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <Link href={sub.href} onClick={handleClose}>
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className={`cont-info ${contentVisible ? "visible" : ""} ${closing ? "closing" : ""}`}>
          <button className="close-btn" onClick={handleClose} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="info-content">
            <p className="description">
              Elevate your digital presence with us - dynamic and stylish template designed for creative agencies and personal brands.
            </p>

            <div className="info-image">
              <Image
                src={cdn("/works/w3.jpg")}
                alt="iConcept"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="info-bottom">
              <div className="contact-details">
                <span className="label">OFFICE 1</span>
                <h6>11 West 53 Street, New York, NY 10019</h6>
                <h6><a href="tel:+15104570211">+1 510-457-0211</a></h6>
                <h6><a href="mailto:Hello@email.com">Hello@email.com</a></h6>
              </div>
              <div className="social-links">
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Behance</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hamenu {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #1d1d1d;
          transform: translateY(-100%);
          transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1);
          margin: 30px;
          border-radius: 25px;
        }

        .hamenu.is-open {
          transform: translateY(0);
        }

        .hamenu.is-closing {
          transform: translateY(-100%);
          transition-delay: 0.3s;
        }

        .hamenu-content {
          display: flex;
          width: 100%;
          height: 100%;
        }

        /* Left - Menu Links */
        .menu-links {
          flex: 1;
          padding: 80px 60px;
          display: flex;
          align-items: flex-start;
          overflow-y: auto;
          transform: translateY(40px);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
        }

        .menu-links.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .menu-links.closing {
          transform: translateY(80px);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }

        .main-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .menu-item {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .menu-item.faded {
          opacity: 0.3;
        }

        .menu-link-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
        }

        .menu-link-row :global(.menu-title),
        .menu-link-row .menu-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.3s ease;
          display: inline-block;
        }

        .menu-link-row :global(.menu-title:hover),
        .menu-link-row .menu-title:hover {
          opacity: 0.7;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.8rem;
          font-weight: 300;
          cursor: pointer;
          padding: 10px 15px;
          transition: color 0.3s ease;
        }

        .toggle-btn:hover {
          color: #fff;
        }

        /* Sub Menu */
        .sub-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding-left: 20px;
        }

        .sub-menu.open {
          max-height: 400px;
        }

        .sub-menu ul {
          list-style: none;
          padding: 10px 0;
          margin: 0;
        }

        .sub-menu li {
          padding: 8px 0;
        }

        .sub-menu :global(a) {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 400;
          transition: color 0.3s ease, padding-left 0.3s ease;
        }

        .sub-menu :global(a:hover) {
          color: #fff;
          padding-left: 10px;
        }

        /* Right - Contact Info */
        .cont-info {
          width: 45%;
          max-width: 550px;
          background: rgba(255, 255, 255, 0.03);
          padding: 60px 50px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-y: auto;
          transform: translateY(-40px);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
        }

        .cont-info.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .cont-info.closing {
          transform: translateY(-80px);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }

        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          z-index: 10;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(90deg);
        }

        .info-content {
          margin-top: 40px;
        }

        .description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .info-image {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .info-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .contact-details .label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          display: block;
          margin-bottom: 12px;
        }

        .contact-details h6 {
          font-size: 0.9rem;
          font-weight: 400;
          color: #fff;
          margin: 0 0 6px;
          line-height: 1.6;
        }

        .contact-details h6 :global(a) {
          color: #c9a84c;
          text-decoration: none;
        }

        .social-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: right;
        }

        .social-links li {
          margin-bottom: 8px;
        }

        .social-links :global(a) {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .social-links :global(a:hover) {
          color: #fff;
        }

        @media (max-width: 1024px) {
          .cont-info {
            display: none;
          }

          .menu-links {
            padding: 80px 40px;
          }

          .menu-link-row :global(.menu-title),
          .menu-link-row .menu-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .menu-links {
            padding: 60px 25px;
          }

          .menu-link-row :global(.menu-title),
          .menu-link-row .menu-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>,
    document.body
  );
}
