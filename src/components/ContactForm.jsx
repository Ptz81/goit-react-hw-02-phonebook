import { Component } from "react";

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = e => {

    console.log(e.currentTarget.value)
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.reset();
  }

  reset = () => {
    this.setState ({name: '', contacts: []})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          Name
           <input
          type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>

      <input type="submit" value='Add contact'/>
      </form>
    )
  }

}
