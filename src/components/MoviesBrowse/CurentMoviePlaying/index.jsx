import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import BackgroundVideo from './BackgroundVideo'
import VideoInfo from './VideoInfo'

import MovieLists from "../movieLists";
import { makingToIntialStateBackgroundMovies } from '../../../redux/sliceReducers/movieSlice'
import { makingToIntialStateBackgroundTvShows } from '../../../redux/sliceReducers/movieSlice'


import useFetchMovieVideos from "../../../customHooks/useFetchMovieVideos";
import { addNowPlayingBackGroundMovieVideo } from "../../../redux/sliceReducers/movieSlice";
import { addNowPlayingTvShowsVideo } from "../../../redux/sliceReducers/movieSlice";
import ShimmerUi from '../../shimmerUi'
import { getActiveItems } from '../../../utilis/common'



const CurrentmoviePlaying = () => {
  const  dispatch =useDispatch()
  const nowPlayingMoviesData=useSelector((state)=>state?.moviesSlice?.nowPlayingMovies)
  const nowPlayingMovieVideo =useSelector((state)=>state?.moviesSlice?.nowPlayingBackGroundMovieVideo?.playingBackGroundMovieVideo) 
  const nowPlayingTvShowVideo =useSelector((state)=>state?.moviesSlice?.nowPlayingBackGroundTvShowsVideo?.playingBackGroundTvShowsVideo) 
  const nowPlayingTvShows=useSelector((state)=>state?.moviesSlice?.nowPlayingTvShows)
  const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)
  
 
  const nowPlayingMovies=getActiveItems(activeItem,nowPlayingMoviesData,nowPlayingTvShows)
  const dispatchCurrentPlayingMovies=getActiveItems(activeItem,makingToIntialStateBackgroundMovies,makingToIntialStateBackgroundTvShows)
  const nowPlayingVideo=getActiveItems(activeItem,nowPlayingMovieVideo,nowPlayingTvShowVideo)
  const NowPlayingMovieVideoAction=getActiveItems(activeItem,addNowPlayingBackGroundMovieVideo,addNowPlayingTvShowsVideo)

  

  const [nowPlayingMovie,setNowPlayingMovie]=useState(null)





 
  useFetchMovieVideos(nowPlayingMovie,NowPlayingMovieVideoAction)



  useEffect(()=>{
    const randomIndex = nowPlayingMovies ? Math.floor(Math.random() * nowPlayingMovies.length) : 0;
    const nowPlayingMovie = nowPlayingMovies&&nowPlayingMovies[randomIndex]
     setNowPlayingMovie(nowPlayingMovie)
  },[activeItem,nowPlayingMovies])

  useEffect(()=>{
    return ()=>{
     dispatch(dispatchCurrentPlayingMovies())
    }
  },[dispatch,dispatchCurrentPlayingMovies])


   if(!nowPlayingMoviesData || !nowPlayingVideo) return <ShimmerUi/>

  return (
    <div className='bg-inherit'>
       
   
       {console.log("header")}
        {/* videoInfoContainer */} 
        <VideoInfo {...nowPlayingMovie}/>

      {/* backgroundVideoContainer */}
      <BackgroundVideo {...nowPlayingMovie}/>
        
      <MovieLists />

      

    </div>
  )
}

export default CurrentmoviePlaying