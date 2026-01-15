import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";

const comparison = [
  { rwa: "Tokenize a building", rws: "Tokenize the interaction with a business" },
  { rwa: "Asset representation", rws: "Value creation" },
  { rwa: "Static", rws: "Dynamic" },
  { rwa: "Finance-first", rws: "Service-first" },
];

export const Slide04OnChainEverything = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>RWA vs. RWS — The Upgrade</SlideTitle>
      
      {/* Definitions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 animate-slide-up">
        <div className="text-center p-4">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">RWA</span> (Real-World Assets): Put real things on-chain.
          </p>
        </div>
        <div className="text-center p-4">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">RWS</span> (Real-World Solutions): Put real value creation on-chain.
          </p>
        </div>
      </div>
      
      {/* Comparison Table */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <SlideCard>
          <h3 className="font-display text-xl font-semibold text-muted-foreground mb-6 text-center">
            RWA
          </h3>
          <ul className="space-y-4">
            {comparison.map((item, i) => (
              <li key={i} className="text-muted-foreground border-b border-border/30 pb-3 last:border-0">
                {item.rwa}
              </li>
            ))}
          </ul>
        </SlideCard>
        
        <SlideCard glow>
          <h3 className="font-display text-xl font-semibold text-primary mb-6 text-center">
            RWS
          </h3>
          <ul className="space-y-4">
            {comparison.map((item, i) => (
              <li key={i} className="text-foreground font-medium border-b border-border/30 pb-3 last:border-0">
                {item.rws}
              </li>
            ))}
          </ul>
        </SlideCard>
      </div>
      
      {/* One-liner */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <div className="inline-block bg-card/50 border border-border/50 rounded-xl px-8 py-4">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">RWS</span> = embedding blockchain's value-creation capability into real-world services and interactions.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
