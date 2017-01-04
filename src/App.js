import React, { Component } from 'react';

const InputField = (props) => {
  return (
    <input type="text" />
  )
}

const Button = (props) => {
  return (
    <button>Go</button>
  )
}

const List = (props) => {
  console.log(props)
  return (
    <ul>
      {props.todos.map(todo => {
        return <li key={todo.id}>{todo.name}</li>
      })}
    </ul>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 0, name: 'foo'},
        {id: 1, name: 'bar'},
        {id: 2, name: 'baz'}
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
