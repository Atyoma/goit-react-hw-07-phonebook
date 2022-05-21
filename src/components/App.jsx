
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { FormBox, Phonebook } from './ContactForm/ContactForm.styled';
import { ContactListBox } from './ContactList/ContactList.styled';

import { useSelector} from 'react-redux';


export default function App() {

  const contacts = useSelector(state => state.contacts.items)

  return (
    <Phonebook>
      <FormBox>
        <h1>Phonebook</h1>
        <ContactForm />
      </FormBox>
      <ContactListBox>
        <h2>Contact List</h2>
        <Filter />
        {contacts.length ? (
          <ContactList />
        ) : (
          <p>No any contacts</p>
        )}
      </ContactListBox>
    </Phonebook>
  );
}

