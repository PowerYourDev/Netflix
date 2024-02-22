import React from 'react'
import { useSelector } from 'react-redux'

import MovieRow from './MovieRow'



const MovieLists = () => {
    const nowPLayingMovies=useSelector((state)=>state?.moviesSlice?.nowPlayingMovies)
  return (
     <div className='bg-black'>
        <div className='-mt-[12%]'>
        <MovieRow title={"NOW PLAYING MOVIES"} data={nowPLayingMovies}/>
        </div>

        <div className='mt-[3%]'>
        <MovieRow title={"NOW PLAYING MOVIES"} data={nowPLayingMovies}/>
        </div>

        <div  className='mt-[3%]'>
        <MovieRow title={"NOW PLAYING MOVIES"} data={nowPLayingMovies}/>
        </div>


     </div>
  )
}

export default MovieLists