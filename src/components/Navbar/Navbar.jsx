import { NavLink } from 'react-router-dom';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import SvgIconLogoBook from 'components/SvgIcon/SvgIconLogoBook';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <SvgIconLogoBook id="logo-book" />
      </NavLink>

      <NavbarAuth />
    </div>
  );
};

export default Navbar;
