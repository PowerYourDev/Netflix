import React, { useEffect } from "react";

import Header from "./Header";
// import { API_OPTIONS } from "../constant";

const MoviesBrowse = () => {
  // const fetchNowPlayingMovies = async () => {
  //    try{
  //     const nowPlayingMoviesJson = await fetch(
  //       "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //       API_OPTIONS
  //     );
  //     console.log("nowPlayingMoviesJson", nowPlayingMoviesJson);
  //     const nowPlayingMovies = await nowPlayingMoviesJson.json();
  //     console.log("nowPlayingMovies", nowPlayingMovies);
  //    }
  //    catch(e){
  //     console.log(e)
  //    }
  // };
  // useEffect(() => {
  //   fetchNowPlayingMovies();
  // }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default MoviesBrowse;
