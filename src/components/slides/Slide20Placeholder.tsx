import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideList } from "../presentation/SlideList";

const reasons = [
  "The Gravity Loop pulls",
  "The revenue is real",
  "The math works",
  "The product is live",
  "And now — you're in it",
];

export const Slide20Placeholder = () => {
  return (
    <SlideContainer>
      <SlideTitle>The Close</SlideTitle>
      
      <div className="text-center mb-10 animate-slide-up">
        <p className="text-xl text-muted-foreground mb-6">Let's be clear about what's happening.</p>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">
          Fishcake is not asking to be the RWS standard.
          <br />
          <span className="text-gradient">Fishcake is becoming the RWS standard.</span>
        </h2>
      </div>
      
      <p className="text-center text-muted-foreground mb-6 text-lg animate-fade-in" style={{ animationDelay: "300ms" }}>
        Not because we say so. Because:
      </p>
      
      <div className="max-w-md mx-auto mb-10">
        <SlideList items={reasons} variant="check" />
      </div>
      
      <div className="text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
        <div className="inline-block bg-card/50 border border-primary/30 rounded-xl px-8 py-6">
          <p className="text-lg text-muted-foreground mb-2">
            The question isn't whether RWS happens.
          </p>
          <p className="text-xl font-display font-bold text-foreground">
            The question is who builds the standard layer.
          </p>
          <p className="text-2xl font-display font-bold text-primary mt-4">
            We are.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
