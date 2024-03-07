import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import expandIcon from "../../Assets/svg/expandIcon.svg";
import crossIcon from "../../Assets/svg/crossIcon.svg";
import playIcon from "../../Assets/svg/playIcon.svg";
import moreInfoIcon from "../../Assets/svg/moreInfoIcon.svg";
import plusIcon from "../../Assets/svg/plusIcon.svg";

import { POSTER_CDN } from "../../constant";
import useFetchMovieVideos from "../../customHooks/useFetchMovieVideos";
import useFetchLogo from "../../customHooks/useFetchLogo";
import useFetchMovieDetaills from "../../customHooks/useFetchMovieDetaills";
import { convertMinutesToHoursAndMinutes } from "../common/index";
import ExpandPopup from "./ExpandPopup";

const CardPopup = ({ active, item,setActive }) => {
  const navigate = useNavigate();
  const hoverMovie = useSelector(  (state) =>state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieVideo);

  const popUpLogo = useSelector( (state) =>  state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieLogo);

  const movieDetails = useSelector((state) =>state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieDetails);

const [expandPopUp,setExpandPopUp]=useState(false)

  useFetchMovieVideos(item?.id, "hoverVideo");
  useFetchLogo(item?.id, "popUpLogo");
  useFetchMovieDetaills(item?.id);

  const videoPlayHandler = (id) => {
    navigate("/movie-playing/" + id);
  };

  const expandPopUpHandler=()=>{
    setExpandPopUp(true)
}

 const CloseExpandPopUp=()=>{
  setExpandPopUp(false)
  setActive(false)
 }

  return (
  
  <div >
   {
    expandPopUp && <ExpandPopup hoverMovie={hoverMovie} popUpLogo={popUpLogo} movieDetails={movieDetails} item={item} CloseExpandPopUp={CloseExpandPopUp}/>
   }
   {/* bg-opacity-[0.7] */}
    <div className={expandPopUp&&"fixed top-0 left-0 w-full h-full bg-[#000] bg-opacity-[0.7] z-1"}>
    <div
      className="bg-black fixed top-0 left-0  right-0 bottom-0 m-auto  w-1/5  h-1/5 z-20"
      style={{
        animationName: active ? "card" : "card-exit",
        animationDuration: "0.6s",
        animationFillMode: "forwards",
        animationTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        zIndex: 20,

        // animationDelay: !active ? "0.1s" : "0s",
        // transform: "scale(1.5)",
      }}
    >
      <div className="relative">
        {hoverMovie ? (
          <div className="w-full h-full -mt-[7%] bg-black">
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
            className="w-full h-full"
            alt="posterPopup"
          />
        )}
        <img
          src={POSTER_CDN + popUpLogo}
          alt=""
          className="w-[35%] h-[25%] absolute left-4 bottom-3"
        />
      </div>
      <div className="p-4 bg-[#181818] ">
        <div className="flex justify-between ">
          <div>
            <div
              className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] bg-white bg-opacity-70 cursor-pointer"
              onClick={() => videoPlayHandler(item.id)}
            >
              <img src={playIcon} alt="playIcon" />
            </div>

            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer">
              <img src={plusIcon} alt="plusIcon" />
            </div>
            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full  mx-[0.25em] cursor-pointer">
              <img src={crossIcon} alt="crossIcon" />
            </div>
            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer">
              <img src={expandIcon} alt="expandIcon" />
            </div>
          </div>
          <div>
            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer" onClick={expandPopUpHandler}>
              <img src={expandIcon} alt="expandIcon" />
            </div>
          </div>
        </div>
        <div className="flex text-[#bcbcbc] gap-[0.5em] my-[0.8em]">
          <h3 className="text-green-500 font-medium text-[13px]">
            {(movieDetails?.vote_average)?.toFixed(2)}% Rating
          </h3>

          <h5 className="border-solid border-[hsla(0, 0%, 100%, .4)] border-[0.5px] text-[13px] font-medium px-[0.4em]">
            {movieDetails?.adult ? "A" : "U/A 16+"}
          </h5>

          <h3 className="text-[13px] font-medium ">
            {convertMinutesToHoursAndMinutes(movieDetails?.runtime)}
          </h3>
          <h6 className="text-[hsla(0, 0%, 100%, .9)] border-solid border-[hsla(0, 0%, 100%, .4)] border-[0.5px] px-[0.4em] text-[13px]">
            HD
          </h6>
        </div>

        <div className="flex text-white items-center">
          {movieDetails?.genres.map((genre, index) => {
            return (
              <>
                <h4>{genre.name}</h4>
                {index < movieDetails?.genres.length - 1 && (
                  <h4 className="text-gray-600 px-[7px] self-center">•</h4>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CardPopup;
