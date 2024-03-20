import React from "react";



import Header from "../Header";

import CurrentmoviePlaying from "./CurentMoviePlaying";




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
    <div className="bg-black h-screen">
     
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
