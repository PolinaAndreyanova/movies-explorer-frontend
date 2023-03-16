import './MoviesCard.css';

function MoviesCard(props) {
  const isLiked = props.savedMovies.some(i => i.movieId === props.movieId);
  
  function handleLikeFilm() {
    console.log(props.thumbnail)
    props.onFilmLike({
      country: props.country,
      director: props.director,
      duration: props.duration,
      year: props.year,
      description: props.description,
      image: props.image.url,
      trailerLink: props.trailerLink,
      nameRU: props.nameRU,
      nameEN: props.nameEN,
      thumbnail: !props.isSaved ? props.image.formats.thumbnail.hash : props.thumbnail,
      movieId: props.movieId
    });
  }

  return(
    <article className='movies-card'>
      <h2 className='movies-card__name'>{props.nameRU}</h2>
      <p className='movies-card__duration'>{`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</p>
      <button type='button' className={`movies-card__favourite-button${isLiked ? ' movies-card__favourite-button_active' : ''}${props.isSaved ? ' movies-card__favourite-button_type_delete' : ''}`} onClick={handleLikeFilm}></button>
      
      <a href={props.trailerLink} rel="noreferrer" target="_blank"><img className='movies-card__image' alt='Постер' src={`https://api.nomoreparties.co/${props.image.url || props.image}`} /></a>
    </article>
  );
}

export default MoviesCard;