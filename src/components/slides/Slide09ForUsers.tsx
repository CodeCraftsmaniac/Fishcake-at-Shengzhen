import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";
import { X, Check } from "lucide-react";

export const Slide09ForUsers = () => {
  return (
    <SlideContainer>
      <SlideTitle>For Businesses — Marketing Math That Actually Works</SlideTitle>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Traditional Model */}
        <SlideCard>
          <h3 className="font-display text-xl font-semibold text-muted-foreground mb-4">
            Traditional Model
          </h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between py-2 border-b border-border/30">
              <span className="text-foreground">Spend</span>
              <span className="font-mono text-accent">$10,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/30 text-muted-foreground">
              <span className="flex items-center gap-2">
                <X className="w-4 h-4 text-destructive" /> Platform fee
              </span>
              <span className="font-mono">-$2,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/30 text-muted-foreground">
              <span className="flex items-center gap-2">
                <X className="w-4 h-4 text-destructive" /> Data broker
              </span>
              <span className="font-mono">-$1,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/30 text-muted-foreground">
              <span className="flex items-center gap-2">
                <X className="w-4 h-4 text-destructive" /> Intermediary cuts
              </span>
              <span className="font-mono">-$500</span>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex justify-between text-foreground font-semibold">
              <span>= Reaches users</span>
              <span className="text-destructive font-mono">$6,500 (maybe)</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              ROI: "We think it worked?"
            </p>
          </div>
        </SlideCard>
        
        {/* Fishcake Model */}
        <SlideCard glow>
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Fishcake Model
          </h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between py-2 border-b border-border/30">
              <span className="text-foreground">Spend</span>
              <span className="font-mono text-accent">$10,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/30 text-primary">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Zero platform fees
              </span>
              <span className="font-mono">$0</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/30 text-primary">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Zero data brokers
              </span>
              <span className="font-mono">$0</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/30 text-primary">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Zero intermediaries
              </span>
              <span className="font-mono">$0</span>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex justify-between text-foreground font-semibold">
              <span>= Reaches users</span>
              <span className="text-primary font-mono">$10,000</span>
            </div>
            <p className="text-sm text-primary mt-3 font-semibold">
              ROI: "We know exactly what happened."
            </p>
          </div>
        </SlideCard>
      </div>
      
      <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <p className="text-muted-foreground">
          Every claim, every wallet, every interaction:
        </p>
        <div className="inline-flex items-center gap-4 text-sm font-mono font-semibold">
          <span className="text-primary">ON-CHAIN</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-primary">VERIFIABLE</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-primary">PERMANENT</span>
        </div>
        <p className="text-foreground font-medium">
          Zero platform fees. 100% budget efficiency. Full transparency.
        </p>
      </div>
    </SlideContainer>
  );
};
