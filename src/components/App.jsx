import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppWrapper, TitleApp, TitleContacts } from './app.styled';
import { load } from 'utils/localStorage';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => load('contacts') ?? initialState
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: crypto.randomUUID(),
    };

    const isExist = contacts.find(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`"${name}" is already in contacts!`);
      return;
    }

    setContacts(prev => [...prev, contact]);
  };

  const countTotalContacts = () => {
    return contacts.length;
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = getFilteredContact();
  const total = countTotalContacts();

  return (
    <AppWrapper>
      <TitleApp>Phonebook</TitleApp>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>

      {total === 0 ? (
        'There is no contacts in your phonebook!'
      ) : (
        <>
          <Filter filter={filter} onFilter={onFilterChange} />
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </>
      )}
    </AppWrapper>
  );
};
