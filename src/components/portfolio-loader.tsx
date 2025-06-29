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
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Dynamic import GSAP
  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsapModule = await import("gsap");
        setGsap(gsapModule.gsap);
      } catch (error) {
        console.warn("GSAP not found, falling back to CSS transitions");
      }
    };
    loadGSAP();
  }, []);

  const handleLoadingComplete = () => {
    if (gsap && loaderRef.current && contentRef.current) {
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
      // Fallback without GSAP
      setShowLoader(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (gsap && contentRef.current && isLoading) {
      // Initial state for content
      gsap.set(contentRef.current, {
        y: 50,
        opacity: 0,
      });
    }
  }, [gsap, isLoading]);

  if (!isLoading) {
    return <div ref={contentRef}>{children}</div>;
  }

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
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100",
          "transition-opacity duration-500"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default PortfolioLoader;
