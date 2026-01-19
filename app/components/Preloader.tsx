"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [curtainRaised, setCurtainRaised] = useState(false);
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Start curtain raise immediately after icon starts fading
      setTimeout(() => {
        setCurtainRaised(true);
      }, 300);
      // Hide preloader completely after animations
      setTimeout(() => {
        setHidePreloader(true);
      }, 2000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (hidePreloader) {
    return <>{children}</>;
  }

  return (
    <>
      {children}

      {/* Curtain that rises up - this is BEHIND the loading screen */}
      <div
        className="fixed inset-0 z-40 overflow-hidden"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="curtain-wrapper"
          style={{
            transform: curtainRaised ? "translateY(-100%)" : "translateY(0)",
          }}
        >
          {/* Main curtain body with integrated curve using clip-path */}
          <div className="curtain-body">
            <svg
              className="curtain-svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L0,85 Q50,100 100,85 L100,0 Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading screen with icon - this is ON TOP */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        style={{
          opacity: loading ? 1 : 0,
          visibility: loading ? "visible" : "hidden",
          transition: "opacity 0.4s ease",
        }}
      >
        <Image
          src="/iconcept-icon.png"
          alt="iConcept Logo"
          width={120}
          height={120}
          className="animate-spin-slow"
          priority
        />
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }

        .curtain-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 115vh;
          will-change: transform;
          transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .curtain-body {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
        }

        .curtain-svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </>
  );
}
