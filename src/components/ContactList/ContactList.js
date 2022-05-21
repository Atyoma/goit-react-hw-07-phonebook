import {
  ListItem,
  NumberOrder,
  Number,
  DeleteContact,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const onDelete = name => dispatch(deleteContact(name));

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {filteredContacts.map((contact, index) => (
        <ListItem key={index}>
          <NumberOrder>{index + 1}</NumberOrder>
          {contact.name}: <Number>{contact.number}</Number>
          <DeleteContact type="button" onClick={() => onDelete(contact.name)}>
            Delete
          </DeleteContact>
        </ListItem>
      ))}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
