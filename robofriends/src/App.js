import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

import { robots } from './components/Robots/Robots';

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchChange = event => {
    // console.log(event.target.value);
    this.setState({
      searchfield: event.target.value
    })
  }

  render(){

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(
        this.state.searchfield.toLowerCase()
      )
    })

    return (
      <div className="tc">
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots = {filteredRobots} />
      </div>
    )
  }
}

export default App;
