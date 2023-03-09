import { Link } from 'react-router-dom';

import UseForm from 'shared/hooks/useForm';
import initialState from './initialState';
import FormField from 'shared/components/FormField/FormField';
import fields from './fields';
import Button from 'shared/components/Button/Button';

import styles from './LoginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = UseForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.title_wrapper}>
        <h2>Enter your account</h2>
        <div className={styles.wrapper}>
          <p>No account yet? &nbsp;</p>
          <Link to="/register" className={styles.link}>
            Sign up
          </Link>
        </div>
      </div>
      <FormField value={email} handleChange={handleChange} {...fields.email} />
      <FormField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button> Sign in </Button>
    </form>
  );
};

export default LoginForm;
