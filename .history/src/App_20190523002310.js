import React from 'react';

import Sidebar from './components/Sidebar'
import Video from './components/Video'

import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider >
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
