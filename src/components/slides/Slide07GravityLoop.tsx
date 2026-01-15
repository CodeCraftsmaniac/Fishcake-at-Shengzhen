import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";
import { CheckCircle2 } from "lucide-react";

// Bold one key word per principle to inject conviction
const principles = [
  {
    name: <><span className="font-bold">On-chain</span> generation</>,
    impl: <>All incentives <span className="text-foreground font-medium">created</span> via smart contracts</>
  },
  {
    name: <><span className="font-bold">On-chain</span> distribution</>,
    impl: <>All rewards <span className="text-foreground font-medium">delivered directly</span> to users</>
  },
  {
    name: <>Public <span className="font-bold">transparency</span></>,
    impl: <>All rules <span className="text-foreground font-medium">visible, verifiable, immutable</span></>
  },
  {
    name: <><span className="font-bold">Peer-to-peer</span> value</>,
    impl: <>Direct B2C exchange — <span className="text-foreground font-medium">no middleman</span> touches value</>
  },
];

export const Slide07GravityLoop = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>What Fishcake Is</SlideTitle>

      {/* Top statement - unified as "settlement layer" */}
      <div className="text-center mb-10 animate-slide-up">
        <p className="text-2xl md:text-3xl text-foreground font-display font-semibold">
          The RWS settlement layer for real-world marketing.
        </p>
      </div>

      {/* Section header - more authority with divider */}
      <div className="text-center mb-6">
        <h3 className="font-display text-xl font-bold text-primary mb-2 tracking-wide">
          Four Non-Negotiable Principles
        </h3>
        <div className="w-24 h-0.5 bg-primary/40 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-4xl mx-auto">
        {principles.map((p, i) => (
          <SlideCard key={i}>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">{p.name}</h4>
                <p className="text-sm text-muted-foreground/80 mt-1">{p.impl}</p>
              </div>
            </div>
          </SlideCard>
        ))}
      </div>

      {/* Bottom callout - statement dominates, no period */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <p className="text-muted-foreground/60 mb-3 text-sm">In one sentence:</p>
        <div className="inline-block bg-primary/10 border border-primary/30 rounded-xl px-10 py-5">
          <p className="text-xl md:text-2xl font-display font-bold text-primary">
            Fishcake is the settlement layer for real-world marketing
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
