import React from "react";
import { useSelector } from "react-redux";

import { POSTER_CDN } from "../../../constant";
import crossIcon from "../../../Assets/svg/crossIcon.svg";
// import { makingHoverToIntialState } from '../../../redux/sliceReducers/movieSlice';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetchSimilarMovies from "../../../customHooks/useFetchSimilarMovies";

const MovieDetailsSm = () => {
  // const dispatch=useDispatch()
  const navigate = useNavigate();
  const { t } = useTranslation();

  const activeItem = useSelector((state) => state?.userTab?.currentUserTab);

  const hoverMovie = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieVideo
  );

  const item = useSelector(
    (state) =>
      state.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieData
  );

  const popUpLogo = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieLogo
  );
  const movieDetails = useSelector(
    (state) =>
      state?.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverMovieDetails
  );

  const similarMovieData = useSelector(
    (state) =>
      state.moviesSlice?.nowPlayingHoverMovieVideo?.playingHoverSimilarMovies
  );

  const handleNavigateBack = () => {
    navigate(activeItem);
  };

  useFetchSimilarMovies(item.id);

  // useEffect(()=>{
  //   console.log("mounting")
  //   return ()=>{

  //     console.log("clean up and unmount")
  //   }
  // },[dispatch])

  return (
    <div className="bg-black h-screen text-white w-full overflow-scroll">
      <div className="relative ">
        {hoverMovie ? (
          <div className="w-full h-full -mt-[7%] bg-black">
            <iframe
              // onClick={() => videoPlayHandler(item?.id)}
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
          onClick={handleNavigateBack}
        >
          <img src={crossIcon} alt="crossIcon" />
        </div>
      </div>

      <div className="w-full px-[1em] pb-[1em]">
        <div>
          <h3>{item?.overview}</h3>
        </div>

        <div className="pt-[2em]">
          <h2 className="text-[#999]  text-[1.23em] font-bold mr-[0.5em]">
            {t("Title details")}
          </h2>
          <div className="grid grid-cols-12 mt-[0.5em] gap-x-[5%]">
            <div className="col-span-6 ">
              <div>
                <h3 className="text-[#999] mt-[0.5em] text-[1em] font-medium">
                  {t("Director")}
                </h3>
                <div>
                  {movieDetails?.genres?.map((genre, index) => (
                    <h4>{genre?.name}</h4>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[#999] mt-[0.5em] text-[1em] font-medium">
                  {t("Cast")}
                </h3>
                <div>
                  {movieDetails?.genres?.map((genre, index) => (
                    <h4>{genre?.name}</h4>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <div>
                <h3 className="text-[#999] mt-[0.5em] text-[1em] font-medium">
                  {t("Cast")}
                </h3>
                <div>
                  {movieDetails?.genres?.map((genre, index) => (
                    <h4>{genre?.name}</h4>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[1.5em] ">
        <h1 className="text-[#999] text-[1.2em] font-bold">
          {t("More Like This")}
        </h1>
        <div className="mt-[0.5em] flex flex-wrap  gap-2">
          {similarMovieData?.map((movie) => {
            if (!movie?.poster_path) return null;
            return (
              <img
                src={POSTER_CDN + movie?.poster_path}
                alt=""
                className="h-36 rounded-md sm:h-40"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSm;
