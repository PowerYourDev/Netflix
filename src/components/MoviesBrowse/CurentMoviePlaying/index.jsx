import React from 'react'
import { useSelector } from 'react-redux'


import BackgroundVideo from './BackgroundVideo'
import VideoInfo from './VideoInfo'



const CurrentmoviePlaying = () => {
  const nowPlayingMovies=useSelector((state)=>state.moviesSlice?.nowPlayingMovies)
   const randomIndex =nowPlayingMovies && Math.floor(Math.random() * nowPlayingMovies?.length);
  const nowPlayingmovie=nowPlayingMovies&&nowPlayingMovies[randomIndex]



  return (
    <div>
        {/* videoInfoContainer */} 
        <VideoInfo {...nowPlayingmovie}/>

      {/* backgroundVideoContainer */}
      <BackgroundVideo nowPlayingMovieId={nowPlayingmovie?.id} posterPath={nowPlayingmovie?.backdrop_path}/>
        
       

      

    </div>
  )
}

export default CurrentmoviePlaying