import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { Clock, TrendingUp, Image, Globe, Coins, HelpCircle } from "lucide-react";

const timelineData = [
  { year: "2017", era: "ICO", question: '"Can blockchain raise money?"', icon: Coins },
  { year: "2020", era: "DeFi", question: '"Can blockchain replace banks?"', icon: TrendingUp },
  { year: "2021", era: "NFT", question: '"Can blockchain prove digital ownership?"', icon: Image },
  { year: "2022", era: "Metaverse", question: '"Can blockchain build virtual worlds?"', icon: Globe },
  { year: "2024", era: "RWA/PayFi", question: '"Can blockchain tokenize real assets?"', icon: Coins },
];

export const Slide03DecadeDetour = () => {
  return (
    <SlideContainer>
      <SlideTitle>The Decade-Long Detour</SlideTitle>

      <p className="text-xl text-muted-foreground mb-8 text-center animate-slide-up">
        For over a decade, Web3 kept asking the <span className="text-primary font-semibold">wrong kind of questions.</span>
      </p>

      {/* Timeline - Premium Design */}
      <div className="mb-8 max-w-3xl mx-auto">
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[60px] top-4 bottom-4 w-0.5"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,140,0,0.6), rgba(255,140,0,0.2))',
            }}
          />

          <div className="space-y-3">
            {timelineData.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 animate-fade-in relative"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Year badge */}
                  <div
                    className="relative z-10 w-[120px] flex items-center gap-2"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,140,0,0.2) 0%, rgba(255,140,0,0.05) 100%)',
                        border: '2px solid rgba(255,140,0,0.4)',
                      }}
                    >
                      <span className="text-primary font-mono font-bold text-xs">{item.year}</span>
                    </div>
                    <span className="text-primary font-semibold text-sm">{item.era}</span>
                  </div>

                  {/* Question card */}
                  <div
                    className="flex-1 px-4 py-2.5 rounded-lg flex items-center gap-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20,20,30,0.6) 0%, rgba(30,30,40,0.4) 100%)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-foreground/70 text-sm">{item.question}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="animate-fade-in text-center" style={{ animationDelay: "600ms" }}>
        <p className="text-muted-foreground text-lg mb-2">
          But, blockchain was never just a financial tool.
        </p>

        <p className="text-foreground text-lg font-medium mb-6">
          The real question we kept avoiding:
        </p>

        {/* Premium quote box */}
        <div
          className="relative max-w-2xl mx-auto rounded-2xl p-6 mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.08) 0%, rgba(20,20,30,0.9) 50%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.2)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          }}
        >
          {/* Left accent bar */}
          <div
            className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,140,0,0.8), rgba(255,200,0,0.4))',
              boxShadow: '0 0 15px rgba(255,140,0,0.4)',
            }}
          />

          <div className="flex items-start gap-4 pl-4">
            <HelpCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <p className="text-xl md:text-2xl font-display font-semibold text-foreground text-left leading-relaxed">
              "Can decentralization and programmability solve real-world problems — not just move assets on-chain?"
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-lg mb-4">
          We didn't misunderstand blockchain.
        </p>

        {/* Final statement with glow */}
        <div
          className="inline-block px-8 py-3 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.3)',
            boxShadow: '0 0 30px rgba(255,140,0,0.15)',
          }}
        >
          <p
            className="text-primary font-display font-bold text-2xl md:text-3xl"
            style={{
              letterSpacing: '0.05em',
              textShadow: '0 0 30px rgba(255, 140, 0, 0.4)'
            }}
          >
            We underestimated it!
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
