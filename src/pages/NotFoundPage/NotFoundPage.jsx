import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

import SvgIconError from 'components/SvgIcon/SvgIconError';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page not found</h1>
      <span className={styles.text}>
        <p>
          Oops... Looks like you've found a page that's not in the Phonebook
        </p>
        <p>
          You can go to the&nbsp;
          <Link to="/" className={styles.link}>
            main page
          </Link>
          &nbsp;or try to&nbsp;
          <Link to="/login" className={styles.link}>
            login
          </Link>
        </p>
      </span>

      <SvgIconError id="error" />
    </div>
  );
};

export default NotFoundPage;
