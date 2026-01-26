"use client";

import LeftSidebar from "./components/LeftSidebar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import NumbersSection from "./components/NumbersSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import ClientsSection from "./components/ClientsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      {/* Fixed Left Sidebar */}
      <LeftSidebar />

      {/* Main Container */}
      <div className="main-container">
        <div className="content-wrapper">
          {/* Left Spacer (350px to account for fixed sidebar) */}
          <div className="left-spacer" />

          {/* Right Scrollable Content */}
          <main className="right-content">
            <HeroSection />
            <PortfolioSection />
            <ServicesSection />
            <ProcessSection />
            <NumbersSection />
            {/* <TestimonialsSection /> */}
            <ClientsSection />
            <Footer />
          </main>
        </div>
      </div>

      <style jsx>{`
        .home-page {
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
          min-width: 0;
          max-width: 1226px;
          padding: 20px 0;
        }

        @media (max-width: 1600px) {
          .main-container {
            width: 85%;
          }

          .left-spacer {
            width: 280px;
          }
        }

        @media (max-width: 1400px) {
          .main-container {
            width: 90%;
          }

          .left-spacer {
            width: 260px;
          }
        }

        @media (max-width: 1200px) {
          .left-spacer {
            width: 240px;
          }
        }

        @media (max-width: 1024px) {
          .main-container {
            width: 92%;
          }

          .left-spacer {
            display: none;
          }

          .right-content {
            padding-top: 80px;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            width: 100%;
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
}
