import { atom, useAtomValue } from "jotai";
import { articleData, filterArticles } from "../utils";
import { useFilterArticles } from "./use-filter-articles";

const articlesAtom = atom(articleData);

export function useArticles() {
  const allArticles = useAtomValue(articlesAtom);
  const { filters } = useFilterArticles();
  return filterArticles(allArticles, filters);
}
