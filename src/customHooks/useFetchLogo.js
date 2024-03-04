import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS, POSTER_CDN } from "../constant";
import {
  addNowPlayingHoverMovieLogo,
  addNowPlayingBackGroundMovieLogo,
} from "../redux/sliceReducers/movieSlice";

const useFetchLogo = (id, BackgroundLogo) => {
  console.log(id, BackgroundLogo,"id, BackgroundLogo")
  const dispatch = useDispatch();

  const fetchImagePosters = async () => {
    try {
      const movieLogosJsonData = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "/images?include_image_language=en",

        API_OPTIONS
      );
      const movieLogosData = await movieLogosJsonData.json();
      console.log(movieLogosData);
      const curentMovieLogo =
        movieLogosData.length === 0
          ? null
          : movieLogosData?.logos[0]?.file_path;

      BackgroundLogo === "BackgroundLogo"
        ? dispatch(addNowPlayingBackGroundMovieLogo(curentMovieLogo))
        : dispatch(addNowPlayingHoverMovieLogo(curentMovieLogo));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImagePosters();
  }, []);
};

export default useFetchLogo;
