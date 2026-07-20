import { useRef } from 'react';
import { useReveal } from '@/components/animations/useReveal';
import { TIPS } from '../data/tips';
import { TipCard } from './TipCard';

export function TipGrid() {
  const scope = useRef<HTMLDivElement>(null);
  useReveal(scope);
  return (
    <div ref={scope} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TIPS.map((t) => (
        <TipCard key={t.id} tip={t} />
      ))}
    </div>
  );
}
