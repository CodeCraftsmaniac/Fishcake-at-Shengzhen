import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";

const barrierData = [
  { barrier: '"Crypto is complicated"', solution: "Wallet creation in 3 seconds" },
  { barrier: '"I don\'t know how"', solution: "Scan QR → Claim → Done" },
  { barrier: '"I need help"', solution: "In-app help guides you" },
  { barrier: '"I don\'t trust it"', solution: "Local business verification" },
  { barrier: '"I don\'t want tokens"', solution: "Stablecoin cashback option" },
  { barrier: '"Points always expire"', solution: "Your rewards are on-chain, permanent" },
];

export const Slide11RedemptionPool = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>For Users — Web3 That Doesn't Feel Like Web3</SlideTitle>

      <div className="text-center mb-6 animate-slide-up">
        <p className="text-xl text-foreground">
          We don't start with "investment." We start with{" "}
          <span className="text-primary font-semibold">"free coffee."</span>
        </p>
      </div>

      {/* Simplified principle boxes - one line each, more space */}
      <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto">
        <div className="text-center py-4">
          <p className="text-muted-foreground/60 line-through text-sm mb-2">Not "buy this token"</p>
          <p className="text-foreground font-medium text-lg">
            Local places. Real people.
          </p>
        </div>
        <div className="text-center py-4">
          <p className="text-muted-foreground/60 line-through text-sm mb-2">Not "trust the code"</p>
          <p className="text-foreground font-medium text-lg">
            Trust shops you already know.
          </p>
        </div>
      </div>

      {/* Table - centered on slide, left-aligned columns */}
      <div className="flex justify-center mb-8">
        <div className="inline-block">
          <div className="flex border-b border-border/40 pb-2 mb-2">
            <span className="text-muted-foreground/70 text-xs uppercase tracking-wider w-[220px]">
              User barrier
            </span>
            <span className="text-muted-foreground/70 text-xs uppercase tracking-wider w-[280px]">
              How Fishcake kills it
            </span>
          </div>
          <div className="space-y-2">
            {barrierData.map((row, i) => (
              <div key={i} className="flex items-center py-2 border-b border-border/20">
                <span className="text-foreground font-semibold w-[220px] text-sm">
                  {row.barrier}
                </span>
                <span className="text-muted-foreground/70 w-[280px] text-sm">
                  {row.solution}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final line - bigger, more prominent */}
      <div className="text-center pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <p className="text-xl md:text-2xl font-display font-bold text-primary">
          Scan. Claim. Use real value.
        </p>
      </div>
    </SlideContainer>
  );
};
