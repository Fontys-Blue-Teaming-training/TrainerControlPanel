import React from 'react';
import './App.css';
import WebSocketClient from './service/WebSocketClient';
import ControlPanel from './components/control-panel/ControlPanel';

function App() {
  return (
    <div className="App">
      <WebSocketClient />
      <ControlPanel />
    </div>
  );
}

export default App;
