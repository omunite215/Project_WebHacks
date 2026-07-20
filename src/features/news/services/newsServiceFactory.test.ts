import { describe, it, expect, vi } from 'vitest';
import { createNewsService } from './newsServiceFactory';
import type { NewsService } from '../types';

const mockPage = { articles: [], totalArticles: 0, page: 1 };

describe('createNewsService', () => {
  it('returns mock service when no key', async () => {
    const svc = createNewsService({ hasNewsKey: false, gnewsApiKey: undefined });
    const page = await svc.getNews({ page: 1, pageSize: 5 });
    expect(page.totalArticles).toBeGreaterThan(0);
  });

  it('falls back to mock when the api service throws', async () => {
    const failing: NewsService = { getNews: vi.fn().mockRejectedValue(new Error('boom')) };
    const fallbackMock: NewsService = { getNews: vi.fn().mockResolvedValue(mockPage) };
    const svc = createNewsService(
      { hasNewsKey: true, gnewsApiKey: 'K' },
      () => failing,
      () => fallbackMock,
    );
    const page = await svc.getNews({ page: 1, pageSize: 5 });
    expect(fallbackMock.getNews).toHaveBeenCalled();
    expect(page).toEqual(mockPage);
  });
});
