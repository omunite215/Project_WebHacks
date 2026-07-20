import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { BookmarksProvider, useBookmarks } from './bookmarks.context';
import type { Article } from '@/features/news/types';

const a: Article = {
  id: 'https://a',
  title: 't',
  description: 'd',
  content: 'c',
  url: 'https://a',
  image: null,
  publishedAt: '2026-01-01T00:00:00Z',
  source: { name: 's', url: 'https://s' },
};

beforeEach(() => localStorage.clear());

function Probe() {
  const { bookmarks, toggle, isBookmarked } = useBookmarks();
  return (
    <div>
      <span data-testid="count">{bookmarks.length}</span>
      <span data-testid="is">{String(isBookmarked('https://a'))}</span>
      <button onClick={() => toggle(a)}>toggle</button>
    </div>
  );
}

describe('BookmarksProvider', () => {
  it('toggles a bookmark on and off', () => {
    render(
      <BookmarksProvider>
        <Probe />
      </BookmarksProvider>,
    );
    expect(screen.getByTestId('count').textContent).toBe('0');
    act(() => screen.getByText('toggle').click());
    expect(screen.getByTestId('count').textContent).toBe('1');
    expect(screen.getByTestId('is').textContent).toBe('true');
    act(() => screen.getByText('toggle').click());
    expect(screen.getByTestId('count').textContent).toBe('0');
  });
});
