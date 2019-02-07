import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './Components/Upload'
import Name from './Components/Name'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Upload />
        <Name />
        
       
      </div>
    );
  }
}

export default App;
