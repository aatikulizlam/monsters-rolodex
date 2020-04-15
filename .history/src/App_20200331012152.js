import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Atikul'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello, {}
        </header>
      </div>
    );
  }
}

export default App;
