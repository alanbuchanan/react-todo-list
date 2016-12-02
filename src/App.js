import React, { Component } from 'react';

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
        Hello, World!
      </div>
    );
  }
}

export default App;
