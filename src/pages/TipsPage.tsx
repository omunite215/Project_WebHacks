import { SEO } from '@/components/ui/SEO';
import { TipsCarousel } from '@/features/tips/components/TipsCarousel';
import { TipGrid } from '@/features/tips/components/TipGrid';

export default function TipsPage() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <SEO title="Tips" description="Curated developer and productivity tips." />
      <h1 className="text-center text-3xl font-bold">Welcome to Tips</h1>
      <TipsCarousel />
      <TipGrid />
    </div>
  );
}
