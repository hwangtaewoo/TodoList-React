import React from "react";
import styled from "styled-components";

const TodoList = styled.div`
  width: 48%;
  margin: 0 auto;
  margin-top: 4rem;

  box-shadow: 0 3px 6px gray, 0 3px 6px gray;
  border-radius: 20px 20px 20px 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Template = ({ form, children }) => {
  return (
    <TodoList>
      <FormWrapper>{form}</FormWrapper>
      {children} 
    </TodoList>
  );
};

export default Template;
