import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const token = import.meta.env.VITE_TOKEN;

export const fetchPopularMovies = createAsyncThunk(
  'auth/fetchPopularMovies',
  async () => {
    const req = await fetch(
      `${import.meta.env.VITE_API_URL}/movie/popular?language=en-US&page=${
        Math.floor(Math.random() * 10) + 1
      }`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const res = await req.json();
    return res;
  },
);

export const fetchFeaturedMovies = createAsyncThunk(
  'auth/fetchFeaturedMovies',
  async () => {
    const req = await fetch(
      `${import.meta.env.VITE_API_URL}/movie/top_rated?language=en-US&page=${
        Math.floor(Math.random() * 10) + 1
      }`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const res = await req.json();
    return res;
  },
);

export const fetchNewArrivalMovies = createAsyncThunk(
  'auth/fetchNewArrivalMovies',
  async () => {
    const req = await fetch(
      `${import.meta.env.VITE_API_URL}/movie/upcoming?language=en-US&page=${
        Math.floor(Math.random() * 10) + 1
      }`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const res = await req.json();
    return res;
  },
);

export const fetchMovieByQuery = createAsyncThunk(
  'auth/fetchMovieByQuery',
  async (query) => {
    const req = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const res = await req.json();
    return res;
  },
);

export const fetchMovieById = createAsyncThunk(
  'auth/fetchMovieById',
  async (id) => {
    const req = await fetch(
      `${import.meta.env.VITE_API_URL}/movie/${id}?language=en-US`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const res = await req.json();
    return res;
  },
);

const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularMovies: {
      isLoading: false,
      isFetched: false,
      isError: false,
      data: [],
    },
    featuredMovies: {
      isLoading: false,
      isFetched: false,
      isError: false,
      data: [],
    },
    newArrivalMovies: {
      isLoading: false,
      isFetched: false,
      isError: false,
      data: [],
    },
    queryMovie: {
      isLoading: false,
      isFetched: false,
      isError: false,
      data: [],
    },
    movieDetail: {
      isLoading: false,
      isFetched: false,
      isError: false,
      data: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.popularMovies.isLoading = true;
      state.popularMovies.isError = false;
    });
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.popularMovies.isLoading = false;
      state.popularMovies.data = action.payload?.results.filter((img) =>
        img.poster_path.includes('/'),
      );
      state.popularMovies.isFetched = true;
      state.popularMovies.isError = false;
    });
    builder.addCase(fetchPopularMovies.rejected, (state) => {
      state.popularMovies.isLoading = false;
      state.popularMovies.isError = true;
    });

    //Featured
    builder.addCase(fetchFeaturedMovies.pending, (state) => {
      state.featuredMovies.isLoading = true;
      state.featuredMovies.isError = false;
    });
    builder.addCase(fetchFeaturedMovies.fulfilled, (state, action) => {
      state.featuredMovies.isLoading = false;
      state.featuredMovies.data = action.payload?.results;
      state.featuredMovies.isFetched = true;
      state.featuredMovies.isError = false;
    });
    builder.addCase(fetchFeaturedMovies.rejected, (state) => {
      state.featuredMovies.isLoading = false;
      state.featuredMovies.isError = true;
    });

    //New
    builder.addCase(fetchNewArrivalMovies.pending, (state) => {
      state.newArrivalMovies.isLoading = true;
      state.newArrivalMovies.isError = false;
    });
    builder.addCase(fetchNewArrivalMovies.fulfilled, (state, action) => {
      state.newArrivalMovies.isLoading = false;
      state.newArrivalMovies.data = action.payload?.results;
      state.newArrivalMovies.isFetched = true;
      state.newArrivalMovies.isError = false;
    });
    builder.addCase(fetchNewArrivalMovies.rejected, (state) => {
      state.newArrivalMovies.isLoading = false;
      state.newArrivalMovies.isError = true;
    });

    //Search
    builder.addCase(fetchMovieByQuery.pending, (state) => {
      state.queryMovie.isLoading = true;
      state.queryMovie.isError = false;
    });
    builder.addCase(fetchMovieByQuery.fulfilled, (state, action) => {
      state.queryMovie.isLoading = false;
      state.queryMovie.data = action.payload?.results;
      state.queryMovie.isFetched = true;
      state.queryMovie.isError = false;
    });
    builder.addCase(fetchMovieByQuery.rejected, (state) => {
      state.queryMovie.isLoading = false;
      state.queryMovie.isError = true;
    });

    //ID
    builder.addCase(fetchMovieById.pending, (state) => {
      state.movieDetail.isLoading = true;
      state.movieDetail.isError = false;
    });
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.movieDetail.isLoading = false;
      console.log(action.payload);
      state.movieDetail.data = action.payload;
      state.movieDetail.isFetched = true;
      state.movieDetail.isError = false;
    });
    builder.addCase(fetchMovieById.rejected, (state) => {
      state.movieDetail.isLoading = false;
      state.movieDetail.isError = true;
    });
  },
});

export default MovieSlice.reducer;
