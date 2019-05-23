import React, { Component } from 'react';

export default class home extends Component {
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