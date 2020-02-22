import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const Template = styled.div`
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

class App extends Component {
  state = {
    input: '',
    todos: [
      { id: 0, text: '늦게 자고 일찍 일어나기', checked: true },
      { id: 1, text: '늦게 자고 늦게 일어나기', checked: false },
      { id: 2, text: '온종일 놀기', checked: false },
    ],
  };

  handleRemove = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }));
  };

  handleToggle = id => {
    // const { todos } = this.state;

    // const index = todos.findIndex(todo => todo.id === id);
    // const selected = todos[index];

    // const nextTodos = [...todos];

    // nextTodos[index] = {
    //   ...selected,
    //   checked: !selected.checked
    // };

    // this.setState({
    //   todos: nextTodos
    // });

    // 쨔잔!!!

    this.setState(state => ({
      todos: state.todos.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    }));
  };

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    this.setState(state => {
      const { todos, input } = state;

      return {
        input: '',
        todos: todos.concat({
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          text: input,
          checked: false,
        }),
      };
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;
    return (
      <Template>
        <FormWrapper>
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        </FormWrapper>
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </Template>
    );
  }
}

export default App;
