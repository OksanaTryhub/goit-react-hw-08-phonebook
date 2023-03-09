import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from 'redux/auth/auth-operations';

import UserRoutes from 'components/UserRoutes';
import Navbar from 'components/Navbar/Navbar';

import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={styles.phonebook}>
      <Navbar />
      <UserRoutes />
    </div>
  );
};

export default App;
