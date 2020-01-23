import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TickerSelector from './components/TickerSelector';

function App() {
  return (
    <div className="App">
      <h1>Stock Tracker App</h1>
      <TickerSelector />
    </div>
  );
}

export default App;
