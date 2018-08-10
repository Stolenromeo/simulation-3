import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
