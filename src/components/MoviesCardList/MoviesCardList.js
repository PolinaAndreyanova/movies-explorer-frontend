import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className='movies-card-list'>
      {(props.movies !== null && props.movies.length !== 0) ?
        props.movies.map((movie) => (
          <MoviesCard
            key={movie.id || movie.movieId}
            country={movie.country}
            director={movie.director}
            duration={movie.duration}
            year={movie.year}
            description={movie.description}
            image={movie.image}
            trailerLink={movie.trailerLink}
            nameRU={movie.nameRU}
            nameEN={movie.nameEN}
            thumbnail={movie.thumbnail}
            movieId={movie.id || movie.movieId}
            savedMovies={props.savedMovies}
            onFilmLike={props.onFilmLike}
            isSaved={props.isSaved}
          />
        )) :
        <p className='movies-card-list__searchin-result'>Ничего не найдено</p>
      }
    </section>
  );
}

export default MoviesCardList;