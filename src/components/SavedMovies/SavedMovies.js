import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies(props) {
  return(
    <main className='movies'>
      <SearchForm onSubmit={props.onSubmit} isSaved={true} />
      <FilterCheckbox onChecked={props.filterShortFilms} isSaved={true} />
      { props.loading && <Preloader /> }
      <MoviesCardList movies={props.filterSavedMovies} savedMovies={props.savedMovies} onFilmLike={props.onFilmLike} isSaved={true} />
    </main>
  )
}

export default SavedMovies;