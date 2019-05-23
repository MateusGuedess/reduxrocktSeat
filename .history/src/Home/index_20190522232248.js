import React, { Component } from 'react';

export default class home extends Component {

  addTodo = e => {
    e.preventDefault()
    console.log(e.target.value)
  }

  render() {
    return(
      <div>  
          <input type="text"  onChange={ evt => this.addTodo(evt)}/>
      </div>
    )
  }
}