import { useQueryClient, type InfiniteData } from '@tanstack/react-query';
import { useBookmarks } from '@/features/bookmarks/bookmarks.context';
import type { Article, NewsPage } from '../types';

export function useArticleByUrl(url: string): Article | undefined {
  const qc = useQueryClient();
  const { bookmarks } = useBookmarks();
  if (!url) return undefined;

  const saved = bookmarks.find((a) => a.id === url);
  if (saved) return saved;

  const queries = qc.getQueriesData<InfiniteData<NewsPage>>({ queryKey: ['news'] });
  for (const [, data] of queries) {
    const found = data?.pages.flatMap((p) => p.articles).find((a) => a.id === url);
    if (found) return found;
  }
  return undefined;
}
