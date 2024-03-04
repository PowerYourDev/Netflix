import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"


import { API_OPTIONS } from '../constant'
import {addNowPlayingHoverMovieDetails} from "../redux/sliceReducers/movieSlice"

const useFetchMovieDetaills = (movieId) => {
    const dispatch=useDispatch()

   const fetchDeatils=async ()=>{
    const fetchMovieDetailsJson= await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'?language=en-US',API_OPTIONS)
    const fetchMovieDetails=await fetchMovieDetailsJson.json()
   dispatch(addNowPlayingHoverMovieDetails(fetchMovieDetails))
   }
useEffect(()=>{
    fetchDeatils()
},[])

}

export default useFetchMovieDetaills