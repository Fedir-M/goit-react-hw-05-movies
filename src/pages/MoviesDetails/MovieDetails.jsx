import MovieItemDetails from 'components/MovieItemDetails';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';

import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const { data } = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const location = useLocation();
  const goBack = location.state.from || '/';
  const goBackRef = useRef(goBack);

  return (
    <div className={s.movieDetails}>
      <Link to={goBackRef.current} className={s.goBackBtn}>
        Go Back
      </Link>
      <MovieItemDetails movie={movie} />
      <div>
        <h2>Additional Information</h2>
        <div className={s.btnAdditional}>
          <NavLink to={`/movies/${movieId}/cast`} state={goBack}>
            Cast
          </NavLink>
          <NavLink to={`/movies/${movieId}/reviews`} state={goBack}>
            Reviews
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
