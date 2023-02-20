import './Header.css';

import headerLogoPath from '../../images/logo.svg';
import headerAccountIconPath from '../../images/header-account-icon.svg';

import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const { pathname } = useLocation();

  return (
    <header className='header' style={pathname === '/' ? { backgroundColor: "#F3C1F8" } : { backgroundColor: "white" }}>
      <Link to='/'><img src={headerLogoPath} alt="Логотип" className="header__logo" /></Link>
      <div className='header__navigation'>
        <div className='header__film-pages-navigation'>
          {props.loggedIn &&
            <>
              <Link to="/movies" className='header__films-button'>Фильмы</Link>
              <Link to='/saved-movies' className='header__saved-films-button'>Сохранённые фильмы</Link>
            </>
          }
        </div>
        <div className='header__user-pages-navigation'>
          {props.loggedIn ?
            <>
              <div className='header__account-link'>
                <Link to='/profile' className='header__account-link-button'>Аккаунт</Link>
                <img src={headerAccountIconPath} alt='Иконка' className='header__account-link-icon' />
              </div>
              <div className="header__hamburger-lines" onClick={props.onMenuClick} >
                <span className="header__hamburger-line"></span>
                <span className="header__hamburger-line"></span>
                <span className="header__hamburger-line"></span>
              </div>
            </> :
            <>
              <Link to='/signup' className='header__registration-button'>Регистрация</Link>
              <Link to='/signin' className='header__enter-button'>Войти</Link>
            </>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
