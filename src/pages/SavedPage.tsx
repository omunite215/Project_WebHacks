import { Button } from '@heroui/react';
import { SEO } from '@/components/ui/SEO';
import { EmptyState } from '@/components/ui/EmptyState';
import { useBookmarks } from '@/features/bookmarks/bookmarks.context';
import { NewsCard } from '@/features/news/components/NewsCard';

export default function SavedPage() {
  const { bookmarks, clear } = useBookmarks();
  return (
    <div className="py-12">
      <SEO title="Saved" description="Your saved articles." />
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Saved Articles</h1>
        {bookmarks.length > 0 && (
          <Button variant="flat" onPress={clear}>
            Clear all
          </Button>
        )}
      </div>
      {bookmarks.length === 0 ? (
        <EmptyState
          title="No saved articles yet"
          description="Tap the heart on any article to save it."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookmarks.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
