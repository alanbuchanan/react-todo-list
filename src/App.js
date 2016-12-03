import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foo: 'bar'
    }
  }

  handleClick() {
    this.setState({
      foo: 'something else'
    })
  }

  render() {
    return (
      <div className="App" onClick={this.handleClick.bind(this)}>
        {this.state.foo}
      </div>
    );
  }
}

export default App;
