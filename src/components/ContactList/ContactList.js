import {
  ListItem,
  NumberOrder,
  Number,
  DeleteContact,
} from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactSlice';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [onDelete, { isLoading: isDeleting }] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.value);

  const getFilteredContacts = () => {
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {isFetching && <h3>Loading...</h3>}
      {contacts && (
        <ul>
          {filteredContacts.map((contact, index) => (
            <ListItem key={index}>
              <NumberOrder>{index + 1}</NumberOrder>
              {contact.name}: <Number>{contact.phone}</Number>
              <DeleteContact
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting' : 'Delete'}
              </DeleteContact>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
