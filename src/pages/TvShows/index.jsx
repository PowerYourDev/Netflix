import React from 'react'

import MoviesBrowse from '../../components/MoviesBrowse'

const Tvsowh = () => {
    const API_URL="https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
  return (
    <MoviesBrowse  API_URL={API_URL} tabName={"/tv-shows"}/>
  )
}

export default Tvsowh