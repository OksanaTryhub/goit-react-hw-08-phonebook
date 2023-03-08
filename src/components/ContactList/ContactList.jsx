import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'components/redux/filter/filter-selectors';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'components/redux/contacts/contacts-operations';

import SvgIcon from '../SvgIcon/SvgIcon';
import { Oval } from 'react-loader-spinner';
import css from './ContactList.module.css';

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
        <ul className={css.contactList}>
          {filteredContacts.map(({ id, name, phone }) => (
            <li key={id} className={css.contactList__item}>
              <p className={css.contactList__name}>{name}: </p>
              <p className={css.contactList__number}>{phone}</p>

              {!loading[id] ? (
                <button
                  className={css.contactList__deleteBtn}
                  onClick={() => {
                    handleDeleteContact(id);
                  }}
                >
                  <SvgIcon id="svg" />
                </button>
              ) : (
                <div className={css.loader}>
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
