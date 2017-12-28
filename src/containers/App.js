import React, { Component } from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Landing/>
      </div>
    );
  }
}

export default App;