import PropTypes from 'prop-types';
import { ContactItemStyled, DeleteBtnStyled } from './contactListItem.styled';

export const ContactListItem = ({ id, name, number, index, deleteContact }) => {
  return (
    <ContactItemStyled>
      {index + 1}. {name}: {number}
      <DeleteBtnStyled type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtnStyled>
    </ContactItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
