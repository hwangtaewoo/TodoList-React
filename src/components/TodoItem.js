import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const TodoItemWrapper = styled.div`
  padding-left: 1rem;
  width: 60%;
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  cursor: pointer;
  background-color: #4470ff;
  border-radius: 10px 10px 10px 10px;
`;

const TodoText = styled.span`
  flex: 1;
  word-break: break-all;
  color: white;

  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
      text-decoration-color: #495057;
      opacity: 0.7;
    `}
`;

const Remove = styled.div`
  margin-right: 1.5rem;
  color: #e64980;
  font-size: 2rem;
`;

class TodoItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <TodoItemWrapper onClick={() => onToggle(id)}>
        <TodoText checked={checked}>
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
      </TodoItemWrapper>
    );
  }
}

export default TodoItem;
