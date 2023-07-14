import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Imdb } from '../../../icons';

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div>
      <div className='flex flex-col m-[30px]'>
        <Link to={`/${movie.id}`} className='flex flex-col gap-3'>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.original_title}
              style={{ minHeight: '250px' }}
            />
          </div>

          <div className=''>
            <h1 className='text_lg font-bold text-gray-900 tracking-tighter'>
              {movie.original_title}
            </h1>
          </div>
          <div className='flex gap-4 items-center'>
            <Imdb />
            {movie.vote_average.toFixed(1)} / 10
          </div>
          <div className='flex gap-4 items-center text_xs'>
            {movie.release_date}
          </div>
        </Link>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: propTypes.object,
};

export default MovieCard;
