import { cn } from "@/lib/utils";

const steps = [
  { step: 1, text: "Merchant creates campaign", subtext: "funds with stablecoin" },
  { step: 2, text: "Users discover & claim rewards", subtext: "" },
  { step: 3, text: "Foot traffic increases", subtext: "real, measurable" },
  { step: 4, text: "Merchant sees ROI", subtext: "100% on-chain verifiable" },
  { step: 5, text: "Merchant creates NEXT campaign", subtext: "" },
  { step: 6, text: "More users → More merchants", subtext: "" },
];

export const GravityLoop = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative py-8", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative group animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-card/50 border border-border/50 rounded-xl p-5 h-full transition-all duration-300 hover:border-primary/50 hover:bg-card/70">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                  {item.step}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-primary z-10">
                    →
                  </div>
                )}
              </div>
              <h4 className="font-semibold text-foreground text-sm md:text-base">
                {item.text}
              </h4>
              {item.subtext && (
                <p className="text-xs text-muted-foreground mt-1">{item.subtext}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
          <span className="text-primary font-display font-semibold">FLYWHEEL ACCELERATES</span>
          <span className="text-muted-foreground text-sm">— No marketing spend required</span>
        </div>
      </div>
    </div>
  );
};
