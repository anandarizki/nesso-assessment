/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ArticleList } from "./article-list";
import type { Article, ArticleFilter } from "../types";
import "@testing-library/jest-dom/vitest";

import { filterArticles, articleData } from "../utils";

// 2. Mock the dependencies
vi.mock("../utils", () => ({
  articleData: [
    {
      id: "1",
      title: "First Article",
      description: "This is the first article description",
      author: "John Doe",
      date: "2024-01-15",
      category: "Technology",
      tags: ["react", "typescript"],
      isFeatured: true,
      likes: 10,
      commentsCount: 5,
      views: 100,
    },
    {
      id: "2",
      title: "Second Article",
      description: "This is the second article description",
      author: "Jane Smith",
      date: "2024-01-20",
      category: "Design",
      tags: ["ui", "ux"],
      isFeatured: false,
      likes: 20,
      commentsCount: 8,
      views: 200,
    },
    {
      id: "3",
      title: "Third Article",
      description: "This is the third article description",
      author: "Bob Johnson",
      date: "2024-01-10",
      category: "Technology",
      tags: ["javascript", "web"],
      isFeatured: true,
      likes: 15,
      commentsCount: 3,
      views: 150,
    },
  ] as Article[],
  filterArticles: vi.fn(),
}));

vi.mock("./article-thumbnail", () => ({
  ArticleThumbnail: ({ title, author }: Article) => (
    <div data-testid={`article-${title}`}>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  ),
}));

vi.mock("@/components/ui/typography", () => ({
  Typography: ({ children, ...props }: any) => <div {...props}>{children}</div>,
}));

vi.mock("@/components/ui/icons", () => ({
  SearchIcon: (props: any) => <svg data-testid="search-icon" {...props} />,
}));

vi.mock("motion/react", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Helper to access mock methods with TypeScript support
const mockedFilterArticles = vi.mocked(filterArticles);

describe("ArticleList", () => {
  // 1. This clears the DOM after every single test
  afterEach(() => {
    cleanup();
  });

  // 2. This clears mock history
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render all articles when no filters are applied", () => {
    mockedFilterArticles.mockReturnValue([
      { id: "1", title: "First Article", author: "John Doe" },
      { id: "2", title: "Second Article", author: "Jane Smith" },
      { id: "3", title: "Third Article", author: "Bob Johnson" },
    ] as Article[]);

    render(<ArticleList />);

    expect(screen.getByTestId("article-First Article")).toBeInTheDocument();
    expect(screen.getByTestId("article-Second Article")).toBeInTheDocument();
    expect(screen.getByTestId("article-Third Article")).toBeInTheDocument();
  });

  it("should render filtered articles based on filters prop", () => {
    mockedFilterArticles.mockReturnValue([
      { id: "1", title: "First Article", author: "John Doe" } as Article,
    ]);

    const filters: ArticleFilter = {
      search: "First",
      sortBy: "date",
    };

    render(<ArticleList filters={filters} />);

    expect(screen.getByTestId("article-First Article")).toBeInTheDocument();
    expect(
      screen.queryByTestId("article-Second Article"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("article-Third Article"),
    ).not.toBeInTheDocument();
  });

  it("should display 'Article Not Found' when no articles match the filter", () => {
    mockedFilterArticles.mockReturnValue([]);

    const filters: ArticleFilter = {
      search: "NonexistentArticle",
      sortBy: "date",
    };

    render(<ArticleList filters={filters} />);

    expect(screen.getByTestId("not-found")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
    expect(screen.getByText("Article Not Found")).toBeInTheDocument();
  });

  it("should not display 'Article Not Found' when articles are present", () => {
    mockedFilterArticles.mockReturnValue([
      { id: "1", title: "First Article", author: "John Doe" } as Article,
    ]);

    render(<ArticleList />);

    expect(screen.queryByTestId("not-found")).not.toBeInTheDocument();
  });

  it("should apply default sortBy filter when no filters provided", () => {
    mockedFilterArticles.mockReturnValue(articleData);

    render(<ArticleList />);

    expect(mockedFilterArticles).toHaveBeenCalledWith(articleData, {
      sortBy: "date",
    });
  });

  it("should pass custom filters to filterArticles function", () => {
    mockedFilterArticles.mockReturnValue([]);

    const customFilters: ArticleFilter = {
      search: "technology",
      categories: ["Technology"],
      sortBy: "title",
      sortOrder: "asc",
    };

    render(<ArticleList filters={customFilters} />);

    expect(mockedFilterArticles).toHaveBeenCalledWith(
      articleData,
      customFilters,
    );
  });

  it("should render articles in a responsive grid layout", () => {
    mockedFilterArticles.mockReturnValue([
      { id: "1", title: "First Article", author: "John Doe" } as Article,
    ]);

    const { container } = render(<ArticleList />);

    const grid = container.querySelector(
      ".grid.md\\:grid-cols-2.lg\\:grid-cols-3.xl\\:grid-cols-4",
    );
    expect(grid).toBeInTheDocument();
  });

  it("should render ArticleThumbnail for each filtered article", () => {
    const mockArticles = [
      { id: "1", title: "First Article", author: "John Doe" },
      { id: "2", title: "Second Article", author: "Jane Smith" },
    ] as Article[];
    mockedFilterArticles.mockReturnValue(mockArticles);

    render(<ArticleList />);

    expect(screen.getByText("First Article")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Second Article")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("should handle empty articleData gracefully", () => {
    mockedFilterArticles.mockReturnValue([]);

    render(<ArticleList />);

    expect(screen.getByTestId("not-found")).toBeInTheDocument();
    expect(screen.getByText("Article Not Found")).toBeInTheDocument();
  });

  it("should apply multiple filters simultaneously", () => {
    mockedFilterArticles.mockReturnValue([
      { id: "1", title: "First Article", author: "John Doe" } as Article,
    ]);

    const multipleFilters: ArticleFilter = {
      search: "article",
      categories: ["Technology"],
      tags: ["react"],
      authors: ["John Doe"],
      dateFrom: "2024-01-01",
      dateTo: "2024-01-31",
      isFeatured: true,
      sortBy: "date",
      sortOrder: "desc",
    };

    render(<ArticleList filters={multipleFilters} />);

    expect(mockedFilterArticles).toHaveBeenCalledWith(
      articleData,
      multipleFilters,
    );
    expect(screen.getByTestId("article-First Article")).toBeInTheDocument();
  });

  it("should handle filter updates and re-render correctly", () => {
    // Initial render
    mockedFilterArticles.mockReturnValueOnce([
      { id: "1", title: "First Article", author: "John Doe" } as Article,
    ]);

    const { rerender } = render(<ArticleList filters={{ sortBy: "date" }} />);
    expect(screen.getByTestId("article-First Article")).toBeInTheDocument();

    // Update with new filters
    mockedFilterArticles.mockReturnValueOnce([
      { id: "2", title: "Second Article", author: "Jane Smith" } as Article,
    ]);

    rerender(<ArticleList filters={{ search: "Second", sortBy: "date" }} />);
    expect(screen.getByTestId("article-Second Article")).toBeInTheDocument();
  });

  it("should render motion.div with correct props for animations", () => {
    mockedFilterArticles.mockReturnValue([
      { id: "1", title: "First Article", author: "John Doe" } as Article,
    ]);

    const { container } = render(<ArticleList />);

    // Check that motion.div wrapper exists (mocked as regular div)
    const motionDivs = container.querySelectorAll(".flex");
    expect(motionDivs.length).toBeGreaterThan(0);
  });
});
