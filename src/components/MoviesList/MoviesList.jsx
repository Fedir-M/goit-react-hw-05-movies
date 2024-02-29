import { NavLink } from 'react-router-dom';

import noImg from '../../img/photo_2024-02-22_12-34-57.jpg';
import s from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={s.moviesList}>
      {movies.length > 0 &&
        movies.map(({ id, poster_path, title }, idx) => (
          <li key={id} className={s.moviesItem}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                className={s.itemImg}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noImg
                }
                alt={title}
              />
              <h2>{title}</h2>
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
