import { cn } from "@/utils/cn";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      {...props}
      className={cn(
        "rounded-full border border-gray-300 h-10 px-5 active:border-foreground-900 focus:border-foreground-900 outline-0 ring-0 transition-all",
        className,
      )}
    />
  );
}
