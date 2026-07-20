import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button, Card, CardBody, Chip, Image, Skeleton, Link as HLink } from '@heroui/react';
import { Link } from '@tanstack/react-router';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useNews, flattenArticles } from '@/features/news/hooks/useNews';

const FALLBACK_IMG =
  'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';

function FeaturedCard() {
  const { data, isLoading } = useNews({ category: 'general' });
  const featured = flattenArticles(data)[0];

  if (isLoading || !featured) {
    return (
      <Card shadow="lg" className="w-full">
        <Skeleton className="h-56 w-full rounded-none" />
        <CardBody className="gap-3">
          <Skeleton className="h-4 w-24 rounded-lg" />
          <Skeleton className="h-6 w-4/5 rounded-lg" />
          <Skeleton className="h-4 w-full rounded-lg" />
        </CardBody>
      </Card>
    );
  }

  return (
    <Link to="/article" search={{ url: featured.url }} className="group block w-full">
      <Card shadow="lg" className="w-full transition-transform duration-300 group-hover:-translate-y-1">
        <Image
          removeWrapper
          alt={featured.title}
          src={featured.image ?? FALLBACK_IMG}
          fallbackSrc={FALLBACK_IMG}
          radius="none"
          className="h-56 w-full object-cover"
        />
        <CardBody className="gap-2">
          <div className="flex items-center gap-2">
            <Chip color="primary" variant="flat" size="sm">
              Featured
            </Chip>
            <span className="text-xs text-default-500">{featured.source.name}</span>
          </div>
          <h3 className="line-clamp-2 text-lg font-semibold">{featured.title}</h3>
          <p className="line-clamp-2 text-sm text-default-500">{featured.description}</p>
        </CardBody>
      </Card>
    </Link>
  );
}

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  useGSAP(
    () => {
      if (reduce) return;
      const tl = gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-eyebrow]', { opacity: 0, y: 16, duration: 0.5 })
        .from('[data-hero-title] > span', { opacity: 0, y: 40, duration: 0.8, stagger: 0.12 }, '-=0.2')
        .from('[data-hero-sub]', { opacity: 0, y: 20, duration: 0.6 }, '-=0.45')
        .from('[data-hero-cta]', { opacity: 0, y: 16, duration: 0.5 }, '-=0.35')
        .from('[data-hero-featured]', { opacity: 0, x: 40, duration: 0.8 }, '-=0.6');
      const settle = window.setTimeout(() => tl.progress(1), 2500);
      return () => window.clearTimeout(settle);
    },
    { scope, dependencies: [reduce] },
  );

  return (
    <section
      ref={scope}
      className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24"
    >
      <div>
        <p
          data-hero-eyebrow
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
        >
          Tech news &amp; developer tips
        </p>
        <h1
          data-hero-title
          className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
        >
          <span className="block">Stay ahead of</span>
          <span className="block text-primary">what ships next.</span>
        </h1>
        <p data-hero-sub className="mt-6 max-w-xl text-lg leading-relaxed text-default-600">
          The latest headlines and hands-on developer tips — searchable, bookmarkable, and
          beautifully fast. No noise, just what matters.
        </p>
        <div data-hero-cta className="mt-8 flex flex-wrap gap-3">
          <Button as={HLink} href="#news" color="primary" size="lg" className="font-semibold">
            Read the latest
          </Button>
          <Button as={Link} to="/tips" variant="bordered" size="lg" className="font-semibold">
            Browse tips
          </Button>
        </div>
      </div>

      <div data-hero-featured>
        <FeaturedCard />
      </div>
    </section>
  );
}
