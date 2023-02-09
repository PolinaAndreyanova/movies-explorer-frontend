import './NotFoundPage.css';

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return(
    <section className='not-found-page'>
      <h1 className='not-found-page__header'>404</h1>
      <p className='not-found-page__description'>Страница не найдена</p>
      <Link to='/' className='not-found-page__button'>Назад</Link>
    </section>
  );
}

export default NotFoundPage;