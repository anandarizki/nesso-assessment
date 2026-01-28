import { cn } from "@/utils/cn";

function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("m-auto px-8 w-full max-w-340", className)}>
      {children}
    </div>
  );
}

export { Container };
