import React from "react";
import { useSelector } from "react-redux";

import { POSTER_CDN } from "../../constant";
import plusIcon from "../../Assets/svg/plusIcon.svg";
import { truncateString } from "./index";
import { extractYear } from "./index";

const SimilarMoviesPopUp = () => {
  const similarMovieData = useSelector(
    (state) =>
      state.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverSimilarMovies
  );
  console.log(similarMovieData);
  return (
    <div className="text-white mt-[48px]">
      <h1 className="mb-[20px] font-medium text-[24px]">More Like This</h1>
      <div className="grid grid-cols-3 gap-[1em]">
        {similarMovieData?.map((movie) => {
          return (
            <div key={movie.id} className="flex flex-col">
           
               <div className="h-1/4">
               <img
                  src={POSTER_CDN + movie?.poster_path}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover"
                />
               </div>
                   <div className="p-[1.2em] bg-[#2f2f2f] h-1/3 text-[#bcbcbc]">
                <div className="flex justify-between items-center ">
                  <div className="flex w-1/2 flex-wrap text-[16px] items-center gap-x-2 ">
                    <h5 className="border border-solid border-white border-opacity-40  font-medium px-[0.4em]   uppercase">
                      {movie?.adult ? "A" : "U/A 16+"}
                    </h5>
                    <h6 className=" border border-solid border-white border-opacity-40 text-[0.7em] font-medium px-[0.5em] ">
                      HD
                    </h6>
                    <h3>{extractYear(movie?.release_date)}</h3>
                  </div>

                  <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer">
                    <img src={plusIcon} alt="plusIcon" />
                  </div>
                </div>
                <h3 className="mt-[5px]">{truncateString(movie?.overview, 150)}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarMoviesPopUp;
