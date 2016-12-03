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
      inputValue: '',
      todos: [],
      completedIndexes: []
    }
  }

  handleClick(e) {
    this.setState({
      todos: [
        ...this.state.todos,
        this.state.inputValue
      ],
      inputValue: ''
    })
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value})
  }

  handleTodoItemClick(index, e) {
    if (this.state.completedIndexes.includes(index)) {
      this.setState({
        completedIndexes: this.state.completedIndexes.filter(
          element => index !== element
        )
      })
    } else {
      this.setState({
        completedIndexes: [
          ...this.state.completedIndexes,
          index
        ]
      })
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
