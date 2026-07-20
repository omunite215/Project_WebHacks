import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query';
import { newsService } from '../services/newsServiceFactory';
import type { Article, NewsCategory, NewsPage } from '../types';

const PAGE_SIZE = 9;

export function useNews(params: { q?: string; category?: NewsCategory; pageSize?: number }) {
  const pageSize = params.pageSize ?? PAGE_SIZE;
  return useInfiniteQuery<NewsPage>({
    queryKey: ['news', params.q ?? '', params.category ?? 'general', pageSize],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      newsService.getNews({
        q: params.q,
        category: params.category,
        page: pageParam as number,
        pageSize,
      }),
    getNextPageParam: (last, all) => {
      const loaded = all.reduce((n, p) => n + p.articles.length, 0);
      return loaded < last.totalArticles ? last.page + 1 : undefined;
    },
  });
}

export function flattenArticles(data?: InfiniteData<NewsPage>): Article[] {
  return data?.pages.flatMap((p) => p.articles) ?? [];
}
