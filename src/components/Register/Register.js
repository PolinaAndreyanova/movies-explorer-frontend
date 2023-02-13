import './Register.css';

import registerLogoPath from '../../images/logo.svg'

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register(props) {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister({ name, email, password });
  }

  return (
    <section className='register'>
      <div className='register__content'>
        <img className='register__logo' alt='Логотип' src={registerLogoPath} />
        <h1 className='register__header'>Добро пожаловать!</h1>
        <form method='get' name='register-form' className='register__form' noValidate onSubmit={handleSubmit}>
          <div className='register__input-content'>
            <label className='register__input-name'>Имя</label>
            <input
              required
              id="name-input"
              type="name"
              className="register__input register__input_type_name"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Виталий"
              onChange={handleChangeName}
            />
            <p className='register__input-error'></p>
          </div>

          <div className='register__input-content'>
            <label className='register__input-name'>E-mail</label>
            <input
              required
              id="email-input"
              type="email"
              className="register__input register__input_type_email"
              name="email"
              minLength="2"
              maxLength="40"
              placeholder="pochta@mail.ru"
              onChange={handleChangeEmail}
            />
            <p className='register__input-error'></p>
          </div>

          <div className='register__input-content'>
            <label className='register__input-name'>Пароль</label>
            <input
              required
              id="password-input"
              type="password"
              className="register__input register__input_type_password"
              name="password"
              minLength="2"
              maxLength="40"
              placeholder="••••"
              onChange={handleChangePassword}
            />
            <p className='register__input-error'></p>
          </div>
          <button type="submit" className="register__submit-button">Зарегистрироваться</button>
          <Link to="/signin" className="register__button">Уже зарегистрированы? Войти</Link>
        </form>
      </div>
    </section>
  );
}

export default Register;