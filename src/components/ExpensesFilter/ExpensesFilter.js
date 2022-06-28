import { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const changeHandler = (event) => {
    setSelectedFilter(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeHandler} value={selectedFilter}>
          <option value='2022'>
            2022
          </option>
          <option value='2021'>
            2021
          </option>
          <option value='2020'>
            2020
          </option>
          <option value='2019'>
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
