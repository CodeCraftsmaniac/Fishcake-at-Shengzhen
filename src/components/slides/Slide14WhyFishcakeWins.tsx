import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";

// Primary allocations (emphasized)
const primaryAllocations = [
  { name: "Mining Pool", percent: 30, purpose: "Earn by running real events" },
  { name: "NFT Sales Reward", percent: 20, purpose: "On-chain identity & campaign credibility" },
];

// Secondary allocations
const secondaryAllocations = [
  { name: "Staking Pool", percent: 10, purpose: "Passive yield for holders" },
  { name: "Investor Sale", percent: 10, purpose: "Early backers & partners" },
  { name: "Reserve", percent: 10, purpose: "Long-term sustainability" },
  { name: "Ecosystem", percent: 10, purpose: "Partnerships & growth" },
  { name: "Foundation", percent: 10, purpose: "Governance & development" },
];

export const Slide14WhyFishcakeWins = () => {
  return (
    <SlideContainer>
      <SlideTitle>Token Distribution — Rewarding Builders, Not Speculators</SlideTitle>

      {/* Primary allocations - emphasized, larger */}
      <div className="grid grid-cols-2 gap-4 mb-4 max-w-2xl mx-auto">
        {primaryAllocations.map((a, i) => (
          <SlideCard key={i} glow className="py-5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <h4 className="font-display font-bold text-foreground text-sm">{a.name}</h4>
                <span className="text-2xl font-bold text-primary">{a.percent}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-3">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${a.percent * 3}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{a.purpose}</p>
            </div>
          </SlideCard>
        ))}
      </div>

      {/* Secondary allocations - smaller, compact */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {secondaryAllocations.map((a, i) => (
          <div
            key={i}
            className="bg-card/30 border border-border/30 rounded-lg px-4 py-2 text-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{a.name}</span>
              <span className="text-sm font-bold text-primary">{a.percent}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cake Power System card */}
      <SlideCard glow className="mb-4 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
        <h3 className="font-display text-xs font-semibold text-primary mb-2 text-center">Cake Power System</h3>
        <div className="text-center text-xs text-muted-foreground space-y-1">
          <p>Stake FCC + NFT Pass = <span className="text-foreground">Boosted Cake Power</span></p>
          <p>More Cake Power = <span className="text-foreground">Higher mining multiplier</span></p>
        </div>
      </SlideCard>

      {/* Bottom line - what behavior is rewarded */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-foreground font-medium">
          <span>Contribute → <span className="text-primary">Earn</span></span>
          <span className="text-muted-foreground/50">•</span>
          <span>Build → <span className="text-primary">Own</span></span>
          <span className="text-muted-foreground/50">•</span>
          <span>Participate → <span className="text-primary">Benefit</span></span>
        </div>
      </div>
    </SlideContainer>
  );
};
