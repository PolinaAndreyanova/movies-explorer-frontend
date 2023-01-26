import './Header.css';

import headerLogoPath from '../../images/logo.svg'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <img src={headerLogoPath} alt="Логотип" className="header__logo" />
      <div className='header__navigation'>
        <Link to='/signup' className='header__registration-button'>Регистрация</Link>
        <Link to='/signin' className='header__enter-button'>Войти</Link>
      </div>
    </header>
  );
}

export default Header;
