import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/test/router-utils';
import { NewsCard } from './NewsCard';
import type { Article } from '../types';

const a: Article = {
  id: 'https://a',
  title: 'Hello World',
  description: 'desc',
  content: 'c',
  url: 'https://a',
  image: null,
  publishedAt: '2026-01-01T00:00:00Z',
  source: { name: 'Src', url: 'https://s' },
};

describe('NewsCard', () => {
  it('renders title, source and links to the in-app details page', async () => {
    renderWithRouter(<NewsCard article={a} />);
    expect(await screen.findByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Src')).toBeInTheDocument();
    const readMore = screen.getByRole('link', { name: /read more/i });
    expect(readMore.getAttribute('href')).toContain('/article');
    expect(readMore.getAttribute('href')).toContain('url=');
  });
});
