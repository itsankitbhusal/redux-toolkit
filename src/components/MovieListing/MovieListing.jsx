import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  return (
    <div className=" mx-[10vw] py-16">
      <h2 className="grid place-items-center text-4xl font-bold pb-10">
        Movies
      </h2>
      <div className="grid place-items-center grid-cols-flow-minmax gap-8">
        {movies.Search ? (
          movies.Search.map((movie) => {
            return <MovieCard key={movie.imdbID} data={movie} />;
          })
        ) : (
          <div className=" text-red-500">Error : {movies.Error}</div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
