import { Link } from 'react-router-dom';
import './Navigation.css';
import navigationAccountIconPath from '../../images/header-account-icon.svg';

function Navigation(props) {
  return (
    <section className={`navigation${props.isOpen ? ' navigation_opened' : ''}`}>
      <div className='navigation__content'>
        <button type='button' className='navigation__button' onClick={props.onClose}></button>
        <div className='navigation__links'>
          <Link to='/' className='navigation__link' onClick={props.onClose}>Главная</Link>
          <Link to='/movies' className='navigation__link' onClick={props.onClose}>Фильмы</Link>
          <Link to='/saved-movies' className='navigation__link' onClick={props.onClose}>Сохранённые фильмы</Link>
          <div className='navigation__account-link'>
            <Link to='/profile' className='navigation__account-link-button' onClick={props.onClose}>Аккаунт</Link>
            <img src={navigationAccountIconPath} alt='Иконка' className='navigation__account-link-icon' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;