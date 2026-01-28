import { SectionTitle } from "@/components/shared/section-wrapper";
import { Container } from "@/components/ui/container";
import { ArticleFilterInput, ArticleList } from "@/features/articles";
import { useState } from "react";

export function ArticlePage() {
  const [filters, setFilters] = useState({});
  return (
    <Container className="py-20">
      <div className="flex justify-center ">
        <SectionTitle>Search Articles</SectionTitle>
      </div>
      <div className="my-10 rounded-full max-w-3xl m-auto">
        <ArticleFilterInput onChange={setFilters} />
      </div>
      <ArticleList filters={filters} />
    </Container>
  );
}
