import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import Header from "../Header";
import { API_OPTIONS } from "../../constant";
import { addNowPlayingMovies } from "../../redux/sliceReducers/movieSlice";
import CurrentmoviePlaying from "./CurentMoviePlaying";
import MovieLists from "./movieLists";

const MoviesBrowse = () => {
  
  const dispatch = useDispatch();
  const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)


  console.log(activeItem,"activeItem")
  let  Api_URL;
  if(activeItem==="/movies-browse"){
    Api_URL="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  }else if(activeItem==="/tv-shows"){
    Api_URL="https://api.themoviedb.org/3/trending/tv/day?language=en-US"
  }else if (activeItem==="/movies"){
    Api_URL="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  }

  const fetchNowPlayingMovies = async () => {
    try {
      const nowPlayingMoviesJson = await fetch(
        Api_URL,
        API_OPTIONS
      );

      const nowPlayingMovies = await nowPlayingMoviesJson.json();
   
      dispatch(addNowPlayingMovies(nowPlayingMovies?.results));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, [activeItem]); 

  


  return (
    <div>
      <Header />
      {/* video playing container */}

      <CurrentmoviePlaying />

      {/* movieListOfDiffGeneres */}

      <MovieLists />

      {/* <movieLIsts/> */}
    </div>
  );
};

export default MoviesBrowse;
