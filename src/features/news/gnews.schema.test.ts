import { describe, it, expect } from 'vitest';
import { gnewsResponseSchema, mapGNewsArticle } from './gnews.schema';

const raw = {
  totalArticles: 1,
  articles: [
    {
      title: 'T',
      description: 'D',
      content: 'C',
      url: 'https://x/y',
      image: 'https://img',
      publishedAt: '2026-01-01T00:00:00Z',
      source: { name: 'Src', url: 'https://src' },
    },
  ],
};

describe('gnews schema', () => {
  it('parses a valid response', () => {
    const parsed = gnewsResponseSchema.parse(raw);
    expect(parsed.totalArticles).toBe(1);
  });
  it('maps a raw article to internal Article with id = url', () => {
    const a = mapGNewsArticle(gnewsResponseSchema.parse(raw).articles[0]);
    expect(a.id).toBe('https://x/y');
    expect(a.image).toBe('https://img');
    expect(a.source.name).toBe('Src');
  });
  it('coerces missing image to null', () => {
    const a = mapGNewsArticle({ ...raw.articles[0], image: '' });
    expect(a.image).toBeNull();
  });
});
