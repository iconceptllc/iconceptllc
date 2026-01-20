"use client";

import LeftSidebar from "./components/LeftSidebar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import NumbersSection from "./components/NumbersSection";
import TestimonialsSection from "./components/TestimonialsSection";
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
            <TestimonialsSection />
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
          gap: 24px;
        }

        .left-spacer {
          flex-shrink: 0;
          width: 350px;
        }

        .right-content {
          flex: 1;
          max-width: 1226px;
          padding: 20px 0;
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
        }
      `}</style>
    </div>
  );
}
