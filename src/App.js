import React from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <div className="main-content">
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
