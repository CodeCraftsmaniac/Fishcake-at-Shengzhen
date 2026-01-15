import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";
import { X, Check } from "lucide-react";

// Bold keywords turn complaints into indictments
const traditionalProblems = [
  <><span className="text-foreground font-semibold">Complex</span>, expensive to build and maintain</>,
  <><span className="text-foreground font-semibold">Fragmented</span> points that expire</>,
  <>Can't <span className="text-foreground font-semibold">interoperate</span> across brands</>,
  <>Businesses operate in <span className="text-foreground font-semibold">silos</span></>,
];

// Human language, no jargon
const comparison = [
  { old: "Loyalty program operator", fishcake: "Ecosystem contributor" },
  { old: "Issue your own points", fishcake: "Earn FCC by running real campaigns" },
  { old: "Isolated value", fishcake: "Shared value in unified economy" },
];

export const Slide10FCC = () => {
  return (
    <SlideContainer>
      <SlideTitle>For Businesses — Loyalty Without the Baggage</SlideTitle>

      {/* Traditional problems - compact */}
      <div className="mb-4 animate-slide-up">
        <h3 className="font-display text-base font-semibold text-muted-foreground mb-3">
          Traditional Loyalty Programs:
        </h3>
        <div className="space-y-1.5">
          {traditionalProblems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground/80 text-sm">
              <span className="text-primary">→</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Key claim - emphasized, highlighted */}
      <div className="text-center mb-3 animate-fade-in">
        <div className="inline-block bg-card/40 border border-border/40 rounded-lg px-6 py-3">
          <p className="text-lg md:text-xl text-foreground font-display font-semibold">
            Fishcake doesn't create "yet another points system."
          </p>
        </div>
      </div>

      {/* Model header - tighter spacing */}
      <h3 className="font-display text-base font-bold text-primary mb-3 text-center">
        The Fishcake Model
      </h3>

      {/* Comparison cards - sharper contrast */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Old way - dimmed with X icons */}
        <SlideCard className="opacity-70">
          <h4 className="text-muted-foreground font-semibold mb-3 text-center text-sm">Old way</h4>
          <div className="space-y-2">
            {comparison.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground/70 border-b border-border/20 pb-2 last:border-0 text-sm">
                <X className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                {item.old}
              </div>
            ))}
          </div>
        </SlideCard>

        {/* Fishcake way - bright with check icons */}
        <SlideCard glow>
          <h4 className="text-primary font-bold mb-3 text-center text-sm">Fishcake way</h4>
          <div className="space-y-2">
            {comparison.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground font-medium border-b border-border/30 pb-2 last:border-0 text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {item.fishcake}
              </div>
            ))}
          </div>
        </SlideCard>
      </div>

      {/* Bottom line */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
        <p className="text-base text-foreground font-display font-semibold">
          Run real events → Earn real rewards → Grow with the ecosystem
        </p>
      </div>
    </SlideContainer>
  );
};
