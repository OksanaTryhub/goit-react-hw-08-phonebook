import { Link } from 'react-router-dom';
import SvgIconBook from '../../components/SvgIcon/SvgIconBook';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}> Phonebook</h1>
      <Link to="/register">
        <SvgIconBook id="book" />
      </Link>
      <h2> Welcome to Phonebook</h2>
      <p>You can save the contacts you need</p>
    </div>
  );
};

export default HomePage;
