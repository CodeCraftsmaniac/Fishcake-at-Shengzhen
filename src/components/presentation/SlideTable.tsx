import { cn } from "@/lib/utils";

interface TableRow {
  [key: string]: string;
}

interface SlideTableProps {
  headers: string[];
  rows: TableRow[];
  className?: string;
  highlightFirst?: boolean;
}

export const SlideTable = ({ headers, rows, className, highlightFirst = false }: SlideTableProps) => {
  // Get the actual keys from the first row to properly map data
  const dataKeys = rows.length > 0 ? Object.keys(rows[0]) : [];
  
  return (
    <div className={cn("overflow-x-auto animate-scale-in", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border/50">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-display text-sm font-semibold text-primary uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b border-border/30 transition-colors hover:bg-secondary/30",
                highlightFirst && rowIndex === 0 && "bg-primary/5"
              )}
            >
              {dataKeys.map((key, colIndex) => (
                <td
                  key={colIndex}
                  className={cn(
                    "px-4 py-4 text-sm",
                    colIndex === 0 ? "font-medium text-foreground" : "text-muted-foreground"
                  )}
                >
                  {row[key] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
