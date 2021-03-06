import React, { Component } from "react";
import "./TodoItem.css";
import styled from "styled-components";

const TodoItem = styled.div`
  padding-left: 1rem;
  width: 60%;
  display: flex;
  margin-left: 3.5rem;
  margin-bottom: 2.5%;
  align-items: center;
  cursor: pointer;
  background-color: #4470ff;
  border-radius: 10px 10px 10px 10px;
`;

const TodoText = styled.div`
  flex: 1;
  word-break: break-all;
  color: white;
`;

const Remove = styled.div`
  margin-right: 1.5rem;
  color: #e64980;
  font-size: 2rem;
`;

class Todo extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <>
        <TodoItem onClick={() => onToggle(id)}>
          <TodoText className={`todo-text ${checked && "checked"}`}>
            <div>{text}</div>
          </TodoText>
          <Remove
            onClick={e => {
              e.stopPropagation();
              onRemove(id);
            }}
          >
            &times;
          </Remove>
        </TodoItem>
        <TodoItem>
        </TodoItem>
      </>
    );
  }
}

export default Todo;
