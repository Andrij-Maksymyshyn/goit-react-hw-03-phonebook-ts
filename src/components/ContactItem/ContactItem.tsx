import { LiContact, ButtonDelete } from './ContactItem.styled';

interface IProps {
  name: string,
  number: string,
  onDeleteContact: (contactId: string) => void,
};

const ContactItem = ({ name, number, onDeleteContact }: IProps) => (
  <LiContact>
    {name}: {number}
    <ButtonDelete type="button" onClick={onDeleteContact}>
      Delete
    </ButtonDelete>
  </LiContact>
);

export default ContactItem;

