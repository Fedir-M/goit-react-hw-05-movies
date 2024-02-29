import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/moviesApi';

import s from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { data } = await getReviews(movieId);
        setReviews(data.results);
        setIsFirstRender(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <ul className={s.reviewsList}>
      {reviews.length === 0 && !isFirstRender ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.map(el => (
          <li className={s.reviewsItem} key={el.id}>
            <h3 className={s.author}>{el.author}</h3>
            <p className={s.Character}>{el.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
