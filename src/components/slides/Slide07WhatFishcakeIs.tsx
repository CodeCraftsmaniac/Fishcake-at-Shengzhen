import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { CheckCircle2, Zap, Send, Eye, ArrowLeftRight } from "lucide-react";

const principles = [
  {
    name: <><span className="text-primary">On-chain</span> generation</>,
    impl: <>All incentives <span className="text-primary font-medium">created</span> via smart contracts</>,
    icon: Zap,
  },
  {
    name: <><span className="text-primary">On-chain</span> distribution</>,
    impl: <>All rewards <span className="text-primary font-medium">delivered directly</span> to users</>,
    icon: Send,
  },
  {
    name: <>Public <span className="text-primary">transparency</span></>,
    impl: <>All rules <span className="text-primary font-medium">visible, verifiable, immutable</span></>,
    icon: Eye,
  },
  {
    name: <><span className="text-primary">Peer-to-peer</span> value</>,
    impl: <>Direct B2C — <span className="text-primary font-medium">no middleman</span> touches value</>,
    icon: ArrowLeftRight,
  },
];

export const Slide07WhatFishcakeIs = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>What Fishcake Is</SlideTitle>

      <div className="text-center mb-8 animate-slide-up">
        <p className="text-2xl md:text-3xl text-foreground font-display font-semibold">
          The execution layer for RWS in <span className="text-primary">Marketing</span>
        </p>
      </div>

      {/* Section header */}
      <div className="text-center mb-6">
        <h3 className="font-display text-lg font-bold text-primary mb-2 flex items-center justify-center gap-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary/60" />
          Four Non-Negotiable Principles
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary/60" />
        </h3>
      </div>

      {/* Principles Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
        {principles.map((p, i) => {
          const IconComponent = p.icon;
          return (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Card with dark glass effect */}
              <div
                className="relative p-5 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,15,20,0.95) 0%, rgba(25,25,35,0.85) 100%)',
                  border: '1px solid rgba(255,140,0,0.15)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                {/* Number badge */}
                <div
                  className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,140,0,0.2) 0%, rgba(255,140,0,0.05) 100%)',
                    border: '1px solid rgba(255,140,0,0.3)',
                    color: 'rgba(255,140,0,0.8)',
                  }}
                >
                  {i + 1}
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,140,0,0.05) 100%)',
                      border: '1px solid rgba(255,140,0,0.2)',
                    }}
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 pr-6">
                    <h4 className="font-semibold text-foreground text-lg mb-1">
                      {p.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.impl}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* One-liner */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
        <p className="text-muted-foreground/60 mb-3 text-sm font-mono">One-liner:</p>

        <div
          className="relative inline-block max-w-3xl rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(20,20,30,0.9) 50%, rgba(255,200,0,0.05) 100%)',
            border: '1px solid rgba(255,140,0,0.25)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,140,0,0.1)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,140,0,0.6) 50%, transparent 100%)',
            }}
          />

          <div className="px-10 py-6">
            <p
              className="text-xl md:text-2xl font-display font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fishcake turns real-world marketing into decentralized, programmable value exchange.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
