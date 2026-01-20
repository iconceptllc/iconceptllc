"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Carol Buyers",
    role: "Ceo Founder",
    image: "/testim/1.jpg",
    quote:
      '"Working with was an outstanding experience. Their ability to understand our vision and translate it into a clean, functional design exceeded our expectations. We received incredible feedback on the new website."',
  },
  {
    name: "Carol Buyers",
    role: "Ceo Founder",
    image: "/testim/2.jpg",
    quote:
      '"Working with was an outstanding experience. Their ability to understand our vision and translate it into a clean, functional design exceeded our expectations. We received incredible feedback on the new website."',
  },
  {
    name: "B. Gordon",
    role: "Ceo Founder",
    image: "/testim/4.jpg",
    quote:
      '"Working with was an outstanding experience. Their ability to understand our vision and translate it into a clean, functional design exceeded our expectations. We received incredible feedback on the new website."',
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="testimonials-section">
      <div className="testimonials-grid">
        {/* Main Testimonial Slider */}
        <div className="testimonial-main">
          <div className="testimonial-item">
            <div className="testimonial-header">
              <div className="author-info">
                <div className="author-image">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="author-details">
                  <h6>{testimonials[currentSlide].name}</h6>
                  <span>{testimonials[currentSlide].role}</span>
                </div>
              </div>
              <div className="company-logo">
                <Image
                  src="/envato-logo.svg"
                  alt="Envato"
                  width={80}
                  height={30}
                />
              </div>
            </div>
            <div className="testimonial-content">
              <p>{testimonials[currentSlide].quote}</p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="cta-box">
          <h3>Do you have a project in your mind?</h3>
          <p>
            If you want to get inspired with past works, here is the showcase of
            our recent projects.
          </p>
          <a href="/contact" className="cta-btn">
            <span>START A PROJECT</span>
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
          </a>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .testimonials-section {
          margin-top: 20px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 10px;
        }

        .testimonial-main {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 40px;
        }

        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .author-image {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
        }

        .author-details h6 {
          font-size: 1.125rem;
          font-weight: 500;
          color: white;
        }

        .author-details span {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 4px;
          display: block;
        }

        .testimonial-content {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
        }

        .testimonial-content p {
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.6;
          color: white;
        }

        .cta-box {
          background: #8b5cf6;
          border-radius: 15px;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .cta-box h3 {
          font-size: 1.75rem;
          font-weight: 500;
          color: white;
          margin-bottom: 20px;
        }

        .cta-box p {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          flex: 1;
        }

        .cta-box :global(.cta-btn) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          background: black;
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          margin-top: 30px;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .cta-box :global(.cta-btn:hover) {
          background: #333;
        }

        .cta-box :global(.cta-btn) svg {
          width: 20px;
          height: 20px;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: white;
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .testimonial-main,
          .cta-box {
            padding: 30px 20px;
          }

          .testimonial-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
