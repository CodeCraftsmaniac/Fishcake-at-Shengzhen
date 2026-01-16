import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { Coins, ShieldCheck, Zap, Users, Lock, Rocket, Building, Layers } from "lucide-react";

const primaryAllocations = [
  {
    name: "Mining Pool (PoW)",
    percent: 30,
    purpose: <>Run real events → Earn FCC as <br />ecosystem contributor</>,
    icon: Coins
  },
  {
    name: "NFT Sales Reward",
    percent: 20,
    purpose: <>On-chain identity + EVENT CREDIBILITY: <br />Merchants with NFT Pass = verified, trusted</>,
    icon: ShieldCheck
  },
];

const secondaryAllocations = [
  { name: "Staking Pool (PoS)", percent: 10, icon: Layers },
  { name: "Investor Sale", percent: 10, icon: Users },
  { name: "Reserve", percent: 10, icon: Lock },
  { name: "Ecosystem", percent: 10, icon: Rocket },
  { name: "Fishcake Foundation", percent: 10, icon: Building },
];

export const Slide14TokenDistribution = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Token Distribution — Rewarding Builders, Not Speculators</SlideTitle>

      {/* Primary allocations */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
        {primaryAllocations.map((a, i) => {
          const IconComponent = a.icon;
          return (
            <div
              key={i}
              className="relative rounded-2xl p-4 group hover:bg-white/5 transition-colors overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20,20,25,0.9) 0%, rgba(30,30,35,0.8) 100%)',
                border: '1px solid rgba(255,140,0,0.2)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              {/* Animated Progress Background */}
              <div
                className="absolute left-0 bottom-0 top-0 bg-primary/5 transition-all duration-1000 group-hover:bg-primary/10"
                style={{ width: `${a.percent}%` }}
              />

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-9 h-9 mb-2 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>

                <h4 className="font-display font-medium text-muted-foreground uppercase tracking-wider text-xs mb-1">{a.name}</h4>
                <div className="text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                  {a.percent}<span className="text-xl text-primary/80">%</span>
                </div>

                <p className="text-xs text-muted-foreground/90 leading-tight mt-auto">{a.purpose}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary allocations - Simple Pills */}
      <div className="flex w-full justify-between gap-2 mb-8 max-w-5xl mx-auto px-4 overflow-x-auto">
        {secondaryAllocations.map((a, i) => {
          const IconComponent = a.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:border-primary/40 transition-colors whitespace-nowrap"
            >
              <IconComponent className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{a.name}</span>
              <span className="text-xs font-bold text-primary pl-1 border-l border-white/10">{a.percent}%</span>
            </div>
          );
        })}
      </div>

      {/* Cake Power System */}
      <div
        className="relative max-w-2xl mx-auto rounded-xl p-5 mb-8 animate-fade-in text-center"
        style={{
          animationDelay: "300ms",
          background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(20,20,30,0.95) 100%)',
          border: '1px solid rgba(255,140,0,0.3)',
          boxShadow: '0 0 30px rgba(255,140,0,0.1)',
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />

        <h3 className="font-display text-sm font-bold text-primary mb-3 uppercase tracking-widest flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" /> Cake Power System
        </h3>
        <div className="text-sm text-foreground/80 space-y-1.5 font-medium">
          <p>NFT Pass = PoW Mining + <span className="text-white font-bold">Boosted Cake Power</span></p>
          <p>More Cake Power = <span className="text-white font-bold">Boost FCC Staking APR</span></p>
          <p className="text-muted-foreground text-xs mt-2 italic">Composable: Stake FCC with booster NFTs for <span className="text-primary not-italic font-bold">exponential gains</span></p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <p className="text-xs text-muted-foreground mb-3 font-mono uppercase tracking-widest">The Philosophy</p>
        <div className="inline-flex flex-wrap items-center justify-center gap-8 text-lg font-display">
          <span className="text-muted-foreground">Contribute → <span className="text-primary font-bold">Earn</span></span>
          <span className="text-muted-foreground">Build → <span className="text-primary font-bold">Own</span></span>
          <span className="text-muted-foreground">Participate → <span className="text-primary font-bold">Benefit</span></span>
        </div>
        <p className="text-muted-foreground/50 text-xs mt-3">No free rides. No speculation-first design.</p>
      </div>
    </SlideContainer>
  );
};
