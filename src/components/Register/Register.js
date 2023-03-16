import './Register.css';

import registerLogoPath from '../../images/logo.svg'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFormWithValidation } from '../../utils/Validation';
import validator from 'validator';

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    if (validator.isEmail(values.email)) {
      props.onRegister({ name: values.name, email: values.email, password: values.password });
      resetForm();
    } 
  }

  return (
    <section className='register'>
      <div className='register__content'>
        <Link to='/'><img className='register__logo' alt='Логотип' src={registerLogoPath} /></Link>
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
              onChange={handleChange}
              value={values.name || ''}
            />
            <p className='register__input-error'>{errors.name}</p>
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
              onChange={handleChange}
              value={values.email || ''}
            />
            <p className='register__input-error'>{errors.email === '' ? ((!validator.isEmail(values.email) ? 'Email невалиден' : '')) : errors.email}</p>
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
              onChange={handleChange}
              value={values.password || ''}
            />
            <p className='register__input-error'>{errors.password}</p>
          </div>
          <p className='register__error'>{props.error}</p>
          <button type="submit" className={`register__submit-button${!(isValid && validator.isEmail(values.email)) ? ' register__submit-button_disabled' : ''}`} disabled={!isValid}>Зарегистрироваться</button>
          <Link to="/signin" className="register__button">Уже зарегистрированы? Войти</Link>
        </form>
      </div>
    </section>
  );
}

export default Register;