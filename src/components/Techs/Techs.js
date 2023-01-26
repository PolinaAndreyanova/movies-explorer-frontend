import './Techs.css';

function Techs() {
  return(
    <section className='techs'>
      <h1 className='techs__header'>Технологии</h1>
      <h2 className='techs__name'>7 технологий</h2>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии,
       которые применили в дипломном проекте.</p>
      <div className='techs__cards'>
        <p className='techs__card'>HTML</p>
        <p className='techs__card'>CSS</p>
        <p className='techs__card'>JS</p>
        <p className='techs__card'>React</p>
        <p className='techs__card'>Git</p>
        <p className='techs__card'>Express.js</p>
        <p className='techs__card'>mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;