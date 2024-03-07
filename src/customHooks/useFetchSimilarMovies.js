import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"


import { API_OPTIONS } from '../constant'
import {addNowPlayingHoverSimilarMovies} from "../redux/sliceReducers/movieSlice"

const useFetchSimilarMovies = (movieId) => {
    const dispatch=useDispatch()

   const fetchSimilarMoviesDetails=async ()=>{
    const fetchSimilarMoviesJson= await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/similar?language=en-US',API_OPTIONS)
    const fetchSimilarMovies=await fetchSimilarMoviesJson.json()
    dispatch(addNowPlayingHoverSimilarMovies(fetchSimilarMovies?.results))
   }
useEffect(()=>{
    fetchSimilarMoviesDetails()
},[])

}

export default useFetchSimilarMovies