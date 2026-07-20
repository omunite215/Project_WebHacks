import { RouterProvider } from '@tanstack/react-router';
import { AppProviders } from '@/app/providers';
import { router } from '@/app/router';

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
