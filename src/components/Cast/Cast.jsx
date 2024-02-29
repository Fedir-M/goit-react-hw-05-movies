import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/moviesApi';

import noImg from '../../img/photo_2024-02-22_12-34-57.jpg';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { data } = await getCast(movieId);
        setCast(data.cast);
        setIsFirstRender(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div className={s.castWrapper}>
      {cast.length === 0 && !isFirstRender ? (
        <p>We don't have any cast for this movie</p>
      ) : (
        <ul className={s.castList}>
          {cast.map(el => (
            <li className={s.castItem} key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : noImg
                }
                alt={el.name}
              />
              <p className={s.castName}>{el.name}</p>
              <p className={s.Character}>{`Character: ${el.character}`}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
