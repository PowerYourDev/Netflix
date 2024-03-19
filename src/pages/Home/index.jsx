import React from 'react'


import MoviesBrowse from '../../components/MoviesBrowse'
import useFetchNowPlaying from '../../customHooks/useFetchNowPlaying'

import { addNowPlayingMovies } from "../../redux/sliceReducers/movieSlice";
import {addPopularMovies} from "../../redux/sliceReducers/movieSlice"
import { addUpComingMovies } from "../../redux/sliceReducers/movieSlice";


const HomePage = () => {

  // const nowPlayingMovies =useSelector((state)=>state?.moviesSlice?.nowPlayingMovies)
  // const nowPlayingMovieVideo =useSelector((state)=>state?.moviesSlice?.nowPlayingBackGroundMovieVideo?.playingBackGroundMovieVideo)  

    const now_Playing_end_Point=process.env.REACT_APP_NOW_PLAYING_API_ENDPOINT
    const popular_end_Point=process.env.REACT_APP_POPULAR_API_ENDPOINT
    const upComing_end_Point=process.env.REACT_APP_UP_COMING_API_ENDPOINT

    useFetchNowPlaying(now_Playing_end_Point,addNowPlayingMovies)
    useFetchNowPlaying(popular_end_Point,addPopularMovies)
    useFetchNowPlaying(upComing_end_Point,addUpComingMovies)




  return (
    <MoviesBrowse/>
  )
}

export default HomePage