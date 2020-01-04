import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import Scroll from './components/Scroll/Scroll';

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
  }

  onSearchChange = event => {
    // console.log(event.target.value);
    this.setState({
      searchfield: event.target.value
    })
  }

  render(){

    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(
        searchfield.toLowerCase()
      )
    })

    return !robots.length ?
      <h1>Loading</h1> :
       (
        <div className="tc">
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots = {filteredRobots} />
          </Scroll>
        </div>
      );
    
  }
}

export default App;
