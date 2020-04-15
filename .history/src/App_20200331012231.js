import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Atikul Islam'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello, { this.state.name }
        </header>

        <header className="App-header">
          Hello, { this.state.name }
        </header>

        
      </div>
    );
  }
}

export default App;
