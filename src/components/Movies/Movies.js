import { useEffect } from 'react';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies(props) {
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [countVisibleMovies, setCountVisibleMovies] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [addCount, setAddCount] = useState(0);

  function handleClick() {
    let newVisibleMovies = visibleMovies;
    let newCountVisibleMovies = countVisibleMovies;

    for (let i = 0; i < addCount; i++) {
      if (newCountVisibleMovies !== maxCount) {
        newVisibleMovies.push(props.movies[newCountVisibleMovies]);
        newCountVisibleMovies++;
      }
    }

    setVisibleMovies(newVisibleMovies);
    setCountVisibleMovies(newCountVisibleMovies);
  }

  function setInitialParams() {
    if (props.movies !== null && props.movies.length > 5) {
      if (window.innerWidth > 1280) {
        setAddCount(3);
        setVisibleMovies(props.movies.length >= 12 ? props.movies.slice(0, 12) : props.movies);
        setCountVisibleMovies(props.movies.length >= 12 ? 12 : props.movies.length);
        setMaxCount(props.movies.length);
      } else {
        if (window.innerWidth >= 768) {
          setAddCount(2);
          setVisibleMovies(props.movies.length >= 8 ? props.movies.slice(0, 8) : props.movies);
          setCountVisibleMovies(props.movies.length >= 8 ? 8 : props.movies.length);
          setMaxCount(props.movies.length);
        } else {
          setAddCount(1);
          setVisibleMovies(props.movies.length >= 5 ? props.movies.slice(0, 5) : props.movies);
          setCountVisibleMovies(props.movies.length >= 5 ? 5 : props.movies.length);
          setMaxCount(props.movies.length);
        }
      }
    } else {
      if (props.movies !== null) {
        setVisibleMovies(props.movies);
        setCountVisibleMovies(props.movies.length);
        setMaxCount(props.movies.length);
      }
    }
  }

  useEffect(() => {
    setInitialParams();
  }, [props.movies]);
  
  return (
    <main className='movies'>
      <SearchForm onSubmit={props.onSubmit} isSaved={false} />
      <FilterCheckbox onChecked={props.filterShortFilms} isSaved={false} isChecked={props.isCheckboxChecked} />
      {props.loading && <Preloader />}
      <MoviesCardList movies={visibleMovies} savedMovies={props.savedMovies} onFilmLike={props.onFilmLike} isSaved={false} />
      {(props.movies !== null && countVisibleMovies !== maxCount) &&
        <button type='button' className='movies-button' onClick={handleClick}>Ещё</button>
      }
    </main>
  )
}

export default Movies;