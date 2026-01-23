"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cdn } from "@/lib/cloudinary";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [curtainRaised, setCurtainRaised] = useState(false);
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    let curtainTimer: ReturnType<typeof setTimeout> | null = null;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const minDisplayTimer = setTimeout(() => {
      setLoading(false);
      // Start curtain raise immediately after icon starts fading
      curtainTimer = setTimeout(() => {
        setCurtainRaised(true);
      }, 100);
      // Hide preloader quickly after animations
      hideTimer = setTimeout(() => {
        setHidePreloader(true);
      }, 900);
    }, 200);

    return () => {
      clearTimeout(minDisplayTimer);
      if (curtainTimer) {
        clearTimeout(curtainTimer);
      }
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
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
        <div className="animate-spin-slow">
          <Image
            src={cdn("/iconcept-icon.png")}
            alt="iConcept Logo"
            width={120}
            height={120}
            className="block"
            priority
          />
        </div>
      </div>

      <style jsx global>{`
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
