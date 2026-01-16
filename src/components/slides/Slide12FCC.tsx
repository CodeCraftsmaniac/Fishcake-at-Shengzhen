import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { Coins, TrendingDown, RefreshCcw, Landmark, PieChart, ArrowUpRight } from "lucide-react";

const comparisonData = [
  {
    typical: "Utility inside one app",
    fcc: "Value capture across entire ecosystem",
    highlight: "Value capture",
    icon: PieChart
  },
  {
    typical: "Inflationary rewards dilute value",
    fcc: "Deflationary pressure via Redemption Pool",
    highlight: "Deflationary pressure",
    icon: TrendingDown
  },
  {
    typical: "Price = speculation",
    fcc: "Price = revenue-backed floor + market",
    highlight: "revenue-backed floor",
    icon: Landmark
  },
];

export const Slide12FCC = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>FCC — A Stock-Like On-Chain Asset</SlideTitle>

      <div className="text-center mb-10 animate-slide-up">
        <p className="text-xl text-foreground">
          FCC is not a loyalty point.{" "}
          <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">FCC is a claim on Fishcake's growth.</span>
        </p>
      </div>

      {/* Comparison table */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 gap-8 mb-4 px-4">
            <span className="text-muted-foreground/60 text-xs uppercase tracking-wider font-semibold text-right pr-4">
              Typical tokens
            </span>
            <span className="text-primary text-xs uppercase tracking-wider font-bold pl-4">
              FCC
            </span>
          </div>

          <div className="space-y-3 relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

            {comparisonData.map((row, i) => {
              const IconComponent = row.icon;
              return (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-8 items-center py-3 group hover:bg-white/5 rounded-xl transition-colors"
                >
                  <div className="text-right pr-4 text-muted-foreground/60 text-sm group-hover:text-muted-foreground/80 transition-colors">
                    {row.typical}
                  </div>

                  <div className="pl-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {row.fcc.split(row.highlight).map((part, idx, arr) => (
                        <span key={idx}>
                          {part}
                          {idx < arr.length - 1 && <span className="text-primary font-bold border-b border-primary/30">{row.highlight}</span>}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom statement */}
      <div className="animate-scale-in" style={{ animationDelay: "400ms" }}>
        <div
          className="relative max-w-3xl mx-auto rounded-2xl p-6 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(20,20,30,0.95) 100%)',
            border: '1px solid rgba(255,140,0,0.3)',
            boxShadow: '0 0 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,140,0,0.05)',
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center gap-2 py-2">
            <p className="text-lg md:text-xl font-display font-bold text-foreground font-mono">
              Holding FCC <span className="text-muted-foreground mx-2">=</span> Holding a share of every transaction in the Fishcake ecosystem.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
