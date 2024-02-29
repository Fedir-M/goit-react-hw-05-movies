import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import SearchBar from 'components/SearchBar';
import { getSearchgMovies } from 'services/moviesApi';

import s from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams();
  const query = search.get('query');

  const location = useLocation();

  useEffect(() => {
    const getSearchedMovies = async () => {
      if (!query) return;

      try {
        const { data } = await getSearchgMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSearchedMovies();
  }, [query]);
  return (
    <div className={s.movies}>
      <SearchBar onSubmit={setSearch} />
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default Movies;
