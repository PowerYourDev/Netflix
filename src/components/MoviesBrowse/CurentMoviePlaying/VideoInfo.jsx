import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getActiveItems, truncateString } from "../../../utilis/common";
import playIcon from "../../../Assets/svg/playIcon.svg";
import moreInfoIcon from "../../../Assets/svg/moreInfoIcon.svg";
import useFetchLogo from "../../../customHooks/useFetchLogo";
import { POSTER_CDN } from "../../../constant";
import CardPopup from "../../../utilis/common/CardPopup";

import { addNowPlayingBackGroundMovieLogo, addNowPlayingHoverMovieData } from "../../../redux/sliceReducers/movieSlice";
import { addNowPlayingTvShowsLogo } from "../../../redux/sliceReducers/movieSlice";
import { useTranslation } from "react-i18next";


const VideoInfo = (nowPlayingMovie) => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const dispatch=useDispatch()
  
const [popUpActive,setPopUpActive]=useState(false)


console.log(nowPlayingMovie,"nowplayinng,ovie")

  const movieLogo = useSelector(
    (state) =>
      state.moviesSlice.nowPlayingBackGroundMovieVideo
        ?.playingBackGroundMovieLogo
  );

  const tvShowsLogo=useSelector((state)=>state?.moviesSlice?.nowPlayingBackGroundTvShowsVideo?.playingBackGroundTvShowsLogo)
  const activeItem = useSelector((state)=>state?.userTab?.currentUserTab)


  const logo =getActiveItems(activeItem,movieLogo,tvShowsLogo)
  const NowPlayingMovieLogoAction=getActiveItems(activeItem,addNowPlayingBackGroundMovieLogo,addNowPlayingTvShowsLogo)


  const handlePlay = () => {
    navigate("/movie-playing/banner-movie");
  };

  const handleMoreInfo=(nowPlayingMovie)=>{
    setPopUpActive(true)
    dispatch(addNowPlayingHoverMovieData(nowPlayingMovie))
  }

  const handleClosePopUp=()=>{
    setPopUpActive(false)
  }


  useFetchLogo(nowPlayingMovie,NowPlayingMovieLogoAction );

  return (
   <>
   {
     popUpActive && <CardPopup item={nowPlayingMovie} active={popUpActive} setActive={setPopUpActive} handleClosePopUp={handleClosePopUp}/>

   }
    <div className="w-1/3 absolute bottom-[25%] left-[4%] z-10">
      <div className="mb-[1.2rem] flex justify-center">
        {logo ? (
          <img className="w-2/3" src={POSTER_CDN + logo} alt="" />
        ) : (
          <h1 className="text-[#fff] font-bold text-[3vw] drop-shadow-[8px_8px_8px_rgba(0,0,0,.45)">
            {nowPlayingMovie?.title}
          </h1>
        )}
      </div>

      <p className="text-[#fff] text-[1.2vw] font-normal mt-[0.3vw] drop-shadow-[2px_2px_4px_rgba(0,0,0,.45)]">
        {truncateString(nowPlayingMovie?.overview, 150)}
      </p>

      <div className="flex my-[1rem] gap-3  items-center ">
        <div
          className="flex gap-[0.5rem] bg-[#fff] text-black pl-[2rem] pr-[2.5rem] rounded py-[0.5rem] cursor-pointer"
          onClick={() => handlePlay(nowPlayingMovie?.id)}
        >
          <img src={playIcon} alt=""/>
          <button className="text-[1.4rem] font-semibold leading-[2.4rem]">
            {" "}
          {t("Play")}
          </button>
        </div>
        <div className="flex gap-[0.5rem] bg-[#6D6D6EB3] text-[#fff] pl-[2rem] pr-[2.5rem] rounded py-[0.5rem] cursor-pointer" onClick={()=>handleMoreInfo(nowPlayingMovie)}>
          <img src={moreInfoIcon} alt="" />
          <button className="text-[1.4rem] font-semibold leading-[2.4rem]">
            {t("More Info")}
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default VideoInfo;
