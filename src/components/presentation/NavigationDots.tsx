import { cn } from "@/lib/utils";

interface NavigationDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const NavigationDots = ({ total, current, onSelect }: NavigationDotsProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass px-4 py-3 rounded-full flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === current
                ? "bg-primary w-6 shadow-[0_0_10px_rgba(255,140,0,0.5)]"
                : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
