import { LoadingScreen } from "components/LoadingScreen";
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
      children: [
        { element: <Navigate to="/movies" replace />, index: true },
        { path: "movies", element: <Movies /> },
        { path: "movies/:id", element: <MovieDetails /> },
      ],
    },
  ]);
}

// import Movies Page
const Movies = Loadable(lazy(() => import("../pages/Movies")));

// import MovieDetail Page
const MovieDetails = Loadable(lazy(() => import("../pages/MovieDetails")));
