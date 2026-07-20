import { env as defaultEnv } from '@/lib/env';
import { ApiNewsService } from './ApiNewsService';
import { MockNewsService } from './MockNewsService';
import type { NewsPage, NewsQuery, NewsService } from '../types';

type EnvLike = { hasNewsKey: boolean; gnewsApiKey: string | undefined };

class FallbackNewsService implements NewsService {
  constructor(
    private readonly primary: NewsService,
    private readonly fallback: NewsService,
  ) {}
  async getNews(query: NewsQuery): Promise<NewsPage> {
    try {
      return await this.primary.getNews(query);
    } catch (err) {
      console.warn('[news] primary source failed, using mock data:', err);
      return this.fallback.getNews(query);
    }
  }
}

export function createNewsService(
  env: EnvLike = defaultEnv,
  makeApi: (key: string) => NewsService = (key) => new ApiNewsService(key),
  makeMock: () => NewsService = () => new MockNewsService(),
): NewsService {
  const mock = makeMock();
  if (env.hasNewsKey && env.gnewsApiKey) {
    return new FallbackNewsService(makeApi(env.gnewsApiKey), mock);
  }
  return mock;
}

export const newsService = createNewsService();
