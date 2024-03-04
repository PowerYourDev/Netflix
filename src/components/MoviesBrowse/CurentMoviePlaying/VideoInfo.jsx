import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { truncateString } from "../../../utilis/common";
import playIcon from "../../../Assets/svg/playIcon.svg"
import moreInfoIcon from "../../../Assets/svg/moreInfoIcon.svg"
import useFetchLogo from "../../../customHooks/useFetchLogo";
import { POSTER_CDN } from "../../../constant";



const VideoInfo = ({ poster_path, title, overview, original_title, id }) => {
  
 const  navigate=useNavigate()
 const logo =useSelector((state)=>state.moviesSlice.nowPlayingBackGroundMovieVideo?.playingBackGroundMovieLogo) 


 useFetchLogo(id,"BackgroundLogo")

  

  const handlePlay=(id)=>{
    navigate("/movie-playing/"+id)
  }

 

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
        <div className="flex gap-[0.5rem] bg-[#fff] text-black pl-[2rem] pr-[2.5rem] rounded py-[0.5rem] cursor-pointer" onClick={()=>handlePlay(id)}>
        <img src={playIcon}/> 
        <button className="text-[1.4rem] font-semibold leading-[2.4rem]" > Play</button>
        </div>
        <div className="flex gap-[0.5rem] bg-[#6D6D6EB3] text-[#fff] pl-[2rem] pr-[2.5rem] rounded py-[0.5rem] cursor-pointer">
        <img src={moreInfoIcon}/> 
        <button className="text-[1.4rem] font-semibold leading-[2.4rem]">More Info</button>
        </div>
     
      </div>
    </div>
  );
};

export default VideoInfo;
