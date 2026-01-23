"use client";

import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "../components/LeftSidebar";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";

const highlights = [
  {
    title: "iConcept LLC establishment",
    description:
      "A well-recognized digital media service agency since 2000 operating in India and UAE. iConcept LLC is founded by Shibu K Kurup in the year 2000 in India and later in Dubai in the year 2005.",
  },
  {
    title: "iConcept LLC track record",
    description:
      "We have an excellent track record and have helped hundreds of companies across the globe including government and private organizations to reap the rewards of the new emerging digital media and internet revolution.",
  },
  {
    title: "Global service provider",
    description:
      "Our ability in providing best digital media solutions to our clients across the globe is one of the reason of our success. We are equipped to deliver a project in any international language and adapt the style that our clients require. Our support team is always available online 24/7 to serve our international customers.",
  },
  {
    title: "Awards and recognitions",
    description:
      "We are very proud of what we have achieved so far. We have got several awards and recognitions from our reputed clients and government organizations for our best quality work. These awards and recognitions are our inspirations for betterment of our business, but with continued hard work and we know the best is yet to come.",
  },
];

const services = [
  "Web solutions",
  "Mobile app development",
  "Video production",
  "Graphic design & content development",
  "Digital marketing",
  "Video brochure",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <LeftSidebar />

      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-spacer" />

          <main className="right-content">
            <section className="about-hero">
              <div className="hero-text">
                <h1>About Us</h1>
                <p className="subtitle">
                  Thank you for your interest to know about iConcept LLC.
                </p>
                <p className="lead">
                  iConcept LLC - combinations that make differences.
                </p>
              </div>
              <div className="hero-image">
                <Image
                  src="https://www.iconceptme.com/wp-content/uploads/2021/03/about-iconcept.jpg"
                  alt="iConcept team"
                  width={760}
                  height={540}
                  priority
                />
              </div>
            </section>

            <section className="about-highlights">
              <div className="sec-head">
                <h6>OUR STORY</h6>
              </div>
              <div className="highlight-grid">
                {highlights.map((item) => (
                  <div key={item.title} className="highlight-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="about-services">
              <div className="services-inner">
                <div className="services-copy">
                  <h2>What we do</h2>
                  <p>
                    iConcept LLC is a complete digital media service agency that
                    delivers results. We are good at what we do. The majority of
                    our business comes from repeat business and referrals. We
                    have grown organically with strong foundations and striving
                    for excellence.
                  </p>
                </div>
                <ul className="services-list">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="about-case-studies">
              <div className="case-card">
                <div>
                  <h2>Case studies</h2>
                  <p>
                    We have helped hundreds of companies across the globe
                    including government and private organizations to reap the
                    rewards of the new emerging digital media and internet
                    revolution. Please go through few of our projects.
                  </p>
                </div>
                <Link href="/portfolio" className="case-link">
                  View projects
                </Link>
              </div>
            </section>

            <ProcessSection />

            <section className="about-founder">
              <div className="founder-image">
                <Image
                  src="https://www.iconceptme.com/wp-content/uploads/2021/03/shibu-k-kurupu.png"
                  alt="Shibu K Kurup"
                  width={360}
                  height={480}
                />
              </div>
              <div className="founder-copy">
                <h2>Founder and Managing Director</h2>
                <h3>Shibu K Kurup</h3>
                <p className="role">Director, iConcept LLC</p>
                <p>
                  Shibu K Kurup is the founder and single owner of iConcept LLC
                  who takes care of creative direction and global business
                  development. Shibu has over 20 years of experience in
                  advertising and digital media services.
                </p>
                <p>
                  Shibu closely follow latest trend of digital technologies and
                  media services.
                </p>
                <p>
                  He is passionate in film making, photography, travel, creative
                  design, painting, public speaking and has a great sense of
                  humor that keeps all his clients, relative and friends in good
                  spirits.
                </p>
              </div>
            </section>

            <section className="about-contact">
              <div className="contact-card">
                <div>
                  <h2>Get in touch with us for a project discussion</h2>
                  <p className="contact-info">+971 50 3690 637</p>
                  <p className="contact-info">+971 50 3690 637</p>
                </div>
                <Link href="/contact" className="contact-link">
                  Talk to us, today
                </Link>
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: black;
          color: white;
        }

        .main-container {
          width: 80%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .content-wrapper {
          display: flex;
          gap: 12px;
        }

        .left-spacer {
          flex-shrink: 0;
          width: 300px;
        }

        .right-content {
          flex: 1;
          max-width: 1226px;
          padding: 20px 0;
        }

        .about-hero {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .about-hero h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 10px;
        }

        .lead {
          font-size: 1.25rem;
          color: #ffffff;
        }

        .hero-image :global(img) {
          width: 100%;
          height: auto;
          border-radius: 12px;
        }

        .about-highlights {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 60px 40px;
          margin-top: 20px;
        }

        .sec-head {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 20px;
          margin-bottom: 40px;
        }

        .sec-head h6 {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: white;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .highlight-card {
          background: #111;
          border-radius: 14px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .highlight-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .highlight-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
        }

        .about-services {
          background: #f5f5f5;
          border-radius: 15px;
          padding: 60px 40px;
          margin-top: 20px;
          color: #222;
        }

        .services-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .services-copy h2 {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .services-copy p {
          color: #555;
          line-height: 1.6;
        }

        .services-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }

        .services-list li {
          background: #fff;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 0.95rem;
        }

        .about-case-studies {
          margin-top: 20px;
        }

        .case-card {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 50px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .case-card h2 {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .case-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .case-link {
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }

        .case-link:hover {
          background: #fff;
          color: #111;
        }

        .about-founder {
          background: #f5f5f5;
          border-radius: 15px;
          padding: 60px 40px;
          margin-top: 20px;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          color: #222;
          align-items: center;
        }

        .founder-image :global(img) {
          width: 100%;
          height: auto;
          border-radius: 12px;
          background: #fff;
        }

        .founder-copy h2 {
          font-size: 2rem;
          margin-bottom: 8px;
        }

        .founder-copy h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .role {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 16px;
        }

        .founder-copy p {
          color: #555;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .about-contact {
          margin-top: 20px;
        }

        .contact-card {
          background: #1a1a1a;
          border-radius: 15px;
          padding: 50px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .contact-card h2 {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .contact-info {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 6px;
        }

        .contact-link {
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background: #fff;
          color: #111;
        }

        @media (max-width: 1024px) {
          .main-container {
            width: 90%;
          }

          .left-spacer {
            display: none;
          }

          .right-content {
            padding-top: 80px;
          }

          .about-hero,
          .services-inner,
          .about-founder {
            grid-template-columns: 1fr;
          }

          .case-card,
          .contact-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .about-hero,
          .about-highlights,
          .about-services,
          .case-card,
          .about-founder,
          .contact-card {
            padding: 40px 20px;
          }

          .about-hero h1 {
            font-size: 2.4rem;
          }

          .highlight-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
