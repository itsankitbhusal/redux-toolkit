import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const dispatch = useDispatch();

  useEffect(() => {
    const movieText = "harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`)
        .catch((err) => console.log("error: ", err));

      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div className="text-white">
      <MovieListing />
    </div>
  );
};

export default Home;
