import { cn } from "@/utils/cn";
import { Typography } from "../ui/typography";

type Variant = "default" | "compact";
type ContentWrapperProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  variant?: Variant;
};

export function ContentWrapper({
  title,
  children,
  className,
  titleClassName,
  contentClassName,
  variant = "default",
}: ContentWrapperProps) {
  const isCompact = variant === "compact";
  return (
    <div className={cn("not-first:mt-5", className)}>
      {title && (
        <Typography
          as="h3"
          size={isCompact ? "md" : "xl"}
          weight={isCompact ? "bold" : "medium"}
          color="max"
          className={cn("mb-2.5", titleClassName)}
        >
          {title}
        </Typography>
      )}
      <Typography as="p" className={contentClassName}>
        {children}
      </Typography>
    </div>
  );
}
