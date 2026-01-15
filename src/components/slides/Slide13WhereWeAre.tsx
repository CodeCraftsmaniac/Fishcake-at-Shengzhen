import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";
import { ArrowDown, CheckCircle2 } from "lucide-react";

// Compressed steps - 4 instead of 6
const mechanism = [
  "Merchant funds campaign with stablecoins (e.g., USDT)",
  "Protocol fee (2–5%) flows into the Redemption Pool",
  "Pool assets held in USDT",
  "FCC holders redeem against the pool, anchoring a growing floor",
];

// Bold key phrases for emphasis
const properties = [
  <><span className="text-foreground font-semibold">Never leaves</span> (except via redemption)</>,
  <><span className="text-foreground font-semibold">On-chain, auditable</span>, real-time</>,
  <>The redeemable floor is <span className="text-foreground font-semibold">structurally designed to grow</span> over time</>,
];

export const Slide13WhereWeAre = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>The Redemption Pool — FCC's Value Anchor</SlideTitle>

      {/* Removed quotation marks - plain reads as true */}
      <p className="text-xl text-muted-foreground mb-8 text-center animate-slide-up">
        This is where revenue becomes real.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-display text-lg font-semibold text-primary mb-4">The Mechanism</h3>
          <div className="space-y-2">
            {mechanism.map((step, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-mono font-bold min-w-[20px]">{i + 1}.</span>
                  <span className="text-foreground text-sm">{step}</span>
                </div>
                {i < mechanism.length - 1 && (
                  <div className="flex justify-center py-1 ml-2">
                    <ArrowDown className="w-3 h-3 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-primary mb-4">Key Properties</h3>
          <div className="space-y-3">
            {properties.map((prop, i) => (
              <div key={i} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{prop}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideCard glow className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <p className="text-xl font-display font-bold text-foreground">
          This isn't a promise. <span className="text-primary">It's architecture.</span>
        </p>
      </SlideCard>
    </SlideContainer>
  );
};
