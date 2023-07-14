import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { sliderSettings } from '../../../constants/constants';
import { Imdb, Play } from '../../../icons';
import { fetchPopularMovies } from '../../../store/features/MovieSlice';
import { Button, Loader } from '../../index';

const Hero = () => {
  const dispatch = useDispatch();
  const { data, isFetched, isLoading, isError } = useSelector(
    (state) => state.movie.popularMovies,
  );

  useEffect(() => {
    dispatch(fetchPopularMovies());
    //eslint-disable-next-line
  }, []);

  const divStyle = (src) => ({
    background: `url(https://image.tmdb.org/t/p/original${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  if (isLoading) {
    return (
      <div className='h-[100vh] absolute inset-0 z-[100] flex justify-center items-center bg-white text-black flex-col '>
        <Loader />
        loading...
      </div>
    );
  }
  return (
    <div className='h-[100vh] !overflow-hidden'>
      <Slider {...sliderSettings}>
        {!isLoading &&
          isFetched &&
          !isError &&
          data &&
          data.map((movie) => (
            <div key={movie.id} className='w-full'>
              <div
                className='min-h-[100vh] py-12 flex justify-center items-center relative'
                style={divStyle(movie.backdrop_path)}
              >
                <div className='absolute inset-0 z-0 bg-black bg-opacity-50' />
                <div className='container relative px-5 h-[100vh] flex items-center text-white z-10'>
                  <div className='max-w-[500px] flex flex-col gap-4 '>
                    <h2 className='text_5xl font-bold '>
                      {movie.original_title}
                    </h2>
                    <div className='flex gap-2 items-center'>
                      <Imdb />
                      <p className='text_xs'>
                        {movie.vote_average.toFixed(1)} / 10
                      </p>
                    </div>
                    <p className='text_sm font-medium'>
                      {movie.overview.slice(0, 250) + '...'}
                    </p>
                    <div>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        className='inline-block'
                        href={`https://www.youtube.com/results?search_query=${
                          movie.original_title + ' trailer'
                        }`}
                      >
                        <Button classNames='flex gap-2 items-center font-bold'>
                          <Play /> Watch Trailer
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Hero;
