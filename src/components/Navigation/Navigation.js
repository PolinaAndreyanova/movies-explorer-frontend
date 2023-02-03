import { Link } from 'react-router-dom';
import './Navigation.css';
import navigationAccountIconPath from '../../images/header-account-icon.svg';

function Navigation() {
  return (
    <section className='navigation'>
      <div className='navigation__content'>
        <button type='button' className='navigation__button'></button>
        <div className='navigation__links'>
          <Link to='/' className='navigation__link'>Главная</Link>
          <Link to='/movies' className='navigation__link'>Фильмы</Link>
          <Link to='/saved-movies' className='navigation__link'>Сохранённые фильмы</Link>
          <div className='navigation__account-link'>
            <Link to='/profile' className='navigation__account-link-button'>Аккаунт</Link>
            <img src={navigationAccountIconPath} alt='Иконка' className='navigation__account-link-icon' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;