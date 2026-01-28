import { describe, it, expect } from "vitest";
import { generateArticles } from "./";
import type { Category } from "../types";

describe("generateArticles", () => {
  it("should generate the correct number of articles", () => {
    const articles = generateArticles({
      length: 10,
      startDate: new Date("2024-01-01"),
    });
    expect(articles).toHaveLength(10);
  });

  it("should generate articles with all required fields", () => {
    const articles = generateArticles({
      length: 5,
      startDate: new Date("2024-01-01"),
    });

    articles.forEach((article) => {
      expect(article).toHaveProperty("id");
      expect(article).toHaveProperty("title");
      expect(article).toHaveProperty("description");
      expect(article).toHaveProperty("date");
      expect(article).toHaveProperty("author");
      expect(article).toHaveProperty("category");
      expect(article).toHaveProperty("tags");
      expect(article).toHaveProperty("likes");
      expect(article).toHaveProperty("commentsCount");
      expect(article).toHaveProperty("isFeatured");
      expect(article).toHaveProperty("views");
    });
  });

  it("should generate unique IDs", () => {
    const articles = generateArticles({
      length: 20,
      startDate: new Date("2024-01-01"),
    });
    const ids = articles.map((a) => a.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(articles.length);
  });

  it("should use authors from the predefined list", () => {
    const validAuthors = [
      "Sarah Johnson",
      "Michael Chen",
      "Emma Williams",
      "James Rodriguez",
      "Olivia Brown",
      "David Kim",
      "Sophia Martinez",
      "Daniel Lee",
      "Ava Taylor",
      "Ryan Anderson",
    ];

    const articles = generateArticles({
      length: 50,
      startDate: new Date("2024-01-01"),
    });

    articles.forEach((article) => {
      expect(validAuthors).toContain(article.author);
    });
  });

  it("should use tags from the predefined list", () => {
    const validTags = [
      "trending",
      "featured",
      "breaking",
      "analysis",
      "opinion",
      "tutorial",
      "review",
      "interview",
      "research",
      "community",
    ];

    const articles = generateArticles({
      length: 50,
      startDate: new Date("2024-01-01"),
    });

    articles.forEach((article) => {
      expect(article.tags.length).toBeGreaterThan(0);
      article.tags.forEach((tag) => {
        expect(validTags).toContain(tag);
      });
    });
  });

  it("should use valid categories", () => {
    const validCategories: Category[] = [
      "Technology",
      "Health",
      "Business",
      "Lifestyle",
      "Entertainment",
      "Science",
      "Sports",
    ];

    const articles = generateArticles({
      length: 50,
      startDate: new Date("2024-01-01"),
    });

    articles.forEach((article) => {
      expect(validCategories).toContain(article.category);
    });
  });

  it("should generate dates within the specified range", () => {
    const startDate = new Date("2024-01-01");
    const endDate = new Date();

    const articles = generateArticles({
      length: 50,
      startDate,
    });

    articles.forEach((article) => {
      const articleDate = new Date(article.date);
      expect(articleDate.getTime()).toBeGreaterThanOrEqual(startDate.getTime());
      expect(articleDate.getTime()).toBeLessThanOrEqual(endDate.getTime());
    });
  });

  it("should generate reasonable numeric values", () => {
    const articles = generateArticles({
      length: 50,
      startDate: new Date("2024-01-01"),
    });

    articles.forEach((article) => {
      expect(article.likes).toBeGreaterThanOrEqual(0);
      expect(article.likes).toBeLessThan(1000);
      expect(article.commentsCount).toBeGreaterThanOrEqual(0);
      expect(article.commentsCount).toBeLessThan(200);
      expect(article.views).toBeGreaterThanOrEqual(0);
      expect(article.views).toBeLessThan(10000);
      expect(typeof article.isFeatured).toBe("boolean");
    });
  });

  it("should generate non-empty titles and descriptions", () => {
    const articles = generateArticles({
      length: 20,
      startDate: new Date("2024-01-01"),
    });

    articles.forEach((article) => {
      expect(article.title.length).toBeGreaterThan(0);
      expect(article.description.length).toBeGreaterThan(0);
    });
  });
});
