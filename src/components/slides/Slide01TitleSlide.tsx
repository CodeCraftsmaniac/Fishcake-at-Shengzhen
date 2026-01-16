import { SlideContainer } from "../presentation/SlideContainer";
import fishcakeLogo from "@/assets/fishcake-logo-final.png";
import { useEffect, useState } from "react";

// Particle component for floating particles
const Particle = ({ delay, size, left, duration }: { delay: number; size: number; left: string; duration: number }) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-primary/40 to-accent/30"
    style={{
      width: size,
      height: size,
      left,
      bottom: '-20px',
      animation: `rise ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      filter: 'blur(1px)',
    }}
  />
);

// Floating orb component
const FloatingOrb = ({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <div className={`absolute rounded-full ${className}`} style={style} />
);

export const Slide01TitleSlide = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <SlideContainer>
      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs with premium gradient */}
        <FloatingOrb
          className="w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
          style={{
            top: '-200px',
            right: '-200px',
            animation: 'orb-1 20s ease-in-out infinite',
          }}
        />
        <FloatingOrb
          className="w-[500px] h-[500px] bg-gradient-radial from-accent/15 via-accent/5 to-transparent blur-3xl"
          style={{
            bottom: '-150px',
            left: '-150px',
            animation: 'orb-2 25s ease-in-out infinite',
          }}
        />
        <FloatingOrb
          className="w-[400px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl"
          style={{
            top: '30%',
            left: '10%',
            animation: 'float 15s ease-in-out infinite',
          }}
        />

        {/* Rising particles */}
        {[...Array(12)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.8}
            size={Math.random() * 6 + 3}
            left={`${8 + i * 8}%`}
            duration={8 + Math.random() * 4}
          />
        ))}

        {/* Radial lines emanating from center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div
            className="w-[800px] h-[800px]"
            style={{
              background: `repeating-conic-gradient(
                from 0deg,
                transparent 0deg 8deg,
                rgba(255, 140, 0, 0.03) 8deg 10deg
              )`,
              animation: 'spin 120s linear infinite',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo with premium multi-layer glow effect */}
        <div
          className={`mb-14 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="relative inline-flex items-center justify-center">
            {/* Outer glow rings - original style */}
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

        {/* Main title with premium typography */}
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h1 className="font-display font-bold leading-none mb-4">
            {/* Fishcake text with shimmer effect */}
            <span
              className="block text-5xl md:text-7xl lg:text-8xl relative"
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 25%, #FF8C00 50%, #FFD700 75%, #FF8C00 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s ease-in-out infinite',
                textShadow: '0 0 80px rgba(255,140,0,0.3)',
              }}
            >
              Fishcake EventFi
            </span>
          </h1>

          {/* Subtitle with elegant styling */}
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mt-4"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Leading Real-World Web3 Solution (RWS)
          </p>
        </div>

        {/* Decorative line divider */}
        <div
          className={`flex items-center justify-center gap-4 my-10 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/60" style={{ boxShadow: '0 0 10px rgba(255,140,0,0.5)' }} />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Hackathon pill with glassmorphism */}
        <div
          className={`inline-block transition-all duration-1000 ease-out delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <div
            className="relative px-8 py-4 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(20,20,30,0.8) 50%, rgba(255,200,0,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,140,0,0.2)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Shine sweep effect */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                animation: 'sweepShine 5s ease-in-out infinite',
              }}
            />

            <p
              className="relative z-10 font-mono text-lg md:text-xl tracking-wider"
              style={{
                background: 'linear-gradient(90deg, rgba(255,140,0,0.9) 0%, rgba(255,255,255,0.8) 50%, rgba(255,200,0,0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI x Web3 Shenzhen Hackathon | Jan 24-25, 2026
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={`mt-12 flex justify-center transition-all duration-1000 ease-out delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="w-40 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,140,0,0.7) 50%, transparent 100%)',
              boxShadow: '0 0 20px rgba(255,140,0,0.4)',
            }}
          />
        </div>
      </div>

      {/* Custom keyframes style injection */}
      <style>{`
        @keyframes rise {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes sweepShine {
          0% {
            transform: translateX(-100%);
          }
          50%, 100% {
            transform: translateX(200%);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </SlideContainer>
  );
};
