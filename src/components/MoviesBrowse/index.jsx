import React, { useEffect } from "react";
import { useSelector } from "react-redux";


import Header from "../Header";

import CurrentmoviePlaying from "./CurentMoviePlaying";
import MovieLists from "./movieLists";
import ShimmerUi from "../shimmerUi";



const MoviesBrowse = () => {
  

  // const nowPlayingMovies=useSelector((state)=>state?.moviesSlice?.nowPlayingMovies)

 
  // useFetchNowPlaying()
  // useFetchPopular()
  // useFetchUpComing()



  // if (!nowPlayingMovies){
  //   return(
  //   
  //   )
  // }   
  return (
    <div>
     
      <Header />
      {/* video playing container */}
  {/* {
    nowPlayingMovies ? <CurrentmoviePlaying  /> :<ShimmerUi/>
  } */}
      
      <CurrentmoviePlaying  />

      {/* movieListOfDiffGeneres */}

      {/* <MovieLists /> */}

      {/* <movieLIsts/> */}
    </div>
  );
};

export default MoviesBrowse;
