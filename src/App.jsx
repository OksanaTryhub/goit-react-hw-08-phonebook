import UserRoutes from 'components/UserRoutes';
import Navbar from 'components/Navbar/Navbar';
import Form from './components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.phonebook}>
    <Navbar />
    <UserRoutes />

    {/* <h1 className={styles.phonebook__title}> Phonebook</h1> */}
    {/* <Form />
    <h2 className={styles.phonebook__subtitle}>Contacts</h2>
    <Filter />
    <ContactList /> */}
  </div>
);

export default App;
