import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies(props) {
  return(
    <main className='movies'>
      <SearchForm onSubmit={props.onSubmit} isSaved={false} />
      <FilterCheckbox onChecked={props.filterShortFilms} isSaved={false} />
      { props.loading && <Preloader /> }
      <MoviesCardList movies={props.movies} savedMovies={props.savedMovies} onFilmLike={props.onFilmLike} isSaved={false} />
    </main>
  )
}

export default Movies;