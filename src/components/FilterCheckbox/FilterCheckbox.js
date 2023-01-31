import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <section className='filter-checkbox'>
      <div className='filter-checkbox__checkbox'>
        <input type="checkbox" className='filter-checkbox__switch'/>
      </div>
      <p className='filter-checkbox__description'>Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;