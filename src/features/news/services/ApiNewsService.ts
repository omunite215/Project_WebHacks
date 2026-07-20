import { getJson } from '@/lib/http';
import { gnewsResponseSchema, mapGNewsArticle } from '../gnews.schema';
import type { NewsPage, NewsQuery, NewsService } from '../types';

const BASE = 'https://gnews.io/api/v4';

export class ApiNewsService implements NewsService {
  constructor(
    private readonly apiKey: string,
    private readonly fetchImpl: typeof fetch = fetch,
  ) {}

  async getNews(query: NewsQuery): Promise<NewsPage> {
    const params = new URLSearchParams({
      lang: 'en',
      max: String(query.pageSize),
      page: String(query.page),
      apikey: this.apiKey,
    });
    let endpoint: string;
    if (query.q && query.q.trim()) {
      endpoint = '/search';
      params.set('q', query.q.trim());
    } else {
      endpoint = '/top-headlines';
      params.set('category', query.category ?? 'general');
    }
    const raw = await getJson(`${BASE}${endpoint}?${params.toString()}`, this.fetchImpl);
    const parsed = gnewsResponseSchema.parse(raw);
    return {
      articles: parsed.articles.map(mapGNewsArticle),
      totalArticles: parsed.totalArticles,
      page: query.page,
    };
  }
}
