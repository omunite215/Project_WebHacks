import { SEO } from '@/components/ui/SEO';
import { Hero } from '@/features/home/Hero';
import { Stats } from '@/features/home/Stats';
import { NewsFeed } from '@/features/news/components/NewsFeed';

export default function HomePage() {
  return (
    <>
      <SEO title="Home" description="Latest tech news and developer tips." />
      <Hero />
      <Stats />
      <section id="news" className="scroll-mt-24 py-16 lg:py-24">
        <header className="mb-8 flex flex-col gap-1">
          <h2 className="text-3xl font-bold tracking-tight">Top updates</h2>
          <p className="text-default-500">Fresh headlines across technology and business.</p>
        </header>
        <NewsFeed />
      </section>
    </>
  );
}
