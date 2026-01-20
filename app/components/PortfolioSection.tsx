"use client";

import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    type: "video",
    src: "/videos/iconcept-showreel.mp4",
    title: "iconcept llc",
    tags: ["UI/UX", "Webflow"],
    colSpan: "full",
  },
  {
    type: "image",
    src: "/works/w1.png",
    title: "Newz - Magazine Site",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "7",
  },
  {
    type: "image",
    src: "/works/w2.png",
    title: "LW Rebrand",
    tags: ["Branding"],
    colSpan: "5",
  },
  {
    type: "image",
    src: "/works/w4.png",
    title: "LW Rebrand",
    tags: ["Branding"],
    colSpan: "4",
  },
  {
    type: "video",
    src: "/videos/w8.mp4",
    title: "Newz - Magazine Site",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "8",
  },
  {
    type: "image",
    src: "/works/w7.png",
    title: "LW Rebrand",
    tags: ["Branding"],
    colSpan: "6",
  },
  {
    type: "image",
    src: "/works/w6.png",
    title: "ZumarCons Firm",
    tags: ["UI/UX", "Webflow"],
    colSpan: "6",
  },
];

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="sec-head">
        <h6>OUR PROJECTS</h6>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className={`portfolio-item col-${item.colSpan}`}>
            <Link href="/project-details" className="item-link">
              <div className="media-wrapper">
                {item.type === "video" ? (
                  <video autoPlay muted loop playsInline>
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
                <div className="tags">
                  {item.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
              <h6 className="item-title">{item.title}</h6>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .portfolio-section {
          background: #f5f5f5;
          border-radius: 15px;
          padding: 60px 40px 50px;
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

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
        }

        .portfolio-item {
          margin-bottom: 10px;
        }

        .col-full {
          grid-column: span 12;
        }

        .col-7 {
          grid-column: span 7;
        }

        .col-5 {
          grid-column: span 5;
        }

        .col-4 {
          grid-column: span 4;
        }

        .col-8 {
          grid-column: span 8;
        }

        .col-6 {
          grid-column: span 6;
        }

        .portfolio-item :global(.item-link) {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .media-wrapper {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          aspect-ratio: 16/10;
        }

        .col-full .media-wrapper {
          aspect-ratio: 21/9;
        }

        .media-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tags {
          position: absolute;
          bottom: 15px;
          left: 15px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tags span {
          background: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #333;
        }

        .item-title {
          margin-top: 15px;
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }

        @media (max-width: 1024px) {
          .col-7,
          .col-5,
          .col-4,
          .col-8 {
            grid-column: span 6;
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 40px 20px;
          }

          .col-full,
          .col-7,
          .col-5,
          .col-4,
          .col-8,
          .col-6 {
            grid-column: span 12;
          }
        }
      `}</style>
    </section>
  );
}
