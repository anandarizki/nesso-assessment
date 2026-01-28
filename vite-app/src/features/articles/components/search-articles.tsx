import { SearchInput } from "@/components/shared/search-input";
import { useFilterArticles } from "../hooks";

export function SearchArticles() {
  const { setSearchKeyword } = useFilterArticles();
  return (
    <SearchInput
      placeholder="Search articles"
      className="flex-1"
      onChange={setSearchKeyword}
    />
  );
}
