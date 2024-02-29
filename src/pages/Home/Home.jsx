import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesApi';

import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <div className={s.home}>
      <h1>Trending Today</h1>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default Home;
