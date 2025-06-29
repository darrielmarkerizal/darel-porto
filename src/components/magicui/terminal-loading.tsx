"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "./terminal";

interface TerminalLoadingProps {
  onComplete?: () => void;
  className?: string;
}

const commands = [
  "$ cd /darriel-portfolio",
  "$ npm start",
  "✓ Loading components...",
  "✓ Initializing portfolio...",
  "🚀 Welcome to Darriel's Portfolio!",
];

export const TerminalLoading = ({
  onComplete,
  className,
}: TerminalLoadingProps) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentCommandIndex < commands.length - 1) {
          setCurrentCommandIndex((prev) => prev + 1);
        } else if (!isComplete) {
          // All commands completed
          setIsComplete(true);
          const finalTimer = setTimeout(() => {
            onComplete?.();
          }, 800);
          return () => clearTimeout(finalTimer);
        }
      },
      currentCommandIndex === -1 ? 400 : 600
    );

    return () => clearTimeout(timer);
  }, [currentCommandIndex, isComplete, onComplete]);

  const progressPercentage = Math.min(
    Math.round(((currentCommandIndex + 1) / commands.length) * 100),
    100
  );

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen bg-background p-4",
        className
      )}
    >
      <div ref={terminalRef} className="w-full max-w-2xl">
        <Terminal className="bg-background/95 backdrop-blur-sm border-border/50 p-2">
          <div className="space-y-2 min-h-[200px]">
            {commands
              .slice(0, currentCommandIndex + 1)
              .map((command, index) => {
                const isCurrentCommand = index === currentCommandIndex;
                const isSuccess = command.startsWith("✓");
                const isWelcome = command.startsWith("🚀");

                return (
                  <div key={index} className="flex items-start">
                    {isCurrentCommand ? (
                      <TypingAnimation
                        duration={20}
                        className={cn(
                          "font-mono text-sm",
                          isSuccess && "text-green-400",
                          isWelcome && "text-blue-400 font-semibold",
                          !isSuccess && !isWelcome && "text-foreground"
                        )}
                      >
                        {command}
                      </TypingAnimation>
                    ) : (
                      <AnimatedSpan
                        delay={0}
                        className={cn(
                          "font-mono text-sm",
                          isSuccess && "text-green-400",
                          isWelcome && "text-blue-400 font-semibold",
                          !isSuccess && !isWelcome && "text-foreground"
                        )}
                      >
                        {command}
                      </AnimatedSpan>
                    )}
                  </div>
                );
              })}

            {/* Blinking cursor for current line */}
            {currentCommandIndex < commands.length - 1 && (
              <div className="flex items-center">
                <span className="font-mono text-sm text-foreground">$</span>
                <div className="ml-1 w-2 h-4 bg-foreground terminal-cursor" />
              </div>
            )}
          </div>
        </Terminal>

        {/* Progress bar - sama lebar dengan terminal */}
        <div className="mt-6 w-full">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Loading Darriel&apos;s Portfolio...</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-foreground h-2 rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progressPercentage}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoading;
