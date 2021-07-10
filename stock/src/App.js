import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TickerData from './components/TickerData';
import Top from './components/Top'

function App() {
  return (
    <div className="App">
      <Top />
      <TickerData />
    </div>
  );
}

export default App;
