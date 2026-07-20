import { useEffect, useRef } from 'react';

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 || 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div ref={barRef} className="h-full bg-primary transition-[width] duration-75" />
    </div>
  );
}
