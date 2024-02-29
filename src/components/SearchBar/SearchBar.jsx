import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './SearchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.query.value;

    if (query.trim() === '') {
      toast.error('Please enter value', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    onSubmit({ query: query.trim() });

    e.currentTarget.reset();
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          placeholder="Search movies"
        />

        <button type="submit" className={s.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
