import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'


import BackgroundVideo from './BackgroundVideo'
import VideoInfo from './VideoInfo'
import Header from "../../Header"
import MovieLists from "../movieLists";



const CurrentmoviePlaying = () => {
  const nowPlayingMovies=useSelector((state)=>state?.moviesSlice?.nowPlayingMovies)

  
  const [nowPlayingMovie,setNowPlayingMovie]=useState(null)

  useEffect(()=>{
    const randomIndex = nowPlayingMovies ? Math.floor(Math.random() * nowPlayingMovies.length) : 0;
    const nowPlayingMovie = nowPlayingMovies&&nowPlayingMovies[randomIndex]
     setNowPlayingMovie(nowPlayingMovie)
  },[])


 if (!nowPlayingMovie) return null

  return (
    <div>
       
   
     
        {/* videoInfoContainer */} 
        <VideoInfo {...nowPlayingMovie}/>

      {/* backgroundVideoContainer */}
      <BackgroundVideo {...nowPlayingMovie}/>
        
      <MovieLists />

      

    </div>
  )
}

export default CurrentmoviePlaying