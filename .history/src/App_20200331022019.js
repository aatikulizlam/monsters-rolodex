import React, { Component } from 'react';
import './App.css';
import src from '*.bmp';

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
          
          Hello, { this.state.name }, Age is { this.state.age }
        </header>
      </div>
    );
  }
}

export default App;
