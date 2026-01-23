"use client";

import Image from "next/image";
import { cdn } from "@/lib/cloudinary";

const clients = [
  { name: "Client 1", logo: cdn("/clients/1.svg") },
  { name: "Client 2", logo: cdn("/clients/2.svg") },
  { name: "Client 3", logo: cdn("/clients/3.svg") },
  { name: "Client 4", logo: cdn("/clients/4.svg") },
  { name: "Client 5", logo: "/clients/5.svg" },
  { name: "Client 6", logo: "/clients/6.svg" },
];

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="sec-head">
        <h6>OUR CLIENTS</h6>
      </div>

      <div className="clients-carousel" aria-label="Client logos">
        <div className="clients-track">
          {clients.map((client, index) => (
            <div key={`client-${index}`} className="client-item">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
          {clients.map((client, index) => (
            <div key={`client-dup-${index}`} className="client-item">
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

        .clients-carousel {
          overflow: hidden;
          position: relative;
        }

        .clients-track {
          display: flex;
          align-items: center;
          gap: 30px;
          width: max-content;
          animation: marquee 24s linear infinite;
        }

        .client-item {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          min-width: 160px;
        }

        .client-item:hover {
          opacity: 1;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .clients-section {
            padding: 40px 20px;
          }

          .clients-track {
            gap: 20px;
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}
