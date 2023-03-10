import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/filter/filter-selectors';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';

import SvgIconTrash from '../SvgIcon/SvgIconTrash';
import LoadingIndicator from 'shared/components/LoadingIndicator';
import styles from './ContactList.module.scss';

export default function ContactList() {
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loading, setLoading] = useState({});
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(fetchAllContacts());

    setLoadingContacts(false);
  }, [dispatch]);

  const handleDeleteContact = async contactId => {
    setLoading({ [contactId]: true });
    await dispatch(fetchDeleteContact(contactId));
    setLoading({ [contactId]: false });
  };

  return (
    <>
      {loadingContacts ? (
        <LoadingIndicator width="50" height="50" />
      ) : (
        <ul className={styles.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={styles.contactList__item}>
              <p className={styles.contactList__name}>{name}: </p>
              <p className={styles.contactList__number}>{number}</p>

              {!loading[id] ? (
                <button
                  className={styles.contactList__deleteBtn}
                  onClick={() => {
                    handleDeleteContact(id);
                  }}
                >
                  <SvgIconTrash id="trash" />
                </button>
              ) : (
                <div className={styles.loader}>
                  <LoadingIndicator width="16" height="16" />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
