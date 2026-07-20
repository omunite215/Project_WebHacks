import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useMediaQuery } from './useMediaQuery';

beforeEach(() => {
  vi.stubGlobal('matchMedia', (q: string) => ({
    matches: q.includes('dark'),
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
    onchange: null,
  }));
});

describe('useMediaQuery', () => {
  it('returns current match state', () => {
    const { result } = renderHook(() => useMediaQuery('(prefers-color-scheme: dark)'));
    expect(result.current).toBe(true);
  });
});
