import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";

const timelineData = [
  { year: "2017: ICO", question: '"Can blockchain raise money?"' },
  { year: "2020: DeFi", question: '"Can blockchain replace banks?"' },
  { year: "2021: NFT", question: '"Can blockchain create digital ownership?"' },
  { year: "2022: Metaverse", question: '"Can blockchain build virtual worlds?"' },
  { year: "2024: RWA/PayFi", question: '"Can blockchain tokenize real assets?"' },
];

export const Slide03RWAvsRWS = () => {
  return (
    <SlideContainer>
      <SlideTitle>The Decade-Long Detour</SlideTitle>

      <p className="text-lg text-muted-foreground mb-6 text-center animate-slide-up">
        Web3 kept building answers to the wrong question.
      </p>

      {/* Timeline - years stay orange, questions de-emphasized */}
      <div className="space-y-2 mb-8 max-w-3xl mx-auto">
        {timelineData.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Years stay prominent */}
            <span className="text-primary font-mono font-semibold min-w-[140px]">{item.year}</span>
            <span className="text-muted-foreground/50">→</span>
            {/* Questions de-emphasized - 65% opacity */}
            <span className="text-foreground/65">{item.question}</span>
          </div>
        ))}
      </div>

      <div className="space-y-5 animate-fade-in text-center" style={{ animationDelay: "500ms" }}>
        <p className="text-muted-foreground text-lg">
          All valid questions. All missing the point.
        </p>

        <p className="text-foreground text-lg font-medium">
          The real question was always:
        </p>

        {/* THE REAL QUESTION - More air via spacing, not size */}
        <blockquote className="border-l-4 border-primary pl-8 py-6 text-left max-w-2xl mx-auto my-10">
          <p
            className="text-xl md:text-2xl font-display font-semibold text-foreground"
            style={{ lineHeight: '1.6' }}
          >
            "Can blockchain create value in the real world — not just represent it?"
          </p>
        </blockquote>

        {/* Bitcoin/Ethereum sentence - promoted slightly */}
        <p className="text-muted-foreground/90 text-lg max-w-2xl mx-auto">
          Bitcoin, Ethereum, blockchain itself — they were always real-world solutions.
        </p>

        <p className="text-muted-foreground mt-2">
          We just kept forgetting to ask:
        </p>

        {/* MIC-DROP - Letter spacing + subtle glow */}
        <p
          className="text-primary font-display font-bold text-xl md:text-2xl mt-6"
          style={{
            letterSpacing: '0.08em',
            textShadow: '0 0 20px rgba(255, 140, 0, 0.3)'
          }}
        >
          solutions for what?
        </p>
      </div>
    </SlideContainer>
  );
};
