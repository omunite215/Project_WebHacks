import { Suspense, useEffect, useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';
import { CommandPalette } from './CommandPalette';
import { RouteFallback } from './RouteFallback';

export function RootLayout() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <main className="mx-auto w-full max-w-screen-2xl flex-1 px-4 sm:px-6 lg:px-8 xl:px-12">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
