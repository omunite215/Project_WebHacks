import { useEffect, useRef } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Button } from '@heroui/react';
import { useDebounce } from '@/hooks/useDebounce';
import { NewsCardSkeleton } from '@/components/ui/Skeleton';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';
import { useNews, flattenArticles } from '../hooks/useNews';
import { NEWS_CATEGORIES, type NewsCategory } from '../types';
import { NewsCard } from './NewsCard';
import { NewsSearch } from './NewsSearch';
import { CategoryTabs } from './CategoryTabs';

function isCategory(v: unknown): v is NewsCategory {
  return typeof v === 'string' && (NEWS_CATEGORIES as readonly string[]).includes(v);
}

export function NewsFeed() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { q?: string; category?: string };
  const q = search.q ?? '';
  const category: NewsCategory = isCategory(search.category) ? search.category : 'general';
  const debouncedQ = useDebounce(q, 400);

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useNews({ q: debouncedQ || undefined, category });
  const articles = flattenArticles(data);

  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const setQ = (v: string) =>
    navigate({ to: '/', search: (prev) => ({ ...prev, q: v || undefined }) });
  const setCategory = (c: NewsCategory) => navigate({ to: '/', search: { category: c } });

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <NewsSearch value={q} onChange={setQ} />
        {!q && <CategoryTabs value={category} onChange={setCategory} />}
      </div>

      {isError && <ErrorState message={(error as Error).message} onRetry={() => refetch()} />}

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      ) : articles.length === 0 && !isError ? (
        <EmptyState title="No articles found" description="Try a different search or category." />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      )}

      <div ref={sentinel} className="h-10" />
      {isFetchingNextPage && <p className="text-center text-default-500">Loading more…</p>}
      {hasNextPage && !isFetchingNextPage && (
        <Button variant="flat" onPress={() => fetchNextPage()} className="mx-auto">
          Load more
        </Button>
      )}
    </section>
  );
}
