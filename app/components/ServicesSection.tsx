"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { cdn } from "@/lib/cloudinary";

const services = [
  {
    number: "01",
    title: "Web Solutions",
    items: ["UI/UX Design", "Web/Mobile App Development", "E-commerce Storefront"],
    image: cdn("/imgs/serv/s1.jpg"),
  },
  {
    number: "02",
    title: "Marketing Services",
    items: ["Digital Marketing", "Social Media Marketing", "Branding & Advertissing"],
    image: cdn("/imgs/serv/s2.jpg"),
  },
  {
    number: "03",
    title: "Content Production",
    items: ["Ad Film Production", "CGI, AI & Motion Graphics", "Audio Video Editing"],
    image: cdn("/imgs/serv/s3.jpg"),
  },
  {
    number: "04",
    title: "3D & Motion",
    items: ["2D & 3D Animation", "Product Visualization", "Explainer Videos"],
    image: cdn("/imgs/serv/s4.jpg"),
  },
];

export default function ServicesSection() {
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent, index: number) => {
    const el = imgRefs.current[index];
    if (!el) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  return (
    <section className="services-section">
      <div className="sec-head">
        <h6>OUR SERVICES</h6>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item"
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            <div className="service-row">
              <div className="service-left">
                <span className="number">{service.number}</span>
                <Link href="/services" className="service-title">
                  {service.title}
                </Link>
              </div>
              <div className="service-middle">
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>+ {item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-right">
                <Link href="/services" className="arrow-btn">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div
              className="reveal-img"
              ref={(el) => { imgRefs.current[index] = el; }}
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </div>
        ))}
      </div>

      <div className="view-all">
        <Link href="/services" className="view-all-btn">
          <span>VIEW ALL SERVICES</span>
          <span className="arrow-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </Link>
      </div>

      <style jsx>{`
        .services-section {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 60px 40px;
          margin-top: 20px;
          overflow: hidden;
          max-width: 100%;
          box-sizing: border-box;
        }

        .sec-head {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 20px;
          margin-bottom: 60px;
        }

        .sec-head h6 {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: white;
        }

        .service-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px 0;
          position: relative;
        }

        .service-item:first-child {
          padding-top: 0;
        }

        .reveal-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 200px;
          height: 140px;
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          pointer-events: none;
          opacity: 0;
          transform: translate(0, 0);
          transition: opacity 0.3s ease;
          z-index: 5;
          margin-top: -70px;
          margin-left: -100px;
        }

        .service-item:hover .reveal-img {
          opacity: 1;
        }

        .service-row {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          align-items: center;
          gap: 20px;
          z-index: 6;
          position: relative;
        }

        .service-left {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .number {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .service-left :global(.service-title) {
          font-size: 2rem;
          font-weight: 500;
          color: white;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .service-left :global(.service-title:hover) {
          opacity: 0.7;
        }

        .service-middle ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-middle li {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
        }

        .service-middle li:last-child {
          margin-bottom: 0;
        }

        .service-right :global(.arrow-btn) {
          width: 50px;
          height: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }
          .service-right {
              z-index: 99;
          }

        .service-right :global(.arrow-btn:hover) {
          background: white;
          color: black;
        }

        .service-right :global(.arrow-btn) svg {
          width: 24px;
          height: 24px;
        }

        .view-all {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }

        .view-all :global(.view-all-btn) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          background: #8b5cf6;
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .view-all :global(.view-all-btn:hover) {
          background: #7c3aed;
        }

        .arrow-icon {
          display: flex;
        }

        .arrow-icon svg {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 1024px) {
          .service-row {
            grid-template-columns: 1fr auto;
          }

          .service-middle {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 40px 20px;
          }

          .service-left :global(.service-title) {
            font-size: 1.5rem;
          }

          .service-left {
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
}
