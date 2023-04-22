import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovie,
  getSelectedMovie,
  removeSelectedMovie,
} from "../../features/movies/movieSlice";
import { AiOutlineStar } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { MdOutlineMovieCreation } from "react-icons/md";
import { GiCalendarHalfYear } from "react-icons/gi";

const MovieDetails = () => {
  const { imdbID } = useParams();

  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovie(imdbID));
    // cleanup function
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className=" text-8xl text-white grid place-items-center min-h-screen">
          Loading...
        </div>
      ) : (
        <div className="text-white flex  mx-[10vw] flex-wrap py-16 gap-16">
          <div className=" w-1/3 flex justify-center">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className=" w-1/2 ">
            <div className=" font-bold text-2xl py-4">{data.Title}</div>
            <div className=" flex gap-4 flex-wrap text-blue-400">
              <div className="flex items-center gap-1 ">
                IMDB Rating:
                <AiOutlineStar /> {data.imdbRating}
              </div>
              <div className="flex justify-center items-center gap-1">
                IMDB Votes: <FiThumbsUp />
                {data.imdbVotes}
              </div>
              <div className="flex justify-center items-center gap-1">
                Runtime: <MdOutlineMovieCreation />
                {data.Runtime}
              </div>
              <div className="flex justify-center items-center gap-1">
                Year: <GiCalendarHalfYear />
                {data.Year}
              </div>
            </div>
            <div className=" my-4">{data.Plot}</div>
            <div className="grid gap-2">
              <div>
                Director:{" "}
                <span className=" text-blue-400">{data.Director}</span>
              </div>
              <div>
                Stars: <span className=" text-blue-400">{data.Actors}</span>
              </div>
              <div>
                Genres: <span className=" text-blue-400">{data.Genre}</span>
              </div>
              <div>
                Languages:{" "}
                <span className=" text-blue-400">{data.Language}</span>
              </div>
              <div>
                Awards: <span className=" text-blue-400">{data.Awards}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
