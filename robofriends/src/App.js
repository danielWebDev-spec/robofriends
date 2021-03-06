import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import Scroll from './components/Scroll/Scroll';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import { setSearchField, requestRobots } from './actions/actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    })
  }

  render(){

    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return isPending ?
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
