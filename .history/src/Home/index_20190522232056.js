import React, { Component } from 'react';

export default class home extends Component {

  addTodo = e => {
    e.preventDefault()
    console.log(e.target.value)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addTodo}>   
          <input type="text" />
        </form>
      </div>
    )
  }
}