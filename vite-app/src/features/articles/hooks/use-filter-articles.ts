import { atom, useAtom } from "jotai";
import type { ArticleFilter } from "../types";

const filtersAtom = atom<ArticleFilter>({});

export function useFilterArticles() {
  const [filters, setFilters] = useAtom(filtersAtom);

  const updateFilterByKey = <T extends keyof ArticleFilter>(
    key: T,
    value: ArticleFilter[T],
  ) => {
    const updatedFilter = {
      ...filters,
      [key]: value,
    };
    setFilters(updatedFilter);
  };

  const setCategory = (value: any) => {
    const categories = filters.categories || [];

    const updatedValue = !value
      ? []
      : categories.includes(value)
        ? categories.filter((c) => c !== value)
        : [...categories, value];

    updateFilterByKey("categories", updatedValue);
  };

  const setSortBy = (value: string) => {
    if (!value) {
      setFilters({ ...filters, sortBy: undefined, sortOrder: undefined });
      return;
    }

    setFilters({
      ...filters,
      sortBy: value as any,
      sortOrder: value === "date" ? "asc" : "desc",
    });
  };

  const setDateFrom = (value: string) => {
    updateFilterByKey("dateFrom", value || undefined);
  };

  const setSearchKeyword = (value: string) => {
    updateFilterByKey("search", value);
  };

  const resetFilter = () => {
    setFilters({ search: filters.search });
  };

  return {
    filters,
    setCategory,
    setSortBy,
    setDateFrom,
    setSearchKeyword,
    resetFilter,
  };
}
