import React from 'react';
import './App.css';
import Count from './components/Count/Count';
import CountSetting from './components/Count/CountSetting';

function App() {
  return (
    <div className="App">
      <CountSetting />
      <Count />
    </div>
  );
}

export default App;
