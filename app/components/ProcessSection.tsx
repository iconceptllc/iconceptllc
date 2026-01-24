"use client";

const processSteps = [
  {
    title: "Meeting",
    description:
      "Initially we sit with the client to understand their requirement, business goals, and targeted audience, and advise the suitable services.",
  },
  {
    title: "Planning",
    description:
      "Plan and schedule the production process to complete the project within the fixed targeted date.",
  },
  {
    title: "Designing",
    description:
      "Design and present the artwork to the client for feedback, further modification, and confirmation.",
  },
  {
    title: "Developing",
    description:
      "Develop the project, update the progress to the client as required, and complete the project as per schedule.",
  },
  {
    title: "Testing",
    description:
      "Once development is completed, we go through in-depth tests to make sure the project is error free and up to the mark to publish.",
  },
  {
    title: "Delivery",
    description:
      "After thorough testing we deliver and publish the project and provide further support to maintain it so the client benefits.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="sec-head">
        <h6>OUR PROCESS</h6>
        <p className="sec-subtitle">
          A streamlined flow from first meeting to final delivery.
        </p>
      </div>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <div key={step.title} className="process-card">
            <div className="card-inner">
              <span className="step-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .process-section {
          background: #0b0b0b;
          border-radius: 18px;
          padding: 70px 50px;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .process-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at top left,
              rgba(139, 92, 246, 0.18),
              transparent 45%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(14, 165, 233, 0.16),
              transparent 45%
            );
          pointer-events: none;
        }

        .sec-head {
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 20px;
          margin-bottom: 50px;
          z-index: 1;
        }

        .sec-head h6 {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: white;
          margin-bottom: 12px;
        }

        .sec-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .process-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .process-grid::before {
          content: "";
          position: absolute;
          inset: -40px;
          background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );
          background-size: 140px 140px;
          opacity: 0.3;
          pointer-events: none;
        }

        .process-card {
          position: relative;
          padding: 1px;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.6),
            rgba(14, 165, 233, 0.5)
          );
          transition: transform 0.3s ease;
        }

        .process-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.5),
            rgba(14, 165, 233, 0.4)
          );
          opacity: 0;
          filter: blur(18px);
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .process-card:hover {
          transform: translateY(-6px);
        }

        .process-card:hover::after {
          opacity: 0.6;
        }

        .card-inner {
          position: relative;
          z-index: 1;
          background: #0f0f0f;
          border-radius: 17px;
          padding: 26px;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .step-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          font-weight: 600;
          letter-spacing: 1px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
        }

        .card-inner h3 {
          font-size: 1.3rem;
          color: #fff;
        }

        .card-inner p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 50px 20px;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .card-inner {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
