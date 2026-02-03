import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex border items-center justify-center gap-4 whitespace-nowrap rounded-full md:text-sm lg:text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "text-accent shadow-xs hover:bg-accent hover:text-background",
        fill: null,
        ghost: "border-none hover:bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "size-10",
      },
      theme: {
        default: "border-accent",
        gray: "border-gray-200",
      },
    },
    compoundVariants: [
      {
        variant: "fill",
        theme: "gray",
        className:
          "bg-gray-200 text-secondary-foreground hover:bg-foreground hover:text-background",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      theme: "default",
    },
  },
);

type ButtonOwnProps = {
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  theme?: VariantProps<typeof buttonVariants>["theme"];
};

function Button<E extends React.ElementType = "button">(
  props: PolymorphicProps<E, ButtonOwnProps>,
) {
  const { as, className, variant, size, theme, ...rest } = props;

  const Component = as || "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size, theme, className }))}
      {...rest}
    />
  );
}

export { Button, buttonVariants };
