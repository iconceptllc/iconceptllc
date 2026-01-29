"use client";

import Image from "next/image";

const clients = [
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.jpg",
  "/clients/4.jpg",
  "/clients/5.png",
  "/clients/6.jpg",
  "/clients/7.jpg",
  "/clients/8.jpg",
  "/clients/9.jpg",
  "/clients/10.jpg",
  "/clients/11.jpg",
  "/clients/12.jpg",
  "/clients/13.jpg",
  "/clients/14.jpg",
  "/clients/15.jpg",
  "/clients/16.jpg",
  "/clients/17.jpg",
  "/clients/18.jpg",
  "/clients/19.jpg",
  "/clients/20.jpg",
  "/clients/21.jpg",
  "/clients/22.jpg",
  "/clients/23.jpg",
  "/clients/24.jpg",
  "/clients/25.png",
  "/clients/26.jpg",
  "/clients/27.jpg",
  "/clients/28.jpg",
  "/clients/29.jpg",
  "/clients/30.jpg",
  "/clients/31.jpg",
  "/clients/32.jpg",
  "/clients/33.jpg",
  "/clients/34.jpg",
  "/clients/35.jpg",
  "/clients/36.jpg",
  "/clients/37.jpg",
  "/clients/38.jpg",
  "/clients/39.jpg",
  "/clients/40.jpg",
  "/clients/41.jpg",
  "/clients/42.jpg",
  "/clients/43.jpg",
  "/clients/44.png",
  "/clients/45.png",
  "/clients/46.jpg",
  "/clients/47.jpg",
  "/clients/48.png",
  "/clients/49.png",
  "/clients/50.jpg",
  "/clients/51.jpg",
  "/clients/52.jpg",
  "/clients/53.jpg",
  "/clients/54.jpg",
  "/clients/55.jpg",
  "/clients/56.jpg",
  "/clients/57.png",
  "/clients/58.jpg",
  "/clients/59.jpg",
  "/clients/60.jpg",
  "/clients/61.jpg",
  "/clients/62.jpg",
  "/clients/63.jpg",
  "/clients/64.png",
  "/clients/65.jpg",
];

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="sec-head">
        <h6>OUR CLIENTS</h6>
      </div>

      <div className="clients-carousel" aria-label="Client logos">
        <div className="clients-track">
          {clients.map((logo, index) => (
            <div key={`client-${index}`} className="client-item">
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
          {clients.map((logo, index) => (
            <div key={`client-dup-${index}`} className="client-item">
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
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

        .clients-carousel {
          overflow: hidden;
          position: relative;
        }

        .clients-track {
          display: flex;
          align-items: center;
          gap: 30px;
          width: max-content;
          animation: marquee 60s linear infinite;
        }

        .client-item {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          min-width: 160px;
          filter: grayscale(1);
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
            animation-duration: 45s;
          }
        }
      `}</style>
    </section>
  );
}
