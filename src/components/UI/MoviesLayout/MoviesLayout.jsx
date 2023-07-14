import propTypes from 'prop-types';
import Slider from 'react-slick';
import { featuredSliderSettings } from '../../../constants/constants';
import { MovieCard } from '../../index';

const MoviesLayout = (props) => {
  const { title, movies, isFetched, isLoading, isError } = props;
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text_4xl '>{title}</h3>
        {/* <Link to='/'>
          <Button classNames='text-rose-700 bg-transparent hover:bg-transparent p-0 hover:text-rose-800 font-medium'>
            See more
          </Button>
        </Link> */}
      </div>
      <div className='mt-11'>
        <Slider {...featuredSliderSettings}>
          {isFetched &&
            !isLoading &&
            !isError &&
            movies &&
            movies
              ?.filter((movie) => movie.poster_path)
              .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </Slider>
      </div>
    </div>
  );
};

MoviesLayout.propTypes = {
  title: propTypes.string,
  movies: propTypes.array,
  isFetched: propTypes.bool,
  isLoading: propTypes.bool,
  isError: propTypes.bool,
};

export default MoviesLayout;
