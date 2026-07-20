import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '@/hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { label: 'News sources', value: 80, suffix: '+' },
  { label: 'Curated tips', value: 6, suffix: '' },
  { label: 'Categories', value: 9, suffix: '' },
];

export function Stats() {
  const scope = useRef<HTMLDivElement>(null);
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  useGSAP(
    () => {
      if (reduce) return;
      scope.current?.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        gsap.fromTo(
          el,
          { textContent: '0' },
          {
            textContent: String(end),
            duration: 1.4,
            ease: 'power2.out',
            snap: { textContent: 1 },
            immediateRender: false,
            scrollTrigger: { trigger: scope.current, start: 'top 90%' },
          },
        );
      });
    },
    { scope, dependencies: [reduce] },
  );

  return (
    <div
      ref={scope}
      className="flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-default-200 py-6"
    >
      {STATS.map((s) => (
        <div key={s.label} className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
            <span data-count={s.value}>{s.value}</span>
            {s.suffix}
          </span>
          <span className="text-sm text-default-500">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
