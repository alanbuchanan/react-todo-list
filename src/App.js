import React, { Component } from 'react';

const InputField = (props) => {
  return (
    <input type="text"/>
  )
}

const Button = (props) => {
  return (
    <button>Add to list</button>
  )
}

const List = (props) => {
  console.log(props.todos)

  return (
    <ul>
      {props.todos.map(todo => {
        return <li>{todo}</li>
      })}
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
        <Button />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
