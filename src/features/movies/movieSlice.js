import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (movieText) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`)
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (seriesText) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&s=${seriesText}&type=series`)
    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`)
    return response.data;
})

const intialState = {
    movies: {},
    shows: {},
    selectedMoviesOrShow:{},
}

const movieSlice = createSlice({
    name: "movies",
    initialState: intialState,
    reducers: {
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMoviesOrShow={};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncShows.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, shows: payload };
        },
        [fetchAsyncShows.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncMovieOrShowDetail.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, selectedMoviesOrShow: payload };
        },
        [fetchAsyncMovieOrShowDetail.rejected]: () => {
            console.log("Rejected");
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMoviesOrShow
export default movieSlice.reducer;
