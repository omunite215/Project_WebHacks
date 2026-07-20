import type { Article, NewsPage, NewsQuery, NewsService } from '../types';
import data from '../mock/news.mock.json';

const ALL = data as Article[];

const LATENCY_MS = 350;

export class MockNewsService implements NewsService {
  async getNews(query: NewsQuery): Promise<NewsPage> {
    await new Promise((r) => setTimeout(r, LATENCY_MS));
    const q = query.q?.trim().toLowerCase();
    const filtered = q
      ? ALL.filter((a) => (a.title + ' ' + a.description).toLowerCase().includes(q))
      : ALL;
    const start = (query.page - 1) * query.pageSize;
    const articles = filtered.slice(start, start + query.pageSize);
    return { articles, totalArticles: filtered.length, page: query.page };
  }
}
