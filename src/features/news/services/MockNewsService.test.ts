import { describe, it, expect } from 'vitest';
import { MockNewsService } from './MockNewsService';

describe('MockNewsService', () => {
  const svc = new MockNewsService();

  it('returns a page of articles', async () => {
    const page = await svc.getNews({ page: 1, pageSize: 5 });
    expect(page.articles.length).toBeLessThanOrEqual(5);
    expect(page.totalArticles).toBeGreaterThan(0);
    expect(page.page).toBe(1);
  });

  it('paginates', async () => {
    const p1 = await svc.getNews({ page: 1, pageSize: 3 });
    const p2 = await svc.getNews({ page: 2, pageSize: 3 });
    expect(p1.articles[0]?.id).not.toBe(p2.articles[0]?.id);
  });

  it('filters by query text', async () => {
    const page = await svc.getNews({ page: 1, pageSize: 20, q: 'Volvo' });
    expect(page.articles.length).toBeGreaterThan(0);
    expect(page.articles.every((a) => /volvo/i.test(a.title + a.description))).toBe(true);
  });
});
