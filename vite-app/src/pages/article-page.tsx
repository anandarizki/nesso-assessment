import { SectionTitle } from "@/components/shared/section-wrapper";
import { Container } from "@/components/ui/container";
import {
  ArticleFilterMenu,
  ArticleList,
  SearchArticles,
} from "@/features/articles";

export function ArticlePage() {
  return (
    <Container className="py-10 md:py-20">
      <div className="flex justify-center ">
        <SectionTitle>Search Articles</SectionTitle>
      </div>
      <div className="my-10 flex items-center gap-2 max-w-3xl m-auto">
        <SearchArticles />
        <ArticleFilterMenu />
      </div>
      <ArticleList />
    </Container>
  );
}
