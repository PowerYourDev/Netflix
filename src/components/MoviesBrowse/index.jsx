import React,{useEffect} from "react";
import { UseDispatch, useDispatch } from "react-redux";

import Header from "../Header";
import { API_OPTIONS } from "../../constant";
import { addNowPlayingMovies } from "../../redux/sliceReducers/movieSlice";
import CurrentmoviePlaying from "./CurentMoviePlaying";
import MovieLists from "./movieLists"
const MoviesBrowse = () => {
  const dispatch =  useDispatch()
  const fetchNowPlayingMovies = async () => {
     try{
      const nowPlayingMoviesJson = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        API_OPTIONS
      );
      
      const nowPlayingMovies = await nowPlayingMoviesJson.json();
     
      dispatch(addNowPlayingMovies(nowPlayingMovies?.results))
     }
     catch(e){
      console.log(e)
     }
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      {/* video playing container */}
      <CurrentmoviePlaying/>

      {/* movieListOfDiffGeneres */}
     <MovieLists/>
      {/* <movieLIsts/> */}
    </div>
  );
};

export default MoviesBrowse;
