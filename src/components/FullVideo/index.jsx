import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const FullVideo = () => {
  const { id } = useParams();

  const bannerMovie = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingBackGroundMovieVideo
        ?.playingBackGroundMovieVideo
  );

  const hoverMovie = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieVideo
  );
  const movieKey = id === "banner-movie" ? bannerMovie : hoverMovie;

  // const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)

  // banner-movie

  // const [video,setVideo]=useState(null)

  //   let  Api_URL;
  //   if(activeItem==="/movies-browse"){
  //     Api_URL=`https://api.themoviedb.org/3/movie/${id}/videos`
  //   }else if(activeItem==="/tv-shows"){
  //     Api_URL=`https://api.themoviedb.org/3/tv/${id}/videos`
  //   }

  //    const fetchMovieVideos = async (nowPlayingMovieId) => {
  //   try {
  //     const movieVideosJsonData = await fetch(
  //       Api_URL,
  //       API_OPTIONS
  //     );
  //     const movieVideosData = await movieVideosJsonData.json();
  //     const CurrentVideoTrailers = movieVideosData?.results?.filter(
  //       (video) => video?.type === "Trailer"
  //     );

  //     const CurrentVideoTrailer = CurrentVideoTrailers[0];
  //     const currentVideo =
  //       CurrentVideoTrailers.length === 0
  //         ? movieVideosData?.results[0]
  //         : CurrentVideoTrailer;

  //         setVideo(currentVideo)

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(()=>{
  //   fetchMovieVideos()
  // },[])

  return (
    <div>
      <div className="w-full h-full -">
        <iframe
          className="w-full h-full aspect-video "
          src={`https://www.youtube.com/embed/${movieKey?.key}?autoplay=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default FullVideo;
