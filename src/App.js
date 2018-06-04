import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import IdeaCard from './IdeaCard.js';
import IdeaContainer from './IdeaContainer.js';


class App extends Component {
  constructor() {
    super(); 
      this.state = {
        ideas: []
      }
  }

  render() {
    return (
      <div className="App">
        <h1>IDEABOX</h1>
        <Input title='' body=''/>
        <IdeaContainer />
      </div>
    );
  }
}

export default App;
