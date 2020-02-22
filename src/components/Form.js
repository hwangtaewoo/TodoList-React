import React from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  display: flex;
`;

const CreateBtn = styled.div`
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 260px;
  flex: 1;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #ff476c;

  font-family: 'Roboto';
`;

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <FormStyle>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <CreateBtn onClick={onCreate}>&#43;</CreateBtn>
    </FormStyle>
  );
};

export default Form;
