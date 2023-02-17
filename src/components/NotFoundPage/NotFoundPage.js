import './NotFoundPage.css';

function NotFoundPage(props) {
  return(
    <section className='not-found-page'>
      <h1 className='not-found-page__header'>404</h1>
      <p className='not-found-page__description'>Страница не найдена</p>
      <button type='button' className='not-found-page__button' onClick={props.goBack}>Назад</button>
    </section>
  );
}

export default NotFoundPage;