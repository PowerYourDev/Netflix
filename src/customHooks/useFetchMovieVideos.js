import { React, useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../constant";
import {
  addNowPlayingBackGroundMovieVideo,
  addNowPlayingHoverMovieVideo,
} from "../redux/sliceReducers/movieSlice";

const useFetchMovieVideos = (nowPlayingMovieId, BackgroundVideo) => {
  console.log(nowPlayingMovieId);
  const dispatch = useDispatch();

  const fetchMovieVideos = async () => {
    try {
      const movieVideosJsonData = await fetch(
        `https://api.themoviedb.org/3/movie/${nowPlayingMovieId}/videos`,
        API_OPTIONS
      );
      const movieVideosData = await movieVideosJsonData.json();
      const CurrentVideoTrailers = movieVideosData?.results?.filter(
        (video) => video?.type === "Trailer"
      );

      const CurrentVideoTrailer = CurrentVideoTrailers[0];
      const currentVideo =
        CurrentVideoTrailers.length === 0
          ? movieVideosData?.results[0]
          : CurrentVideoTrailer;

      BackgroundVideo === "BackgroundVideo"
        ? dispatch(addNowPlayingBackGroundMovieVideo(currentVideo))
        : dispatch(addNowPlayingHoverMovieVideo(currentVideo));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieVideos();
  }, []);
};

export default useFetchMovieVideos;
