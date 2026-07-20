import { lazy } from 'react';
import {
  createRootRoute,
  createRoute,
  createRouter,
  type RouterHistory,
} from '@tanstack/react-router';
import { RootLayout } from '@/components/layout/RootLayout';
import { ErrorPage } from '@/pages/ErrorPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { NEWS_CATEGORIES, type NewsCategory } from '@/features/news/types';

const HomePage = lazy(() => import('@/pages/HomePage'));
const TipsPage = lazy(() => import('@/pages/TipsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const SavedPage = lazy(() => import('@/pages/SavedPage'));
const ArticlePage = lazy(() => import('@/pages/ArticlePage'));

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
  validateSearch: (search: Record<string, unknown>): { q?: string; category?: NewsCategory } => {
    const cat = search.category;
    const category =
      typeof cat === 'string' && (NEWS_CATEGORIES as readonly string[]).includes(cat)
        ? (cat as NewsCategory)
        : undefined;
    const q = typeof search.q === 'string' && search.q.trim() ? search.q : undefined;
    return { q, category };
  },
});

const tipsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/tips', component: TipsPage });
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});
const savedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/saved',
  component: SavedPage,
});
const articleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/article',
  component: ArticlePage,
  validateSearch: (search: Record<string, unknown>): { url: string } => ({
    url: typeof search.url === 'string' ? search.url : '',
  }),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  tipsRoute,
  aboutRoute,
  contactRoute,
  savedRoute,
  articleRoute,
]);

export function createAppRouter(history?: RouterHistory) {
  return createRouter({
    routeTree,
    history,
    defaultPreload: 'intent',
    defaultNotFoundComponent: NotFoundPage,
    defaultErrorComponent: ErrorPage,
    scrollRestoration: true,
  });
}

export const router = createAppRouter();

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
