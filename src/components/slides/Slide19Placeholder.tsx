import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";
import { SlideList } from "../presentation/SlideList";

const steps = [
  "Scan QR code",
  "Claim reward (stablecoin or FCC)",
  "Done.",
];

const whatHappened = [
  "You became a Fishcake user",
  "This event (the merchant) delivered value directly to you",
  "No platform took a cut",
  "The transaction is on-chain, forever",
  "You are now part of the Gravity Loop",
];

export const Slide19Placeholder = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Live Demo — You're Already Inside the Loop</SlideTitle>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <SlideCard className="animate-scale-in">
          <h3 className="font-display text-xl font-semibold text-primary mb-4">What you're about to do:</h3>
          <SlideList items={steps} variant="number" />
        </SlideCard>

        <SlideCard glow className="animate-scale-in" style={{ animationDelay: "200ms" }}>
          <h3 className="font-display text-xl font-semibold text-primary mb-4">What just happened:</h3>
          <SlideList items={whatHappened} variant="check" />
        </SlideCard>
      </div>

      <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
        <p className="text-xl text-foreground font-medium mb-2">
          You're not watching a demo. <span className="text-primary font-bold">You're in one.</span>
        </p>
        <p className="text-3xl font-display font-bold text-gradient mt-4">
          This is RWS.
        </p>
      </div>
    </SlideContainer>
  );
};
