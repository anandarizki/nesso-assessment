import { Card, CardContent } from "@/components/ui/card";
import type { Article } from "../types";
import { Typography } from "@/components/ui/typography";
import { readableDate } from "@/utils";
import { CommentIcon, LikeIcon } from "@/components/ui/icons";
import { ViewIcon } from "lucide-react";

function StatItem({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex gap-1 text-xs [&_svg]:size-4 text-foreground-300 items-center">
      {children}
    </div>
  );
}

function ArticleStats({ commentsCount, views, likes, category }: Article) {
  return (
    <div className="flex justify-between px-3">
      <div className="flex gap-3">
        <StatItem title="Likes">
          <LikeIcon />
          {likes}
        </StatItem>
        <StatItem title="Comments">
          <CommentIcon />
          {commentsCount}
        </StatItem>
        <StatItem title="Views">
          <ViewIcon />
          {views}
        </StatItem>
      </div>
      <StatItem title="Views">{category}</StatItem>
    </div>
  );
}

export function ArticleThumbnail(props: Article) {
  return (
    <Card size="xs" className="relative w-full" theme="gray">
      <CardContent size="xs" className="flex-1">
        <div>
          <Typography as="h3" weight="medium" className="capitalize">
            {props.title}
          </Typography>
          <p className="text-xs font-light text-foreground-300">
            {props.author} - {readableDate(props.date)}
          </p>
        </div>
        <Typography color="muted" size="sm">
          {props.description}
        </Typography>
      </CardContent>

      <ArticleStats {...props} />
    </Card>
  );
}
