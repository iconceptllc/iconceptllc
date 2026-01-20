"use client";

import Image from "next/image";
import { useState } from "react";

const processSteps = [
  {
    number: "1",
    title: "Research",
    description:
      "Once the wireframe get approved at step 1, we'll build prototype design to visually the idea",
  },
  {
    number: "2",
    title: "Concept Design",
    description:
      "Once the wireframe get approved at step 1, we'll build prototype design to visually the idea",
  },
  {
    number: "3",
    title: "Implementation",
    description:
      "Once the wireframe get approved at step 1, we'll build prototype design to visually the idea",
  },
  {
    number: "4",
    title: "Testing",
    description:
      "Once the wireframe get approved at step 1, we'll build prototype design to visually the idea",
  },
];

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="process-section">
      <div className="sec-head">
        <h6>PROCESS</h6>
      </div>

      <div className="process-content">
        <div className="process-image">
          <Image
            src="/process.svg"
            alt="Process"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="process-accordion">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => setActiveIndex(index)}
              >
                <span className="step-number">{step.number}.</span>
                <span className="step-title">{step.title}</span>
                <span className="accordion-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`accordion-content ${activeIndex === index ? "open" : ""}`}
              >
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: #f5f5f5;
          border-radius: 15px;
          padding: 60px 40px;
          margin-top: 20px;
        }

        .sec-head {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding-bottom: 20px;
          margin-bottom: 60px;
        }

        .sec-head h6 {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: #333;
        }

        .process-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .process-image {
          padding: 20px;
        }

        .accordion-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 20px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .step-number {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
          margin-right: 15px;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 500;
          color: #333;
          flex: 1;
        }

        .accordion-icon {
          font-size: 1.5rem;
          color: #333;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .accordion-content.open {
          max-height: 200px;
        }

        .accordion-content p {
          padding: 0 0 20px 35px;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #666;
        }

        .accordion-item.active .accordion-header {
          color: #8b5cf6;
        }

        .accordion-item.active .step-number,
        .accordion-item.active .step-title {
          color: #8b5cf6;
        }

        @media (max-width: 1024px) {
          .process-content {
            grid-template-columns: 1fr;
          }

          .process-image {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 40px 20px;
          }
        }
      `}</style>
    </section>
  );
}
