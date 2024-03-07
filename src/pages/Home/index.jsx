import React from 'react'

import MoviesBrowse from '../../components/MoviesBrowse'

const Home = () => {
    const API_URL="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  return (
    <MoviesBrowse  API_URL={API_URL} tabName={"/movies-browse"}/>
  )
}

export default Home