"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { cdn } from "@/lib/cloudinary";

const serviceTags = [
  { id: 1, label: "Video Production", color: "tag-pink", finalPos: { top: "15%", left: "25%", rotate: -5 } },
  { id: 2, label: "Web Solutions", color: "tag-cyan", finalPos: { top: "32%", left: "15%", rotate: 8 } },
  { id: 3, label: "Marketing & Advertising", color: "tag-yellow", finalPos: { top: "52%", left: "5%", rotate: -3 } },
  { id: 4, label: "AI, 3D, CGI Production", color: "tag-green", finalPos: { top: "72%", left: "10%", rotate: 5 } },
];

const servicesSlides = [
  {
    title: "Content",
    subtitle: "Creation",
    description:
      "We create corporate videos, AI & CGI content, podcasts, and explainer videos that help businesses communicate clearly, engage audiences, and grow their brand effectively.",
    color: "slide-pink",
  },
  {
    title: "Marketing",
    subtitle: "Advertising",
    description:
      "We deliver digital marketing, social media marketing, and advertising solutions that boost brand visibility, attract customers, and drive measurable business growth.",
    color: "slide-yellow",
  },
  {
    title: "AI, CGI & 3D",
    subtitle: "Production",
    description:
      "We create AI, CGI, and 3D content that transforms ideas into immersive visuals, helping businesses stand out, engage audiences, and elevate brand storytelling.",
    color: "slide-coral",
  },
  {
    title: "Web",
    subtitle: "Solutions",
    description:
      "We design profile websites, eCommerce platforms, custom web applications, and mobile apps that help businesses build strong digital presence and drive growth.",
    color: "slide-teal",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [transition, setTransition] = useState<{
    nextIndex: number;
    direction: "next" | "prev";
  } | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [tagsAnimated, setTagsAnimated] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [tagPositions, setTagPositions] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [draggingTag, setDraggingTag] = useState<number | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0, time: Date.now() });

  // Trigger falling animation after page loads
  useEffect(() => {
    const timer = setTimeout(() => setTagsAnimated(true), 800);
    // Animation complete after all tags have landed (4 tags * 0.3s delay + 0.8s animation)
    const completeTimer = setTimeout(() => setAnimationComplete(true), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  // Handle drag start
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent, tagId: number) => {
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    setDraggingTag(tagId);
    setDragStart({ x: clientX, y: clientY });
    lastMousePos.current = { x: clientX, y: clientY, time: Date.now() };
  }, []);

  // Handle drag move
  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (draggingTag === null) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const now = Date.now();
    const dt = Math.max(now - lastMousePos.current.time, 1);

    setVelocity({
      x: (clientX - lastMousePos.current.x) / dt * 16,
      y: (clientY - lastMousePos.current.y) / dt * 16,
    });

    lastMousePos.current = { x: clientX, y: clientY, time: now };

    const dx = clientX - dragStart.x;
    const dy = clientY - dragStart.y;

    setTagPositions(prev => ({
      ...prev,
      [draggingTag]: { x: dx, y: dy }
    }));
  }, [draggingTag, dragStart]);

  // Handle drag end with bounce back
  const handleDragEnd = useCallback(() => {
    if (draggingTag === null) return;

    const tagId = draggingTag;
    const currentPos = tagPositions[tagId] || { x: 0, y: 0 };
    const vel = velocity;

    // Apply throw effect - stronger multiplier for more dramatic throw
    const throwMultiplier = 15;
    const throwDistance = {
      x: vel.x * throwMultiplier,
      y: vel.y * throwMultiplier
    };

    // First, throw in the direction with momentum
    setTagPositions(prev => ({
      ...prev,
      [tagId]: {
        x: currentPos.x + throwDistance.x,
        y: currentPos.y + throwDistance.y
      }
    }));

    // Then bounce back to origin with a slight delay
    setTimeout(() => {
      setTagPositions(prev => ({
        ...prev,
        [tagId]: { x: 0, y: 0 }
      }));
    }, 300);

    setDraggingTag(null);
    setVelocity({ x: 0, y: 0 });
  }, [draggingTag, tagPositions, velocity]);

  const touchStartX = useRef(0);

  const nextSlide = () => {
    if (transition) return;
    const nextIndex = (currentSlide + 1) % servicesSlides.length;
    setTransition({ nextIndex, direction: "next" });
  };

  const prevSlide = () => {
    if (transition) return;
    const nextIndex =
      (currentSlide - 1 + servicesSlides.length) % servicesSlides.length;
    setTransition({ nextIndex, direction: "prev" });
  };

  const handleSliderTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleSliderTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  useEffect(() => {
    if (!transition) {
      setIsSliding(false);
      return;
    }

    const startTimer = setTimeout(() => setIsSliding(true), 30);
    const finishTimer = setTimeout(() => {
      setCurrentSlide(transition.nextIndex);
      setTransition(null);
      setIsSliding(false);
    }, 550);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(finishTimer);
    };
  }, [transition]);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Column - Main Hero Box */}
        <div className="hero-main">
          {/* Background Image */}
          <Image
            src={cdn("/hero-bg.jpg")}
            alt="Creative Digital Agency"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="hero-bg-image"
          />

          {/* Robot hand overlay image */}
          <div className="hero-overlay-image" />

          {/* Dark overlay gradient */}
          <div className="hero-overlay" />

          {/* Content Overlay */}
          <div className="hero-content">
            <div className="caption">
              <h1 className="title-creative">Creative</h1>
              <div className="title-row">
                <p className="tagline">
                  Thrive in a fast-paced digital world with cutting-edge
                  marketing, design, and development solutions.
                </p>
                <h1 className="title-digital">digital</h1>
              </div>
              <h1 className="title-agency">agency</h1>
            </div>

            
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          {/* Services Info - Top Box */}
          <div className="services-info">
            <h6>
              At iconcept we blend creativity with strategy, turning bold ideas
              into digital experiences that captivate and inspire.
            </h6>
            <div
              className="service-tags-wrapper"
              ref={containerRef}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div className="service-tags">
                {serviceTags.map((tag, index) => (
                  <span
                    key={tag.id}
                    className={`tag ${tag.color} ${tagsAnimated ? 'tag-landed' : 'tag-falling'} ${animationComplete ? 'draggable' : ''}`}
                    style={{
                      position: 'absolute',
                      top: tag.finalPos.top,
                      left: tag.finalPos.left,
                      ['--final-rotate' as string]: `${tag.finalPos.rotate}deg`,
                      ['--drag-x' as string]: `${tagPositions[tag.id]?.x || 0}px`,
                      ['--drag-y' as string]: `${tagPositions[tag.id]?.y || 0}px`,
                      animationDelay: `${index * 0.35}s`,
                      transition: draggingTag === tag.id ? 'none' : 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      cursor: draggingTag === tag.id ? 'grabbing' : 'grab',
                    }}
                    onMouseDown={(e) => handleDragStart(e, tag.id)}
                    onTouchStart={(e) => handleDragStart(e, tag.id)}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <div className="icon-circle icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              </div>
              <div className="icon-circle icon-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Services Slider - Bottom Box */}
          <div className="services-slider">
            <div className="slides-viewport" onTouchStart={handleSliderTouchStart} onTouchEnd={handleSliderTouchEnd}>
              <div
                className={`slides-track ${isSliding ? "is-animating" : ""}`}
                style={{
                  width: transition ? "calc(200% + 10px)" : "100%",
                  transform: transition
                    ? transition.direction === "next"
                      ? isSliding
                        ? "translateX(calc(-50% - 5px))"
                        : "translateX(0%)"
                      : isSliding
                        ? "translateX(0%)"
                        : "translateX(calc(-50% - 5px))"
                    : "translateX(0%)",
                }}
              >
                {transition ? (
                  transition.direction === "next" ? (
                    <>
                      <div className={`slide-item ${servicesSlides[currentSlide].color}`}>
                        <div className="slide-header">
                          <div>
                            <h4>{servicesSlides[currentSlide].title}</h4>
                            <span className="subtitle">
                              {servicesSlides[currentSlide].subtitle}
                            </span>
                          </div>
                        </div>
                        <p>{servicesSlides[currentSlide].description}</p>
                      </div>
                      <div className={`slide-item ${servicesSlides[transition.nextIndex].color}`}>
                        <div className="slide-header">
                          <div>
                            <h4>{servicesSlides[transition.nextIndex].title}</h4>
                            <span className="subtitle">
                              {servicesSlides[transition.nextIndex].subtitle}
                            </span>
                          </div>
                        </div>
                        <p>{servicesSlides[transition.nextIndex].description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`slide-item ${servicesSlides[transition.nextIndex].color}`}>
                        <div className="slide-header">
                          <div>
                            <h4>{servicesSlides[transition.nextIndex].title}</h4>
                            <span className="subtitle">
                              {servicesSlides[transition.nextIndex].subtitle}
                            </span>
                          </div>
                        </div>
                        <p>{servicesSlides[transition.nextIndex].description}</p>
                      </div>
                      <div className={`slide-item ${servicesSlides[currentSlide].color}`}>
                        <div className="slide-header">
                          <div>
                            <h4>{servicesSlides[currentSlide].title}</h4>
                            <span className="subtitle">
                              {servicesSlides[currentSlide].subtitle}
                            </span>
                          </div>
                        </div>
                        <p>{servicesSlides[currentSlide].description}</p>
                      </div>
                    </>
                  )
                ) : (
                  <div className={`slide-item ${servicesSlides[currentSlide].color}`}>
                    <div className="slide-header">
                      <div>
                        <h4>{servicesSlides[currentSlide].title}</h4>
                        <span className="subtitle">
                          {servicesSlides[currentSlide].subtitle}
                        </span>
                      </div>
                    </div>
                    <p>{servicesSlides[currentSlide].description}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="slider-controls">
              <button className="control-button prev" onClick={prevSlide} aria-label="Previous slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="control-button next" onClick={nextSlide} aria-label="Next slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 10px;
          height: calc(100vh - 40px);
          min-height: 750px;
          max-height: 920px;
        }

        .hero-main {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          height: 100%;
        }

        .hero-main :global(.hero-bg-image) {
          z-index: 0;
        }

        .hero-overlay-image {
          position: absolute;
          bottom: -30%;
          right: 0;
          width: 100%;
          height: 100%;
          background-image: url('${cdn("/md.png")}');
          background-size: cover;
          background-position: center bottom;
          pointer-events: none;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            transparent 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          padding: 30px 35px 35px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .caption {
          display: flex;
          flex-direction: column;
        }

        .caption h1 {
          font-size: 6rem;
          font-weight: 500;
          line-height: 0.95;
          color: white;
          margin: 0;
        }

        .title-creative {
          margin-bottom: 5px;
        }

        .title-row {
          display: flex;
          align-items: flex-start;
          gap: 25px;
        }

        .tagline {
          color: #ffffffb3;
          max-width: 230px;
          margin: 0;
          padding-top: 25px;
          font-size: .85rem;
          font-weight: 30;
          line-height: 1.1rem;
          text-align: right;
        }

        .title-digital {
          flex: 1;
        }

        .title-agency {
          margin-top: 0;
        }

       

        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 10px;
          height: 100%;
        }

        .services-info {
          background: #fff;
          border-radius: 15px;
          padding: 25px;
          height: 55%;
          display: flex;
          flex-direction: column;
        }

        .services-info h6 {
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.2;
          color: #212529;
          margin: 0 0 20px 0;
        }

        .service-tags-wrapper {
          flex: 1;
          position: relative;
          overflow: visible;
        }

        .service-tags {
          position: absolute;
          inset: 0;
          overflow: visible;
        }

        .tag {
          padding: 8px 18px;
          border-radius: 25px;
          font-size: 0.75rem;
          font-weight: 500;
          white-space: nowrap;
          user-select: none;
          z-index: 10;
        }

        .tag-falling {
          opacity: 0;
          transform: translateY(-400px) rotate(0deg);
        }

        .tag-landed {
          animation: fallAndBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .tag-landed.draggable {
          animation: none;
          transform: translate(var(--drag-x, 0px), var(--drag-y, 0px)) rotate(var(--final-rotate, 0deg));
        }

        @keyframes fallAndBounce {
          0% {
            opacity: 0;
            transform: translateY(-400px) rotate(0deg);
          }
          50% {
            opacity: 1;
          }
          70% {
            transform: translate(var(--drag-x, 0px), calc(var(--drag-y, 0px) + 15px)) rotate(var(--final-rotate, 0deg));
          }
          85% {
            transform: translate(var(--drag-x, 0px), calc(var(--drag-y, 0px) - 8px)) rotate(var(--final-rotate, 0deg));
          }
          100% {
            opacity: 1;
            transform: translate(var(--drag-x, 0px), var(--drag-y, 0px)) rotate(var(--final-rotate, 0deg));
          }
        }

        .tag-pink {
          background: #ff6b9d;
          color: white;
        }

        .tag-cyan {
          background: #17c3d6;
          color: white;
        }

        .tag-yellow {
          background: #f5d547;
          color: black;
        }

        .tag-green {
          background: #7edd8a;
          color: black;
        }

        .icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #222;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: absolute;
          z-index: 5;
        }

        .icon-1 {
          left: 5px;
          top: 5%;
        }

        .icon-2 {
          right: 5px;
          bottom: 5%;
        }

        .services-slider {
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          height: 45%;
        }

        .slides-viewport {
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .slides-track {
          display: flex;
          height: 100%;
          transform: translateX(0%);
          gap: 10px;
        }

        .slides-track.is-animating {
          transition: transform 0.5s ease;
        }

        .slide-item {
          padding: 20px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .slide-header {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 12px;
        }

        .plus-icon {
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1;
          opacity: 0.7;
        }

        .slide-item h4 {
          font-size: 1.7rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.1;
        }

        .slide-item .subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
          display: block;
        }

        .slide-item p {
          font-size: 0.9rem;
          line-height: 1.75;
          opacity: 0.9;
          margin: 0;
        }

        .slide-pink {
          background: #f82cbb;
          color: white;
        }

        .slide-yellow {
          background: #dbbb06;
          color: black;
        }

        .slide-coral {
          background: #fd5a4a;
          color: white;
        }

        .slide-teal {
          background: #14aab5;
          color: white;
        }

        .slider-controls {
          position: absolute;
          bottom: 15px;
          right: 22px;
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .slider-controls .control-button {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          color: #fff;
        }

        .slider-controls .control-button svg {
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .slider-controls .control-button:hover {
          background: #fff;
          color: #1f1f1f;
          transform: translateY(-1px);
        }

        .slider-controls .control-button:active {
          transform: translateY(0);
        }

        .slider-controls .control-button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
        }

        .slider-controls .control-button.prev:hover svg {
          transform: translateX(-2px);
        }

        .slider-controls .control-button.next:hover svg {
          transform: translateX(2px);
        }

        @media (max-width: 1400px) {
          .caption h1 {
            font-size: 5rem;
          }
        }

        @media (max-width: 1200px) {
          .hero-grid {
            grid-template-columns: 1fr;
            height: auto;
            min-height: auto;
            max-height: none;
          }

          .hero-main {
            min-height: 600px;
          }

          .hero-right {
            flex-direction: row;
            height: 350px;
          }

          .services-info,
          .services-slider {
            height: 100%;
            width: 50%;
          }

          .caption h1 {
            font-size: 4rem;
          }
        }

        @media (max-width: 768px) {
          .caption h1 {
            font-size: 3rem;
          }

          .hero-right {
            flex-direction: column;
            height: auto;
          }

          .services-info,
          .services-slider {
            width: 100%;
            height: auto;
            min-height: 280px;
          }

          .tagline {
            display: none;
          }

          .title-row {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
