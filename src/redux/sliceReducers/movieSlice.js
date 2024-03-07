import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingBackGroundMovieVideo: {
      playingBackGroundMovieVideo:null,
      playingBackGroundMovieLogo:null
    },
    nowPlayingHoverMovieVideo: {
      playingHoverMovieVideo:null,
      playingHoverMovieLogo:null,
      playingHoverMovieDetails:null,
      playingHoverSimilarMovies:null,
    },
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingBackGroundMovieVideo: (state, action) => {
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieVideo = action.payload;
    },
    addNowPlayingHoverMovieVideo: (state, action) => {
      state.nowPlayingHoverMovieVideo.playingHoverMovieVideo = action.payload;
    },
    addNowPlayingBackGroundMovieLogo: (state, action) => {
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieLogo = action.payload;
    },
    addNowPlayingHoverMovieLogo: (state, action) => {
      state.nowPlayingHoverMovieVideo.playingHoverMovieLogo = action.payload;
    },
    addNowPlayingHoverMovieDetails: (state, action) => {
      state.nowPlayingHoverMovieVideo.playingHoverMovieDetails = action.payload;
    },
    addNowPlayingHoverSimilarMovies: (state, action) => {
      state.nowPlayingHoverMovieVideo.playingHoverSimilarMovies = action.payload;
    },
    makingToIntialState: (state, action) => {
      state.nowPlayingMovies = null;
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieLogo = null;
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieVideo = null;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addNowPlayingBackGroundMovieVideo,
  addNowPlayingHoverMovieVideo,
  addNowPlayingHoverMovieLogo,
  addNowPlayingBackGroundMovieLogo,
  addNowPlayingHoverMovieDetails,
  addNowPlayingHoverSimilarMovies,
  makingToIntialState,
} = moviesSlice.actions;
