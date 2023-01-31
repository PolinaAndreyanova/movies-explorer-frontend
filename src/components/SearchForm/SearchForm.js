import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='serch-form__form'>
        <input
          required
          id="film-input"
          type="text"
          className="search-form__input"
          name="film"
          minLength="2"
          maxLength="40"
          placeholder="Фильм"
        >
        </input>
        <button type='button' className='search-form__button'></button>
      </form>
    </section>
  )
}

export default SearchForm;