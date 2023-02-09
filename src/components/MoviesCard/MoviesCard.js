import './MoviesCard.css';
import MoviesCardImagePath from '../../images/movies-card-image.png'

function MoviesCard() {
  return(
    <article className='movies-card'>
      <h2 className='movies-card__name'>33 слова о дизайне</h2>
      <p className='movies-card__duration'>1ч 47м</p>
      <button type='button' className='movies-card__favourite-button'></button>
      <img className='movies-card__image' alt='Постер' src={MoviesCardImagePath} /> 
    </article>
  );
}

export default MoviesCard;