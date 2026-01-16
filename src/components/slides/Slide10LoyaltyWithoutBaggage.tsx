import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { X, Check, AlertCircle, Puzzle, Clock, Building2, ArrowRight } from "lucide-react";

const traditionalProblems = [
  { text: <><span className="text-foreground font-semibold">Complex</span>, expensive to build and maintain</>, icon: AlertCircle },
  { text: <><span className="text-foreground font-semibold">Fragmented</span> points that expire</>, icon: Clock },
  { text: <>Can't <span className="text-foreground font-semibold">interoperate</span> across brands</>, icon: Puzzle },
  { text: <>Businesses operate in <span className="text-foreground font-semibold">silos</span></>, icon: Building2 },
];

const comparison = [
  { old: "Loyalty program operator", fishcake: "On-chain participation" },
  { old: "Issue your own points", fishcake: "Earn FCC as ecosystem contributor" },
  { old: "Isolated value", fishcake: "Shared value in unified economy" },
];

export const Slide10LoyaltyWithoutBaggage = () => {
  return (
    <SlideContainer>
      <SlideTitle>For Businesses — Loyalty Without the Baggage</SlideTitle>

      {/* Traditional problems */}
      <div className="mb-6 animate-slide-up text-center">
        <h3 className="font-display text-base font-semibold text-muted-foreground mb-4">
          Traditional Loyalty Programs:
        </h3>
        <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto text-left">
          {traditionalProblems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg animate-fade-in"
                style={{
                  animationDelay: `${i * 80}ms`,
                  background: 'rgba(180,40,40,0.08)',
                  border: '1px solid rgba(180,40,40,0.15)',
                }}
              >
                <IconComponent className="w-4 h-4 text-red-400/70 flex-shrink-0" />
                <span className="text-muted-foreground/80 text-sm">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key claim */}
      <div className="text-center mb-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div
          className="inline-block rounded-xl px-8 py-4"
          style={{
            background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
            border: '1px solid rgba(255,140,0,0.2)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          <p className="text-lg md:text-xl text-foreground font-display font-semibold">
            Fishcake doesn't create "yet another points system."
          </p>
        </div>
      </div>

      <h3 className="font-display text-lg font-bold text-primary mb-4 text-center flex items-center justify-center gap-3">
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/50" />
        The Fishcake Model
        <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/50" />
      </h3>

      {/* Comparison cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-8 max-w-4xl mx-auto">
        {/* Old way */}
        <div
          className="rounded-xl p-5"
          style={{
            background: 'linear-gradient(135deg, rgba(20,20,25,0.9) 0%, rgba(30,30,35,0.8) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h4 className="text-muted-foreground font-bold mb-4 text-center text-sm uppercase tracking-wider">Old way</h4>
          <div className="space-y-3">
            {comparison.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{
                  background: 'rgba(255,100,100,0.05)',
                  border: '1px solid rgba(255,100,100,0.15)',
                }}
              >
                <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-foreground/80 text-sm font-medium">{item.old}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fishcake way */}
        <div
          className="rounded-xl p-5"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(20,20,30,0.9) 100%)',
            border: '1px solid rgba(255,140,0,0.25)',
            boxShadow: '0 0 30px rgba(255,140,0,0.08)',
          }}
        >
          <h4 className="text-primary font-bold mb-4 text-center text-sm uppercase tracking-wider">Fishcake way</h4>
          <div className="space-y-3">
            {comparison.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{
                  background: 'rgba(255,140,0,0.08)',
                  border: '1px solid rgba(255,140,0,0.15)',
                }}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{item.fishcake}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
        <div className="inline-flex items-center gap-4 text-foreground font-display font-semibold">
          <span className="text-primary">Run real events</span>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-primary">Earn real rewards</span>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-accent font-bold">Grow with the ecosystem</span>
        </div>
      </div>
    </SlideContainer>
  );
};
