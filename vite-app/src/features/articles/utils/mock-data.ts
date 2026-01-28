import type { Category, Article } from "../types";

const AUTHORS = [
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

const TAGS = [
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

const CATEGORIES: Category[] = [
  "Technology",
  "Health",
  "Business",
  "Lifestyle",
  "Entertainment",
  "Science",
  "Sports",
];

const randomString = (length: number): string => {
  const words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ];
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(words[Math.floor(Math.random() * words.length)]);
  }
  return result.join(" ");
};

const randomDate = (start: Date, end: Date): string => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return date.toISOString();
};

const randomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const generateArticles = ({
  length,
  startDate,
}: {
  length: number;
  startDate: Date;
}): Article[] => {
  const endDate = new Date();
  return Array.from({ length }, (_, i) => ({
    id: `article-${i + 1}`,
    title: randomString(Math.floor(Math.random() * 5) + 5),
    description: randomString(Math.floor(Math.random() * 15) + 10),
    date: randomDate(startDate, endDate),
    author: randomItem(AUTHORS),
    category: randomItem(CATEGORIES),
    tags: randomItems(TAGS, Math.floor(Math.random() * 3) + 1),
    likes: Math.floor(Math.random() * 1000),
    commentsCount: Math.floor(Math.random() * 200),
    isFeatured: Math.random() > 0.8,
    views: Math.floor(Math.random() * 10000),
  }));
};

const articleData = generateArticles({
  length: 60,
  startDate: new Date("2025-09-09"),
});

export { generateArticles, articleData, CATEGORIES };
