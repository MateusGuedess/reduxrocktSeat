import React from 'react';

import Sidebar from './components/Sidebar'
import Video from './components/Video'

import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Video />
      <Sidebar />
    </div>
  );
}

export default App;
