import { cn } from "@/lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface SlideListProps {
  items: string[];
  className?: string;
  variant?: "check" | "arrow" | "number";
}

export const SlideList = ({ items, className, variant = "arrow" }: SlideListProps) => {
  const getIcon = (index: number) => {
    switch (variant) {
      case "check":
        return <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />;
      case "number":
        return (
          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
            {index + 1}
          </span>
        );
      default:
        return <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />;
    }
  };

  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-foreground animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {getIcon(index)}
          <span className="text-base md:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  );
};
