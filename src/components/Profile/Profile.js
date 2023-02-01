import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <div className='profile__content'>
        <h1 className='profile__header'>Привет, Виталий!</h1>
        <form method='get' name='profile-form' className='profile__form' noValidate>
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
              placeholder="Виталий"
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
              placeholder="pochta@mail.ru"
            />
          </div>
          <p className='profile__input-error'></p>
          <button type="submit" className="profile__submit-button">Редактировать</button>
          <button type="button" className="profile__button">Выйти из аккаунта</button>
        </form>
      </div>
    </section>
  );
}

export default Profile;