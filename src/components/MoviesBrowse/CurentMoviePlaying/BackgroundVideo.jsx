import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";


import { POSTER_CDN } from "../../../constant";
// import useFetchMovieVideos from "../../../customHooks/useFetchMovieVideos";
// import { addNowPlayingBackGroundMovieVideo } from "../../../redux/sliceReducers/movieSlice";
// import { addNowPlayingTvShowsVideo } from "../../../redux/sliceReducers/movieSlice";


const BackgroundVideo = (nowPlayingMovie) => {
  const MovieVideo= useSelector((state)=>state.moviesSlice?.nowPlayingBackGroundMovieVideo?.playingBackGroundMovieVideo)

  const tvShowsVideo=useSelector((state)=>state?.moviesSlice?.nowPlayingBackGroundTvShowsVideo?.playingBackGroundTvShowsVideo)
  const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)
  


  const video = activeItem==="/movies-browse" || activeItem === "/movies"?MovieVideo:tvShowsVideo

  
  // const NowPlayingMovieVideoAction = activeItem==="/movies-browse" || activeItem === "/movies" ?addNowPlayingBackGroundMovieVideo:addNowPlayingTvShowsVideo
 
  console.log(nowPlayingMovie,"nowplayinng,ovie")

  // useFetchMovieVideos(nowPlayingMovie,NowPlayingMovieVideoAction)
  // if (!video) return null;

  return (
    <>
      {video ? (
        <div className="w-full h-full -mt-[7%]">
          <iframe
            className="w-full h-full aspect-video "
            src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : (
        <img className="w-full" src={POSTER_CDN + nowPlayingMovie?.posterPath} alt="" />
      )}
    </>
  );
};

export default BackgroundVideo;
