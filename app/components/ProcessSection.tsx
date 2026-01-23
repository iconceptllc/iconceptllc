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
      </div>

      <div className="process-timeline">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className={`process-step ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="step-card">
              <div className="step-meta">
                <span className="step-count">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="step-title">{step.title}</span>
              </div>
              <p>{step.description}</p>
            </div>
            <div className="step-dot">{index + 1}</div>
          </div>
        ))}
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

        .process-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 10px 0;
        }

        .process-timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(0, 0, 0, 0.1);
          transform: translateX(-50%);
        }

        .process-step {
          position: relative;
          display: flex;
          align-items: center;
        }

        .process-step::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 60px;
          height: 2px;
          background: rgba(0, 0, 0, 0.08);
          transform: translateY(-50%);
        }

        .process-step.left {
          justify-content: flex-end;
        }

        .process-step.left::after {
          right: calc(50% + 22px);
        }

        .process-step.right {
          justify-content: flex-start;
        }

        .process-step.right::after {
          left: calc(50% + 22px);
        }

        .step-card {
          width: min(460px, 100%);
          background: #ffffff;
          border-radius: 16px;
          padding: 24px 28px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .process-step.left .step-card {
          margin-right: 60px;
        }

        .process-step.right .step-card {
          margin-left: 60px;
        }

        .step-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .step-count {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: rgba(0, 0, 0, 0.6);
          text-transform: uppercase;
        }

        .step-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: #222;
        }

        .step-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #666;
        }

        .step-dot {
          position: absolute;
          left: 50%;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #8b5cf6;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transform: translateX(-50%);
          box-shadow: 0 10px 20px rgba(139, 92, 246, 0.35);
        }

        @media (max-width: 1024px) {
          .process-timeline::before {
            left: 20px;
          }

          .process-step {
            justify-content: flex-start;
          }

          .process-step.left,
          .process-step.right {
            padding-left: 20px;
          }

          .process-step.left::after,
          .process-step.right::after {
            left: 20px;
            right: auto;
            width: 24px;
          }

          .process-step.left .step-card,
          .process-step.right .step-card {
            margin: 0 0 0 50px;
          }

          .step-dot {
            left: 20px;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 40px 20px;
          }

          .step-card {
            padding: 20px 22px;
          }
        }
      `}</style>
    </section>
  );
}
