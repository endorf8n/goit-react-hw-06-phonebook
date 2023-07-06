import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ListStyled } from './contactListstyled';

export const ContactList = ({ contacts = [], deleteContact }) => {
  return (
    <ListStyled>
      {contacts.map((contact, index) => {
        return (
          <ContactListItem
            {...contact}
            key={contact.id}
            index={index}
            deleteContact={deleteContact}
          />
        );
      })}
    </ListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
