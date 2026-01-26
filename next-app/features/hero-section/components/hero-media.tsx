import Image from "next/image";

import { cn } from "@/utils/cn";
import { heroData } from "@/utils/mock-data";

export function HeroMedia({ className = "" }: { className?: string }) {
  return (
    <Image
      src={heroData.image}
      width={599}
      height={518}
      priority
      alt=""
      className={cn("h-auto pointer-events-none transition-all", className)}
    />
  );
}
