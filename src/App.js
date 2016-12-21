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
      {props.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
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
