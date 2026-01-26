import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  " border border-transparent transition-all flex flex-col gap-7 px-4 py-8",
  {
    variants: {
      variant: {
        default: "",
        outline: "border bg-background",
      },
      size: {
        default: "rounded-[30px]",
        sm: "rounded-3xl",
      },
      theme: {
        default: null,
        accent: null,
        gray: null,
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        theme: "accent",
        className: "border-accent",
      },
      {
        variant: "default",
        theme: "default",
        className: "bg-background",
      },
      {
        variant: "default",
        theme: "gray",
        className: "bg-foreground-200",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      theme: "default",
    },
  },
);

type CardProps = React.ComponentProps<"div"> & {
  variant?: VariantProps<typeof cardVariants>["variant"];
  size?: VariantProps<typeof cardVariants>["size"];
  theme?: VariantProps<typeof cardVariants>["theme"];
};

function Card({
  children,
  className,
  variant,
  size,
  theme,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={cn(cardVariants({ variant, size, theme, className }))}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className, ...props }: CardProps) {
  return (
    <Card {...props} size="sm" className={cn("p-5", className)}>
      {children}
    </Card>
  );
}

function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <div {...props} className={cn("flex justify-between px-5", className)}>
      {children}
    </div>
  );
}

export { Card, CardContent, CardHeader };
