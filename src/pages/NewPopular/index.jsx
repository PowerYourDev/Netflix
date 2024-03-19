import React from 'react'
import { useSelector } from 'react-redux';

import Cardrow from '../../components/MoviesBrowse/movieLists/cardRow'
import useFetchNowPlaying from '../../customHooks/useFetchNowPlaying'

import { addUpComingTvShows } from "../../redux/sliceReducers/movieSlice";
import { addPopularTvShows } from "../../redux/sliceReducers/movieSlice";

import Header from '../../components/Header';


import { addNowPlayingMovies } from "../../redux/sliceReducers/movieSlice";
import {addPopularMovies} from "../../redux/sliceReducers/movieSlice"
import { addUpComingMovies } from "../../redux/sliceReducers/movieSlice";
import { useTranslation } from 'react-i18next';



const NewPopular = () => {
  const {t}=useTranslation()

    const nowPLayingTvShows = useSelector(
        (state) => state?.moviesSlice?.nowPlayingTvShows
      );

      const popularTvshows = useSelector(
        (state) => state?.moviesSlice?.popularTvShows
      );
      
      const upcomingTvShows = useSelector(
        (state) => state?.moviesSlice?.upComingTvShows
      );  

      const upcomingMovies = useSelector(
        (state) => state?.moviesSlice?.upComingMovies
      ); 
      
      const nowPLayingMovies = useSelector(
        (state) => state?.moviesSlice?.nowPlayingMovies
      );
      


    // const now_Playing_end_Point=process.env.REACT_APP_NOW_PLAYING_API_ENDPOINT
    const popular_end_Point=process.env.REACT_APP_POPULAR_API_ENDPOINT
    const upComing_end_Point=process.env.REACT_APP_UP_COMING_API_ENDPOINT

    const now_Playing_end_Point_movies=process.env.REACT_APP_NOW_PLAYING_API_ENDPOINT
    const popular_end_Point_movies=process.env.REACT_APP_POPULAR_API_ENDPOINT
    const upComing_end_Point_movies=process.env.REACT_APP_UP_COMING_API_ENDPOINT

    // useFetchNowPlaying(now_Playing_end_Point,addNowPlayingTvShows)
    useFetchNowPlaying(popular_end_Point,addPopularTvShows)
    useFetchNowPlaying(upComing_end_Point,addUpComingTvShows)

   

    useFetchNowPlaying(now_Playing_end_Point_movies,addNowPlayingMovies)
    useFetchNowPlaying(popular_end_Point_movies,addPopularMovies)
    useFetchNowPlaying(upComing_end_Point_movies,addUpComingMovies)





  return (
    <div className='bg-black h-screen '>
        <Header/>
        
    <div className='pt-[70px] bg-inherit'>
    <div className='mt-[3%] '>
    <Cardrow title={t("NOW PLAYING MOVIES")} data={nowPLayingTvShows}/>
    </div>
   <div className='mt-[3%]'>
   <Cardrow title={t("NOW PLAYING MOVIES")} data={popularTvshows}/>
   </div>
 <div className='mt-[3%]'>
 <Cardrow title={t("NOW PLAYING MOVIES")} data={upcomingTvShows}/>
 </div>

 <div className='mt-[3%]'>
 <Cardrow title={t("NOW PLAYING MOVIES")} data={upcomingMovies}/>
 </div>

 <div className='mt-[3%]'>
 <Cardrow title={t("NOW PLAYING MOVIES")} data={nowPLayingMovies}/>
 </div>
    
    </div>
   </div>
  )
}

export default NewPopular