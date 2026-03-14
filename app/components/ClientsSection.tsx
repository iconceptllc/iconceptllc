"use client";

import Image from "next/image";

const clients = [
  { src: "/clients/ajmal.webp",                                    alt: "Ajmal" },
  { src: "/clients/almarai.svg",                                   alt: "Almarai" },
  { src: "/clients/americana.webp",                                alt: "Americana" },
  { src: "/clients/snickers.svg",                                  alt: "Snickers" },
  { src: "/clients/persil.svg",                                    alt: "Persil" },
  { src: "/clients/hisense.svg",                                   alt: "Hisense" },
  { src: "/clients/extra.svg",                                     alt: "Extra" },
  { src: "/clients/sap-ariba.svg",                                 alt: "SAP Ariba" },
  { src: "/clients/nbf.svg",                                       alt: "NBF" },
  { src: "/clients/nmc.svg",                                       alt: "NMC" },
  { src: "/clients/emsteel.webp",                                  alt: "Emirates Steel" },
  { src: "/clients/the-department-of-economic-development-dubai.webp", alt: "Dubai DED" },
  { src: "/clients/uae-ministry-of-public-works.webp",             alt: "UAE Ministry of Public Works" },
  { src: "/clients/sharjah-taxi.svg",                              alt: "Sharjah Taxi" },
  { src: "/clients/arkan.webp",                                    alt: "Arkan" },
  { src: "/clients/dunes.svg",                                     alt: "Dunes" },
  { src: "/clients/galaxy.svg",                                    alt: "Galaxy" },
  { src: "/clients/flc-marketing-group.svg",                       alt: "FLC Marketing Group" },
  { src: "/clients/circor_logo_white.svg",                         alt: "Circor" },
  { src: "/clients/sapora.svg",                                    alt: "Sapora" },
  { src: "/clients/wem.svg",                                       alt: "WEM" },
  { src: "/clients/bg-middleeast.webp",                            alt: "BG Middle East" },
  { src: "/clients/dac.webp",                                      alt: "DAC" },
  { src: "/clients/alpro.webp",                                    alt: "Alpro" },
  { src: "/clients/alyoum.webp",                                   alt: "Al Youm" },
  { src: "/clients/aptech.webp",                                   alt: "Aptech" },
  { src: "/clients/enfm.webp",                                     alt: "ENFM" },
  { src: "/clients/jewels.webp",                                   alt: "Jewels" },
  { src: "/clients/mamis-illam.webp",                              alt: "Mamis Illam" },
  { src: "/clients/maryaj.webp",                                   alt: "Maryaj" },
  { src: "/clients/meridian.webp",                                 alt: "Meridian" },
  { src: "/clients/pert.webp",                                     alt: "PERT" },
  { src: "/clients/petromar.webp",                                 alt: "Petromar" },
  { src: "/clients/solas.webp",                                    alt: "Solas" },
  { src: "/clients/trigon.webp",                                   alt: "Trigon" },
  { src: "/clients/alamani.webp",                                  alt: "Al Amani" },
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
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
          {clients.map((client, index) => (
            <div key={`client-dup-${index}`} className="client-item">
              <Image
                src={client.src}
                alt={client.alt}
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
