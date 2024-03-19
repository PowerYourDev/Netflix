import { useEffect,useCallback } from "react";
import { useDispatch,useSelector } from "react-redux";

import { API_OPTIONS, } from "../constant";


const useFetchLogo = (item, action) => {
  const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)

  const dispatch = useDispatch();

  let  Api_URL;
  // if(activeItem==="/movies-browse" || activeItem==="/movies"){
  //   Api_URL="https://api.themoviedb.org/3/movie/"+item?.id +"/images?include_image_language=en"
  // }else if(activeItem==="/tv-shows" || item?.media_type==="tv"){
  //   Api_URL="https://api.themoviedb.org/3/tv/"+ item?.id +"/images"
  // }else{
  //   Api_URL="https://api.themoviedb.org/3/movie/"+item?.id +"/images?include_image_language=en" 
  // }

  if (item?.hasOwnProperty('first_air_date')) {
     Api_URL="https://api.themoviedb.org/3/tv/"+ item?.id +"/images"
  } else {
     Api_URL="https://api.themoviedb.org/3/movie/"+item?.id +"/images?include_image_language=en"
 
  }

  const fetchImagePosters = useCallback(async () => {
    try {
      const movieLogosJsonData = await fetch(Api_URL, API_OPTIONS);
      const movieLogosData = await movieLogosJsonData.json();
      const curentMovieLogo = movieLogosData.length === 0 ? null : movieLogosData?.logos[0]?.file_path;
      dispatch(action(curentMovieLogo));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, action, Api_URL]); // Dependencies for useCallback

  useEffect(() => {
    fetchImagePosters();
  }, [fetchImagePosters, activeItem, item]);
};

export default useFetchLogo;
