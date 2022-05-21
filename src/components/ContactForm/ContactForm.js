import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputItem, AddContact } from './ContactForm.styled';
import { Formik, Form } from 'formik';
import { addContact } from '../../redux/contactSlice';
export default function ContactForm() {
  const [name] = useState('');
  const [number] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const matchСheck = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    dispatch(addContact(data));
  };

  const onSubmit = (values, action) => {
    matchСheck(values);
    action.resetForm();
  };
  return (
    <Formik initialValues={{ name, number }} onSubmit={onSubmit}>
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
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <AddContact type="submit">Add contact</AddContact>
      </Form>
    </Formik>
  );
}
