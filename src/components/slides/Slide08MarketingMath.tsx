import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { ArrowDown, RotateCcw } from "lucide-react";

const loopSteps = [
  "Merchant creates campaign (funds with stablecoin)",
  "Users discover & claim rewards",
  "Foot traffic increases (real, measurable)",
  "Merchant sees ROI — 100% on-chain verifiable",
  "Merchant creates NEXT campaign",
  "More users attracted → More merchants join",
];

export const Slide08MarketingMath = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>The Gravity Loop</SlideTitle>

      <p className="text-lg text-muted-foreground mb-2 text-center animate-slide-up">
        Why Fishcake Grows Without Marketing Spend
      </p>

      <p className="text-center text-foreground mb-8 animate-fade-in">
        This is the core mechanism. <span className="text-primary font-semibold">Understand this, understand everything.</span>
      </p>

      {/* The Loop Visualization */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-card/30 border border-border/50 rounded-2xl p-6">
          <div className="space-y-2">
            {loopSteps.map((step, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono font-bold min-w-[24px]">{i + 1}.</span>
                  <span className="text-foreground">{step}</span>
                </div>
                {i < loopSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Flywheel Box */}
          <div className="mt-4 bg-primary/10 border border-primary/30 rounded-xl p-4 text-center animate-scale-in" style={{ animationDelay: "600ms" }}>
            <div className="flex items-center justify-center gap-2 mb-1">
              <RotateCcw className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-primary font-display font-bold text-lg">FLYWHEEL ACCELERATES</span>
            </div>
            <p className="text-sm text-muted-foreground">(No marketing spend required to grow)</p>
          </div>

          <div className="flex justify-center py-2">
            <ArrowDown className="w-4 h-4 text-primary" />
          </div>
          <p className="text-center text-muted-foreground text-sm">Loop back to Step 1</p>
        </div>
      </div>

      <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "700ms" }}>
        <p className="text-lg text-foreground">
          This isn't a feature. <span className="font-semibold">It's a force.</span>
        </p>

        <div className="flex justify-center gap-8 text-sm">
          <span className="text-muted-foreground"><span className="text-accent font-bold">500+</span> events already run</span>
          <span className="text-muted-foreground"><span className="text-accent font-bold">$50,000+</span> on-chain rewards</span>
        </div>

        <p className="text-muted-foreground">
          Traditional platforms spend to grow. <span className="text-primary font-semibold">Fishcake grows because the loop pulls.</span>
        </p>
      </div>
    </SlideContainer>
  );
};
