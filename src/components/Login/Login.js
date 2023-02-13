import './Login.css';

import loginLogoPath from '../../images/logo.svg'

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onLogin({ email, password });
  }

  return (
    <section className='login'>
      <div className='login__content'>
        <img className='login__logo' alt='Логотип' src={loginLogoPath} />
        <h1 className='login__header'>Рады видеть!</h1>
        <form method='get' name='login-form' className='login__form' noValidate onSubmit={handleSubmit}>
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
              onChange={handleChangeEmail}
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
              onChange={handleChangePassword}
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