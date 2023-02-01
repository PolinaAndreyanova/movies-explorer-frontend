import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <h1 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h1>
      <div className='footer__copyright'>
        <p className='footer__date'>&copy; 2023</p>
        <div className='footer__links'>
          <a className='footer__link' href='https://practicum.yandex.ru/' rel="noreferrer" target="_blank">Яндекс.Практикум</a>
          <a className='footer__link' href='https://github.com/' rel="noreferrer" target="_blank">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;