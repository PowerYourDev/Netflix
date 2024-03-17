import React from 'react'

import useFetchNowPlaying from '../../customHooks/useFetchNowPlaying'
import MoviesBrowse from '../../components/MoviesBrowse';

import { addUpComingTvShows } from "../../redux/sliceReducers/movieSlice";
import { addPopularTvShows } from "../../redux/sliceReducers/movieSlice";
import { addNowPlayingTvShows } from "../../redux/sliceReducers/movieSlice";

const TvShows = () => {
    const now_Playing_end_Point=process.env.REACT_APP_NOW_PLAYING_TV_SHOWS_API_ENDPOINT
    const popular_end_Point=process.env.REACT_APP_POPULAR_TV_SHOWS_API_ENDPOINT
    const upComing_end_Point=process.env.REACT_APP_UP_COMING_TV_SHOWS_API_ENDPOINT

    useFetchNowPlaying(now_Playing_end_Point,addNowPlayingTvShows)
    useFetchNowPlaying(popular_end_Point,addPopularTvShows)
    useFetchNowPlaying(upComing_end_Point,addUpComingTvShows)


    // useFetchPopular()
    // useFetchUpComing()
  return (
    <MoviesBrowse/>
  )
}

export default TvShows