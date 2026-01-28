import type { Article, ArticleFilter } from "../types";

export const filterArticles = (
  articles: Article[],
  filter: ArticleFilter,
): Article[] => {
  let filtered = [...articles];

  // Search filter
  if (filter.search) {
    const searchLower = filter.search.toLowerCase();
    filtered = filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(searchLower) ||
        article.description.toLowerCase().includes(searchLower) ||
        article.author.toLowerCase().includes(searchLower),
    );
  }

  // Categories filter
  if (filter.categories && filter.categories.length > 0) {
    filtered = filtered.filter((article) =>
      filter.categories!.includes(article.category),
    );
  }

  // Tags filter
  if (filter.tags && filter.tags.length > 0) {
    filtered = filtered.filter((article) =>
      filter.tags!.some((tag) => article.tags.includes(tag)),
    );
  }

  // Authors filter
  if (filter.authors && filter.authors.length > 0) {
    filtered = filtered.filter((article) =>
      filter.authors!.includes(article.author),
    );
  }

  // Date from filter
  if (filter.dateFrom) {
    const dateFrom = new Date(filter.dateFrom);
    filtered = filtered.filter((article) => new Date(article.date) >= dateFrom);
  }

  // Date to filter
  if (filter.dateTo) {
    const dateTo = new Date(filter.dateTo);
    filtered = filtered.filter((article) => new Date(article.date) <= dateTo);
  }

  // Featured filter
  if (filter.isFeatured !== undefined) {
    filtered = filtered.filter(
      (article) => article.isFeatured === filter.isFeatured,
    );
  }

  // Sorting
  if (filter.sortBy) {
    filtered.sort((a, b) => {
      let aValue: any = a[filter.sortBy!];
      let bValue: any = b[filter.sortBy!];

      if (filter.sortBy === "date") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }

      if (filter.sortBy === "title") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return filter.sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return filter.sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }

  return filtered;
};
