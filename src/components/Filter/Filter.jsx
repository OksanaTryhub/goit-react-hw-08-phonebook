import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from './../redux/filter/filter-selectors';
import { setFilter } from 'components/redux/filter/filter-slice';

import styles from './Filter.module.scss';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label className={styles.filter__label}>
      Find contacts by name
      <input
        className={styles.filter__input}
        type="text"
        value={filter}
        placeholder={'Enter name'}
        onChange={changeFilter}
      ></input>
    </label>
  );
}
