import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies(props) {
  return(
    <main className='movies'>
      <SearchForm />
      <FilterCheckbox />
      { props.loading && <Preloader /> }
    </main>
  )
}

export default SavedMovies;