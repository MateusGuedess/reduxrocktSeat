import React, { Component } from 'react';

export default class home extends Component {
  render() {
    return(
      <div>
        <form>   
        <input type={this.addTodo} />
        </form>
      </div>
    )
  }
}