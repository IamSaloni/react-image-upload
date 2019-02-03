import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './Components/Upload'
import Names from './Components/Names'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Upload />
        <Names />
      </div>
    );
  }
}

export default App;
