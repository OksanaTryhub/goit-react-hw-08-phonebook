import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin } from 'redux/auth/auth-selector';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import SvgIconLogoBook from 'components/SvgIcon/SvgIconLogoBook';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const isUserLogin = useSelector(isLogin);
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <SvgIconLogoBook id="logo-book" />
      </NavLink>
      {!isUserLogin ? <NavbarAuth /> : <NavbarUser />}
    </div>
  );
};

export default Navbar;
