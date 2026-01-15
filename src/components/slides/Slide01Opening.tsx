import { SlideContainer } from "../presentation/SlideContainer";
import fishcakeLogo from "@/assets/fishcake-logo-final.png";

export const Slide01Opening = () => {
  return (
    <SlideContainer>
      <div className="relative z-10 text-center">
        {/* Logo with enhanced glow */}
        <div className="mb-12 animate-scale-in">
          <div className="relative inline-flex items-center justify-center">
            {/* Outer glow rings */}
            <div className="absolute w-56 h-56 rounded-full bg-accent/25 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute w-48 h-48 rounded-full bg-accent/40 blur-2xl animate-pulse" />
            <div className="absolute w-44 h-44 rounded-full bg-primary/25 blur-xl animate-pulse" style={{ animationDuration: '2s' }} />

            {/* Main logo */}
            <div className="relative animate-glow-pulse">
              <img
                src={fishcakeLogo}
                alt="Fishcake Logo"
                className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-[0_0_40px_rgba(255,200,0,0.6)]"
              />
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-slide-up">
          Leading RWS:{" "}
          <span className="text-gradient">
            Fishcake's Real-World
          </span>
          <br />
          Web3 Solution
        </h1>

        {/* Subtitle */}
        <div className="mt-10 inline-block animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="glass px-6 py-3 rounded-full">
            <p className="text-muted-foreground text-lg md:text-xl font-mono">
              AI x Web3 Shenzhen Hackathon | Jan 24-25, 2026
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
