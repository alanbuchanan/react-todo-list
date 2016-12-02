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
      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
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
        'baz'
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <InputField />
        <InputButton />
        <TodoList />
      </div>
    );
  }
}

export default App;
