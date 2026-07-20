import { type ReactNode } from 'react';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { queryClient } from '@/lib/queryClient';
import { ThemeProvider } from '@/context/theme.context';
import { BookmarksProvider } from '@/features/bookmarks/bookmarks.context';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BookmarksProvider>
            <HeroUIProvider>
              <ToastProvider placement="top-right" />
              {children}
            </HeroUIProvider>
          </BookmarksProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
