import React, { Component } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

class TodoList extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <ListWrapper>{todoList}</ListWrapper>;
  }
}

export default TodoList;
