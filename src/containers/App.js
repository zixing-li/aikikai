import React, { Component } from 'react';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;