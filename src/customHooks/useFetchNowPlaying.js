import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";


import { API_OPTIONS } from "../constant";
import { addNowPlayingMovies } from "../redux/sliceReducers/movieSlice";

const useFetchNowPlaying = () => {
    const dispatch = useDispatch();

    const activeItem = useSelector((state)=>state?.userTab?.currentUserTab) 

    let  Api_URL;
  if(activeItem==="/movies-browse" || activeItem==="/movies"){
    Api_URL="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  }else if(activeItem==="/tv-shows"){
    Api_URL="https://api.themoviedb.org/3/trending/tv/day?language=en-US"
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
    
}

export default useFetchNowPlaying