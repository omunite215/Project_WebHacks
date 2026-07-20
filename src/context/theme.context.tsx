import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export type ThemeMode = 'light' | 'dark' | 'system';
export interface ThemeContextValue {
  mode: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setMode(m: ThemeMode): void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useLocalStorage<ThemeMode>('theme', 'system');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const resolvedTheme = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, resolvedTheme, setMode }),
    [mode, resolvedTheme, setMode],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
