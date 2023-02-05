import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form method='get' name='search-form' className='serch-form__form' noValidate>
        <input
          id="film-input"
          type="text"
          className="search-form__input"
          name="film"
          minLength="2"
          maxLength="40"
          placeholder="Фильм"
        >
        </input>
        <button type='submit' className='search-form__button'></button>
      </form>
    </section>
  )
}

export default SearchForm;