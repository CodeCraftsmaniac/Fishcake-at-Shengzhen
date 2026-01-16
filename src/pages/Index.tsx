import { useState, useEffect, useCallback } from "react";
// V2 Slide Order (Slide 5 "On-Chain Everything" is HIDDEN per V2 spec)
import { Slide01TitleSlide } from "@/components/slides/Slide01TitleSlide";     // 1. Title Slide
import { Slide02OpeningClaim } from "@/components/slides/Slide02OpeningClaim"; // 2. Opening Claim
import { Slide03DecadeDetour } from "@/components/slides/Slide03DecadeDetour"; // 3. The Decade-Long Detour
import { Slide04RWAvsRWS } from "@/components/slides/Slide04RWAvsRWS";         // 4. RWA vs. RWS
// Slide 5 (On-Chain Everything) is HIDDEN
import { Slide06The500BProblem } from "@/components/slides/Slide06The500BProblem";     // 6. The $500B Problem
import { Slide07WhatFishcakeIs } from "@/components/slides/Slide07WhatFishcakeIs";     // 7. What Fishcake Is
import { Slide08GravityLoop } from "@/components/slides/Slide08GravityLoop";           // 8. The Gravity Loop
import { Slide09MarketingMath } from "@/components/slides/Slide09MarketingMath";       // 9. Marketing Math
import { Slide10LoyaltyWithoutBaggage } from "@/components/slides/Slide10LoyaltyWithoutBaggage"; // 10. Loyalty Without Baggage
import { Slide11ForUsers } from "@/components/slides/Slide11ForUsers";                 // 11. For Users - Web3 UX
import { Slide12FCC } from "@/components/slides/Slide12FCC";                           // 12. FCC Stock-Like Asset
import { Slide13RedemptionPool } from "@/components/slides/Slide13RedemptionPool";     // 13. Redemption Pool
import { Slide14TokenDistribution } from "@/components/slides/Slide14TokenDistribution"; // 14. Token Distribution
import { Slide15WhereWeAre } from "@/components/slides/Slide15WhereWeAre";             // 15. Where We Are
import { Slide16WhyFishcakeWins } from "@/components/slides/Slide16WhyFishcakeWins";   // 16. Why Fishcake Wins
import { Slide17Hackathon } from "@/components/slides/Slide17Hackathon";               // 17. Shenzhen Hackathon
import { Slide18BeforeWeContinue } from "@/components/slides/Slide18BeforeWeContinue"; // 18. Before We Continue (QR)
import { Slide19LiveDemo } from "@/components/slides/Slide19LiveDemo";                 // 19. Live Demo
import { Slide20TheClose } from "@/components/slides/Slide20TheClose";                 // 20. The Close
import { Slide21Final } from "@/components/slides/Slide21Final";                       // 21. Final Frame
import { SlideNavigation } from "@/components/presentation/SlideNavigation";
import { NavigationDots } from "@/components/presentation/NavigationDots";

const slides = [
  Slide01TitleSlide,        // 1. Title Slide
  Slide02OpeningClaim,      // 2. Opening Claim
  Slide03DecadeDetour,      // 3. The Decade-Long Detour
  Slide04RWAvsRWS,          // 4. RWA vs. RWS
  // Slide 5 HIDDEN per V2 spec
  Slide06The500BProblem,    // 6. The $500B Problem
  Slide07WhatFishcakeIs,    // 7. What Fishcake Is
  Slide08GravityLoop,       // 8. The Gravity Loop
  Slide09MarketingMath,     // 9. Marketing Math
  Slide10LoyaltyWithoutBaggage, // 10. Loyalty Without Baggage
  Slide11ForUsers,          // 11. For Users - Web3 UX
  Slide12FCC,               // 12. FCC Stock-Like Asset
  Slide13RedemptionPool,    // 13. Redemption Pool
  Slide14TokenDistribution, // 14. Token Distribution
  Slide15WhereWeAre,        // 15. Where We Are
  Slide16WhyFishcakeWins,   // 16. Why Fishcake Wins
  Slide17Hackathon,         // 17. Shenzhen Hackathon
  Slide18BeforeWeContinue,  // 18. Before We Continue (QR)
  Slide19LiveDemo,          // 19. Live Demo
  Slide20TheClose,          // 20. The Close
  Slide21Final,             // 21. Final Frame
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <CurrentSlideComponent key={currentSlide} />
      
      <NavigationDots
        total={slides.length}
        current={currentSlide}
        onSelect={goToSlide}
      />
      
      <SlideNavigation
        onPrev={goToPrev}
        onNext={goToNext}
        hasPrev={currentSlide > 0}
        hasNext={currentSlide < slides.length - 1}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
};

export default Index;