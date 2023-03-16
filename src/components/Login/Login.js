import './Login.css';

import loginLogoPath from '../../images/logo.svg'

import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';
import validator from 'validator';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    if (validator.isEmail(values.email)) {
      props.onLogin({ email: values.email, password: values.password });
      resetForm();
    }
  }

  return (
    <section className='login'>
      <div className='login__content'>
        <Link to='/'><img className='login__logo' alt='Логотип' src={loginLogoPath} /></Link>
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
              onChange={handleChange}
              value={values.email || ''}
            />
            <p className='login__input-error'>{errors.email === '' ? ((!validator.isEmail(values.email) ? 'Email невалиден' : '')) : errors.email}</p>
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
              onChange={handleChange}
              value={values.password || ''}
            />
            <p className='login__input-error'>{errors.password}</p>
          </div>
          <p className='login__error'>{props.error}</p>
          <button type="submit" className={`login__submit-button${!(isValid && validator.isEmail(values.email)) ? ' login__submit-button_disabled' : ''}`} disabled={!isValid}>Войти</button>
          <Link to="/signup" className="login__button">Ещё не зарегистрированы? Регистрация</Link>
        </form>
      </div>
    </section>
  );
}

export default Login;