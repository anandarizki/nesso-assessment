import { cn } from "@/utils/cn";
import { Container } from "../ui/container";
import { Typography } from "../ui/typography";

type SectionWrapperOuterProps = React.ComponentProps<"section">;

function SectionWrapperOuter({
  className,
  children,
  ...props
}: SectionWrapperOuterProps) {
  return (
    <section {...props} className={cn("w-full overflow-clip py-11", className)}>
      {children}
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      as="h2"
      size="xxl"
      weight="bold"
      color="max"
      className="max-w-175 relative"
    >
      {children}
      <span className="absolute block w-full max-w-43 -ml-1.5 top-8 h-1.5 bg-accent" />
    </Typography>
  );
}

type SectionWrapperProps = SectionWrapperOuterProps & {
  title?: string;
  description?: string;
  theme?: "default" | "secondary";
};

function SectionWrapper({
  title,
  description,
  className,
  children,
  theme,
  ...props
}: SectionWrapperProps) {
  return (
    <SectionWrapperOuter
      {...props}
      className={cn(theme === "secondary" && "bg-foreground-200", className)}
    >
      <Container className="relative">
        {(title || description) && (
          <div className="mb-8 flex flex-col md:flex-row gap-6 items-start justify-between">
            {title && <SectionTitle>{title}</SectionTitle>}
            {description && (
              <p className="md:max-w-104 lg:text-xl -mt-1 leading-normal">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </SectionWrapperOuter>
  );
}

export { SectionWrapper, SectionWrapperOuter };
