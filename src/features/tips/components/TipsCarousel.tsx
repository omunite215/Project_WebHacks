import { useEffect, useState } from 'react';
import { Image } from '@heroui/react';
import { TIPS } from '../data/tips';

export function TipsCarousel() {
  const slides = TIPS.slice(0, 3);
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-md">
      <Image
        removeWrapper
        alt={slides[i].title}
        src={slides[i].image}
        className="h-64 w-full object-cover"
        radius="none"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 bg-black/50 p-4 text-white">
        <h3 className="text-lg font-semibold">{slides[i].title}</h3>
        <p className="text-sm">{slides[i].description}</p>
      </div>
      <div className="absolute bottom-2 right-3 z-10 flex gap-1">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 w-2 rounded-full ${idx === i ? 'bg-white' : 'bg-white/40'}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
}
