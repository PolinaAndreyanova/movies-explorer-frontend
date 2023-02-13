import { useState, useContext} from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdate({ name, email });
  }

  return (
    <section className='profile'>
      <div className='profile__content'>
        <h1 className='profile__header'>Привет, {currentUser.name}!</h1>
        <form method='get' name='profile-form' className='profile__form' noValidate onSubmit={handleSubmit}>
          <div className='profile__input-content'>
            <label className='profile__input-name'>Имя</label>
            <input
              required
              id="name-input"
              type="name"
              className="profile__input profile__input_type_name"
              name="name"
              minLength="2"
              maxLength="40"
              defaultValue={currentUser.name}
              onChange={handleChangeName}
            />
          </div>
          <p className='profile__input-error'></p>
          <span className='profile__line'></span>
          <div className='profile__input-content'>
            <label className='profile__input-name'>E-mail</label>
            <input
              required
              id="email-input"
              type="email"
              className="profile__input profile__input_type_email"
              name="email"
              minLength="2"
              maxLength="40"
              defaultValue={currentUser.email}
              onChange={handleChangeEmail}
            />
          </div>
          <p className='profile__input-error'></p>
          <button type="submit" className="profile__submit-button">Редактировать</button>
          <button type="button" className="profile__button" onClick={props.logout}>Выйти из аккаунта</button>
        </form>
      </div>
    </section>
  );
}

export default Profile;