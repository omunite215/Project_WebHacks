import { Skeleton } from '@heroui/react';
import { NewsCardSkeleton } from '@/components/ui/Skeleton';

export function RouteFallback() {
  return (
    <div className="py-12" aria-busy="true" aria-label="Loading page">
      <Skeleton className="mb-4 h-10 w-64 rounded-lg" />
      <Skeleton className="mb-10 h-5 w-96 max-w-full rounded-lg" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
