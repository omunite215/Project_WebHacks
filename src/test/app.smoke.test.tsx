import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router';
import { AppProviders } from '@/app/providers';
import { createAppRouter } from '@/app/router';

beforeEach(() => {
  localStorage.clear();
});

function renderAt(path: string) {
  const router = createAppRouter(createMemoryHistory({ initialEntries: [path] }));
  return render(
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>,
  );
}

describe('app integration smoke', () => {
  it('boots the full provider + router stack and renders the navbar brand', async () => {
    renderAt('/');
    expect(await screen.findAllByText(/Web-Hacks/i)).not.toHaveLength(0);
  });

  it('renders the hero on the home page', async () => {
    renderAt('/');
    expect(await screen.findByText(/Stay ahead of/i)).toBeInTheDocument();
  });

  it('renders the 404 page for unknown routes', async () => {
    renderAt('/does-not-exist');
    expect(await screen.findByText('404')).toBeInTheDocument();
  });

  it('renders the article details route (cold fallback) with the original link', async () => {
    renderAt('/article?url=https%3A%2F%2Fexample.com%2Fstory');
    expect(await screen.findByText(/aren't available/i)).toBeInTheDocument();
    const link = screen.getByRole('button', { name: /read full article/i });
    expect(link).toHaveAttribute('href', 'https://example.com/story');
  });
});
