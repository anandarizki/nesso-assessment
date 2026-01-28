import { SearchInput } from "@/components/shared/search-input";
import type { ArticleFilter, Category, FilterSortBy } from "../../types";
import { useState } from "react";
import { CATEGORIES } from "../../utils";
import { FilterToggleList } from "./filter-toggle-list";
import { getPeriodStartISOs } from "@/utils";
import { ArticleSidebar } from "./article-sidebar";

const SORT_BY_MENU: { value: FilterSortBy | ""; label: string }[] = [
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

const { today, thisWeek, thisMonth, thisYear } = getPeriodStartISOs();

const TIME_PERIOD_MENU = [
  { value: "", label: "All Time" },
  {
    value: today,
    label: "Today",
  },
  { value: thisWeek, label: "This Week" },
  {
    value: thisMonth,
    label: "This Month",
  },
  { value: thisYear, label: "This Year" },
];

export function ArticleFilterInput({
  defaultFilter = {},
  onChange,
  placeholder = "Search articles",
}: {
  defaultFilter?: ArticleFilter;
  onChange?: (f: ArticleFilter) => void;
  placeholder?: string;
}) {
  const [filter, setFilter] = useState<ArticleFilter>(defaultFilter);

  const handleFilterChange = <T extends keyof ArticleFilter>(
    key: T,
    value: ArticleFilter[T],
  ) => {
    const updatedFilter = {
      ...filter,
      [key]: value,
    };
    setFilter(updatedFilter);
    onChange?.(updatedFilter);
  };

  const handleToggleCategories = (value: Category) => {
    const categories = filter.categories || [];
    if (categories.length === 1 && categories[0] === value) return;
    const updatedValue = !value
      ? []
      : categories.includes(value)
        ? categories.filter((c) => c !== value)
        : [...categories, value];

    handleFilterChange("categories", updatedValue);
  };

  const handleSortBy = (value: string) => {
    if (!value) {
      setFilter({ ...filter, sortBy: undefined, sortOrder: undefined });
    } else {
      setFilter({
        ...filter,
        sortBy: value as any,
        sortOrder: value === "date" ? "asc" : "desc",
      });
    }
  };

  const handleDateFrom = (value: string) => {
    handleFilterChange("dateFrom", value || undefined);
  };

  return (
    <>
      <div className="flex gap-1">
        <SearchInput
          placeholder={placeholder}
          className="flex-1"
          onChange={(v) => handleFilterChange("search", v)}
        />
        <ArticleSidebar>
          <FilterToggleList
            options={[
              { value: "", label: "All Categories" },
              ...CATEGORIES.map((c) => ({ value: c, label: c })),
            ]}
            onSelect={(v) => handleToggleCategories(v as any)}
            selected={filter.categories?.length ? filter.categories : [""]}
          />
          <hr className="opacity-20" />

          <FilterToggleList
            title="Sort By"
            options={SORT_BY_MENU}
            onSelect={handleSortBy}
            selected={filter.sortBy ? [filter.sortBy] : [""]}
          />
          <hr className="opacity-20" />

          <FilterToggleList
            title="Period"
            options={TIME_PERIOD_MENU}
            onSelect={handleDateFrom}
            selected={[filter.dateFrom || ""]}
          />
        </ArticleSidebar>
      </div>
    </>
  );
}
