"use client";

import { cn } from "@/utils/cn";

export function NavLink({
  children,
  href,
  className,
  ...props
}: React.ComponentProps<"a">) {
  const pathName = "/";
  const isActive = pathName === href;
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center relative transition-all hover:text-max text-nowrap",
        className,
        isActive && "active text-max",
      )}
    >
      {isActive && (
        <span className="block rounded-full size-1 bg-foreground absolute" />
      )}
      {children}
    </a>
  );
}
