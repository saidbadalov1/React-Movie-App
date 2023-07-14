import propTypes from 'prop-types';
import { Search } from '../../../icons';

const SearchInput = (props) => {
  const { className, onChange, value } = props;
  return (
    <form
      id='search'
      name='search'
      className='flex border-2 px-3 py-2 gap-2 border-solid border-white rounded-lg'
    >
      <input
        type='text'
        id='searchInput'
        placeholder='What do you want to watch?'
        className={`outline-none border-0 font-dm_sans placeholder:text-white text-white bg-transparent w-[100%] ${className}`}
        onChange={onChange}
        value={value}
      />
      <button type='button'>
        <Search />
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  className: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.string,
};

export default SearchInput;
