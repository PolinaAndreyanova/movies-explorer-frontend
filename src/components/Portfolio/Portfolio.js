import './Portfolio.css';

import aboutMeArrowImagePath from '../../images/about-me-arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li><a href='https://github.com/PolinaAndreyanova/how-to-learn' className='portfolio__link' rel="noreferrer" target="_blank">Статичный сайт
          <img className='portfolio__link-image' alt='Стрелка' src={aboutMeArrowImagePath} /></a></li>
        <li><a href='https://github.com/PolinaAndreyanova/russian-travel' className='portfolio__link' rel="noreferrer" target="_blank">Адаптивный сайт
          <img className='portfolio__link-image' alt='Стрелка' src={aboutMeArrowImagePath} /></a></li>
        <li><a href='https://github.com/PolinaAndreyanova/mesto-react' className='portfolio__link' rel="noreferrer" target="_blank">Одностраничное приложение
          <img className='portfolio__link-image' alt='Стрелка' src={aboutMeArrowImagePath} /></a></li>
      </ul>
    </section>
  );
}

export default Portfolio;