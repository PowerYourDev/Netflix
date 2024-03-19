import {useCallback, useEffect} from 'react'
import {useDispatch} from "react-redux"


import { API_OPTIONS } from '../constant'
import {addNowPlayingHoverMovieDetails} from "../redux/sliceReducers/movieSlice"

const useFetchMovieDetaills = (movieId) => {
    const dispatch=useDispatch()

   const fetchDeatils=useCallback(async ()=>{
    const fetchMovieDetailsJson= await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'?language=en-US',API_OPTIONS)
    const fetchMovieDetails=await fetchMovieDetailsJson.json()
   dispatch(addNowPlayingHoverMovieDetails(fetchMovieDetails))
   },[dispatch,movieId])
useEffect(()=>{
    fetchDeatils()
},[fetchDeatils])

}

export default useFetchMovieDetaills