import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="w-[290px] rounded-sm">
      <img
        className="h-[400px] w-full object-cover "
        src={data.Poster}
        alt={data.Title}
      />
      <div className=" bg-slate-800 w-full py-4 px-2 rounded-sm">
        <Link to={`/movie/${data.imdbID}`}>
          <h4 className=" truncate ">{data.Title}</h4>
          <p>{data.Year}</p>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
