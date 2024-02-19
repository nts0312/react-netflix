import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    trailerSound: null,
    popularMovies: null,
    moviesGenres: null,
    topRatedMovies: null,
    upcomingMovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    addTrailerSound: (state, action) => {
      state.trailerSound = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addMoviesGenres: (state, action) => {
      state.moviesGenres = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies:(state, action) => {
      state.upcomingMovies = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTrailerSound,
  addPopularMovies,
  addMoviesGenres,
  addTopRatedMovies,
  addUpcomingMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;
