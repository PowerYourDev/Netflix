import React from 'react'
import { useSelector } from 'react-redux'



import Cardrow from './cardRow'



const MovieLists = () => {
    const nowPLayingMovies=useSelector((state)=>state?.moviesSlice?.nowPlayingMovies)
  return (
     <div className='bg-black -mt-[12%] '>
        <div >
        <Cardrow title={"NOW PLAYING MOVIES"} data={nowPLayingMovies}/>
        </div>

        <div className='mt-[3%]  '>
        <Cardrow title={"NOW PLAYING MOVIES"} data={nowPLayingMovies}/>
        </div>

        <div  className='mt-[3%]'>
        <Cardrow title={"NOW PLAYING MOVIES"} data={nowPLayingMovies}/>
        </div>


     </div>
  )
}

export default MovieLists