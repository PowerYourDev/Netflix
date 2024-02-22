import React, { useEffect, useState } from "react";

import { API_OPTIONS, POSTER_CDN } from "../../../constant";
import { truncateString } from "../../../utilis/common";
import playIcon from "../../../Assets/svg/playIcon.svg"
import moreInfoIcon from "../../../Assets/svg/moreInfoIcon.svg"

const VideoInfo = ({ poster_path, title, overview, original_title, id }) => {
  const [logo, setLogo] = useState(null);

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

      setLogo(curentMovieLogo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImagePosters();
  }, []);

  return (
    <div className="w-1/3 absolute bottom-[25%] left-[4%] ">
    <div className="mb-[1.2rem] flex justify-center">
    {logo ? (
        <img className="w-2/3" src={POSTER_CDN + logo} alt="" />
      ) : (
        <h1 className="text-[#fff] font-bold text-[3vw] drop-shadow-[8px_8px_8px_rgba(0,0,0,.45)">
          {title}
        </h1>
      )}
    </div>

      <p className="text-[#fff] text-[1.2vw] font-normal mt-[0.3vw] drop-shadow-[2px_2px_4px_rgba(0,0,0,.45)]">
        {truncateString(overview, 150)}
      </p>

      <div className="flex my-[1rem] gap-3  items-center ">
        <div className="flex gap-[0.5rem] bg-[#fff] text-black pl-[2rem] pr-[2.5rem] rounded py-[0.5rem]">
        <img src={playIcon}/> 
        <button className="text-[1.4rem] font-semibold leading-[2.4rem]"> Play</button>
        </div>
        <div className="flex gap-[0.5rem] bg-[#6D6D6EB3] text-[#fff] pl-[2rem] pr-[2.5rem] rounded py-[0.5rem]">
        <img src={moreInfoIcon}/> 
        <button className="text-[1.4rem] font-semibold leading-[2.4rem]">More Info</button>
        </div>
     
      </div>
    </div>
  );
};

export default VideoInfo;
