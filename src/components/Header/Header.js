import './Header.css';

import headerLogoPath from '../../images/header-logo.svg'

function Header() {
  return (
    <header className='header'>
      <img src={headerLogoPath} alt="Логотип" className="header__logo" />
      <div className='header__navigation'>
        <button type='button' className='header__registration-button'>Регистрация</button>
        <button type='button' className='header__enter-button'>Войти</button>
      </div>
    </header>
  );
}

export default Header;
