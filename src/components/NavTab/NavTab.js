import './NavTab.css';

function NavTab() {
  return(
    <section className='navtab'>
      <div className='navtab__links'>
        <a href='#about-project' className='navtab__link'>О проекте</a>
        <a href='#techs' className='navtab__link'>Технологии</a>
        <a href='#about-me' className='navtab__link'>Студент</a>
      </div>
    </section>
  );
}

export default NavTab;
