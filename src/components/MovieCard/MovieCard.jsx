import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="w-[290px] rounded-sm">
      <img
        className="h-[400px] w-full object-cover "
        src={data.Poster}
        alt={data.Title}
      />
      <div className=" bg-slate-800 w-full py-4 px-2 rounded-sm">
        <h4 className=" truncate ">{data.Title}</h4>
        <p>{data.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
