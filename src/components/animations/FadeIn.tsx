import { useRef, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  useGSAP(
    () => {
      if (reduce) return;
      const tw = gsap.from(ref.current, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        delay,
        ease: 'power2.out',
      });
      const settle = window.setTimeout(() => tw.progress(1), 1500);
      return () => window.clearTimeout(settle);
    },
    { scope: ref, dependencies: [reduce] },
  );
  return <div ref={ref}>{children}</div>;
}
