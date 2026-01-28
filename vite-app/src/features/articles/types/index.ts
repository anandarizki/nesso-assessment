export type Category =
  | "Technology"
  | "Health"
  | "Business"
  | "Lifestyle"
  | "Entertainment"
  | "Science"
  | "Sports";

export type Article = {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: Category;
  tags: string[];
  likes: number;
  commentsCount: number;
  isFeatured: boolean;
  views: number;
};

export type FilterSortBy =
  | "date"
  | "likes"
  | "views"
  | "commentsCount"
  | "title";

export type ArticleFilter = {
  search?: string;
  categories?: Category[];
  tags?: string[];
  authors?: string[];
  dateFrom?: string;
  dateTo?: string;
  isFeatured?: boolean;
  sortBy?: FilterSortBy;
  sortOrder?: "asc" | "desc";
};
