"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  startDelay?: number;
}

const TypingAnimation = ({
  text,
  duration = 200,
  className,
  startDelay = 0,
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentIndex, duration, text]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setCurrentIndex(0);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  return (
    <div className={cn("flex items-center", className)}>
      <span className="inline-block">{displayedText}</span>
      {showCursor && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}
    </div>
  );
};

export default TypingAnimation;
