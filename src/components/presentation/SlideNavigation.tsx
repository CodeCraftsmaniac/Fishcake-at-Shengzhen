import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentSlide: number;
  totalSlides: number;
}

export const SlideNavigation = ({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentSlide,
  totalSlides,
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
      <div className="glass px-4 py-2 rounded-full">
        <span className="text-sm text-muted-foreground font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={!hasPrev}
          className="glass border-border/50 hover:border-primary/50 hover:bg-primary/10 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={!hasNext}
          className="glass border-border/50 hover:border-primary/50 hover:bg-primary/10 disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
