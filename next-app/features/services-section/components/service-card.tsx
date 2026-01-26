import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconArrow } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

type ServiceCardProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};
//rounded-3xl bg-gray-100 group-hover:border-accent
export function ServiceCard({ href, title, children }: ServiceCardProps) {
  return (
    <Link href={href} className="flex group">
      <Card theme="gray" className="h-full group-hover:border-accent">
        <CardHeader>
          <Typography
            size="xl"
            color="max"
            weight="medium"
            className="transition-all group-hover:font-bold"
          >
            {title}
          </Typography>
          <IconArrow className="transition-all size-8 -mr-1 opacity-0 group-hover:opacity-100" />
        </CardHeader>
        <CardContent className="flex-1">
          <Typography as="p" size="lg" className="leading-normal">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
