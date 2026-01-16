import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { ArrowDown, RotateCcw, Store, Users, TrendingUp, BarChart3, RefreshCw, Magnet, Sparkles } from "lucide-react";

const loopSteps = [
  { text: "Merchant creates campaign", sub: "(funds with stablecoin/FCC)", icon: Store },
  { text: "Users discover & claim rewards", icon: Users },
  { text: "Foot traffic/customer engagements increases", icon: TrendingUp },
  { text: "Merchant sees ROI", sub: "Customer + PoW FCC", icon: BarChart3 },
  { text: "Merchant creates NEXT campaign", icon: RefreshCw },
  { text: "More users attracted → More merchants join", icon: Magnet, highlight: true },
];

export const Slide08GravityLoop = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>The Gravity Loop — Why Fishcake Grows Without Marketing Spend</SlideTitle>

      <p className="text-center text-foreground text-lg mb-8 animate-fade-in">
        This is the core mechanism. <span className="text-primary font-bold">Understand this, understand everything.</span>
      </p>

      {/* The Loop Visualization */}
      <div className="max-w-3xl mx-auto mb-8">
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
            border: '1px solid rgba(255,140,0,0.15)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          }}
        >
          {/* Loop steps */}
          <div className="space-y-1">
            {loopSteps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                  <div
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${step.highlight
                        ? 'bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30'
                        : ''
                      }`}
                  >
                    {/* Step number */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 ${step.highlight
                          ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground'
                          : 'bg-primary/20 text-primary'
                        }`}
                    >
                      {i + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(255,140,0,0.1)',
                        border: '1px solid rgba(255,140,0,0.2)',
                      }}
                    >
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <span className={`${step.highlight ? 'text-primary font-semibold' : 'text-foreground'}`}>
                        {step.text}
                      </span>
                      {step.sub && (
                        <span className="text-muted-foreground text-sm ml-2">{step.sub}</span>
                      )}
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {i < loopSteps.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-primary/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flywheel Box */}
          <div
            className="mt-5 rounded-xl p-4 text-center animate-scale-in"
            style={{
              animationDelay: "600ms",
              background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,200,0,0.05) 100%)',
              border: '1px solid rgba(255,140,0,0.3)',
              boxShadow: '0 0 30px rgba(255,140,0,0.1)',
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <RotateCcw className="w-6 h-6 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-primary font-display font-bold text-xl tracking-wide">FLYWHEEL ACCELERATES</span>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground">(No marketing spend required to grow)</p>
          </div>

          {/* Loop back indicator */}
          <div className="flex flex-col items-center mt-4">
            <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
            <p className="text-muted-foreground text-sm mt-1 font-mono">↩ Loop back to Step 1</p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
        <p className="text-xl text-foreground mb-6">
          This isn't a feature. <span className="font-bold text-primary">It's a force.</span>
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6">
          <div
            className="px-6 py-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,200,0,0.1) 0%, rgba(20,20,30,0.8) 100%)',
              border: '1px solid rgba(255,200,0,0.2)',
            }}
          >
            <span className="text-accent font-bold text-2xl">3350+</span>
            <p className="text-muted-foreground text-sm">events run on Fishcake</p>
          </div>
          <div
            className="px-6 py-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,200,0,0.1) 0%, rgba(20,20,30,0.8) 100%)',
              border: '1px solid rgba(255,200,0,0.2)',
            }}
          >
            <span className="text-accent font-bold text-2xl">$50,000+</span>
            <p className="text-muted-foreground text-sm">on-chain rewards distributed</p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
