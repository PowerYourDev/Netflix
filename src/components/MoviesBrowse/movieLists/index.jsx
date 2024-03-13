import React from 'react'
import { useSelector } from 'react-redux'



import Cardrow from './cardRow'



const MovieLists = () => {
    const {nowPlayingMovies,popularMovies,upComingMovies}=useSelector((state)=>state?.moviesSlice)
  return (
     <div className='bg-black -mt-[12%] '>
        <div >
        <Cardrow title={"NOW PLAYING MOVIES"} data={nowPlayingMovies}/>
        </div>

        <div className='mt-[3%]  '>
        <Cardrow title={"NOW PLAYING MOVIES"} data={popularMovies}/>
        </div>

        <div  className='mt-[3%]'>
        <Cardrow title={"NOW PLAYING MOVIES"} data={upComingMovies}/>
        </div>


     </div>
  )
}

export default MovieLists