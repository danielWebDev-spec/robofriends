import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Card from './components/Card/Card';
import { robots } from './components/Robots/Robots';

class App extends Component {
  render(){
    return (
      <div>
        <Card 
          key={robots[0].id}
          name={robots[0].name}
          email={robots[0].email}
        />
      </div>
    )
  }
}

export default App;
