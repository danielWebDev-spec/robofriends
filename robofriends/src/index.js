import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers/reducers';

const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
