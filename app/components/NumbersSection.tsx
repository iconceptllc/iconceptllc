"use client";

const stats = [
  {
    value: "95%",
    description: "Clients satisfied and repeating",
  },
  {
    value: "125+",
    description: "projects completed in 20 countries",
  },
  {
    value: "24",
    description: "award winning and honorable recognition",
  },
];

export default function NumbersSection() {
  return (
    <section className="numbers-section">
      <div className="numbers-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2>{stat.value}</h2>
            <span>{stat.description}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .numbers-section {
          padding: 80px 0;
        }

        .numbers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-item h2 {
          font-size: 4rem;
          font-weight: 600;
          color: white;
          margin-bottom: 15px;
        }

        .stat-item span {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .numbers-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .stat-item h2 {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
