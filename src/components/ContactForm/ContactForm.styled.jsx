import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBoxStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-items: flex-start;
  width: 30%;
  border: 2px solid steelblue;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-flow: column wrap;
  font-weight: 500;
  font-size: 18px;
  margin: 15px;
  margin-bottom: 0;
`;

export const ButtonStyled = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  border-radius: 4px;
  background-color: transparent;
  border: 2px solid darkgray;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
`;

export const InputStyled = styled(Field)`
  border: 2px solid lightblue;
  margin-top: 10px;
`;

export const ErrorText = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: red;
  padding-left: 15px;
`;
