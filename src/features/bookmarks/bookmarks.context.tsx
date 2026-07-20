import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Article } from '@/features/news/types';

export interface BookmarksContextValue {
  bookmarks: Article[];
  isBookmarked(id: string): boolean;
  toggle(a: Article): void;
  clear(): void;
}

const BookmarksContext = createContext<BookmarksContextValue | null>(null);

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useLocalStorage<Article[]>('bookmarks', []);
  const value = useMemo<BookmarksContextValue>(
    () => ({
      bookmarks,
      isBookmarked: (id) => bookmarks.some((b) => b.id === id),
      toggle: (a) =>
        setBookmarks((prev) =>
          prev.some((b) => b.id === a.id) ? prev.filter((b) => b.id !== a.id) : [a, ...prev],
        ),
      clear: () => setBookmarks([]),
    }),
    [bookmarks, setBookmarks],
  );
  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
}

export function useBookmarks(): BookmarksContextValue {
  const ctx = useContext(BookmarksContext);
  if (!ctx) throw new Error('useBookmarks must be used within BookmarksProvider');
  return ctx;
}
