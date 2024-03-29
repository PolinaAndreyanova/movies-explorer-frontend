import { useEffect } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  function handleChange(e) {
    props.onChecked(e.target.checked, props.isSaved);
  }

  useEffect(() => {
    if (!props.isSaved) {
      if (props.isChecked) {
        document.querySelector('.filter-checkbox__switch').checked = true;
      }
    }
  }, []);

  return (
    <section className='filter-checkbox'>
      <div className='filter-checkbox__checkbox'>
        <input type="checkbox" className='filter-checkbox__switch' onChange={handleChange} />
      </div>
      <p className='filter-checkbox__description'>Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;