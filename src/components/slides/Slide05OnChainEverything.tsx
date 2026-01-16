/**
 * SLIDE 5 — HIDDEN
 * This slide is NOT displayed on the website per V2 spec.
 * May be used in future universal Fishcake Deck.
 */

import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";

const frictionData = [
  {
    friction: "Payment habits",
    reality: <>People won't <span className="text-foreground font-semibold">change</span> overnight</>,
  },
  {
    friction: "Onboarding",
    reality: <>Seed phrases still <span className="text-foreground font-semibold">scare</span> people</>,
  },
  {
    friction: "Security",
    reality: <>"I'll lose my money" <span className="text-foreground font-semibold">fear</span> is real</>,
  },
  {
    friction: "Compliance",
    reality: <><span className="text-foreground font-semibold">Regulations</span> aren't going away</>,
  },
];

export const Slide05OnChainEverything = () => {
  return (
    <SlideContainer>
      <SlideTitle>Why "On-Chain Everything" Isn't the Answer (Yet)</SlideTitle>

      <p className="text-xl text-muted-foreground mb-8 text-center animate-slide-up">
        The real world has friction. Most crypto projects ignore it.
      </p>

      <div className="mb-10 max-w-3xl mx-auto">
        <div className="flex border-b border-primary/40 pb-3 mb-2">
          <span className="text-primary font-bold text-sm uppercase tracking-wider min-w-[160px]">
            Friction
          </span>
          <span className="text-primary font-bold text-sm uppercase tracking-wider">
            Reality
          </span>
        </div>

        <div className="space-y-4">
          {frictionData.map((row, i) => (
            <div
              key={i}
              className="flex items-center py-3 border-b border-border/30 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-foreground font-medium min-w-[160px]">
                {row.friction}
              </span>
              <span className="text-muted-foreground/80">
                {row.reality}
              </span>
            </div>
          ))}
        </div>
      </div>

      <SlideCard className="animate-fade-in max-w-3xl mx-auto px-10 py-8" style={{ animationDelay: "400ms" }}>
        <div className="space-y-5 text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            "Everything on-chain" is the endgame.{" "}
            <span className="text-primary font-semibold text-xl">RWS is how we get there.</span>
          </p>

          <p className="text-muted-foreground">
            The winners aren't the ones who skip steps.{" "}
            <span className="text-foreground font-medium">They're the ones who build the steps.</span>
          </p>

          <p
            className="text-primary font-display font-bold text-2xl pt-3"
            style={{ letterSpacing: '0.04em' }}
          >
            Fishcake builds the steps.
          </p>
        </div>
      </SlideCard>
    </SlideContainer>
  );
};
