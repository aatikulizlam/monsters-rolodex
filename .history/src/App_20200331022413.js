import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Atikul Islam',
      age: 37
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>Hello, { this.state.name }, Age is { this.state.age }</p>
          <button onClick={() => this.setState({ name: })}
        </header>
      </div>
    );
  }
}

export default App;
