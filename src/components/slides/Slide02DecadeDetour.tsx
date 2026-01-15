import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";

export const Slide02DecadeDetour = () => {
  return (
    <SlideContainer>
      <SlideTitle>Opening Claim</SlideTitle>

      <div className="flex flex-col items-center justify-center mt-16 animate-fade-in">
        <div className="text-center max-w-4xl space-y-8">
          <p className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-relaxed">
            RWS doesn't work without execution.
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-relaxed">
            <span className="text-gradient">Fishcake is the execution layer.</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
