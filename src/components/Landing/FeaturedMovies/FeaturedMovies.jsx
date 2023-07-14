import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedMovies } from '../../../store/features/MovieSlice';
import { MoviesLayout } from '../../index';

const FeaturedMovies = () => {
  const dispatch = useDispatch();
  const { data, isFetched, isLoading, isError } = useSelector(
    (state) => state.movie.featuredMovies,
  );

  useEffect(() => {
    dispatch(fetchFeaturedMovies());
    //eslint-disable-next-line
  }, []);

  return (
    <div className='py-12'>
      <MoviesLayout
        title='Featured Movies'
        movies={data}
        isFetched={isFetched}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default FeaturedMovies;
