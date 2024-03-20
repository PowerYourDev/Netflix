import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db, } from "../firebase";

import expandIcon from "../../Assets/svg/expandIcon.svg";
import crossIcon from "../../Assets/svg/crossIcon.svg";
import playIcon from "../../Assets/svg/playIcon.svg";

import plusIcon from "../../Assets/svg/plusIcon.svg";

import { POSTER_CDN } from "../../constant";
import useFetchMovieVideos from "../../customHooks/useFetchMovieVideos";
import useFetchLogo from "../../customHooks/useFetchLogo";
import useFetchMovieDetaills from "../../customHooks/useFetchMovieDetaills";
import { convertMinutesToHoursAndMinutes } from "../common/index";
import ExpandPopup from "./ExpandPopup";
import { fetchMyListData } from "../../redux/sliceReducers/myListSlice";
import { addNowPlayingHoverMovieVideo } from "../../redux/sliceReducers/movieSlice";
import { addNowPlayingHoverMovieLogo } from "../../redux/sliceReducers/movieSlice";
import { useTranslation } from "react-i18next";

const CardPopup = ({ active, item, handleClosePopUp  }) => {
  const {t}=useTranslation()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.userSlice);

  const hoverMovie = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieVideo
  );

  const popUpLogo = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieLogo
  );

  const movieDetails = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieDetails
  );

  const MylistMovies = useSelector((state) => state?.MyList?.myListData);

  const [expandPopUp, setExpandPopUp] = useState(false);

  useFetchMovieVideos(item,addNowPlayingHoverMovieVideo);
  useFetchLogo(item,addNowPlayingHoverMovieLogo);
  useFetchMovieDetaills(item?.id);

  const videoPlayHandler = () => {
    navigate("/movie-playing/selected");
  };

  const handleNavigateForSm=()=>{
    navigate("/movie-details");
  }

  const expandPopUpHandler = () => {
    setExpandPopUp(true);
  };

  const CloseExpandPopUp = () => {
    setExpandPopUp(false);
    
    handleClosePopUp()
  };

  const handleSetListItem = async (item) => {
    const userEmail = userData?.email;
    try {
      if (userEmail) {
        const userDoc = doc(db, "users", userEmail);
        await updateDoc(userDoc, {
          myListItem: arrayUnion({ ...item }),
        });
      }

      dispatch(fetchMyListData(userData));
      toast.success(t("Movie added to My List"));
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error(t("Something went wrong, try again"));
    }
  };

  const handleRemoveListItem = async (item) => {
    const userEmail = userData?.email;
    try {
      const userDoc = doc(db, "users", userEmail);
      await updateDoc(userDoc, {
        myListItem: arrayRemove(item),
      });

      dispatch(fetchMyListData(userData));
    
      toast.success(t("Movie removed from My List"));
    } catch (e) {
      console.error("Error removing document: ", e);
      toast.error(t("Something went wrong, try again"));
    }
  };

  return (
    <div>
      <div className={active && "fixed top-0 left-0 w-full h-full bg-[#000] bg-opacity-[0.7] z-20 overflow-hidden"}/>
      {expandPopUp && (
        <ExpandPopup
          hoverMovie={hoverMovie}
          popUpLogo={popUpLogo}
          movieDetails={movieDetails}
          item={item}
          CloseExpandPopUp={CloseExpandPopUp}
          handleRemoveListItem={handleRemoveListItem}
          handleSetListItem={handleSetListItem}
        />
      )}
      {/* bg-opacity-[0.7] */}
     
        <div
          className="bg-black fixed top-0 left-0  right-0 bottom-0 m-auto w-[88%] sm:w-3/4 md:w-1/2 lg:w-[27%] h-fit z-30"
          // style={{
          //   animationName: active ? "card" : "card-exit",
          //   animationDuration: "0.6s",
          //   animationFillMode: "forwards",
          //   animationTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
          //   // zIndex: 20,

          //   // animationDelay: !active ? "0.1s" : "0s",
          //   // transform: "scale(1.5)",
          // }}
        >
          <div className="relative">
            {hoverMovie ? (
              <div className="w-full h-full -mt-[7%] bg-black">
                <iframe
                  onClick={() => videoPlayHandler(item?.id)}
                  className="w-full h-full aspect-video"
                  src={`https://www.youtube.com/embed/${hoverMovie?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&frameborder=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            ) : (
              <img
                src={POSTER_CDN + item?.poster_path}
                className="w-full h-full aspect-video"
                alt="posterPopup"
              />
            )}
            <img
              src={POSTER_CDN + popUpLogo}
              alt=""
              className="w-[35%] h-[25%] absolute left-4 bottom-3"
            />

<div
          className="absolute top-[14%] right-[4%] bg-[#181818] p-[0.6rem] inline-block rounded-full  mx-[0.25em] cursor-pointer"
          onClick={handleClosePopUp}
        >
          <img src={crossIcon} alt="crossIcon" />
        </div>
          </div>
          <div className="px-3 md:px-5 py-6 bg-[#181818] ">
            <div className="flex justify-between mb-[0.5em] ">
              <div>
                <div
                  className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[0.7rem] inline-block rounded-full mx-[0.35em] bg-white bg-opacity-70 cursor-pointer"
                  onClick={() => videoPlayHandler()}
                >
                  <img src={playIcon} alt="playIcon" />
                </div>
                {MylistMovies?.some((list) => list?.id === item.id) ? (
                  <div
                    className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[0.7rem] inline-block rounded-full  mx-[0.35em] cursor-pointer"
                    onClick={() => {
                      handleRemoveListItem(item);
                    }}
                  >
                    <img src={crossIcon} alt="crossIcon" />
                  </div>
                ) : (
                  <div
                    className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[0.7rem] inline-block rounded-full mx-[0.25em] cursor-pointer"
                    onClick={() => {
                      handleSetListItem(item);
                    }}
                  >
                    <img src={plusIcon} alt="plusIcon" />
                  </div>
                )}

                {/* <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full  mx-[0.25em] cursor-pointer">
              <img src={crossIcon} alt="crossIcon" />
            </div>
            <div className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[8px] inline-block rounded-full mx-[0.25em] cursor-pointer">
              <img src={expandIcon} alt="expandIcon" />
            </div> */}
              </div>
              <div>
                <div
                  className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[0.7rem]  rounded-full mx-[0.35em] cursor-pointer hidden md:inline-block"
                  onClick={expandPopUpHandler}
                >
                  <img src={expandIcon} alt="expandIcon" />
                </div>

                <div
                  className="border border-solid border-[rgba(255, 255, 255, 0.7)] p-[0.7rem] inline-block rounded-full mx-[0.35em] cursor-pointer  md:hidden"
                  onClick={handleNavigateForSm}
                >
                  <img src={expandIcon} alt="expandIcon" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap text-[#bcbcbc] gap-[0.2em] md:gap-[0.6em] my-[0.8em] ">
              <h3 className="text-green-500 font-medium text-[16px]">
                {movieDetails?.vote_average?.toFixed(2)}{t("% Rating")}
              </h3>

              <h5 className="border-solid border-[hsla(0, 0%, 100%, .4)] border-[0.5px] text-[16px] font-medium px-[0.4em]">
                {movieDetails?.adult ? t("A") : t("U/A 16+")}
              </h5>

              <h3 className="text-[16px] font-medium ">
                {convertMinutesToHoursAndMinutes(movieDetails?.runtime)}
              </h3>
              <h6 className="text-[hsla(0, 0%, 100%, .9)] border-solid border-[hsla(0, 0%, 100%, .4)] border-[0.5px] px-[0.4em] text-[16px]">
                {t("HD")}
              </h6>
            </div>

            <div className="flex text-white items-center">
              {movieDetails?.genres?.map((genre, index) => {
                return (
                  <>
                    <h4 className="text-[16px]">{genre.name}</h4>
                    {index < movieDetails?.genres.length - 1 && (
                      <h4 className="text-gray-600 px-[7px] self-center ">•</h4>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

  );
};

export default CardPopup;
