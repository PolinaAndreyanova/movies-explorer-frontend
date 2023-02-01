import './AboutProject.css';

function AboutProject() {
  return (
    <section id='about-project' className='about-project'>
      <h1 className='about-project__header'>О проекте</h1>
      <div className='about-project__two-columns'>
        <div className='about-project__info'>
          <h2 className='about-project__info-title'>Дипломный проект включал 5 этапов</h2>
          <p className='about-project__info-subtitle'>Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__info'>
          <h2 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h2>
          <p className='about-project__info-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__two-columns'>
        <div className='about-project__shema'>
          <h2 className='about-project__shema-title'>1 неделя</h2>
          <p className='about-project__shema-subtitle'>Back-end</p>
        </div>
        <div className='about-project__shema'>
          <h2 className='about-project__shema-title about-project__shema-title__type_light'>4 недели</h2>
          <p className='about-project__shema-subtitle'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
