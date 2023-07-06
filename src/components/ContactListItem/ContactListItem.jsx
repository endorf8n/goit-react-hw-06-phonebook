import PropTypes from 'prop-types';
import { ContactItemStyled, DeleteBtnStyled } from './contactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number, index }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      {index + 1}. {name}: {number}
      <DeleteBtnStyled
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
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
};
