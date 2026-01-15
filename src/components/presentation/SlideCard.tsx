import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

interface SlideCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  style?: CSSProperties;
}

export const SlideCard = ({ children, className, glow = false, style }: SlideCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl glass p-6 md:p-8",
        glow && "border-primary/30 animate-pulse-glow",
        "transition-all duration-300 hover:border-primary/40 hover:bg-card/30",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
