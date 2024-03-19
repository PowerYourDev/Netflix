import {useCallback, useEffect} from 'react'
import { useDispatch} from "react-redux";


import { API_OPTIONS } from "../constant";


const useFetchNowPlaying = (API_ENDPOINT,action) => {
  const Base_url = process.env.REACT_APP_BASE_API_URL
    const dispatch = useDispatch();

    console.log(Base_url,API_ENDPOINT)
    // const activeItem = useSelector((state)=>state?.userTab?.currentUserTab) 

  //   let  Api_URL;
  // if(activeItem==="/movies-browse" || activeItem==="/movies"){
  //   Api_URL="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  // }else if(activeItem==="/tv-shows"){
  //   Api_URL="https://api.themoviedb.org/3/trending/tv/day?language=en-US"
  // }



    const fetchNowPlayingMovies = useCallback(async () => {
        try {
          const nowPlayingMoviesJson = await fetch(
            Base_url + API_ENDPOINT,
            API_OPTIONS
          );
    
          const nowPlayingMovies = await nowPlayingMoviesJson.json();
       
          dispatch(action(nowPlayingMovies?.results));
        } catch (e) {
          console.log(e);
        }
      },[Base_url,dispatch,action,API_ENDPOINT]);
      useEffect(() => {
        fetchNowPlayingMovies();
      }, [fetchNowPlayingMovies]); 
    
}

export default useFetchNowPlaying