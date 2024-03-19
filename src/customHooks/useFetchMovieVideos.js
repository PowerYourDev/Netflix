import {useCallback, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { API_OPTIONS } from "../constant";


const useFetchMovieVideos = (nowPlayingMovie, action) => {

  const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)
  // const {nowPlayingMovies}=useSelector((state)=>state?.moviesSlice)


 
  const dispatch = useDispatch();

  let  Api_URL;
  // if(activeItem==="/movies-browse" || activeItem==="/movies"){
  //   Api_URL=`https://api.themoviedb.org/3/movie/${nowPlayingMovie?.id}/videos`
  // }else if(activeItem==="/tv-shows" || nowPlayingMovie?.media_type==="tv"){
  //   Api_URL=`https://api.themoviedb.org/3/tv/${nowPlayingMovie?.id}/videos`
  // }else{
  //   Api_URL=`https://api.themoviedb.org/3/movie/${nowPlayingMovie?.id}/videos`
  // }

  if (nowPlayingMovie?.hasOwnProperty('first_air_date')) {
    Api_URL=`https://api.themoviedb.org/3/tv/${nowPlayingMovie?.id}/videos`
  } else {
    Api_URL=`https://api.themoviedb.org/3/movie/${nowPlayingMovie?.id}/videos`
 
  }
  const fetchMovieVideos = useCallback(async () => {
    try {
      const movieVideosJsonData = await fetch(
        Api_URL,
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

      
         dispatch(action(currentVideo))
       
    } catch (error) {
      console.log(error);
    }
  },[dispatch,action,Api_URL]);

  useEffect(() => {
    fetchMovieVideos();
  }, [fetchMovieVideos,activeItem,nowPlayingMovie]);
};

export default useFetchMovieVideos;
