import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  addTodo = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit={this.addTodo}>
        <input type="text" />
      </form>
    </div>
  );
}

export default App;
