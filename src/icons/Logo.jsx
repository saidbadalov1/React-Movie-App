import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'} className='flex items-center sm:gap-6 gap-3'>
      <img src='/assets/logo.png' alt='Logo' className='w-12 h-12' />
      <p className='text_2xl font-dm_sans font-bold'>MovieBox</p>
    </Link>
  );
};

export default Logo;
