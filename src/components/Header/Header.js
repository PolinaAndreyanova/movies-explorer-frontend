import './Header.css';

import headerLogoPath from '../../images/logo.svg';
import headerAccountIconPath from '../../images/header-account-icon.svg';

import { NavLink, Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className={`header${props.loggedIn ? ' header__type_login' : ''}`} style={!props.loggedIn ? { backgroundColor: "#F3C1F8" } : { backgroundColor: "white" }}>
      <img src={headerLogoPath} alt="Логотип" className="header__logo" />
      <div className='header__navigation'>
        {!props.loggedIn ?
          <>
            <Link to='/signup' className='header__registration-button'>Регистрация</Link>
            <Link to='/signin' className='header__enter-button'>Войти</Link>
          </> :
          <>
            <div className='header__films-navigation'>
              <NavLink to="/movies" className='header__films-button'>Фильмы</NavLink>
              <NavLink to='/saved-movies' className='header__saved-films-button'>Сохранённые фильмы</NavLink>
            </div>
            <Link to='/profile' className='header__account-button'>Аккаунт</Link>
            <img src={headerAccountIconPath} alt='Иконка' className='header__account-icon' />
          </>
        }
      </div>
    </header>
  );
}

export default Header;
