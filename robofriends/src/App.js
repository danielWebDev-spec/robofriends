import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import Scroll from './components/Scroll/Scroll';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import { setSearchField } from './actions/actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: [],
    }
  }

  componentDidMount(){
    console.log(this.props.store)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    })
  }

  render(){

    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ?
      <h1>Loading</h1> :
       (
        <div className="tc">
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots = {filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
