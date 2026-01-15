import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideTable } from "../presentation/SlideTable";
import { SlideList } from "../presentation/SlideList";

// More concrete labels + bold keywords in struggles
const struggles = [
  { approach: "Legacy loyalty + crypto", struggle: "Bolt-on blockchain, not native" },
  { approach: "Payments-first crypto apps", struggle: "Start with finance, not service" },
  { approach: "NFT drops as marketing", struggle: "Speculative, not sustainable" },
  { approach: "Adtech middlemen", struggle: "Can't solve the trust/fee problem" },
];

const advantages = [
  "Native RWS design — Built for real-world services from day one",
  "The Gravity Loop — Self-reinforcing growth without marketing spend",
  "Revenue-backed tokenomics — Real money, not speculation",
  "Live product — Shipping today, scaling next",
];

export const Slide16LiveDemo = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Why Fishcake Wins</SlideTitle>

      <div className="mb-8">
        <h3 className="font-display text-lg font-semibold text-muted-foreground mb-4 text-center">
          The Competitive Landscape
        </h3>
        <SlideTable
          headers={["Other approaches", "Why they struggle"]}
          rows={struggles}
        />
      </div>

      {/* Divider + Emphasized section */}
      <div className="pt-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="w-24 h-0.5 bg-primary/40 mx-auto mb-4" />

        <h3 className="font-display text-lg font-bold text-primary mb-4 text-center">
          Fishcake's Unfair Advantages
        </h3>
        <div className="max-w-3xl mx-auto">
          <SlideList items={advantages} variant="number" />
        </div>
      </div>
    </SlideContainer>
  );
};
