import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils";

export function OptionList({
  title,
  onSelect,
  selected,
  options,
  className,
}: {
  title?: string;
  onSelect: (val: string) => void;
  selected: string[];
  options: { value: string; label?: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      {title && (
        <Typography as="h4" weight="bold" color="max" className="pl-4 mb-2">
          {title}
        </Typography>
      )}
      <ul>
        {options.map((item, index) => (
          <li key={item.value + index}>
            <button
              onClick={() => onSelect(item.value)}
              className={cn(
                "px-4 py-3 hover:bg-foreground-200 w-full rounded-md text-left flex items-center gap-2",
              )}
            >
              <span
                className={cn(
                  "block rounded-full size-3 border border-foreground-300",
                  selected.includes(item.value) && "bg-accent border-accent",
                )}
              />
              {item.label || item.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
