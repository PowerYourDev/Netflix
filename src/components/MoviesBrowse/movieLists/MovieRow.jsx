import React from "react";

import { POSTER_CDN } from "../../../constant";
const MovieRow = ({ title, data }) => {
  return (
    <div className="ml-[4%]">
      <h1 className="text-white mb-[0.5%]  text-[1.4vw]">{title}</h1>
      <div className="flex gap-x-4 overflow-auto no-scrollbar">
        {data.map((movie) => {
          return (
          
             <img
              className="h-[250px] rounded-[0.2vw] cursor-pointer "
              src={POSTER_CDN + movie?.poster_path}
              alt=""
            />
          
          );
        })}
      </div>
    </div>
  );
};

export default MovieRow;
