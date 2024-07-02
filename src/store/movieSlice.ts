import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

interface MovieState {
  currentMovie: Movie | null;
  history: Movie[];
}

const initialState: MovieState = {
  currentMovie: null,
  history: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setCurrentMovie(state, action: PayloadAction<Movie>) {
      state.currentMovie = action.payload;
    },
    addToHistory(state, action: PayloadAction<Movie>) {
      state.history.unshift(action.payload);
    },
  },
});

export const { setCurrentMovie, addToHistory } = movieSlice.actions;

export default movieSlice.reducer;
