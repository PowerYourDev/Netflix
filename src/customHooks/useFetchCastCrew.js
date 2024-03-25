import {useCallback, useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"


import { API_OPTIONS } from '../constant'
import {addNowPlayingHoverMovieCastCrew} from "../redux/sliceReducers/movieSlice"

const useFetchCastCrew = (movieId) => {
const dispatch=useDispatch()

const currenthovermovieData=useSelector((state)=>state.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieData)


let  Api_URL;


if (currenthovermovieData?.hasOwnProperty('first_air_date')) {
    Api_URL='https://api.themoviedb.org/3/tv/'+movieId+'/credits?language=en-US'
  } else {
    Api_URL='https://api.themoviedb.org/3/movie/'+movieId+'/credits?language=en-US'
    
 
  }


   const fetchCastCrew=useCallback(async ()=>{
    const fetchSimilarMoviesJson= await fetch(Api_URL,API_OPTIONS)
    const fetchSimilarMovies=await fetchSimilarMoviesJson.json()
 
    dispatch(addNowPlayingHoverMovieCastCrew(fetchSimilarMovies))
   },[Api_URL,dispatch])

useEffect(()=>{
    fetchCastCrew()
},[fetchCastCrew])

}

export default useFetchCastCrew