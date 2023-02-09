import './Login.css';

import loginLogoPath from '../../images/logo.svg'

import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='login'>
      <div className='login__content'>
        <img className='login__logo' alt='Логотип' src={loginLogoPath} />
        <h1 className='login__header'>Рады видеть!</h1>
        <form method='get' name='login-form' className='login__form' noValidate>
          <div className='login__input-content'>
            <label className='login__input-name'>E-mail</label>
            <input
              required
              id="email-input"
              type="email"
              className="login__input login__input_type_email"
              name="email"
              minLength="2"
              maxLength="40"
              placeholder="pochta@mail.ru"
            />
            <p className='login__input-error'></p>
          </div>

          <div className='login__input-content'>
            <label className='login__input-name'>Пароль</label>
            <input
              required
              id="password-input"
              type="password"
              className="login__input login__input_type_password"
              name="password"
              minLength="2"
              maxLength="40"
              placeholder="••••"
            />
            <p className='login__input-error'></p>
          </div>
          <button type="submit" className="login__submit-button">Войти</button>
          <Link to="/signup" className="login__button">Ещё не зарегистрированы? Регистрация</Link>
        </form>
      </div>
    </section>
  );
}

export default Login;