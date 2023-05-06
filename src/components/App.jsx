import css from './Phonebook.module.css'
import shortid from 'shortid';
import { ContactForm } from './ContactForm';
import { Component } from 'react';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {

    if (
      this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevContact => ({
        contacts: [
          ...prevContact.contacts,
          { id: shortid(), name: name, number: number },
        ],
      }))
    };
  }
  render() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit = {this.formSubmitHandler }
      />
{/*
  <h2>Contacts</h2>
      <Filter
        title='' />
      <ContactList
        title='' /> */}
    </div>
  );

}
  };
