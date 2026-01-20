"use client";

import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseEnter = useCallback(() => {
    setIsHoveringLink(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHoveringLink(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const addLinkListeners = () => {
      const links = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initial setup
    addLinkListeners();

    // Use MutationObserver to handle dynamically added links
    const observer = new MutationObserver(() => {
      addLinkListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      const links = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [handleMouseEnter, handleMouseLeave]);

  // Hide on touch devices
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: position.x + 10,
        top: position.y + 12,
      }}
    >
      <div className={`cursor-circle ${isHoveringLink ? "expanded" : ""}`} />
    </div>
  );
}
