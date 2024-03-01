import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import MoviesList from 'components/MoviesList';
import SearchBar from 'components/SearchBar';
import NotFound from 'components/NotFound';
import { getSearchgMovies } from 'services/moviesApi';

import 'react-toastify/dist/ReactToastify.css';
import s from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [search, setSearch] = useSearchParams();
  const query = search.get('query');

  const location = useLocation();

  useEffect(() => {
    const getSearchedMovies = async () => {
      if (!query) return;

      try {
        const { data } = await getSearchgMovies(query);
        setMovies(data.results);
        setIsFirstRender(false);
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
      {query && movies.length === 0 && !isFirstRender && <NotFound />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Movies;
