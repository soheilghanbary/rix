import { routeTree } from '@/types/routeTree.gen';
import { RouterProvider, createRouter } from '@tanstack/react-router';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const RouteProvider = () => <RouterProvider router={router} />;
