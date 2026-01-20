"use client";

import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "/clients/1.svg" },
  { name: "Client 2", logo: "/clients/2.svg" },
  { name: "Client 3", logo: "/clients/3.svg" },
  { name: "Client 4", logo: "/clients/4.svg" },
  { name: "Client 5", logo: "/clients/5.svg" },
  { name: "Client 6", logo: "/clients/6.svg" },
];

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="sec-head">
        <h6>OUR CLIENTS</h6>
      </div>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .clients-section {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 60px 40px;
          margin-top: 20px;
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

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 30px;
          align-items: center;
        }

        .client-item {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .client-item:hover {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .clients-section {
            padding: 40px 20px;
          }

          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
