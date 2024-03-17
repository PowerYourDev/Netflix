import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import BackgroundVideo from './BackgroundVideo'
import VideoInfo from './VideoInfo'
import Header from "../../Header"
import MovieLists from "../movieLists";
import { makingToIntialStateBackgroundMovies } from '../../../redux/sliceReducers/movieSlice'
import { makingToIntialStateBackgroundTvShows } from '../../../redux/sliceReducers/movieSlice'


import useFetchMovieVideos from "../../../customHooks/useFetchMovieVideos";
import { addNowPlayingBackGroundMovieVideo } from "../../../redux/sliceReducers/movieSlice";
import { addNowPlayingTvShowsVideo } from "../../../redux/sliceReducers/movieSlice";
import ShimmerUi from '../../shimmerUi'



const CurrentmoviePlaying = () => {
  const  dispatch =useDispatch()
  const nowPlayingMoviesData=useSelector((state)=>state?.moviesSlice?.nowPlayingMovies)
  const nowPlayingMovieVideo =useSelector((state)=>state?.moviesSlice?.nowPlayingBackGroundMovieVideo?.playingBackGroundMovieVideo) 
  const nowPlayingTvShowVideo =useSelector((state)=>state?.moviesSlice?.nowPlayingBackGroundTvShowsVideo?.playingBackGroundTvShowsVideo) 
  const nowPlayingTvShows=useSelector((state)=>state?.moviesSlice?.nowPlayingTvShows)
  const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)
  
 
  const nowPlayingMovies = activeItem==="/movies-browse" || activeItem === "/movies"?nowPlayingMoviesData:nowPlayingTvShows
  const dispatchCurrentPlayingMovies =activeItem==="/movies-browse" || activeItem === "/movies"?makingToIntialStateBackgroundMovies:makingToIntialStateBackgroundTvShows
  const nowPlayingVideo =activeItem==="/movies-browse" || activeItem === "/movies"?nowPlayingMovieVideo:nowPlayingTvShowVideo


  const [nowPlayingMovie,setNowPlayingMovie]=useState(null)



  const NowPlayingMovieVideoAction = activeItem==="/movies-browse" || activeItem === "/movies" ?addNowPlayingBackGroundMovieVideo:addNowPlayingTvShowsVideo

 
  useFetchMovieVideos(nowPlayingMovie,NowPlayingMovieVideoAction)



  useEffect(()=>{
    const randomIndex = nowPlayingMovies ? Math.floor(Math.random() * nowPlayingMovies.length) : 0;
    const nowPlayingMovie = nowPlayingMovies&&nowPlayingMovies[randomIndex]
     setNowPlayingMovie(nowPlayingMovie)
  },[activeItem])

  useEffect(()=>{
    return ()=>{
     dispatch(dispatchCurrentPlayingMovies())
    }
  },[])


   if(!nowPlayingMoviesData || !nowPlayingVideo) return <ShimmerUi/>

  return (
    <div>
       
   
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