import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

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

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(
        this.state.searchfield.toLowerCase()
      )
    })

    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots = {filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
