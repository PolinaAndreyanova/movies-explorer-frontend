import './Promo.css';

import promoLogoPath from '../../images/promo-logo.svg'

function Promo() {
  return(
    <section className='promo'>
      <img className='promo__logo' alt='Логотип' src={promoLogoPath}/>
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;