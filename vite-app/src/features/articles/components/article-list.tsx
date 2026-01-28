import { SearchIcon } from "@/components/ui/icons";
import type { ArticleFilter } from "../types";
import { articleData, filterArticles } from "../utils";
import { ArticleThumbnail } from "./article-thumbnail";
import { Typography } from "@/components/ui/typography";
import { AnimatePresence, motion } from "motion/react";

export function ArticleList({
  filters = { sortBy: "date" },
}: {
  filters?: ArticleFilter;
}) {
  const filtered = filterArticles(articleData, filters);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence>
          {filtered.map((article) => (
            <motion.div
              layout
              layoutId={article.id}
              key={article.id}
              className="flex"
            >
              <ArticleThumbnail {...article} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {!filtered.length && (
        <div
          data-testid="not-found"
          className="h-[40vh] flex flex-col gap-8 items-center justify-center"
        >
          <SearchIcon className="size-32 opacity-40" />
          <Typography color="muted" size="lg">
            Article Not Found
          </Typography>
        </div>
      )}
    </>
  );
}
