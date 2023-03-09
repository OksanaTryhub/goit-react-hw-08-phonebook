import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-operations';

import { Link } from 'react-router-dom';

import styles from './NavbarUser.module.scss';

const NavbarUser = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const { name } = useSelector(getUser);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Welcome, {name} </p>
      <Link className={styles.link} onClick={onLogout}>
        Log out
      </Link>
    </div>
  );
};

export default NavbarUser;
