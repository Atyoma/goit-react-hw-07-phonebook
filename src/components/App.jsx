
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { FormBox, Phonebook } from './ContactForm/ContactForm.styled';
import { ContactListContainer } from './ContactList/ContactList.styled';

export default function App() {

  return (
    <Phonebook>
      <FormBox>
        <h1>Phonebook</h1>
        <ContactForm />
      </FormBox>
      <ContactListContainer>
        <Filter />
          <ContactList />
      </ContactListContainer>
    </Phonebook>
  );
}

