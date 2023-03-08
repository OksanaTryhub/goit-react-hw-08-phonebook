import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'components/redux/filter/filter-selectors';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'components/redux/contacts/contacts-operations';

import SvgIconTrash from '../SvgIcon/SvgIconTrash';
import { Oval } from 'react-loader-spinner';
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
        <Oval
          height="50"
          width="50"
          color="#ffa229"
          secondaryColor="#ffa229"
          strokeWidth={6}
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <ul className={styles.contactList}>
          {filteredContacts.map(({ id, name, phone }) => (
            <li key={id} className={styles.contactList__item}>
              <p className={styles.contactList__name}>{name}: </p>
              <p className={styles.contactList__number}>{phone}</p>

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
                  <Oval
                    height="16"
                    width="16"
                    color="#ffa229"
                    secondaryColor="#ffa229"
                    strokeWidth={6}
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
