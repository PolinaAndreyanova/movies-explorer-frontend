import './AboutMe.css';

import aboutMeImagePath from '../../images/about-me-image.jpg';

function AboutMe() {
  return(
    <section className='about-me'>
      <h1 className='about-me__header'>Студент</h1>
      <img className='about-me__image' alt='Фотография' src={aboutMeImagePath}/>
      <h2 className='about-me__name'>Полина</h2>
      <p className='about-me__status'>Фронтенд-разработчик, 18 лет</p>
      <p className='about-me__description'>Я родилась и живу в Казани,
       учусь на факультете компьютерных технологий и защиты информации КАИ.</p>
      <a href='https://github.com/PolinaAndreyanova' className='about-me__github'>Github</a>
    </section>
  );
}

export default AboutMe;