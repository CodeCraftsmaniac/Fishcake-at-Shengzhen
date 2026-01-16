import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";
import { Trophy, Wrench, MapPin } from "lucide-react";

const prizes = [
  { icon: "🥇", award: "Best Multi-chain Architecture", prize: "600 USDT", desc: "Unified wallet for ETH, BSC, OP, Base, Arbitrum" },
  { icon: "🥈", award: "Best EventFi Contract", prize: "400 USDT", desc: "Deploy Fishcake events on any chain" },
  { icon: "🥉", award: "Best Asset Vault/Scalability", prize: "300 USDT", desc: "USDT/USDC + FCC bridge design" },
  { icon: "🌟", award: "Innovation/Community Choice", prize: "200 USDT", desc: "Creative RWS solutions" },
];

const directions = [
  { title: "Multi-Chain Wallet Onboarding", desc: "One wallet, every chain. Seamless chain-switching for mainstream users." },
  { title: "Event Manager Multi-Chain Deployment", desc: "Deploy Fishcake events anywhere. Consistent creation logic across all chains." },
  { title: "Fishcake Asset Library", desc: "Support USDT/USDC stablecoins. Future FCC cross-chain bridge interfaces." },
];

const whyShenzhen = [
  "HARDWARE CAPITAL: Ideas → Products overnight",
  "DEVELOPER DENSITY: 10,000+ Web3 builders in Greater Bay Area",
  "GATEWAY TO CHINA: 1.4B users, one border away",
];

export const Slide17Hackathon = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>Shenzhen Hackathon — Build the Next Layer</SlideTitle>

      <p className="text-lg text-muted-foreground mb-4 text-center animate-slide-up">
        This hackathon is about <span className="text-primary font-semibold">expansion</span>, not experimentation.
      </p>

      {/* Event Info */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 animate-fade-in">
        <span className="px-4 py-2 bg-card/50 border border-border/50 rounded-full text-sm text-foreground">
          AI × Web3 Hackathon Shenzhen | Jan 24-25, 2026
        </span>
        <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-semibold">
          Total Pool: 30,000 USDT
        </span>
        <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent font-semibold">
          Fishcake: 1,700 USDT + 6,000 FCC
        </span>
      </div>

      {/* Prize Breakdown */}
      <div className="mb-6">
        <h3 className="font-display text-sm font-semibold text-primary mb-3 text-center flex items-center justify-center gap-2">
          <Trophy className="w-4 h-4" /> 🐟 Fishcake Track — Prize Breakdown
        </h3>
        <div className="grid md:grid-cols-4 gap-2">
          {prizes.map((p, i) => (
            <SlideCard key={i} className="animate-scale-in text-center" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="text-2xl mb-1 block">{p.icon}</span>
              <h4 className="font-semibold text-foreground text-xs mb-1">{p.award}</h4>
              <span className="text-primary font-bold text-sm">{p.prize}</span>
              <p className="text-muted-foreground text-xs mt-1">{p.desc}</p>
            </SlideCard>
          ))}
        </div>
      </div>

      {/* Build Directions */}
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <h3 className="font-display text-sm font-semibold text-primary mb-3 text-center flex items-center justify-center gap-2">
          <Wrench className="w-4 h-4" /> 🔧 3 Build Directions
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          {directions.map((d, i) => (
            <SlideCard key={i} className="text-center">
              <h4 className="font-semibold text-foreground text-sm mb-2">{i + 1}. {d.title}</h4>
              <p className="text-muted-foreground text-xs">{d.desc}</p>
            </SlideCard>
          ))}
        </div>
      </div>

      {/* Why Shenzhen */}
      <div className="mb-4 animate-fade-in" style={{ animationDelay: "500ms" }}>
        <h3 className="font-display text-sm font-semibold text-primary mb-2 text-center flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" /> 🔥 Why Shenzhen
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {whyShenzhen.map((item, i) => (
            <span key={i} className="px-3 py-1.5 bg-card/50 border border-border/50 rounded-full text-xs text-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
        <div className="inline-block bg-primary/10 border border-primary/30 rounded-xl px-6 py-3">
          <p className="text-sm font-display font-bold text-primary">
            Build here → Deploy globally → Become core infrastructure
          </p>
        </div>
        <p className="text-muted-foreground text-xs mt-2">
          Top builders get direct integration into Fishcake core • Your code ships to real users within 30 days
        </p>
        <p className="text-foreground text-sm mt-3 font-medium">
          This isn't about winning a prize. It's about building the standard — starting from Shenzhen.
        </p>
      </div>
    </SlideContainer>
  );
};
