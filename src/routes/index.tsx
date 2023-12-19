import { LoadingScreen } from "components/LoadingScreen";
import { MainLayout } from "layout";
import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/movies" replace />, index: true },
        { path: "movies", element: <Movies /> },
        { path: "movies/:id", element: <MovieDetails /> },
      ],
    },
    {
      path: "*",
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// import Movies Page
const Movies = Loadable(lazy(() => import("../pages/Movies")));

// import MovieDetail Page
const MovieDetails = Loadable(lazy(() => import("../pages/MovieDetails")));

// import Not Found Page
const NotFound = Loadable(lazy(() => import("../pages/notFound")));
