import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks/useScrollPosition ';
import { Logo } from '../../../icons';
import { fetchMovieByQuery } from '../../../store/features/MovieSlice';
import { SearchInput } from '../../index';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const scrollPosition = useScrollPosition();
  const [query, setQuery] = useState('');

  const { data, isLoading, isFetched, isError } = useSelector(
    (state) => state.movie.queryMovie,
  );

  const queryHandle = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchMovieByQuery(query));
    //eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    setQuery('');
    //eslint-disable-next-line
  }, [location]);

  return (
    <header
      className={`fixed  left-0 right-0 z-20 transition-all ${
        scrollPosition > 0 ? 'bg-indigo-600 top-0 py-2' : 'bg-transparent top-5'
      }`}
    >
      <div className='container mx-auto px-5'>
        <div className='flex justify-between gap-5 items-center text-white'>
          <div className='flex-1'>
            <Logo />
          </div>

          <div className='flex-1 sm:block hidden relative'>
            <SearchInput
              className='w-full'
              value={query}
              onChange={queryHandle}
            />
            {query.length > 0 && (
              <div className='absolute top-[50px] left-0 right-0 bg-white max-h-[400px] p-3 rounded-lg flex flex-col gap-3 overflow-auto'>
                {data &&
                  !isLoading & isFetched &&
                  !isError &&
                  data
                    ?.filter((movie) => movie.poster_path)
                    .map((movie) => (
                      <Link
                        key={movie.id}
                        to={`/${movie.id}`}
                        className='flex gap-1 items-center'
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                          alt={movie.original_title}
                          className='w-14'
                        />
                        <h1 className='text-black text_xs font-bold'>
                          {movie.original_title}
                        </h1>
                      </Link>
                    ))}
              </div>
            )}
          </div>

          <div className='flex-1 flex justify-end items-center gap-6'>
            <a
              target='_blank'
              rel='noreferrer'
              className='text_base font-bold '
              href='https://github.com/saidbadalov1'
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
