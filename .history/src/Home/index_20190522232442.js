import React, { Component } from 'react';

export default class home extends Component {

  state = {
    todo: 'texto'
  }

  addTodo = e => {
    e.preventDefault()
    console.log(e.target)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addTodo}>   
          <input type="text"  ref={el => (this.setState({todo: el}))}/>
        </form>
      </div>
    )
  }
}