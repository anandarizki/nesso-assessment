import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export function SocialMedia({ className }: { className?: string }) {
  const items = [
    {
      title: "Google Plus",
      image: "/social/Google+.svg",
    },
    {
      title: "Facebook",
      image: "/social/Facebook.svg",
    },
    {
      title: "Twitter",
      image: "/social/Twitter.svg",
    },
    {
      title: "Instagram",
      image: "/social/Instagram.svg",
    },
  ];
  return (
    <div className={cn("flex gap-7 items-center", className)}>
      {items.map(({ title, image }) => (
        <Link
          href="#"
          key={title}
          title="Title"
          className="opacity-50 hover:opacity-100 transition-all"
        >
          <Image
            src={image}
            alt={title}
            height={19}
            width={19}
            className="w-auto"
          />
        </Link>
      ))}
    </div>
  );
}
