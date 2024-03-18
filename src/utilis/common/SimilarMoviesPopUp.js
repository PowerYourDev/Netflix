import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { POSTER_CDN } from "../../constant";
import plusIcon from "../../Assets/svg/plusIcon.svg";
import { truncateString } from "./index";
import { extractYear } from "./index";
import crossIcon from "../../Assets/svg/crossIcon.svg";
import { useTranslation } from "react-i18next";

const SimilarMoviesPopUp = ({handleRemoveListItem,handleSetListItem}) => {
  const {t}=useTranslation()
 const dispatch=useDispatch()

  const similarMovieData = useSelector(
    (state) =>
      state.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverSimilarMovies
  );

  const MylistMovies = useSelector((state) => state?.MyList?.myListData);

  const handleSimilarMovie=()=>{
    
  }

  return (
    <div className="text-white mt-[48px]">
      <h1 className="mb-[20px] font-medium text-[24px]">{t("More Like This")}</h1>
      <div className="grid grid-cols-3 gap-[1em] ">
        {similarMovieData?.map((movie) => {
          return (
            <div key={movie.id} className="flex flex-col" 
            // onClick={handleSimilarMovie}
            >
           
               <div className="w-full h-[170px] ">
               <img
                  src={POSTER_CDN + movie?.poster_path}
                  alt={movie?.original_name || movie?.original_title }
                  srcset=""
                  className="object-cover h-full w-full"
                />
               </div>
                   <div className="p-[1.2em] bg-[#2f2f2f]  text-[#bcbcbc] flex-grow">
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

                  {MylistMovies?.some((list) => list?.id === movie.id) ? (
                  <div
                    className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full  mx-[0.25em] cursor-pointer"
                    onClick={() => {
                      handleRemoveListItem(movie);
                    }}
                  >
                    <img src={crossIcon} alt="crossIcon" />
                  </div>
                ) : (
                  <div
                    className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer"
                    onClick={() => {
                      handleSetListItem(movie);
                    }}
                  >
                    <img src={plusIcon} alt="plusIcon" />
                  </div>
                )}
                </div>
                <h3 className="my-3  text-[14px] leading-[20px]">{truncateString(movie?.overview, 150)}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-[10%] text-white">
        dlddiso
        kdikdi
      </div>
    </div>
  );
};

export default SimilarMoviesPopUp;
