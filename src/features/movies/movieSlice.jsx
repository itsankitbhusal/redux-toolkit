import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Lord of the rings";

    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);

// for shows
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Breaking";

    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${seriesText}&type=series`
    );

    return response.data;
  }
);

// for each movie
export const fetchAsyncMovie = createAsyncThunk(
  "movies/fetchAsyncMovie",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovie: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // for cleanup
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
  // third one is extra reducers
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending ");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully ");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected ");
    },
    // for shows
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully ");
      return { ...state, shows: payload };
    },
    // for each movie/shows
    [fetchAsyncMovie.fulfilled]: (state, { payload }) => {
      console.log("single movie fetched successfully ");
      return { ...state, selectedMovie: payload };
    },
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovie = (state) => state.movies.selectedMovie;

export default movieSlice.reducer;
