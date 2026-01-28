import { OptionList } from "@/components/shared/option-list";
import { useFilterArticles } from "../../hooks";
import { CATEGORIES } from "../../utils";

export function FilterArticlesCategory() {
  const { filters, setCategory } = useFilterArticles();
  return (
    <OptionList
      options={[
        { value: "", label: "All Categories" },
        ...CATEGORIES.map((c) => ({ value: c, label: c })),
      ]}
      onSelect={setCategory}
      selected={filters.categories?.length ? filters.categories : [""]}
    />
  );
}
