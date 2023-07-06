import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppWrapper, TitleApp, TitleContacts } from './app.styled';
import { selectContatcs } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContatcs);

  const countTotalContacts = () => {
    return contacts.length;
  };

  const total = countTotalContacts();

  return (
    <AppWrapper>
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>

      {total === 0 ? (
        'There is no contacts in your phonebook!'
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </AppWrapper>
  );
};
