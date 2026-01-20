"use client";

import Image from "next/image";
import { useState } from "react";

const servicesSlides = [
  {
    title: "Content",
    subtitle: "Creation",
    description:
      "We create corporate videos, AI & CGI content, podcasts, and explainer videos that help businesses communicate clearly, engage audiences, and grow their brand effectively.",
    color: "slide-pink",
  },
  {
    title: "Marketing",
    subtitle: "Advertising",
    description:
      "We deliver digital marketing, social media marketing, and advertising solutions that boost brand visibility, attract customers, and drive measurable business growth.",
    color: "slide-yellow",
  },
  {
    title: "AI, CGI & 3D",
    subtitle: "Production",
    description:
      "We create AI, CGI, and 3D content that transforms ideas into immersive visuals, helping businesses stand out, engage audiences, and elevate brand storytelling.",
    color: "slide-coral",
  },
  {
    title: "Web",
    subtitle: "Solutions",
    description:
      "We design profile websites, eCommerce platforms, custom web applications, and mobile apps that help businesses build strong digital presence and drive growth.",
    color: "slide-teal",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + servicesSlides.length) % servicesSlides.length
    );
  };

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Column - Main Hero Box */}
        <div className="hero-main">
          {/* Background Image */}
          <Image
            src="/hero-bg.jpg"
            alt="Creative Digital Agency"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="hero-bg-image"
          />

          {/* Robot hand overlay image */}
          <div className="hero-overlay-image" />

          {/* Dark overlay gradient */}
          <div className="hero-overlay" />

          {/* Content Overlay */}
          <div className="hero-content">
            <div className="caption">
              <h1 className="title-creative">Creative</h1>
              <div className="title-row">
                <p className="tagline">
                  Thrive in a fast-paced digital world with cutting-edge
                  marketing, design, and development solutions.
                </p>
                <h1 className="title-digital">digital</h1>
              </div>
              <h1 className="title-agency">agency</h1>
            </div>

            <div className="clutch-rating">
              <div className="clutch-icon">
                <Image
                  src="/logo-clutch.svg"
                  alt="Clutch"
                  width={40}
                  height={40}
                />
              </div>
              <div className="clutch-info">
                <h6 className="rating-text">
                  4.9/5
                  <span className="stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#f5a623"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </span>
                </h6>
                <p>
                  Based on 24 reviews on <a href="#">Clutch</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          {/* Services Info - Top Box */}
          <div className="services-info">
            <h6>
              At iconcept we blend creativity with strategy, turning bold ideas
              into digital experiences that captivate and inspire.
            </h6>
            <div className="service-tags-wrapper">
              <div className="service-tags">
                <span className="tag tag-teal rotate-1">Web Solutions</span>
                <span className="tag tag-pink rotate-2">Video Production</span>
                <span className="tag tag-orange rotate-3">AI, 3D, CGI Production</span>
                <span className="tag tag-yellow rotate-4">Marketing & Advertising</span>
              </div>
              <div className="icon-circle icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              </div>
              <div className="icon-circle icon-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Services Slider - Bottom Box */}
          <div className={`services-slider ${servicesSlides[currentSlide].color}`}>
            <div className="slide-item">
              <div className="slide-header">
                <span className="plus-icon">+</span>
                <div>
                  <h4>{servicesSlides[currentSlide].title}</h4>
                  <span className="subtitle">
                    {servicesSlides[currentSlide].subtitle}
                  </span>
                </div>
              </div>
              <p>{servicesSlides[currentSlide].description}</p>
            </div>
            <div className="slider-controls">
              <button onClick={prevSlide} aria-label="Previous slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button onClick={nextSlide} aria-label="Next slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 10px;
          height: calc(100vh - 40px);
          min-height: 750px;
          max-height: 920px;
        }

        .hero-main {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          height: 100%;
        }

        .hero-main :global(.hero-bg-image) {
          z-index: 0;
        }

        .hero-overlay-image {
          position: absolute;
          bottom: -30%;
          right: 0;
          width: 100%;
          height: 100%;
          background-image: url('/md.png');
          background-size: cover;
          background-position: center bottom;
          pointer-events: none;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            transparent 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          padding: 30px 35px 35px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .caption {
          display: flex;
          flex-direction: column;
        }

        .caption h1 {
          font-size: 6rem;
          font-weight: 500;
          line-height: 0.95;
          color: white;
          margin: 0;
        }

        .title-creative {
          margin-bottom: 5px;
        }

        .title-row {
          display: flex;
          align-items: flex-start;
          gap: 25px;
        }

        .tagline {
          max-width: 180px;
          font-size: 0.75rem;
          font-weight: 300;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          padding-top: 8px;
        }

        .title-digital {
          flex: 1;
        }

        .title-agency {
          margin-top: 0;
        }

        .clutch-rating {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .clutch-icon {
          background: white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .rating-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .clutch-info p {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 3px;
        }

        .clutch-info a {
          color: white;
          text-decoration: underline;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 10px;
          height: 100%;
        }

        .services-info {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 25px;
          height: 50%;
          display: flex;
          flex-direction: column;
        }

        .services-info h6 {
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 1.5;
          color: white;
          margin: 0 0 20px 0;
        }

        .service-tags-wrapper {
          flex: 1;
          position: relative;
        }

        .service-tags {
          position: relative;
          height: 100%;
        }

        .tag {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 500;
          white-space: nowrap;
          position: absolute;
        }

        .tag-teal {
          background: #20c997;
          color: white;
        }

        .tag-pink {
          background: #ff6b81;
          color: white;
        }

        .tag-orange {
          background: #ff9f43;
          color: black;
        }

        .tag-yellow {
          background: #f5d547;
          color: black;
        }

        .rotate-1 {
          top: 5px;
          right: -10px;
          transform: rotate(90deg);
        }

        .rotate-2 {
          top: 45px;
          left: 50px;
          transform: rotate(15deg);
        }

        .rotate-3 {
          top: 85px;
          left: 30px;
          transform: rotate(20deg);
        }

        .rotate-4 {
          bottom: 10px;
          left: 20px;
          transform: rotate(15deg);
        }

        .icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #222;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: absolute;
        }

        .icon-1 {
          left: 5px;
          top: 50px;
        }

        .icon-2 {
          right: 15px;
          bottom: 5px;
        }

        .services-slider {
          border-radius: 15px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 50%;
        }

        .slide-item {
          padding: 20px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .slide-header {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 12px;
        }

        .plus-icon {
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1;
          opacity: 0.7;
        }

        .slide-item h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.1;
        }

        .slide-item .subtitle {
          font-size: 0.85rem;
          opacity: 0.8;
          display: block;
        }

        .slide-item p {
          font-size: 0.75rem;
          line-height: 1.55;
          opacity: 0.9;
          margin: 0;
        }

        .slide-pink {
          background: #f82cbb;
          color: white;
        }

        .slide-yellow {
          background: #dbbb06;
          color: black;
        }

        .slide-coral {
          background: #fd5a4a;
          color: white;
        }

        .slide-teal {
          background: #14aab5;
          color: white;
        }

        .slider-controls {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          padding: 0 22px 15px;
        }

        .slider-controls button {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.15);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: inherit;
        }

        .slider-controls button:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 1400px) {
          .caption h1 {
            font-size: 5rem;
          }
        }

        @media (max-width: 1200px) {
          .hero-grid {
            grid-template-columns: 1fr;
            height: auto;
            min-height: auto;
            max-height: none;
          }

          .hero-main {
            min-height: 600px;
          }

          .hero-right {
            flex-direction: row;
            height: 350px;
          }

          .services-info,
          .services-slider {
            height: 100%;
            width: 50%;
          }

          .caption h1 {
            font-size: 4rem;
          }
        }

        @media (max-width: 768px) {
          .caption h1 {
            font-size: 3rem;
          }

          .hero-right {
            flex-direction: column;
            height: auto;
          }

          .services-info,
          .services-slider {
            width: 100%;
            height: auto;
            min-height: 280px;
          }

          .tagline {
            display: none;
          }

          .title-row {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
