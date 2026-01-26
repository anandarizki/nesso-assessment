import { cn } from "@/utils/cn";
import { NavLink } from "./nav-link";
import { menuItems } from "@/utils/mock-data";

type NavigationProps = React.ComponentProps<"nav"> & {
  children?: React.ReactNode;
};

export function NavBar({ className, children, ...props }: NavigationProps) {
  return (
    <nav {...props} className={cn("bg-foreground-100 rounded-full", className)}>
      <ul className="flex text-sm lg:text-base px-6 w-full">
        {menuItems.map(({ href, label, ...itemProps }) => (
          <li key={href} className="flex-auto">
            <NavLink
              {...itemProps}
              href={href}
              className="hover:text-max hover:-translate-y-px text-foreground-400 [&_span]:hidden w-full justify-center md:[&_span]:block md:[&_span]:left-0 lg:[&_span]:left-2 h-11"
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
}
