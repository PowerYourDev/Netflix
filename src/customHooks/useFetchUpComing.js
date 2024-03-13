
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";


import { API_OPTIONS } from "../constant";
import { addUpComingMovies } from "../redux/sliceReducers/movieSlice";

const useFetchUpComing = () => {
    const dispatch = useDispatch();

    const activeItem = useSelector((state)=>state?.userTab?.currentUserTab) 

    let  Api_URL;
  if(activeItem==="/movies-browse" || activeItem==="/movies"){
    Api_URL="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  }else if(activeItem==="/tv-shows"){
    Api_URL="https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"
  }



    const fetchUpComingMovies = async () => {
        try {
          const nowPlayingMoviesJson = await fetch(
            Api_URL,
            API_OPTIONS
          );
    
          const nowPlayingMovies = await nowPlayingMoviesJson.json();
       
          dispatch(addUpComingMovies(nowPlayingMovies?.results));
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        fetchUpComingMovies();
      }, [activeItem]); 
    
}

export default useFetchUpComing