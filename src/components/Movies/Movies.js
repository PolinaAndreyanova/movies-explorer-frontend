import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies(props) {
  return(
    <main className='movies'>
      <SearchForm />
      <FilterCheckbox />
      { props.loading && <Preloader /> }
      <MoviesCardList />
    </main>
  )
}

export default Movies;