import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { brandList } from "@/utils/mock-data";

export function BrandList({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2 h-18", className)}>
      {brandList.map(({ name, image }) => (
        <Button
          as="a"
          href="#"
          key={name}
          variant="fill"
          theme="gray"
          className="group p-0 h-9"
        >
          <Image
            src={image}
            width={100}
            height={100}
            alt={name}
            className="h-9 w-auto group-hover:invert"
          />
        </Button>
      ))}
    </div>
  );
}
