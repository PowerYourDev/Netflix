import React from 'react'
import { useSelector } from 'react-redux'



import Cardrow from './cardRow'



const MovieLists = () => {
   const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)
    const {nowPlayingMovies,popularMovies,upComingMovies}=useSelector((state)=>state?.moviesSlice)
    const {nowPlayingTvShows,popularTvShows,upComingTvShows}=useSelector((state)=>state?.moviesSlice)

    const nowPlaying = activeItem==="/movies-browse" || activeItem === "/movies"?nowPlayingMovies:nowPlayingTvShows
    const popular = activeItem==="/movies-browse" || activeItem === "/movies"?popularMovies:popularTvShows
    const upComing = activeItem==="/movies-browse" || activeItem === "/movies"?upComingMovies:upComingTvShows


  return (
     <div className='bg-black -mt-[12%]'>
        <div >
        <Cardrow title={"NOW PLAYING MOVIES"} data={nowPlaying}/>
        </div>

        <div className='mt-[3%]'>
        <Cardrow title={"NOW PLAYING MOVIES"} data={popular}/>
        </div>

        <div  className='mt-[3%]'>
        <Cardrow title={"NOW PLAYING MOVIES"} data={upComing}/>
        </div>


     </div>
  )
}

export default MovieLists