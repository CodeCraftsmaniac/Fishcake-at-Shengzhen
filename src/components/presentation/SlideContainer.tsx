import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { GridBackground } from "./GridBackground";
import { FloatingElements } from "./FloatingElements";
import { GeometricShapes } from "./GeometricShapes";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export const SlideContainer = ({ children, className, centered = true }: SlideContainerProps) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full relative overflow-hidden",
        centered && "flex flex-col items-center justify-center",
        className
      )}
      style={{
        background: 'linear-gradient(135deg, hsl(240 15% 4%) 0%, hsl(240 12% 7%) 50%, hsl(240 10% 5%) 100%)'
      }}
    >
      {/* Layered background effects */}
      <GridBackground />
      <GeometricShapes />
      <AnimatedBackground />
      <FloatingElements />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-8 py-12 md:px-16 lg:px-24 animate-fade-in">
        {children}
      </div>
    </div>
  );
};
