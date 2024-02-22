import React, { useEffect, useState } from "react";

import { API_OPTIONS } from "../../../constant";
import { POSTER_CDN } from "../../../constant";

const BackgroundVideo = ({ nowPlayingMovieId, posterPath }) => {
  const [video, setVideo] = useState(null);
  console.log(video, "video");

  const fetchMovieVideos = async () => {
    try {
      const movieVideosJsonData = await fetch(
        `https://api.themoviedb.org/3/movie/${nowPlayingMovieId}/videos`,
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
      setVideo(currentVideo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieVideos();
  }, []);

  // if (!video) return null;

  return (
    <>
      {video ? (
        <div className="w-full h-full -mt-[7%]">
          <iframe
            className="w-full h-full aspect-video "
            src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : (
        <img className="w-full" src={POSTER_CDN + posterPath} alt="" />
      )}
    </>
  );
};

export default BackgroundVideo;
