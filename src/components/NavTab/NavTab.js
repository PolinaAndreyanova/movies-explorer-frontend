import './NavTab.css';

import { Link } from 'react-router-dom';

function NavTab() {
  return(
    <section className='navtab'>
      <div className='navtab__links'>
        <Link to='/' className='navtab__link'>О проекте</Link>
        <Link to='/' className='navtab__link'>Технологии</Link>
        <Link to='/' className='navtab__link'>Студент</Link>
      </div>
    </section>
  );
}

export default NavTab;
