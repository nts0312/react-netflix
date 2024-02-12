import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
     trailerSound: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    addTrailerSound: (state, action) => {
      state.trailerSound = action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addTrailerSound } = moviesSlice.actions;

export default moviesSlice.reducer;
