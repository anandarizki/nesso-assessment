import { aboutData } from "@/utils/mock-data";
import Image from "next/image";

export function AboutMedia() {
  return (
    <div>
      <Image
        width={619}
        height={316}
        alt="Team"
        src={aboutData.image}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
