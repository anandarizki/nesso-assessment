// @vitest-environment jsdom

import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useFilterArticles } from "."; // Adjust path
import { Provider, createStore } from "jotai";
import React from "react";

describe("useFilterArticles", () => {
  // We create a fresh store for each test to ensure state isolation
  let store: ReturnType<typeof createStore>;

  beforeEach(() => {
    store = createStore();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  it("should initialize with empty filters", () => {
    const { result } = renderHook(() => useFilterArticles(), { wrapper });
    expect(result.current.filters).toEqual({});
  });

  it("should update search keyword", () => {
    const { result } = renderHook(() => useFilterArticles(), { wrapper });

    act(() => {
      result.current.setSearchKeyword("React Conf");
    });

    expect(result.current.filters.search).toBe("React Conf");
  });

  describe("setCategory", () => {
    it("should add a category if not present", () => {
      const { result } = renderHook(() => useFilterArticles(), { wrapper });

      act(() => {
        result.current.setCategory("tech");
      });

      expect(result.current.filters.categories).toEqual(["tech"]);
    });

    it("should clear categories if value is null/empty", () => {
      const { result } = renderHook(() => useFilterArticles(), { wrapper });

      act(() => {
        result.current.setCategory("tech");
        result.current.setCategory(null);
      });

      expect(result.current.filters.categories).toEqual([]);
    });
  });

  describe("setSortBy", () => {
    it("should set sortOrder to 'asc' when sorting by date", () => {
      const { result } = renderHook(() => useFilterArticles(), { wrapper });

      act(() => {
        result.current.setSortBy("date");
      });

      expect(result.current.filters.sortBy).toBe("date");
      expect(result.current.filters.sortOrder).toBe("asc");
    });

    it("should set sortOrder to 'desc' for other sort types", () => {
      const { result } = renderHook(() => useFilterArticles(), { wrapper });

      act(() => {
        result.current.setSortBy("popularity");
      });

      expect(result.current.filters.sortBy).toBe("popularity");
      expect(result.current.filters.sortOrder).toBe("desc");
    });

    it("should clear sort values if no value is provided", () => {
      const { result } = renderHook(() => useFilterArticles(), { wrapper });

      act(() => {
        result.current.setSortBy("date");
        result.current.setSortBy("");
      });

      expect(result.current.filters.sortBy).toBeUndefined();
      expect(result.current.filters.sortOrder).toBeUndefined();
    });
  });
});
