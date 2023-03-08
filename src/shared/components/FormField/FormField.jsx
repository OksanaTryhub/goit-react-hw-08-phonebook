import { useMemo } from 'react';
import shortid from 'shortid';

import styles from './FormField.module.scss';

const FormField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => shortid(), []);

  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}

        <input
          id={id}
          onChange={handleChange}
          {...props}
          className={styles.field}
        />
      </label>
    </>
  );
};

export default FormField;
