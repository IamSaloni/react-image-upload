import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './Components/Upload'
import Name from './Components/Name'
import Kitty from './Components/Kitty'



const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Upload />
        <Name />
        <Kitty author={comment.author}
              text={comment.text}
              date={comment.date}/>
        
        </div>
    );
  }
}

export default App;
