import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { requestRobots, searchRobots } from "./reducers/reducers";

const logger = createLogger();

const rootReducer = combineReducers({
  requestRobots, searchRobots
})
const store = 
  createStore(rootReducer, applyMiddleware(
    thunk,
    logger
  ));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
