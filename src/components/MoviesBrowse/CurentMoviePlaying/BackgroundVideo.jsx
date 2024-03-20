import React from "react";
import { useSelector } from "react-redux";

import { POSTER_CDN } from "../../../constant";
import { getActiveItems } from "../../../utilis/common";

const BackgroundVideo = (nowPlayingMovie) => {
  const MovieVideo = useSelector(
    (state) =>
      state.moviesSlice?.nowPlayingBackGroundMovieVideo
        ?.playingBackGroundMovieVideo
  );

  const tvShowsVideo = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingBackGroundTvShowsVideo
        ?.playingBackGroundTvShowsVideo
  );
  const activeItem = useSelector((state) => state?.userTab?.currentUserTab);

  const video = getActiveItems(activeItem, MovieVideo, tvShowsVideo);

  // const video = activeItem==="/movies-browse" || activeItem === "/movies"?MovieVideo:tvShowsVideo

  console.log(nowPlayingMovie, "nowplayinng,ovie");

  return (
    <>
      {video ? (
        <div className="w-full h-full   md:-mt-[7%]">
          <iframe
            className="w-full h-full aspect-video "
            src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : (
        <img
          className="w-full"
          src={POSTER_CDN + nowPlayingMovie?.posterPath}
          alt=""
        />
      )}
    </>
  );
};

export default BackgroundVideo;
