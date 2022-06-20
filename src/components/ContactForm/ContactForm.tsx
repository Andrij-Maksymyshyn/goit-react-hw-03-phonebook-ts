import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormBoxStyled,
  LabelStyled,
  ButtonStyled,
  InputStyled,
  ErrorText,
} from './ContactForm.styled';

export interface IValues {
  name: string,
  number: string,
  };

interface IProps {
  onSubmit: ({name, number}: IValues) => void
};

class ContactForm extends Component<IProps> {
  handleSubmit = (values: IValues, {resetForm}: {resetForm: () => void}) => {
    this.props.onSubmit(values);
    resetForm();
  };

  schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
  });

  render() {
    return (
      <>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={this.schema}
          onSubmit={this.handleSubmit}
        >
          <FormBoxStyled autoComplete="off">
            <LabelStyled>
              Name
              <InputStyled
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </LabelStyled>
            <ErrorMessage
              name="name"
              render={message => <ErrorText>{message}</ErrorText>}
            />

            <LabelStyled>
              Number
              <InputStyled
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </LabelStyled>
            <ErrorMessage
              name="number"
              render={message => <ErrorText>{message}</ErrorText>}
            />
            <ButtonStyled type="submit">Add contact</ButtonStyled>
          </FormBoxStyled>
        </Formik>
      </>
    );
  }
}

export default ContactForm;

