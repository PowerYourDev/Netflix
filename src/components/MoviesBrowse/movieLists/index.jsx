import React from 'react'
import { useSelector } from 'react-redux'
import { getActiveItems } from '../../../utilis/common'



import Cardrow from './cardRow'
import { useTranslation } from 'react-i18next'



const MovieLists = () => {
  const {t}=useTranslation()

   const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)
    const {nowPlayingMovies,popularMovies,upComingMovies}=useSelector((state)=>state?.moviesSlice)
    const {nowPlayingTvShows,popularTvShows,upComingTvShows}=useSelector((state)=>state?.moviesSlice)

    const nowPlaying =getActiveItems(activeItem,nowPlayingMovies,nowPlayingTvShows)
    const popular =getActiveItems(activeItem,popularMovies,popularTvShows)
    const upComing =getActiveItems(activeItem,upComingMovies,upComingTvShows)




  return (
     <div className='md:-mt-[12%]'>
        <div>
        <Cardrow title={getActiveItems(activeItem,t("NOW PLAYING MOVIES"),t("NOW PLAYING SHOWS"))} data={nowPlaying}/>
        </div>

        <div className='mt-[3%]'>
        <Cardrow title={getActiveItems(activeItem,t("POPULAR MOVIES"),t("POPULAR SHOWS"))} data={popular}/>
        </div>

        <div  className='my-[3%]'>
        <Cardrow title={getActiveItems(activeItem,t("UPCOMING MOVIES"),t("UPCOMING SHOWS"))} data={upComing}/>
        </div>


     </div>
  )
}

export default MovieLists