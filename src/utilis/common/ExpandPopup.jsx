import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { POSTER_CDN } from "../../constant";
import playIcon from "../../Assets/svg/playIcon.svg";
import plusIcon from "../../Assets/svg/plusIcon.svg";
import crossIcon from "../../Assets/svg/crossIcon.svg";
import { convertMinutesToHoursAndMinutes } from "../common/index";
import useFetchSimilarMovies from "../../customHooks/useFetchSimilarMovies";
import SimilarMoviesPopUp from "./SimilarMoviesPopUp";
import { extractYear } from "../common/index";

const ExpandPopup = ({
  hoverMovie,
  popUpLogo,
  movieDetails,
  item,
  CloseExpandPopUp,
  handleRemoveListItem,
  handleSetListItem,
}) => {
  const navigate = useNavigate();

  const MylistMovies = useSelector((state) => state?.MyList?.myListData);

  const videoPlayHandler = (id) => {
    navigate("/movie-playing/" + id);
  };

  useFetchSimilarMovies(item.id);

  return (
    <div className="w-3/5 h-screen bg-black fixed top-[35px] left-0 right-0  mx-auto z-30 rounded-2xl  overflow-y-scroll no-scrollbar ">
      <div className="relative">
        {hoverMovie?.key ? (
          <div className="w-full h-full bg-gradient-to-t from-[#181818] to-transparent bg-opacity-100">
            <iframe
              onClick={() => videoPlayHandler(item?.id)}
              className="w-full h-full aspect-video "
              src={`https://www.youtube.com/embed/${hoverMovie?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        ) : (
          <img
            src={POSTER_CDN + item.poster_path}
            className="w-full h-full aspect-video"
            alt="posterPopup"
          />
        )}
        <div
          className="absolute top-[8%] right-[4%] bg-[#181818] p-[8px] inline-block rounded-full  mx-[0.25em] cursor-pointer"
          onClick={() => CloseExpandPopUp()}
        >
          <img src={crossIcon} alt="crossIcon" />
        </div>

        <div className="absolute left-[5%] bottom-[25%]">
          <img
            src={POSTER_CDN + popUpLogo}
            alt=""
            className="w-[35%] h-[25%] "
          />

          <div className="flex justify-between pr-[10%] mt-[1.8em]">
            <div className="flex items-center gap-x-1">
              <div
                className="flex gap-[0.5rem] bg-[#fff] text-black pl-[2rem] pr-[2.5rem] rounded py-[0.5rem] cursor-pointer"
                onClick={() => videoPlayHandler(item?.id)}
              >
                <img src={playIcon} />
                <button className="text-[1.4rem] font-semibold leading-[2.4rem]">
                  {" "}
                  Play
                </button>
              </div>

              {MylistMovies?.some((list) => list?.id === item.id) ? (
                <div
                  className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full  mx-[0.25em] cursor-pointer"
                  onClick={() => {
                    handleRemoveListItem(item);
                  }}
                >
                  <img src={crossIcon} alt="crossIcon" />
                </div>
              ) : (
                <div
                  className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer"
                  onClick={() => {
                    handleSetListItem(item);
                  }}
                >
                  <img src={plusIcon} alt="plusIcon" />
                </div>
              )}
            </div>

            <div>
              <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full  mx-[0.25em] cursor-pointer">
                <img src={crossIcon} alt="crossIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-[3em] px-[3em]">
        <div className="col-span-8">
          <div className="my-[0.5em]">
            <div className="flex gap-x-3 items-center mb-2">
              <h3 className="text-green-500 font-medium text-[13px]">
                {movieDetails?.vote_average?.toFixed(2)}% Rating
              </h3>

              <h3 className="text-white">
                {extractYear(movieDetails?.release_date)}
              </h3>

              <h3 className="text-[13px] font-medium text-white">
                {convertMinutesToHoursAndMinutes(movieDetails?.runtime)}
              </h3>

              <h6 className="text-[hsla(0, 0%, 100%, .9)] border-solid border-[hsla(0, 0%, 100%, .4)] border-[0.5px] px-[0.4em] text-[13px] text-white">
                HD
              </h6>
            </div>
            <div className="flex gap-x-3 ">
              <h5 className="border-solid border-[hsla(0, 0%, 100%, .4)] border-[0.5px] text-[13px] font-medium px-[0.4em] text-white">
                {movieDetails?.adult ? "A" : "U/A 16+"}
              </h5>

              <div className="flex text-white items-center">
                {movieDetails?.genres?.map((genre, index) => {
                  return (
                    <>
                      <h4>{genre?.name}</h4>
                      {index < movieDetails?.genres.length - 1 && (
                        <h4 className="text-white self-center mr-1">,</h4>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-[1em] mb-[0.5em]">
            <p className="text-[#fff] text-[1.2vw] font-normal mt-[0.3vw] drop-shadow-[2px_2px_4px_rgba(0,0,0,.45)]">
              {movieDetails?.overview}
            </p>
          </div>
        </div>
        <div className="col-span-4">
          <div className="text-white my-[0.5em]">
            <div className="flex flex-wrap">
              <span className="text-[#777]">Cast: </span>
              {movieDetails?.genres?.map((genre, index) => {
                return (
                  <h3 className=" ml-1">
                    {genre?.name}
                    {index < movieDetails?.genres.length - 1 && (
                      <span className="text-white">,</span>
                    )}
                  </h3>
                );
              })}
            </div>
          </div>

          <div className="text-white my-[0.5em]">
            <div className="flex flex-wrap">
              <span className="text-[#777]">Cast: </span>
              {movieDetails?.genres?.map((genre, index) => {
                return (
                  <h3 className=" ml-1">
                    {genre?.name}
                    {index < movieDetails?.genres.length - 1 && (
                      <span className="text-white">,</span>
                    )}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="px-[3em]">
        <SimilarMoviesPopUp
          handleRemoveListItem={handleRemoveListItem}
          handleSetListItem={handleSetListItem}
        />
      </div>
    </div>
  );
};

export default ExpandPopup;
