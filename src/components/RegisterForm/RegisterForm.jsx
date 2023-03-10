import { useState } from 'react';
import { Link } from 'react-router-dom';

import UseForm from 'shared/hooks/useForm';
import initialState from './initialState';
import FormField from 'shared/components/FormField/FormField';
import fields from './fields';
import Button from 'shared/components/Button/Button';

import SvgIconEye from './../../components/SvgIcon/SvgIconEye';
import SvgIconEyeOff from 'components/SvgIcon/SvgIconEyeOff';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = UseForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  const [isIconVisible, setIsIconVisible] = useState(true);

  const toggleIcons = () => {
    setIsIconVisible(!isIconVisible);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.title_wrapper}>
        <h2>Create account</h2>
        <div className={styles.wrapper}>
          <p>Already have an account? &nbsp;</p>

          <Link to="/login" className={styles.link}>
            Sign in
          </Link>
        </div>
      </div>

      <FormField value={name} handleChange={handleChange} {...fields.name} />
      <FormField value={email} handleChange={handleChange} {...fields.email} />
      <div className={styles.iconInput_wrap}>
        <FormField
          type={isIconVisible ? 'password' : 'text'}
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
        <span className={styles.icon_wrap} onClick={toggleIcons}>
          {isIconVisible ? (
            <SvgIconEye id="eye" />
          ) : (
            <SvgIconEyeOff id="eye-off" />
          )}
        </span>
      </div>

      <Button> Create account </Button>
    </form>
  );
};

export default RegisterForm;
