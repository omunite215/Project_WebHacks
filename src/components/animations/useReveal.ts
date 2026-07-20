import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useReveal(scope: RefObject<HTMLElement | null>, selector = '[data-reveal]') {
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  useGSAP(
    () => {
      if (reduce) return;
      gsap.from(selector, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        immediateRender: false,
        scrollTrigger: { trigger: scope.current, start: 'top 85%' },
      });
    },
    { scope, dependencies: [reduce] },
  );
}
