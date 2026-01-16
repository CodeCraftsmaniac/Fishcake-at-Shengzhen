import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";

const businessData = [
  { where: "Platform fees (15-30%)", what: "Rented audiences" },
  { where: "Data brokers", what: "Opaque metrics" },
  { where: "Intermediaries", what: "Customers they don't own" },
];

const userData = [
  { experience: "Complicated rewards", cost: "Time, confusion" },
  { experience: "Fine print & unclear rules", cost: "Trust erosion" },
  { experience: "Points that expire", cost: "Real value lost" },
];

export const Slide06The500BProblem = () => {
  return (
    <SlideContainer>
      <SlideTitle gradient>The $500B Real-world Problem</SlideTitle>
      
      <p className="text-xl text-muted-foreground mb-8 text-center animate-slide-up">
        Global marketing spend: <span className="text-accent font-bold">$500B+ annually</span>. Most of it leaks.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* For Businesses */}
        <SlideCard>
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">For Businesses</h3>
          <div className="text-xs text-muted-foreground mb-3 flex justify-between border-b border-border/50 pb-2">
            <span>Where money goes</span>
            <span>What they get</span>
          </div>
          <div className="space-y-3">
            {businessData.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                <span className="text-foreground">{item.where}</span>
                <span className="text-muted-foreground text-sm">{item.what}</span>
              </div>
            ))}
          </div>
        </SlideCard>
        
        {/* For Users */}
        <SlideCard>
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">For Users</h3>
          <div className="text-xs text-muted-foreground mb-3 flex justify-between border-b border-border/50 pb-2">
            <span>What they experience</span>
            <span>What it costs</span>
          </div>
          <div className="space-y-3">
            {userData.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                <span className="text-foreground">{item.experience}</span>
                <span className="text-destructive text-sm">{item.cost}</span>
              </div>
            ))}
          </div>
        </SlideCard>
      </div>
      
      <div className="space-y-4 animate-fade-in text-center" style={{ animationDelay: "400ms" }}>
        <p className="text-muted-foreground">
          The core question Fishcake was built to answer:
        </p>
        <blockquote className="border-l-4 border-primary pl-6 py-2 text-left max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-foreground">
            "How can merchants deliver marketing value directly to real users — with{" "}
            <span className="text-primary font-semibold">zero leakage, zero intermediaries, zero trust assumptions?</span>"
          </p>
        </blockquote>
      </div>
    </SlideContainer>
  );
};
