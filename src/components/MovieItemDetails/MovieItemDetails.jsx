import s from './MovieItemDetails.module.css';

const MovieItemDetails = ({ movie }) => {
  return (
    <div className={s.movieWrapper}>
      <div className={s.itemImg}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={s.movieDescr}>
        <h2>{`${movie.title} (${parseInt(movie.release_date)})`}</h2>
        <p>{`User Score: ${Math.round(movie.vote_average * 10)}%`}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres?.map(el => (
            <li key={el.id}>
              <span>{el.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieItemDetails;
