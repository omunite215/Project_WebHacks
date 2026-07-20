import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from './theme.context';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  vi.stubGlobal('matchMedia', (q: string) => ({
    matches: false,
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
    onchange: null,
  }));
});

function Probe() {
  const { mode, resolvedTheme, setMode } = useTheme();
  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
      <button onClick={() => setMode('dark')}>dark</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('defaults to system and applies dark class when set to dark', () => {
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('mode').textContent).toBe('system');
    act(() => screen.getByText('dark').click());
    expect(screen.getByTestId('resolved').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
