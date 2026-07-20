import { describe, it, expect, vi } from 'vitest';
import { ApiNewsService } from './ApiNewsService';

const payload = {
  totalArticles: 2,
  articles: [
    {
      title: 'A',
      description: 'da',
      content: 'ca',
      url: 'https://a',
      image: 'https://ia',
      publishedAt: '2026-01-01T00:00:00Z',
      source: { name: 'S', url: 'https://s' },
    },
  ],
};

function fakeFetch(ok = true) {
  return vi.fn(
    async (_input: RequestInfo | URL, _init?: RequestInit) =>
      ({ ok, status: ok ? 200 : 500, json: async () => payload }) as unknown as Response,
  );
}

describe('ApiNewsService', () => {
  it('calls the search endpoint when q is present and maps results', async () => {
    const f = fakeFetch();
    const svc = new ApiNewsService('KEY', f);
    const page = await svc.getNews({ page: 1, pageSize: 10, q: 'react' });
    expect(f).toHaveBeenCalledOnce();
    const calledUrl = f.mock.calls[0][0] as string;
    expect(calledUrl).toContain('/search');
    expect(calledUrl).toContain('q=react');
    expect(calledUrl).toContain('apikey=KEY');
    expect(page.articles[0].id).toBe('https://a');
  });

  it('calls top-headlines with category when no q', async () => {
    const f = fakeFetch();
    const svc = new ApiNewsService('KEY', f);
    await svc.getNews({ page: 1, pageSize: 10, category: 'technology' });
    const calledUrl = f.mock.calls[0][0] as string;
    expect(calledUrl).toContain('/top-headlines');
    expect(calledUrl).toContain('category=technology');
  });

  it('throws on non-ok responses', async () => {
    const svc = new ApiNewsService('KEY', fakeFetch(false));
    await expect(svc.getNews({ page: 1, pageSize: 10 })).rejects.toThrow();
  });
});
