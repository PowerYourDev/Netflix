import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import expandIcon from "../../Assets/svg/expandIcon.svg";
import crossIcon from "../../Assets/svg/crossIcon.svg";
import playIcon from "../../Assets/svg/playIcon.svg";
import moreInfoIcon from "../../Assets/svg/moreInfoIcon.svg";
import plusIcon from "../../Assets/svg/plusIcon.svg";

import {  POSTER_CDN } from "../../constant";
import useFetchMovieVideos from "../../customHooks/useFetchMovieVideos";
import useFetchLogo from "../../customHooks/useFetchLogo";

const CardPopup = ({ active, item }) => {
  const navigate = useNavigate();
  const hoverMovie = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieVideo
  );

  const popUpLogo = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieLogo
  );

  useFetchMovieVideos(item?.id, "hoverVideo");
  useFetchLogo(item?.id, "popUpLogo");

  const videoPlayHandler = (id) => {
    navigate("/movie-playing/" + id);
  };
  return (
    <div
      className="bg-transparent fixed top-0 left-0  right-0 bottom-0 m-auto  w-1/5  h-1/5 z-20 "
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
          <div className="w-full h-full -mt-[7%] ">
            <iframe
              onClick={() => videoPlayHandler(item?.id)}
              className="w-full h-full aspect-video "
              src={`https://www.youtube.com/embed/${hoverMovie?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        ) : (
          <img src={POSTER_CDN + item.poster_path} className="w-full h-full" alt="posterPopup" />
        )}
        <img
          src={POSTER_CDN + popUpLogo}
          alt=""
          className="w-[35%] h-[25%] absolute left-4 bottom-3"
        />
      </div>
      <div className="p-4 bg-[#181818]">
        <div className="flex justify-between ">
          <div>
            <div
              className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] bg-white bg-opacity-70 cursor-pointer"
              onClick={() => videoPlayHandler(item.id)}
            >
              <img src={playIcon} alt="playIcon"/>
            </div>

            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer">
              <img src={plusIcon} alt="plusIcon" />
            </div>
            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full  mx-[0.25em] cursor-pointer">
              <img src={crossIcon} alt="crossIcon"/>
            </div>
            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer">
              <img src={expandIcon} alt="expandIcon"/>
            </div>
          </div>
          <div>
            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer">
              <img src={expandIcon} alt="expandIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;
