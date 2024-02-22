import React,{useEffect} from "react";
import { UseDispatch, useDispatch } from "react-redux";

import Header from "../Header";
import { API_OPTIONS } from "../../constant";
import { addNowPlayingMovies } from "../../redux/sliceReducers/movieSlice";

const MoviesBrowse = () => {
  const dispatch =  useDispatch()
  const fetchNowPlayingMovies = async () => {
     try{
      const nowPlayingMoviesJson = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
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
      <Header />
    </div>
  );
};

export default MoviesBrowse;
