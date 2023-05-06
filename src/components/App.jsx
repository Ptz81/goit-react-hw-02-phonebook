import css from './Phonebook.module.css'
import { ContactForm } from './ContactForm';
import { Component } from 'react';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';


export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts} = this.state;
    // const newContact = { name, number };
  };

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
