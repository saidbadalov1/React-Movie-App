import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, MovieDetail } from './pages/index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<MovieDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
