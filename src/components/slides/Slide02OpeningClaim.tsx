import { SlideContainer } from "../presentation/SlideContainer";

export const Slide02OpeningClaim = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center text-center w-full">
        {/* Small label */}
        <div className="mb-10 animate-fade-in">
          <span 
            className="text-primary text-base md:text-lg lg:text-xl font-mono tracking-[0.3em] uppercase font-medium"
            style={{
              textShadow: '0 0 20px rgba(255, 140, 0, 0.5), 0 0 40px rgba(255, 140, 0, 0.3)'
            }}
          >
            Opening Claim
          </span>
        </div>

        {/* Main statement */}
        <div className="space-y-6 md:space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight">
            Everyone Talks about Real-World Web3.
          </h1>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span 
              className="text-gradient"
              style={{
                textShadow: '0 0 60px rgba(255, 140, 0, 0.4), 0 0 120px rgba(255, 140, 0, 0.2)'
              }}
            >
              Fishcake executes it.
            </span>
          </h1>
        </div>

        {/* Subtle accent line */}
        <div 
          className="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-fade-in"
          style={{ animationDelay: "600ms" }}
        />
      </div>
    </SlideContainer>
  );
};
