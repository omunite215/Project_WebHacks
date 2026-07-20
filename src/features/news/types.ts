export const NEWS_CATEGORIES = [
  'general',
  'world',
  'nation',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health',
] as const;
export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string | null;
  publishedAt: string;
  source: { name: string; url: string };
}

export interface NewsQuery {
  q?: string;
  category?: NewsCategory;
  page: number;
  pageSize: number;
}

export interface NewsPage {
  articles: Article[];
  totalArticles: number;
  page: number;
}

export interface NewsService {
  getNews(query: NewsQuery): Promise<NewsPage>;
}
