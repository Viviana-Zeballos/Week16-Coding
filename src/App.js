import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Components/Header'
import Journal from './Components/Journal';

function App() {
  return (
    <div className="App">
      <Header />
      <Journal />
      
    </div>
  );
}

export default App;
