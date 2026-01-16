import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { QrCode, CheckCircle2, Coins, Zap, Users, Link2, RotateCcw } from "lucide-react";

const steps = [
  { text: "Scan QR code", icon: QrCode },
  { text: "Claim reward (stablecoin or FCC)", icon: Coins },
  { text: "Done.", icon: Zap, highlight: true },
];

const whatHappened = [
  { text: "You became a Fishcake user", icon: Users },
  { text: "This event delivered value directly to you", icon: Coins },
  { text: "No platform took a cut", icon: CheckCircle2 },
  { text: "The transaction is on-chain, forever", icon: Link2 },
  { text: "You are now part of the Gravity Loop", icon: RotateCcw, highlight: true },
];

export const Slide19LiveDemo = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Live Demo — You're Already Inside the Loop</SlideTitle>

      <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
        {/* What you're about to do */}
        <div
          className="rounded-2xl p-6 animate-scale-in"
          style={{
            background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
            border: '1px solid rgba(255,140,0,0.15)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          }}
        >
          <h3 className="font-display text-lg font-bold text-primary mb-5 flex items-center gap-2">
            <div className="w-8 h-0.5 bg-primary/50" />
            What you're about to do
          </h3>

          <div className="space-y-4">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all ${step.highlight
                      ? 'bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30'
                      : 'bg-card/30'
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold ${step.highlight
                        ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground'
                        : 'bg-primary/20 text-primary'
                      }`}
                  >
                    {i + 1}
                  </div>
                  <span className={`font-medium ${step.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {step.text}
                  </span>
                  <IconComponent className={`w-5 h-5 ml-auto ${step.highlight ? 'text-accent' : 'text-muted-foreground'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* What just happened */}
        <div
          className="rounded-2xl p-6 animate-scale-in"
          style={{
            animationDelay: "150ms",
            background: 'linear-gradient(135deg, rgba(255,140,0,0.08) 0%, rgba(20,20,30,0.9) 100%)',
            border: '1px solid rgba(255,140,0,0.25)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,140,0,0.08)',
          }}
        >
          <h3 className="font-display text-lg font-bold text-primary mb-5 flex items-center gap-2">
            <div className="w-8 h-0.5 bg-primary/50" />
            What just happened
          </h3>

          <div className="space-y-3">
            {whatHappened.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${item.highlight
                        ? 'bg-gradient-to-br from-primary to-accent'
                        : 'bg-primary/20'
                      }`}
                  >
                    <IconComponent className={`w-4 h-4 ${item.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <span className={`text-sm ${item.highlight ? 'text-primary font-semibold' : 'text-foreground/90'}`}>
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom statement */}
      <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <p className="text-xl text-foreground font-medium mb-4">
          You're not watching a demo. <span className="text-primary font-bold">You're in one.</span>
        </p>

        <div
          className="inline-block px-10 py-4 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.3)',
            boxShadow: '0 0 40px rgba(255,140,0,0.15)',
          }}
        >
          <p
            className="text-3xl md:text-4xl font-display font-bold"
            style={{
              background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            This is RWS.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
