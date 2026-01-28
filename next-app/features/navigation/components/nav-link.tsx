"use client";

import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ children, href, className, ...props }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      {...props}
      href={href}
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
    </Link>
  );
}
