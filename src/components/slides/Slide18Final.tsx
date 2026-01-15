import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";

export const Slide18Final = () => {
  return (
    <SlideContainer>
      <div className="text-center">
        <SlideTitle>Before We Continue — A Question</SlideTitle>
        
        <div className="mt-12 mb-16 animate-slide-up">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            How many of you have claimed a reward today?
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          (Pause for hands)
        </p>
        
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <p className="text-xl text-foreground">
            If you haven't yet — <span className="text-primary font-semibold">you're about to.</span>
          </p>
          <p className="text-xl text-foreground">
            If you have — <span className="text-primary font-semibold">you already know what comes next.</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
