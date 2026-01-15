import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";
import { CheckCircle2 } from "lucide-react";

// Fishcake Wallet now first (emphasized as gateway app)
const status = [
  { component: "Fishcake Wallet", status: "Live", emphasized: true },
  { component: "Fishcake Event AI", status: "Live", emphasized: false },
  { component: "Core ecosystem structure", status: "Complete", emphasized: false },
  { component: "Core applications", status: "Production-ready", emphasized: false },
];

export const Slide15Hackathon = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Where We Are Today</SlideTitle>

      <p className="text-xl text-muted-foreground mb-10 text-center animate-slide-up">
        Not "building toward" — <span className="text-primary font-semibold">already live.</span>
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {status.map((s, i) => (
          <SlideCard
            key={i}
            className="animate-scale-in"
            style={{ animationDelay: `${i * 100}ms` }}
            glow={s.emphasized}
          >
            <div className="flex items-center justify-between">
              <span className={`font-medium ${s.emphasized ? 'text-foreground font-semibold' : 'text-foreground'}`}>
                {s.component}
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm">{s.status}</span>
              </div>
            </div>
          </SlideCard>
        ))}
      </div>

      {/* Tighter statement */}
      <SlideCard glow className="text-center animate-fade-in mb-6" style={{ animationDelay: "500ms" }}>
        <p className="text-xl font-display font-semibold text-foreground">
          Fishcake is ready to be the{" "}
          <span className="text-primary">Web3 gateway</span> for mainstream users.
        </p>
      </SlideCard>

      <div className="text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
        <h3 className="font-display text-lg font-semibold text-primary mb-3">What This Means</h3>
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-foreground font-medium">
          <span>Infrastructure: <span className="text-muted-foreground">proven</span></span>
          <span className="text-muted-foreground">•</span>
          <span>Product: <span className="text-muted-foreground">working</span></span>
          <span className="text-muted-foreground">•</span>
          <span>Next step: <span className="text-primary">scale</span></span>
        </div>
      </div>
    </SlideContainer>
  );
};
