import type { PolymorphicProps } from "@/types";
import { cn } from "@/utils/cn";

import { cva, type VariantProps } from "class-variance-authority";

const fontSecondaryClassName = "poppins";

const typographyVariant = cva("", {
  variants: {
    variant: {
      default: null,
      secondary: fontSecondaryClassName,
    },
    size: {
      default: "text-sm md:text-base",
      sm: "text-sm",
      md: "text-base md:text-[18px]",
      lg: "text-lg md:text-xl",
      xl: "text-xl md:text-2xl",
      xxl: "text-2xl md:text-3xl lg:text-4xl",
    },
    weight: {
      default: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    color: {
      default: "text-foreground",
      gray: "",
      deep: "text-foreground-900",
      max: "text-black",
      accent: "text-accent",
      muted: "text-foreground-300",
    },
  },
  defaultVariants: {
    size: "default",
    weight: "default",
    color: "default",
  },
});

type TypographyProps = {
  className?: string;
  variant?: VariantProps<typeof typographyVariant>["variant"];
  size?: VariantProps<typeof typographyVariant>["size"];
  color?: VariantProps<typeof typographyVariant>["color"];
  weight?: VariantProps<typeof typographyVariant>["weight"];
};

function Typography<E extends React.ElementType = "p">(
  props: PolymorphicProps<E, TypographyProps>,
) {
  const { as, className, variant, size, weight, color, ...rest } = props;

  const Component = as || "p";

  return (
    <Component
      data-slot="p"
      className={cn(
        typographyVariant({ variant, size, color, weight, className }),
      )}
      {...rest}
    />
  );
}

export { Typography, fontSecondaryClassName };
