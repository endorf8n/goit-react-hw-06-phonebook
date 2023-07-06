import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ListStyled } from './contactListstyled';
import { useSelector } from 'react-redux';
import { selectContatcs, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContatcs);
  const filter = useSelector(selectFilter);

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredContact();

  return (
    <ListStyled>
      {filteredContacts.map((contact, index) => {
        return <ContactListItem {...contact} key={contact.id} index={index} />;
      })}
    </ListStyled>
  );
};
