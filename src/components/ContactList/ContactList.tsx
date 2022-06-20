import ContactItem from '../ContactItem';
import { UlContacts } from './ContactList.styled';

interface IProps {
  visibleContacts: {[key: string]: string}[],
  onDeleteContact: (contactId: string) => void,
};

const ContactList = ({ visibleContacts, onDeleteContact }: IProps) => (
  <UlContacts>
    {visibleContacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}
      />
    ))}
  </UlContacts>
);

export default ContactList;

