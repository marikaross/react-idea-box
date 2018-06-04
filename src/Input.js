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
    this.upDateTitle = this.upDateTitle.bind(this)
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
          onClick={this.submit}>Add to list</button>
        </form>
      </div>
      )
  }
  

}