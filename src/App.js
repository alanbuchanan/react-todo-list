import React, { Component } from 'react';

const InputField = (props) => {
  return (
    <input value={props.inputValue}
      onChange={props.handleChange}
      type="text"
    />
  )
}

const InputButton = (props) => {
  return (
    <button onClick={props.handleClick}>
      Add Todos
    </button>
  )
}

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) =>
        <li key={index}
          onClick={props.handleTodoItemClick.bind(this, index)}
          style={props.completedIndexes.includes(index)
          ? {
            textDecoration: 'line-through'
          }
          : {}}
        >
          {todo}
        </li>
      )}
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
        <InputField inputValue={this.state.inputValue}
          handleChange={this.handleChange.bind(this)}
        />
        <InputButton handleClick={this.handleClick.bind(this)}
        />
        <TodoList todos={this.state.todos}
          handleTodoItemClick={this.handleTodoItemClick.bind(this)}
          completedIndexes={this.state.completedIndexes}
        />
      </div>
    );
  }
}

export default App;
