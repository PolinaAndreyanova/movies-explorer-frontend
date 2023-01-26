import './Portfolio.css';

import aboutMeArrowImagePath from '../../images/about-me-arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      <a href='#' className='portfolio__link'>Статичный сайт
        <img className='portfolio__link-image' alt='Стрелка' src={aboutMeArrowImagePath} /></a>
      <a href='#' className='portfolio__link'>Адаптивный сайт
        <img className='portfolio__link-image' alt='Стрелка' src={aboutMeArrowImagePath} /></a>
      <a href='#' className='portfolio__link'>Одностраничное приложение
        <img className='portfolio__link-image' alt='Стрелка' src={aboutMeArrowImagePath} /></a>
    </section>
  );
}

export default Portfolio;