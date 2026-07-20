import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import {
  createRootRoute,
  createRoute,
  createRouter,
  createMemoryHistory,
  RouterProvider,
  Outlet,
} from '@tanstack/react-router';
import { AppProviders } from '@/app/providers';

export function renderWithRouter(ui: ReactNode, initialPath = '/') {
  const rootRoute = createRootRoute({ component: Outlet });
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <>{ui}</>,
  });
  const stub = (path: string) =>
    createRoute({ getParentRoute: () => rootRoute, path, component: () => <div /> });
  const articleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/article',
    component: () => <div />,
    validateSearch: (s: Record<string, unknown>) => ({
      url: typeof s.url === 'string' ? s.url : '',
    }),
  });
  const routeTree = rootRoute.addChildren([
    indexRoute,
    stub('/tips'),
    stub('/about'),
    stub('/contact'),
    stub('/saved'),
    articleRoute,
  ]);
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [initialPath] }),
  });

  return render(
    <AppProviders>
      <RouterProvider router={router as never} />
    </AppProviders>,
  );
}
