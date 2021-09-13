import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebSocketClient from './service/WebSocketClient';

function App() {
  return (
    <div className="App">
      <WebSocketClient />
    </div>
  );
}

export default App;
