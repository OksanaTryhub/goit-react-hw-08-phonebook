import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAddContact } from 'redux/contacts/contacts-operations';
import { getAllContacts } from 'redux/contacts/contacts-selectors';

import { contactExistMessage } from 'utils/warningMessage';
import { Oval } from 'react-loader-spinner';
import styles from './Form.module.scss';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const isDublicate = name => {
    const normalizedNewContactName = name.toLocaleLowerCase();

    const result = contacts.items.find(({ name }) => {
      return name.toLocaleLowerCase() === normalizedNewContactName;
    });

    return Boolean(result);
  };

  const handleAddContact = async ({ name, number }) => {
    setLoading(true);
    if (isDublicate(name)) {
      setWarning(true);
      setLoading(false);
      contactExistMessage(name);
      return;
    }
    await dispatch(fetchAddContact({ name, number }));
    setWarning(false);
    resetForm();
    setLoading(false);
    console.log(warning);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit = handleAddContact({ name, number });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.contactForm__label}>
        Name
        <input
          className={styles.contactForm__input}
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.contactForm__label}>
        Number
        <input
          className={styles.contactForm__input}
          type="tel"
          name="number"
          autoComplete="off"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className={styles.contactForm__btn}>
        {loading ? (
          <Oval
            className={styles.loader}
            height="20"
            width="20"
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
          'Add contact'
        )}
      </button>
    </form>
  );
}
