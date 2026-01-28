// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ArticleFilterInput } from "./";
import type { ArticleFilter } from "../../types";

// 1. Mock the Utilities
vi.mock("../../utils", () => ({
  CATEGORIES: ["Technology", "Design", "Business"],
}));

vi.mock("@/utils", () => ({
  getPeriodStartISOs: () => ({
    today: "2024-01-01T00:00:00Z",
    thisWeek: "2024-01-01T00:00:00Z",
    thisMonth: "2024-01-01T00:00:00Z",
    thisYear: "2024-01-01T00:00:00Z",
  }),
}));

// 2. Mock Sub-components for easier testing
vi.mock("@/components/shared/search-input", () => ({
  SearchInput: ({ onChange, placeholder }: any) => (
    <input
      data-testid="search-input"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

vi.mock("./article-sidebar", () => ({
  ArticleSidebar: ({ children }: any) => (
    <div data-testid="sidebar">{children}</div>
  ),
}));

vi.mock("./filter-toggle-list", () => ({
  FilterToggleList: ({ options, onSelect, title }: any) => (
    <div data-testid={`filter-list-${title || "categories"}`}>
      {options.map((opt: any) => (
        <button key={opt.value} onClick={() => onSelect(opt.value)}>
          {opt.label}
        </button>
      ))}
    </div>
  ),
}));

describe("ArticleFilterInput", () => {
  const mockOnChange = vi.fn();
  afterEach(() => {
    cleanup();
  });
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render with default state", () => {
    render(<ArticleFilterInput placeholder="Custom Search" />);

    expect(screen.getByTestId("search-input")).toHaveAttribute(
      "placeholder",
      "Custom Search",
    );
    expect(screen.getByText("All Categories")).toBeInTheDocument();
  });

  it("should trigger onChange when searching", () => {
    render(<ArticleFilterInput onChange={mockOnChange} />);

    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "React" } });

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ search: "React" }),
    );
  });

  it("should add and remove categories correctly", () => {
    render(<ArticleFilterInput onChange={mockOnChange} />);

    // Click a category
    const techButton = screen.getByText("Technology");
    fireEvent.click(techButton);

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ categories: ["Technology"] }),
    );

    // Click another category (multi-select)
    const designButton = screen.getByText("Design");
    fireEvent.click(designButton);

    expect(mockOnChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ categories: ["Technology", "Design"] }),
    );
  });

  it("should not allow deselecting the last category", () => {
    // Starting with one category selected
    render(
      <ArticleFilterInput
        defaultFilter={{ categories: ["Technology"] }}
        onChange={mockOnChange}
      />,
    );

    const techButton = screen.getByText("Technology");
    fireEvent.click(techButton); // Try to deselect the only category

    // Should still have Technology in the filter
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it("should handle Time Period selection", () => {
    render(<ArticleFilterInput onChange={mockOnChange} />);

    fireEvent.click(screen.getByText("Today"));

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ dateFrom: "2024-01-01T00:00:00Z" }),
    );
  });

  it("should initialize with defaultFilter values", () => {
    const defaultFilter: ArticleFilter = {
      search: "Initial",
      categories: ["Business"],
    };
    render(
      <ArticleFilterInput
        defaultFilter={defaultFilter}
        onChange={mockOnChange}
      />,
    );

    // Trigger a change to see the current state
    fireEvent.click(screen.getByText("Technology"));

    expect(mockOnChange).toHaveBeenCalledWith({
      search: "Initial",
      categories: ["Business", "Technology"],
    });
  });
});
