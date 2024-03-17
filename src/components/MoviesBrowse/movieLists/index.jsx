import React from 'react'
import { useSelector } from 'react-redux'
import { getActiveItems } from '../../../utilis/common'



import Cardrow from './cardRow'



const MovieLists = () => {
   const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)
    const {nowPlayingMovies,popularMovies,upComingMovies}=useSelector((state)=>state?.moviesSlice)
    const {nowPlayingTvShows,popularTvShows,upComingTvShows}=useSelector((state)=>state?.moviesSlice)

    const nowPlaying =getActiveItems(activeItem,nowPlayingMovies,nowPlayingTvShows)
    const popular =getActiveItems(activeItem,popularMovies,popularTvShows)
    const upComing =getActiveItems(activeItem,upComingMovies,upComingTvShows)




  return (
     <div className='bg-black -mt-[12%]'>
        <div >
        <Cardrow title={getActiveItems(activeItem,"NOW PLAYING MOVIES","NOW PLAYING SHOWS")} data={nowPlaying}/>
        </div>

        <div className='mt-[3%]'>
        <Cardrow title={getActiveItems(activeItem,"POPULAR MOVIES","POPULAR SHOWS")} data={popular}/>
        </div>

        <div  className='mt-[3%]'>
        <Cardrow title={getActiveItems(activeItem,"UPCOMING MOVIES","UPCOMING SHOWS")} data={upComing}/>
        </div>


     </div>
  )
}

export default MovieLists