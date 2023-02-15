import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <>
      <section className='movies-card-list'>
        {
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
          ))
        }
      </section>
      <button type='button' className='movies-card-list-button'>Ещё</button>
    </>
  );
}

export default MoviesCardList;