import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@app/pages/Home'));

export const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="border-primary h-32 w-32 animate-spin rounded-full border-b-2"></div>
  </div>
);

export const MainContent = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Home />
  </Suspense>
);
