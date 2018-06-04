import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super() 
    this.state = {
      title: '',
      body: ''
    }
    this.upDateTitle = this.upDateTitle.bind(this);
    this.upDateBody = this.upDateBody.bind(this);
    this.addcard = this.addCard.bind(this)
  }

  upDateTitle(event) { 
    this.setState(
     {title: event.target.value}
      )
  }

  upDateBody(event) {
    this.setState(
    {body: event.target.value}
      )
  }

  addCard(event) {
    event.preventDefault();
    
    console.log('hi')

  }


  render() {
    return (
      <div>
        <form>
          <input 
            type='text' 
            placeholder='Enter title here'
            value={this.state.title} 
            onChange={this.upDateTitle} 
          />
          <input 
            type='text' 
            placeholder='Enter idea here'
            value={this.state.body}
            onChange={this.upDateBody}
            />
          <button
          onClick={this.addCard}>Add to list</button>
        </form>
      </div>
      )
  }
  

}