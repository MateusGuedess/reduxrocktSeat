import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form onSubmit={this.addTodo}>
        <input type="text" />
      </form>
    </div>
  );
}

export default App;
