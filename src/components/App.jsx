import css from './Phonebook.module.css'
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';


export const App = () => {

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm title=''
      />
{/* 
  <h2>Contacts</h2>
      <Filter
        title='' />
      <ContactList
        title='' /> */}
    </div>
  );
};
