import React, { Component } from 'react';

const InputField = (props) => {
  return (
    <input type="text"/>
  )
}

const InputButton = (props) => {
  return (
    <button>Add Todo</button>
  )
}

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        'foo',
        'bar',
        'baz',
        'new todo'
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <InputField />
        <InputButton />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
