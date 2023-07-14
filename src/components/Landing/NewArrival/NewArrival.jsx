import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewArrivalMovies } from '../../../store/features/MovieSlice';
import { MoviesLayout } from '../../index';

const NewArrival = () => {
  const dispatch = useDispatch();
  const { data, isFetched, isLoading, isError } = useSelector(
    (state) => state.movie.newArrivalMovies,
  );

  useEffect(() => {
    dispatch(fetchNewArrivalMovies());
    //eslint-disable-next-line
  }, []);

  return (
    <div className='py-12'>
      <MoviesLayout
        title='New Arrival'
        movies={data}
        isFetched={isFetched}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default NewArrival;
