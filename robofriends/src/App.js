import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CardList from './components/CardList/CardList';
import { robots } from './components/Robots/Robots';

class App extends Component {
  render(){
    return (
      <div>
        <CardList robots = {robots} />
      </div>
    )
  }
}

export default App;
