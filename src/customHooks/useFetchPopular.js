import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";

import { API_OPTIONS } from "../constant";
import {addPopularMovies} from "../redux/sliceReducers/movieSlice"


const useFetchPopular = () => {

    const dispatch = useDispatch()
    const activeItem = useSelector((state)=>state?.userTab?.currentUserTab) 

    let  Api_URL;
  if(activeItem==="/movies-browse" || activeItem==="/movies"){
    Api_URL="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  }else if(activeItem==="/tv-shows"){
    Api_URL="https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
  }



    const fetchPopularMovies = async () => {
        try {
          const nowPlayingMoviesJson = await fetch(
            Api_URL,
            API_OPTIONS
          );
    
          const nowPlayingMovies = await nowPlayingMoviesJson.json();
       
          dispatch(addPopularMovies(nowPlayingMovies?.results));
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        fetchPopularMovies();
      }, [activeItem]); 
}

export default useFetchPopular