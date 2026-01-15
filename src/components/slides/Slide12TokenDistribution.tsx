import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { SlideCard } from "../presentation/SlideCard";

// Bold key phrase per FCC row for contrast
const comparisonData = [
  {
    typical: "Utility inside one app",
    fcc: <><span className="text-foreground font-semibold">Value capture</span> across entire ecosystem</>
  },
  {
    typical: "Inflationary rewards dilute value",
    fcc: <><span className="text-foreground font-semibold">Deflationary pressure</span> via Redemption Pool <span className="text-muted-foreground/60 text-xs">(reduces supply as usage grows)</span></>
  },
  {
    typical: "Price = speculation",
    fcc: <>Price = <span className="text-foreground font-semibold">revenue-backed floor</span> + market</>
  },
];

export const Slide12TokenDistribution = () => {
  return (
    <SlideContainer>
      {/* Safer title: "Growth-Linked" instead of "Stock-Like" */}
      <SlideTitle gradient>FCC — A Growth-Linked On-Chain Asset</SlideTitle>

      <div className="text-center mb-10 animate-slide-up">
        <p className="text-xl text-foreground">
          FCC is not a loyalty point.{" "}
          {/* Safer phrasing: "reflects" instead of "claim on" */}
          <span className="text-primary font-semibold">FCC reflects Fishcake's ecosystem growth.</span>
        </p>
      </div>

      {/* Custom table with bold FCC phrases */}
      <div className="flex justify-center mb-10">
        <div className="inline-block">
          <div className="flex border-b border-border/40 pb-2 mb-2">
            <span className="text-muted-foreground/70 text-xs uppercase tracking-wider w-[260px]">
              Typical tokens
            </span>
            <span className="text-primary text-xs uppercase tracking-wider font-semibold w-[320px]">
              FCC
            </span>
          </div>
          <div className="space-y-3">
            {comparisonData.map((row, i) => (
              <div key={i} className="flex items-start py-2 border-b border-border/20">
                <span className="text-muted-foreground/70 w-[260px] text-sm">
                  {row.typical}
                </span>
                <span className="text-muted-foreground w-[320px] text-sm">
                  {row.fcc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
        <SlideCard glow className="text-center max-w-3xl mx-auto">
          {/* Safer phrasing: "aligns with" instead of "share of" */}
          <p className="text-lg font-display font-semibold text-foreground">
            Holding FCC aligns you with the value of every transaction in the Fishcake ecosystem.
          </p>
        </SlideCard>
      </div>
    </SlideContainer>
  );
};
