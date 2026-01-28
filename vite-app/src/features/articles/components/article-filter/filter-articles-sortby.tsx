import { OptionList } from "@/components/shared/option-list";
import { useFilterArticles } from "../../hooks";

const SORT_BY_MENU = [
  {
    value: "",
    label: "Newest",
  },
  {
    value: "likes",
    label: "Most Liked",
  },
  { value: "commentsCount", label: "Most Discussed" },
  {
    value: "views",
    label: "Most Viewed",
  },
  {
    value: "date",
    label: "Oldest",
  },
];

export function FilterArticlesSortBy() {
  const { setSortBy, filters } = useFilterArticles();
  return (
    <OptionList
      title="Sort By"
      options={SORT_BY_MENU}
      onSelect={setSortBy}
      selected={filters.sortBy ? [filters.sortBy] : [""]}
    />
  );
}
