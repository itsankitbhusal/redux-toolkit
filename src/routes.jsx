import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:imdbID",
    element: <MovieDetails />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default routes;
