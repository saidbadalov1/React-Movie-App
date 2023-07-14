import { FeaturedMovies, Hero, NewArrival } from '../components';

const Home = () => {
  return (
    <main>
      <Hero />
      <div className='container mx-auto px-5'>
        <FeaturedMovies />
        <NewArrival />
      </div>
    </main>
  );
};

export default Home;
