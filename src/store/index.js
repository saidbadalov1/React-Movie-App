import { configureStore } from '@reduxjs/toolkit';
import MovieSlice from './features/MovieSlice';

export const store = configureStore({
  reducer: {
    movie: MovieSlice,
  },
});
