import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Lazy pages
const HomePage = lazy(() => import("./pages/Home"));
const DestinationsPage = lazy(() => import("./pages/Destinations"));
const DestinationDetailPage = lazy(() => import("./pages/DestinationDetail"));
const LoginPage = lazy(() => import("./pages/Login"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const NewTripPage = lazy(() => import("./pages/NewTrip"));
const TripDetailPage = lazy(() => import("./pages/TripDetail"));

const PageLoader = () => (
  <div className="pt-16 min-h-screen bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-6">
      <Skeleton className="h-12 w-64" />
      <Skeleton className="h-4 w-full max-w-lg" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64 rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

// Root route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const destinationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/destinations",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DestinationsPage />
    </Suspense>
  ),
});

const destinationDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/destinations/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DestinationDetailPage />
    </Suspense>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LoginPage />
    </Suspense>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <ProtectedRoute>
      <Suspense fallback={<PageLoader />}>
        <DashboardPage />
      </Suspense>
    </ProtectedRoute>
  ),
});

const newTripRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trips/new",
  component: () => (
    <ProtectedRoute>
      <Suspense fallback={<PageLoader />}>
        <NewTripPage />
      </Suspense>
    </ProtectedRoute>
  ),
});

const tripDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trips/$id",
  component: () => (
    <ProtectedRoute>
      <Suspense fallback={<PageLoader />}>
        <TripDetailPage />
      </Suspense>
    </ProtectedRoute>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  destinationsRoute,
  destinationDetailRoute,
  loginRoute,
  dashboardRoute,
  newTripRoute,
  tripDetailRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
