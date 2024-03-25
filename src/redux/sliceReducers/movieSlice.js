import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    upComingMovies:null,

    nowPlayingTvShows: null,
    popularTvShows:null,
    upComingTvShows:null,

    
    nowPlayingBackGroundTvShowsVideo: {
      playingBackGroundTvShowsVideo:null,
      playingBackGroundTvShowsLogo:null
    },

    nowPlayingBackGroundMovieVideo: {
      playingBackGroundMovieVideo:null,
      playingBackGroundMovieLogo:null
    },
    nowPlayingHoverMovieVideo: {
      playingHoverMovieData:null,
      playingHoverMovieVideo:null,
      playingHoverMovieLogo:null,
      playingHoverMovieDetails:null,
      playingHoverSimilarMovies:null,
      playingHoverCastCrew:null

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
    addNowPlayingHoverMovieData:(state,action)=>{
      state.nowPlayingHoverMovieVideo.playingHoverMovieData=action.payload
    },
    addNowPlayingHoverMovieCastCrew:(state,action)=>{
      state.nowPlayingHoverMovieVideo.playingHoverCastCrew=action.payload
    },






    //popular movies
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    //upComing movies
    
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },


    addUpComingTvShows: (state, action) => {
      state.upComingTvShows = action.payload;
    },
     
    addPopularTvShows: (state, action) => {
      state.popularTvShows = action.payload;
    },

    addNowPlayingTvShows: (state, action) => {
      state.nowPlayingTvShows = action.payload;
    },

    makingHoverToIntialState:(state)=>{
    state.nowPlayingHoverMovieVideo.playingHoverMovieData=null;
     state.nowPlayingHoverMovieVideo.playingHoverMovieVideo=null;
     state.nowPlayingHoverMovieVideo.playingHoverMovieLogo=null;
     state.nowPlayingHoverMovieVideo.playingHoverMovieDetails=null;
     state.nowPlayingHoverMovieVideo.playingHoverSimilarMovies=null;
     state.nowPlayingHoverMovieVideo.playingHoverCastCrew=null;
    },

    makingToIntialState: (state, action) => {
      state.nowPlayingMovies = null;
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieLogo = null;
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieVideo = null;
    },


    //background tv shows
    addNowPlayingTvShowsVideo:(state,action)=>{
      state.nowPlayingBackGroundTvShowsVideo.playingBackGroundTvShowsVideo=action.payload
    },

    addNowPlayingTvShowsLogo:(state,action)=>{
      state.nowPlayingBackGroundTvShowsVideo.playingBackGroundTvShowsLogo=action.payload
    },

    makingToIntialStateBackgroundTvShows:(state,action)=>{
      state.nowPlayingBackGroundTvShowsVideo.playingBackGroundTvShowsVideo=null
      state.nowPlayingBackGroundTvShowsVideo.playingBackGroundTvShowsLogo=null
    },

    makingToIntialStateBackgroundMovies:(state,action)=>{
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieVideo=null
      state.nowPlayingBackGroundMovieVideo.playingBackGroundMovieLogo=null
    }

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
  addNowPlayingHoverMovieData,
  addNowPlayingHoverMovieCastCrew,
  makingToIntialState,
  makingHoverToIntialState,


  addPopularMovies,
  addUpComingMovies,



  addUpComingTvShows,
  addPopularTvShows,
  addNowPlayingTvShows,


  addNowPlayingTvShowsVideo,
  addNowPlayingTvShowsLogo,

  makingToIntialStateBackgroundMovies,
  makingToIntialStateBackgroundTvShows
  
} = moviesSlice.actions;
