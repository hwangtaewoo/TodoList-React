import React, { Component } from "react";
import Form from "./components/Form";
import Template from "./components/Template";
import FormItem from "./components/FormItem";

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "늦게 자고 일찍 일어나기", checked: true },
      { id: 1, text: "늦게 자고 늦게 일어나기", checked: false },
      { id: 2, text: "온종일 놀기", checked: false }
    ]
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };
  handleToggle = id => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
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
      handleRemove
    } = this;
    return (
      <Template
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <FormItem
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </Template>
    );
  }
}

export default App;
