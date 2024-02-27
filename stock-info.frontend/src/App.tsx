import React from 'react';
import logo from './logo.svg';
import {Card} from './Components/Cards/Card';
import './App.css';
import CardList from './Components/CardList/CardList';

function App() {
  return (
    <div className="App bg-white">
      <header className="bg-green-200">
        <CardList/>
      </header>
    </div>
  );
}

export default App;
