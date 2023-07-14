import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from '../components';
import { Imdb, Play } from '../icons';
import { fetchMovieById } from '../store/features/MovieSlice';

const MovieDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const id = location.pathname.slice(1);

  const { data, isFetched, isLoading, isError } = useSelector(
    (state) => state.movie.movieDetail,
  );

  useEffect(() => {
    dispatch(fetchMovieById(id));
    //eslint-disable-next-line
  }, [id]);

  const divStyle = (src) => ({
    background: `url(https://image.tmdb.org/t/p/original${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  return (
    <>
      {isFetched && !isLoading && !isError && data && (
        <div key={data?.id} className='w-full'>
          <div
            className='min-h-[100vh] py-12 flex justify-center items-center relative'
            style={divStyle(data?.backdrop_path)}
          >
            <div className='absolute inset-0 z-0 bg-black bg-opacity-80 ' />
            <div className='container relative px-5 h-[100vh] flex items-center text-white z-10'>
              <div className='max-w-[500px] flex flex-col gap-4 mx-auto'>
                <h2 className='text_5xl font-bold '>{data?.original_title}</h2>
                <div className='flex gap-2 items-center'>
                  <Imdb />
                  <p className='text_xs'>
                    {data?.vote_average?.toFixed(1)} / 10
                  </p>
                </div>
                <p className='text_sm font-medium'>{data?.overview}</p>
                <div className='flex gap-4'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='inline-block'
                    href={`https://www.youtube.com/results?search_query=${
                      data?.original_title + ' trailer'
                    }`}
                  >
                    <Button classNames='flex gap-2 items-center font-bold'>
                      <Play /> Watch Trailer
                    </Button>
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='inline-block'
                    href={data.homepage}
                  >
                    <Button classNames='flex gap-2 items-center bg-indigo-700 font-bold'>
                      Visit Official Website
                    </Button>
                  </a>
                </div>
                <div className='flex gap-3'>
                  {data.genres.map((genre) => (
                    <div
                      className='bg-gray-400 px-2 py-1 rounded-lg shadow-md text-white text_xs'
                      key={genre.id}
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
                <div>Release Date: {data.release_date}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
