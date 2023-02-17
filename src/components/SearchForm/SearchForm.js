import { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [film, setFilm] = useState(localStorage.getItem('searchingFilm'));

  function handleChangeFilm(e) {
    setFilm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(film, props.isSaved);
  }

  return (
    <section className='search-form'>
      <form method='get' name='search-form' className='search-form__form' noValidate>
        <input
          required
          id="film-input"
          type="text"
          className="search-form__input"
          name="film"
          minLength="2"
          maxLength="40"
          placeholder="Фильм"
          onChange={handleChangeFilm}
          defaultValue={props.isSaved ? '' : localStorage.getItem('searchingFilm')}
        >
        </input>
        <p className='search-form__input-error'>{film === '' && 'Нужно ввести ключевое слово'}</p>
        <button type='submit' className='search-form__button' onClick={handleSubmit}></button>
      </form>
    </section>
  )
}

export default SearchForm;