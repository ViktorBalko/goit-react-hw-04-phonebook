import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Don Worryngton', number: '559-22-55' },
    { id: 'id-2', name: 'C.C. Capwell', number: '113-19-12' },
    { id: 'id-3', name: 'Yokkalo Mikkalo', number: '945-97-79' },
    { id: 'id-4', name: 'Dominic Toretto', number: '459-12-56' },
    { id: 'id-5', name: 'JSON Statham', number: '443-89-12' },
    { id: 'id-6', name: 'Roger Abbit', number: '645-17-79' },
    { id: 'id-7', name: 'Heather Locklear', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const stringifiedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(stringifiedContacts);
      if (parsedContacts) {
        setContacts(parsedContacts);
      }
    } catch (error) {
      console.error('Error while reading contacts from local storage: ', error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const duplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const duplicateNumber = contacts.some(contact => contact.number === number);

    if (duplicateName || duplicateNumber) {
      alert(
        duplicateName
          ? `${name} is already in contacts`
          : `${number} is already in contacts`
      );
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const handleDeleteContact = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId));

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className="HomeworkTitle">React HW4 ~ Phonebook</h1>
      <div className="AppBox">
        <ContactForm onSubmit={handleAddContact} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
        <ContactFilter filter={filter} onChange={handleFilterChange} />
      </div>
    </>
  );
}

export default App;
