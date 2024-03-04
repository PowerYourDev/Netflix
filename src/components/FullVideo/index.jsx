import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { API_OPTIONS, POSTER_CDN } from "../../constant";

const FullVideo = () => {
    const {id}=useParams()
    const [video,setVideo]=useState(null)
    

     const fetchMovieVideos = async (nowPlayingMovieId) => {
    try {
      const movieVideosJsonData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS
      );
      const movieVideosData = await movieVideosJsonData.json();
      const CurrentVideoTrailers = movieVideosData?.results?.filter(
        (video) => video?.type === "Trailer"
      );

      const CurrentVideoTrailer = CurrentVideoTrailers[0];
      const currentVideo =
        CurrentVideoTrailers.length === 0
          ? movieVideosData?.results[0]
          : CurrentVideoTrailer;

          setVideo(currentVideo)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchMovieVideos()
  },[])


  return (
    <div>

<div className="w-full h-full -">
          <iframe
            className="w-full h-full aspect-video "
            src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
    </div>
  )
}

export default FullVideo