import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { CheckCircle2, ArrowDown } from "lucide-react";

const mechanism = [
  { step: "1", text: "Take portion of every platform revenue", sub: "(NFT/Badge/protocol fee etc.)" },
  { step: "2", text: "Flows directly into Redemption Pool" },
  { step: "3", text: "Direct, transparent, on-chain" },
  { step: "4", text: "Pool is 100% USDT-backed", highlight: true },
  { step: "5", text: "FCC holders can redeem against pool" },
  { step: "6", text: "Pool only grows → Floor price only rises", highlight: true },
];

const properties = [
  { text: <>Value enters, <span className="text-primary font-semibold">never leaves</span></>, sub: "(except via redemption)" },
  { text: <><span className="text-primary font-semibold">Transparent:</span> On-chain, auditable, real-time</>, sub: "" },
  { text: <>Redeemable floor is <span className="text-primary font-semibold">structurally designed to grow</span></>, sub: "over time" },
];

export const Slide13RedemptionPool = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>The Redemption Pool — FCC's Value Anchor</SlideTitle>

      <p className="text-xl text-muted-foreground mb-8 text-center animate-slide-up">
        This is where <span className="text-primary font-semibold">"revenue"</span> becomes <span className="text-accent font-semibold">"real."</span>
      </p>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left: The Mechanism - Visual Flow */}
        <div className="animate-fade-in">
          <h3 className="font-display text-lg font-bold text-primary mb-5 text-center flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/50" />
            The Mechanism
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/50" />
          </h3>

          {/* Vertical flow with connecting line */}
          <div className="relative">
            {/* Connecting gradient line */}
            <div
              className="absolute left-[22px] top-4 bottom-4 w-0.5"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,140,0,0.6), rgba(255,200,0,0.3), rgba(255,140,0,0.6))',
              }}
            />

            <div className="space-y-1">
              {mechanism.map((item, i) => (
                <div key={i}>
                  <div
                    className="flex items-start gap-4 animate-fade-in relative"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* Step number circle */}
                    <div
                      className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 ${item.highlight
                        ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30'
                        : 'bg-card border-2 border-primary/40 text-primary'
                        }`}
                    >
                      {item.step}
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 rounded-xl px-4 py-3 ${item.highlight
                        ? 'bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30'
                        : 'bg-card/40 border border-border/40'
                        }`}
                    >
                      <p className={`text-sm ${item.highlight ? 'text-foreground font-semibold' : 'text-foreground/90'}`}>
                        {item.text}
                      </p>
                      {item.sub && (
                        <p className="text-xs text-muted-foreground/70 mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {i < mechanism.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Key Properties - Premium Cards */}
        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="font-display text-lg font-bold text-primary mb-5 text-center flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/50" />
            Key Properties
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/50" />
          </h3>

          <div className="space-y-3">
            {properties.map((prop, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl animate-scale-in group"
                style={{
                  animationDelay: `${300 + i * 120}ms`,
                }}
              >
                {/* Card with dark glass effect */}
                <div
                  className="relative p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15,15,20,0.9) 0%, rgba(25,25,35,0.8) 100%)',
                    border: '1px solid rgba(255,140,0,0.2)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-full"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,140,0,0.8), rgba(255,200,0,0.4))',
                      boxShadow: '0 0 10px rgba(255,140,0,0.4)',
                    }}
                  />

                  {/* Icon and content */}
                  <div className="flex items-center gap-4 pl-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,140,0,0.25) 0%, rgba(255,140,0,0.1) 100%)',
                        border: '1px solid rgba(255,140,0,0.3)',
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground text-sm font-medium leading-relaxed">{prop.text}</p>
                      {prop.sub && (
                        <p className="text-muted-foreground text-xs mt-0.5">{prop.sub}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom statement - Premium CTA box */}
      <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
        <div
          className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.12) 0%, rgba(20,20,30,0.8) 50%, rgba(255,200,0,0.08) 100%)',
            border: '1px solid rgba(255,140,0,0.25)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(255,140,0,0.1)',
          }}
        >
          {/* Inner glow accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,140,0,0.6) 50%, transparent 100%)',
            }}
          />

          <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center">
            This isn't a promise. <span className="text-primary">It's architecture.</span>
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
