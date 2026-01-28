import { describe, it, expect, beforeEach } from "vitest";
import { filterArticles } from "./";
import type { Article, ArticleFilter } from "../types";

describe("filterArticles", () => {
  let mockArticles: Article[];

  beforeEach(() => {
    mockArticles = [
      {
        id: "1",
        title: "Introduction to TypeScript",
        description: "Learn the basics of TypeScript programming",
        date: "2024-01-15T00:00:00.000Z",
        author: "Sarah Johnson",
        category: "Technology",
        tags: ["tutorial", "trending"],
        likes: 150,
        commentsCount: 25,
        isFeatured: true,
        views: 1200,
      },
      {
        id: "2",
        title: "Healthy Living Tips",
        description: "Top 10 tips for a healthier lifestyle",
        date: "2024-02-10T00:00:00.000Z",
        author: "Michael Chen",
        category: "Health",
        tags: ["featured", "community"],
        likes: 300,
        commentsCount: 50,
        isFeatured: false,
        views: 2500,
      },
      {
        id: "3",
        title: "Business Strategies 2024",
        description: "Modern business approaches for success",
        date: "2024-03-05T00:00:00.000Z",
        author: "Emma Williams",
        category: "Business",
        tags: ["analysis", "trending"],
        likes: 200,
        commentsCount: 30,
        isFeatured: true,
        views: 1800,
      },
      {
        id: "4",
        title: "TypeScript Advanced Patterns",
        description: "Deep dive into advanced TypeScript patterns",
        date: "2024-01-20T00:00:00.000Z",
        author: "Sarah Johnson",
        category: "Technology",
        tags: ["tutorial", "research"],
        likes: 100,
        commentsCount: 15,
        isFeatured: false,
        views: 900,
      },
      {
        id: "5",
        title: "Sports News Update",
        description: "Latest updates from the sports world",
        date: "2024-03-15T00:00:00.000Z",
        author: "James Rodriguez",
        category: "Sports",
        tags: ["breaking", "featured"],
        likes: 450,
        commentsCount: 80,
        isFeatured: true,
        views: 3500,
      },
    ];
  });

  it("should return all articles when no filter is applied", () => {
    const result = filterArticles(mockArticles, {});
    expect(result).toHaveLength(5);
  });

  it("should filter by search term in title", () => {
    const filter: ArticleFilter = { search: "TypeScript" };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
    expect(result.every((a) => a.title.includes("TypeScript"))).toBe(true);
  });

  it("should filter by search term in description", () => {
    const filter: ArticleFilter = { search: "lifestyle" };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("2");
  });

  it("should filter by search term case-insensitively", () => {
    const filter: ArticleFilter = { search: "typescript" };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
  });

  it("should filter by single category", () => {
    const filter: ArticleFilter = { categories: ["Technology"] };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
    expect(result.every((a) => a.category === "Technology")).toBe(true);
  });

  it("should filter by multiple categories", () => {
    const filter: ArticleFilter = { categories: ["Technology", "Health"] };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(3);
  });

  it("should filter by tags (any match)", () => {
    const filter: ArticleFilter = { tags: ["trending"] };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
    expect(result.every((a) => a.tags.includes("trending"))).toBe(true);
  });

  it("should filter by multiple tags (any match)", () => {
    const filter: ArticleFilter = { tags: ["tutorial", "featured"] };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(4);
  });

  it("should filter by single author", () => {
    const filter: ArticleFilter = { authors: ["Sarah Johnson"] };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
    expect(result.every((a) => a.author === "Sarah Johnson")).toBe(true);
  });

  it("should filter by multiple authors", () => {
    const filter: ArticleFilter = {
      authors: ["Sarah Johnson", "Michael Chen"],
    };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(3);
  });

  it("should filter by dateFrom", () => {
    const filter: ArticleFilter = { dateFrom: "2024-02-01" };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(3);
    expect(
      result.every((a) => new Date(a.date) >= new Date("2024-02-01")),
    ).toBe(true);
  });

  it("should filter by dateTo", () => {
    const filter: ArticleFilter = { dateTo: "2024-02-01" };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
    expect(
      result.every((a) => new Date(a.date) <= new Date("2024-02-01")),
    ).toBe(true);
  });

  it("should filter by date range", () => {
    const filter: ArticleFilter = {
      dateFrom: "2024-01-01",
      dateTo: "2024-02-28",
    };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(3);
  });

  it("should filter by isFeatured true", () => {
    const filter: ArticleFilter = { isFeatured: true };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(3);
    expect(result.every((a) => a.isFeatured === true)).toBe(true);
  });

  it("should filter by isFeatured false", () => {
    const filter: ArticleFilter = { isFeatured: false };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
    expect(result.every((a) => a.isFeatured === false)).toBe(true);
  });

  it("should sort by date ascending", () => {
    const filter: ArticleFilter = { sortBy: "date", sortOrder: "asc" };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].id).toBe("1");
    expect(result[4].id).toBe("5");
  });

  it("should sort by date descending", () => {
    const filter: ArticleFilter = { sortBy: "date", sortOrder: "desc" };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].id).toBe("5");
    expect(result[4].id).toBe("1");
  });

  it("should sort by likes ascending", () => {
    const filter: ArticleFilter = { sortBy: "likes", sortOrder: "asc" };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].likes).toBe(100);
    expect(result[4].likes).toBe(450);
  });

  it("should sort by likes descending", () => {
    const filter: ArticleFilter = { sortBy: "likes", sortOrder: "desc" };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].likes).toBe(450);
    expect(result[4].likes).toBe(100);
  });

  it("should sort by views ascending", () => {
    const filter: ArticleFilter = { sortBy: "views", sortOrder: "asc" };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].views).toBe(900);
    expect(result[4].views).toBe(3500);
  });

  it("should sort by commentsCount descending", () => {
    const filter: ArticleFilter = {
      sortBy: "commentsCount",
      sortOrder: "desc",
    };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].commentsCount).toBe(80);
    expect(result[4].commentsCount).toBe(15);
  });

  it("should sort by title ascending", () => {
    const filter: ArticleFilter = { sortBy: "title", sortOrder: "asc" };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].title).toBe("Business Strategies 2024");
    expect(result[4].title).toBe("TypeScript Advanced Patterns");
  });

  it("should sort by title descending", () => {
    const filter: ArticleFilter = { sortBy: "title", sortOrder: "desc" };
    const result = filterArticles(mockArticles, filter);
    expect(result[0].title).toBe("TypeScript Advanced Patterns");
    expect(result[4].title).toBe("Business Strategies 2024");
  });

  it("should apply multiple filters together", () => {
    const filter: ArticleFilter = {
      search: "TypeScript",
      categories: ["Technology"],
      authors: ["Sarah Johnson"],
      isFeatured: false,
    };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("4");
  });

  it("should apply filters and sorting together", () => {
    const filter: ArticleFilter = {
      categories: ["Technology"],
      sortBy: "likes",
      sortOrder: "desc",
    };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(2);
    expect(result[0].likes).toBe(150);
    expect(result[1].likes).toBe(100);
  });

  it("should return empty array when no articles match filters", () => {
    const filter: ArticleFilter = {
      search: "nonexistent term xyz",
      categories: ["Technology"],
    };
    const result = filterArticles(mockArticles, filter);
    expect(result).toHaveLength(0);
  });

  it("should not mutate the original articles array", () => {
    const originalLength = mockArticles.length;
    const filter: ArticleFilter = { categories: ["Technology"] };
    filterArticles(mockArticles, filter);
    expect(mockArticles).toHaveLength(originalLength);
  });
});
