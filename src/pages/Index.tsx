import { useState, useEffect, useCallback } from "react";
import { Slide01Opening } from "@/components/slides/Slide01Opening";
import { Slide02DecadeDetour } from "@/components/slides/Slide02DecadeDetour";
import { Slide03RWAvsRWS } from "@/components/slides/Slide03RWAvsRWS";
import { Slide04OnChainEverything } from "@/components/slides/Slide04OnChainEverything";
import { Slide05The500BProblem } from "@/components/slides/Slide05The500BProblem";
import { Slide06WhatFishcakeIs } from "@/components/slides/Slide06WhatFishcakeIs";
import { Slide07GravityLoop } from "@/components/slides/Slide07GravityLoop";
import { Slide08MarketingMath } from "@/components/slides/Slide08MarketingMath";
import { Slide09ForUsers } from "@/components/slides/Slide09ForUsers";
import { Slide10FCC } from "@/components/slides/Slide10FCC";
import { Slide11RedemptionPool } from "@/components/slides/Slide11RedemptionPool";
import { Slide12TokenDistribution } from "@/components/slides/Slide12TokenDistribution";
import { Slide13WhereWeAre } from "@/components/slides/Slide13WhereWeAre";
import { Slide14WhyFishcakeWins } from "@/components/slides/Slide14WhyFishcakeWins";
import { Slide15Hackathon } from "@/components/slides/Slide15Hackathon";
import { Slide16LiveDemo } from "@/components/slides/Slide16LiveDemo";
import { Slide17TheClose } from "@/components/slides/Slide17TheClose";
import { Slide18Final } from "@/components/slides/Slide18Final";
import { Slide19Placeholder } from "@/components/slides/Slide19Placeholder";
import { Slide20Placeholder } from "@/components/slides/Slide20Placeholder";
import { Slide21Placeholder } from "@/components/slides/Slide21Placeholder";
import { SlideNavigation } from "@/components/presentation/SlideNavigation";
import { NavigationDots } from "@/components/presentation/NavigationDots";

const slides = [
  Slide01Opening,
  Slide02DecadeDetour,
  Slide03RWAvsRWS,
  Slide04OnChainEverything,
  Slide05The500BProblem,
  Slide06WhatFishcakeIs,
  Slide07GravityLoop,
  Slide08MarketingMath,
  Slide09ForUsers,
  Slide10FCC,
  Slide11RedemptionPool,
  Slide12TokenDistribution,
  Slide13WhereWeAre,
  Slide14WhyFishcakeWins,
  Slide15Hackathon,
  Slide16LiveDemo,
  Slide17TheClose,
  Slide18Final,
  Slide19Placeholder,
  Slide20Placeholder,
  Slide21Placeholder,
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