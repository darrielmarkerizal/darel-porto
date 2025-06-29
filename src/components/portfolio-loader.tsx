"use client";

import { useEffect, useRef, useState } from "react";
import { TerminalLoading } from "./magicui/terminal-loading";
import { cn } from "@/lib/utils";

interface PortfolioLoaderProps {
  children: React.ReactNode;
}

export const PortfolioLoader = ({ children }: PortfolioLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [gsap, setGsap] = useState<any>(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Dynamic import GSAP
  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsapModule = await import("gsap");
        setGsap(gsapModule.gsap);
        setGsapLoaded(true);
      } catch (error) {
        console.warn("GSAP not found, falling back to CSS transitions");
        setGsapLoaded(true); // Set to true even on error to proceed
      }
    };
    loadGSAP();
  }, []);

  // Initialize content state when GSAP is loaded
  useEffect(() => {
    if (gsap && contentRef.current && isLoading && gsapLoaded) {
      // Initial state for content
      gsap.set(contentRef.current, {
        y: 50,
        opacity: 0,
      });
    }
  }, [gsap, isLoading, gsapLoaded]);

  const handleLoadingComplete = () => {
    if (gsap && loaderRef.current && contentRef.current && gsapLoaded) {
      // GSAP animation sequence
      const tl = gsap.timeline({
        onComplete: () => {
          setShowLoader(false);
          setIsLoading(false);
        },
      });

      // Animate loader out
      tl.to(loaderRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
        // Animate content in
        .fromTo(
          contentRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.3"
        );
    } else {
      // Fallback without GSAP - ensure content is visible
      setShowLoader(false);
      setTimeout(() => {
        setIsLoading(false);
        // Ensure content is visible in fallback
        if (contentRef.current) {
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translateY(0)";
        }
      }, 500);
    }
  };

  return (
    <>
      {showLoader && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-50 bg-background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          }}
        >
          <TerminalLoading onComplete={handleLoadingComplete} />
        </div>
      )}

      <div
        ref={contentRef}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        style={{
          // Fallback styles untuk memastikan content terlihat
          opacity: isLoading ? 0 : 1,
          transform: isLoading ? "translateY(50px)" : "translateY(0)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PortfolioLoader;
