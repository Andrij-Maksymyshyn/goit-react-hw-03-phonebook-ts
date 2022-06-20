import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';
import { IValues } from '../ContactForm/ContactForm';


interface IState {
  contacts: { [key: string]: string }[],
  filter: string,
};


class App extends Component <{}, IState>{
  state = {
    contacts: [],
    filter: '',
  };

  addContactInfo = (personData : IValues) => {
    const { name, number } = personData;
    const normalizedNameContact = name.toLowerCase();
       
    const person = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.findContactName(normalizedNameContact)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, person],
        })); 
  };

  findContactName = (newNameData: string) => {
    const { contacts } = this.state;
    return contacts.find(({ name }: {name: string}) => name.toLowerCase() === newNameData);
  };

  changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact: IValues) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = (contactId: string) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');    

    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(_: any, prevState: IState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactInfo} />

        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>

            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              visibleContacts={this.getVisibleContacts()}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
      </Container>
    );
  }
}

export default App;
