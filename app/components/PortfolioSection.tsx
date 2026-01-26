"use client";

import Image from "next/image";
import Link from "next/link";
import { cdn } from "@/lib/cloudinary";

const portfolioItems = [
  {
    type: "video",
    src: cdn("/videos/iconcept-showreel.mp4"),
    title: "iconcept llc",
    tags: ["UI/UX", "Webflow"],
    colSpan: "full",
  },
  {
    type: "image",
    src: cdn("/works/aptech.webp"),
    title: "Aptech Computer Training",
    tags: ["Website Development", "UI/UX Design"],
    colSpan: "7",
  },
  {
    type: "video",
    src: cdn("/works/labrada_supplement.mp4"),
    title: "Labrada Supplement",
    tags: ["Video", "UI/UX Design"],
    colSpan: "5",
  },
  {
    type: "video",
    src: cdn("/works/helin_eren.mp4"),
    title: "Helin Erin",
    tags: ["Branding"],
    colSpan: "4",
  },
  {
    type: "image",
    src: cdn("/works/flc.webp"),
    title: "FLC Marketing Group",
    tags: ["Website Development", "UI/UX"],
    colSpan: "8",
  },
  {
    type: "image",
    src: cdn("/works/eindravilas.webp"),
    title: "Eindravilas",
    tags: ["Website Development", "UI/UX"],
    colSpan: "6",
  },
  {
    type: "image",
    src: cdn("/works/almeshal.webp"),
    title: "Al Meshal Electronics & Electrical Appliances Co LLC",
    tags: ["E-commerce Website", "UI/UX Design"],
    colSpan: "6",
  },
  {
    type: "video",
    src: cdn("/works/space-breeze.mp4"),
    title: "Space Breeze",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "4",
    height: "600px",
  },
  {
    type: "video",
    src: cdn("/works/blue_swim.mp4"),
    title: "Blue swim",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "4",
    height: "600px",
  },
  {
    type: "video",
    src: cdn("/works/rose_abwaje_guidness.mp4"),
    title: "Rose Abwaje Guidness",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "4",
    height: "600px",
  },
  {
    type: "video",
    src: cdn("/works/trop.mp4"),
    title: "Blue swim",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "4",
    height: "600px",
  },
   {
    type: "video",
    src: cdn("/works/trop_violet_fabric_softner.mp4"),
    title: "Blue swim",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "4",
    height: "600px",
  },
  {
    type: "video",
    src: cdn("/works/rose_evil_intredeu.mp4"),
    title: "Blue swim",
    tags: ["Branding", "UI/UX", "Motion"],
    colSpan: "4",
    height: "600px",
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
              <div className="media-wrapper" style={item.height ? { height: item.height } : undefined}>
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
              <h6 className="item-title">{item.title}</h6>
              </div>
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
          width: 100%;
          box-sizing: border-box;
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
          gap: 30px 20px;
          width: 100%;
        }

        .portfolio-item {
          min-width: 0;
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
          height: 400px;
        }

        .media-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #1f1f1f, transparent);
          opacity: 0.7;
          pointer-events: none;
        }

        .media-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tags {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          z-index: 2;
          max-width: 70%;
          justify-content: flex-end;
        }

        .tags span {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
          padding: 7px 15px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #fff;
        }

        .item-title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 500;
          color: #fff;
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 2;
          right: 20px;
        }

        @media (max-width: 1400px) {
          .col-7,
          .col-8 {
            grid-column: span 8;
          }
          .col-5 {
            grid-column: span 4;
          }
        }

        @media (max-width: 1024px) {
          .portfolio-section {
            padding: 50px 30px 40px;
          }

          .col-7,
          .col-5,
          .col-4,
          .col-8,
          .col-6 {
            grid-column: span 6;
          }

          .media-wrapper {
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 40px 20px;
            border-radius: 10px;
          }

          .sec-head {
            margin-bottom: 40px;
          }

          .portfolio-grid {
            gap: 20px 15px;
          }

          .col-full,
          .col-7,
          .col-5,
          .col-4,
          .col-8,
          .col-6 {
            grid-column: span 12;
          }

          .media-wrapper {
            height: 300px;
          }

          .tags {
            top: 10px;
            right: 10px;
            gap: 5px;
          }

          .tags span {
            padding: 5px 12px;
            font-size: 0.75rem;
          }

          .item-title {
            bottom: 15px;
            left: 15px;
            right: 15px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .portfolio-section {
            padding: 30px 15px;
          }

          .media-wrapper {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
