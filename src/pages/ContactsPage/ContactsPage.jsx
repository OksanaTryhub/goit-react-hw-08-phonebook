import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ContactList from 'components/ContactList/ContactList';
import Button from 'shared/components/Button/Button';

import styles from './ContactsPage.module.scss';
const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.btn_wrapper}>
        <Link to="add-contact" className={styles.link}>
          <Button className={styles.button}>Add contact</Button>
        </Link>
        <Link to="filter" className={styles.link}>
          <Button className={styles.btn}>Find contact</Button>
        </Link>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>

      <h1 className={styles.title}>Contacts</h1>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
