import notFound from '../../img/liverpool1.jpg';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <h2 className={s.chealseSorry}>
        Sorry, no trophies for{' '}
        <span className={s.chealseColor}>Chelsea F.C.</span> this year.
      </h2>
      <img className={s.img} src={notFound} alt="Movies not found" />
    </div>
  );
};

export default NotFound;
