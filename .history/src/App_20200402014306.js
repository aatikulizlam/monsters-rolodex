import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Atikul',
      age: 37,
      monsters:[
        {name: 'Frankenstein'},
        {name: 'Dracula'},
        {name: 'zombie'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={ logo } className="App-logo" alt="logo" /> */}
          <p>Hello { this.state.name }, Age is { this.state.age }</p>
          <button onClick={() => this.setState({ name: 'Tani', age: 30})}> Change Text</button>

          this.state.monsters.map(monster => (
          <h1> {monster.name} </h1>
          ))
        </header>
      </div>
    );
  }
}

export default App;