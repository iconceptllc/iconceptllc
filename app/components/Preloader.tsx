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

  useEffect(() => {
    // Simulate loading time (minimum 2 seconds for animation to be visible)
    const timer = setTimeout(() => {
      setLoading(false);
      // Start curtain animation after loading completes
      setTimeout(() => {
        setCurtainRaised(true);
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}

      {/* Preloader Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
          curtainRaised ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* Rotating Icon */}
        <div
          className={`transition-all duration-700 ${
            loading ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
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
      </div>

      {/* Curtain Layer */}
      <div
        className={`fixed inset-0 z-40 overflow-hidden pointer-events-none`}
        style={{ opacity: loading ? 0 : 1 }}
      >
        {/* Main Curtain */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-black transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            curtainRaised ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{ height: "120vh" }}
        >
          {/* Curved Top Edge */}
          <div className="absolute -top-24 left-0 right-0 h-32">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0,120 L0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,120 Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
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
      `}</style>
    </>
  );
}
