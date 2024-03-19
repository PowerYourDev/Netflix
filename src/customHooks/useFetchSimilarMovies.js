import {useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"


import { API_OPTIONS } from '../constant'
import {addNowPlayingHoverSimilarMovies} from "../redux/sliceReducers/movieSlice"

const useFetchSimilarMovies = (movieId) => {
const dispatch=useDispatch()

const currenthovermovieData=useSelector((state)=>state.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieData)
// const activeItem = useSelector((state)=>state?.userTab?.currentUserTab) 
console.log(currenthovermovieData,"currenthovermovieData")
let  Api_URL;
// if(activeItem==="/movies-browse" || activeItem==="/movies"){
// Api_URL='https://api.themoviedb.org/3/movie/'+ movieId +'/similar?language=en-US'
// }else if(activeItem==="/tv-shows"){
// Api_URL='https://api.themoviedb.org/3/tv/'+movieId+'/similar?language=en-US&page=1'
// }

if (currenthovermovieData?.hasOwnProperty('first_air_date')) {
    Api_URL='https://api.themoviedb.org/3/tv/'+movieId+'/similar?language=en-US&page=1'
  } else {
    Api_URL='https://api.themoviedb.org/3/movie/'+ movieId +'/similar?language=en-US'
 
  }


   const fetchSimilarMoviesDetails=async ()=>{
    const fetchSimilarMoviesJson= await fetch(Api_URL,API_OPTIONS)
    const fetchSimilarMovies=await fetchSimilarMoviesJson.json()
    dispatch(addNowPlayingHoverSimilarMovies(fetchSimilarMovies?.results))
   }
useEffect(()=>{
    fetchSimilarMoviesDetails()
},[])

}

export default useFetchSimilarMovies