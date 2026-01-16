import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { CheckCircle2, Rocket, Zap, TrendingUp } from "lucide-react";

const status = [
  { component: "Core ecosystem structure", status: "Complete", icon: CheckCircle2 },
  { component: "Core applications", status: "Stable & smooth", icon: CheckCircle2 },
  { component: "Fishcake Wallet", status: "Live", icon: Zap },
  { component: "Fishcake Event AI", status: "Live", icon: Zap },
];

const whatItMeans = [
  { label: "Infrastructure", value: "proven", highlight: false },
  { label: "Product", value: "working", highlight: false },
  { label: "Next step", value: "scale", highlight: true },
];

export const Slide15WhereWeAre = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Where We Are Today</SlideTitle>

      <p className="text-xl text-muted-foreground mb-10 text-center animate-slide-up">
        Not "building toward" — <span className="text-primary font-bold">already live.</span>
      </p>

      {/* Status Grid - Premium Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
        {status.map((s, i) => {
          const IconComponent = s.icon;
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl animate-scale-in group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Premium dark card */}
              <div
                className="relative p-5 rounded-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
                  border: '1px solid rgba(255,140,0,0.15)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-4 right-4 h-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,140,0,0.5) 50%, transparent 100%)',
                  }}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,140,0,0.2) 0%, rgba(255,140,0,0.05) 100%)',
                        border: '1px solid rgba(255,140,0,0.25)',
                      }}
                    >
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{s.component}</span>
                  </div>

                  {/* Status badge */}
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)',
                      border: '1px solid rgba(34,197,94,0.3)',
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                    <span className="text-green-400 font-semibold text-xs whitespace-nowrap">{s.status}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Current Position - Premium CTA */}
      <div className="animate-fade-in mb-8" style={{ animationDelay: "500ms" }}>
        <div
          className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(20,20,30,0.9) 50%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.25)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3), 0 0 30px rgba(255,140,0,0.08)',
          }}
        >
          {/* Glow accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,140,0,0.7) 50%, transparent 100%)',
            }}
          />

          <div className="p-6 text-center flex items-center justify-center gap-4">
            <Rocket className="w-8 h-8 text-primary" />
            <p className="text-lg md:text-xl font-display font-bold text-foreground">
              Fishcake is ready to serve as the{" "}
              <span className="text-primary">Web3 Gateway App</span> for mainstream users.
            </p>
          </div>
        </div>
      </div>

      {/* What This Means - Premium Pills */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "700ms" }}>
        <h3 className="font-display text-lg font-bold text-primary mb-4 flex items-center justify-center gap-2">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/50" />
          What This Means
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/50" />
        </h3>

        <div className="inline-flex flex-wrap items-center justify-center gap-3">
          {whatItMeans.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: item.highlight
                  ? 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,140,0,0.05) 100%)'
                  : 'rgba(20,20,30,0.6)',
                border: item.highlight
                  ? '1px solid rgba(255,140,0,0.3)'
                  : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span className="text-foreground font-medium">{item.label}:</span>
              <span className={item.highlight ? 'text-primary font-bold' : 'text-muted-foreground'}>
                {item.value}
              </span>
              {item.highlight && <TrendingUp className="w-4 h-4 text-primary" />}
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
