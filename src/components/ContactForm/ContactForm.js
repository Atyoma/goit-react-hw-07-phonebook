import { useState } from 'react';
import { InputItem, AddContact } from './ContactForm.styled';
import { Formik, Form } from 'formik';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from '../../redux/contactSlice';

export default function ContactForm() {
  const [name] = useState('');
  const [phone] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const matchСheck = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    createContact(data);
  };

  const onSubmit = (values, action) => {
    matchСheck(values);
    action.resetForm();
  };
  return (
    <Formik initialValues={{ name, phone }} onSubmit={onSubmit}>
      <Form>
        <label>
          Name
          <InputItem
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <InputItem
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <AddContact type="submit" disabled={isLoading}>
          Add contact
        </AddContact>
      </Form>
    </Formik>
  );
}
