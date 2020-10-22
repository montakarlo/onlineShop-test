import React, { useState } from 'react';
import styles from './styles.module.sass';
import { filters } from '../../data/filters';
import { Button } from '../../components/Button';

export const Filter = ({ onFilter, fetchAllData }) => {
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (e) => {
    const copiedInputs = [...inputs];
    const { target } = e;
    const { value } = target;
    if (target.checked) {
      copiedInputs.push(value);
      setInputs(copiedInputs);
    } else {
      setInputs(copiedInputs.filter((item) => item !== value));
    }
  };
  const clearInputs = () => document.getElementById('filterForm').reset();

  const show = () => {
    onFilter(inputs);
  };

  const clearFilter = () => {
    fetchAllData();
    clearInputs();
  };


  return (
    <div className={styles.filter}>
      <div className={styles.buttons}>
        <Button width onClick={show}>
          <p className={`${styles.buttons__item} ${styles.buttons__item_show}`}>Показать результат</p>
        </Button>
        <Button width inverted onClick={clearFilter}>
          <p className={`${styles.buttons__item} ${styles.buttons__item_clear}`}>Очистить фильтр</p>
        </Button>
      </div>
      <p className={styles.manufacturer}>Производитель</p>
      <form id="filterForm" className={styles.inputs}>
        {filters.manufacturers.map((item) => (
          <div className={styles.inputs__item} key={item.id}>
            <input
              id={item.id}
              type="checkbox"
              name={item.name}
              value={item.value}
              className={styles.input}
              onChange={handleInputChange}
            />
            <label className={styles.label} htmlFor={item.id}>
              {item.name}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};